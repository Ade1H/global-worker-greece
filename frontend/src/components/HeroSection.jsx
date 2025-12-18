import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // Bildsökvägar - använder WebP för bättre prestanda
  const slideImages = [
    {
      id: 1,
      image: "/images/hero1-1920.webp", // Byt från .png till .webp
      title: "Global Worker Grekland",
      subtitle: "Rekryterar svenska arbetare till jobb i Aten"
    },
    {
      id: 2,
      image: "/images/hero2-1920.webp", // Byt från .png till .webp
      title: "Jobb i 8 Länder",
      subtitle: "Vi erbjuder jobb i vackra länder runt om i världen"
    },
    {
      id: 3,
      image: "/images/hero3-1920.webp", // Byt från .png till .webp
      title: "Fördelar för dig",
      subtitle: ""
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Auto-slide funktion
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slideImages.length);
      }, 8000);
    };
    
    startAutoSlide();

    // Preload nästa bild för bättre UX
    const preloadImages = () => {
      slideImages.forEach((slide, index) => {
        if (index !== currentSlide) {
          const img = new Image();
          img.src = slide.image;
        }
      });
    };
    
    preloadImages();

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, slideImages.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slideImages.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slideImages.length) % slideImages.length);
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideImages.length);
    }, 8000);
  };

  return (
    <div className="hero-section-container">
      <div className="hero-carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators custom-indicators">
          {slideImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Gå till slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {/* Slide 1: Huvudbudskap */}
          <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${slideImages[0].image}')`
              }}
            >
              <div className="carousel-content">
                <div className="animate-fade-in">
                   <img 
                    src="/images/logo.png" 
                    alt="Global Worker Grekland Logo" 
                    className="logo-img mb-4"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <h1 className="hero-title mb-4">
                    {slideImages[0].title}
                  </h1>
                  <p className="hero-subtitle mb-5">
                    {slideImages[0].subtitle}
                  </p>
                  <div className="button-group">
                    <Link to="/Tjanster" className="btn-modern btn-primary-modern">
                      <i className="bi bi-sun me-2"></i>
                      våra lediga tjänster
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Länderlista */}
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${slideImages[1].image}')`
              }}
            >
              <div className="carousel-content">
                <div className="animate-slide-up">
                  <h1 className="hero-title mb-4">
                    {slideImages[1].title}
                  </h1>
                  <p className="hero-subtitle mb-5">
                    {slideImages[1].subtitle}
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
                    ansök här
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Fördelar */}
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${slideImages[2].image}')`
              }}
            >
              <div className="carousel-content">
                <div className="animate-bounce-in">
                {/*   <img 
                    src="/images/logo.png" 
                    alt="Global Worker Grekland Logo" 
                    className="logo-img mb-4"
                    loading="lazy"
                    width="150"
                    height="75"
                  /> */}
                  <h1 className="hero-title mb-4">
                    {slideImages[2].title}
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
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Föregående</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
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
            {slideImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentSlide ? "active" : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Gå till slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;