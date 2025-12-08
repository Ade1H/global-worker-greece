import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tjanster.css';

function Tjanster() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const jobPositions = [
    {
      title: "Säljare B2C",
      description: "Bygg karriär inom försäljning direkt till konsumenter. Utveckla kommunikationsförmåga och förstå kundbehov för en framgångsrik säljkarriär.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-person-badge"
    },
    {
      title: "Säljare B2B",
      description: "Arbeta med försäljning till företag. Utveckla affärsförmåga, bygg långsiktiga kundrelationer och skapa värde genom strategisk marknadsföring.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-building"
    },
    {
      title: "Mötesbokare B2C",
      description: "Inkörsport till säljkarriär. Utveckla stark kommunikationsförmåga och lär dig förstå kundbehov för att bli attraktiv på arbetsmarknaden.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-calendar-check"
    },
    {
      title: "IT-tekniker",
      description: "Ansvar för installation, underhåll och support av IT-system. Felsökning, teknisk support och säkerhet för hårdvara och mjukvara.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-laptop"
    },
    {
      title: "Marknadsföringsspecialist",
      description: "Planera, genomför och optimera marknadsföringskampanjer. Utveckla kundrelationer och stärk företagets varumärke.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-megaphone"
    },
    {
      title: "Revisor",
      description: "Granska och säkerställ korrekthet i bokföring och ekonomiska rapporter. Analysera finansiella processer för regelefterlevnad.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-calculator"
    },
    {
      title: "Kundtjänst",
      description: "Ge utmärkt kundservice genom tydlig kommunikation och support. Säkerställ snabb hjälp och positiv kundupplevelse.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi-headset"
    }
  ];

  const stats = [
    { number: '7', label: 'Lediga tjänster', icon: 'bi-briefcase' },
    { number: '1', label: 'Stad', icon: 'bi-geo-alt' },
    { number: '3', label: 'Anställningsformer', icon: 'bi-clock' },
    { number: '48h', label: 'Snabb respons', icon: 'bi-lightning' }
  ];

  const handleSpontaneousApplication = () => {
    navigate('/contact');
  };

  return (
    <div className="tjanster-container">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Lediga Tjänster
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
              Upptäck spännande karriärmöjligheter inom olika branscher
            </p>
            <div className={`hero-search ${isVisible ? 'visible' : ''}`}>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                Sök efter tjänster i Aten, Grekland
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Aktuella Lediga Tjänster
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Hitta din nästa karriärmöjighet bland våra utvalda tjänster
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="job-grid">
          {jobPositions.map((job, index) => (
            <div 
              key={index}
              className={`job-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Color Bar */}
              <div className="job-card-bar"></div>
              
              <div className="job-card-content">
                {/* Job Header */}
                <div className="job-card-header">
                  <div className="job-icon">
                    <i className={`bi ${job.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-location">
                      <i className="bi bi-geo-alt"></i>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="job-description">
                  {job.description}
                </p>

                {/* Employment Types */}
                <div className="employment-types">
                  {job.employmentTypes.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      className="employment-type"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <button 
                  className="apply-button"
                  onClick={() => navigate('/contact', { state: { jobTitle: job.title } })}
                >
                  {hoveredCard === index ? (
                    <>
                      Ansök nu <i className="bi bi-arrow-right"></i>
                    </>
                  ) : (
                    'Ansök nu'
                  )}
                </button>
              </div>
              
              {/* Hover Arrow */}
              {hoveredCard === index && (
                <div className="hover-arrow">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Spontaneous Application CTA */}
        <div className={`spontaneous-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-icon">
            <i className="bi bi-search"></i>
          </div>
          
          <h3 className="cta-title">Inte hittat vad du söker?</h3>
          
          <p className="cta-description">
            Skicka in en spontanansökan så hör vi av oss när vi har tjänster som matchar din kompetens och ambitioner.
          </p>
          
          <button 
            className="cta-button"
            onClick={handleSpontaneousApplication}
          >
            <i className="bi bi-send"></i>
            Skicka spontanansökan
          </button>
          
          <p className="cta-note">
            <i className="bi bi-clock"></i>
            Vi återkommer inom 48 timmar
          </p>
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
      </div>
    </div>
  );
}

export default Tjanster;