import ProjectCard from '@/components/project/ProjectCard'
import { projects } from '@/data/projects'

const ProjectsPage = () => {
    return (
        <div className=' mx-auto max-w-2xl pt-28 space-y-12 '>
            <h1 className='text-center text-5xl font-semibold'>Projects</h1>
            <div className=' grid grid-cols-2 gap-8'>
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