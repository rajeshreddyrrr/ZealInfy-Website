import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram, FaBrain } from 'react-icons/fa';
import './About.css';

interface Stat {
  icon: JSX.Element;
  number: string;
  label: string;
}

interface ValueItem {
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
      title: 'Bold ideas, clear execution',
      description: 'We turn ambitious thinking into practical digital experiences that move fast and feel refined.'
    },
    {
      title: 'Built for momentum',
      description: 'From first sketch to launch, we keep the process sharp, structured, and deeply collaborative.'
    },
    {
      title: 'Crafted with purpose',
      description: 'Every decision is shaped around real outcomes, lasting impression, and measurable growth.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-shell">
        <div className="about-intro">
          <span className="about-tag">About ZealInfy</span>
          <h2 className="section-title">Meet the AI Dreamers</h2>
          <p className="section-subtitle">
            We are not just developers — we are curious builders creating thoughtful, future-ready digital experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">Why Choose ZealInfy?</h3>
            <p className="about-description">
              At <span className="highlight">ZealInfy</span>, we bring together creativity, strategy, and technology to help founders and teams build with confidence. We believe great products come from clarity, courage, and a deep understanding of what matters most.
            </p>
            <p className="about-description">
              As a startup ourselves, we understand the pressure to move quickly and think boldly. We act like your technical partners and help turn vision into experiences that feel modern, useful, and memorable.
            </p>

            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-marker" />
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-panel">
            <div className="about-panel-inner">
              <p className="panel-label">What we bring</p>
              <h3>Thoughtful innovation with a strong product instinct.</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
