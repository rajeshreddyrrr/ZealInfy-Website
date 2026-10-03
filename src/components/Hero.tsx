import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaBrain, FaCloud, FaCogs, FaCode, FaInfinity, FaLightbulb, FaStar } from 'react-icons/fa';
import { ExperienceMode } from './BuildPath';
import './Hero.css';

interface HeroProps { mode: ExperienceMode; onModeChange: (mode: ExperienceMode) => void; onExplore: () => void; }

const nodes: { mode: ExperienceMode; label: string; icon: JSX.Element; x: string; y: string }[] = [
  { mode: 'idea', label: 'IDEA', icon: <FaLightbulb />, x: '50%', y: '8%' },
  { mode: 'engineering', label: 'ENGINEERING', icon: <FaCode />, x: '88%', y: '34%' },
  { mode: 'intelligence', label: 'AI', icon: <FaBrain />, x: '72%', y: '84%' },
  { mode: 'cloud', label: 'CLOUD', icon: <FaCloud />, x: '27%', y: '84%' },
  { mode: 'automation', label: 'AUTOMATION', icon: <FaCogs />, x: '12%', y: '35%' }
];

const modeCopy: Record<ExperienceMode, { eyebrow: string; title: string; detail: string }> = {
  idea: { eyebrow: 'Start with curiosity', title: 'Build with ZEAL. Imagine beyond.', detail: 'Bring an idea. We turn the unknown into something you can use, test, learn from, and grow.' },
  engineering: { eyebrow: 'Engineering without friction', title: 'Make complex things feel simple.', detail: 'Product engineering, modern architecture, and clean systems built around the way your business actually works.' },
  intelligence: { eyebrow: 'Intelligence, applied', title: 'Add intelligence where it matters.', detail: 'AI, LLMs, agents, and automation become useful when they solve a real problem inside the product or workflow.' },
  cloud: { eyebrow: 'Built for what comes next', title: 'Give your systems room to grow.', detail: 'Cloud architecture and modernization that create stronger foundations without losing sight of the product.' },
  automation: { eyebrow: 'Remove the repetitive', title: 'Let technology carry the routine.', detail: 'Connect the pieces, automate the handoffs, and give people more time for work that needs judgment.' },
  impact: { eyebrow: 'Keep moving', title: 'Turn engineering capacity into momentum.', detail: 'Extend your team with focused engineering support while keeping ownership, quality, and direction close.' }
};

const Hero: React.FC<HeroProps> = ({ mode, onModeChange, onExplore }) => {
  const navigate = useNavigate();
  const copy = modeCopy[mode];
  const scrollTo = (id: string): void => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero-cosmic-ring hero-cosmic-ring-one" aria-hidden="true" />
      <div className="hero-cosmic-ring hero-cosmic-ring-two" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow"><span className="eyebrow-signal"><FaStar /></span>{copy.eyebrow}</div>
          <h1 className="hero-title">
            <span className="hero-title-line">{copy.title.split('. ')[0]}{copy.title.includes('. ') ? '.' : ''}</span>
            {copy.title.includes('. ') && <span className="hero-title-line hero-title-gradient">{copy.title.split('. ')[1]}</span>}
          </h1>
          <p className="hero-lead">{copy.detail}</p>

          <div className="hero-brand-equation">
            <div className="equation-word"><span>ZEAL</span><small>Passion to create</small></div>
            <span className="equation-symbol">+</span>
            <div className="equation-word"><span>INFY</span><small>Infinite possibility</small></div>
            <span className="equation-symbol">=</span>
            <div className="equation-result">ZEALINFY</div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={onExplore}>Explore your path <FaArrowRight /></button>
            <button className="btn-secondary" onClick={() => navigate('/contact')}>Start a conversation</button>
          </div>

          <div className="hero-signal-row">
            <span><FaBrain /> AI & intelligent systems</span>
            <span><FaCode /> Product-minded engineering</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className={'infinity-universe mode-' + mode}>
            <div className="universe-halo universe-halo-one" />
            <div className="universe-halo universe-halo-two" />
            <div className="infinity-figure">
              <span className="infinity-stroke infinity-stroke-left" />
              <span className="infinity-stroke infinity-stroke-right" />
              <span className="infinity-trace infinity-trace-left" />
              <span className="infinity-trace infinity-trace-right" />
            </div>

            <div className="experience-lines" aria-hidden="true">
              {nodes.map((node) => <span key={node.mode} style={{ left: node.x, top: node.y }} />)}
            </div>

            <button className="universe-core" type="button" onClick={() => scrollTo('build-path')} aria-label="Explore ZealInfy possibilities">
              <FaInfinity />
              <strong>ZEALINFY</strong>
              <small>{mode.toUpperCase()}</small>
            </button>

            {nodes.map((node) => (
              <button
                key={node.mode}
                type="button"
                className={'universe-node node-' + node.mode + (mode === node.mode ? ' universe-node-active' : '')}
                style={{ left: node.x, top: node.y }}
                onClick={() => onModeChange(node.mode)}
                aria-label={'Explore ' + node.label}
                aria-pressed={mode === node.mode}
              >
                <span>{node.icon}</span><small>{node.label}</small>
              </button>
            ))}

            <span className="universe-star star-one" /><span className="universe-star star-two" />
            <span className="universe-star star-three" /><span className="universe-star star-four" />
          </div>

          <div className="visual-caption"><span>Choose a node</span><strong>→</strong><span>shape the experience</span></div>
        </div>
      </div>

      <div className="scroll-indicator"><span>Scroll or interact</span><div className="scroll-line" /></div>
    </section>
  );
};

export default Hero;
