import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <div 
        id="heroCarousel" 
        className="carousel slide" 
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators custom-indicators">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {/* Slide 1: Huvudbudskap */}
          <div className="carousel-item active">
            <div className="carousel-slide slide-1">
              <div className="carousel-content">
                <div className="animate-fade-in">
                  <h1 className="display-3 fw-bold mb-3">
                    Global Worker Grekland
                  </h1>
                  <p className="lead mb-4 fs-5">
                    Rekryterar svenska arbetare till jobb i länder med fantastiskt väder
                  </p>
                  <div className="button-group">
                    <Link to="/Tjanster" className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-sun me-2"></i>
                      Hitta jobb i varma länder
                    </Link>
          
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: För arbetare */}
          <div className="carousel-item">
            <div className="carousel-slide slide-2">
              <div className="carousel-content">
                <div className="animate-slide-up">
                  <h1 className="display-3 fw-bold mb-3">
                    Jobb i Paradiset
                  </h1>
                  <p className="lead mb-4 fs-5">
                    Upptäck jobbmöjligheter i Spanien, Grekland, Italien, Portugal & mer
                  </p>
                  
                  {/* Varma länder */}
                  <div className="stats-container mb-5">
                    <div className="stat-card">
                      <i className="bi bi-sun-fill text-warning fs-2 mb-2"></i>
                      <h4 className="fw-bold">Spanien</h4>
                      <p className="mb-0">30+ jobb</p>
                    </div>
                    <div className="stat-card">
                      <i className="bi bi-umbrella-fill text-primary fs-2 mb-2"></i>
                      <h4 className="fw-bold">Grekland</h4>
                      <p className="mb-0">25+ jobb</p>
                    </div>
                    <div className="stat-card">
                      <i className="bi bi-tree-fill text-success fs-2 mb-2"></i>
                      <h4 className="fw-bold">Italien</h4>
                      <p className="mb-0">20+ jobb</p>
                    </div>
                    <div className="stat-card">
                      <i className="bi bi-water text-info fs-2 mb-2"></i>
                      <h4 className="fw-bold">Portugal</h4>
                      <p className="mb-0">15+ jobb</p>
                    </div>
                  </div>

                  <Link to="/jobs" className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                    <i className="bi bi-briefcase me-2"></i>
                    Se alla jobb
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Fördelar */}
          <div className="carousel-item">
            <div className="carousel-slide slide-3">
              <div className="carousel-content">
                <div className="animate-bounce-in">
                  <img 
                    src="/images/logo.png" 
                    alt="Global Worker Grekland Logo" 
                    className="logo-img mb-4"
                  />
                  <h1 className="display-2 fw-bold mb-3">
                    Fördelar för dig
                  </h1>
                  
                  {/* Fördelar */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-house-door-fill text-success fs-1"></i>
                      <h5 className="mt-2 mb-1">Boende ingår</h5>
                      <p className="small mb-0">Bostad ordnas åt dig</p>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-airplane-fill text-primary fs-1"></i>
                      <h5 className="mt-2 mb-1">Flyg betalas</h5>
                      <p className="small mb-0">Resekostnader ingår</p>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-shield-fill text-info fs-1"></i>
                      <h5 className="mt-2 mb-1">Sjukförsäkring</h5>
                      <p className="small mb-0">Fullt försäkrad</p>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-cash-stack text-warning fs-1"></i>
                      <h5 className="mt-2 mb-1">Bra lön</h5>
                      <p className="small mb-0">Konkurrenskraftiga löner</p>
                    </div>
                  </div>

                  <div className="button-group">
                    <Link to="/contact" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-chat-dots me-2"></i>
                      Kontakta oss
                    </Link>
                    <Link to="/about" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-info-circle me-2"></i>
                      Om oss
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Föregående</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Nästa</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;