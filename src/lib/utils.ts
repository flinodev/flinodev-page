import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function isWriteup(post: { id: string }) {
  return post.id.startsWith("thm/");
}

// Un borrador no debe generar página en producción. Filtrarlo aquí y no solo
// en los listados es lo que lo mantiene fuera del sitemap: `@astrojs/sitemap`
// recoge las rutas construidas, no la colección, así que un draft con página
// termina enviado a Search Console. En dev sí se construyen, para poder
// previsualizarlos.
export function isPublished(entry: { data: { draft?: boolean } }) {
  return import.meta.env.DEV || !entry.data.draft;
}
