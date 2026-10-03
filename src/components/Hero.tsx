import React from 'react';
import { FaArrowRight, FaBrain, FaInfinity, FaLightbulb, FaSparkles } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (): void => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-cosmic-ring hero-cosmic-ring-one" aria-hidden="true" />
      <div className="hero-cosmic-ring hero-cosmic-ring-two" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-signal"><FaSparkles /></span>
            Technology shaped by curiosity
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Build with</span>
            <span className="hero-title-line hero-title-gradient">ZEAL.</span>
            <span className="hero-title-line hero-title-outline">Imagine beyond.</span>
          </h1>

          <p className="hero-lead">
            ZealInfy is a technology company driven by a simple idea:
            <strong> passion should never have a limit.</strong>
            We turn that energy into software, AI, and digital experiences that
            open new possibilities for businesses.
          </p>

          <div className="hero-brand-equation">
            <div className="equation-word">
              <span>ZEAL</span>
              <small>Passion to create</small>
            </div>
            <span className="equation-symbol">+</span>
            <div className="equation-word">
              <span>INFY</span>
              <small>Infinite possibility</small>
            </div>
            <span className="equation-symbol">=</span>
            <div className="equation-result">ZEALINFY</div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Start a conversation
              <FaArrowRight />
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              Explore our thinking
            </button>
          </div>

          <div className="hero-signal-row">
            <span><FaBrain /> AI & intelligent systems</span>
            <span><FaLightbulb /> Product-minded engineering</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="infinity-universe">
            <div className="universe-halo universe-halo-one" />
            <div className="universe-halo universe-halo-two" />

            <div className="infinity-figure">
              <span className="infinity-stroke infinity-stroke-left" />
              <span className="infinity-stroke infinity-stroke-right" />
              <span className="infinity-trace infinity-trace-left" />
              <span className="infinity-trace infinity-trace-right" />
            </div>

            <div className="universe-core">
              <FaInfinity />
              <span>∞</span>
              <small>possibility</small>
            </div>

            <div className="universe-orb orb-ai"><FaBrain /></div>
            <div className="universe-orb orb-build"><FaLightbulb /></div>
            <div className="universe-orb orb-infinity"><FaInfinity /></div>

            <span className="universe-star star-one" />
            <span className="universe-star star-two" />
            <span className="universe-star star-three" />
            <span className="universe-star star-four" />
          </div>

          <div className="visual-caption">
            <span>Human curiosity</span>
            <strong>×</strong>
            <span>Technology without limits</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Explore the idea</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
