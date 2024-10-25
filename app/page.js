import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import LoadPage from "./LoadPage";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <LoadPage>
        <div className="flex justify-center items-center">
          <Hero />
        </div>
          <About />
          <Projects />
          <Contacts />
      </LoadPage>
    </main>
  );
}
