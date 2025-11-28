import React from "react";
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
        {/* Your existing carousel code remains exactly the same */}
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
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-slide slide-1">
              <div className="carousel-content">
                <div className="animate-fade-in">
                  <h1 className="display-3 fw-bold mb-3">
                    Global Worker Grekland
                  </h1>
                  <p className="lead mb-4 fs-5">
                    Kopplar samman talangfulla arbetare med företag världen över
                  </p>
                  <div className="button-group">
                    <button className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-search me-2"></i>
                      Hitta arbetare
                    </button>
                    <button className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-building me-2"></i>
                      Hitta företag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-slide slide-2">
              <div className="carousel-content">
                <div className="animate-slide-up">
                  <h1 className="display-3 fw-bold mb-3">
                    Hitta Arbetare
                  </h1>
                  <p className="lead mb-4 fs-5">
                    Upptäck talangfulla arbetare från hela världen
                  </p>
                  
                  {/* Stats Row */}
                  <div className="stats-container mb-5">
                    <div className="stat-card">
                      <h3 className="fw-bold">10K+</h3>
                      <p className="mb-0">Aktiva arbetare</p>
                    </div>
                    <div className="stat-card">
                      <h3 className="fw-bold">50+</h3>
                      <p className="mb-0">Länder</p>
                    </div>
                    <div className="stat-card">
                      <h3 className="fw-bold">95%</h3>
                      <p className="mb-0">Framgångsrate</p>
                    </div>
                  </div>

                  <button className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                    <i className="bi bi-people-fill me-2"></i>
                    Bläddra arbetare
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
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
                    Global Worker Grekland
                  </h1>
                  <p className="lead mb-4 fs-4">
                    Din partner för global rekrytering
                  </p>
                  
                  {/* Feature Icons */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-globe fs-1"></i>
                      <p className="mt-2 mb-0">Global räckvidd</p>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-shield-check fs-1"></i>
                      <p className="mt-2 mb-0">Verifierade profiler</p>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-lightning-charge fs-1"></i>
                      <p className="mt-2 mb-0">Snabba matchningar</p>
                    </div>
                  </div>

                  <div className="button-group">
                    <button className="btn btn-light btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      Kom igång
                    </button>
                    <button className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                      <i className="bi bi-info-circle me-2"></i>
                      Läs mer
                    </button>
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