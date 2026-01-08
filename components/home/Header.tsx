"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Boxes, FileText, Menu, X, Github, Linkedin } from "lucide-react";
import { ThemeToggleButton } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
    { name: "Projects", href: "/projects", icon: Boxes },
    { name: "Blogs", href: "/blogs", icon: FileText },
];



const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed  max-w-3xl mx-auto top-0 px-8 left-0 right-0 z-50 backdrop-blur-xl bg-background/20   ">
            <div className=" h-16 px-4 flex items-center justify-between">

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                {/* DESKTOP NAV */}
                <ul className="hidden md:flex items-center gap-6">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={40} height={40} className="dark:invert" />
                    </Link>
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

                            </li>
                        );
                    })}
                </ul>

                {/* TOGGLE ON RIGHT */}
                <ThemeToggleButton variant="polygon" />
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
                                    target="_blank"
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
