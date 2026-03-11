"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import ProjectCard from "../project/ProjectCard"
import { projects as projectData } from "@/data/projects"
import { motion } from "motion/react"

const projects = projectData.slice(0, 2)

const fadeUpVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
}

const Projects = () => {
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
                    Projects
                </motion.h3>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
            <motion.div
                className="flex items-center justify-center"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <Link href="/projects" >
                    <Button variant={"outline"} className="">
                        See all Projects
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Projects
