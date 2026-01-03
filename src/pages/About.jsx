import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About South Cebu Construction</h1>
          <p>Building Trust Through Quality and Reliability</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                South Cebu Construction is a Cebu-based company owned by a millennial Cebuana who is a dedicated entrepreneur.
                The start-up company provides well-organized work, well-oriented employees, and competitive quality to its
                business clients and business partners.
              </p>
              <p>
                South Cebu Construction is very detailed when it comes to their services to satisfy the clients' needs and demands.
                We combine modern expertise with traditional craftsmanship to deliver exceptional construction solutions.
              </p>
            </div>
            <div className="about-image-placeholder">
              <span>Company Image</span>
            </div>
          </div>

          <div className="vision-mission-section">
            <div className="vision-box">
              <h2>Company Vision</h2>
              <p>
                To be recognized in the Philippines for good quality services, customer service, and
                ensuring safety of goods in every transaction.
              </p>
            </div>

            <div className="mission-box">
              <h2>Company Mission</h2>
              <p>
                We are committed to provide projects for our clients which has quality, made within
                time frame and safety for everyone. Making the environment friendly and satisfying
                to the users, employees, partners and operators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
