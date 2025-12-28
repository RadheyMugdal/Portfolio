import type { Metadata } from "next";
import { allBlogs } from "content-collections";
import Blogs from "@/components/home/Blog";
import BookCall from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import GithubActivity from "@/components/home/GithubActivity";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import WorkExperience from "@/components/home/WorkExperience";

export const metadata: Metadata = {
  title: "Radhey Mugdal - Software Engineer",
  description: "Welcome to the portfolio of Radhey Mugdal, a Software Engineer. Explore my work experience, tech stack, projects, and latest blog posts.",
  keywords: ["Radhey Mugdal", "Software Engineer", "Portfolio", "Web Developer", "Full Stack"],
  openGraph: {
    title: "Radhey Mugdal | Software Engineer",
    description: "Welcome to the portfolio of Radhey Mugdal, a Software Engineer. Explore my work experience, tech stack, projects, and latest blog posts.",
    type: "website",
  },
};

export default async function HomePage() {
  const blogs = await allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 1)

  return (
    <div className="relative space-y-12">
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
