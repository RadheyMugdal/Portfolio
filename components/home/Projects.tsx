import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Github, Globe } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import ProjectCard from "../project/ProjectCard"
import { projects as projectData } from "@/data/projects"

const projects = projectData.slice(0, 2)
const Projects = () => {
    return (
        <div className=" max-w-2xl space-y-8 mx-8 md:mx-auto">
            <div className=" space-y-4">
                <h3 className="text-xl font-bold">Projects</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="flex items-center justify-center">
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
