"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { motion } from "motion/react"

const fadeUpVariant = {
    hidden: { y: 30, opacity: 0,filter:'blur(10px)' },
    visible: {
        y: 0,
        opacity: 1,
        filter:'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
};
const experiences = [{
    company: "Practiskills Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "August 2024 - Present",
    logo: "/experience/practiskills_logo.jpg",
    location: "Bengaluru (Remote)",
    technologies: ["Next.js", "React.js", "Node.js", "TypeScript", "Javascript", "MongoDB", "Postgresql","Docker","CI/CD", "RabbitMQ", "AWS"],
    points: [
        {
            text: " Owned the design and deployment of scalable backend APIs, integrating AI features that enhanced system efficiency and enriched product capabilities",
            highlights: ["Owned", "design", "deployment", "scalable backend APIs", "AI features", "system efficiency", "product capabilities"]
        },
        {
            text: "  Developed responsive dashboards, landing pages, and reusable frontend components, accelerating feature delivery by 30% and improving user experience. ",
            highlights: ["Developed", "responsive dashboards", "landing pages", "reusable frontend components", "feature delivery", "user experience"]
        },
        {
            text: " Implemented authentication flows, streamlined onboarding, and executed payment integrations, boosting user activation and retention by 15%.",
            highlights: ["Implemented", "authentication flows", "onboarding", "payment integrations", "user activation", "retention"]
        },
        {
            text: "Diagnosed and resolved bugs while shipping new features, reducing production issues by 25% and ensuring platform reliability. ",
            highlights: ["Diagnosed", "resolved bugs", "shipping new features", "production issues", "platform reliability"]
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
    return (
        <div className="max-w-2xl mx-4 md:mx-auto">
            <div className="space-y-4">
                <motion.h3
                    className="text-xl font-semibold"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h3>
                <Accordion type="single" className="" collapsible defaultValue="experience">
                    {
                        experiences.map((experience) => (
                            <motion.div
                                key={experience.company}
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <AccordionItem value="experience" >
                                <AccordionTrigger className=" w-full hover:no-underline" >
                                    <div className="flex  w-full gap-4">
                                        <div className="  md:size-18  size-12  rounded-lg overflow-hidden ">
                                            <img src={experience.logo} alt="" className=" w-full h-full object-cover" />
                                        </div>
                                        <div className=" flex-1 flex  items-center justify-between">
                                            <div className=" h-full flex flex-col gap-1  justify-center">
                                                <h4 className="font-semibold text-base ">{experience.company}</h4>
                                                <span className="text-sm text-foreground/70">{experience.role}</span>

                                            </div>
                                            <div className="hidden  md:flex gap-2">
                                                <div className=" h-full flex flex-col  gap-1 justify-center">
                                                    <h4 className="text-foreground/70">{experience.duration}</h4>
                                                    <span className="text-sm text-foreground/70 ">{experience.location}</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <div className="md:hidden flex gap-2 mb-4">
                                    <div className=" h-full flex  w-full  gap-1 justify-between">
                                        <h4 className="text-sm text-foreground/70">{experience.duration}</h4>
                                        <span className="text-sm  text-foreground/70 ">{experience.location}</span>
                                    </div>
                                </div>
                                <AccordionContent className="space-y-4 ">
                                    <div className=" px-0 space-y-1">
                                        <h4 className="  text-sm font-bold">Technologies used</h4>
                                        <div className=" flex flex-wrap gap-2">
                                            {
                                                experience.technologies.map((technology) => (
                                                    <div key={technology} className="px-2 py-1 rounded-md text-xs  bg border border-dashed  flex items-center justify-center bg-muted border-foreground/60">
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
                            </motion.div>
                        ))
                    }

                </Accordion>
            </div>
        </div>
    )
}

export default WorkExperience
