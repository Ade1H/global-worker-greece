import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Karriar.css';

function Karriar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const careerPaths = [
    {
      title: "Sälj & Marknadsföring",
      description: "Bygg en karriär inom försäljning och marknadsföring. Perfekt för dig som är kommunikativ, resultatinriktad och gillar att arbeta med människor.",
      positions: ["Säljare B2C", "Säljare B2B", "Mötesbokare", "Marknadsföringsspecialist"],
      icon: "bi-person-badge",
      color: "#3b82f6"
    },
    {
      title: "IT & Teknik",
      description: "Utveckla din karriär inom IT-branschen. Vi erbjuder möjligheter inom tekniksupport, systemadministration och mjukvaruutveckling.",
      positions: ["IT-tekniker", "IT-support", "Systemadministratör", "Nätverkstekniker"],
      icon: "bi-laptop",
      color: "#10b981"
    },
    {
      title: "Administration & Ekonomi",
      description: "Karriärmöjligheter inom administration, ekonomi och revision. Idealisk för detaljorienterade och organiserade personer.",
      positions: ["Revisor", "Administratör", "Ekonomiassistent", "Kundservice"],
      icon: "bi-calculator",
      color: "#8b5cf6"
    },
    {
      title: "Bygg & Anläggning",
      description: "Arbete inom byggbranschen för dig som gillar praktiskt arbete och att se konkreta resultat av ditt arbete.",
      positions: ["Byggarbetare", "Snickare", "Målare", "Anläggningsarbetare"],
      icon: "bi-hammer",
      color: "#f59e0b"
    },
    {
      title: "Logistik & Lager",
      description: "Karriär inom logistik, lager och transport. Viktiga roller som håller samhället i rörelse.",
      positions: ["Lagerarbetare", "Logistikansvarig", "Transport", "Förrådsarbetare"],
      icon: "bi-truck",
      color: "#ef4444"
    },
    {
      title: "Kundservice & Support",
      description: "Arbeta direkt med kunder och hjälp dem lösa sina behov. Utveckla dina kommunikationsfärdigheter.",
      positions: ["Kundtjänst", "Kundsupport", "Servicepersonal", "Supporttekniker"],
      icon: "bi-headset",
      color: "#ec4899"
    }
  ];

  const successStories = [
    {
      name: "Maria Andersson",
      role: "Säljare B2C",
      story: "Började som mötesbokare och är nu teamledare för säljavdelningen efter 2 år.",
      time: "2 år hos oss",
      color: "#3b82f6"
    },
    {
      name: "Erik Johansson",
      role: "IT-tekniker",
      story: "Startade som IT-praktikant och har nu en fast anställning med utvecklingsmöjligheter.",
      time: "18 månader hos oss",
      color: "#10b981"
    },
    {
      name: "Sofia Nilsson",
      role: "Marknadsföring",
      story: "Från kundtjänst till marknadsföringsspecialist på 18 månader.",
      time: "3 år hos oss",
      color: "#8b5cf6"
    }
  ];

  const stats = [
    { number: '6', label: 'Karriärvägar', icon: 'bi-diagram-3', color: '#3b82f6' },
    { number: '20+', label: 'Olika roller', icon: 'bi-briefcase', color: '#10b981' },
    { number: '3', label: 'Framgångsberättelser', icon: 'bi-star', color: '#8b5cf6' },
    { number: '48h', label: 'Snabb respons', icon: 'bi-lightning', color: '#f59e0b' }
  ];

  return (
    <div className="karriar-container">
      <div className="container">
        {/* Hero Section */}
        <div className={`karriar-hero ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title gradient-text">
            Karriärmöjligheter
          </h1>
          
          <p className="hero-subtitle">
            Upptäck spännande karriärvägar och bygg din framtid med Global Worker
          </p>
          
          <button 
            className="hero-button"
            onClick={() => navigate('/tjanster')}
          >
            <i className="bi bi-search me-2"></i>
            Se Alla Lediga Tjänster
          </button>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div 
                className="stat-icon-wrapper"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Career Paths */}
        <section className="career-paths-section">
          <div className="section-header">
            <h2 className="section-title">Utforska Karriärvägar</h2>
            <p className="section-subtitle">
              Hitta din väg bland våra populära karriärspår
            </p>
          </div>

          <div className="career-grid">
            {careerPaths.map((career, index) => (
              <div 
                key={index}
                className={`career-card ${isVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--career-color': career.color 
                }}
              >
                {/* Top Color Bar */}
                <div 
                  className="career-card-bar"
                  style={{ background: `linear-gradient(90deg, ${career.color}, ${career.color}dd)` }}
                ></div>
                
                <div className="career-card-content">
                  {/* Career Header */}
                  <div className="career-card-header">
                    <div 
                      className="career-icon"
                      style={{ backgroundColor: `${career.color}15`, color: career.color }}
                    >
                      <i className={`bi ${career.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="career-title">{career.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="career-description">
                    {career.description}
                  </p>

                  {/* Positions */}
                  <div className="positions-section">
                    <div className="positions-label">
                      <i className="bi bi-briefcase me-1"></i>
                      <span>Typiska roller:</span>
                    </div>
                    
                    <div className="positions-grid">
                      {career.positions.map((position, posIndex) => (
                        <span
                          key={posIndex}
                          className="position-tag"
                          style={{ backgroundColor: `${career.color}15`, color: career.color }}
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="career-button"
                    style={{ backgroundColor: career.color }}
                    onClick={() => navigate('/tjanster')}
                  >
                    <i className="bi bi-search me-2"></i>
                    Se Lediga Jobb
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="stories-section">
          <div className="section-header">
            <h2 className="section-title">Framgångsberättelser</h2>
            <p className="section-subtitle">
              Se hur andra byggt sina karriärer med oss
            </p>
          </div>

          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className={`story-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="story-card-header" style={{ backgroundColor: `${story.color}15` }}>
                  <div className="story-avatar" style={{ backgroundColor: story.color }}>
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="story-info">
                    <h3 className="story-name">{story.name}</h3>
                    <div className="story-role" style={{ color: story.color }}>
                      <i className="bi bi-briefcase me-1"></i>
                      {story.role}
                    </div>
                  </div>
                </div>
                
                <div className="story-card-body">
                  <p className="story-quote">
                    <i className="bi bi-quote me-2" style={{ color: story.color }}></i>
                    "{story.story}"
                  </p>
                  
                  <div className="story-time" style={{ color: story.color }}>
                    <i className="bi bi-clock me-2"></i>
                    {story.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className={`karriar-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-icon">
            <i className="bi bi-rocket-takeoff"></i>
          </div>
          
          <h3 className="cta-title">Redo att starta din karriär?</h3>
          
          <p className="cta-description">
            Oavsett om du letar efter ditt första jobb eller vill byta karriärriktning - vi hjälper dig hitta rätt väg.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => navigate('/tjanster')}
            >
              <i className="bi bi-search me-2"></i>
              Se Lediga Jobb
            </button>
            
            <button 
              className="cta-button secondary"
              onClick={() => navigate('/contact')}
            >
              <i className="bi bi-send me-2"></i>
              Skicka Spontanansökan
            </button>
          </div>
          
          <p className="cta-note">
            <i className="bi bi-clock me-2" style={{ color: '#f59e0b' }}></i>
            Vi återkommer inom 48 timmar
          </p>
        </div>
      </div>
    </div>
  );
}

export default Karriar;