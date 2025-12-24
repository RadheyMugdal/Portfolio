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
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const NavBar = () => {
  const [selected, setSelected] = useState("Home");
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const navItems = [
    { id: "Home", icon: <HomeIcon size={20} />, href: "/" },
    { id: "Work", icon: <Briefcase size={20} />, href: "/work" },
    { id: "Projects", icon: <FolderGit size={20} />, href: "/projects" },
    { id: "Blog", icon: <Newspaper size={20} />, href: "/blog" },
  ];

  const handleItemClick = (itemId: string, element: HTMLAnchorElement) => {
    setSelected(itemId);

    // Animate background position
    if (backgroundRef.current) {
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement!.getBoundingClientRect();

      gsap.to(backgroundRef.current, {
        width: rect.width + 32,
        height: rect.height + 16,
        x: rect.left - parentRect.left - 16,
        y: rect.top - parentRect.top - 8,
        duration: 0.4,
        ease: "back.out(1.2)",
      });
    }

    // Animate text fade in
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );
    }
  };

  useEffect(() => {
    // Initial position setup for background
    const selectedItem = document.querySelector(`[data-nav-item="${selected}"]`) as HTMLAnchorElement;
    if (selectedItem && backgroundRef.current) {
      const rect = selectedItem.getBoundingClientRect();
      const parentRect = selectedItem.parentElement!.getBoundingClientRect();

      gsap.set(backgroundRef.current, {
        width: rect.width + 32,
        height: rect.height + 16,
        x: rect.left - parentRect.left - 16,
        y: rect.top - parentRect.top - 8,
      });
    }
  }, []);

  return (
    <div className="rounded-full overflow-hidden bg-black/10 backdrop-blur-xl border border-white/10 fixed bottom-4 left-1/2  -translate-x-1/2 z-50 h-16">
      <div className="w-full h-full space-x-6 p-2 flex items-center px-8 relative">

        {/* Animated Background */}
        {selected && (
          <div
            ref={backgroundRef}
            className="absolute top-0 left-0 rounded-full border border-white/20 bg-black/20 shadow-2xs shadow-white pointer-events-none"
          />
        )}

        {/* MAIN NAV */}
        <div className="flex items-center justify-center gap-6 relative z-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              data-nav-item={item.id}
              onClick={(e) => handleItemClick(item.id, e.currentTarget)}
              className="flex items-center justify-center gap-1 relative"
            >
              {item.icon}

              {selected === item.id && (
                <span ref={textRef}>
                  {item.id}
                </span>
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
