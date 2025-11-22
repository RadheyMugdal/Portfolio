import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import Image from 'next/image'


export const generateStaticParams = async () => allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

interface BlogPageParams {
    params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: BlogPageParams) => {
    const { slug } = await params
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug)
    if (!blog) throw new Error(`Post not found for slug: ${slug}`)
    return { title: blog.title }
}

const BlogPage = async ({ params }: BlogPageParams) => {
    const { slug } = await params
    const post = allBlogs.find((blog) => blog._raw.flattenedPath === slug)
    if (!post) throw new Error(`Post not found for slug: ${slug}`)

    return (
        <article className="mx-8 md:mx-auto space-y-4 max-w-2xl py-8 pt-28">
            <div className=' w-full '>
                <Image src={post.thumbnail} alt={post.title} width={1000} height={1000} className='w-full h-auto rounded-xl object-cover' />
                <time dateTime={post.date} className="mb-1 text-xs  text-end w-full opacity-60">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
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
            <div className=' prose   dark:prose-invert  '>
                <div className="" dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </div>
        </article>
    )
}

export default BlogPage