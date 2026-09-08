import { getCollection, type CollectionEntry } from "astro:content";
import { isWriteup } from "@lib/utils";

// `astro:content` no puede acabar en el bundle del cliente, así que esto vive
// aparte de `utils.ts`: ese módulo lo importan componentes de Solid.
type Entry = CollectionEntry<"blog"> | CollectionEntry<"projects">;

// El tema pesa más que la sección: un writeup de inyecciones es mejor destino
// para otro writeup de inyecciones que el post más reciente de la misma ruta.
const TAG_WEIGHT = 3;
const SAME_SECTION_BONUS = 2;

// Los tags se comparan normalizados; una diferencia de mayúsculas no debería
// sacar un post de su propio cluster.
const normalize = (tag: string) => tag.trim().toLowerCase();

const sameEntry = (a: Entry, b: Entry) => a.collection === b.collection && a.id === b.id;

function section(entry: Entry) {
  if (entry.collection === "projects") return "projects";
  return isWriteup(entry) ? "writeups" : "blog";
}

function byDateDesc(a: Entry, b: Entry) {
  return b.data.date.getTime() - a.data.date.getTime();
}

/**
 * Entradas relacionadas por tags compartidos, cruzando blog y proyectos: el
 * post del acortador y el proyecto flino-link comparten tema aunque vivan en
 * colecciones distintas.
 *
 * Si el tema no da suficientes coincidencias — hay posts con tags únicos que
 * no emparejan con nadie — se rellena con lo más reciente de la misma sección
 * antes que dejar el bloque a medias.
 */
export async function getRelated(entry: Entry, limit = 3): Promise<Entry[]> {
  const [posts, projects] = await Promise.all([getCollection("blog"), getCollection("projects")]);

  const pool: Entry[] = [...posts, ...projects].filter(
    (candidate) => !candidate.data.draft && !sameEntry(candidate, entry)
  );

  const tags = new Set(entry.data.tags.map(normalize));

  const related = pool
    .map((candidate) => ({
      candidate,
      shared: candidate.data.tags.filter((tag) => tags.has(normalize(tag))).length,
    }))
    .filter(({ shared }) => shared > 0)
    .map((match) => ({
      ...match,
      score:
        match.shared * TAG_WEIGHT +
        (section(match.candidate) === section(entry) ? SAME_SECTION_BONUS : 0),
    }))
    .sort((a, b) => b.score - a.score || byDateDesc(a.candidate, b.candidate))
    .slice(0, limit)
    .map(({ candidate }) => candidate);

  if (related.length < limit) {
    const filler = pool
      .filter(
        (candidate) =>
          section(candidate) === section(entry) &&
          !related.some((chosen) => sameEntry(chosen, candidate))
      )
      .sort(byDateDesc)
      .slice(0, limit - related.length);

    related.push(...filler);
  }

  return related;
}
