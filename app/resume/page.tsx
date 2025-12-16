"use client"
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import dynamic from 'next/dynamic'

const ResumeClient = dynamic(() => import('./ResumeClient'), {
    ssr: false,
})

export default function ResumePage() {
    return (
        <div className=' mx-auto max-w-2xl pt-28 space-y-12 '>
            <h1 className='text-center text-5xl font-semibold'>Resume</h1>
            <div className=' bg-muted rounded-md relative'>

                <ResumeClient />
            </div>
        </div>
    )
}
