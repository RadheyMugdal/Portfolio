"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';

const GithubActivity = () => {
    const { theme } = useTheme();

    return (
        <div className=" max-w-2xl mx-4 md:mx-auto">
            <div className=" space-y-8">
                <h3 className="text-xl font-bold">Github Activity</h3>
                <GitHubCalendar
                    username="radheymugdal"
                    blockSize={8.7}
                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                />
            </div>
        </div>
    )
}

export default GithubActivity
