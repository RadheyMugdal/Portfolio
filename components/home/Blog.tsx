import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import BlogCard from "../blog/BlogCard"
import { allBlogs } from "@/.contentlayer/generated"


const Blogs = async () => {
    const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 1)
    return (
        <div className=" max-w-2xl space-y-8 mx-8 md:mx-auto">
            <div className=" space-y-4">
                <h3 className="text-xl font-bold">Blogs</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="flex items-center justify-center">
                <Button variant={"outline"} className=" ">
                    See all Blogs
                </Button>
            </div>
        </div>
    )
}

export default Blogs