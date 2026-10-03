import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-orbit" aria-hidden="true">
        <span />
        <span />
        <strong>∞</strong>
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <NavLink className="footer-logo" to="/" aria-label="Go to ZealInfy home">
              <img src="/logo.svg" alt="ZealInfy Logo" className="logo-image" />
            </NavLink>
            <p className="footer-manifesto">
              <span>ZEAL</span> is the passion to build.
              <br />
              <span>INFY</span> is the belief that possibilities have no edge.
            </p>
            <p className="footer-description">
              Where Passion Meets AI.
            </p>
          </div>

          <div className="footer-navigation">
            <div className="footer-column">
              <span className="footer-column-index">01</span>
              <h4>Explore</h4>
              <NavLink to="/about">Our thinking</NavLink>
              <NavLink to="/technology">Technology</NavLink>
              <NavLink to="/services">Capabilities</NavLink>
              <NavLink to="/contact">Start a conversation</NavLink>
            </div>

            <div className="footer-column">
              <span className="footer-column-index">02</span>
              <h4>Remember</h4>
              <p>Curiosity creates the question.</p>
              <p>Zeal creates the momentum.</p>
              <p>Technology creates the possibility.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} ZealInfy</span>
          <span>Where Passion Meets AI.</span>
          <span>Built with curiosity.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
