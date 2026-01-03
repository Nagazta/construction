import { HomeIcon, BuildingIcon, HammerIcon, ClipboardIcon, CheckIcon } from '../components/Icons';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Residential Construction',
      icon: HomeIcon,
      description: 'Homes, townhouses, and renovations built with quality materials and attention to detail.',
      features: [
        'Single-family homes',
        'Townhouse developments',
        'Custom home design and build',
        'Residential additions',
        'Home renovations'
      ]
    },
    {
      title: 'Commercial Construction',
      icon: BuildingIcon,
      description: 'Offices, retail spaces, and small commercial buildings.',
      features: [
        'Office buildings',
        'Retail spaces',
        'Small commercial structures',
        'Interior fit-outs',
        'Commercial renovations'
      ]
    },
    {
      title: 'Renovation & Remodeling',
      icon: HammerIcon,
      description: 'Structural upgrades, interior improvements, and extensions.',
      features: [
        'Structural modifications',
        'Interior remodeling',
        'Kitchen and bathroom upgrades',
        'Building extensions',
        'Property restoration'
      ]
    },
    {
      title: 'General Contracting',
      icon: ClipboardIcon,
      description: 'End-to-end project management and on-site supervision.',
      features: [
        'Project planning and coordination',
        'On-site supervision',
        'Quality control',
        'Subcontractor management',
        'Timeline and budget management'
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
              At SolidForm Construction, we provide a full range of construction services designed
              to meet the diverse needs of our clients. From residential builds to commercial projects,
              our experienced team delivers quality workmanship and reliable service on every project.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-detail-card">
                  <div className="service-header">
                    <div className="service-icon-large">
                      <Icon size={64} color="var(--construction-yellow)" />
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
                          <CheckIcon size={16} color="var(--construction-yellow)" />
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
