import GithubActivity from "@/components/home/GithubActivity";
import Introduction from "@/components/home/Introduction";
import NavBar from "@/components/home/NavBar";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import WorkExperience from "@/components/home/WorkExperience";

export default function HomePage() {
  return (
    <div className="relative space-y-12">
      <Introduction />
      <Stack />
      <WorkExperience />
      <Projects />
      <GithubActivity />
      <NavBar />
    </div>
  );
}
