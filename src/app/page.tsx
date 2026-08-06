import "./global.css"

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function HomePage() {
  return (
    <>

     <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
  <div className="glow top-0 left-0" />
<div className="glow bottom-0 right-0" />
    </>
  );
  
}