"use client"
import ProjectCard from '@/components/project/ProjectCard'
import { projects } from '@/data/projects'
import { useRef, useState } from 'react'
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in'
import { useEffect } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const PROJECTS_PER_PAGE = 4

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Projects | Radhey Mugdal"
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore the portfolio projects of Radhey Mugdal. Browse through web applications, tools, and innovative software solutions built with modern technologies.')
        }
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
    const endIndex = startIndex + PROJECTS_PER_PAGE
    const currentProjects = projects.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const renderPaginationItems = () => {
        const items = []

        for (let page = 1; page <= totalPages; page++) {
            items.push(
                <PaginationItem key={page}>
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            handlePageChange(page)
                        }}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>
            )
        }

        return items
    }

    return (
        <div className='mx-auto max-w-2xl pt-28 space-y-12' ref={containerRef}>
            <h1 className='text-center text-5xl font-semibold scroll-entry'>Projects</h1>
            <div className='grid grid-cols-2 gap-8 scroll-entry'>
                {
                    currentProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
            {totalPages > 1 && (
                <div className='flex justify-center pt-8 scroll-entry'>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (currentPage > 1) handlePageChange(currentPage - 1)
                                    }}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                            {renderPaginationItems()}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (currentPage < totalPages) handlePageChange(currentPage + 1)
                                    }}
                                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    )
}

export default ProjectsPage