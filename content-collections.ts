import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import { z } from 'zod'

const blog = defineCollection({
  name: 'blog',
  directory: 'blogs',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    keywords: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: false,
          },
        ],
      ],
    })

    return {
      ...document,
      url: `/blogs/${document._meta.path}`,
      mdx,
      content: document.content,
    }
  },
})

export default defineConfig({
  collections: [blog],
})
