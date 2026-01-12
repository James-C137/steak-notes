import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cut: z.string(),
    cookTime: z.string(),
    difficulty: z.enum(['easy', 'medium', 'advanced']),
    heroImage: z.string().optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { recipes };
