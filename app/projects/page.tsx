import type { Metadata } from "next";
import ProjectsPage from './ProjectsPage'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio projects of Radhey Mugdal. Browse through web applications, tools, and innovative software solutions built with modern technologies.",
  keywords: ["Radhey Mugdal", "Projects", "Portfolio", "Web Applications", "Software Solutions", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Projects | Radhey Mugdal",
    description: "Explore the portfolio projects of Radhey Mugdal. Browse through web applications, tools, and innovative software solutions built with modern technologies.",
    type: "website",
  },
}

const Projects = async ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>
}) => {
    const params = await searchParams
    const page = Number(params.page) || 1
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectsPage currentPage={page} />
        </Suspense>
    )
}

export default Projects
