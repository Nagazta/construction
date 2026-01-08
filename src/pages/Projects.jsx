import { useState } from 'react';
import { LocationIcon } from '../components/Icons';
import './Projects.css';
import img1 from '../assets/images/construction/1.png';
import img2 from '../assets/images/construction/2.png';
import img3 from '../assets/images/construction/3.png';
import img4 from '../assets/images/construction/4.png';
import img5 from '../assets/images/construction/5.png';
import img6 from '../assets/images/construction/6.png';
import img7 from '../assets/images/construction/7.png';
import img8 from '../assets/images/construction/8.png';
import img9 from '../assets/images/construction/9.png';
import img10 from '../assets/images/construction/10.png';
import img11 from '../assets/images/construction/11.png';
import img12 from '../assets/images/construction/12.png';
import img13 from '../assets/images/construction/13.png';
import img14 from '../assets/images/construction/14.png';
import img15 from '../assets/images/construction/15.png';
import img16 from '../assets/images/construction/16.png';
import img17 from '../assets/images/construction/17.png';
import img18 from '../assets/images/construction/18.png';
import img19 from '../assets/images/construction/19.png';
import img20 from '../assets/images/construction/20.png';
import img21 from '../assets/images/construction/21.png';
import img22 from '../assets/images/construction/22.png';
import img23 from '../assets/images/construction/23.png';
import img24 from '../assets/images/construction/24.png';


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
      image: img1
    },
    {
      title: 'BJMP Detention Cell',
      location: 'Tulay, Minglanilla Cebu 6046',
      scope: '2-storey detention cell, 46sq lot area',
      duration: '3.5 Months',
      category: 'Commercial',
      image: img2
    },
    {
      title: 'Drainage System',
      location: 'Tulay Minglanilla Cebu 6046',
      scope: '245 M long drainage (60M canal/80pcs 18" RCPC), 15pcs of concrete manhole with concrete covers',
      duration: '2 Months & 10 Days',
      category: 'Infrastructure',
      image: img3
    },
    {
      title: 'Pueblo San Ricardo',
      location: 'Mohon, Talisay, Cebu 6045',
      scope: 'Painting works, Interior fit-out works',
      duration: '1 Month',
      category: 'Interior',
      image: img4
    },
    {
      title: 'Birkenstock Ayala',
      location: 'Ayala Central Bloc, IT Park, Cebu City, Cebu 6000',
      scope: 'Fixed tempered glass, Glass doors',
      duration: '2 Days',
      category: 'Glass Works',
      image: img5
    },
    {
      title: 'Elevated Water Tank',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '7M elevated steel works with paint, Installation of 4,000L water tank, Plumbing works from source to tank',
      duration: '1 Week',
      category: 'Infrastructure',
      image: img6
    },
    {
      title: '10-Doors Apartment',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: 'Painting of exterior walls, 20 sets solid doors, 20 sets flush doors, 30 sets door knobs, 40 sets sliding window, Rectifying and replacement stairs',
      duration: '3 Weeks',
      category: 'Residential',
      image: img7
    },
    {
      title: 'Drainage System',
      location: 'Tungkil, Minglanilla, Cebu 6046',
      scope: '280M drainage system, 20pcs manhole with concrete covers, All made in 24" RCPC',
      duration: '3 Months',
      category: 'Infrastructure',
      image: img8
    },
    {
      title: 'Office Renovation',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '50sq m renovation - Roofing works, Ceiling works, Tiling works, Glass works, Electrical works',
      duration: '1 Month',
      category: 'Commercial',
      image: img9
    },
    {
      title: 'CCTV Installation',
      location: 'Olanggo, Lapu-Lapu City, Cebu',
      scope: '1TB CCTV, 3 dome type camera, 32 inch TV, Installation',
      duration: '1 Day',
      category: 'CCTV',
      image: img10
    },
    {
      title: 'Interior TV Wall Design',
      location: 'Wipro, Ayala Malls, Cebu City, Cebu',
      scope: 'Wall TV area lamination, Interior fit-out',
      duration: '3 Days',
      category: 'Interior',
      image: img11
    },
    {
      title: 'Velmiro Heights',
      location: 'Tunghaan, Minglanilla, Cebu 6046',
      scope: 'Rectification, Repainting, Plumbing works',
      duration: '1 Week',
      category: 'Renovation',
      image: img12
    },
    {
      title: 'Design & Renovation',
      location: 'Marco Polo, Tower 3, Condominium',
      scope: 'Full condo renovation, Fit-out',
      duration: '2 Weeks',
      category: 'Residential',
      image: img13
    },
    {
      title: 'Commercial Building',
      location: 'Compostela, Cebu',
      scope: '490sq m - All structural and fit-out',
      duration: '3 Months',
      category: 'Commercial',
      image: img14
    },
    {
      title: 'Guest House by the Beach',
      location: 'Sta. Fe Island, Cebu',
      scope: '47 sq m - Design and build',
      duration: '3 Months',
      category: 'Residential',
      image: img15
    },
    {
      title: 'Residential Building',
      location: 'Cuanos, Minglanilla, Cebu 6046',
      scope: '70 sq m - OBO requirements design and exterior design, Signed and sealed',
      duration: '2 Weeks',
      category: 'Residential',
      image: img16
    },
    {
      title: 'Demolition of Fit-out Commercial',
      location: 'Robinsons Galleria Mall, Cebu City, Cebu',
      scope: '64 sq m - Full demolition and hauling',
      duration: '1 Week',
      category: 'Demolition',
      image: img17
    },
    {
      title: 'Commercial Dental Clinic',
      location: 'Agus, Lapu-Lapu City, Cebu',
      scope: '39sq m - Design and build',
      duration: '2 Months',
      category: 'Commercial',
      image: img18
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
      title: 'Toilet and Bath Renovation',
      location: 'Airbase, Lapu-Lapu City, Cebu',
      scope: '8 toilet area, 2 shower area, Tiling works, Painting works, Electrical works, Plumbing works',
      duration: '3 Weeks',
      category: 'Renovation',
      image: img20
    },
    {
      title: 'Fit-out Renovation - Vision Express',
      location: 'Davao City, Philippines',
      scope: '36sq m - Temporary store fit out',
      duration: '3 Weeks',
      category: 'Commercial',
      image: img21
    },
    {
      title: '2 Floor Fit-out Restaurant - Choobi Choobi Flavors',
      location: 'Lapu-Lapu City, Cebu',
      scope: '240sq m - Gencon whole restaurant',
      duration: '3 Months',
      category: 'Commercial',
      image: img22
    },
    {
      title: '200sqm Fit-out Demolition',
      location: 'Consolacion, Cebu',
      scope: '200sq m - Demolition back to bare unit',
      duration: '1.5 Months',
      category: 'Demolition',
      image: img23
    },
    {
      title: '230sqm Fit-out Renovation',
      location: 'SM City Cebu, Cebu',
      scope: '230sq m - Demolation and renovation',
      duration: '4 Months',
      category: 'Demolition',
      image: img24
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
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
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
