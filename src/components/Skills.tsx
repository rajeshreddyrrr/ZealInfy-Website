import React from 'react';
import { SiDotnet, SiCsharp, SiReact, SiAngular, SiPython, SiMicrosoftazure, SiTypescript, SiNodedotjs } from 'react-icons/si';
import { FaBrain, FaDatabase, FaCloud, FaCode } from 'react-icons/fa';
import './Skills.css';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

interface TechIcon {
  icon: JSX.Element;
  name: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      icon: <FaCode />,
      skills: [
        { name: '.NET Core', icon: <SiDotnet />, level: 95 },
        { name: 'ASP.NET', icon: <SiDotnet />, level: 95 },
        { name: 'C#', icon: <SiCsharp />, level: 98 },
        { name: 'Python', icon: <SiPython />, level: 90 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact />, level: 95 },
        { name: 'Angular', icon: <SiAngular />, level: 88 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 92 },
        { name: 'WebForms', icon: <SiDotnet />, level: 85 }
      ]
    },
    {
      title: 'AI & Data',
      icon: <FaBrain />,
      skills: [
        { name: 'AI/ML', icon: <FaBrain />, level: 85 },
        { name: 'LINQ', icon: <FaDatabase />, level: 95 },
        { name: 'Data Processing', icon: <FaDatabase />, level: 90 },
        { name: 'Python AI', icon: <SiPython />, level: 88 }
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: <FaCloud />,
      skills: [
        { name: 'Azure', icon: <SiMicrosoftazure />, level: 88 },
        { name: 'Cloud Services', icon: <FaCloud />, level: 85 },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 87 },
        { name: 'WinForms', icon: <SiDotnet />, level: 92 }
      ]
    }
  ];

  const techIcons: TechIcon[] = [
    { icon: <SiDotnet />, name: '.NET' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiAngular />, name: 'Angular' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <FaBrain />, name: 'AI' },
    { icon: <SiMicrosoftazure />, name: 'Azure' },
    { icon: <SiTypescript />, name: 'TypeScript' }
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <p className="section-subtitle">
        Comprehensive skill set across modern development technologies
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name-wrapper">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-stack-showcase">
        <h3 className="showcase-title">Technologies We Master</h3>
        <div className="tech-icons">
          {techIcons.map((tech, index) => (
            <div key={index} className="tech-icon-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
