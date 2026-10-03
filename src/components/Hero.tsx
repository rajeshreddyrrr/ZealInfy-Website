import React from 'react';
import { FaArrowRight, FaBrain, FaInfinity, FaStar } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (): void => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Passion. Technology. Infinite Possibilities.
          </div>

          <h1 className="hero-title">
            Where <span className="hero-title-accent">passion</span>
            <br />
            meets <span className="hero-title-accent">AI.</span>
          </h1>

          <p className="hero-lead">
            ZealInfy is built by people who are genuinely passionate about technology —
            creating intelligent products, modern digital experiences, and AI-powered
            solutions that turn ambitious ideas into reality.
          </p>

          <div className="hero-brand-meaning">
            <div className="meaning-item">
              <span className="meaning-word">ZEAL</span>
              <span className="meaning-description">The passion to build.</span>
            </div>
            <div className="meaning-divider" />
            <div className="meaning-item">
              <span className="meaning-word">INFY</span>
              <span className="meaning-description">Infinite possibilities.</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Let's Build Together
              <FaArrowRight />
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              Discover ZealInfy
            </button>
          </div>

          <div className="hero-trust-line">
            <span><FaBrain /> AI-first thinking</span>
            <span><FaInfinity /> Built for what’s next</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="infinity-stage">
            <div className="infinity-glow" />
            <div className="infinity-symbol">
              <span className="infinity-loop infinity-loop-left" />
              <span className="infinity-loop infinity-loop-right" />
            </div>

            <div className="visual-core">
              <span className="core-label">ZEAL</span>
              <span className="core-divider" />
              <span className="core-label">INFY</span>
            </div>

            <div className="visual-node node-one"><FaBrain /></div>
            <div className="visual-node node-two"><FaInfinity /></div>
            <div className="visual-node node-three"><FaStar /></div>
          </div>

          <div className="visual-caption">
            <span>Human passion</span>
            <strong>×</strong>
            <span>Infinite technology</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
