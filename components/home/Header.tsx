"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconBoxMultiple, IconFileText, IconMenu2, IconX, IconSearch } from "@tabler/icons-react";
import { ThemeToggleButton } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { CommandPalette } from "../global/CommandPalette";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
    { name: "Projects", href: "/projects", icon: IconBoxMultiple },
    { name: "Blogs", href: "/blogs", icon: IconFileText },
];



const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed  max-w-3xl mx-auto top-0  md:px-8 left-0 right-0 z-50 bg-background   ">
            <div className=" h-16 px-4 flex items-center justify-between">

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
                </button>

                {/* DESKTOP NAV */}
                <div className="flex items-center gap-8">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={40} height={40} className="dark:invert" />
                </Link>
                    <ul className="hidden md:flex items-center gap-4">

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
                </div>
                

                <div className="flex items-center gap-4">
                 
                       <button
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 rounded-md hover:bg-muted transition-colors"
                        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }))}
                    >
                        <IconSearch size={14} />
                        <span>Search...</span>
                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>
                    <ThemeToggleButton variant="polygon" />
                </div>
                {/* TOGGLE ON RIGHT */}
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
            <CommandPalette />
        </div>
    );
};

export default Header;
