import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    coverImage: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};

