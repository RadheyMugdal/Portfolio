import type { Metadata } from "next";
import { allBlogs } from 'content-collections'
import Blogs from '@/components/blog/Blogs'

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles, tutorials, and insights on web development, software engineering, and technology by Radhey Mugdal.",
  keywords: ["Radhey Mugdal", "Blog", "Web Development", "Software Engineering", "Tutorials", "Programming"],
  openGraph: {
    title: "Blog | Radhey Mugdal",
    description: "Read the latest articles, tutorials, and insights on web development, software engineering, and technology by Radhey Mugdal.",
    type: "website",
  },
}

const BlogPage = async () => {

    const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <div className=' mx-8 md:mx-auto max-w-2xl pt-28 '>
            <Blogs blogs={blogs} />
        </div>
    )
}

export default BlogPage