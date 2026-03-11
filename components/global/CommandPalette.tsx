"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Boxes,
  FileText,
  User,
  Mail,
  Home,
  File,
  Github,
  Linkedin,
  X,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

interface CommandItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string;
}

const commandItems: CommandItem[] = [
  {
    id: "home",
    name: "Go to Home",
    href: "/",
    icon: Home,
    shortcut: "G H",
  },
  {
    id: "projects",
    name: "View Projects",
    href: "/projects",
    icon: Boxes,
    shortcut: "G P",
  },
  {
    id: "blogs",
    name: "Read Blogs",
    href: "/blogs",
    icon: FileText,
    shortcut: "G B",
  },
  {
    id: "resume",
    name: "View Resume",
    href: "/resume",
    icon: File,
    shortcut: "G R",
  },
  {
    id: "contact",
    name: "Contact Me",
    href: "/contact",
    icon: Mail,
    shortcut: "G C",
  },
];

const socialItems: CommandItem[] = [
  {
    id: "github",
    name: "GitHub Profile",
    href: "https://github.com/radheymugdal",
    icon: Github,
  },
  {
    id: "linkedin",
    name: "LinkedIn Profile",
    href: "https://linkedin.com/in/radheymugdal",
    icon: Linkedin,
  },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }

      // Keyboard shortcuts for navigation
      if (open && e.key === "h" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/");
        setOpen(false);
      }
      if (open && e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/projects");
        setOpen(false);
      }
      if (open && e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/blogs");
        setOpen(false);
      }
      if (open && e.key === "r" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/resume");
        setOpen(false);
      }
      if (open && e.key === "c" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/contact");
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, router]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fab-button fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 md:hidden"
        aria-label="Open command palette"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen} className="max-w-lg">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {commandItems.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    runCommand(() => {
                      if (item.href.startsWith("http")) {
                        window.open(item.href, "_blank");
                      } else {
                        router.push(item.href);
                      }
                    });
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                  {item.shortcut && (
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandGroup heading="Social">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    runCommand(() => {
                      window.open(item.href, "_blank");
                    });
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
