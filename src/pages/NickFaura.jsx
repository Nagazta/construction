import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, LocationIcon, ClockIcon } from '../components/Icons';
import './NickFaura.css';

import paradiseImg  from '../assets/images/nick/1.png';
import churchImg    from '../assets/images/nick/2.png';
import sunsetImg    from '../assets/images/nick/3.png';
import mayonImg     from '../assets/images/nick/4.png';
import plantsImg    from '../assets/images/nick/5.png';
import letteringImg from '../assets/images/nick/6.png';
import greekImg     from '../assets/images/nick/7.png';
import bricksImg    from '../assets/images/nick/8.png';
import epoxyImg     from '../assets/images/nick/9.png';
import flowerImg    from '../assets/images/nick/10.png';
import haspiImg     from '../assets/images/nick/11.png';
import abstractImg  from '../assets/images/nick/12.png';
import burntImg     from '../assets/images/nick/13.png';
import woodHaspiImg from '../assets/images/nick/14.png';
import ceilingImg   from '../assets/images/nick/15.png';
import lakeImg      from '../assets/images/nick/16.png';
import seaImg       from '../assets/images/nick/17.png';
import supperImg    from '../assets/images/nick/18.png';
import jeepImg      from '../assets/images/nick/19.png';
import artistPhoto  from '../assets/images/nick/nick.png';

const PORTFOLIO = [
  { title: 'The Paradise',              desc: '3D wall and ceiling paintings — approx. 30 sq m wall + 120 sq m ceiling', details: 'Saudi Arabia',         img: paradiseImg  },
  { title: 'Church Wall Art',           desc: 'Mural art inside a church — water-based paint',                           details: '4m × 5m',             img: churchImg    },
  { title: 'Sunset Sailing',            desc: 'Canvas painting commissioned by a foreign client',                        details: '4m × 2m',             img: sunsetImg    },
  { title: 'Mayon Sunrise',             desc: 'Large canvas landscape painting',                                         details: '6m × 2.5m',           img: mayonImg     },
  { title: 'The Plants',                desc: 'Water-based wall painting for a residential building',                    details: '3m × 3.5m',           img: plantsImg    },
  { title: 'Lettering',                 desc: 'Custom lettering wall design for an office space',                        details: '3m × 2.5m',           img: letteringImg },
  { title: 'Greek Theme',               desc: '3D wall art painting — Greek-inspired theme',                             details: 'Saudi Arabia',         img: greekImg     },
  { title: 'Bricks & Leaves',           desc: 'Wall painting for a call center company',                                 details: 'Manila',               img: bricksImg    },
  { title: 'Epoxy Counter Top',         desc: 'Marine plywood with epoxy finish counter top',                            details: 'Epoxy finish',         img: epoxyImg     },
  { title: 'Flower & Coco',             desc: 'Canvas painting with client reference',                                   details: '1m × 1.5m',           img: flowerImg    },
  { title: 'Haspi Painting',            desc: 'Marine plywood with free-hand haspi finish painting',                     details: 'Haspi technique',      img: haspiImg     },
  { title: 'Abstract',                  desc: 'Canvas abstract painting',                                                details: '2.5m × 1.5m',         img: abstractImg  },
  { title: 'Burnt Effect',              desc: 'Haspi wood stain with roller technique',                                  details: 'Custom technique',     img: burntImg     },
  { title: 'Wood Haspi',               desc: 'Tubular with haspi finish painting in ceiling',                            details: 'Custom technique',     img: woodHaspiImg },
  { title: 'Ceiling & Doors',           desc: 'Haspi painting of ceiling and doors for a residential building',          details: 'Custom technique',     img: ceilingImg   },
  { title: 'Lake and Ducks',            desc: 'Nature-theme mural inside a resort',                                      details: 'Outdoor installation', img: lakeImg      },
  { title: 'Under the Sea',             desc: 'Aquatic-theme mural for a resort',                                        details: 'Aquatic theme',        img: seaImg       },
  { title: 'The Last Supper',           desc: 'Large-scale religious canvas painting',                                   details: '5m × 4m',             img: supperImg    },
  { title: 'Pinoy Jeep',               desc: 'Cultural wall painting celebrating Filipino heritage',                     details: '5m × 3m',             img: jeepImg      },
];

const EXPERIENCES = [
  { title: 'Freelance Artist',                  company: 'Philippine-based',       period: 'Present',       location: 'Cebu, Philippines', desc: 'Canvas painting, furniture art, mural art, and custom commissions.' },
  { title: 'Interior Artist',                   company: 'Various Clients',        period: '2001 – 2013',   location: 'Saudi Arabia',      desc: 'Large-scale 3D ceiling and wall paintings for luxury residential and commercial buildings.' },
  { title: 'Portrait Painting & Signboards',    company: 'Maitland Smith Company', period: '1989 – 1994',   location: 'Cebu / Sabah',      desc: 'Portrait painting and manual signboard creation across Cebu and Sabah, Malaysia.' },
  { title: 'Company Head Artist',               company: 'Canvas Section',         period: 'Earlier Career', location: 'Philippines',       desc: 'Led canvas artwork production and a team of assistant artists for showroom displays.' },
];

const PER_PAGE = 6;

export default function NickFaura() {
  const [page, setPage] = useState(1);
  const total    = Math.ceil(PORTFOLIO.length / PER_PAGE);
  const visible  = PORTFOLIO.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  function goPage(n) {
    setPage(n);
    const element = document.querySelector('.nick-portfolio');
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
    <main className="page-nick">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-inner">
          <p className="page-eyebrow"><span className="eyebrow-rule" />Mural Art Services</p>
          <h1>Nick Veloso-Faura</h1>
          <p className="page-hero-sub">Cebu-Based Mural &amp; Fine Artist — Over 30 Years of Artworks</p>
        </div>
      </section>

      {/* ── Artist Intro ── */}
      <section className="nick-intro">
        <div className="container nick-intro-grid">
          <div className="nick-photo-wrap">
            <img src={artistPhoto} alt="Nick Veloso-Faura" className="nick-photo" loading="eager" decoding="async" />
            <div className="nick-photo-label">
              <strong>Nick Veloso-Faura</strong>
              <span>#NickArts</span>
            </div>
          </div>

          <div className="nick-copy">
            <p className="section-eyebrow-inline">About the Artist</p>
            <h2>A Lifetime Dedicated to Art</h2>
            <p>
              Nick Veloso-Faura is a Cebu-born artist with more than three decades of experience in both local
              and international art projects. His work spans mural art, canvas painting, 3D wall and ceiling
              art, epoxy finishes, lettering, and custom artistic installations.
            </p>
            <p>
              Through years of practice and dedication across the Philippines, Saudi Arabia, and Malaysia,
              he brings thoughts, stories, and emotions to life through visual art — turning blank walls into
              immersive experiences.
            </p>
            <a href="tel:09165653931" className="btn btn-gold nick-contact-btn">
              <PhoneIcon size={16} color="currentColor" />Commission Artwork
            </a>
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="nick-experience">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">Career</p>
            <h2>Experience &amp; Background</h2>
            <p className="section-sub">Over three decades of artistry — from the Philippines to the Middle East.</p>
          </header>

          <div className="timeline">
            {EXPERIENCES.map(({ title, company, period, location, desc }, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <span className="tl-period">
                      <ClockIcon size={13} color="var(--gold)" />{period}
                    </span>
                    <span className="tl-location">
                      <LocationIcon size={13} color="var(--gold)" />{location}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p className="tl-company">{company}</p>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Gallery ── */}
      <section className="nick-portfolio">
        <div className="container">
          <header className="section-hdr">
            <p className="section-eyebrow">Portfolio</p>
            <h2>Selected Artworks</h2>
            <p className="section-sub">A curated selection of mural, canvas, and custom artworks completed locally and internationally.</p>
          </header>

          <div className="art-grid">
            {visible.map(({ title, desc, details, img }, i) => (
              <article className="art-card" key={i}>
                <div className="art-img-wrap">
                  <img src={img} alt={title} loading="lazy" decoding="async" />
                </div>
                <div className="art-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="art-detail">{details}</span>
                </div>
              </article>
            ))}
          </div>

          {total > 1 && (
            <div className="pagination">
              <button className="pag-btn" onClick={() => goPage(page - 1)} disabled={page === 1}>Previous</button>
              <div className="pag-numbers">
                {Array.from({ length: total }, (_, i) => (
                  <button key={i} className={`pag-num${page === i + 1 ? ' pag-num--active' : ''}`} onClick={() => goPage(i + 1)}>{i + 1}</button>
                ))}
              </div>
              <button className="pag-btn" onClick={() => goPage(page + 1)} disabled={page === total}>Next</button>
            </div>
          )}
        </div>
      </section>

      {/* ── Commission CTA ── */}
      <section className="nick-cta-section">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <div className="cta-copy">
            <h2>Commission Custom Artwork</h2>
            <p>Interested in a mural, canvas painting, or custom art installation? Let's talk.</p>
          </div>
          <div className="cta-btns">
            <a href="tel:09165653931" className="btn btn-gold" id="nick-cta-phone">
              <PhoneIcon size={16} color="currentColor" />0916 565 3931
            </a>
            <Link to="/contact" className="btn btn-ghost" id="nick-cta-contact">Send a Message</Link>
          </div>
        </div>
      </section>

    </main>
  );
}