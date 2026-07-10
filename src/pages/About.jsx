import { Link } from 'react-router-dom';
import { CheckIcon, PhoneIcon, ShieldIcon, HardHatIcon, AwardIcon } from '../components/Icons';
import logo from '../assets/images/construction/logo.png';
import './About.css';

export default function About() {
  const values = [
    { Icon: HardHatIcon, title: 'Skilled Professionals', desc: 'Our team is composed of trained, values-oriented workers committed to delivering excellence on every project.' },
    { Icon: AwardIcon, title: 'Quality Workmanship', desc: 'We combine modern construction expertise with traditional craftsmanship to produce reliable, lasting results.' },
    { Icon: ShieldIcon, title: 'Safety First', desc: 'Safety is embedded in every phase of our process — for our team, our clients, and the public.' },
  ];

  return (
    <main className="page-about">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-inner">
          <p className="page-eyebrow"><span className="eyebrow-rule" />About Us</p>
          <h1>About South Cebu Construction</h1>
          <p className="page-hero-sub">Building trust through quality, reliability, and dedication to every project.</p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-logo-wrap">
            <img src={logo} alt="South Cebu Construction" className="about-logo" />
            <div className="about-logo-badge">
              <span>Est.</span>
              <strong>South Cebu</strong>
              <span>Construction</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-eyebrow-inline">Who We Are</p>
            <h2>A Cebu-Based Construction Company Built on Excellence</h2>
            <p>
              SOUTH CEBU CONSTRUCTION is a Cebu-based construction company founded by a dedicated
              millennial Cebuana entrepreneur. The company aims to provide well-organized construction
              services, highly skilled and oriented employees, and competitive quality solutions to meet
              the needs of its business clients and partners.
            </p>
            <p>
              With a strong commitment to excellence, SOUTH CEBU CONSTRUCTION pays close attention to
              every detail in delivering its services. The company strives to understand and exceed
              clients' expectations by providing reliable, efficient, and high-quality construction
              solutions tailored to their specific needs and demands.
            </p>
            <div className="about-checks">
              <span><CheckIcon size={15} color="var(--gold)" />Licensed &amp; Certified</span>
              <span><CheckIcon size={15} color="var(--gold)" />Minglanilla, Cebu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-label">Our Vision</div>
              <h2>To Lead with Quality Across the Philippines</h2>
              <p>
                To be recognized as one of the leading construction companies in the Philippines,
                known for delivering high-quality services, exceptional customer satisfaction, and a
                strong commitment to ensuring the safety and security of goods in every transaction.
              </p>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-label">Our Mission</div>
              <h2>Delivering Projects That Exceed Expectations</h2>
              <p>
                We are committed to delivering projects that uphold the highest standards of quality,
                are completed within the agreed timeframe, and prioritize the safety of everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="values-section">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">Core Values</p>
            <h2>What We Stand For</h2>
            <p className="section-sub">Every project we take on is guided by these fundamental principles.</p>
          </header>
          <div className="values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon"><Icon size={28} color="var(--gold)" /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-copy">
            <h2>Ready to Work With Us?</h2>
            <p>Get a consultation and competitive quote from our experienced team.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-gold" id="about-cta-quote">Contact Us</Link>
            <a href="tel:09531774035" className="btn btn-ghost" id="about-cta-call">
              <PhoneIcon size={16} color="currentColor" />Call Us Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
