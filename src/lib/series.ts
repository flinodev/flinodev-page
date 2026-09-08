import { getCollection, type CollectionEntry } from "astro:content";
import { isSeriesId, series, type SeriesId } from "@data/series";

type Post = CollectionEntry<"blog">;

export type SeriesInfo = {
  id: SeriesId;
  title: string;
  description: string;
  parts: Post[];
};

/** El id de serie declarado por el post, si existe y está registrado. */
export function seriesIdOf(entry: { data: { series?: string } }): SeriesId | null {
  const declared = entry.data.series;
  return declared && isSeriesId(declared) ? declared : null;
}

/**
 * La serie completa a la que pertenece el post, en orden de lectura. Devuelve
 * `null` si el post no declara serie o si la serie tiene una sola parte
 * publicada — un índice de una entrada no aporta nada.
 */
export async function getSeries(entry: Post): Promise<SeriesInfo | null> {
  const id = seriesIdOf(entry);
  if (!id) return null;

  const parts = (await getCollection("blog"))
    .filter((post) => !post.data.draft && seriesIdOf(post) === id)
    .sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));

  if (parts.length < 2) return null;

  return { id, ...series[id], parts };
}
