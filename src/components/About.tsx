import React from 'react';
import { FaArrowRight, FaBrain, FaInfinity, FaLightbulb } from 'react-icons/fa';
import './About.css';

interface Principle {
  number: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const principles: Principle[] = [
    {
      number: '01',
      title: 'Curiosity before convention',
      description: 'We stay curious about what technology can become, not just what it has already been used for.'
    },
    {
      number: '02',
      title: 'Build with purpose',
      description: 'Technology matters when it solves a real problem. We focus on useful experiences, practical engineering, and outcomes.'
    },
    {
      number: '03',
      title: 'Think beyond the brief',
      description: 'We look for opportunities to simplify, automate, and create something better than the obvious first solution.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-shell">
        <div className="about-heading-row">
          <div>
            <span className="about-tag">The idea behind ZealInfy</span>
            <h2 className="section-title">Passion is the starting point.</h2>
          </div>
          <p className="about-intro-copy">
            ZealInfy was born from a simple belief: when people genuinely care about
            what they build, technology becomes more than code.
          </p>
        </div>

        <div className="brand-story">
          <div className="brand-story-word">
            <span className="story-label">ZEAL</span>
            <h3>Passion to build.</h3>
            <p>
              The drive to learn, experiment, solve difficult problems, and keep
              improving what we create.
            </p>
          </div>

          <div className="brand-story-symbol" aria-hidden="true">
            <FaInfinity />
          </div>

          <div className="brand-story-word">
            <span className="story-label">INFY</span>
            <h3>Infinite possibilities.</h3>
            <p>
              The belief that technology gives us more ways to imagine, create,
              automate, and move businesses forward.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-philosophy">
            <div className="philosophy-icon"><FaLightbulb /></div>
            <div>
              <span className="philosophy-label">Our philosophy</span>
              <h3>Think boldly. Build thoughtfully. Keep evolving.</h3>
              <p>
                We combine product thinking, software engineering, cloud, and AI to
                help turn ideas into technology people can actually use.
              </p>
            </div>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <article key={principle.number} className="principle">
                <span className="principle-number">{principle.number}</span>
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-ai-note">
          <FaBrain />
          <span>AI is not the destination. It is one of the tools we use to create what comes next.</span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default About;
