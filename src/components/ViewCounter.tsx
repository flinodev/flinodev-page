import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';

interface ViewCounterProps {
  slug: string;
  trackView?: boolean;
  locale?: string;
  translations: {
    singular: string;
    plural: string;
  };
}

export default function ViewCounter(props: ViewCounterProps) {
  const [views, setViews] = createSignal<number>(0);
  const [displayViews, setDisplayViews] = createSignal<number>(0);
  const [isLoading, setIsLoading] = createSignal(true);
  let hasTracked = false;

  // Fetch and optionally track view
  onMount(async () => {
    try {
      // Check if we're in development mode
      const isDev = import.meta.env.DEV;

      // Only increment view count in production
      const shouldTrack = props.trackView !== false && !hasTracked && !isDev;

      if (shouldTrack) {
        hasTracked = true;
        const response = await fetch(`/api/views/${props.slug}`, {
          method: 'POST',
        });
        const data = await response.json();
        setViews(data.views || 0);
      } else {
        // Just fetch current views (in dev or when tracking disabled)
        const response = await fetch(`/api/views/${props.slug}`);
        const data = await response.json();
        setViews(data.views || 0);
      }

      // Log in development mode
      if (isDev) {
        console.log(`[DEV] ViewCounter: Not incrementing views for "${props.slug}"`);
      }
    } catch (error) {
      console.error('Error fetching views:', error);
      setViews(0);
    } finally {
      setIsLoading(false);
    }
  });

  // Animate counter
  createEffect(() => {
    const currentViews = views();
    if (currentViews === 0 || isLoading()) return;

    const duration = 1000; // Animation duration in ms
    const steps = 60; // Number of animation steps
    const increment = currentViews / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayViews(currentViews);
        clearInterval(timer);
      } else {
        setDisplayViews(Math.floor(increment * currentStep));
      }
    }, duration / steps);

    onCleanup(() => clearInterval(timer));
  });

  // Format number with commas
  const formatNumber = (num: number) => {
    const locale = props.locale || "es-ES";
    return num.toLocaleString(locale);
  };

  return (
    <div class="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
      {isLoading() ? (
        <>
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span class="animate-pulse">...</span>
        </>
      ) : (
        <>
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span class="tabular-nums">
            {formatNumber(displayViews())} {displayViews() === 1 ? props.translations.singular : props.translations.plural}
          </span>
        </>
      )}
    </div>
  );
}
