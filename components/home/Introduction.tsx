"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, Send } from "lucide-react";
import Link from "next/link";
import { CgFileDocument } from "react-icons/cg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { Separator } from "../ui/separator";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const socials = [
  { name: "twitter", logo: FaXTwitter, href: "https://twitter.com/radheymugdal" },
  { name: "github", logo: FaGithub, href: "https://github.com/radheymugdal" },
  { name: "linkedin", logo: FaLinkedin, href: "https://linkedin.com/in/radheymugdal" },
]
const Introduction = () => {
  useGSAP(() => {
    // Immediately set initial hidden state to prevent flash
    gsap.set('.entry', {
      y: 40,
      filter: 'blur(10px)',
      opacity: 0,
    })

    // Then animate to final state
    gsap.to('.entry', {
      y: 0,
      filter: 'blur(0px)',
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,

    })
  })
  return (
    <div className=" max-w-2xl mx-4 md:mx-auto   space-y-8 ">
      <div className=" space-y-6">
        <div className=" w-full h-44 mt-20  rounded-lg overflow-hidden">
          <img src={"https://images.unsplash.com/photo-1706562017878-8d4a5d2f0e19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className=" object-cover  w-full h-full" alt="img" />
        </div>
        <div className="  flex items-start  justify-between">
          <div className="flex flex-col gap-1" >
            <h1 className=" text- 2xl md:text-4xl font-semibold entry">Radhey Mugdal</h1>
            <p className=" text-sm   md:text-base text-foreground/60 entry">Full Stack Web Developer</p>

          </div>
          <div className="flex gap-4 entry  items-center">
            {
              socials.map((social) => {
                const Icon = social.logo;
                return (
                  <Link target="_blank" key={social.name} href={social.href} className=" opacity-75 hover:opacity-100 transition-colors duration-300">
                    <Icon size={16} />
                  </Link>
                )
              })
            }

          </div>
        </div>
      </div>
      {/*about*/}

      <div className="space-y-4" >
        <div className="space-y-5 text-sm md:text-base">
          <p className="text-foreground/60 entry">
            tldr; learning by building, breaking, and shipping things.
          </p>
          <p className="text-foreground/60 entry">
            full-stack dev who loves turning ideas into real, working web apps. obsessed with understanding how systems fit together and why they fall apart.
          </p>
          <p className="text-foreground/60 entry">
            curiosity fuels everything I build.
          </p>
        </div>

      </div>
      <div className="flex gap-4 entry">
        <Link href={"/resume"} >

          <Button>
            <CgFileDocument />
            Resume/CV</Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant={"outline"}>
            <Send />
            Get in touch
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default Introduction;
