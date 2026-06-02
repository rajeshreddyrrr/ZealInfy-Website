import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'services', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.25,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App" data-current-section={currentSection}>
      <ParticlesBackground />
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      {/* <Products /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
