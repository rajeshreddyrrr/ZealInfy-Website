import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';
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
    { icon: <FaAward />, number: '10+', label: 'Years Experience' },
    { icon: <FaProjectDiagram />, number: '100+', label: 'Projects Completed' },
    { icon: <FaUsers />, number: '50+', label: 'Happy Clients' },
    { icon: <FaLightbulb />, number: '15+', label: 'Tech Stack' }
  ];

  const values: ValueItem[] = [
    {
      number: '01',
      title: 'Innovation First',
      description: 'Leveraging the latest technologies to create breakthrough solutions'
    },
    {
      number: '02',
      title: 'Quality Driven',
      description: 'Maintaining the highest standards in every line of code we write'
    },
    {
      number: '03',
      title: 'Client Focused',
      description: 'Your success is our success, we\'re committed to your growth'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About ZealInfy</h2>
      <p className="section-subtitle">
        Passionate about building cutting-edge solutions that drive business success
      </p>

      <div className="about-content">
        <div className="about-text">
          <h3 className="about-heading">Who We Are</h3>
          <p className="about-description">
            At <span className="highlight">ZealInfy</span>, we are dedicated to transforming your vision into reality through innovative technology solutions. With expertise spanning across multiple domains including .NET, React, Python, and AI, we deliver robust and scalable applications that exceed expectations.
          </p>
          <p className="about-description">
            Our commitment to excellence and continuous learning ensures that we stay at the forefront of technology trends, providing our clients with modern, efficient, and future-proof solutions.
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
