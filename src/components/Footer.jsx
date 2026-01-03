import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SolidForm Construction</h3>
            <p>Building reliable structures across Cebu since 2023.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Past Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Minglanilla, Cebu</p>
            <p>Email: info@solidform.com</p>
            <p>Phone: +63 XXX XXX XXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SolidForm Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
