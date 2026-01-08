import { Link } from 'react-router-dom';
import { HomeIcon, BuildingIcon, HammerIcon, RulerIcon, GlassIcon, BoxIcon, RoadIcon } from '../components/Icons';
import './Home.css';
import img16 from '../assets/images/construction/16.png';
import img19 from '../assets/images/construction/19.png';
import img22 from '../assets/images/construction/22.png';
function Home() {
  const services = [
    {
      title: 'Glass Works',
      description: 'Professional glass installation services for modern and elegant spaces.',
      icon: GlassIcon
    },
    {
      title: 'Road Works',
      description: 'Complete road infrastructure construction and maintenance services.',
      icon: RoadIcon
    },
    {
      title: 'Drainage Works',
      description: 'Professional drainage system installation for effective water management.',
      icon: RoadIcon
    },
    {
      title: 'Vertical Structure',
      description: 'Structural construction for residential and commercial buildings.',
      icon: BuildingIcon
    },
    {
      title: 'Modern/Aesthetic Services',
      description: 'Contemporary design and finishing services for modern spaces.',
      icon: RulerIcon
    },
    {
      title: 'Modular Works',
      description: 'Custom modular solutions for organized and functional spaces.',
      icon: BoxIcon
    },
    {
      title: 'General Maintenance',
      description: 'Comprehensive maintenance services for all construction needs.',
      icon: HammerIcon
    },
    {
      title: 'Commercial & Residential',
      description: 'Complete design and construction services from planning to execution.',
      icon: HomeIcon
    }
  ];

  const projects = [
    {
      title: 'Residential Building',
      location: 'Cuanos, Minglanilla, Cebu 6046',
      scope: '70 sq m - OBO requirements design and exterior design, Signed and sealed',
      duration: '2 Weeks',
      category: 'Residential',
      image: img16
    },
    {
      title: 'Residential Building',
      location: 'Vito, Minglanilla, Cebu',
      scope: '39sq m - Signed and sealed complete package for OBO',
      duration: '2 Weeks',
      category: 'Residential',
      image: img19
    },
     {
       title: '2 Floor Fit-out Restaurant - Choobi Choobi Flavors',
       location: 'Lapu-Lapu City, Cebu',
       scope: '240sq m - Gencon whole restaurant',
       duration: '3 Months',
       category: 'Commercial',
       image: img22
     },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Reliable Structures Across Cebu</h1>
            <p>Cebu-based construction company providing well-organized work, well-oriented employees, and competitive quality to our clients.</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View Our Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <div className="container">
          <div className="section-title">
            <h2>Special Offers</h2>
            <p>Cebu-based competitive pricing for quality construction services</p>
          </div>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-badge">Special Offer</div>
              <h3>Demolish Package</h3>
              <p className="offer-note">(Scrap will be ours)</p>
              <div className="offer-price">
                <span className="price">PHP 7,500</span>
                <span className="unit">/ sq m</span>
              </div>
              <p className="offer-details">Cebu-based price</p>
              <p className="offer-note-small">*Negotiable for bigger areas (100 sq m up)</p>
            </div>
            <div className="offer-card featured">
              <div className="offer-badge">Best Value</div>
              <h3>Full Renovation / Commercial Fitout</h3>
              <p className="offer-note">Inclusion of mounted FCU/AC installation</p>
              <div className="offer-price">
                <span className="price">PHP 38,000</span>
                <span className="unit">/ sq m</span>
              </div>
              <p className="offer-details">Cebu-based price</p>
              <p className="offer-note-small">*Negotiable for bigger areas (350 sq m up)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>We provide comprehensive construction solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <Icon size={56} color="var(--construction-orange)" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview">
        <div className="container">
          <div className="section-title">
            <h2>Recent Projects</h2>
            <p>Quality work that speaks for itself</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-placeholder">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
