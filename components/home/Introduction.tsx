"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { CgFileDocument } from "react-icons/cg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

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
      duration: 0.8,
      stagger: 0.1,
    })
  })
  return (
    <div className=" max-w-2xl mx-4 md:mx-auto   space-y-12 ">
      <div className=" pt-28 flex items-center justify-between">
        <div className="flex flex-col gap-1" >
          <h1 className=" text-2xl md:text-5xl font-bold entry">Hi, Radhey here</h1>
          <p className=" text-sm   md:text-lg text-foreground/60 entry">Full Stack Web Developer</p>
        </div>
        <Image src={"/galaxy.png"} width={100} height={100} className=" size-18 entry md:size-32" alt="img" />
      </div>
      {/*about*/}

      <div className="space-y-4" >
        <h3 className="text-xl font-bold entry">About</h3>
        <div className="space-y-4 text-sm md:text-base">
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
