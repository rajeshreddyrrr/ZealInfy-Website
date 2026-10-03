import React from 'react';
import { FaArrowRight, FaBrain, FaCloud, FaCode, FaCogs, FaLayerGroup, FaRocket } from 'react-icons/fa';
import './Services.css';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaRocket />,
      title: 'Product Engineering',
      description: 'From an early idea to a production-ready platform, we help design, engineer, and evolve digital products.',
      features: ['MVP development', 'Full-stack engineering', 'Product modernization']
    },
    {
      icon: <FaBrain />,
      title: 'AI & Automation',
      description: 'We integrate AI into products and workflows where it can reduce repetitive work, improve decisions, or create better experiences.',
      features: ['AI integrations', 'Intelligent workflows', 'Agentic automation']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & Modernization',
      description: 'We modernize applications and build cloud-ready foundations that can evolve with your business.',
      features: ['Azure solutions', 'Application modernization', 'Cloud architecture']
    },
    {
      icon: <FaCode />,
      title: 'Web & Application Development',
      description: 'Modern web applications built around usability, maintainability, performance, and business requirements.',
      features: ['React & Angular', '.NET & Python', 'API development']
    },
    {
      icon: <FaLayerGroup />,
      title: 'Enterprise Solutions',
      description: 'Engineering support for complex systems where reliability, integration, and long-term maintainability matter.',
      features: ['Enterprise applications', 'System integrations', 'Data platforms']
    },
    {
      icon: <FaCogs />,
      title: 'Dedicated Engineering',
      description: 'Extend your engineering capacity with focused development support aligned to your product and delivery process.',
      features: ['Dedicated developers', 'Feature teams', 'Ongoing support']
    }
  ];

  const scrollToContact = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services-section">
      <div className="services-heading">
        <div>
          <span className="services-eyebrow">How we help</span>
          <h2 className="section-title">Engineering with a purpose.</h2>
        </div>
        <p className="section-subtitle">
          Flexible technology capabilities for startups, growing businesses, and teams
          looking to build or modernize digital products.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}><span />{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <div>
          <span>Have something worth building?</span>
          <h3>Let's turn the idea into a working product.</h3>
        </div>
        <button onClick={scrollToContact}>
          Start a conversation <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Services;
