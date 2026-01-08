import { useState } from 'react';
import { LocationIcon } from '../components/Icons';
import './Projects.css';
// Image imports with responsive webp srcset (vite-imagetools)
import img1SrcSet from '../assets/images/construction/1.png?w=480;800;1200&format=webp&as=srcset';
import img1Fallback from '../assets/images/construction/1.png?width=800&format=png&as=src';
import img2SrcSet from '../assets/images/construction/2.png?w=480;800;1200&format=webp&as=srcset';
import img2Fallback from '../assets/images/construction/2.png?width=800&format=png&as=src';
import img3SrcSet from '../assets/images/construction/3.png?w=480;800;1200&format=webp&as=srcset';
import img3Fallback from '../assets/images/construction/3.png?width=800&format=png&as=src';
import img4SrcSet from '../assets/images/construction/4.png?w=480;800;1200&format=webp&as=srcset';
import img4Fallback from '../assets/images/construction/4.png?width=800&format=png&as=src';
import img5SrcSet from '../assets/images/construction/5.png?w=480;800;1200&format=webp&as=srcset';
import img5Fallback from '../assets/images/construction/5.png?width=800&format=png&as=src';
import img6SrcSet from '../assets/images/construction/6.png?w=480;800;1200&format=webp&as=srcset';
import img6Fallback from '../assets/images/construction/6.png?width=800&format=png&as=src';
import img7SrcSet from '../assets/images/construction/7.png?w=480;800;1200&format=webp&as=srcset';
import img7Fallback from '../assets/images/construction/7.png?width=800&format=png&as=src';
import img8SrcSet from '../assets/images/construction/8.png?w=480;800;1200&format=webp&as=srcset';
import img8Fallback from '../assets/images/construction/8.png?width=800&format=png&as=src';
import img9SrcSet from '../assets/images/construction/9.png?w=480;800;1200&format=webp&as=srcset';
import img9Fallback from '../assets/images/construction/9.png?width=800&format=png&as=src';
import img10SrcSet from '../assets/images/construction/10.png?w=480;800;1200&format=webp&as=srcset';
import img10Fallback from '../assets/images/construction/10.png?width=800&format=png&as=src';
import img11SrcSet from '../assets/images/construction/11.png?w=480;800;1200&format=webp&as=srcset';
import img11Fallback from '../assets/images/construction/11.png?width=800&format=png&as=src';
import img12SrcSet from '../assets/images/construction/12.png?w=480;800;1200&format=webp&as=srcset';
import img12Fallback from '../assets/images/construction/12.png?width=800&format=png&as=src';
import img13SrcSet from '../assets/images/construction/13.png?w=480;800;1200&format=webp&as=srcset';
import img13Fallback from '../assets/images/construction/13.png?width=800&format=png&as=src';
import img14SrcSet from '../assets/images/construction/14.png?w=480;800;1200&format=webp&as=srcset';
import img14Fallback from '../assets/images/construction/14.png?width=800&format=png&as=src';
import img15SrcSet from '../assets/images/construction/15.png?w=480;800;1200&format=webp&as=srcset';
import img15Fallback from '../assets/images/construction/15.png?width=800&format=png&as=src';
import img16SrcSet from '../assets/images/construction/16.png?w=480;800;1200&format=webp&as=srcset';
import img16Fallback from '../assets/images/construction/16.png?width=800&format=png&as=src';
import img17SrcSet from '../assets/images/construction/17.png?w=480;800;1200&format=webp&as=srcset';
import img17Fallback from '../assets/images/construction/17.png?width=800&format=png&as=src';
import img18SrcSet from '../assets/images/construction/18.png?w=480;800;1200&format=webp&as=srcset';
import img18Fallback from '../assets/images/construction/18.png?width=800&format=png&as=src';
import img19SrcSet from '../assets/images/construction/19.png?w=480;800;1200&format=webp&as=srcset';
import img19Fallback from '../assets/images/construction/19.png?width=800&format=png&as=src';
import img20SrcSet from '../assets/images/construction/20.png?w=480;800;1200&format=webp&as=srcset';
import img20Fallback from '../assets/images/construction/20.png?width=800&format=png&as=src';
import img21SrcSet from '../assets/images/construction/21.png?w=480;800;1200&format=webp&as=srcset';
import img21Fallback from '../assets/images/construction/21.png?width=800&format=png&as=src';
import img22SrcSet from '../assets/images/construction/22.png?w=480;800;1200&format=webp&as=srcset';
import img22Fallback from '../assets/images/construction/22.png?width=800&format=png&as=src';
import img23SrcSet from '../assets/images/construction/23.png?w=480;800;1200&format=webp&as=srcset';
import img23Fallback from '../assets/images/construction/23.png?width=800&format=png&as=src';
import img24SrcSet from '../assets/images/construction/24.png?w=480;800;1200&format=webp&as=srcset';
import img24Fallback from '../assets/images/construction/24.png?width=800&format=png&as=src';


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
      image: img1Fallback,
      imageSrcSet: img1SrcSet, // webp srcset generated at build-time
      imageType: 'image/webp'
    },
    {
      title: 'BJMP Detention Cell',
      location: 'Tulay, Minglanilla Cebu 6046',
      scope: '2-storey detention cell, 46sq lot area',
      duration: '3.5 Months',
      category: 'Commercial',
      image: img2Fallback || img2,
      imageSrcSet: img2SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Drainage System',
      location: 'Tulay Minglanilla Cebu 6046',
      scope: '245 M long drainage (60M canal/80pcs 18" RCPC), 15pcs of concrete manhole with concrete covers',
      duration: '2 Months & 10 Days',
      category: 'Infrastructure',
      image: img3Fallback || img3,
      imageSrcSet: img3SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Pueblo San Ricardo',
      location: 'Mohon, Talisay, Cebu 6045',
      scope: 'Painting works, Interior fit-out works',
      duration: '1 Month',
      category: 'Interior',
      image: img4Fallback || img4,
      imageSrcSet: img4SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Birkenstock Ayala',
      location: 'Ayala Central Bloc, IT Park, Cebu City, Cebu 6000',
      scope: 'Fixed tempered glass, Glass doors',
      duration: '2 Days',
      category: 'Glass Works',
      image: img5Fallback || img5,
      imageSrcSet: img5SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Elevated Water Tank',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '7M elevated steel works with paint, Installation of 4,000L water tank, Plumbing works from source to tank',
      duration: '1 Week',
      category: 'Infrastructure',
      image: img6Fallback || img6,
      imageSrcSet: img6SrcSet,
      imageType: 'image/webp'
    },
    {
      title: '10-Doors Apartment',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: 'Painting of exterior walls, 20 sets solid doors, 20 sets flush doors, 30 sets door knobs, 40 sets sliding window, Rectifying and replacement stairs',
      duration: '3 Weeks',
      category: 'Residential',
      image: img7Fallback || img7,
      imageSrcSet: img7SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Drainage System',
      location: 'Tungkil, Minglanilla, Cebu 6046',
      scope: '280M drainage system, 20pcs manhole with concrete covers, All made in 24" RCPC',
      duration: '3 Months',
      category: 'Infrastructure',
      image: img8Fallback || img8,
      imageSrcSet: img8SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Office Renovation',
      location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',
      scope: '50sq m renovation - Roofing works, Ceiling works, Tiling works, Glass works, Electrical works',
      duration: '1 Month',
      category: 'Commercial',
      image: img9Fallback || img9,
      imageSrcSet: img9SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'CCTV Installation',
      location: 'Olanggo, Lapu-Lapu City, Cebu',
      scope: '1TB CCTV, 3 dome type camera, 32 inch TV, Installation',
      duration: '1 Day',
      category: 'CCTV',
      image: img10Fallback || img10,
      imageSrcSet: img10SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Interior TV Wall Design',
      location: 'Wipro, Ayala Malls, Cebu City, Cebu',
      scope: 'Wall TV area lamination, Interior fit-out',
      duration: '3 Days',
      category: 'Interior',
      image: img11Fallback || img11,
      imageSrcSet: img11SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Velmiro Heights',
      location: 'Tunghaan, Minglanilla, Cebu 6046',
      scope: 'Rectification, Repainting, Plumbing works',
      duration: '1 Week',
      category: 'Renovation',
      image: img12Fallback || img12,
      imageSrcSet: img12SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Design & Renovation',
      location: 'Marco Polo, Tower 3, Condominium',
      scope: 'Full condo renovation, Fit-out',
      duration: '2 Weeks',
      category: 'Residential',
      image: img13Fallback || img13,
      imageSrcSet: img13SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Commercial Building',
      location: 'Compostela, Cebu',
      scope: '490sq m - All structural and fit-out',
      duration: '3 Months',
      category: 'Commercial',
      image: img14Fallback || img14,
      imageSrcSet: img14SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Guest House by the Beach',
      location: 'Sta. Fe Island, Cebu',
      scope: '47 sq m - Design and build',
      duration: '3 Months',
      category: 'Residential',
      image: img15Fallback || img15,
      imageSrcSet: img15SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Residential Building',
      location: 'Cuanos, Minglanilla, Cebu 6046',
      scope: '70 sq m - OBO requirements design and exterior design, Signed and sealed',
      duration: '2 Weeks',
      category: 'Residential',
      image: img16Fallback || img16,
      imageSrcSet: img16SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Demolition of Fit-out Commercial',
      location: 'Robinsons Galleria Mall, Cebu City, Cebu',
      scope: '64 sq m - Full demolition and hauling',
      duration: '1 Week',
      category: 'Demolition',
      image: img17Fallback || img17,
      imageSrcSet: img17SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Commercial Dental Clinic',
      location: 'Agus, Lapu-Lapu City, Cebu',
      scope: '39sq m - Design and build',
      duration: '2 Months',
      category: 'Commercial',
      image: img18Fallback || img18,
      imageSrcSet: img18SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Residential Building',
      location: 'Vito, Minglanilla, Cebu',
      scope: '39sq m - Signed and sealed complete package for OBO',
      duration: '2 Weeks',
      category: 'Residential',
      image: img19Fallback || img19,
      imageSrcSet: img19SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Toilet and Bath Renovation',
      location: 'Airbase, Lapu-Lapu City, Cebu',
      scope: '8 toilet area, 2 shower area, Tiling works, Painting works, Electrical works, Plumbing works',
      duration: '3 Weeks',
      category: 'Renovation',
      image: img20Fallback || img20,
      imageSrcSet: img20SrcSet,
      imageType: 'image/webp'
    },
    {
      title: 'Fit-out Renovation - Vision Express',
      location: 'Davao City, Philippines',
      scope: '36sq m - Temporary store fit out',
      duration: '3 Weeks',
      category: 'Commercial',
      image: img21Fallback || img21,
      imageSrcSet: img21SrcSet,
      imageType: 'image/webp'
    },
    {
      title: '2 Floor Fit-out Restaurant - Choobi Choobi Flavors',
      location: 'Lapu-Lapu City, Cebu',
      scope: '240sq m - Gencon whole restaurant',
      duration: '3 Months',
      category: 'Commercial',
      image: img22Fallback || img22,
      imageSrcSet: img22SrcSet,
      imageType: 'image/webp'
    },
    {
      title: '200sqm Fit-out Demolition',
      location: 'Consolacion, Cebu',
      scope: '200sq m - Demolition back to bare unit',
      duration: '1.5 Months',
      category: 'Demolition',
      image: img23Fallback || img23,
      imageSrcSet: img23SrcSet,
      imageType: 'image/webp'
    },
    {
      title: '230sqm Fit-out Renovation',
      location: 'SM City Cebu, Cebu',
      scope: '230sq m - Demolation and renovation',
      duration: '4 Months',
      category: 'Demolition',
      image: img24Fallback || img24,
      imageSrcSet: img24SrcSet,
      imageType: 'image/webp'
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
                  {project.imageSrcSet ? (
                    <picture>
                      <source type={project.imageType} srcSet={project.imageSrcSet} sizes="(max-width: 600px) 100vw, 33vw" />
                      <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
                    </picture>
                  ) : (
                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
                  )}
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
