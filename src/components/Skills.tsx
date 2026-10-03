import React, { useState } from 'react';
import { SiAngular, SiCsharp, SiDotnet, SiMicrosoftazure, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { FaBrain, FaCloud, FaDatabase, FaCode } from 'react-icons/fa';
import './Skills.css';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  description: string;
  technologies: { name: string; icon: JSX.Element }[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Product Engineering',
      icon: <FaCode />,
      description: 'Modern frontend and backend engineering for reliable digital products.',
      technologies: [
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ]
    },
    {
      title: 'AI & Intelligent Systems',
      icon: <FaBrain />,
      description: 'AI capabilities integrated into products, workflows, and business processes.',
      technologies: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'AI / LLMs', icon: <FaBrain /> },
        { name: 'Automation', icon: <FaCode /> },
        { name: 'Data Processing', icon: <FaDatabase /> }
      ]
    },
    {
      title: 'Cloud & Platforms',
      icon: <FaCloud />,
      description: 'Cloud-ready architecture designed for security, scale, and maintainability.',
      technologies: [
        { name: 'Azure', icon: <SiMicrosoftazure /> },
        { name: 'Cloud Services', icon: <FaCloud /> },
        { name: 'APIs', icon: <FaCode /> },
        { name: 'Data Platforms', icon: <FaDatabase /> }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-heading">
        <div>
          <span className="skills-eyebrow">Engineering foundation</span>
          <h2 className="section-title">Technology is our playground.</h2>
        </div>
        <p className="section-subtitle">
          Our stack is a means to an outcome: building products that are useful,
          scalable, maintainable, and ready for what comes next.
        </p>
      </div>

      <div className="technology-explorer">
        <div className="technology-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <button
              type="button"
              key={category.title}
              className={'skill-category ' + (activeCategory === index ? 'skill-category-active' : '')}
              onClick={() => setActiveCategory(index)}
              aria-pressed={activeCategory === index}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.technologies.map((technology) => (
                  <span key={technology.name} className="skill-item">
                    <span className="skill-icon">{technology.icon}</span>
                    <span className="skill-name">{technology.name}</span>
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="technology-status">
          <span className="status-dot" />
          <span>exploring</span>
          <strong>{categories[activeCategory].title}</strong>
          <span className="status-line" />
          <span>{categories[activeCategory].technologies.length} capability nodes active</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
