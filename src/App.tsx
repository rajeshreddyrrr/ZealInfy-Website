import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Partnership from './components/Partnership';
import Footer from './components/Footer';
import BuildPath, { ExperienceMode } from './components/BuildPath';
import ParticlesBackground from './components/ParticlesBackground';

const modeShift: Record<ExperienceMode, string> = {
  idea: '0deg',
  engineering: '42deg',
  intelligence: '84deg',
  cloud: '126deg',
  automation: '168deg',
  impact: '210deg',
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [experienceMode, setExperienceMode] = useState<ExperienceMode>('idea');

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent): void => {
      document.documentElement.style.setProperty('--pointer-x', (event.clientX / window.innerWidth).toFixed(3));
      document.documentElement.style.setProperty('--pointer-y', (event.clientY / window.innerHeight).toFixed(3));
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--experience-shift', modeShift[experienceMode]);
  }, [experienceMode]);

  const changeMode = (mode: ExperienceMode): void => setExperienceMode(mode);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App" data-experience-mode={experienceMode}>
        <div className="ambient-background" aria-hidden="true">
          <div className="ambient-orb ambient-orb-one" />
          <div className="ambient-orb ambient-orb-two" />
          <div className="ambient-orb ambient-orb-three" />
          <div className="ambient-grid" />
          <div className="cursor-atmosphere" />
        </div>

        <ParticlesBackground />
        <Navbar />

        <main className="experience-viewport">
          <Routes>
            <Route path="/" element={<Hero mode={experienceMode} onModeChange={changeMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/build" element={<BuildPath mode={experienceMode} onModeChange={changeMode} />} />
            <Route path="/technology" element={<Skills mode={experienceMode} onModeChange={changeMode} />} />
            <Route path="/services" element={<Services mode={experienceMode} onModeChange={changeMode} />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<Contact mode={experienceMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
