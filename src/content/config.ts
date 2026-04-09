import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    lang: z.enum(["es", "en", "pt"]).default("es"),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    comments: z.boolean().default(true),
    lang: z.enum(["es", "en", "pt"]).default("es"),
    translatedSlugs: z.object({
      es: z.string().optional(),
      en: z.string().optional(),
      pt: z.string().optional(),
    }).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
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
    lang: z.enum(["es", "en", "pt"]).default("es"),
    translatedSlugs: z.object({
      es: z.string().optional(),
      en: z.string().optional(),
      pt: z.string().optional(),
    }).optional(),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["es", "en", "pt"]).default("es"),
  }),
});

export const collections = { work, blog, projects, legal };
