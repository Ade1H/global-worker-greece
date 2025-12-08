import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Res.css';

function Resurser() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Alla');
  const [activeType, setActiveType] = useState('Alla');

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const resources = [
    {
      id: 1,
      title: "CV Guide: Skapa ett Vinnande CV",
      description: "Komplett guide med mallar och exempel för att skapa ett CV som fångar rekryterares uppmärksamhet.",
      type: "Guide",
      category: "Ansökan",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadCount: 1247,
      rating: 4.8,
      image: "/images/resources/cv-guide.jpg",
      downloadUrl: "/downloads/cv-guide.pdf",
      features: ["A4-mallar", "Branschspecifika exempel", "ATS-optimering", "Färgprofiler"],
      featured: true,
      color: "#2c5282"
    },
    {
      id: 2,
      title: "Personligt Brev Mallar",
      description: "Professionella mallar för personliga brev anpassade för olika branscher och erfarenhetsnivåer.",
      type: "Mall",
      category: "Ansökan",
      fileType: "DOCX",
      fileSize: "1.2 MB",
      downloadCount: 892,
      rating: 4.6,
      image: "/images/resources/cover-letter.jpg",
      downloadUrl: "/downloads/cover-letter-templates.docx",
      features: ["5 olika stilar", "Branschanpassade", "Snabbfyllnad", "Formateringsguide"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 3,
      title: "Intervju Guide: 100+ Vanliga Frågor",
      description: "Förbered dig för alla typer av intervjuer med vår omfattande guide och exempelsvar.",
      type: "Guide",
      category: "Intervju",
      fileType: "PDF",
      fileSize: "3.1 MB",
      downloadCount: 1563,
      rating: 4.9,
      image: "/images/resources/interview-guide.jpg",
      downloadUrl: "/downloads/interview-guide.pdf",
      features: ["Beteendeintervjufrågor", "Tekniska frågor", "Case-frågor", "Följdfrågor"],
      featured: true,
      color: "#2c5282"
    },
    {
      id: 4,
      title: "Löneförhandlings Kalkylator",
      description: "Interaktiv kalkylator för att beräkna rimliga löneanspråk baserat på erfarenhet, bransch och plats.",
      type: "Verktyg",
      category: "Lön",
      fileType: "Webb",
      fileSize: "-",
      downloadCount: 2341,
      rating: 4.7,
      image: "/images/resources/salary-calculator.jpg",
      downloadUrl: "/tools/salary-calculator",
      features: ["Branschdata", "Erfarenhetsnivåer", "Geografisk data", "Förmåner"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 5,
      title: "LinkedIn Profil Optimering",
      description: "Steg-för-steg guide för att skapa en LinkedIn-profil som attraherar rekryterare och headhunters.",
      type: "Guide",
      category: "Digitalt CV",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloadCount: 1789,
      rating: 4.8,
      image: "/images/resources/linkedin-guide.jpg",
      downloadUrl: "/downloads/linkedin-optimization.pdf",
      features: ["Profilkomplettering", "Nyckelord", "Rekommendationer", "Innehållsstrategi"],
      featured: true,
      color: "#2c5282"
    },
    {
      id: 6,
      title: "Relocation Guide: Sverige - Grekland",
      description: "Komplett guide för dig som överväger att flytta och arbeta i Grekland. Inklusive juridik, skatter och boende.",
      type: "Guide",
      category: "Internationellt",
      fileType: "PDF",
      fileSize: "4.2 MB",
      downloadCount: 567,
      rating: 4.9,
      image: "/images/resources/relocation-guide.jpg",
      downloadUrl: "/downloads/sweden-greece-relocation.pdf",
      features: ["Arbetstillstånd", "Skatter", "Boendemarknad", "Kulturguide"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 7,
      title: "Kompetenskartläggnings Verktyg",
      description: "Excel-baserat verktyg för att kartlägga och dokumentera dina färdigheter och kompetenser.",
      type: "Verktyg",
      category: "Utveckling",
      fileType: "XLSX",
      fileSize: "0.8 MB",
      downloadCount: 678,
      rating: 4.5,
      image: "/images/resources/skills-assessment.jpg",
      downloadUrl: "/downloads/skills-assessment.xlsx",
      features: ["Kategorisering", "Utvecklingsområden", "Framtidsplanering", "Mätbara mål"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 8,
      title: "Networking Strategi Guide",
      description: "Lär dig bygga och underhålla ett professionellt nätverk som kan öppna dörrar till nya karriärmöjligheter.",
      type: "Guide",
      category: "Nätverkning",
      fileType: "PDF",
      fileSize: "2.1 MB",
      downloadCount: 432,
      rating: 4.6,
      image: "/images/resources/networking-guide.jpg",
      downloadUrl: "/downloads/networking-strategy.pdf",
      features: ["Online-nätverkning", "Event strategier", "Uppföljning", "Relationsbyggande"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 9,
      title: "Tech Test: Programmerings Övningar",
      description: "Samling av tekniska tester och programmeringsövningar för att förbereda dig för tech-intervjuer.",
      type: "Övningar",
      category: "Tech",
      fileType: "ZIP",
      fileSize: "5.3 MB",
      downloadCount: 1890,
      rating: 4.7,
      image: "/images/resources/tech-tests.jpg",
      downloadUrl: "/downloads/tech-tests.zip",
      features: ["Algoritmer", "Datastrukturer", "Systemdesign", "Kodbedsömning"],
      featured: false,
      color: "#2c5282"
    },
    {
      id: 10,
      title: "Karriärbytes Guide",
      description: "Guide för dig som överväger ett karriärbyte. Inklusive självutvärdering och övergångsplanering.",
      type: "Guide",
      category: "Karriärplanering",
      fileType: "PDF",
      fileSize: "2.9 MB",
      downloadCount: 765,
      rating: 4.8,
      image: "/images/resources/career-change.jpg",
      downloadUrl: "/downloads/career-change-guide.pdf",
      features: ["Självutvärdering", "Överförbara färdigheter", "Utbildningsvägar", "Nätverksstrategi"],
      featured: true,
      color: "#2c5282"
    }
  ];

  const categories = [
    { label: 'Alla', count: resources.length },
    { label: 'Ansökan', count: resources.filter(r => r.category === 'Ansökan').length },
    { label: 'Intervju', count: resources.filter(r => r.category === 'Intervju').length },
    { label: 'Lön', count: resources.filter(r => r.category === 'Lön').length },
    { label: 'Digitalt CV', count: resources.filter(r => r.category === 'Digitalt CV').length },
    { label: 'Internationellt', count: resources.filter(r => r.category === 'Internationellt').length },
    { label: 'Utveckling', count: resources.filter(r => r.category === 'Utveckling').length },
    { label: 'Nätverkning', count: resources.filter(r => r.category === 'Nätverkning').length },
    { label: 'Tech', count: resources.filter(r => r.category === 'Tech').length },
    { label: 'Karriärplanering', count: resources.filter(r => r.category === 'Karriärplanering').length }
  ];

  const resourceTypes = [
    { label: 'Alla', count: resources.length },
    { label: 'Guide', count: resources.filter(r => r.type === 'Guide').length },
    { label: 'Mall', count: resources.filter(r => r.type === 'Mall').length },
    { label: 'Verktyg', count: resources.filter(r => r.type === 'Verktyg').length },
    { label: 'Övningar', count: resources.filter(r => r.type === 'Övningar').length }
  ];

  const filteredResources = resources.filter(resource => {
    const categoryMatch = activeCategory === 'Alla' || resource.category === activeCategory;
    const typeMatch = activeType === 'Alla' || resource.type === activeType;
    return categoryMatch && typeMatch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const stats = [
    { number: resources.length, label: 'Resurser', icon: 'bi-file-earmark-text' },
    { number: Math.floor(resources.reduce((acc, curr) => acc + curr.downloadCount, 0) / 1000) + 'K+', label: 'Nerladdningar', icon: 'bi-download' },
    { number: '4.7/5', label: 'Genomsnittligt betyg', icon: 'bi-star' },
    { number: '100%', label: 'Gratis åtkomst', icon: 'bi-unlock' }
  ];

  const handleDownload = (resource) => {
    alert(`Laddar ner: ${resource.title}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`bi ${index < Math.floor(rating) ? 'bi-star-fill' : 'bi-star'}`}
        style={{ 
          color: index < Math.floor(rating) ? '#d69e2e' : '#cbd5e1'
        }}
      ></i>
    ));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleSpontaneousApplication = () => {
    navigate('/contact');
  };

  return (
    <div className="resurser-container">
      <div className="container">
        {/* Hero Section - EXACT SAME STRUCTURE */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Karriärresurser
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
              Professionella guider, mallar och verktyg för att hjälpa dig nå dina karriärmål
            </p>
            <div className={`hero-search ${isVisible ? 'visible' : ''}`}>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                {resources.length} tillgängliga resurser
              </p>
            </div>
          </div>
        </div>

        {/* Section Header - EXACT SAME STRUCTURE */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Våra Resurser i Siffror
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Tillgängliga verktyg och guider för din karriärutveckling
          </p>
        </div>

        {/* Stats Bar - EXACT SAME STRUCTURE */}
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

        {/* Featured Resources Section */}
        {featuredResources.length > 0 && (
          <div className="section-header">
            <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
              Rekommenderade Resurser
            </h2>
            <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
              Våra mest populära och användbara karriärverktyg
            </p>
          </div>
        )}

        {/* Featured Resources Grid - Similar to job grid */}
        {featuredResources.length > 0 && (
          <div className="job-grid">
            {featuredResources.map((resource, index) => (
              <div 
                key={resource.id}
                className={`job-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Color Bar */}
                <div 
                  className="job-card-bar"
                  style={{ background: `linear-gradient(90deg, #2c5282, #3182ce)` }}
                ></div>
                
                <div className="job-card-content">
                  {/* Job Header */}
                  <div className="job-card-header">
                    <div 
                      className="job-icon"
                      style={{ background: `linear-gradient(135deg, #2c5282, #1a365d)` }}
                    >
                      <i className={`bi ${resource.type === 'Guide' ? 'bi-file-earmark-text' : 
                                    resource.type === 'Mall' ? 'bi-file-earmark' :
                                    resource.type === 'Verktyg' ? 'bi-tools' : 'bi-pencil'}`}></i>
                    </div>
                    <div>
                      <h3 className="job-title">{resource.title}</h3>
                      <div className="job-location">
                        <i className="bi bi-tag"></i>
                        <span>{resource.type} • {resource.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="job-description">
                    {resource.description}
                  </p>

                  {/* Features as Employment Types */}
                  <div className="employment-types">
                    {resource.features.slice(0, 3).map((feature, typeIndex) => (
                      <span 
                        key={typeIndex}
                        className="employment-type"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Download Button */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {renderStars(resource.rating)}
                        <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                          {resource.rating}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                        ↓ {formatNumber(resource.downloadCount)}
                      </span>
                    </div>
                    
                    {/* Download Button */}
                    <button 
                      className="apply-button"
                      onClick={() => handleDownload(resource)}
                    >
                      {hoveredCard === resource.id ? (
                        <>
                          Ladda ner <i className="bi bi-arrow-down"></i>
                        </>
                      ) : (
                        'Ladda ner'
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Hover Arrow */}
                {hoveredCard === resource.id && (
                  <div className="hover-arrow">
                    <i className="bi bi-arrow-down-circle"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Filter Section - Similar to job grid header */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Filtrera Resurser
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            Hitta specifika resurser baserat på kategori och typ
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-section">
          <h3 className="section-subtitle">Kategori</h3>
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.label}
                className={`filter-tab ${activeCategory === category.label ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.label)}
              >
                <span className="filter-label">{category.label}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div className="filter-section">
          <h3 className="section-subtitle">Typ</h3>
          <div className="filter-tabs">
            {resourceTypes.map((type) => (
              <button
                key={type.label}
                className={`filter-tab ${activeType === type.label ? 'active' : ''}`}
                onClick={() => setActiveType(type.label)}
              >
                <span className="filter-label">{type.label}</span>
                <span className="filter-count">{type.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All Resources Section */}
        <div className="section-header">
          <h2 className={`section-title gradient-text ${isVisible ? 'visible' : ''}`}>
            Alla Resurser
          </h2>
          <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
            {filteredResources.length} tillgängliga resurser
          </p>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="job-grid">
            {filteredResources.map((resource, index) => (
              <div 
                key={resource.id}
                className={`job-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Color Bar */}
                <div 
                  className="job-card-bar"
                  style={{ background: `linear-gradient(90deg, #2c5282, #3182ce)` }}
                ></div>
                
                <div className="job-card-content">
                  {/* Resource Header */}
                  <div className="job-card-header">
                    <div 
                      className="job-icon"
                      style={{ background: `linear-gradient(135deg, #2c5282, #1a365d)` }}
                    >
                      <i className={`bi ${resource.type === 'Guide' ? 'bi-file-earmark-text' : 
                                    resource.type === 'Mall' ? 'bi-file-earmark' :
                                    resource.type === 'Verktyg' ? 'bi-tools' : 'bi-pencil'}`}></i>
                    </div>
                    <div>
                      <h3 className="job-title">{resource.title}</h3>
                      <div className="job-location">
                        <i className="bi bi-tag"></i>
                        <span>{resource.type} • {resource.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="job-description">
                    {resource.description}
                  </p>

                  {/* Features */}
                  <div className="employment-types">
                    {resource.features.slice(0, 2).map((feature, typeIndex) => (
                      <span 
                        key={typeIndex}
                        className="employment-type"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Download Button */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {renderStars(resource.rating)}
                        <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                          {resource.rating}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                        {formatNumber(resource.downloadCount)} nedladdningar
                      </span>
                    </div>
                    
                    {/* Download Button */}
                    <button 
                      className="apply-button"
                      onClick={() => handleDownload(resource)}
                    >
                      {hoveredCard === resource.id ? (
                        <>
                          Ladda ner <i className="bi bi-arrow-down"></i>
                        </>
                      ) : (
                        'Ladda ner'
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Hover Arrow */}
                {hoveredCard === resource.id && (
                  <div className="hover-arrow">
                    <i className="bi bi-arrow-down-circle"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="spontaneous-cta">
            <div className="cta-icon">
              <i className="bi bi-search"></i>
            </div>
            
            <h3 className="cta-title">Inga resurser hittades</h3>
            
            <p className="cta-description">
              Prova att ändra dina filterinställningar för att hitta fler resurser.
            </p>
          </div>
        )}

        {/* CTA Section - EXACT SAME STRUCTURE */}
        <div className={`spontaneous-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-icon">
            <i className="bi bi-chat-dots"></i>
          </div>
          
          <h3 className="cta-title">Behöver du personlig vägledning?</h3>
          
          <p className="cta-description">
            Våra karriärrådgivare kan ge dig skräddarsydd hjälp baserat på dina unika behov och mål.
          </p>
          
          <button 
            className="cta-button"
            onClick={handleSpontaneousApplication}
          >
            <i className="bi bi-calendar-check"></i>
            Boka Gratis Konsultation
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

export default Resurser;