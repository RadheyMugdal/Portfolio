"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import BlogCard from "../blog/BlogCard"
import { allBlogs, Blog } from "@/.contentlayer/generated"
import Link from "next/link"
import { useRef } from "react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"


const Blogs = ({ blogs }: { blogs: Blog[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=" max-w-2xl space-y-8 mx-4 md:mx-auto" ref={containerRef}>
            <div className=" space-y-4">
                <h3 className="text-xl font-bold scroll-entry">Blogs</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 scroll-entry">
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog._raw.flattenedPath}
                                id={blog._raw.flattenedPath}
                                name={blog.title}
                                description={blog.description}
                                keywords={blog.keywords as string[]}
                                date={blog.date}
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