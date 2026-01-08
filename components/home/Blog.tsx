"use client";
import { Button } from "../ui/button"
import BlogCard from "../blog/BlogCard"
import { type Blog } from "content-collections";
import Link from "next/link"
import { useRef } from "react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"


const Blogs = ({ blogs }: { blogs: Blog[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=" max-w-2xl space-y-8 mx-4 md:mx-auto" ref={containerRef}>
            <div className=" space-y-4">
                <h3 className="text-xl font-semibold scroll-entry">Blogs</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 scroll-entry">
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog._meta.path}
                                id={blog._meta.path}
                                name={blog.title}
                                description={blog.description}
                                keywords={blog.keywords}
                                date={blog.date.toISOString()}
                                thumbnailurl={blog.thumbnail}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center scroll-entry justify-center">
                <Link href="/blogs" >
                    <Button variant={"outline"} >
                        See all Blogs
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Blogs