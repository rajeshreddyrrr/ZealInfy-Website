import React from 'react';
import { FaArrowRight, FaBrain, FaCloud, FaCode, FaCogs, FaLightbulb } from 'react-icons/fa';
import './BuildPath.css';

export type ExperienceMode = 'idea' | 'engineering' | 'intelligence' | 'cloud' | 'automation' | 'impact';

interface BuildPathProps {
  mode: ExperienceMode;
  onModeChange: (mode: ExperienceMode) => void;
}

const paths = [
  { mode: 'idea' as ExperienceMode, icon: <FaLightbulb />, title: 'Build something new', text: 'Turn an idea into a real product.', route: ['Discover', 'Design', 'Build', 'Launch'] },
  { mode: 'engineering' as ExperienceMode, icon: <FaCode />, title: 'Modernize a system', text: 'Make an existing platform ready for what comes next.', route: ['Assess', 'Modernize', 'Integrate', 'Scale'] },
  { mode: 'intelligence' as ExperienceMode, icon: <FaBrain />, title: 'Add AI', text: 'Bring intelligence into a product or workflow.', route: ['Data', 'AI / LLM', 'Integrate', 'Automate'] },
  { mode: 'cloud' as ExperienceMode, icon: <FaCloud />, title: 'Move to the cloud', text: 'Create a stronger foundation for scale.', route: ['Architecture', 'Cloud', 'Security', 'Scale'] },
  { mode: 'automation' as ExperienceMode, icon: <FaCogs />, title: 'Automate a workflow', text: 'Remove repetitive work and connect the pieces.', route: ['Map', 'Connect', 'Automate', 'Measure'] },
  { mode: 'impact' as ExperienceMode, icon: <FaArrowRight />, title: 'Scale engineering', text: 'Extend your team without losing momentum.', route: ['Align', 'Engineer', 'Deliver', 'Evolve'] }
];

const BuildPath: React.FC<BuildPathProps> = ({ mode, onModeChange }) => {
  const active = paths.find((path) => path.mode === mode) ?? paths[0];

  return (
    <section id="build-path" className="section build-path-section">
      <div className="build-path-heading">
        <span className="build-path-eyebrow">Choose a direction</span>
        <h2 className="section-title">Don't start with a service. Start with what you're trying to change.</h2>
        <p className="section-subtitle">Pick the challenge closest to yours. ZealInfy will shape the journey around it.</p>
      </div>

      <div className="build-path-experience">
        <div className="path-options" role="tablist" aria-label="Build direction">
          {paths.map((path) => (
            <button
              key={path.mode}
              type="button"
              role="tab"
              aria-selected={path.mode === mode}
              className={'path-option ' + (path.mode === mode ? 'path-option-active' : '')}
              onClick={() => onModeChange(path.mode)}
            >
              <span className="path-option-icon">{path.icon}</span>
              <span>
                <strong>{path.title}</strong>
                <small>{path.text}</small>
              </span>
              <FaArrowRight className="path-option-arrow" />
            </button>
          ))}
        </div>

        <div className="path-stage">
          <div className="path-stage-top">
            <span>YOUR PATH</span>
            <span className="path-stage-live"><i /> live</span>
          </div>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
          <div className="path-route">
            {active.route.map((step, index) => (
              <React.Fragment key={step}>
                <span className="path-route-node">
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {step}
                </span>
                {index < active.route.length - 1 && <span className="path-route-line" />}
              </React.Fragment>
            ))}
          </div>
          <div className="path-stage-footer">
            <span>ZEALINFY / {active.mode.toUpperCase()}</span>
            <span>Tap another direction to reshape the journey</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildPath;
