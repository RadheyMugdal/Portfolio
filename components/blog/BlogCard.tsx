"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import {
  Card,
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
  const router = useRouter();
  return (
    <motion.div
      whileHover={"hover"}
      initial="rest"
    >
    <Card
      key={id}
      className="pt-3 overflow-hidden group cursor-pointer flex flex-col h-full"
      onClick={() => {
        router.push(`/blogs/${id}`);
      }}
    >
      <div className="w-[calc(100%-24px)] mx-auto h-48 rounded-md overflow-hidden">
        <Image
          src={thumbnailurl}
          width={1028}
          height={780}
          alt="mockup"
          className="w-full group-hover:scale-110 transition-transform duration-400 ease-in-out h-full object-cover"
        />
      </div>

      <CardHeader className="px-4">
        <CardTitle className="text-md font-semibold gap-[3px] flex items-start">
          <span className="flex-1">{name}</span>
          <Link href={`/blogs/${id}`}></Link>
          <BlogCardButton
            onClick={() => {
              router.push(`/blogs/${id}`);
            }}
          />
        </CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-full px-4 mt-auto">
        <div className="flex gap-1 flex-wrap">
          {keywords.map((keyword, index) => (
            <Badge key={index}>{keyword}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
    </motion.div>
  );
};

const arrowVariants = {
  rest: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 6,
    y: -6,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

type BlogCardButtonProps = {
  className?: string;
  onClick?: () => void;
};

const BlogCardButton = ({
  className,
  onClick,
}: BlogCardButtonProps) => {
  return (
    <motion.button
      className={clsx(className, "overflow-hidden cursor-pointer")}
      onClick={onClick}
      variants={arrowVariants}
    >
      <IconArrowUpRight className="size-6 will-change-transform will-change-opacity" />
    </motion.button>
  );
};

export default BlogCard;
