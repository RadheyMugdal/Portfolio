import Blogs from "@/components/home/Blog";
import Footer from "@/components/home/Footer";
import GithubActivity from "@/components/home/GithubActivity";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import WorkExperience from "@/components/home/WorkExperience";

export default function HomePage() {
  return (
    <div className="relative space-y-16">
      <Introduction />
      <Stack />
      <WorkExperience />
      <Projects />
      <GithubActivity />
      <Blogs />
      {/* <NavBar /> */}
    </div>
  );
}
