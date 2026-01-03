import { LocationIcon } from '../components/Icons';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Two-Storey Residential House',
      location: 'Minglanilla, Cebu',
      description: 'Modern residential build completed with reinforced concrete structure.',
      category: 'Residential'
    },
    {
      title: 'Commercial Storefront Renovation',
      location: 'Cebu South Area',
      description: 'Full renovation including structural reinforcement and finishing works.',
      category: 'Commercial'
    },
    {
      title: 'Townhouse Unit Construction',
      location: 'Minglanilla',
      description: 'Multiple-unit residential project with modern layout.',
      category: 'Residential'
    },
    {
      title: 'Office Interior Fit-Out',
      location: 'Cebu City',
      description: 'Complete interior renovation for modern office space.',
      category: 'Commercial'
    },
    {
      title: 'Residential Extension Project',
      location: 'Talisay City',
      description: 'Second-floor addition with matching architectural design.',
      category: 'Renovation'
    },
    {
      title: 'Retail Space Construction',
      location: 'Minglanilla',
      description: 'Ground-up construction of modern retail space.',
      category: 'Commercial'
    },
    {
      title: 'Kitchen and Bath Remodel',
      location: 'Naga City',
      description: 'Complete renovation with upgraded fixtures and finishes.',
      category: 'Renovation'
    },
    {
      title: 'Single-Family Home Build',
      location: 'San Fernando',
      description: 'Custom-designed single-family home with modern amenities.',
      category: 'Residential'
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1>Our Past Projects</h1>
          <p>Quality work that speaks for itself</p>
        </div>
      </section>

      <section className="projects-main">
        <div className="container">
          <div className="projects-intro">
            <h2>Building Excellence Across Cebu</h2>
            <p>
              Take a look at some of the projects we've completed. Each one represents our
              commitment to quality construction, attention to detail, and client satisfaction.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-placeholder">
                  <span>{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    <LocationIcon size={18} color="var(--construction-yellow)" />
                    {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <h2>Let's Build Your Next Project Together</h2>
            <p>Ready to discuss your construction needs? Get in touch with us today.</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
