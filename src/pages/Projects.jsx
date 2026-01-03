import { useState } from 'react';
import { LocationIcon } from '../components/Icons';
import './Projects.css';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: 'Drainage System',
      location: 'Upper Calajoan Minglanilla Cebu 6046',
      scope: '110 M long drainage (20M canal/80pcs 18" RCPC), 10pcs of concrete manhole with concrete covers',
      duration: '18 Days',
      category: 'Infrastructure',
      image: '/projects/drainage-calajoan.jpg'
    },
    {
      title: 'BJMP Detention Cell',
      location: 'Tulay, Minglanilla Cebu 6046',
      scope: '2-storey detention cell, 46sq lot area',
      duration: '3.5 Months',
      category: 'Commercial',
      image: '/projects/bjmp-detention.jpg'
    },
    {
      title: 'Drainage System',
      location: 'Tulay Minglanilla Cebu 6046',
      scope: '245 M long drainage (60M canal/80pcs 18" RCPC), 15pcs of concrete manhole with concrete covers',
      duration: '2 Months & 10 Days',
      category: 'Infrastructure',
      image: '/projects/drainage-tulay.jpg'
    },
    {
      title: 'Pueblo San Ricardo',
      location: 'Mohon, Talisay, Cebu 6045',
      scope: 'Painting works, Interior fit-out works',
      duration: '1 Month',
      category: 'Interior',
      image: '/projects/pueblo-san-ricardo.jpg'
    },
    {
      title: 'Birkenstock Ayala',
      location: 'Ayala Central Bloc, IT Park, Cebu City, Cebu 6000',
      scope: 'Fixed tempered glass, Glass doors',
      duration: '2 Days',
      category: 'Glass Works',
      image: '/projects/birkenstock-ayala.jpg'
    },
    {
      title: 'Elevated Water Tank',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '7M elevated steel works with paint, Installation of 4,000L water tank, Plumbing works from source to tank',
      duration: '1 Week',
      category: 'Infrastructure',
      image: '/projects/water-tank.jpg'
    },
    {
      title: '10-Doors Apartment',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: 'Painting of exterior walls, 20 sets solid doors, 20 sets flush doors, 30 sets door knobs, 40 sets sliding window, Rectifying and replacement stairs',
      duration: '3 Weeks',
      category: 'Residential',
      image: '/projects/apartment-doors.jpg'
    },
    {
      title: 'Drainage System',
      location: 'Tungkil, Minglanilla, Cebu 6046',
      scope: '280M drainage system, 20pcs manhole with concrete covers, All made in 24" RCPC',
      duration: '3 Months',
      category: 'Infrastructure',
      image: '/projects/drainage-tungkil.jpg'
    },
    {
      title: 'Office Renovation',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '50sq m renovation - Roofing works, Ceiling works, Tiling works, Glass works, Electrical works',
      duration: '1 Month',
      category: 'Commercial',
      image: '/projects/office-renovation.jpg'
    },
    {
      title: 'CCTV Installation',
      location: 'Olanggo, Lapu-Lapu City, Cebu',
      scope: '1TB CCTV, 3 dome type camera, 32 inch TV, Installation',
      duration: '1 Day',
      category: 'CCTV',
      image: '/projects/cctv-olanggo.jpg'
    },
    {
      title: 'Interior TV Wall Design',
      location: 'Wipro, Ayala Malls, Cebu City, Cebu',
      scope: 'Wall TV area lamination, Interior fit-out',
      duration: '3 Days',
      category: 'Interior',
      image: '/projects/tv-wall-wipro.jpg'
    },
    {
      title: 'Velmiro Heights',
      location: 'Tunghaan, Minglanilla, Cebu 6046',
      scope: 'Rectification, Repainting, Plumbing works',
      duration: '1 Week',
      category: 'Renovation',
      image: '/projects/velmiro-heights.jpg'
    },
    {
      title: 'Design & Renovation',
      location: 'Marco Polo, Tower 3, Condominium',
      scope: 'Full condo renovation, Fit-out',
      duration: '2 Weeks',
      category: 'Residential',
      image: '/projects/marco-polo.jpg'
    },
    {
      title: 'Commercial Building',
      location: 'Compostela, Cebu',
      scope: '490sq m - All structural and fit-out',
      duration: '3 Months',
      category: 'Commercial',
      image: '/projects/compostela-building.jpg'
    },
    {
      title: 'Guest House by the Beach',
      location: 'Sta. Fe Island, Cebu',
      scope: '47 sq m - Design and build',
      duration: '3 Months',
      category: 'Residential',
      image: '/projects/sta-fe-guesthouse.jpg'
    },
    {
      title: 'Residential Building',
      location: 'Cuanos, Minglanilla, Cebu 6046',
      scope: '70 sq m - OBO requirements design and exterior design, Signed and sealed',
      duration: '2 Weeks',
      category: 'Residential',
      image: '/projects/cuanos-residential.jpg'
    },
    {
      title: 'Demolition of Fit-out Commercial',
      location: 'Robinsons Galleria Mall, Cebu City, Cebu',
      scope: '64 sq m - Full demolition and hauling',
      duration: '1 Week',
      category: 'Demolition',
      image: '/projects/robinsons-demolition.jpg'
    },
    {
      title: 'Commercial Dental Clinic',
      location: 'Agus, Lapu-Lapu City, Cebu',
      scope: '39sq m - Design and build',
      duration: '2 Months',
      category: 'Commercial',
      image: '/projects/dental-clinic.jpg'
    },
    {
      title: 'Residential Building',
      location: 'Vito, Minglanilla, Cebu',
      scope: '39sq m - Signed and sealed complete package for OBO',
      duration: '2 Weeks',
      category: 'Residential',
      image: '/projects/vito-residential.jpg'
    },
    {
      title: 'Toilet and Bath Renovation',
      location: 'Airbase, Lapu-Lapu City, Cebu',
      scope: '8 toilet area, 2 shower area, Tiling works, Painting works, Electrical works, Plumbing works',
      duration: '3 Weeks',
      category: 'Renovation',
      image: '/projects/toilet-bath-renovation.jpg'
    },
    {
      title: 'Fit-out Renovation - Vision Express',
      location: 'Davao City, Philippines',
      scope: '36sq m - Temporary store fit out',
      duration: '3 Weeks',
      category: 'Commercial',
      image: '/projects/vision-express-davao.jpg'
    },
    {
      title: '2 Floor Fit-out Restaurant - Choobi Choobi Flavors',
      location: 'Lapu-Lapu City, Cebu',
      scope: '240sq m - Gencon whole restaurant',
      duration: '3 Months',
      category: 'Commercial',
      image: '/projects/choobi-choobi.jpg'
    },
    {
      title: '200sqm Fit-out Demolition',
      location: 'Consolacion, Cebu',
      scope: '200sq m - Demolition back to bare unit',
      duration: '1.5 Months',
      category: 'Demolition',
      image: '/projects/consolacion-demolition.jpg'
    }
  ];

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-placeholder">
                  {/* Replace this div with: <img src={project.image} alt={project.title} /> */}
                  <span>{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    <LocationIcon size={18} color="var(--construction-orange)" />
                    {project.location}
                  </p>
                  <p className="project-scope"><strong>Scope:</strong> {project.scope}</p>
                  <p className="project-duration"><strong>Duration:</strong> {project.duration}</p>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}

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
