import { Link } from 'react-router-dom';
import { LocationIcon, EmailIcon, PhoneIcon } from './Icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-section footer-brand">
            <h3>South Cebu Construction</h3>
            <span className="footer-brand-sub">Building Excellence Since Day One</span>
            <p>
              Cebu-based construction company delivering well-organized work,
              skilled professionals, and competitive quality — from residential
              builds to full commercial fit-outs.
            </p>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <LocationIcon size={16} color="var(--construction-orange)" />
                <strong>Minglanilla, Cebu, 6046</strong>
              </div>
              <div className="footer-contact-item">
                <EmailIcon size={16} color="var(--construction-orange)" />
                <strong>southcebucons@gmail.com</strong>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon size={16} color="var(--construction-orange)" />
                <strong>0953-177-4035 / 0926-936-9364</strong>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Past Projects</Link></li>
              <li><Link to="/mural-art-services">Mural Art Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Glass Works</Link></li>
              <li><Link to="/services">Road Works</Link></li>
              <li><Link to="/services">Drainage Works</Link></li>
              <li><Link to="/services">Vertical Structure</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 South Cebu Construction. All rights reserved.</p>
          <div className="footer-bottom-right">
            <Link to="/contact">Contact Us</Link>
            <Link to="/projects">Our Projects</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;