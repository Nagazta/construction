import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LocationIcon, ClockIcon, PhoneIcon } from '../components/Icons';
import './Projects.css';
import img1Fallback  from '../assets/images/construction/1.png';
import img2Fallback  from '../assets/images/construction/2.png';
import img3Fallback  from '../assets/images/construction/3.png';
import img4Fallback  from '../assets/images/construction/4.png';
import img5Fallback  from '../assets/images/construction/5.png';
import img6Fallback  from '../assets/images/construction/6.png';
import img7Fallback  from '../assets/images/construction/7.png';
import img8Fallback  from '../assets/images/construction/8.png';
import img9Fallback  from '../assets/images/construction/9.png';
import img10Fallback from '../assets/images/construction/10.png';
import img11Fallback from '../assets/images/construction/11.png';
import img12Fallback from '../assets/images/construction/12.png';
import img13Fallback from '../assets/images/construction/13.png';
import img14Fallback from '../assets/images/construction/14.png';
import img15Fallback from '../assets/images/construction/15.png';
import img16Fallback from '../assets/images/construction/16.png';
import img17Fallback from '../assets/images/construction/17.png';
import img18Fallback from '../assets/images/construction/18.png';
import img19Fallback from '../assets/images/construction/19.png';
import img20Fallback from '../assets/images/construction/20.png';
import img21Fallback from '../assets/images/construction/21.png';
import img22Fallback from '../assets/images/construction/22.png';
import img23Fallback from '../assets/images/construction/23.png';
import img24Fallback from '../assets/images/construction/24.png';

const ALL_PROJECTS = [
  { title: 'Drainage System',                location: 'Upper Calajoan, Minglanilla, Cebu 6046', scope: '110M drainage — 20M canal / 80pcs 18" RCPC, 10pcs concrete manhole', duration: '18 Days',    category: 'Infrastructure', img: img1Fallback  },
  { title: 'BJMP Detention Cell',             location: 'Tulay, Minglanilla, Cebu 6046',          scope: '2-storey detention cell, 46 sq m lot area',                            duration: '3.5 Months', category: 'Commercial',    img: img2Fallback  },
  { title: 'Asphalting Works',                location: 'General Milling, Lapu-Lapu',             scope: '1,000 L.M.',                                                           duration: '3 Days',     category: 'Road Works',    img: img3Fallback  },
  { title: 'Pueblo San Ricardo',              location: 'Mohon, Talisay, Cebu 6045',              scope: 'Painting works, interior fit-out',                                      duration: '1 Month',    category: 'Interior',      img: img4Fallback  },
  { title: 'Birkenstock Ayala',               location: 'Ayala Central Bloc IT Park, Cebu City',  scope: 'Fixed tempered glass, glass doors',                                    duration: '2 Days',     category: 'Glass Works',   img: img5Fallback  },
  { title: 'Elevated Water Tank',             location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',  scope: '7M elevated steel works, 4,000L tank, plumbing',                       duration: '1 Week',     category: 'Infrastructure', img: img6Fallback  },
  { title: '10-Door Apartment',               location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',  scope: 'Exterior painting, 40 doors, 40 windows, stair rectification',         duration: '3 Weeks',    category: 'Residential',   img: img7Fallback  },
  { title: 'Drainage System',                 location: 'Tungkil, Minglanilla, Cebu 6046',        scope: '280M drainage — 20pcs manhole, all 24" RCPC',                          duration: '3 Months',   category: 'Infrastructure', img: img8Fallback  },
  { title: 'Office Renovation',               location: 'Airbase, Sangi, Lapu-Lapu City, Cebu',  scope: '50 sq m — roofing, ceiling, tiling, glass, electrical',                duration: '1 Month',    category: 'Commercial',    img: img9Fallback  },
  { title: 'CCTV Installation',               location: 'Olango, Lapu-Lapu City, Cebu',           scope: '1TB CCTV, 3 dome cameras, 32" TV, full installation',                  duration: '1 Day',      category: 'Commercial',    img: img10Fallback },
  { title: 'Interior TV Wall Design',         location: 'Wipro, Ayala Malls, Cebu City',          scope: 'Wall TV area lamination, interior fit-out',                            duration: '3 Days',     category: 'Interior',      img: img11Fallback },
  { title: 'Velmiro Heights',                 location: 'Tunghaan, Minglanilla, Cebu 6046',       scope: 'Rectification, repainting, plumbing works',                            duration: '1 Week',     category: 'Renovation',    img: img12Fallback },
  { title: 'Design & Renovation',             location: 'Marco Polo Tower 3, Condominium',        scope: 'Full condo renovation, fit-out',                                       duration: '2 Weeks',    category: 'Residential',   img: img13Fallback },
  { title: 'Commercial Building',             location: 'Compostela, Cebu',                       scope: '490 sq m — all structural and fit-out',                                duration: '3 Months',   category: 'Commercial',    img: img14Fallback },
  { title: 'Guest House by the Beach',        location: 'Sta. Fe Island, Cebu',                   scope: '47 sq m — design and build',                                           duration: '3 Months',   category: 'Residential',   img: img15Fallback },
  { title: 'Residential Building',            location: 'Cuanos, Minglanilla, Cebu 6046',         scope: '70 sq m — OBO requirements, exterior design, signed & sealed',         duration: '2 Weeks',    category: 'Residential',   img: img16Fallback },
  { title: 'Fit-out Demolition',              location: 'Robinsons Galleria Mall, Cebu City',     scope: '64 sq m — full demolition and hauling',                                duration: '1 Week',     category: 'Demolition',    img: img17Fallback },
  { title: 'Commercial Dental Clinic',        location: 'Agus, Lapu-Lapu City, Cebu',             scope: '39 sq m — design and build',                                           duration: '2 Months',   category: 'Commercial',    img: img18Fallback },
  { title: 'Residential Building',            location: 'Vito, Minglanilla, Cebu',                scope: '39 sq m — complete OBO package, signed & sealed',                      duration: '2 Weeks',    category: 'Residential',   img: img19Fallback },
  { title: 'Toilet & Bath Renovation',        location: 'Airbase, Lapu-Lapu City, Cebu',          scope: '8 toilet areas, 2 shower areas — tiling, painting, electrical, plumbing', duration: '3 Weeks', category: 'Renovation',    img: img20Fallback },
  { title: 'Vision Express Fit-out',          location: 'Davao City, Philippines',                scope: '36 sq m — temporary store fit-out',                                    duration: '3 Weeks',    category: 'Commercial',    img: img21Fallback },
  { title: 'Choobi Choobi Flavors',           location: 'Lapu-Lapu City, Cebu',                   scope: '240 sq m — 2-floor restaurant general construction',                   duration: '3 Months',   category: 'Commercial',    img: img22Fallback },
  { title: '200sqm Fit-out Demolition',       location: 'Consolacion, Cebu',                      scope: '200 sq m — demolition back to bare unit',                              duration: '1.5 Months', category: 'Demolition',    img: img23Fallback },
  { title: '230sqm Fit-out Renovation',       location: 'SM City Cebu',                           scope: '230 sq m — demolition and renovation',                                 duration: '4 Months',   category: 'Demolition',    img: img24Fallback },
];

const CATEGORIES = ['All', ...Array.from(new Set(ALL_PROJECTS.map(p => p.category)))];
const PER_PAGE = 9;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage]   = useState(1);

  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  const totalPages  = Math.ceil(filtered.length / PER_PAGE);
  const start       = (currentPage - 1) * PER_PAGE;
  const visible     = filtered.slice(start, start + PER_PAGE);

  function handleFilter(cat) { setActiveFilter(cat); setCurrentPage(1); }
  function handlePage(n) {
    setCurrentPage(n);
    const element = document.querySelector('.projects-body');
    if (element) {
      const offset = 100; // offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <main className="page-projects">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-inner">
          <p className="page-eyebrow"><span className="eyebrow-rule" />Our Portfolio</p>
          <h1>Past Projects</h1>
          <p className="page-hero-sub">A track record of quality work across residential, commercial, and infrastructure projects throughout Cebu.</p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="filter-bar">
        <div className="container filter-inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' filter-btn--active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="projects-body">
        <div className="container">
          <p className="proj-count">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</p>
          <div className="proj-grid">
            {visible.map(({ title, location, scope, duration, category, img }, i) => (
              <article className="proj-item" key={i}>
                <div className="proj-item-img">
                  <img src={img} alt={title} loading="lazy" decoding="async" />
                  <span className="proj-item-cat">{category}</span>
                </div>
                <div className="proj-item-body">
                  <div className="proj-item-meta">
                    <span className="proj-item-dur">
                      <ClockIcon size={13} color="var(--gold)" />{duration}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p className="proj-item-loc">
                    <LocationIcon size={13} color="var(--gold)" />{location}
                  </p>
                  <p className="proj-item-scope">{scope}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button className="pag-btn" onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <div className="pag-numbers">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`pag-num${currentPage === i + 1 ? ' pag-num--active' : ''}`}
                    onClick={() => handlePage(i + 1)}
                  >{i + 1}</button>
                ))}
              </div>
              <button className="pag-btn" onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="projects-cta-section">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-copy">
            <h2>Let's Build Your Next Project Together</h2>
            <p>Ready to discuss your construction needs? Get in touch with us today.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-gold" id="projects-cta">Get in Touch</Link>
            <a href="tel:09531774035" className="btn btn-ghost" id="projects-call">
              <PhoneIcon size={16} color="currentColor" />Call Us Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
