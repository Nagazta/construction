import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>South Cebu Construction</h3>
            <p>Building reliable structures across Cebu with dedication and quality.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Past Projects</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Minglanilla, Cebu, 6046</p>
            <p>Email: southcebucons@gmail.com</p>
            <p>Phone: 0953-177-4035 / 0926-936-9364</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 South Cebu Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;