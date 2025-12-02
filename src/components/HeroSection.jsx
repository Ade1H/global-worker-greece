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
                  <h1 className="hero-title mb-4">
                    Global Worker Grekland
                  </h1>
                  <p className="hero-subtitle mb-5">
                    Rekryterar svenska arbetare till jobb i länder med fantastiskt väder
                  </p>
                  <div className="button-group">
                    <Link to="/Tjanster" className="btn-modern btn-primary-modern">
                      <i className="bi bi-sun me-2"></i>
                      Hitta jobb i varma länder
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: För arbetare - FIXED GLASS EFFECT */}
          <div className="carousel-item">
            <div className="carousel-slide slide-2">
              <div className="carousel-content">
                <div className="animate-slide-up">
                  <h1 className="hero-title mb-4">
                    Jobb i Paradiset
                  </h1>
                  <p className="hero-subtitle mb-5">
                    Upptäck jobbmöjligheter i Spanien, Grekland, Italien, Portugal & mer
                  </p>
                  
                  {/* Varma länder - USING FEATURE-ICON CLASS FOR GLASS EFFECT */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-sun-fill" style={{color: '#f59e0b'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Spanien</div>
                        <div className="small opacity-75">30+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-umbrella-fill" style={{color: '#3b82f6'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Grekland</div>
                        <div className="small opacity-75">25+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-tree-fill" style={{color: '#10b981'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Italien</div>
                        <div className="small opacity-75">20+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-water" style={{color: '#06b6d4'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Portugal</div>
                        <div className="small opacity-75">15+ jobb tillgängliga</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/Tjanster" className="btn-modern btn-primary-modern">
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
                  <h1 className="hero-title mb-4">
                    Fördelar för dig
                  </h1>
                  
                  {/* Fördelar */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-house-door-fill"></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Boende ingår</div>
                        <div className="small opacity-75">Bostad ordnas åt dig</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-airplane-fill"></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Flyg betalas</div>
                        <div className="small opacity-75">Resekostnader ingår</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-shield-fill"></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Sjukförsäkring</div>
                        <div className="small opacity-75">Fullt försäkrad</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-cash-stack"></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Bra lön</div>
                        <div className="small opacity-75">Konkurrenskraftiga löner</div>
                      </div>
                    </div>
                  </div>

                  <div className="button-group">
                    <Link to="/contact" className="btn-modern btn-secondary-modern">
                      <i className="bi bi-chat-dots me-2"></i>
                      Kontakta oss
                    </Link>
                    <Link to="/about" className="btn-modern btn-secondary-modern">
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