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
      icon: "bi-person-badge"
    },
    {
      title: "IT & Teknik",
      description: "Utveckla din karriär inom IT-branschen. Vi erbjuder möjligheter inom tekniksupport, systemadministration och mjukvaruutveckling.",
      positions: ["IT-tekniker", "IT-support", "Systemadministratör", "Nätverkstekniker"],
      icon: "bi-laptop"
    },
    {
      title: "Administration & Ekonomi",
      description: "Karriärmöjligheter inom administration, ekonomi och revision. Idealisk för detaljorienterade och organiserade personer.",
      positions: ["Revisor", "Administratör", "Ekonomiassistent", "Kundservice"],
      icon: "bi-calculator"
    },
  
   
    {
      title: "Kundservice & Support",
      description: "Arbeta direkt med kunder och hjälp dem lösa sina behov. Utveckla dina kommunikationsfärdigheter.",
      positions: ["Kundtjänst", "Kundsupport", "Servicepersonal", "Supporttekniker"],
      icon: "bi-headset"
    }
  ];

  const successStories = [
    {
      name: "Maria Andersson",
      role: "Säljare B2C",
      story: "Började som mötesbokare och är nu teamledare för säljavdelningen efter 2 år.",
      time: "2 år hos oss"
    },
    {
      name: "Erik Johansson",
      role: "IT-tekniker",
      story: "Startade som IT-praktikant och har nu en fast anställning med utvecklingsmöjligheter.",
      time: "18 månader hos oss"
    },
    {
      name: "Sofia Nilsson",
      role: "Marknadsföring",
      story: "Från kundtjänst till marknadsföringsspecialist på 18 månader.",
      time: "3 år hos oss"
    }
  ];

  const stats = [
    { number: '6', label: 'Karriärvägar', icon: 'bi-diagram-3' },
    { number: '20+', label: 'Olika roller', icon: 'bi-briefcase' },
    { number: '3', label: 'Framgångsberättelser', icon: 'bi-star' },
    { number: '48h', label: 'Snabb respons', icon: 'bi-lightning' }
  ];

  return (
    <div className="karriar-container">
      <div className="container">
       
          {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Karriärmöjligheter
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
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
        </div>
       

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-wrapper">
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
                }}
              >
                {/* Top Color Bar */}
                <div className="career-card-bar"></div>
                
                <div className="career-card-content">
                  {/* Career Header */}
                  <div className="career-card-header">
                    <div className="career-icon">
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
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="career-button"
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
                <div className="story-card-header">
                  <div className="story-avatar">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="story-info">
                    <h3 className="story-name">{story.name}</h3>
                    <div className="story-role">
                      <i className="bi bi-briefcase me-1"></i>
                      {story.role}
                    </div>
                  </div>
                </div>
                
                <div className="story-card-body">
                  <p className="story-quote">
                    "{story.story}"
                  </p>
                  
                  <div className="story-time">
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
          <div className="cta-content">
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
              <i className="bi bi-clock me-2"></i>
              Vi återkommer inom 48 timmar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Karriar;