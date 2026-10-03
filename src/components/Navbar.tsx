import React, { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  scrolled: boolean;
}

const navItems = [
  { id: 'hero', label: 'Home', number: '00' },
  { id: 'about', label: 'About', number: '01' },
  { id: 'skills', label: 'Technology', number: '02' },
  { id: 'services', label: 'Services', number: '03' },
  { id: 'contact', label: 'Contact', number: '04' }
];

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#' + id);
      setMenuOpen(false);
    }
  };

  return (
    <nav className={'navbar ' + (scrolled ? 'scrolled' : '')}>
      <div className="navbar-container">
        <button className="navbar-logo" onClick={() => scrollToSection('hero')} aria-label="Go to ZealInfy home">
          <span className="logo-frame">
            <img src="/logo.svg" alt="ZealInfy Logo" className="logo-image" />
          </span>
          <span className="logo-signal" aria-hidden="true" />
        </button>

        <div className="navbar-menu-shell">
          <div className={'navbar-menu ' + (menuOpen ? 'active' : '')}>
            <div className="nav-menu-glow" aria-hidden="true" />
            {navItems.map((item) => (
              <button
                key={item.id}
                className={'nav-link ' + (item.id === 'contact' ? 'nav-link-contact' : '')}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">{item.label}</span>
                {item.id === 'contact' && <FaArrowRight className="nav-arrow" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
