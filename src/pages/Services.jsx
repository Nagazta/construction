import { Link } from 'react-router-dom';
import { HomeIcon, BuildingIcon, HammerIcon, RulerIcon, BoxIcon, GlassIcon, RoadIcon, CheckIcon, PhoneIcon } from '../components/Icons';
import './Services.css';

const services = [
  {
    Icon: GlassIcon, title: 'Glass Works',
    desc: 'Professional glass installation services for modern and elegant spaces.',
    features: ['Glass doors installation', 'Glass windows installation', 'Ordinary/Tempered glasses', 'Other glass works'],
  },
  {
    Icon: RoadIcon, title: 'Road Works',
    desc: 'Complete road infrastructure construction and maintenance services.',
    features: ['Road concreting', 'Road asphalting', 'Road reblocking', 'Road repairs', 'Road maintenance'],
  },
  {
    Icon: RoadIcon, title: 'Drainage Works',
    desc: 'Professional drainage system installation for effective water management.',
    features: ['RCPC type drainage', 'Channel drainage'],
  },
  {
    Icon: BuildingIcon, title: 'Vertical Structure',
    desc: 'Structural construction for residential and commercial buildings.',
    features: ['Up to 4-storey residential building', 'Up to 4-storey commercial building'],
  },
  {
    Icon: RulerIcon, title: 'Modern / Aesthetic Services',
    desc: 'Contemporary design and finishing services for modern spaces.',
    features: ['Fit-out commercial', 'Modular cabinets', 'Mural painting'],
  },
  {
    Icon: BoxIcon, title: 'Modular Works',
    desc: 'Custom modular solutions for organized and functional spaces.',
    features: ['Modular cabinet', 'Modular shelves', 'Other modular works'],
  },
  {
    Icon: HammerIcon, title: 'General Maintenance',
    desc: 'Comprehensive maintenance services for all construction needs.',
    features: ['Painting works', 'Electrical works', 'Carpentry works', 'Plumbing works'],
  },
  {
    Icon: HomeIcon, title: 'Commercial & Residential',
    desc: 'Complete design and construction services from planning to execution.',
    features: [
      'Fit out', 'Demolish', 'Floor plans', 'Electrical plans', 'Plumbing plans',
      'Mechanical plans', 'HVAC plans', 'Architectural plans', 'Structural plans',
      'Rendered/3D designs', 'Signed & sealed by architect and engineers',
    ],
  },
];

export default function Services() {
  return (
    <main className="page-services">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-inner">
          <p className="page-eyebrow"><span className="eyebrow-rule" />What We Offer</p>
          <h1>Our Services</h1>
          <p className="page-hero-sub">Comprehensive construction solutions designed to meet every client need — delivered with precision and quality.</p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="services-body">
        <div className="container">
          <div className="svc-list">
            {services.map(({ Icon, title, desc, features }, i) => (
              <article className="svc-detail" key={i}>
                <div className="svc-detail-left">
                  <div className="svc-detail-icon">
                    <Icon size={36} color="var(--gold)" />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="svc-detail-right">
                  <p className="svc-includes-label">What's Included</p>
                  <ul className="svc-features">
                    {features.map((f, j) => (
                      <li key={j}>
                        <CheckIcon size={14} color="var(--gold)" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="services-cta-section">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-copy">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today to discuss your construction needs and get a consultation.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-gold" id="services-cta">Get in Touch</Link>
            <a href="tel:09531774035" className="btn btn-ghost" id="services-call">
              <PhoneIcon size={16} color="currentColor" />Call Us Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}