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

const BlogPage = () => {
    return (
        <div className=' mx-auto max-w-2xl pt-28 space-y-12 '>
            <h1 className='text-center text-5xl font-semibold'>Blogs</h1>
            <div className=' grid grid-cols-2 gap-8'>
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPage