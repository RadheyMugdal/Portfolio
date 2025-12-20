"use client"
import { Button } from '@/components/ui/button'
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in'
import { Download } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

const ResumeClient = dynamic(() => import('./ResumeClient'), {
    ssr: false,
})

export default function ResumePage() {
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=' mx-auto max-w-2xl pt-28 space-y-12 ' ref={containerRef}>
            <h1 className='text-center text-5xl font-semibold scroll-entry scroll-entry'>Resume</h1>
            <div className=' bg-muted rounded-md relative min-h-[70vh] scroll-entry'>

                <ResumeClient />
            </div>
        </div>
    )
}
