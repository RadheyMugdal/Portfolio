"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useRef } from 'react';
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in';

const GithubActivity = () => {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null)
    useScrollFadeIn(containerRef)
    return (
        <div className=" max-w-2xl mx-4 md:mx-auto" ref={containerRef}>
            <div className=" space-y-8">
                <h3 className="text-xl font-semibold scroll-entry">Github Activity</h3>
                <div className='scroll-entry'>
                    <GitHubCalendar
                        username="radheymugdal"
                        blockSize={8.7}
                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    />
                </div>
            </div>
        </div>
    )
}

export default GithubActivity
