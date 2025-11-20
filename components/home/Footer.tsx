import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <div className=' py-24  max-w-2xl mx-auto space-y-2 '>
            <div className="flex gap-4 items-center mx-auto w-fit ">
                <Twitter size={16} />
                <Github size={16} />
                <Linkedin size={16} />
            </div>
            <p className=" text-center text-sm opacity-75">Design and Developed by{" "}
                <span className="font-medium ">Radhey Mugdal</span>
            </p>
            <p className=" text-center text-sm opacity-75">
                © 2025. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
