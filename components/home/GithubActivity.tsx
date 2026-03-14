"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { motion } from "motion/react";

const fadeUpVariant = {
    hidden: { opacity: 0,filter:'blur(10px)' },
    visible: {
        opacity: 1,
        filter:'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        }
    }
}

const GithubActivity = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            className="max-w-2xl mx-4 md:mx-auto"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="space-y-8">
                <h3 className="text-xl font-semibold">
                    Github Activity
                </h3>
                <div>
                    <GitHubCalendar
                        username="radheymugdal"
                        blockSize={8.7}
                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default GithubActivity
