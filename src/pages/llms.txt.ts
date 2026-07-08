import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@consts";
import { isWriteup } from "@lib/utils";

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE;

  const all = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const posts = all.filter((post) => !isWriteup(post));
  const writeups = all.filter((post) => isWriteup(post));

  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const entry = (slug: string, title: string, summary: string) =>
    `- [${title}](${new URL(`/blog/${slug}`, site).href}): ${summary}`;

  const llmsTxt = `# ${SITE.AUTHOR} ({flino|dev})

> ${SITE.DESCRIPTION}

Sitio personal de Francisco Lino: desarrollo web full-stack (Node.js, Golang, React, Angular) y seguridad ofensiva/defensiva. Contenido principalmente en español.

## Writeups de seguridad

${writeups.map((w) => entry(w.slug, w.data.title, w.data.summary)).join("\n")}

## Blog

${posts.map((p) => entry(p.slug, p.data.title, p.data.summary)).join("\n")}

## Proyectos

${projects
  .map(
    (p) => `- [${p.data.title}](${new URL(`/projects/${p.slug}`, site).href}): ${p.data.summary}`
  )
  .join("\n")}

## Contacto

- GitHub: https://github.com/flinodev
- LinkedIn: https://www.linkedin.com/in/flinodev/
- X: https://x.com/flinodev
`;

  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
