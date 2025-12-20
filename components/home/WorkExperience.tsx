"use client"
import { Twitter } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "@/plugins"
import { useRef } from "react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
const experiences = [{
    company: "PractiSkill Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "August 2024 - Present",
    location: "Bangalore (Remote)",
    technologies: ["Next.js", "React.js", "TypeScript", "Javascript", "Postgresql", "Tailwind CSS", "Bun", "Figma", "AWS"],
    points: [
        {
            text: "Developed and delivered end-to-end full-stack web applications handling frontend backend database design and system architecture from scratch",
            highlights: ["end-to-end full-stack web applications"]
        },
        {
            text: "Built scalable and complex backend systems including RESTful APIs authentication authorization and performance optimized data handling",
            highlights: ["RESTful APIs", "authentication", "authorization"]
        },
        {
            text: "Designed and implemented multiple custom CMS platforms with dynamic content management role based access control and modular architecture",
            highlights: ["custom CMS platforms", "role-based access control"]
        },
        {
            text: "Created a custom drag and drop builder in React from scratch enabling dynamic UI creation and reusable component management",
            highlights: ["drag and drop builder", "React"]
        },
        {
            text: "Managed application deployment and CI/CD pipelines automating build testing and release workflows",
            highlights: ["CI/CD pipelines", "deployment"]
        }
    ]
}]

const highlightText = (text: string, highlights: string[]) => {
    if (!highlights?.length) return text

    const regex = new RegExp(`(${highlights.join("|")})`, "gi")

    return text.split(regex).map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
            <span key={i} className="font-semibold text-foreground">
                {part}
            </span>
        ) : (
            part
        )
    )
}

const WorkExperience = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=" max-w-2xl mx-4 md:mx-auto" ref={containerRef}>
            <div className=" space-y-4">
                <h3 className="text-xl font-bold scroll-entry">Work Experience</h3>
                <Accordion type="single" className="" collapsible defaultValue="experience">
                    {
                        experiences.map((experience) => (
                            <AccordionItem key={experience.company} value="experience" className="scroll-entry" >
                                <AccordionTrigger className=" w-full hover:no-underline" >
                                    <div className="flex  w-full gap-4">
                                        <div className="  md:size-18  size-12  items-center justify-center flex  rounded-sm bg-input">
                                            <Twitter />
                                        </div>
                                        <div className=" flex-1 flex  items-center justify-between">
                                            <div className=" h-full flex flex-col gap-1  justify-center">
                                                <h4 className="font-semibold ">{experience.company}</h4>
                                                <span className="text-xs opacity-60">{experience.role}</span>

                                            </div>
                                            <div className="hidden  md:flex gap-2">
                                                <div className=" h-full flex flex-col  gap-1 justify-center">
                                                    <h4 className=" opacity-60  ">{experience.duration}</h4>
                                                    <span className="text-xs   opacity-60 ">{experience.location}</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <div className="md:hidden flex gap-2 mb-4">
                                    <div className=" h-full flex  w-full  gap-1 justify-between">
                                        <h4 className=" opacity-60 text-xs  ">{experience.duration}</h4>
                                        <span className="text-xs   opacity-60 ">{experience.location}</span>
                                    </div>
                                </div>
                                <AccordionContent className="space-y-4 ">

                                    <div className=" px-0 space-y-1">
                                        <h4 className=" text-base md:text-lg font-bold">Technologies used</h4>

                                        <div className=" flex flex-wrap gap-2">
                                            {
                                                experience.technologies.map((technology) => (
                                                    <div key={technology} className=" h-6  px-4 rounded-md text-xs md:text-sm bg border border-dashed  flex items-center justify-center bg-muted border-foreground/60">
                                                        {technology}
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>

                                    <ul className=" space-y-1.5   list-outside pl-4  list-disc  text-foreground/75">
                                        {
                                            experience.points.map((point) => (
                                                <li key={point.text}>{highlightText(point.text, point.highlights)}</li>
                                            ))
                                        }
                                    </ul>

                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }

                </Accordion>
            </div>
        </div>
    )
}

export default WorkExperience
