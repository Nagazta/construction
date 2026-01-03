import { HomeIcon, BuildingIcon, HammerIcon, RulerIcon, BoxIcon, GlassIcon, CameraIcon, RoadIcon, CheckIcon } from '../components/Icons';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Glass Works',
      icon: GlassIcon,
      description: 'Professional glass installation services for modern and elegant spaces.',
      features: [
        'Glass doors installation',
        'Glass windows installation',
        'Ordinary/Tempered glasses',
        'Other glass works'
      ]
    },
    {
      title: 'Road Works',
      icon: RoadIcon,
      description: 'Complete road infrastructure construction and maintenance services.',
      features: [
        'Road concreting',
        'Road asphalting',
        'Road reblocking',
        'Road repairs',
        'Road maintenance'
      ]
    },
    {
      title: 'Drainage Works',
      icon: RoadIcon,
      description: 'Professional drainage system installation for effective water management.',
      features: [
        'RCPC type drainage',
        'Channel drainage'
      ]
    },
    {
      title: 'Vertical Structure',
      icon: BuildingIcon,
      description: 'Structural construction for residential and commercial buildings.',
      features: [
        'Up to 4 storey residential building',
        'Up to 4 storey commercial building'
      ]
    },
    {
      title: 'Modern/Aesthetic Services',
      icon: RulerIcon,
      description: 'Contemporary design and finishing services for modern spaces.',
      features: [
        'Fit-out commercial',
        'Modular cabinets',
        'Mural painting'
      ]
    },
    {
      title: 'Modular Works',
      icon: BoxIcon,
      description: 'Custom modular solutions for organized and functional spaces.',
      features: [
        'Modular cabinet',
        'Modular shelves',
        'Other modular works'
      ]
    },
    {
      title: 'General Maintenance',
      icon: HammerIcon,
      description: 'Comprehensive maintenance services for all construction needs.',
      features: [
        'Painting works',
        'Electrical works',
        'Carpentry works',
        'Plumbing works'
      ]
    },
    {
      title: 'Commercial & Residential',
      icon: HomeIcon,
      description: 'Complete design and construction services from planning to execution.',
      features: [
        'Fit out',
        'Demolish',
        'Floor plans',
        'Electrical plans',
        'Plumbing plans',
        'Mechanical plans',
        'HVAC plans',
        'Architectural plans',
        'Structural plans',
        'Rendered/3D designs',
        'Signed and sealed by architect and engineers'
      ]
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions for every need</p>
        </div>
      </section>

      <section className="services-main">
        <div className="container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              At South Cebu Construction, we provide a full range of construction services designed
              to meet the diverse needs of our clients. We are very detailed when it comes to our services
              to satisfy the clients' needs and demands, delivering quality workmanship on every project.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-detail-card">
                  <div className="service-header">
                    <div className="service-icon-large">
                      <Icon size={64} color="var(--construction-orange)" />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckIcon size={16} color="var(--construction-orange)" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-cta">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today to discuss your construction needs and get a free consultation.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
