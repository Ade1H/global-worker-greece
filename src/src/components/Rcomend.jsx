import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rcomend.css';

function Rekommendationer() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Alla');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      color: "#3b82f6"
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
      color: "#10b981"
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
      color: "#8b5cf6"
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
      color: "#f59e0b"
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
      color: "#ef4444"
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
      color: "#ec4899"
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
      color: "#06b6d4"
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
      color: "#84cc16"
    }
  ];

  const stats = [
    { number: "98%", label: "Nöjda kunder", emoji: "😊", color: "#ef4444" },
    { number: "4.9", label: "Genomsnittligt betyg", emoji: "⭐", color: "#f59e0b", sublabel: "/5" },
    { number: "500+", label: "Recensioner", emoji: "💬", color: "#10b981" },
    { number: "95%", label: "Återkommande kunder", emoji: "🔄", color: "#3b82f6" },
    { number: "24h", label: "Snitt svarstid", emoji: "⚡", color: "#8b5cf6" },
    { number: "50+", label: "Länder", emoji: "🌍", color: "#7c2d12" }
  ];

  const filters = [
    { label: 'Alla', emoji: '📋', count: testimonials.length },
    { label: 'Företag', emoji: '🏢', count: testimonials.filter(t => t.type === 'Företag').length },
    { label: 'Arbetare', emoji: '👤', count: testimonials.filter(t => t.type === 'Arbetare').length },
    { label: 'Tech', emoji: '💻', count: testimonials.filter(t => t.category.includes('Tech')).length },
    { label: 'Sales', emoji: '📈', count: testimonials.filter(t => t.category.includes('Sales')).length },
    { label: 'Marketing', emoji: '📢', count: testimonials.filter(t => t.category.includes('Marketing')).length },
    { label: 'Internationell', emoji: '✈️', count: testimonials.filter(t => t.category.includes('Internationell')).length }
  ];

  const trustIndicators = [
    { 
      emoji: '🏆', 
      title: 'Certifierade Proffs', 
      desc: 'Alla våra rekryterare är certifierade med gedigen branscherfarenhet',
      color: '#ef4444'
    },
    { 
      emoji: '🛡️', 
      title: 'DataSkydd', 
      desc: 'Strikt GDPR-compliance för maximal integritet och säkerhet',
      color: '#10b981'
    },
    { 
      emoji: '🔒', 
      title: 'Bekräftat Förtroende', 
      desc: 'Verifierade recensioner från riktiga kunder och kandidater',
      color: '#3b82f6'
    }
  ];

  const filteredTestimonials = activeFilter === 'Alla' 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.type === activeFilter || testimonial.category.includes(activeFilter)
      );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('sv-SE', options);
  };

  return (
    <div className="rekommendationer-container">
      <div className="container">
        {/* Hero Section */}
        <div className={`rekommendationer-hero ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title gradient-text">
            Rekommendationer
          </h1>
          
          <p className="hero-subtitle">
            Läs vad våra kunder och kandidater säger om sitt samarbete med Global Worker
          </p>
        </div>

        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="section-title">Vårt Rykte i Siffror</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="stat-emoji"
                  style={{ color: stat.color }}
                >
                  {stat.emoji}
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    {stat.number}
                    {stat.sublabel && (
                      <span className="stat-sublabel">{stat.sublabel}</span>
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="filter-section">
          <h3 className="section-subtitle">Filtrera Rekommendationer</h3>
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className={`filter-tab ${activeFilter === filter.label ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.label)}
              >
                <span className="filter-emoji">{filter.emoji}</span>
                <span className="filter-label">{filter.label}</span>
                <span className="filter-count">{filter.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="testimonials-section">
          <h2 className="section-title">
            <span className="section-icon">💬</span>
            {activeFilter === 'Alla' ? 'Alla Rekommendationer' : `${activeFilter} Rekommendationer`}
            <span className="section-counter">{filteredTestimonials.length} st</span>
          </h2>
          
          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Color Bar */}
                <div 
                  className="testimonial-card-bar"
                  style={{ background: `linear-gradient(90deg, ${testimonial.color}, ${testimonial.color}dd)` }}
                ></div>
                
                <div className="testimonial-card-content">
                  {/* Type Badge */}
                  <div 
                    className="type-badge"
                    style={{ 
                      background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}dd)`
                    }}
                  >
                    <span className="type-emoji">
                      {testimonial.type === 'Företag' ? '🏢' : '👤'}
                    </span>
                    {testimonial.type}
                  </div>

                  {/* Stars Rating */}
                  <div className="rating-section">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i}
                          className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                          style={{ 
                            color: i < testimonial.rating ? testimonial.color : '#e5e7eb'
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="rating-text">
                      {testimonial.rating}.0 betyg
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="testimonial-quote">
                    <span className="quote-mark">"</span>
                    {testimonial.text}
                  </div>

                  {/* Location & Date */}
                  <div className="testimonial-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span className="meta-text">{testimonial.country}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span className="meta-text">{formatDate(testimonial.date)}</span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="author-section">
                    <div 
                      className="author-avatar"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-position">{testimonial.position}</div>
                      <div className="author-company">
                        <span className="company-icon">🏢</span>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div 
                    className="category-tag"
                    style={{ 
                      backgroundColor: `${testimonial.color}15`,
                      color: testimonial.color,
                      border: `1px solid ${testimonial.color}30`
                    }}
                  >
                    <span className="category-icon">🏷️</span>
                    {testimonial.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="trust-section">
          <h2 className="section-title">Varför Välja Oss?</h2>
          <div className="trust-grid">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className={`trust-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div 
                  className="trust-emoji"
                  style={{ 
                    backgroundColor: `${indicator.color}15`,
                    border: `2px solid ${indicator.color}30`,
                    color: indicator.color
                  }}
                >
                  {indicator.emoji}
                </div>
                <h3 className="trust-title">{indicator.title}</h3>
                <p className="trust-description">{indicator.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className={`rekommendationer-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-icon">
            <i className="bi bi-chat-heart"></i>
          </div>
          
          <h3 className="cta-title">Redo att bli vår nästa framgångsberättelse?</h3>
          
          <p className="cta-description">
            Oavsett om du är ett företag som behöver talanger eller en arbetssökande som vill hitta ditt drömjobb - vi hjälper dig att nå dina mål.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => navigate('/tjanster')}
            >
              <i className="bi bi-search me-2"></i>
              Se Lediga Tjänster
            </button>
            
            <button 
              className="cta-button secondary"
              onClick={() => navigate('/contact')}
            >
              <i className="bi bi-envelope me-2"></i>
              Kontakta Oss
            </button>
          </div>
          
          <p className="cta-note">
            <i className="bi bi-clock me-2"></i>
            Vi återkommer inom 48 timmar
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rekommendationer;