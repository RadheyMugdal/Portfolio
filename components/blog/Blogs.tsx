"use client"
import React, { useRef } from 'react'
import BlogCard from './BlogCard'
import { Blog } from '@/.contentlayer/generated'
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

export default Blogs
