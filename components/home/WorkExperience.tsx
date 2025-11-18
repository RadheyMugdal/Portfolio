import { Twitter } from "lucide-react"

const WorkExperience = () => {
    return (
        <div className=" max-w-2xl mx-auto">
            <div className=" space-y-4">
                <h3 className="text-xl font-bold">Work Experience</h3>
                <div className="flex  gap-4">
                    <div className="  size-18  items-center justify-center flex  rounded-sm bg-card">
                        <Twitter />
                    </div>
                    <div className=" flex-1 flex  items-center justify-between">
                        <div className=" h-full flex flex-col gap-1  justify-center">
                            <h4 className="font-medium ">Practiskill Pvt Ltd</h4>
                            <span className="text-xs opacity-60">Full Stack Developer</span>
                        </div>
                        <div className=" h-full flex flex-col  gap-1 justify-center">
                            <h4 className=" opacity-60  ">Augest 2024 - Present </h4>
                            <span className="text-xs   opacity-60 ">Bangluru (Remote)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
