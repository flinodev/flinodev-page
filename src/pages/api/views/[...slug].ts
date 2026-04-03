import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

// Disable prerendering for this API route
export const prerender = false;

// Check if Redis is configured
const isRedisConfigured =
  import.meta.env.UPSTASH_REDIS_REST_URL &&
  import.meta.env.UPSTASH_REDIS_REST_TOKEN;

// Initialize Redis client only if configured
const redis = isRedisConfigured
  ? new Redis({
      url: import.meta.env.UPSTASH_REDIS_REST_URL,
      token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// GET: Obtener vistas de un post
export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Return mock data if Redis is not configured
    if (!redis) {
      return new Response(JSON.stringify({ views: 0, slug }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const views = await redis.get<number>(`views:${slug}`) ?? 0;

    return new Response(JSON.stringify({ views, slug }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching views:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch views', views: 0 }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// POST: Incrementar vistas de un post
export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Return mock data if Redis is not configured
    if (!redis) {
      return new Response(JSON.stringify({ views: 1, slug }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const views = await redis.incr(`views:${slug}`);

    return new Response(JSON.stringify({ views, slug }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return new Response(JSON.stringify({ error: 'Failed to increment views' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
