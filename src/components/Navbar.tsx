import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavItem {
  path: string;
  label: string;
  number: string;
  description: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', number: '00', description: 'Where the journey begins.' },
  { path: '/about', label: 'About', number: '01', description: 'The thinking behind ZealInfy.' },
  { path: '/technology', label: 'Technology', number: '02', description: 'Our engineering playground.' },
  { path: '/services', label: 'Services', number: '03', description: 'From possibility to something real.' },
  { path: '/partnership', label: 'Partnership', number: '04', description: 'Build together. Extend capability.' },
  { path: '/case-studies', label: 'Case Studies', number: '05', description: 'AI moving from idea to operation.' },
  { path: '/products', label: 'Products', number: '06', description: 'Ideas we are turning into products.' },
  { path: '/contact', label: 'Contact', number: '07', description: 'Start with the problem.' },
];

interface NavbarProps { menuOpen: boolean; onMenuOpenChange: (open: boolean) => void; }

const Navbar: React.FC<NavbarProps> = ({ menuOpen, onMenuOpenChange }) => {
    const location = useLocation();

  const closeMenu = (): void => onMenuOpenChange(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') closeMenu();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const activeItem = navItems.find((item) => item.path === location.pathname) ?? navItems[0];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/" onClick={closeMenu} aria-label="Go to ZealInfy home">
          <span className="logo-frame">
            <img src="/logo.svg" alt="ZealInfy Logo" className="logo-image" />
          </span>
          <span className="logo-signal" aria-hidden="true" />
        </NavLink>

        <div className="navbar-actions">
          <span className="navbar-current" aria-hidden="true">
            <span>{activeItem.number}</span>
            {activeItem.label}
          </span>
          <button
            className={'menu-toggle ' + (menuOpen ? 'menu-toggle-open' : '')}
            onClick={() => onMenuOpenChange(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="zealinfy-explore-menu"
            aria-label={menuOpen ? 'Close Explore menu' : 'Open Explore menu'}
          >
            <span className="menu-toggle-icon">{menuOpen ? <FaTimes /> : <FaBars />}</span>
            <span>{menuOpen ? 'Close' : 'Explore'}</span>
          </button>
        </div>
      </div>

      <div className={'explore-overlay ' + (menuOpen ? 'explore-overlay-open' : '')} aria-hidden={!menuOpen}>
        <button className="explore-backdrop" onClick={closeMenu} tabIndex={-1} aria-label="Close Explore menu" />
        <div className="explore-panel" id="zealinfy-explore-menu">
          <div className="explore-panel-grid" aria-hidden="true" />
          <div className="explore-panel-header">
            <div>
              <span className="explore-eyebrow">ZEALINFY / EXPLORE</span>
              <h2>Choose a direction.</h2>
            </div>
            <div className="explore-orbit" aria-hidden="true">∞</div>
          </div>

          <div className="explore-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 'explore-link ' + (isActive ? 'explore-link-active' : '')}
                onClick={closeMenu}
              >
                <span className="explore-number">{item.number}</span>
                <span className="explore-link-copy">
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
                <FaArrowRight className="explore-link-arrow" aria-hidden="true" />
              </NavLink>
            ))}
          </div>

          <div className="explore-footer">
            <span>Where Passion Meets AI</span>
            <NavLink to="/contact" onClick={closeMenu}>Start a conversation <FaArrowRight /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
