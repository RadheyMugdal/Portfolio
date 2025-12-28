"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import ProjectCard from "../project/ProjectCard"
import { projects as projectData } from "@/data/projects"
import { useRef } from "react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"

const projects = projectData.slice(0, 2)
const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=" max-w-2xl space-y-8 mx-4 md:mx-auto" ref={containerRef}>
            <div className=" space-y-4">
                <h3 className="text-xl font-bold scroll-entry">Projects</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 scroll-entry">
                    {
                        projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center scroll-entry justify-center">
                <Link href="/projects" >
                    <Button variant={"outline"} className=" ">
                        See all Projects
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Projects
