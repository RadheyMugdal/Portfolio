import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'

type Props = {
    id: string,
    thumbnailurl: string,
    name: string,
    description: string,
    keywords: string[],
    date: number
}

const BlogCard = ({ id, thumbnailurl, name, description, keywords, date }: Props) => {
    return (
        <Card key={id} className=" !pt-0 overflow-hidden border-none">
            <div className=" w-full h-52 ">
                <Image
                    src={thumbnailurl}
                    width={1028}
                    height={780}
                    alt="mockup"
                    className=" w-full h-full bg-cover"
                />
            </div>
            <CardHeader className="  space-y-2" >
                <CardTitle className=" text-xl flex items-center justify-between">
                    {name}
                    <Button variant={"ghost"} size={"icon-sm"} >
                        <ExternalLink size={16} />
                    </Button>
                </CardTitle>
                <div className=" space-y-2">
                    {/* <h3 className=" font-bold text-xs">Keyword</h3> */}
                    <div className="flex gap-2 flex-wrap">
                        {
                            keywords.map((keyword) => (
                                <div key={keyword} className="bg-input/40 border border-dashed p-1  px-3 rounded-full text-xs ">
                                    {keyword}
                                </div>
                            ))
                        }
                    </div>
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