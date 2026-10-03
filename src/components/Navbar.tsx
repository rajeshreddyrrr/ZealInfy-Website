import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavItem {
  path: string;
  label: string;
  number: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', number: '00' },
  { path: '/about', label: 'About', number: '01' },
  { path: '/technology', label: 'Technology', number: '02' },
  { path: '/services', label: 'Services', number: '03' },
  { path: '/contact', label: 'Contact', number: '04' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/" onClick={closeMenu} aria-label="Go to ZealInfy home">
          <span className="logo-frame">
            <img src="/logo.svg" alt="ZealInfy Logo" className="logo-image" />
          </span>
          <span className="logo-signal" aria-hidden="true" />
        </NavLink>

        <div className="navbar-menu-shell">
          <div className={'navbar-menu ' + (menuOpen ? 'active' : '')}>
            <div className="nav-menu-glow" aria-hidden="true" />
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => 'nav-link ' + (item.path === '/contact' ? 'nav-link-contact ' : '') + (isActive ? 'nav-link-active' : '')}
                onClick={closeMenu}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">{item.label}</span>
                {item.path === '/contact' && <FaArrowRight className="nav-arrow" aria-hidden="true" />}
              </NavLink>
            ))}
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
