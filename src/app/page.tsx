import About from "@/components/about/about";
import cl from "./page.module.scss";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contacts";

export default function Home() {
  return (
    <main className={cl.main}>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
