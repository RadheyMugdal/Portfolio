import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import BlogCard from "../blog/BlogCard"

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
    }
]

const Blogs = () => {
    return (
        <div className=" max-w-2xl space-y-8  mx-auto">
            <div className=" space-y-4">
                <h3 className="text-xl font-bold">Blogs</h3>
                <div className=" grid grid-cols-2 gap-8">
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog.id} {...blog} />
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