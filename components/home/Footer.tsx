import { Github, Linkedin, Twitter } from "lucide-react"
const socials = [
    { name: "twitter", logo: Twitter, href: "https://twitter.com/radheymugdal" },
    { name: "github", logo: Github, href: "https://github.com/radheymugdal" },
    { name: "linkedin", logo: Linkedin, href: "https://linkedin.com/in/radheymugdal" },
]

const Footer = () => {
    return (
        <div className=' py-32  max-w-2xl mx-4 md:mx-auto space-y-2 '>
            <div className="flex gap-4 items-center mx-auto w-fit ">
                {
                    socials.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.logo size={16} className=" text-foreground/60 hover:text-foreground" />
                        </a>
                    ))
                }
            </div>
            <p className=" text-center text-sm text-foreground/60  ">Design and Developed by{" "}
                <span className="font-medium text-foreground">Radhey Mugdal</span>
            </p>
            <p className=" text-center text-sm text-foreground/60">
                © 2025. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
