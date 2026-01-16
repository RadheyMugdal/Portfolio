import { ArrowUp, ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Props = {
  id: string;
  name: string;
  thumbnailUrl: string;
  description: string;
  githubUrl: string;
  webUrl: string;
  tech_stack: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const ProjectCard = ({
  description,
  githubUrl,
  id,
  name,
  tech_stack,
  webUrl,
  thumbnailUrl,
}: Props) => {
  return (
    <Card key={id} className=" pt-3 group overflow-hidden">
      <div className=" w-[calc(100%-24px)] rounded-md overflow-hidden mx-auto h-[200px]  relative">
        <Image
          src={thumbnailUrl}
          fill
          alt="mockup"
          className=" group-hover:scale-110 transition-transform duration-400 ease-in-out object-cover"
        />
      </div>
      <div className=" flex flex-col flex-1 justify-between  gap-4">
        <CardHeader className=" px-4 space-y-1">
          <CardTitle className=" text-xl flex items-center justify-between">
            {name}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <div className="space-y-3">
            <p className="text-sm font-medium opacity-muted-foreground">
              Tech stack
            </p>
            <div className="flex gap-1 flex- wrap">
              {tech_stack.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <div className="size-9 rounded-md bg-muted/50 p-1.5 flex items-center justify-center hover:bg-muted hover:scale-110 transition-all duration-200 cursor-pointer border border-border/50 hover:border-border">
                      {tech.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href={githubUrl} target="_blank">
              <Button variant={"secondary"} className=" w-full">
                <Github />
                Github
              </Button>
            </Link>
            <Link href={webUrl} target="_blank">
              <Button className="group/button w-full">
                <Globe />
                Visit
                <ArrowUpRight className="group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
