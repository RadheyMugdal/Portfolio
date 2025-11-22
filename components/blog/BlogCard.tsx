import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Props = {
    id: string,
    thumbnailurl: string,
    name: string,
    description: string,
    keywords: string[],
    date: string
}

const BlogCard = ({ id, thumbnailurl, name, description, keywords, date }: Props) => {
    return (
        <Card key={id} className=" pt-0! overflow-hidden border-none">
            <div className=" w-full h-52 ">
                <Image
                    src={thumbnailurl}
                    width={1028}
                    height={780}
                    alt="mockup"
                    className=" w-full h-full object-cover"
                />
            </div>
            <CardHeader  >
                <CardTitle className=" text-xl flex items-center justify-between">
                    {name}
                    <Link href={`/blogs/${id}`}>
                        <Button variant={"ghost"} size={"icon-sm"}  >
                            <ExternalLink size={16} />
                        </Button>
                    </Link>
                </CardTitle>

                <div className="flex gap-2 flex-wrap">
                    {
                        keywords.map((keyword) => (
                            <div key={keyword} className="bg-input/40 border border-dashed p-1  px-3 rounded-full text-xs ">
                                {keyword}
                            </div>
                        ))
                    }
                </div>

                <CardDescription className=" opacity-60 mt-2">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default BlogCard