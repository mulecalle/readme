import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function App() {
  return (
    <SmoothScrollProvider>
      <AuroraBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
