import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIOwn from "@/components/WhatIOwn";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import HowIWork from "@/components/HowIWork";
import Architecture from "@/components/Architecture";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatIOwn />
        <Projects />
        <CaseStudy />
        <HowIWork />
        <Architecture />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      {/* <ChatButton /> */}
    </div>
  );
}
