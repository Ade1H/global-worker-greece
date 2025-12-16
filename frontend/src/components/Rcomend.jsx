import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rcomend.css';

function Rekommendationer() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Alla');

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Anders Larsson",
      position: "VD, TechSolutions AB",
      company: "TechSolutions AB",
      type: "Företag",
      rating: 5,
      text: "Global Worker har varit en ovärderlig partner för vår tillväxt. De har levererat exceptionella IT-talanger som direkt bidragit till vår framgång. Deras förståelse för vår verksamhet och kultur är imponerande.",
      date: "2024-01-10",
      category: "IT-rekrytering",
      country: "🇸🇪 Sverige",
      color: "#2c5282"
    },
    {
      id: 2,
      name: "Elena Papadopoulos",
      position: "Marknadschef",
      company: "Athena Consulting",
      type: "Företag",
      rating: 5,
      text: "Som grekiskt företag som vill expandera till Sverige var Global Worker den perfekta partnern. Deras kunskap om både den svenska och grekiska arbetsmarknaden gav oss en unik fördel.",
      date: "2024-01-08",
      category: "Internationell rekrytering",
      country: "🇬🇷 Grekland",
      color: "#3182ce"
    },
    {
      id: 3,
      name: "Marcus Berg",
      position: "Senior Utvecklare",
      company: "Google",
      type: "Arbetare",
      rating: 5,
      text: "Genom Global Worker fick jag mitt drömjobb i Grekland. De guidade mig genom hela processen - från ansökan till relocation. Professionellt och personligt bemötande hela vägen!",
      date: "2024-01-05",
      category: "Tech",
      country: "🇸🇪 → 🇬🇷",
      color: "#4299e1"
    },
    {
      id: 4,
      name: "Lisa Malm",
      position: "Säljchef",
      company: "SalesForce Nordic",
      type: "Företag",
      rating: 5,
      text: "Vi har anlitat Global Worker för flera seniora säljrekryteringar och resultaten har överträffat våra förväntningar. Deras nätverk och screeningprocess är exceptionell.",
      date: "2024-01-03",
      category: "Sales-rekrytering",
      country: "🇸🇪 Sverige",
      color: "#2b6cb0"
    },
    {
      id: 5,
      name: "Nikolas Dimitriou",
      position: "IT-tekniker",
      company: "Microsoft",
      type: "Arbetare",
      rating: 5,
      text: "Global Worker hjälpte mig att hitta ett fantastiskt jobb i Stockholm. De förberedde mig utmärkt för intervjuer och förhandlade en konkurrenskraftig paket. Tack!",
      date: "2023-12-28",
      category: "Tech",
      country: "🇬🇷 → 🇸🇪",
      color: "#2a4365"
    },
    {
      id: 6,
      name: "Sara Chen",
      position: "HR Director",
      company: "Nordic Bank",
      type: "Företag",
      rating: 5,
      text: "Snabb, professionell och effektiv. Global Worker förstod våra behov perfekt och levererade kvalificerade kandidater inom rekordtid. Vår go-to partner för rekrytering.",
      date: "2023-12-25",
      category: "Finance-rekrytering",
      country: "🇸🇪 Sverige",
      color: "#1a365d"
    },
    {
      id: 7,
      name: "David Eriksson",
      position: "Marknadsföringsspecialist",
      company: "Spotify",
      type: "Arbetare",
      rating: 5,
      text: "Efter att ha flyttat från Grekland hjälpte Global Worker mig att etablera mig på den svenska arbetsmarknaden. Deras kontakter och rådgivning var ovärderliga.",
      date: "2023-12-20",
      category: "Marketing",
      country: "🇬🇷 → 🇸🇪",
      color: "#22527a"
    },
    {
      id: 8,
      name: "Maria Rodriguez",
      position: "VD",
      company: "MedTech Solutions",
      type: "Företag",
      rating: 5,
      text: "Global Worker har varit instrumental i vår expansion till Grekland. Deras lokala kunskap kombinerat med internationell expertis gav oss en smidig start.",
      date: "2023-12-18",
      category: "Internationell rekrytering",
      country: "🇪🇸 Spanien",
      color: "#2d3748"
    }
  ];

  const stats = [
    { number: '98%', label: 'Nöjda kunder', icon: 'bi-emoji-smile' },
    { number: '4.9', label: 'Genomsnittligt betyg', icon: 'bi-star', sublabel: '/5' },
    { number: '500+', label: 'Recensioner', icon: 'bi-chat' },
    { number: '95%', label: 'Återkommande kunder', icon: 'bi-arrow-repeat' }
  ];

  const filters = [
    { label: 'Alla', icon: 'bi-list', count: testimonials.length },
    { label: 'Företag', icon: 'bi-building', count: testimonials.filter(t => t.type === 'Företag').length },
    { label: 'Arbetare', icon: 'bi-person', count: testimonials.filter(t => t.type === 'Arbetare').length },
    { label: 'Tech', icon: 'bi-laptop', count: testimonials.filter(t => t.category.includes('Tech')).length },
    { label: 'Sales', icon: 'bi-graph-up', count: testimonials.filter(t => t.category.includes('Sales')).length },
    { label: 'Marketing', icon: 'bi-megaphone', count: testimonials.filter(t => t.category.includes('Marketing')).length }
  ];

  const trustIndicators = [
    { 
      icon: 'bi-award', 
      title: 'Certifierade Proffs', 
      desc: 'Alla våra rekryterare är certifierade med gedigen branscherfarenhet'
    },
    { 
      icon: 'bi-shield-check', 
      title: 'DataSkydd', 
      desc: 'Strikt GDPR-compliance för maximal integritet och säkerhet'
    },
    { 
      icon: 'bi-lock', 
      title: 'Bekräftat Förtroende', 
      desc: 'Verifierade recensioner från riktiga kunder och kandidater'
    }
  ];

  const filteredTestimonials = activeFilter === 'Alla' 
    ? testimonials 
    : activeFilter === 'Företag' 
      ? testimonials.filter(t => t.type === 'Företag')
      : activeFilter === 'Arbetare' 
        ? testimonials.filter(t => t.type === 'Arbetare')
        : testimonials.filter(t => t.category.includes(activeFilter));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('sv-SE', options);
  };

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <div className="rekommendationer-container">
      <div className="container">
        {/* Hero Section - EXACT SAME STRUCTURE */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Rekommendationer
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
              Läs vad våra kunder och kandidater säger om sitt samarbete med Global Worker
            </p>
            <div className={`hero-search ${isVisible ? 'visible' : ''}`}>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                {testimonials.length} verifierade rekommendationer
              </p>
            </div>
          </div>
        </div>

        {/* Section Header - EXACT SAME STRUCTURE */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Vårt Rykte i Siffror
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Förtroende byggt på verkliga resultat och nöjda kunder
          </p>
        </div>

        {/* Stats Bar - EXACT SAME STRUCTURE */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-wrapper">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="stat-number">
                {stat.number}
                {stat.sublabel && <span className="stat-sublabel">{stat.sublabel}</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs - Similar to job grid header */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Rekommendationer efter kategori
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Filtrera rekommendationer baserat på typ och kategori
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-container">
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className={`filter-tab ${activeFilter === filter.label ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.label)}
              >
                <i className={`bi ${filter.icon}`}></i>
                <span className="filter-label">{filter.label}</span>
                <span className="filter-count">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid - EXACT SAME STRUCTURE as job grid */}
        <div className="testimonials-grid">
          {filteredTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Color Bar - EXACT SAME as job card */}
              <div 
                className="testimonial-card-bar"
                style={{ background: `linear-gradient(90deg, ${testimonial.color}, #4299e1)` }}
              ></div>
              
              <div className="testimonial-card-content">
                {/* Type Badge - Similar to job header */}
                <div className="testimonial-card-header">
                  <div 
                    className="testimonial-icon"
                    style={{ 
                      background: `linear-gradient(135deg, ${testimonial.color}, #2c5282)`,
                      color: 'white'
                    }}
                  >
                    <i className={`bi ${testimonial.type === 'Företag' ? 'bi-building' : 'bi-person'}`}></i>
                  </div>
                  <div>
                    <h3 className="testimonial-title">{testimonial.name}</h3>
                    <div className="testimonial-type">
                      <i className={`bi ${testimonial.type === 'Företag' ? 'bi-building' : 'bi-person'}`}></i>
                      <span>{testimonial.type}</span>
                    </div>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="rating-section">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`bi ${i < testimonial.rating ? 'bi-star-fill' : 'bi-star'}`}
                        style={{ 
                          color: i < testimonial.rating ? '#d69e2e' : '#cbd5e1'
                        }}
                      ></i>
                    ))}
                  </div>
                  <span className="rating-text">
                    {testimonial.rating}.0 betyg
                  </span>
                </div>

                {/* Testimonial Quote - Similar to job description */}
                <p className="testimonial-quote">
                  <i className="bi bi-quote quote-mark"></i>
                  {testimonial.text}
                </p>

                {/* Location & Date */}
                <div className="testimonial-meta">
                  <div className="meta-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{testimonial.country}</span>
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-calendar"></i>
                    <span>{formatDate(testimonial.date)}</span>
                  </div>
                </div>

                {/* Position and Company */}
                <div className="employment-types">
                  <span className="employment-type">
                    <i className="bi bi-briefcase"></i>
                    {testimonial.position}
                  </span>
                  <span className="employment-type">
                    <i className="bi bi-building"></i>
                    {testimonial.company}
                  </span>
                </div>

                {/* View Details Button - EXACT SAME as apply button */}
                <button 
                  className="view-button"
                  onClick={() => navigate('/contact', { state: { testimonialId: testimonial.id } })}
                >
                  {hoveredCard === testimonial.id ? (
                    <>
                      Kontakta oss <i className="bi bi-arrow-right"></i>
                    </>
                  ) : (
                    'Kontakta oss'
                  )}
                </button>
              </div>
              
              {/* Hover Arrow - EXACT SAME as job card */}
              {hoveredCard === testimonial.id && (
                <div className="hover-arrow">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators Section - Similar to spontaneous CTA */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Varför Välja Oss?
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Professionella tjänster med hög kvalitet och säkerhet
          </p>
        </div>

        <div className="trust-grid">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index}
              className={`trust-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="trust-icon-wrapper">
                <i className={`bi ${indicator.icon}`}></i>
              </div>
              <h3 className="trust-title">{indicator.title}</h3>
              <p className="trust-description">{indicator.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section - EXACT SAME STRUCTURE as spontaneous CTA */}
        <div className={`spontaneous-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-icon">
            <i className="bi bi-chat-heart"></i>
          </div>
          
          <h3 className="cta-title">Redo att bli vår nästa framgångsberättelse?</h3>
          
          <p className="cta-description">
            Oavsett om du är ett företag som behöver talanger eller en arbetssökande som vill hitta ditt drömjobb - vi hjälper dig att nå dina mål.
          </p>
          
          <button 
            className="cta-button"
            onClick={handleCTAClick}
          >
            <i className="bi bi-envelope"></i>
            Kontakta Oss
          </button>
          
          <p className="cta-note">
            <i className="bi bi-clock"></i>
            Vi återkommer inom 48 timmar
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rekommendationer;