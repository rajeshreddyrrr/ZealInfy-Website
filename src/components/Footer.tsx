import React from 'react';
import './Footer.css';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinks {
  company: FooterLink[];
  services: FooterLink[];
  technologies: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const footerLinks: FooterLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Desktop Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'AI Integration', href: '#services' }
    ],
    technologies: [
      { name: '.NET Core', href: '#skills' },
      { name: 'React', href: '#skills' },
      { name: 'Python', href: '#skills' },
      { name: 'Azure', href: '#skills' }
    ]
  };

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.svg" alt="ZealInfy Logo" className="logo-image" />
            </div>
            <p className="footer-tagline">
              Transforming ideas into reality with cutting-edge technology solutions.
            </p>
            <p className="footer-description">
              Expert full-stack development, cloud solutions, and AI integration services.
            </p>
          </div>

          <div className="footer-links-section">
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Technologies</h4>
              <ul className="footer-links">
                {footerLinks.technologies.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} <span className="brand-name">ZealInfy</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
