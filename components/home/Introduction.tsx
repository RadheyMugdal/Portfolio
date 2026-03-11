"use client";
import { Button } from "../ui/button";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "twitter", logo: FaXTwitter, href: "https://twitter.com/radheymugdal" },
  { name: "github", logo: FaGithub, href: "https://github.com/radheymugdal" },
  { name: "linkedin", logo: FaLinkedin, href: "https://linkedin.com/in/radheymugdal" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const entryVariants = {
  hidden: {
    y: 30,
    opacity: 0,
    filter:'blur(10px)'
  },
  visible: {
    y: 0,
    opacity: 1,
    filter:'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Introduction = () => {
  return (
    <motion.div
      className="max-w-2xl mx-4 sm:mx-6 md:mx-auto space-y-6 sm:space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4 sm:space-y-6">
        <motion.div
          className="w-full h-32 sm:h-40 md:h-44 mt-12 sm:mt-16 md:mt-20 rounded-md overflow-hidden"
          variants={entryVariants}
        >
          <img src={"https://images.unsplash.com/photo-1706562017878-8d4a5d2f0e19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="object-cover w-full h-full" alt="img" />
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0"
          variants={entryVariants}
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Radhey Mugdal</h1>
            <p className="text-sm sm:text-base text-foreground/80">Full Stack Developer</p>
          </div>
          <div className="flex gap-3 sm:gap-4 items-center">
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
        </motion.div>
      </div>
      {/*about*/}

      <motion.div
        className="space-y-3 sm:space-y-4"
        variants={entryVariants}
      >
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
          <p className="text-foreground/80">
            tldr; learning by building, breaking, and shipping things.
          </p>
          <p className="text-foreground/80">
            full-stack dev who loves turning ideas into real, working web apps. obsessed with understanding how systems fit together and why they fall apart.
          </p>
          <p className="text-foreground/80">
            curiosity fuels everything I build.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-4"
        variants={entryVariants}
      >
        <Link href={"/resume"} className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <CgFileDocument />
            Resume/CV
          </Button>
        </Link>
        <Link href={"/contact"} className="w-full sm:w-auto">
          <Button variant={"outline"} className="w-full sm:w-auto">
            <IconSend />
            Get in touch
          </Button>
        </Link>
      </motion.div>

    </motion.div>
  );
};

export default Introduction;
