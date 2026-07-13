import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Vision from '../components/Vision';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Vision />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
