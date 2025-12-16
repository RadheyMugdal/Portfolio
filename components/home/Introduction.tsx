import Image from "next/image";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { CgFileDocument } from "react-icons/cg";

const Introduction = () => {
  return (
    <div className=" max-w-2xl mx-8 md:mx-auto   space-y-12 ">
      <div className=" pt-28 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className=" text-3xl md:text-5xl font-bold">Hi, Radhey here</h1>
          <p className=" text-base md:text-lg opacity-60">Full Stack Web Developer</p>
        </div>
        <Image src={"/galaxy.png"} width={100} height={100} className=" size-18 md:size-32" alt="img" />
      </div>
      {/*about*/}

      <div className="space-y-4">
        <h3 className="text-xl font-bold">About</h3>
        <div className="space-y-4">
          <p className="opacity-60">
            tldr; learning by building, breaking, and shipping things.
          </p>
          <p className="opacity-60">
            full-stack dev who loves turning ideas into real, working web apps. obsessed with understanding how systems fit together and why they fall apart.
          </p>
          <p className="opacity-60">
            curiosity fuels everything I build.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href={"/resume"}>

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
