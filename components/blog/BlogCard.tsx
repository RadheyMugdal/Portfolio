"use client";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  id: string;
  thumbnailurl: string;
  name: string;
  description: string;
  keywords: string[];
  date: string;
};

const BlogCard = ({
  id,
  thumbnailurl,
  name,
  description,
  keywords,
  date,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const router = useRouter();
  return (
    <Card
      key={id}
      className="pt-3 overflow-hidden border-none cursor-pointer"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        router.push(`/blogs/${id}`);
      }}
    >
      <div className=" w-[calc(100%-24px)] mx-auto h-48    rounded-md overflow-hidden ">
        <Image
          src={thumbnailurl}
          width={1028}
          height={780}
          alt="mockup"
          className=" w-full h-full object-cover"
        />
      </div>

      <CardHeader className=" px-4 ">
        <CardTitle className="  text-md font-semibold gap-[3px]   flex items-start   ">
          <span className="flex-1">{name}</span>
          <Link href={`/blogs/${id}`}></Link>
          <BlogCardButton
            containerRef={cardRef as React.RefObject<HTMLDivElement>}
            isHovered={isHovered}
            onClick={() => {
              router.push(`/blogs/${id}`);
            }}
          />
        </CardTitle>

        <CardDescription className=" opacity-60 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className=""></CardContent>
      <CardFooter className="mt-full">
        <div className="flex gap-1 flex-wrap">
          {keywords.map((keyword, index) => (
            <Badge key={index}>{keyword}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

type BlogCardButtonProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  isHovered: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BlogCardButton = ({
  containerRef,
  isHovered,
  className,
  ...props
}: BlogCardButtonProps) => {
  const arrow = useRef(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(arrow.current, {
          x: 6,
          y: -6,
          opacity: 0,
          duration: 0.35,
          ease: "expo.out",
        })
        .set(arrow.current, {
          x: -6,
          y: 6,
        })
        .to(
          arrow.current,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "expo.out",
          },
          "<+0.1",
        );
    },
    { scope: containerRef },
  );

  React.useEffect(() => {
    if (isHovered) {
      if (tl.current?.isActive()) return;
      tl.current?.restart();
    }
  }, [isHovered]);

  return (
    <button
      className={clsx(className, "overflow-hidden cursor-pointer")}
      {...props}
    >
      <ArrowUpRight
        ref={arrow}
        className=" size-6  will-change-transform will-change-opacity "
      />
    </button>
  );
};

export default BlogCard;
