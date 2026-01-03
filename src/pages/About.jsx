import { StrengthIcon, ClockIcon, HandshakeIcon, TargetIcon } from '../components/Icons';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About SolidForm Construction</h1>
          <p>Building Trust Through Quality and Reliability</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                SolidForm Construction is a Cebu-based construction company established in 2023,
                located in Minglanilla, Cebu. We specialize in delivering reliable, high-quality
                construction solutions for residential and commercial projects.
              </p>
              <p>
                Our team brings together years of experience in the construction industry,
                combining traditional craftsmanship with modern building techniques to create
                structures that stand the test of time.
              </p>
            </div>
            <div className="about-image-placeholder">
              <span>Company Image</span>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <StrengthIcon size={48} color="var(--construction-yellow)" />
                </div>
                <h3>Quality</h3>
                <p>We never compromise on the quality of materials and workmanship in every project we undertake.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <ClockIcon size={48} color="var(--construction-yellow)" />
                </div>
                <h3>Reliability</h3>
                <p>We deliver projects on time and maintain clear communication throughout the construction process.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <HandshakeIcon size={48} color="var(--construction-yellow)" />
                </div>
                <h3>Integrity</h3>
                <p>Honest pricing, transparent processes, and ethical business practices guide everything we do.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <TargetIcon size={48} color="var(--construction-yellow)" />
                </div>
                <h3>Excellence</h3>
                <p>We strive for excellence in every detail, ensuring your vision becomes reality.</p>
              </div>
            </div>
          </div>

          <div className="mission-section">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional construction services that exceed client expectations while
                maintaining the highest standards of quality, safety, and professionalism. We are
                committed to building lasting relationships with our clients through reliable service
                and superior craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
