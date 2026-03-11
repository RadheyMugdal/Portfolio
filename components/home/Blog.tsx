"use client";
import { Button } from "../ui/button"
import BlogCard from "../blog/BlogCard"
import { type Blog } from "content-collections";
import Link from "next/link"
import { motion } from "motion/react"

const fadeUpVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <motion.div
            className="max-w-2xl space-y-8 mx-4 md:mx-auto"
        >
            <div className="space-y-4">
                <motion.h3
                    className="text-xl font-semibold"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Blogs
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        blogs.map((blog, index) => (
                            <motion.div
                                key={blog._meta.path}
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard
                                    id={blog._meta.path}
                                    name={blog.title}
                                    description={blog.description}
                                    keywords={blog.keywords}
                                    date={blog.date.toISOString()}
                                    thumbnailurl={blog.thumbnail}
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <motion.div
                className="flex items-center justify-center"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <Link href="/blogs" >
                    <Button variant={"outline"} >
                        See all Blogs
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Blogs
