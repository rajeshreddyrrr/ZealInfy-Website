import React from 'react';
import { FaArrowUpRightFromSquare, FaCode, FaMicrophone, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';
import './Products.css';

interface Product {
  icon: JSX.Element;
  name: string;
  category: string;
  description: string;
  status: 'Building' | 'Exploring';
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      icon: <FaShieldAlt />,
      name: 'ZealCompliance',
      category: 'AI • Compliance',
      description: 'An AI-powered compliance platform designed to help Indian businesses understand, organize, and act on recurring compliance work.',
      status: 'Building'
    },
    {
      icon: <FaUsers />,
      name: 'ZealHR',
      category: 'AI • People Operations',
      description: 'A modern HR platform concept focused on simplifying employee operations, workflows, payroll, and workforce insights.',
      status: 'Building'
    },
    {
      icon: <FaCode />,
      name: 'ZealEngine',
      category: 'AI • Developer Tools',
      description: 'An AI-assisted development environment concept for context-aware coding, reviews, debugging, and engineering workflows.',
      status: 'Exploring'
    },
    {
      icon: <FaMicrophone />,
      name: 'ZealVoice',
      category: 'AI • Voice Interfaces',
      description: 'Exploring voice-first interactions that let people control and work with software through natural language.',
      status: 'Exploring'
    }
  ];

  return (
    <section id="products" className="section products-section">
      <div className="products-heading">
        <div>
          <span className="products-eyebrow">Beyond client projects</span>
          <h2 className="section-title">We build our own ideas too.</h2>
        </div>
        <p className="section-subtitle">
          ZealInfy is not only about delivering software for businesses. We experiment,
          validate ideas, and build technology around problems we believe are worth solving.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-top">
              <div className="product-icon">{product.icon}</div>
              <span className={`product-status product-status-${product.status.toLowerCase()}`}>
                {product.status}
              </span>
            </div>

            <div className="product-category">{product.category}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            <div className="product-link">
              Exploring the possibility
              <FaArrowUpRightFromSquare />
            </div>
          </article>
        ))}
      </div>

      <div className="products-cta">
        <div>
          <span>Have a problem worth solving?</span>
          <h3>Maybe we should build it together.</h3>
        </div>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Start a conversation <FaRocket />
        </button>
      </div>
    </section>
  );
};

export default Products;
