"use client"
import ProjectCard from '@/components/project/ProjectCard'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { projects } from '@/data/projects'
import { motion } from "motion/react"
import { useQueryState } from 'nuqs'
import { useEffect } from 'react'

const PROJECTS_PER_PAGE = 4

const fadeUpVariant = {
    hidden: {  opacity: 0 ,filter:'blur(10px)' },
    visible: {
        opacity: 1,
        filter:'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

const ProjectsPage = ({ currentPage }: { currentPage: number }) => {
    useEffect(() => {
        document.title = "Projects | Radhey Mugdal"
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore the portfolio projects of Radhey Mugdal. Browse through web applications, tools, and innovative software solutions built with modern technologies.')
        }
    }, [])

    const [page, setPage] = useQueryState('page', { defaultValue: currentPage, parse: Number })

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
    const startIndex = (page - 1) * PROJECTS_PER_PAGE
    const endIndex = startIndex + PROJECTS_PER_PAGE
    const currentProjects = projects.slice(startIndex, endIndex)

    const handlePageChange = (newPage: number) => {
        window.scrollTo({behavior:"smooth",top:0})
        setPage(newPage)
    }

    const renderPaginationItems = () => {
        const items = []

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
            items.push(
                <PaginationItem key={pageNum}>
                    <PaginationLink
                        href={pageNum === 1 ? '/projects' : `/projects?page=${pageNum}`}
                        onClick={(e) => {
                            e.preventDefault()
                            handlePageChange(pageNum)
                        }}
                        isActive={page === pageNum}
                        className="cursor-pointer"
                    >
                        {pageNum}
                    </PaginationLink>
                </PaginationItem>
            )
        }

        return items
    }

    return (
        <motion.div
            className='mx-auto max-w-2xl pt-28 space-y-12'
        >
            <motion.h1
                className='text-center text-5xl font-semibold'
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                Projects
            </motion.h1>
            <motion.div
                className='grid grid-cols-2 gap-8'
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {
                    currentProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </motion.div>
            {totalPages > 1 && (
                <motion.div
                    className='flex justify-center pt-8'
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={page > 1 ? `/projects?page=${page - 1}` : '/projects'}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (page > 1) handlePageChange(page - 1)
                                    }}
                                    className={page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                            {renderPaginationItems()}
                            <PaginationItem>
                                <PaginationNext
                                    href={page < totalPages ? `/projects?page=${page + 1}` : `/projects?page=${page}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (page < totalPages) handlePageChange(page + 1)
                                    }}
                                    className={page === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </motion.div>
            )}
        </motion.div>
    )
}

export default ProjectsPage