import { allBlogs } from '@/.contentlayer/generated'
import Blogs from '@/components/blog/Blogs'

const BlogPage = async () => {

    const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <div className=' mx-8 md:mx-auto max-w-2xl pt-28 '>
            <Blogs blogs={blogs} />
        </div>
    )
}

export default BlogPage