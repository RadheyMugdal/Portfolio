import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Github, Globe } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type Props = {
    id: string,
    name: string,
    thumbnailUrl: string,
    description: string,
    githubUrl: string,
    webUrl: string,
    tech_stack: {
        name: string,
        icon: React.ReactNode
    }[]
}

const ProjectCard = ({ description, githubUrl, id, name, tech_stack, webUrl, thumbnailUrl }: Props) => {
    return (
        <Card key={id} className=" pt-0! overflow-hidden border-none ">
            <div className=" w-full h-[200px]  relative">
                <Image
                    src={thumbnailUrl}
                    fill
                    alt="mockup"
                    className=" object-cover"
                />
            </div>
            <div className=' flex flex-col flex-1 justify-between  gap-8'>
                <CardHeader className=" space-y-1" >
                    <CardTitle className=" text-xl flex items-center justify-between">
                        {name}
                        <div>
                            <Link target='_blank' href={webUrl}  >
                                <Button variant={"ghost"} size={"icon-sm"}>
                                    <Globe />
                                </Button>
                            </Link>
                            <Link target='_blank' href={githubUrl}>
                                <Button variant={"ghost"} size={"icon-sm"}>
                                    <Github />
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                    <CardDescription className=" opacity-60">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <p className="text-sm font-medium opacity-70">Tech stack</p>
                        <div className="flex gap-1 flex-wrap">
                            {
                                tech_stack.map((tech) => (
                                    <Tooltip key={tech.name}>
                                        <TooltipTrigger>
                                            <div className=" size-8">
                                                {tech.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom">
                                            {tech.name}
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </div>
                </CardContent>

            </div>
        </Card>
    )
}

export default ProjectCard