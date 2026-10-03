import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BuildPath, { ExperienceMode } from './components/BuildPath';
import ParticlesBackground from './components/ParticlesBackground';

const sectionIds = ['hero', 'about', 'build-path', 'skills', 'services', 'contact'];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [experienceMode, setExperienceMode] = useState<ExperienceMode>('idea');

  useEffect(() => {
    let frame = 0;
    const handleScroll = (): void => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
        setScrolled(scrollY > 50);
        document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3));
        frame = 0;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent): void => {
      document.documentElement.style.setProperty('--pointer-x', (event.clientX / window.innerWidth).toFixed(3));
      document.documentElement.style.setProperty('--pointer-y', (event.clientY / window.innerHeight).toFixed(3));
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    document.querySelectorAll('.section').forEach((section) => revealObserver.observe(section));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrentSection(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    return () => sectionObserver.disconnect();
  }, []);

  const changeMode = (mode: ExperienceMode): void => {
    setExperienceMode(mode);
    document.documentElement.style.setProperty('--experience-shift', mode === 'idea' ? '0deg' : mode === 'engineering' ? '42deg' : mode === 'intelligence' ? '84deg' : mode === 'cloud' ? '126deg' : mode === 'automation' ? '168deg' : '210deg');
  };

  return (
    <div className="App" data-current-section={currentSection} data-experience-mode={experienceMode}>
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
        <div className="ambient-grid" />
        <div className="cursor-atmosphere" />
        <div className="scroll-progress-glow" />
      </div>

      <ParticlesBackground />
      <Navbar scrolled={scrolled} currentSection={currentSection} />
      <Hero mode={experienceMode} onModeChange={changeMode} />
      <About />
      <BuildPath mode={experienceMode} onModeChange={changeMode} />
      <Skills mode={experienceMode} onModeChange={changeMode} />
      <Services mode={experienceMode} onModeChange={changeMode} />
      <Contact mode={experienceMode} />
      <Footer />
    </div>
  );
};

export default App;
