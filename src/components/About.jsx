import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function Om() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
/* 
  const stats = [
    { number: "10+", label: "År i branschen", icon: "bi-calendar" },
    { number: "5,000+", label: "Placerade arbetare", icon: "bi-people" },
    { number: "200+", label: "Samarbetspartners", icon: "bi-handshake" },
    { number: "95%", label: "Nöjda kunder", icon: "bi-star" }
  ]; */

  const values = [
    {
      icon: "bi-shield-check",
      title: "Pålitlighet",
      description: "Vi bygger långsiktiga relationer baserade på förtroende och transparens."
    },
    {
      icon: "bi-people",
      title: "Människor i fokus",
      description: "Varje individ är unik - vi matchar rätt person med rätt uppdrag."
    },
    {
      icon: "bi-graph-up",
      title: "Kvalitet",
      description: "Vi strävar efter excellens i allt vi gör, från rekrytering till uppföljning."
    },
    {
      icon: "bi-globe",
      title: "Globalt nätverk",
      description: "Med kontakter över hela världen hittar vi de bästa talangerna."
    }
  ];

  const reasons = [
    {
      icon: "bi-clock-history",
      title: "Snabba Processer",
      description: "Effektiv rekrytering från ansökan till anställning"
    },
    {
      icon: "bi-award",
      title: "Expertis",
      description: "10+ års erfarenhet av arbetsmarknaden"
    },
    {
      icon: "bi-heart",
      title: "Personellt Ansvar",
      description: "Dedikerad kontaktperson under hela processen"
    },
    {
      icon: "bi-shield-check",
      title: "Transparens",
      description: "Öppen kommunikation och tydliga processer"
    }
  ];

  const getGridColumns = () => {
    if (windowWidth >= 1024) return 'repeat(4, 1fr)';
    if (windowWidth >= 768) return 'repeat(2, 1fr)';
    return '1fr';
  };

  return (
    <div className="om-container">
      <div className="om-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Om Global Worker
            </h1>
            <p 
              className={`hero-subtitle ${isVisible ? 'visible' : ''}`}
              style={{ color: '#b8c4d4ff' }}  /* var(--gray-700) */
            >
              Sedan 2014 har vi hjälpt företag och arbetssökande att hitta varandra. 
              Vår passion är att skapa meningsfulla karriärer och bygga starka arbetsplatser.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision-grid">
          <div 
            className={`mission-card ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="card-icon-wrapper">
              <i className="bi bi-bullseye"></i>
            </div>
            <h3 className="card-title">
              Vårt Uppdrag
            </h3>
            <p 
              className="card-description"
              style={{ color: '#334155' }}  /* var(--gray-700) */
            >
              Att vara den främsta partner för både arbetssökande och företag genom att 
              erbjuda skräddarsydda rekryteringslösningar som främjar tillväxt, mångfald 
              och långsiktigt framgång.
            </p>
          </div>

          <div 
            className={`vision-card ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="card-icon-wrapper">
              <i className="bi bi-eye"></i>
            </div>
            <h3 className="card-title">
              Vår Vision
            </h3>
            <p 
              className="card-description"
              style={{ color: '#334155' }}  /* var(--gray-700) */
            >
              En värld där varje individ har möjlighet att hitta meningsfullt arbete 
              och varje företag kan nå sin fulla potential genom rätt talanger.
            </p>
          </div>
        </div>

       
      
        {/* Values Section */}
        <div className="values-section">
          <div className="section-header">
            <h2 className="section-title">
              Våra Värderingar
            </h2>
            <p 
              className="section-subtitle"
              style={{ color: '#334155' }}  /* var(--gray-700) */
            >
              Grundpelarna i allt vi gör
            </p>
          </div>

          <div className="values-grid" style={{ gridTemplateColumns: getGridColumns() }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className={`value-card ${isVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${0.8 + (index * 0.1)}s`
                }}
              >
                <div className="value-icon-wrapper">
                  <i className={`bi ${value.icon}`}></i>
                </div>
                <h3 className="value-title">
                  {value.title}
                </h3>
                <p 
                  className="value-description"
                  style={{ color: '#334155' }}  /* var(--gray-700) */
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="reasons-section">
          <div className="section-header">
            <h2 className="section-title">
              Varför Välja Global Worker?
            </h2>
            <p 
              className="section-subtitle"
              style={{ color: '#334155' }}  /* var(--gray-700) */
            >
              Det som gör oss till den bästa partnern
            </p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`reason-card ${isVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${1.8 + (index * 0.1)}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="reason-icon-wrapper">
                  <i className={`bi ${reason.icon}`}></i>
                </div>
                <h3 className="reason-title">
                  {reason.title}
                </h3>
                <p 
                  className="reason-description"
                  style={{ color: '#334155' }}  /* var(--gray-700) */
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3 className="cta-title">
            Redo att börja samarbeta?
          </h3>
          
          <p 
            className="cta-description"
            style={{ color: '#334155' }}  /* var(--gray-700) */
          >
            Oavsett om du är en arbetssökande eller ett företag - vi hjälper dig att nå dina mål.
          </p>
          
          <div 
            className="cta-buttons"
            style={{ flexDirection: windowWidth >= 640 ? 'row' : 'column' }}
          >
            <button 
              onClick={() => navigate('/tjanster')}
              className="cta-button primary"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="bi bi-search"></i>
              Se Lediga Jobb
            </button>
            
            <button 
              onClick={() => navigate('/contact')}
              className="cta-button secondary"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="bi bi-chat-dots"></i>
              Kontakta Oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Om;