import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  HomeIcon, BuildingIcon, HammerIcon, RulerIcon, GlassIcon, BoxIcon, RoadIcon,
  LocationIcon, PhoneIcon, CheckIcon, ClockIcon,
  ShieldIcon, MapPinIcon,
  HardHatIcon, AwardIcon, CalendarIcon, PriceTagIcon,
  DemolishIcon, RenovationIcon,
} from '../components/Icons';
import './Home.css';
import img16 from '../assets/images/construction/16.png';
import img19 from '../assets/images/construction/19.png';
import img22 from '../assets/images/construction/22.png';

/* ── Animated counter ── */
function useCountUp(target, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(id); }
      else setCount(current);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, active }) {
  const n = useCountUp(value, 1600, active);
  return (
    <div className="stat-item">
      <span className="stat-num">{n}<em>{suffix}</em></span>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

export default function Home() {
  /* trigger stat counters when strip enters view */
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  /* data */
  const services = [
    { Icon: GlassIcon, title: 'Glass Works', desc: 'Professional glass installation for modern and elegant spaces.' },
    { Icon: RoadIcon, title: 'Road Works', desc: 'Complete road infrastructure construction and maintenance.' },
    { Icon: RoadIcon, title: 'Drainage Works', desc: 'Drainage system installation for effective water management.' },
    { Icon: BuildingIcon, title: 'Vertical Structure', desc: 'Structural construction for residential and commercial buildings.' },
    { Icon: RulerIcon, title: 'Modern / Aesthetic', desc: 'Contemporary design and finishing services for modern spaces.' },
    { Icon: BoxIcon, title: 'Modular Works', desc: 'Custom modular solutions for organized, functional spaces.' },
    { Icon: HammerIcon, title: 'General Maintenance', desc: 'Comprehensive maintenance services for all construction needs.' },
    { Icon: HomeIcon, title: 'Commercial & Residential', desc: 'Complete design and construction from planning to execution.' },
  ];

  const projects = [
    { title: 'Residential Building', location: 'Cuanos, Minglanilla, Cebu 6046', scope: '70 sq m — OBO requirements & exterior design', duration: '2 Weeks', category: 'Residential', img: img16 },
    { title: 'Residential Building', location: 'Vito, Minglanilla, Cebu', scope: '39 sq m — Complete OBO package', duration: '2 Weeks', category: 'Residential', img: img19 },
    { title: 'Choobi Choobi Flavors', location: 'Lapu-Lapu City, Cebu', scope: '240 sq m — 2-floor restaurant fit-out', duration: '3 Months', category: 'Commercial', img: img22 },
  ];

  const reasons = [
    { Icon: HardHatIcon, title: 'Experienced Team', desc: 'Years of hands-on experience across residential, commercial, and infrastructure projects.' },
    { Icon: AwardIcon, title: 'Quality Craftsmanship', desc: 'Every project meets strict standards — signed, sealed, and built to last.' },
    { Icon: CalendarIcon, title: 'On-Time Delivery', desc: 'We respect your timeline and ensure projects finish within agreed schedules.' },
    { Icon: PriceTagIcon, title: 'Competitive Pricing', desc: 'Transparent, negotiable pricing that delivers exceptional value.' },
  ];

  return (
    <main className="home">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="hero" id="home">
        <div className="hero-backdrop">
          <div className="hero-overlay" />
          <div className="hero-lines" />
        </div>

        <div className="container hero-inner">
          {/* Left — copy */}
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="eyebrow-rule" />
              Cebu's Trusted Construction Partner
            </p>

            <h1 className="hero-heading">
              Building <span className="text-gold">Reliable</span><br />
              Structures Across Cebu
            </h1>

            <p className="hero-body">
              South Cebu Construction delivers well-organized work, skilled professionals,
              and competitive quality — from residential builds to full commercial fit-outs.
            </p>

            <div className="hero-ctas">
              <Link to="/projects" className="btn btn-gold" id="hero-projects">View Our Projects</Link>
              <Link to="/contact" className="btn btn-ghost" id="hero-consult">Contact Us</Link>
            </div>

            <ul className="trust-list">
              <li><ShieldIcon size={14} color="var(--gold)" /> Licensed &amp; Certified</li>
              <li><MapPinIcon size={14} color="var(--gold)" /> Cebu-Based</li>
            </ul>
          </div>

          {/* Right — featured image */}
          <div className="hero-image-wrap">
            <img src={img22} alt="Choobi Choobi Flavors restaurant fit-out by South Cebu Construction" className="hero-img" />
            <div className="hero-img-badge">
              <span className="badge-label">Featured Project</span>
              <strong className="badge-name">Choobi Choobi Flavors</strong>
              <span className="badge-meta">240 sq m · Commercial Fit-out</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS STRIP
      ══════════════════════════════════ */}
      <div className="stats-strip" ref={statsRef}>
        <div className="container stats-row">
          <StatCard value={50} suffix="+" label="Projects Completed" active={statsActive} />
          <StatCard value={8} suffix="+" label="Years of Experience" active={statsActive} />
          <StatCard value={100} suffix="%" label="Client Satisfaction" active={statsActive} />
          <StatCard value={15} suffix="+" label="Service Categories" active={statsActive} />
        </div>
      </div>

      {/* ══════════════════════════════════
          SERVICES
      ══════════════════════════════════ */}
      <section className="section-services" id="services">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">What We Do</p>
            <h2>Our Construction Services</h2>
            <p className="section-sub">Comprehensive solutions tailored to every build, renovation, and infrastructure need.</p>
          </header>

          <div className="services-grid">
            {services.map(({ Icon, title, desc }, i) => (
              <article className="svc-card" key={i}>
                <div className="svc-icon-wrap">
                  <Icon size={32} color="var(--gold)" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="svc-line" />
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-outline-dark" id="all-services">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OFFERS
      ══════════════════════════════════ */}
      <section className="section-offers" id="offers">
        <div className="container">
          <header className="section-hdr section-hdr--light">
            <p className="section-eyebrow section-eyebrow--light">Pricing</p>
            <h2 className="light">Special Offers</h2>
            <p className="section-sub light">Transparent, competitive rates for quality construction in Cebu.</p>
          </header>

          <div className="offers-grid">
            {/* Card 1 */}
            <div className="offer-card" id="offer-demolish">
              <div className="offer-top">
                <DemolishIcon size={28} color="var(--gold)" />
                <span className="offer-tag">Special Deal</span>
              </div>
              <h3>Demolish Package</h3>
              <p className="offer-note">Scrap materials will be ours</p>
              <div className="offer-price-row">
                <span className="offer-price">PHP 7,500</span>
                <span className="offer-unit">/ sq m</span>
              </div>
              <ul className="offer-features">
                <li><CheckIcon size={14} color="var(--gold)" />Full demolition service</li>
                <li><CheckIcon size={14} color="var(--gold)" />Debris removal included</li>
                <li><CheckIcon size={14} color="var(--gold)" />Cebu-based pricing</li>
              </ul>
              <p className="offer-small">*Negotiable for areas 100 sq m and above</p>
              <Link to="/contact" className="btn btn-outline-light offer-btn">Get This Deal</Link>
            </div>

            {/* Card 2 */}
            <div className="offer-card offer-card--accent" id="offer-renovation">
              <div className="offer-top">
                <RenovationIcon size={28} color="var(--construction-black)" />
                <span className="offer-tag offer-tag--dark">Best Value</span>
              </div>
              <h3>Full Renovation / Commercial Fitout</h3>
              <p className="offer-note">Includes mounted FCU/AC installation</p>
              <div className="offer-price-row">
                <span className="offer-price">PHP 38,000</span>
                <span className="offer-unit">/ sq m</span>
              </div>
              <ul className="offer-features">
                <li><CheckIcon size={14} color="var(--construction-black)" />Complete fit-out service</li>
                <li><CheckIcon size={14} color="var(--construction-black)" />AC/FCU installation</li>
                <li><CheckIcon size={14} color="var(--construction-black)" />Design &amp; build included</li>
              </ul>
              <p className="offer-small">*Negotiable for areas 350 sq m and above</p>
              <Link to="/contact" className="btn btn-solid-dark offer-btn">Get This Deal</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="section-why" id="why-us">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">Why Us</p>
            <h2>Built on Trust &amp; Excellence</h2>
            <p className="section-sub">We don't just build structures — we build lasting relationships on every project.</p>
          </header>

          <div className="why-grid">
            {reasons.map(({ Icon, title, desc }, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">
                  <Icon size={28} color="var(--gold)" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          RECENT PROJECTS
      ══════════════════════════════════ */}
      <section className="section-projects" id="projects">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">Our Work</p>
            <h2>Recent Projects</h2>
            <p className="section-sub">Quality craftsmanship that speaks for itself — from planning to completion.</p>
          </header>

          <div className="projects-grid">
            {projects.map(({ title, location, scope, duration, category, img }, i) => (
              <article className="proj-card" key={i}>
                <div className="proj-img-wrap">
                  <img src={img} alt={title} className="proj-img" loading="lazy" decoding="async" />
                  <span className="proj-cat">{category}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-meta">
                    <span className="proj-dur">
                      <ClockIcon size={13} color="var(--gold)" />
                      {duration}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p className="proj-loc">
                    <LocationIcon size={13} color="var(--gold)" />
                    {location}
                  </p>
                  <p className="proj-scope">{scope}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/projects" className="btn btn-outline-dark" id="all-projects">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BANNER
      ══════════════════════════════════ */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-copy">
            <h2>Ready to Start Your Project?</h2>
            <p>Get a consultation and a competitive quote from our team today.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-gold" id="cta-quote">Contact Us</Link>
            <a href="tel:09531774035" className="btn btn-ghost" id="cta-call">
              <PhoneIcon size={16} color="currentColor" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
