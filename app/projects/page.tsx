"use client"
import ProjectCard from '@/components/project/ProjectCard'
import { projects } from '@/data/projects'
import { useRef } from 'react'
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in'
import { useEffect } from 'react'

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Projects | Radhey Mugdal"
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore the portfolio projects of Radhey Mugdal. Browse through web applications, tools, and innovative software solutions built with modern technologies.')
        }
    }, [])
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=' mx-auto max-w-2xl pt-28 space-y-12 ' ref={containerRef}>
            <h1 className='text-center text-5xl font-semibold scroll-entry'>Projects</h1>
            <div className=' grid grid-cols-2 gap-8 scroll-entry'>
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsPage