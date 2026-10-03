import React from 'react';
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

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-heading">
        <div>
          <span className="skills-eyebrow">Engineering foundation</span>
          <h2 className="section-title">Technology that brings ideas to life.</h2>
        </div>
        <p className="section-subtitle">
          Our stack is a means to an outcome: building products that are useful,
          scalable, maintainable, and ready for what comes next.
        </p>
      </div>

      <div className="skills-grid">
        {categories.map((category) => (
          <article key={category.title} className="skill-category">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <div>
                <h3 className="category-title">{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="skills-list">
              {category.technologies.map((technology) => (
                <div key={technology.name} className="skill-item">
                  <span className="skill-icon">{technology.icon}</span>
                  <span className="skill-name">{technology.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
