import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For } from "solid-js";
import ArrowCard from "@components/ArrowCard";
import { cn } from "@lib/utils";

type Props = {
  tags: string[];
  data: CollectionEntry<"projects">[];
  lang?: string;
};

export default function Projects({ data, tags, lang = "en" }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>());
  const [projects, setProjects] = createSignal<CollectionEntry<"projects">[]>(data);
  const [showFilters, setShowFilters] = createSignal(false);

  createEffect(() => {
    setProjects(
      filter().size === 0
        ? data
        : data.filter((entry) =>
            Array.from(filter()).every((value) =>
              entry.data.tags.some((tag: string) => tag.toLowerCase() === String(value).toLowerCase())
            )
          )
    );
  });

  function toggleTag(tag: string) {
    setFilter(
      (prev) => new Set(prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag])
    );
  }

  function clearFilters() {
    setFilter(new Set<string>());
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        {/* Mobile: Toggle button */}
        <button
          onClick={() => setShowFilters(!showFilters())}
          class="sm:hidden w-full mb-4 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15 transition-colors duration-200 flex items-center justify-between"
        >
          <span class="text-sm font-semibold text-black dark:text-white">
            Filtros {filter().size > 0 && `(${filter().size})`}
          </span>
          <svg
            class={cn(
              "size-5 transition-transform duration-200",
              showFilters() && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Active filters chips */}
        {filter().size > 0 && (
          <div class="mb-4 flex flex-wrap gap-2">
            <For each={Array.from(filter())}>
              {(tag) => (
                <button
                  onClick={() => toggleTag(tag)}
                  class="px-3 py-1 text-xs rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-75 transition-opacity duration-200 flex items-center gap-1.5"
                >
                  {tag}
                  <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </For>
            <button
              onClick={clearFilters}
              class="px-3 py-1 text-xs rounded-full border border-black/25 dark:border-white/25 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
            >
              Limpiar todo
            </button>
          </div>
        )}

        {/* Filters list */}
        <div
          class={cn(
            "sticky top-24",
            "sm:block",
            showFilters() ? "block" : "hidden"
          )}
        >
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white hidden sm:block">
            Filtros
          </div>
          <ul class="flex flex-wrap sm:flex-col gap-1.5">
            <For each={tags}>
              {(tag) => (
                <li>
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full px-2 py-1 rounded",
                      "whitespace-nowrap overflow-hidden overflow-ellipsis",
                      "flex gap-2 items-center",
                      "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag) && "text-black dark:text-white"
                    )}
                  >
                    <svg
                      class={cn(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-black dark:fill-white"
                      )}
                    >
                      <use
                        href={`/ui.svg#square`}
                        class={cn(!filter().has(tag) ? "block" : "hidden")}
                      />
                      <use
                        href={`/ui.svg#square-check`}
                        class={cn(filter().has(tag) ? "block" : "hidden")}
                      />
                    </svg>
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            Mostrando {projects().length} de {data.length} Proyectos
          </div>
          <ul class="flex flex-col gap-3">
            {projects().map((project) => (
              <li>
                <ArrowCard entry={project} lang={lang} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
