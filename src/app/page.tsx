import About from "@/components/about/about";
import cl from "./page.module.scss";

export default function Home() {
  return (
    <main className={cl.main}>
      <About />
    </main>
  );
}
