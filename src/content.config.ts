import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(10).max(100),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional()
  })
})

export const collections = { blog }
