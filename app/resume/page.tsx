"use client";
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { motion } from "motion/react"

const ResumeClient = dynamic(() => import('./ResumeClient'), {
    ssr: false,
})

const fadeUpVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

export default function ResumePage() {
    useEffect(() => {
        document.title = "Resume | Radhey Mugdal"
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'View the resume of Radhey Mugdal, Software Engineer. Explore work experience, skills, education, and professional background.')
        }
    }, [])

    return (
        <motion.div
            className='mx-auto max-w-2xl pt-28 space-y-12'
        >
            <motion.h1
                className='text-center text-5xl font-semibold'
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                Resume
            </motion.h1>
            <motion.div
                className='bg-muted rounded-md relative min-h-[70vh]'
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <ResumeClient />
            </motion.div>
        </motion.div>
    )
}
