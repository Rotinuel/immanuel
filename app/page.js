import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Websites from "@/components/Websites";
import MobileApps from "@/components/MobileApps";
import ResumeBand from "@/components/ResumeBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main>
        <Nav/>
        <Hero/>
        <About/>
        <Websites/>
        <MobileApps/>
        <ResumeBand/>
        <Contact/>
        <Footer/>
      </main>
  );
}
