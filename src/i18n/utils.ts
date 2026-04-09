import { getCollection } from "astro:content";
import type { Language } from "./config";

export async function getBlogPosts(lang: Language) {
  const allPosts = await getCollection("blog");

  return allPosts
    .filter((post) => !post.data.draft && post.data.lang === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjects(lang: Language) {
  const allProjects = await getCollection("projects");

  return allProjects
    .filter((project) => !project.data.draft && project.data.lang === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getWork(lang: Language) {
  const collection = await getCollection("work");

  return collection
    .filter((item) => item.data.lang === lang)
    .sort((a, b) =>
      new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime()
    );
}
