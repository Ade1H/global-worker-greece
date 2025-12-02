import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

          {/* Slide 2: Länderlista - UPDATED WITH YOUR COUNTRIES */}
          <div className="carousel-item">
            <div className="carousel-slide slide-2">
              <div className="carousel-content">
                <div className="animate-slide-up">
                  <h1 className="hero-title mb-4">
                    Jobb i 8 Länder
                  </h1>
                  <p className="hero-subtitle mb-5">
                    Vi erbjuder jobb i vackra länder runt om i världen
                  </p>
                  
                  {/* Länder - UPDATED LIST */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-flag-fill" style={{color: '#0ea5e9'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Grekland</div>
                        <div className="small opacity-75">35+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-sun-fill" style={{color: '#f59e0b'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Spanien</div>
                        <div className="small opacity-75">28+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-tree-fill" style={{color: '#10b981'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Sverige</div>
                        <div className="small opacity-75">42+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-umbrella-fill" style={{color: '#8b5cf6'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Thailand</div>
                        <div className="small opacity-75">22+ jobb tillgängliga</div>
                      </div>
                    </div>
                  </div>

                  {/* Second row of countries */}
                  <div className="features-container mb-5">
                    <div className="feature-icon">
                      <i className="bi bi-tropical-storm" style={{color: '#84cc16'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Brasilien</div>
                        <div className="small opacity-75">18+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-building" style={{color: '#ef4444'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Dubai</div>
                        <div className="small opacity-75">31+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-water" style={{color: '#06b6d4'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Seychellerna</div>
                        <div className="small opacity-75">12+ jobb tillgängliga</div>
                      </div>
                    </div>
                    <div className="feature-icon">
                      <i className="bi bi-flower1" style={{color: '#ec4899'}}></i>
                      <div className="feature-text">
                        <div className="fw-bold mb-1">Colombia</div>
                        <div className="small opacity-75">15+ jobb tillgängliga</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/Tjanster" className="btn-modern btn-primary-modern">
                    <i className="bi bi-briefcase me-2"></i>
                    Se alla jobbmöjligheter
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
        {!isMobile && (
          <>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Föregående</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Nästa</span>
            </button>
          </>
        )}
      </div>

      {/* Mobile-specific elements */}
      {isMobile && (
        <div className="mobile-indicators">
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
        </div>
      )}
    </div>
  );
}

export default HeroSection;