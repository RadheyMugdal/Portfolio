"use client"
import React, { useRef, useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import type { Blog } from 'content-collections'
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from 'next/navigation'

const BLOGS_PER_PAGE = 6

const Blogs = ({ blogs, currentPage }: { blogs: Blog[], currentPage: number }) => {
  const [page, setPage] = useState(currentPage)
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollFadeIn(containerRef)

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE)
  const startIndex = (page - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const currentBlogs = blogs.slice(startIndex, endIndex)

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams()
    if (newPage === 1) {
      router.push('/blogs')
    } else {
      router.push(`/blogs?page=${newPage}`)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPaginationItems = () => {
    const items = []

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      items.push(
        <PaginationItem key={pageNum}>
          <PaginationLink
            href={pageNum === 1 ? '/blogs' : `/blogs?page=${pageNum}`}
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(pageNum)
            }}
            isActive={page === pageNum}
            className="cursor-pointer"
          >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return items
  }

  return (
    <div className='space-y-12' ref={containerRef}>
      <h1 className='text-center text-3xl md:text-5xl font-semibold scroll-entry'>Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 scroll-entry'>
        {
          currentBlogs.map((blog) => (
            <BlogCard key={blog._meta.path}
              id={blog._meta.path}
              date={blog.date.toISOString()}
              name={blog.title}
              description={blog.description}
              keywords={blog.keywords}
              thumbnailurl={blog.thumbnail}
            />
          ))
        }
      </div>
      {totalPages > 1 && (
        <div className='flex justify-center pt-8 scroll-entry'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={page > 1 ? `/blogs?page=${page - 1}` : '/blogs'}
                  onClick={(e) => {
                    e.preventDefault()
                    if (page > 1) handlePageChange(page - 1)
                  }}
                  className={page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              {renderPaginationItems()}
              <PaginationItem>
                <PaginationNext
                  href={page < totalPages ? `/blogs?page=${page + 1}` : `/blogs?page=${page}`}
                  onClick={(e) => {
                    e.preventDefault()
                    if (page < totalPages) handlePageChange(page + 1)
                  }}
                  className={page === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

export default Blogs
