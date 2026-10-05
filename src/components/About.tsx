import React, { useState } from 'react';
import { FaArrowRight, FaBrain, FaInfinity, FaLightbulb } from 'react-icons/fa';
import './About.css';

interface Principle {
  number: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('01');

  const principles: Principle[] = [
    {
      number: '01',
      title: 'Question the obvious',
      description: 'We look beyond the first solution because better technology often starts with a better question.'
    },
    {
      number: '02',
      title: 'Make complexity useful',
      description: 'Great engineering turns difficult technology into experiences that feel simple to the people using them.'
    },
    {
      number: '03',
      title: 'Keep moving forward',
      description: 'We learn, experiment, and evolve because the best version of an idea is rarely the first one.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-shell">
        <div className="about-heading-row">
          <div>
            <span className="about-tag">Why ZealInfy exists</span>
            <h2 className="section-title">We don't want technology to stand still.</h2>
          </div>
          <div className="about-intro">
            <p className="about-intro-copy">
              ZealInfy comes from a belief that technology should create momentum —
              helping people imagine more, build faster, and solve problems that once
              felt out of reach.
            </p>
            <span className="about-entity">Legal entity · ZealInfy Software Pvt Ltd</span>
          </div>
        </div>

        <div className="brand-story">
          <div className="brand-story-word">
            <span className="story-label">01 / ZEAL</span>
            <h3>Start with something you care about.</h3>
            <p>
              Zeal is the energy behind the work — curiosity, persistence, experimentation,
              and the desire to make something genuinely better.
            </p>
          </div>

          <div className="brand-story-symbol" aria-hidden="true">
            <FaInfinity />
            <span className="brand-story-pulse" />
          </div>

          <div className="brand-story-word">
            <span className="story-label">02 / INFY</span>
            <h3>Never assume there is only one way.</h3>
            <p>
              Infy represents infinity: more ideas, more possibilities, and more ways
              for technology to create value.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-philosophy">
            <div className="philosophy-icon"><FaLightbulb /></div>
            <div>
              <span className="philosophy-label">The ZealInfy mindset</span>
              <h3>Imagine first. Engineer deeply. Improve continuously.</h3>
              <p>
                We bring together software engineering, cloud, AI, and product thinking
                to turn ambitious ideas into technology that can actually move a business forward.
              </p>
            </div>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <button
                key={principle.number}
                type="button"
                className={'principle ' + (activePrinciple === principle.number ? 'principle-active' : '')}
                onClick={() => setActivePrinciple(principle.number)}
              >
                <span className="principle-number">{principle.number}</span>
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </div>
                <FaArrowRight className="principle-arrow" />
              </button>
            ))}
          </div>
        </div>

        <div className="about-ai-note">
          <FaBrain />
          <span>AI is part of the journey — not the entire identity. We use technology where it creates something meaningful.</span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default About;
