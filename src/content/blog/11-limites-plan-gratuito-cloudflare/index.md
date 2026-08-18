---
title: "¿Cuándo $0.39 al mes se vuelven $5.39?"
summary: "Medí los límites del plan gratuito de Cloudflare contra el tráfico real de mi acortador. Le había dicho a un lector que el primero en tronar serían las lecturas de KV, y me equivoqué: no gana ninguno. El techo que sí truena primero no aparece en la página de límites."
date: "Aug 18 2026"
draft: true
tags:
  - Cloudflare
  - Serverless
  - TypeScript
---

Hace unas semanas publiqué [cómo construí flino.link](/blog/10-acortador-url-cloudflare-workers) sobre Cloudflare Workers: redirects en menos de 10 ms, costo de infraestructura cero, gasto total $4.68 al año — el dominio. Treinta y nueve centavos al mes.

En los comentarios, un lector llamado Paw escribió algo que me quedó dando vueltas:

> *"i love seeing the actual cost broken down instead of 'basically free', makes it feel real"*

Y luego hizo la pregunta que yo no me había hecho: **¿cuándo deja de ser gratis?**

Le contesté con más seguridad de la que tenía: *"for a shortener it's almost certainly KV reads, not requests — which is a fun thing to discover before the bill"*. Prometí hacer la cuenta bien y escribirla.

Hice la cuenta. **Me equivoqué**, y de una forma bastante más interesante que si hubiera acertado: para la ruta de un redirect no existe un "primero que truena". Cuatro límites empatan exactamente. Y el que sí truena primero es uno que ni Paw ni yo habíamos nombrado — uno que no aparece en la página de límites de Cloudflare.

Antes de seguir, la declaración que este tipo de post casi nunca hace: **no he chocado con ninguno de estos límites.** Ni de cerca. Lo que sigue es aritmética, no cicatrices. Creo que eso lo hace más útil, no menos: puedo decirte dónde está cada techo justamente porque me tomé el trabajo de medirlo en frío en lugar de descubrirlo con una factura.

### Qué cuesta exactamente un redirect

Todo lo demás sale de aquí, así que vale la pena ser preciso. Este es el camino caliente completo, tal cual está en producción:

```ts
const slug = decodeURIComponent(pathname.slice(1));

if (SLUG_PATTERN.test(slug) && !RESERVED.has(slug)) {
  const target = await env.LINKS.get(slug);          // 1 lectura de KV
  if (target !== null) {
    ctx.waitUntil(counter(env).increment(slug));     // 1 request al DO
    return Response.redirect(target, 302);
  }
}
```

Cada click en un link corto consume, exactamente:

```
1 request al Worker
1 lectura de KV               LINKS.get(slug)
1 request a Durable Object    increment(slug), dentro de waitUntil
1 fila escrita en SQLite      INSERT … ON CONFLICT DO UPDATE
```

Cuatro recursos distintos, uno de cada uno, sin excepciones. Con eso, los límites del plan gratuito dejan de ser una lista de la documentación y se vuelven aritmética.

### Los cuatro techos empatan. Exactamente.

Estos son los límites vigentes del plan gratuito, tomados de la documentación de Cloudflare:

| Recurso | Límite gratuito |
|---|---|
| Requests al Worker | 100,000 / día |
| Lecturas de KV | 100,000 / día |
| Requests a Durable Objects | 100,000 / día |
| Filas escritas en el DO | 100,000 / día |
| Escrituras de KV | 1,000 / día |
| `list` de KV | 1,000 / día |
| CPU time | 10 ms por invocación |

Míralo junto con la lista de arriba. Un redirect quema uno de cada uno de los primeros cuatro, y **los primeros cuatro valen 100,000**. No hay un cuello de botella: llegan al techo en el mismo instante.

Ahí es donde falla mi predicción. No es que le haya errado por poco y en realidad ganen los requests. Es que **no gana nadie**. Le dije a Paw que descubriría el límite de KV antes que los demás, y la respuesta correcta era que los descubriría todos el mismo día, a la misma hora.

Sobre qué pasa cuando llegas, la documentación es más amable de lo que esperaba:

> *"If you exceed any one of the free tier limits, further operations of that type will fail with an error."*

**Solo se rompe el tipo de operación excedida**, no la cuenta entera, y todo se reinicia a las 00:00 UTC. Eso importa más de lo que parece, y vamos a volver a ello al final.

### El 93% de mi tráfico es basura (y no es el problema)

Aquí está lo que midieron mis paneles en julio:

| Fuente | Dato |
|---|---|
| KV `LINKS` | 3,590 lecturas · 20 escrituras · 150 `list` · 21 llaves |
| Durable Object | 736 requests · 0 errores |
| Worker (7 días) | ~2,000 invocaciones · CPU mediana **0.41 ms** |

De unas 2,000 invocaciones al Worker en siete días, solo 130 llegaron al Durable Object. Las otras ~1,870 son escáneres automatizados buscando cosas como `wp-admin/install.php?step=1` en un dominio que jamás ha corrido WordPress. Alrededor de **270 al día**, todos los días, desde que el dominio existe.

La buena noticia es que el `SLUG_PATTERN` los detiene antes de que toquen nada: no pasan la validación, así que consumen **únicamente** el techo de requests. Cero KV, cero Durable Objects.

Y aquí va la parte que quiero contar bien, porque **la primera versión de este post decía algo falso**. Decía: *"los bots se comen 15/16 de mi plan gratuito"*. La aritmética parecía impecable — si el 93% de mi tráfico es ruido, el ruido se está comiendo el 93% de mi cuota.

Es falso, y el error vale más que el dato.

Un porcentaje medido hoy solo se puede proyectar a un techo **si las dos cosas crecen juntas**. Y no crecen juntas. Los escáneres no me visitan porque flino.link sea popular; me visitan porque tengo un dominio. Si mañana el tráfico se multiplica por mil, seguirán siendo ~270 al día. Su costo real no es el 93% de nada:

```
270 requests de 100,000 diarios  =  0.27%
```

Antes de publicar esto fui a medirlo otra vez, precisamente porque habría sido absurdo equivocarme sobre aquello en lo que creía haberme equivocado. Una ventana distinta, de 30 días en vez de 7, terminando a mediados de agosto:

```
9,000 invocaciones al Worker  −  874 requests al Durable Object
                              =  8,126 ÷ 30 días  =  271 al día
```

Julio decía 267. Agosto dice 271. Y en el medio hay un control que no busqué: **no publiqué nada en dos semanas.** Ni una entrada, ni un link nuevo compartido. El ruido no se movió ni un poco, que es exactamente lo que predice la explicación aburrida — no llega por mí.

Ese 93% no dice nada sobre mi factura. Dice **qué tan pequeño soy hoy**: es una medida de escala, no de costo. Es exactamente el tipo de número que se ve espectacular en un post y que no soporta que le pregunten "¿y luego?".

Descontando el ruido y unas diez cargas del panel al día, mi techo real queda en **~99,700 redirects diarios**. En julio hice **586**.

> **Estoy a más de 5,000 veces de empezar a pagar.**

Que es una forma aburrida de contestar la pregunta de Paw. La forma interesante es la que sigue.

### El techo que sí truena primero no está en la página de límites

Volvamos a la tabla. Hay un renglón que no toca ningún redirect:

| `list` de KV | 1,000 / día |

`list` es la operación que enumera las llaves de un namespace. El camino del redirect nunca la llama. La llama una sola cosa: **mi panel de administración**, para pintar la tabla de links.

Cada vez que abro el dashboard, esto es lo que cuesta:

```ts
const page = await env.LINKS.list({ cursor, limit: 1000 });     // 1 list
const values = await Promise.all(page.keys.map(async (k) => ({
  slug: k.name,
  url: (await env.LINKS.get(k.name)) ?? "",                     // N lecturas
})));
```

**1 `list` + N lecturas**, donde N es mi número de links. Con eso se pueden calcular las dos cotas:

```
Techo de lecturas de KV:  100,000 ÷ 21  =  4,762 cargas al día
Techo de list:              1,000 ÷ 1   =  1,000 cargas al día   ← 4.8× antes
```

Con mis 21 links, el panel muere casi cinco veces antes por `list` que por lecturas. (Veintiuno era el número cuando medí. Crear el link corto para compartir este artículo lo dejó en veintidós, lo cual es una manera pequeña y algo absurda de demostrar lo que sigue.) Y cuando eso pase, **los redirects siguen funcionando perfectamente** — recuerda que solo se rompe el tipo de operación excedida. El producto sobrevive; lo que se cae es mi capacidad de mirarlo.

Ahora lo que de verdad me sorprendió al buscar la cita para este post: **`list` no aparece en la página de límites de Workers KV.** Ni `list` ni `delete`. Solo están en la página de precios.

O sea que el techo que truena primero en mi proyecto no existe en la página donde un desarrollador va a buscar los límites de su proyecto.

### "El techo no es un número" — ni siquiera es el mismo techo

Paw escribió una segunda cosa que resultó ser la tesis de todo esto:

> *"«the ceiling isn't one number» is the bit i didn't know, and the bit nobody puts on a pricing page."*

Tenía más razón de la que sabía. Fíjate en las dos cotas del panel: la de `list` **no depende de N**, y la de lecturas **sí**. Así que no solo cambia el número — cambia cuál de los dos manda:

```
Cargas del panel permitidas al día

N =     21  →  list: 1,000   ·  lecturas: 4,762   ← manda list
N =    100  →  list: 1,000   ·  lecturas: 1,000   ← empate
N =  1,000  →  list: 1,000   ·  lecturas:   100   ← manda lecturas
N = 10,000  →  list: 1,000   ·  lecturas:    10   ← diez visitas agotan el día
```

En N=100 se invierte la identidad del techo. No porque llegue más tráfico: **por la forma de mis datos.** Con diez mil links, diez visitas a mi propio dashboard agotan toda la cuota diaria de KV — y los redirects, otra vez, ni se enteran.

Esa es la asimetría que se me pasó por completo cuando estimé esto a ojo:

> **El costo del panel crece con el número de links. El costo del producto crece con el tráfico.**

Son dos curvas distintas, y en un proyecto pequeño la peligrosa es la que uno no está viendo. Más del 80% de mis lecturas de KV en julio no fueron gente usando mis links: fui yo abriendo el panel.

### Uno de los cuatro techos que nombré en público no existe

En aquel comentario mencioné el CPU time como el cuarto límite. No pertenece a la lista, y no por poco.

Los otros son **presupuestos**: se acumulan durante el día y se agotan. El CPU time es un **muro por invocación** — 10 ms para cada request, individualmente. No se suman, no se acaban. Mi mediana es de 0.41 ms: uso el **4.1%** del muro y jamás me acerco al resto, porque no hay resto que acercarse.

Curiosamente tampoco importa en el plan de pago, por la razón opuesta. Los 30 millones de CPU-ms incluidos, a 0.41 ms por invocación, alcanzan para **73 millones de invocaciones** — 7.3 veces más de las que caben en los 10 millones de requests que trae el mismo plan. Se acaba después de que se acabó todo lo demás.

De los cuatro techos que enumeré con tanta confianza, uno no era un techo.

### Entonces, ¿cuándo $0.39 se vuelven $5.39?

Cuando cruzo a Workers Paid: **$5 al mes por cuenta**, más los $0.39 del dominio. Esto es lo que cambia:

| Recurso | Gratis (equiv. mensual) | De pago, incluido | Excedente |
|---|---|---|---|
| Requests al Worker | 3,000,000 | 10,000,000 | $0.30 / M |
| Lecturas de KV | 3,000,000 | 10,000,000 | $0.50 / M |
| Escrituras de KV | 30,000 | 1,000,000 | $5.00 / M |
| **`list` de KV** | **30,000** | **1,000,000** | $5.00 / M |
| **Requests al DO** | **3,000,000** | **1,000,000** | $0.15 / M |
| Filas escritas en el DO | 3,000,000 | 50,000,000 | $1.00 / M |

Lee otra vez el renglón de Durable Objects. **El plan gratuito incluye tres veces más requests a Durable Objects que el plan de pago.** No es un error de tipeo ni una lectura maliciosa de la tabla: 100,000 al día son 3 millones al mes, y el plan de pago incluye 1 millón. Es el único recurso de la lista donde pagar te da *menos*.

Con el número exacto, para que nadie tenga que confiar en mi indignación: mantener mis 3 millones de requests mensuales al DO ya en el plan de pago cuesta **$0.30**. Treinta centavos.

Que es justo lo que hace honesto el argumento — y también más filoso:

> **La diferencia no es el dinero. Es que uno es un muro y el otro es un medidor.**

En el plan gratuito, pasarte significa que las operaciones fallan. En el de pago, significa una línea en el recibo. Los $5 no compran más Durable Objects: compran **el derecho a excederlos**.

Y compara los multiplicadores de lo que sí crece. Requests: 3.3×. Lecturas de KV: 3.3×. `list`: **33×**. Diez veces más que todo lo demás, en la única operación que mi producto nunca ejecuta.

> **Lo que el dinero resuelve no es servir links. Es poder mirarlos.**

### Lo que la documentación no dice

Queda un hueco, y prefiero dejarlo abierto a taparlo con una suposición elegante.

Workers KV cachea las lecturas en el edge — el `cacheTtl` por omisión es de 60 segundos. **No pude encontrar, en ningún lado, si una lectura servida desde ese caché se cobra igual que una fría.** No está en la página de límites de KV, no está en la de precios, no está en "how KV works".

Y no es que Cloudflare haya sido descuidado con los casos raros. La misma página de precios se toma la molestia de aclarar que *"all operations incur charges, including fetches for non-existent keys"* — o sea que sí pensaron en el borde. El caché simplemente no está.

Importa, además, porque es el único dato que podría mover mi conclusión: si las lecturas cacheadas no se cobran, el techo de KV se aleja lo suficiente para romper el empate de cuatro vías, y mi predicción original quedaría todavía peor de lo que ya quedó.

Intenté medirlo con mis propios datos. No se puede, y la razón es mi parte favorita de todo este ejercicio:

> El caché dura 60 segundos y yo no tengo dos clicks al mismo link en el mismo minuto. Mi acortador es demasiado pequeño para descubrir dónde está su propio techo.

El experimento no está mal diseñado. Está sin potencia. Decirlo así me parece mejor que fingir que lo medí.

### Lo que me llevo

1. **Un porcentaje medido hoy no se proyecta a un techo futuro** salvo que ambos lados crezcan juntos. Mis bots son el 93% de mi tráfico y el 0.27% de mi cuota, y las dos cifras son correctas. Fue el error más caro de este post y no tenía nada que ver con Cloudflare.
2. **El límite que truena primero rara vez está en el camino caliente.** El mío lo dispara mi propio dashboard, y crece con el número de links en vez de con el tráfico. Si tienes un panel de administración, esa es probablemente tu curva invisible.
3. **"Gratis hasta X" es casi siempre una simplificación.** No hay una X. Hay una lista de recursos con techos distintos que se agotan en momentos distintos, y su orden depende de la forma de tus datos, no solo del volumen.
4. **Vale la pena medirlo antes de necesitarlo.** No hay ninguna urgencia detrás de este post: estoy a más de 5,000 veces de pagar un peso. Precisamente por eso pude leer la documentación con calma en vez de a las tres de la mañana.

Paw: acertaste, y no en la parte que creías. El techo no es un número — ni siquiera es siempre el mismo techo.

El código completo está en [GitHub](https://github.com/flinodev/flino-link), y todos los números de este post salen de los paneles de Cloudflare de julio de 2026. Si tienes un proyecto en el plan gratuito y nunca calculaste qué consume cada request, la cuenta toma veinte minutos y probablemente te sorprenda cuál es tu límite real.
