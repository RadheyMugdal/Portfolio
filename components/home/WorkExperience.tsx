import { Twitter } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const WorkExperience = () => {
    return (
        <div className=" max-w-2xl mx-auto">
            <div className=" space-y-4">
                <h3 className="text-xl font-bold">Work Experience</h3>
                <Accordion type="single" collapsible defaultValue="experience">
                    <AccordionItem value="experience" >
                        <AccordionTrigger className=" w-full hover:no-underline" >
                            <div className="flex  w-full gap-4">
                                <div className="  size-18  items-center justify-center flex  rounded-sm bg-card">
                                    <Twitter />
                                </div>
                                <div className=" flex-1 flex  items-center justify-between">
                                    <div className=" h-full flex flex-col gap-1  justify-center">
                                        <h4 className="font-medium ">Practiskill Pvt Ltd</h4>
                                        <span className="text-xs opacity-60">Full Stack Developer</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className=" h-full flex flex-col  gap-1 justify-center">
                                            <h4 className=" opacity-60  ">Augest 2024 - Present </h4>
                                            <span className="text-xs   opacity-60 ">Bangluru (Remote)</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="  space-y-4 ">
                            <div className=" px-0 space-y-1">
                                <h4 className=" text-lg font-bold">Technologies used</h4>
                                <div className=" flex flex-wrap gap-2">
                                    <div className=" h-6  px-4 rounded-md border border-dashed  flex items-center justify-center bg-card">
                                        Nextjs
                                    </div>

                                    <div className=" h-6  px-4 rounded-md border border-dashed  flex items-center justify-center bg-card">
                                        Reactjs
                                    </div>

                                    <div className=" h-6  px-4 rounded-md border border-dashed  flex items-center justify-center bg-card">
                                        Typescript
                                    </div>

                                    <div className=" h-6  px-4 rounded-md border border-dashed  flex items-center justify-center bg-card">
                                        Nodejs
                                    </div>

                                </div>
                            </div>
                            <ul className=" space-y-1.5  list-disc opacity-75">
                                <li>
                                    <p> Created Quaric Brand Identity.</p>
                                </li>
                                <li>
                                    <p>Created the Quaric Design System to standardize design practices and accelerate development.</p>
                                </li>
                                <li>
                                    <p>Designed the UI/UX for Quaric Website, delivering a seamless experience.</p>
                                </li>
                                <li>
                                    <p>Created the Quaric Design System to standardize design practices and accelerate development.</p>
                                </li>
                            </ul>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default WorkExperience
