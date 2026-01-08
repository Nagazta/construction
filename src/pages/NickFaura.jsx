import React, { useState } from 'react';

import './NickFaura.css';
import paradiseImg from "../assets/images/nick/1.png";
import churchImg from "../assets/images/nick/2.png";
import sunsetImg from "../assets/images/nick/3.png";
import mayonImg from "../assets/images/nick/4.png";
import plantsImg from "../assets/images/nick/5.png";
import letteringImg from "../assets/images/nick/6.png";
import greekImg from "../assets/images/nick/7.png";
import bricksImg from "../assets/images/nick/8.png";
import epoxyImg from "../assets/images/nick/9.png";
import flowerImg from "../assets/images/nick/10.png";
import haspiImg from "../assets/images/nick/11.png";
import abstractImg from "../assets/images/nick/12.png";
import burntImg from "../assets/images/nick/13.png";
import woodHaspiImg from "../assets/images/nick/14.png";
import ceilingImg from "../assets/images/nick/15.png";
import lakeImg from "../assets/images/nick/16.png";
import seaImg from "../assets/images/nick/17.png";
import supperImg from "../assets/images/nick/18.png";
import jeepImg from "../assets/images/nick/19.png";

import artistPhoto from "../assets/images/nick/nick.png";

const ITEMS_PER_PAGE = 6;




const handlePageChange = (page) => {
  setCurrentPage(page);
};


const NickFaura = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const experiences = [
    {
      title: "Freelance Artist",
      company: "Philippine-based",
      period: "Present",
      location: "Cebu, Philippines",
      description: "Canvas painting, furniture art, mural art, and custom commissions"
    },
    {
      title: "Interior Artist",
      company: "Various Clients",
      period: "2001–2013",
      location: "Saudi Arabia",
      description: "Large-scale 3D ceiling and wall paintings for luxury residential and commercial buildings"
    },
    {
      title: "Portrait Painting & Manual Signboards",
      company: "Maitland Smith Company",
      period: "1989–1994",
      location: "Cebu, Philippines / Sabah, Malaysia",
      description: "Portrait painting and signboard creation (1989–1991 Cebu, 1991–1994 Sabah)"
    },
    {
      title: "Company Head Artist",
      company: "Canvass Section",
      period: "Earlier Career",
      location: "Philippines",
      description: "Painting canvas artworks and leading assistant artists for showroom displays"
    }
  ];

  const portfolio = [
    
    {
      title: "The Paradise",
      description: "Around 30sq m wall 3D painting and around 120 sq m ceiling 3D art works at Saudi Arabia",
      details: "Saudi Arabia",
      image: paradiseImg
    },
    {
      title: "Church Wall Art",
      description: "4m x 5m Mural Art inside the church. Made of Waterbased painting material ",
      details: "4m × 5m, water-based paint",
      image: churchImg
    },
    {
      title: "Sunset Sailing",
      description: "4m x 2m Canvass painting of the Foreigner client",
      details: "4m × 2m",
      image: sunsetImg
    },
    {
      title: "Mayon Sunrise",
      description: "6m x 2.5m Canvass Painting ",
      details: "6m × 2.5m",
      image: mayonImg
    },
    {
      title: "The Plants",
      description: "Water based painting of the client 3m x 3.5m wall for she wanted a some green plants inside the residential building ",
      details: "3m x 3.5m",
      image: plantsImg
    },
    {
      title: "Lettering",
      description: "Wall Design for office ",
      details: "3m x 2.5m",
      image: letteringImg,
    },
    {
      title: "Greek Theme",
      description: "3D WALL ART PAINTING AT SAUDI ARABIA GREEK INSPIRED THEME BY THE CLIENT",
      details: "Saudi Arabia",
      image: greekImg,
    },
    {
      title: "Bricks & Leaves",
      description: "Painted Bricks and Leaves in a wall of a Call Center Company in Manila",
      details: "Manila",
      image: bricksImg,
    },
    {
      title: "Marine Plywood with Epoxy Finish",
      description: "Epoxy Finish counter top witg marine based only",
      details: "Epoxy finish",
      image: epoxyImg,
    },
    {
      title: "Flower & Coco",
      description: "1m x 1.5m Canvass painting of client with referrance",
      details: "1m x 1.5m",
      image: flowerImg,
    },
    {
      title: "Haspi Painting",
      description: "Marine plywood with FREE HAND HASPI FINISH PAINTING ",
      details: "Haspi",
      image: haspiImg
    },
    {
      title: "Abstract",
      description: "2.5m x 1.5m Canvass abstract painting",
      details: "2.5m x 1.5m",
      image: abstractImg,
    },
    {
      title: "Burnt Effect",
      description: "HASPI WOOD STAIN WITH ROLLER",
      details: "Custom technique",
       image: burntImg,
    },
    {
      title: "Wood Haspi",
      description: "TUBULAR WITH HASPI FINISH PAINTING IN CEILING",
      details: "Custom technique",
      image: woodHaspiImg,
    },
    {
      title: "Ceiling & Doors",
      description: "HASPI PAINTING OF CEILING AND DOORS OF RESIDENTIAL BUILDING ",
      details: "Custom technique",
      image: ceilingImg,
    },
    {
      title: "Lake and Ducks",
      description: "Nature theme inside the resort",
      details: "Outdoor installation",
      image: lakeImg
    },
    {
      title: "Under the Sea",
      description: "Under the sea theme of the resort",
      details: "Aquatic theme",
      image: seaImg
    },
    {
      title: "The Last Supper",
      description: "Religious canvas",
      details: "5m × 4m",
      image: supperImg
    },
    {
      title: "Pinoy Jeep",
      description: "Cultural wall painting",
      details: "5m × 3m",
      image: jeepImg
    }
  ];
  
  const totalPages = Math.ceil(portfolio.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPortfolio = portfolio.slice(startIndex, endIndex);


  return (
    <div className="nick-faura">
      {/* Hero Section */}
      <section className="nick-faura-hero">
        <div className="container">
          <h1>Nick Veloso-Faura</h1>
          <p className="hero-subtitle">Cebu-Based Mural & Fine Artist</p>
          <p className="hero-tagline">More Than 30 Years of Artworks</p>
        </div>
      </section>

      {/* Artist Photo & Intro Section */}
      <section className="artist-intro">
        <div className="container">
          <div className="artist-photo-section">
            <div className="artist-photo-container">
              {artistPhoto ? (
                <img
                  src={artistPhoto}
                  alt="Nick Veloso-Faura"
                  className="artist-photo"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="artist-photo-placeholder">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle
                      cx="60"
                      cy="45"
                      r="22"
                      fill="var(--construction-orange)"
                      opacity="0.3"
                    />
                    <path
                      d="M20 105 C20 72, 40 60, 60 60 C80 60, 100 72, 100 105 Z"
                      fill="var(--construction-orange)"
                      opacity="0.3"
                    />
                  </svg>
                  <p className="photo-placeholder-text">Artist Photo</p>
                </div>
              )}

              <p className="artist-signature">#NickArts</p>
            </div>
          </div>

          <div className="intro-content">
            <h2>About the Artist</h2>
            <p>
              Nick Veloso-Faura is a Cebu-born and raised artist with more than three
              decades of experience in both local and international art projects. His
              work spans mural art, canvas painting, 3D wall and ceiling art, epoxy
              finishes, lettering, and custom artistic installations. Through years of
              practice and dedication, he brings thoughts, stories, and emotions to
              life through visual art.
            </p>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2>Experience & Career</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-period">{exp.period} • {exp.location}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <h2>Selected Artworks</h2>
          <p className="portfolio-description">A curated selection of mural, canvas, and custom artworks completed locally and abroad.</p>
          <div className="portfolio-grid">
            {currentPortfolio.map((item, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p className="portfolio-description-text">{item.description}</p>
                  <p className="portfolio-details">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          {/* PAGINATION */}
          <div className="pagination">
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Artist CTA Section */}
      <section className="artist-cta">
        <div className="container">
          <h2>Commission Custom Artwork</h2>
          <p>Interested in commissioning a mural, canvas painting, or custom art installation?</p>
          <div className="contact-info">
            <h3>Nick Veloso-Faura</h3>
            <p>Cebu-Based Artist</p>
            <p className="contact-phone">
              <svg
                className="phone-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5C3 4.12 4.12 3 5.5 3H8.2C8.9 3 9.53 3.49 9.7 4.17L10.6 7.72C10.74 8.28 10.5 8.86 10.01 9.15L8.15 10.27C9.31 12.9 11.1 14.69 13.73 15.85L14.85 13.99C15.14 13.5 15.72 13.26 16.28 13.4L19.83 14.3C20.51 14.47 21 15.1 21 15.8V18.5C21 19.88 19.88 21 18.5 21H17C9.27 21 3 14.73 3 7V5.5Z"
                  fill="currentColor"
                />
              </svg>
              <span> 0916 565 3931</span>
            </p>

            <p className="contact-hashtag">#NickArts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NickFaura;