"use client"
import { IconArrowUpRight, IconBoxMultiple, IconFileText } from "@tabler/icons-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6"

import { FaGithub, FaLinkedin } from "react-icons/fa"

const fadeUpVariant = {
    hidden: {  opacity: 0 ,filter:'blur(10px)'},
    visible: {
        opacity: 1,
        filter:'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

const socials = [
    { name: "twitter", logo: FaXTwitter, href: "https://twitter.com/radheymugdal", color: "hover:text-[#1DA1F2]" },
    { name: "github", logo: FaGithub, href: "https://github.com/radheymugdal", color: "hover:text-foreground" },
    { name: "linkedin", logo: FaLinkedin, href: "https://linkedin.com/in/radheymugdal", color: "hover:text-[#0077B5]" },
]

const navLinks = [
    { name: "Projects", href: "/projects", icon: IconBoxMultiple },
    { name: "Blogs", href: "/blogs", icon: IconFileText },
]

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    return (
        <footer className='pt-24 pb-12 max-w-2xl px-4 mx-4 sm:mx-auto relative'>
            <motion.div
            >
                {/* Top divider with pattern */}
                <motion.div
                    className="mb-16"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
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
                </motion.div>

                {/* Main footer content grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Brand section */}
                    <div className="md:col-span-1">
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
                    <div className="md:col-span-1">
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
                                            <IconArrowUpRight
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
                    <div className="md:col-span-1 pl-auto ">
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
                                <IconArrowUpRight
                                    size={12}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom section */}
                <motion.div
                    className="pt-8 border-t border-border/30"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
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
                </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer
