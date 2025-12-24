"use client"
import React, { useRef } from 'react'
import BlogCard from './BlogCard'
import type { Blog } from 'content-collections'
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in'

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollFadeIn(containerRef)
  return (
    <div className='space-y-12 ' ref={containerRef}>
      <h1 className='text-center text-3xl md:text-5xl font-semibold scroll-entry'>Blogs</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 scroll-entry'>
        {
          blogs.map((blog) => (
            <BlogCard key={blog._meta.path}
              id={blog._meta.path}
              date={blog.date}
              name={blog.title}
              description={blog.description}
              keywords={blog.keywords}
              thumbnailurl={blog.thumbnail}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs
