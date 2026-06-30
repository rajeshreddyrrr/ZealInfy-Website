import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram,  FaBrain } from 'react-icons/fa';
import './About.css';

interface Stat {
  icon: JSX.Element;
  number: string;
  label: string;
}

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { icon: <FaBrain />, number: '5+', label: 'AI Dreamers' },
    { icon: <FaProjectDiagram />, number: '15+', label: 'Tech Stack Mastered' },
    { icon: <FaUsers />, number: '24/7', label: 'Startup Hustle' },
    { icon: <FaAward />, number: '100%', label: 'Passion Level' }
  ];

  const values: ValueItem[] = [
    {
      number: '01',
      title: '🚀 Innovation Driven',
      description: 'We dream in code and think in algorithms - always pushing the boundaries of what\'s possible'
    },
    {
      number: '02',
      title: '🏆 Results Guaranteed',
      description: 'Your success is our mission. We deliver solutions that drive real business impact'
    },
    {
      number: '03',
      title: '⚡ Lightning Execution',
      description: 'From concept to launch in record time - because great ideas deserve rapid execution'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">Meet the AI Dreamers</h2>
      <p className="section-subtitle">
        We're not just developers - we're passionate innovators obsessed with building the future
      </p>

      <div className="about-content">
        <div className="about-text">
          <h3 className="about-heading">Why Choose ZealInfy?</h3>
          <p className="about-description">
            At <span className="highlight">ZealInfy</span>, we're a fresh team of <strong>AI dreamers</strong> who live and breathe technology innovation. We're not just another development team - we're passionate builders ready to craft intelligent solutions that will transform businesses.
          </p>
          <p className="about-description">
            As a startup ourselves, we understand the hustle, the vision, and the drive it takes to build something amazing. We're here to be your <strong>technical co-founders</strong> - bringing cutting-edge AI and development expertise to turn your startup dreams into reality.
          </p>
          
          <div className="about-values">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-number">{value.number}</div>
                <div className="value-content">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
