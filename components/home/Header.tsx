"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HomeIcon, Boxes, FileText, Menu, X, Twitter, Github, Linkedin } from "lucide-react";
import { ThemeToggleButton } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Projects", href: "/projects", icon: Boxes },
    { name: "Blogs", href: "/blogs", icon: FileText },
];

const socials = [
    { name: "twitter", logo: Twitter, href: "https://twitter.com/radheymugdal" },
    { name: "github", logo: Github, href: "https://github.com/radheymugdal" },
    { name: "linkedin", logo: Linkedin, href: "https://linkedin.com/in/radheymugdal" },
]

const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed max-w-3xl mx-auto top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/20  border-b">
            <div className=" h-16 px-6 flex items-center justify-between">

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* DESKTOP NAV */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <li key={item.href} className="relative group">
                                <a
                                    href={item.href}
                                    className={`flex items-center gap-1.5 text-sm  transition-opacity
                    ${active ? "opacity-100" : "opacity-70 group-hover:opacity-100"}
                  `}
                                >
                                    {item.name}
                                </a>

                                {/* Underline animation */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-white rounded-full transition-all duration-300 
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                                ></span>
                            </li>
                        );
                    })}
                </ul>

                {/* TOGGLE ON RIGHT */}
                <div className="flex gap-4">
                    <div className="flex gap-4 items-center">
                        {
                            socials.map((social) => {
                                const Icon = social.logo;
                                return (
                                    <a key={social.name} href={social.href} className=" opacity-75 hover:opacity-100 transition-colors duration-300">
                                        <Icon size={16} />
                                    </a>
                                )
                            })
                        }

                    </div>
                    <Separator orientation="vertical" className="  h-full" />
                    <ThemeToggleButton variant="polygon" />
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b px-6 py-3">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-2 text-sm font-medium transition
                    ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}
                  `}
                                >
                                    <Icon size={18} />
                                    {item.name}
                                </a>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
