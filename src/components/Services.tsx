import React from 'react';
import { FaCode, FaMobile, FaCloud, FaBrain, FaServer, FaPalette } from 'react-icons/fa';
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
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using .NET Core, React, and Angular. Building scalable and performant applications tailored to your needs.',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Clean Architecture']
    },
    {
      icon: <FaMobile />,
      title: 'Desktop Applications',
      description: 'Professional Windows desktop applications using WinForms and WPF. Creating powerful enterprise solutions with rich user interfaces.',
      features: ['WinForms Apps', 'WPF Solutions', 'Enterprise Software', 'Legacy Migration']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Azure cloud integration and deployment services. Leveraging Microsoft Azure for scalable, reliable, and secure cloud infrastructure.',
      features: ['Azure Deployment', 'Cloud Migration', 'DevOps Setup', 'Microservices']
    },
    {
      icon: <FaBrain />,
      title: 'AI Integration',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning. Implementing AI features to enhance your applications.',
      features: ['ML Models', 'Natural Language', 'Data Analytics', 'Automation']
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust backend systems using ASP.NET Core and Python. Building RESTful APIs, microservices, and server-side logic.',
      features: ['RESTful APIs', 'LINQ Queries', 'Data Processing', 'Security']
    },
    {
      icon: <FaPalette />,
      title: 'Modern UI/UX',
      description: 'Beautiful and responsive user interfaces using React and modern CSS. Creating engaging experiences that users love.',
      features: ['Responsive Design', 'React Components', 'Modern UI', 'Animations']
    }
  ];

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Comprehensive solutions to bring your ideas to life
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">{service.icon}</div>
            </div>
            
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx} className="service-feature">
                  <span className="feature-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="service-button">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h3 className="cta-title">Ready to Start Your Project?</h3>
        <p className="cta-description">
          Let's discuss how we can help transform your ideas into reality
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Services;
