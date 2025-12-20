import { allBlogs } from "@/.contentlayer/generated";
import Blogs from "@/components/home/Blog";
import BookCall from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import GithubActivity from "@/components/home/GithubActivity";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import WorkExperience from "@/components/home/WorkExperience";

export default async function HomePage() {
  const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 1)

  return (
    <div className="relative space-y-16">
      <Introduction />
      <Stack />
      <WorkExperience />
      <Projects />
      <GithubActivity />
      <Blogs blogs={blogs} />
      <BookCall />
      {/* <NavBar /> */}
    </div>
  );
}
