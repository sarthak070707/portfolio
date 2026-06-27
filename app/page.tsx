import { Navbar } from "@/components/Navbar";
import { BackgroundPaths } from "@/components/BackgroundPaths";
import { Intro } from "@/components/Intro";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BackgroundPaths />
      <Intro />
      <ProjectsGrid />
      <About />
      <Contact />
    </main>
  );
}
