"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { Blog } from 'content-collections'
import { motion } from "motion/react"
import { useQueryState } from 'nuqs'
import BlogCard from './BlogCard'

const BLOGS_PER_PAGE = 6

const fadeUpVariant = {
    hidden: { opacity: 0,filter:'blur(10px)' },
    visible: {
        y: 0,
        opacity: 1,
        filter:'blur(0px)',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

const Blogs = ({ blogs, currentPage }: { blogs: Blog[], currentPage: number }) => {
  const [page, setPage] = useQueryState('page', { defaultValue: currentPage, parse: Number })

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE)
  const startIndex = (page - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const currentBlogs = blogs.slice(startIndex, endIndex)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
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
    <motion.div
      className='space-y-12'
    >
      <motion.h1
        className='text-center text-3xl md:text-5xl font-semibold'
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        Blogs
      </motion.h1>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
      </motion.div>
      {totalPages > 1 && (
        <motion.div
          className='flex justify-center pt-8'
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
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
        </motion.div>
      )}
    </motion.div>
  )
}

export default Blogs
