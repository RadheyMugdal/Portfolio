"use client"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { Github, Linkedin, Twitter, Boxes, FileText, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { name: "twitter", logo: FaXTwitter, href: "https://twitter.com/radheymugdal", color: "hover:text-[#1DA1F2]" },
    { name: "github", logo: FaGithub, href: "https://github.com/radheymugdal", color: "hover:text-foreground" },
    { name: "linkedin", logo: FaLinkedin, href: "https://linkedin.com/in/radheymugdal", color: "hover:text-[#0077B5]" },
]

const navLinks = [
    { name: "Projects", href: "/projects", icon: Boxes },
    { name: "Blogs", href: "/blogs", icon: FileText },
]

const Footer = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    useScrollFadeIn(containerRef)

    return (
        <footer className='pt-24 pb-12 max-w-2xl  px-4  mx-4 sm:mx-auto relative' ref={containerRef}>
            {/* Top divider with pattern */}
            <div className="scroll-entry mb-16">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-background px-6">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-12 bg-linear-to-r from-transparent to-foreground/20"></div>
                                <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
                                <div className="h-px w-12 bg-linear-to-l from-transparent to-foreground/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                {/* Brand section */}
                <div className="scroll-entry md:col-span-1">
                    <Link href="/" className="inline-block mb-6 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-foreground/5 rounded-lg blur-md group-hover:bg-foreground/10 transition-all duration-500"></div>
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={44}
                                height={44}
                                className="dark:invert relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
                            />
                        </div>
                    </Link>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                        Full Stack Web Developer building modern web experiences.
                    </p>
                </div>

                {/* Navigation section */}
                <div className="scroll-entry md:col-span-1">
                    <h4 className="text-sm font-semibold mb-4 text-foreground">Navigation</h4>
                    <ul className="space-y-3">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-all duration-300"
                                        onMouseEnter={() => setHoveredLink(link.href)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        target="_blank"
                                    >
                                        <Icon
                                            size={14}
                                            className={`transition-transform duration-300 ${hoveredLink === link.href ? 'translate-x-1' : ''
                                                }`}
                                        />
                                        <span>{link.name}</span>
                                        <ArrowUpRight
                                            size={12}
                                            className={` transition-all duration-300 ${hoveredLink === link.href
                                                ? 'opacity-100 translate-x-0.5 -translate-y-0.5'
                                                : 'opacity-0 -translate-x-1 translate-y-1'
                                                }`}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Social & Contact section */}
                <div className="scroll-entry md:col-span-1 pl-auto ">
                    <h4 className="text-sm font-semibold mb-4 text-foreground">Connect</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            {

                                socials.map((social) => {
                                    const Icon = social.logo;
                                    return (
                                        <Link target="_blank" key={social.name} href={social.href} className="opacity-75 hover:opacity-100 transition-colors duration-300">
                                            <Icon size={16} className="sm:w-4 sm:h-4" />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <Link
                            href="/contact"
                            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1.5 group"
                        >
                            <span>Get in touch</span>
                            <ArrowUpRight
                                size={12}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="scroll-entry pt-8 border-t border-border/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-foreground/50 text-center md:text-left">
                        © 2026 <span className="font-medium text-foreground/70">Radhey Mugdal</span>. All rights reserved.
                    </p>
                    <p className="text-xs text-foreground/50 text-center md:text-right">
                        Design & Developed with{" "}
                        <span className="inline-flex items-center gap-1">
                            <span className="text-red-500 animate-pulse">♥</span>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
