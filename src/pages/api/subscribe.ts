import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

// Disable prerendering for this API route
export const prerender = false;

const BUTTONDOWN_API = 'https://api.buttondown.com/v1/subscribers';

// Buttondown es el que manda los correos. No se construye esto en casa: el
// problema no es enviar, es la entregabilidad (SPF/DKIM/DMARC, reputación de
// IP, warm-up de dominio) y el modo de falla es silencioso.
//
// La key se lee en cada petición y no al cargar el módulo. `import.meta.env` lo
// resuelve Vite en tiempo de BUILD: si la variable se da de alta en Vercel
// después de compilar, queda incrustado un `undefined` literal y el endpoint
// responde 503 hasta reconstruir sin caché. `process.env` la lee del entorno de
// ejecución, así que basta con guardarla en Vercel.
const getButtondownKey = (): string =>
  process.env.BUTTONDOWN_API_KEY ?? import.meta.env.BUTTONDOWN_API_KEY ?? '';

// Mismo Redis del contador de vistas — aquí solo se usa para rate limit.
const isRedisConfigured =
  import.meta.env.UPSTASH_REDIS_REST_URL &&
  import.meta.env.UPSTASH_REDIS_REST_TOKEN;

const redis = isRedisConfigured
  ? new Redis({
      url: import.meta.env.UPSTASH_REDIS_REST_URL,
      token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

const RATE_LIMIT_MAX = 5; // altas por IP…
const RATE_LIMIT_WINDOW = 3600; // …por hora

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

// Validación deliberadamente laxa: el opt-in por correo de Buttondown es el
// que confirma que la dirección existe de verdad. Un regex estricto solo
// rechaza direcciones válidas raras.
const looksLikeEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

/**
 * Lee el correo tanto de JSON como de un form-encoded, para que el formulario
 * siga funcionando si el JS no carga (progressive enhancement).
 * Devuelve también el honeypot.
 */
async function readPayload(request: Request) {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));
    return {
      email: String(body?.email ?? '').trim().toLowerCase(),
      source: String(body?.source ?? '').trim(),
      honeypot: String(body?.website ?? '').trim(),
    };
  }

  const form = await request.formData().catch(() => null);
  return {
    email: String(form?.get('email') ?? '').trim().toLowerCase(),
    source: String(form?.get('source') ?? '').trim(),
    honeypot: String(form?.get('website') ?? '').trim(),
  };
}

async function isRateLimited(ip: string): Promise<boolean> {
  if (!redis) return false; // sin Redis no se bloquea a nadie

  try {
    const key = `subscribe:rl:${ip}`;
    const hits = await redis.incr(key);
    if (hits === 1) await redis.expire(key, RATE_LIMIT_WINDOW);
    return hits > RATE_LIMIT_MAX;
  } catch (error) {
    // Si el rate limit falla, se deja pasar: perder una suscripción por un
    // error de Redis es peor que aceptar una de más.
    console.error('Error en rate limit de suscripción:', error);
    return false;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const { email, source, honeypot } = await readPayload(request);

  // Campo señuelo: es invisible en el formulario, así que solo lo llena un bot.
  // Se responde 200 a propósito para no darle señal de que fue detectado.
  if (honeypot) {
    return json({ ok: true, message: 'Listo, revisa tu correo.' });
  }

  if (!email) {
    return json({ ok: false, message: 'Falta el correo.' }, 400);
  }

  if (!looksLikeEmail(email)) {
    return json({ ok: false, message: 'Ese correo no se ve válido.' }, 400);
  }

  const ip =
    clientAddress ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';

  if (await isRateLimited(ip)) {
    return json(
      { ok: false, message: 'Demasiados intentos. Inténtalo en un rato.' },
      429,
    );
  }

  // A diferencia del contador de vistas, aquí NO se simula éxito cuando falta
  // la config: fingir que se guardó un correo que se tiró a la basura es la
  // peor falla posible de este endpoint.
  const apiKey = getButtondownKey();

  if (!apiKey) {
    console.error('BUTTONDOWN_API_KEY no está configurada');
    return json(
      { ok: false, message: 'La suscripción no está disponible ahora mismo.' },
      503,
    );
  }

  try {
    const response = await fetch(BUTTONDOWN_API, {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      // No se manda `type`: así gobierna la config de Buttondown y el doble
      // opt-in (recomendado) sigue aplicando.
      //
      // El origen del alta va en `notes` y no en `tags` a propósito: el
      // tagging de Buttondown es un add-on de $9/mes y en el plan gratuito
      // mandarlo puede tirar el alta entera. `notes` es campo del núcleo.
      // Si algún día se paga el add-on, aquí se agrega `tags: [source]`.
      body: JSON.stringify({
        email_address: email,
        notes: source ? `Alta desde: ${source}` : 'Alta desde: flino.dev',
      }),
    });

    if (response.ok) {
      return json({
        ok: true,
        message: 'Listo. Te llegó un correo para confirmar.',
      });
    }

    const detail = await response.text();

    // Ya estaba suscrito: no es un error para el visitante.
    if (response.status === 400 && /already|exists|duplicate/i.test(detail)) {
      return json({ ok: true, message: 'Ya estabas suscrito.' });
    }

    console.error('Buttondown respondió', response.status, detail);
    return json(
      { ok: false, message: 'No se pudo completar la suscripción.' },
      502,
    );
  } catch (error) {
    console.error('Error al suscribir:', error);
    return json(
      { ok: false, message: 'No se pudo completar la suscripción.' },
      502,
    );
  }
};

// Cualquier otro método: el endpoint solo acepta POST.
export const GET: APIRoute = () =>
  json({ ok: false, message: 'Método no permitido.' }, 405);
