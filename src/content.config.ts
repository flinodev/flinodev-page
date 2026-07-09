import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Preserva los slugs de Astro 4: `thm/xxe-injection/index.md` -> `thm/xxe-injection`
const contentGlob = (base: string) =>
  glob({
    pattern: "**/[^_]*.{md,mdx}",
    base,
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, "").replace(/\/?index$/, ""),
  });

const work = defineCollection({
  loader: contentGlob("./src/content/work"),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const blog = defineCollection({
  loader: contentGlob("./src/content/blog"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    comments: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: contentGlob("./src/content/projects"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: z.string().optional(),
    comments: z.boolean().default(true),
  }),
});

const legal = defineCollection({
  loader: contentGlob("./src/content/legal"),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { work, blog, projects, legal };
