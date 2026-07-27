import { createSignal } from 'solid-js';

interface SubscribeFormProps {
  /** De dónde vino el alta: article, 404, footer… Llega a Buttondown como tag. */
  source: string;
  title?: string;
  description?: string;
  /** Compacto para el 404 y el footer; con marco para el final de artículo. */
  variant?: 'card' | 'inline';
}

type Status = 'idle' | 'loading' | 'ok' | 'error';

export default function SubscribeForm(props: SubscribeFormProps) {
  const [email, setEmail] = createSignal('');
  const [status, setStatus] = createSignal<Status>('idle');
  const [message, setMessage] = createSignal('');

  const handleSubmit = async (event: SubmitEvent) => {
    // Si el JS cargó, se maneja aquí. Si no, el form hace POST nativo al
    // endpoint (feo pero funcional) gracias a action/method del <form>.
    event.preventDefault();

    if (status() === 'loading') return;

    setStatus('loading');
    setMessage('');

    const form = event.currentTarget as HTMLFormElement;
    const honeypot = String(new FormData(form).get('website') ?? '');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email(),
          source: props.source,
          website: honeypot,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (data?.ok) {
        setStatus('ok');
        setMessage(data.message ?? 'Listo. Revisa tu correo.');
        setEmail('');
        return;
      }

      setStatus('error');
      setMessage(data?.message ?? 'No se pudo completar la suscripción.');
    } catch {
      setStatus('error');
      setMessage('Hubo un problema de red. Inténtalo de nuevo.');
    }
  };

  const isCard = () => props.variant !== 'inline';

  return (
    <div
      class={
        isCard()
          ? 'mt-12 p-6 rounded-lg border border-black/15 dark:border-white/20 bg-black/[0.02] dark:bg-white/[0.03]'
          : 'mt-8'
      }
    >
      {/* El titular es una promesa de contenido, no una etiqueta: sin esto la
          caja se lee como el teaser de otro artículo hasta llegar al botón. */}
      <p class="font-brand text-xs uppercase tracking-[0.2em] opacity-50">
        Newsletter
      </p>

      <h2 class="mt-3 text-xl font-semibold text-black dark:text-white">
        {props.title ?? 'Un proyecto pequeño, construido y explicado'}
      </h2>

      <p class="mt-2 text-sm opacity-75">
        {props.description ??
          'Cada dos semanas: algo que construí, por qué lo decidí así y los números reales. Sin relleno, y te puedes dar de baja cuando quieras.'}
      </p>

      {status() === 'ok' ? (
        <p class="mt-4 text-sm font-medium text-black dark:text-white">
          {message()}
        </p>
      ) : (
        <form
          action="/api/subscribe"
          method="post"
          onSubmit={handleSubmit}
          class="mt-4 flex flex-col sm:flex-row gap-3"
        >
          {/* El endpoint espera el source también en el POST sin JS. */}
          <input type="hidden" name="source" value={props.source} />

          {/* Señuelo: invisible para personas, irresistible para bots. */}
          <div class="hidden" aria-hidden="true">
            <label>
              No llenes esto
              <input
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </label>
          </div>

          <label class="sr-only" for={`subscribe-email-${props.source}`}>
            Correo electrónico
          </label>
          <input
            id={`subscribe-email-${props.source}`}
            type="email"
            name="email"
            required
            autocomplete="email"
            placeholder="tu@correo.com"
            value={email()}
            onInput={(event) => setEmail(event.currentTarget.value)}
            disabled={status() === 'loading'}
            class="flex-1 py-3 px-4 rounded text-sm bg-white dark:bg-black border border-black/25 dark:border-white/25 text-black dark:text-white placeholder:opacity-50 focus:outline-none focus:border-black dark:focus:border-white transition-colors disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={status() === 'loading'}
            class="py-3 px-6 rounded text-sm font-medium whitespace-nowrap bg-black dark:bg-white text-white dark:text-black hover:opacity-75 transition-opacity disabled:opacity-50"
          >
            {status() === 'loading' ? 'Enviando…' : 'Suscribirme'}
          </button>
        </form>
      )}

      {status() === 'error' && (
        <p class="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
          {message()}
        </p>
      )}
    </div>
  );
}
