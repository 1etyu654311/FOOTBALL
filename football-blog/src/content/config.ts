import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['premier-league', 'la-liga', 'ligue-1', 'bundesliga', 'serie-a', 'champions-league', 'world-cup', 'transfers']),
    tags: z.array(z.string()).default([]),
    trending: z.boolean().default(false),
    lang: z.enum(['en', 'es', 'fr', 'ar']),
  }),
});

export const collections = { posts };
