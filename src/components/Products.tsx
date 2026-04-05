import React from 'react';
import { FaUsers, FaShieldAlt, FaCode, FaMicrophone, FaRocket, FaBrain } from 'react-icons/fa';
import './Products.css';

interface Product {
  icon: JSX.Element;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'In Development' | 'Beta' | 'Coming Soon';
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      icon: <FaUsers />,
      name: 'ZealHR',
      tagline: 'Complete HR & Payroll Management System',
      description: 'A comprehensive full-stack HR and Payroll management application built with React frontend and Python FastAPI backend. Enhanced with AI-powered features for intelligent employee management, automated payroll processing, and predictive analytics for workforce optimization.',
      features: ['AI-Powered Analytics', 'Automated Payroll', 'Employee Management', 'Performance Tracking', 'Smart Scheduling'],
      status: 'In Development'
    },
    {
      icon: <FaShieldAlt />,
      name: 'ZealCompliance',
      tagline: 'AI-Powered SaaS Platform for CA Firms',
      description: 'An intelligent compliance management platform specifically designed for Chartered Accountant firms. Leverages artificial intelligence to detect compliance issues, provide actionable insights, and automate regulatory processes, ensuring firms stay ahead of compliance requirements.',
      features: ['Issue Detection', 'AI Insights', 'Regulatory Automation', 'Risk Assessment', 'Compliance Tracking'],
      status: 'In Development'
    },
    {
      icon: <FaCode />,
      name: 'ZealEngine',
      tagline: 'AI-Powered Developer Assistant',
      description: 'An advanced AI coding assistant that goes beyond ChatGPT and Copilot. Designed for pair programming with enhanced features including multiple AI model integration, context-aware suggestions, code review assistance, and intelligent debugging support for developers.',
      features: ['Pair Programming', 'Multi-Model AI', 'Code Review', 'Smart Debugging', 'Context Awareness'],
      status: 'Coming Soon'
    },
    {
      icon: <FaMicrophone />,
      name: 'ZealVoice',
      tagline: 'Voice-Controlled Web Applications',
      description: 'Revolutionary technology that enables web applications to be controlled entirely through voice commands. Users can navigate websites, enter data, and perform complex actions using simple voice commands, making applications more accessible and user-friendly.',
      features: ['Voice Navigation', 'Data Entry', 'Action Commands', 'Accessibility', 'Multi-Language'],
      status: 'Coming Soon'
    },
    {
      icon: <FaRocket />,
      name: 'ZealLead',
      tagline: 'AI Agent for Lead Generation',
      description: 'An intelligent AI agent that automatically generates high-quality leads through LinkedIn outreach, public website analysis, and data mining. Provides detailed prospect information and sends personalized emails, revolutionizing the lead generation process for businesses.',
      features: ['LinkedIn Outreach', 'Lead Intelligence', 'Email Automation', 'Prospect Analysis', 'CRM Integration'],
      status: 'Coming Soon'
    }
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'In Development':
        return 'status-development';
      case 'Beta':
        return 'status-beta';
      case 'Coming Soon':
        return 'status-coming-soon';
      default:
        return 'status-coming-soon';
    }
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our AI-Powered Products</h2>
        <p className="section-subtitle">
          Revolutionary solutions built with passion for new technology and artificial intelligence
        </p>

        <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper">
                <div className="product-icon">{product.icon}</div>
              </div>
              <div className={`product-status ${getStatusColor(product.status)}`}>
                {product.status}
              </div>
            </div>
            
            <div className="product-content">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <FaBrain className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="product-footer">
              <button className="product-button" disabled={product.status === 'Coming Soon'}>
                {product.status === 'Coming Soon' ? 'Coming Soon' : 'Learn More'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="products-cta">
        <h3 className="cta-title">Interested in Our Products?</h3>
        <p className="cta-description">
          Be the first to know when our revolutionary AI products launch
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Get Early Access</button>
          <button className="cta-secondary">Join Our Newsletter</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Products;