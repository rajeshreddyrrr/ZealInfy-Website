import React, { useState, useEffect } from 'react';
import { FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import TypedText from './TypedText';
import './Hero.css';

const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const phrases = [
    'AI-Powered Web Applications',
    'Intelligent Automation Workflows',
    'Scalable Cloud Platforms',
    'Data-Driven Growth Engines'
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [phrases.length]);

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (): void => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">ZealInfy</span>, where passion meets AI.
          </h1>
          <p className="hero-subtitle">
            Delivering <TypedText key={phraseIndex} text={phrases[phraseIndex]} speed={55} className="hero-typing" />
          </p>
          <p className="hero-description">
            Partner with passionate AI dreamers who deliver cutting-edge web applications, intelligent automation, and scalable cloud solutions that drive real business results.
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <FaRocket className="feature-icon" />
              <span>Lightning-Fast Delivery</span>
            </div>
            <div className="feature-item">
              <FaBrain className="feature-icon" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="feature-item">
              <FaCode className="feature-icon" />
              <span>Enterprise-Grade Quality</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              🚀 Start Your Project
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              See Our Work
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <div className="card-text">Full-Stack Dev</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">⚛️</div>
            <div className="card-text">React Expert</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🤖</div>
            <div className="card-text">AI Solutions</div>
          </div>
          <div className="floating-card card-4">
            <div className="card-icon">🐍</div>
            <div className="card-text">Python Dev</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
