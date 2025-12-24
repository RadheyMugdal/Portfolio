import { format } from 'date-fns'
import { allBlogs } from 'content-collections'
import Image from 'next/image'
import { MDXContent } from '@content-collections/mdx/react'


export const generateStaticParams = async () => allBlogs.map((blog) => ({ slug: blog._meta.path }))

interface BlogPageParams {
    params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: BlogPageParams) => {
    const { slug } = await params
    const blog = allBlogs.find((blog) => blog._meta.path === slug)
    if (!blog) throw new Error(`Post not found for slug: ${slug}`)

    return {
        title: blog.title,
        description: blog.description || `Read ${blog.title} by Radhey Mugdal. Learn about ${blog.title} and explore more insights on web development and software engineering.`,
        openGraph: {
            title: blog.title,
            description: blog.description || `Read ${blog.title} by Radhey Mugdal.`,
            images: [
                {
                    url: blog.thumbnail,
                    width: 1000,
                    height: 1000,
                    alt: blog.title,
                },
            ],
            type: "article",
            publishedTime: blog.date,
            authors: ["Radhey Mugdal"],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description || `Read ${blog.title} by Radhey Mugdal.`,
            images: [blog.thumbnail],
        },
    }
}

const BlogPage = async ({ params }: BlogPageParams) => {
    const { slug } = await params
    const post = allBlogs.find((blog) => blog._meta.path === slug)
    if (!post) throw new Error(`Post not found for slug: ${slug}`)

    return (
        <article className="mx-8 md:mx-auto space-y-4 max-w-2xl py-8 pt-28">
            <div className=' w-full '>
                <Image src={post.thumbnail} alt={post.title} width={1000} height={1000} className='w-full h-auto rounded-xl object-cover' />
                <time dateTime={post.date.toISOString()} className="mb-1 text-xs  text-end w-full opacity-60">
                    {format(post.date, 'LLLL d, yyyy')}
                </time>
            </div>
            <div className=' space-y-2 '>
                <div className=" flex items-center justify-between">
                    <h1 className="text-4xl font-bold ">{post.title}</h1>
                </div>
                <div>
                    <p className=' text-base  opacity-75'>{post.description}</p>
                </div>
            </div>
            <div className='prose prose-left dark:prose-invert max-w-none [&_pre]:text-left [&_code]:text-left [&_pre]:mx-0 [&_pre]:max-w-none'>
                <MDXContent code={post.mdx} />
            </div>
        </article>
    )
}

export default BlogPage