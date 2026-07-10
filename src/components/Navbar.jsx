import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PhoneIcon } from './Icons';
import logo from '../assets/images/construction/logo.png';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Past Projects' },
    { to: '/mural-art-services', label: 'Mural Art' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="South Cebu Construction" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">South Cebu</span>
            <span className="logo-sub">Construction</span>
          </div>
        </Link>

        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn-primary nav-cta" id="nav-get-quote">
          Contact Us
        </Link>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-cta">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
