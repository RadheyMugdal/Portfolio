"use client"
import {
  Briefcase,
  FolderGit,
  HomeIcon,
  LucideGithub,
  LucideLinkedin,
  MoonIcon,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { useState } from "react";

const NavBar = () => {
  const [selected, setSelected] = useState("Home");

  const navItems = [
    { id: "Home", icon: <HomeIcon size={20} />, href: "/" },
    { id: "Work", icon: <Briefcase size={20} />, href: "/work" },
    { id: "Projects", icon: <FolderGit size={20} />, href: "/projects" },
    { id: "Blog", icon: <Newspaper size={20} />, href: "/blog" },
  ];

  return (
    <div className="rounded-full overflow-hidden bg-black/10 backdrop-blur-xl border border-white/10 fixed bottom-4 left-1/2  -translate-x-1/2 z-50 h-16">
      <div className="w-full h-full space-x-6 p-2 flex items-center px-8">

        {/* MAIN NAV */}
        <div className="flex items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setSelected(item.id)}
              className="flex items-center justify-center gap-1 relative "
            >
              {selected === item.id && (
                <motion.div
                  layoutId="container"
                  className="absolute -inset-y-2 -inset-x-3 rounded-full border border-white/20 bg-black/20 px-4 shadow-2xs shadow-white"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                  }}
                />
              )}

              {item.icon}

              {selected === item.id && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4
                  }}
                >
                  {item.id}
                </motion.span>
              )}
            </Link>
          ))}
        </div>

        <Separator orientation="vertical" />

        {/* SOCIAL ICONS (left untouched) */}
        <div className="flex gap-6">
          <Link href={"/"} className="opacity-60">
            <FaXTwitter size={20} />
          </Link>
          <Link href={"/"} className="opacity-60">
            <LucideGithub size={20} />
          </Link>
          <Link href={"/"}>
            <LucideLinkedin size={20} className="opacity-60" />
          </Link>
        </div>

        <Separator orientation="vertical" />

        {/* DARK / LIGHT MODE (untouched) */}
        <div>
          <MoonIcon size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
