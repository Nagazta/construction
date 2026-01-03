import { Link } from 'react-router-dom';
import { HomeIcon, BuildingIcon, HammerIcon, ClipboardIcon } from '../components/Icons';
import './Home.css';

function Home() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Homes, townhouses, and renovations built with quality materials and attention to detail.',
      icon: HomeIcon
    },
    {
      title: 'Commercial Construction',
      description: 'Offices, retail spaces, and small commercial buildings.',
      icon: BuildingIcon
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Structural upgrades, interior improvements, and extensions.',
      icon: HammerIcon
    },
    {
      title: 'General Contracting',
      description: 'End-to-end project management and on-site supervision.',
      icon: ClipboardIcon
    }
  ];

  const projects = [
    {
      title: 'Two-Storey Residential House',
      location: 'Minglanilla, Cebu',
      description: 'Modern residential build completed with reinforced concrete structure.'
    },
    {
      title: 'Commercial Storefront Renovation',
      location: 'Cebu South Area',
      description: 'Full renovation including structural reinforcement and finishing works.'
    },
    {
      title: 'Townhouse Unit Construction',
      location: 'Minglanilla',
      description: 'Multiple-unit residential project with modern layout.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Reliable Structures Across Cebu</h1>
            <p>Cebu-based construction company since 2023, delivering quality and dependable workmanship.</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View Our Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
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
                    <Icon size={56} color="var(--construction-yellow)" />
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
                  <span>Project Image</span>
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
