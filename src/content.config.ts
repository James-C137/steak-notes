import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.object({
      label: z.string(),
      icon: z.enum(['clock', 'flame', 'thermometer', 'beef']).optional(),
    })).optional(),
    heroImage: z.string().optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { recipes };
