import React from 'react';
import { FaCode, FaMobile, FaCloud, FaBrain, FaServer, FaRocket } from 'react-icons/fa';
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
      title: 'AI-Powered Web Apps',
      description: 'Launch faster, scale smarter. We build intelligent web applications that adapt and learn, giving you a competitive edge in the digital marketplace.',
      features: ['Smart Automation', 'Predictive Analytics', 'Real-time Insights', 'Scalable Architecture']
    },
    {
      icon: <FaBrain />,
      title: 'Enterprise AI Solutions',
      description: 'Transform your business operations with custom AI that works. From chatbots to data analysis, we make artificial intelligence work for your bottom line.',
      features: ['Custom AI Models', 'Business Intelligence', 'Process Automation', 'Data-Driven Decisions']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Infrastructure',
      description: 'Scale without limits. Our cloud solutions ensure your applications perform flawlessly whether you have 10 users or 10 million.',
      features: ['Auto-Scaling', '99.9% Uptime', 'Global Distribution', 'Security First']
    },
    {
      icon: <FaMobile />,
      title: 'Modern Frontend Experiences',
      description: 'First impressions matter. We create stunning, responsive interfaces that convert visitors into customers and keep them coming back.',
      features: ['React/Next.js', 'Mobile-First Design', 'Performance Optimized', 'SEO Ready']
    },
    {
      icon: <FaServer />,
      title: 'Backend That Never Fails',
      description: 'Rock-solid foundations for growth. Our backend systems handle millions of requests while keeping your data secure and your business running 24/7.',
      features: ['Microservices', 'API Development', 'Database Optimization', 'Security Hardened']
    },
    {
      icon: <FaCode />,
      title: 'MVP to Market Leader',
      description: 'Start smart, grow fast. We help startups validate ideas with rapid MVPs, then scale them into market-leading platforms.',
      features: ['Rapid Prototyping', 'User Testing', 'Iterative Development', 'Growth Engineering']
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
      <h2 className="section-title">Solutions That Drive Results</h2>
      <p className="section-subtitle">
        From concept to scale - we build digital products that customers love and businesses depend on
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
              🚀 Let's Build This!
            </button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h3 className="cta-title">🚀 Ready to Disrupt Your Industry?</h3>
        <p className="cta-description">
          Ready to be our first success story? Let's turn your vision into the next big thing in the digital world.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          💬 Start Your Project Today
        </button>
      </div>
    </section>
  );
};

export default Services;
