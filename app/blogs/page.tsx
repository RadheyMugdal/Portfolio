import Blogs from '@/components/blog/Blogs';
import { allBlogs } from 'content-collections';
import type { Metadata } from "next";
import { Suspense } from 'react';

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

const BlogPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>
}) => {
    const params = await searchParams
    const page = Number(params.page) || 1
    const blogs = await allBlogs.sort((a, b) => b.date.getTime() - a.date.getTime())
    return (
        <div className=' mx-8 md:mx-auto max-w-2xl pt-28 '>
            <Suspense fallback={<div>Loading...</div>}>
                <Blogs blogs={blogs} currentPage={page} />
            </Suspense>
        </div>
    )
}

export default BlogPage