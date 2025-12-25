"use client"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
const socials = [
    { name: "twitter", logo: Twitter, href: "https://twitter.com/radheymugdal" },
    { name: "github", logo: Github, href: "https://github.com/radheymugdal" },
    { name: "linkedin", logo: Linkedin, href: "https://linkedin.com/in/radheymugdal" },
]

const Footer = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=' pt-32 pb-16  max-w-2xl mx-4 md:mx-auto space-y-1 ' ref={containerRef}>
            <div className="scroll-entry">
                <Image src="/logo.png" alt="logo" width={40} height={40} className="dark:invert mx-auto " />
            </div>
            <p className=" text-center text-sm text-foreground/60 scroll-entry">Design and Developed by{" "}
                <span className="font-medium text-foreground">Radhey Mugdal</span>
            </p>
            <p className=" text-center text-sm text-foreground/60 scroll-entry">
                © 2025. All rights reserved.
            </p>
            <div className="flex gap-4 mt-8 items-center mx-auto w-fit scroll-entry">
                {
                    socials.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.logo size={14} className=" text-foreground/60 hover:text-foreground" />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer
