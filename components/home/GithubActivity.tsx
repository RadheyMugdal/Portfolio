
import { GitHubCalendar } from 'react-github-calendar';

const GithubActivity = () => {
    return (
        <div className=" max-w-2xl mx-auto">
            <div className=" space-y-8">
                <h3 className="text-xl font-bold">Github Activity</h3>
                <GitHubCalendar username="radheymugdal" blockSize={8.7} />
            </div>

        </div>
    )
}

export default GithubActivity
