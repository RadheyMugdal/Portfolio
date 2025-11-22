import { allBlogs } from '@/.contentlayer/generated'
import BlogCard from '@/components/blog/BlogCard'
import Blogs from '@/components/home/Blog'
import React from 'react'

const blogs = [
    {
        id: '1',
        thumbnailurl: "/notesbuddy.webp",
        name: "Integrate Nextauth",
        description: "This blog contains all the links of my content from twitter & Instagram.",
        keywords: ["Nextjs", "Expressjs", "Nodejs"],
        date: Date.now()
    },
    {
        id: '1',
        thumbnailurl: "/notesbuddy.webp",
        name: "Integrate Nextauth",
        description: "This blog contains all the links of my content from twitter & Instagram.",
        keywords: ["Nextjs", "Expressjs", "Nodejs"],
        date: Date.now()
    },
    {
        id: '3',
        thumbnailurl: "/notesbuddy.webp",
        name: "Integrate Nextauth",
        description: "This blog contains all the links of my content from twitter & Instagram.",
        keywords: ["Nextjs", "Expressjs", "Nodejs"],
        date: Date.now()
    },
    {
        id: '4',
        thumbnailurl: "/notesbuddy.webp",
        name: "Integrate Nextauth",
        description: "This blog contains all the links of my content from twitter & Instagram.",
        keywords: ["Nextjs", "Expressjs", "Nodejs"],
        date: Date.now()
    }
]

const BlogPage = async () => {
    const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <div className=' mx-8 md:mx-auto max-w-2xl pt-28 space-y-12 '>
            <h1 className='text-center text-3xl md:text-5xl font-semibold'>Blogs</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog._raw.flattenedPath}
                            id={blog._raw.flattenedPath}
                            date={blog.date}
                            name={blog.title}
                            description={blog.description}
                            keywords={blog.keywords as string[]}
                            thumbnailurl={blog.thumbnail}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPage