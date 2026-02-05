import React from 'react';
import { FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
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
            Welcome to <span className="gradient-text">ZealInfy</span>
          </h1>
          <p className="hero-subtitle">
            Transforming Ideas into Reality with Modern Technology
          </p>
          <p className="hero-description">
            Expert solutions in Full-Stack Development, Cloud Technologies, and AI Integration
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <FaCode className="feature-icon" />
              <span>Modern Development</span>
            </div>
            <div className="feature-item">
              <FaRocket className="feature-icon" />
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <FaBrain className="feature-icon" />
              <span>AI Powered</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Get Started
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              Learn More
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
