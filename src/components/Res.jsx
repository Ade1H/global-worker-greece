import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Resurser() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Alla');

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
      featured: true
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
      featured: false
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
      featured: true
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
      featured: false
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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: true
    }
  ];

  const categories = ['Alla', 'Ansökan', 'Intervju', 'Lön', 'Digitalt CV', 'Internationellt', 'Utveckling', 'Nätverkning', 'Tech', 'Karriärplanering'];
  const resourceTypes = ['Alla', 'Guide', 'Mall', 'Verktyg', 'Övningar'];

  const [activeType, setActiveType] = useState('Alla');

  const filteredResources = resources.filter(resource => {
    const categoryMatch = activeCategory === 'Alla' || resource.category === activeCategory;
    const typeMatch = activeType === 'Alla' || resource.type === activeType;
    return categoryMatch && typeMatch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const handleDownload = (resource) => {
    // Simulate download - in real app, this would trigger actual download
    alert(`Laddar ner: ${resource.title}`);
    // window.location.href = resource.downloadUrl;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`bi ${index < Math.floor(rating) ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: '#ffcd00', marginRight: '1px', fontSize: '0.8rem' }}
      ></i>
    ));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #005293 0%, #00457e 100%)',
        color: 'white',
        padding: '80px 20px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Karriärresurser</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Gratis guider, mallar och verktyg för att hjälpa dig nå dina karriärmål
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                {resources.length}
              </div>
              <div style={{ color: '#666' }}>Gratis Resurser</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                {formatNumber(resources.reduce((acc, curr) => acc + curr.downloadCount, 0))}+
              </div>
              <div style={{ color: '#666' }}>Nerladdningar</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                4.7/5
              </div>
              <div style={{ color: '#666' }}>Genomsnittligt Betyg</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                100%
              </div>
              <div style={{ color: '#666' }}>Gratis Åtkomst</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#005293', marginBottom: '30px', textAlign: 'center' }}>
            Utvalda Resurser
          </h2>
          <div className="row">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="col-md-6 mb-4">
                <div style={{
                  border: '3px solid #ffcd00',
                  borderRadius: '12px',
                  padding: '25px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}>
                  {/* Featured Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: '#ffcd00',
                    color: '#005293',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    Rekommenderad
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <h3 style={{ color: '#005293', marginBottom: '15px' }}>{resource.title}</h3>
                      <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                        {resource.description}
                      </p>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                          {resource.features.map((feature, index) => (
                            <span 
                              key={index}
                              style={{
                                backgroundColor: '#f8f9fa',
                                color: '#005293',
                                padding: '4px 10px',
                                borderRadius: '12px',
                                fontSize: '0.7rem',
                                fontWeight: '500',
                                border: '1px solid #005293'
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '0.9rem', color: '#666' }}>
                        <span>
                          <i className="bi bi-download me-1"></i>
                          {formatNumber(resource.downloadCount)} nedladdningar
                        </span>
                        <span>
                          <i className="bi bi-star me-1"></i>
                          {resource.rating}
                        </span>
                        <span>
                          <i className="bi bi-filetype-pdf me-1"></i>
                          {resource.fileType} • {resource.fileSize}
                        </span>
                      </div>
                    </div>
                    
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                      <button 
                        onClick={() => handleDownload(resource)}
                        style={{
                          backgroundColor: '#005293',
                          color: 'white',
                          border: 'none',
                          padding: '12px 25px',
                          borderRadius: '8px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          width: '100%',
                          fontSize: '1rem',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#00457e';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#005293';
                        }}
                      >
                        Ladda Ner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px', textAlign: 'center' }}>
          Filtrera Resurser
        </h3>
        
        {/* Category Filters */}
        <div style={{ marginBottom: '20px' }}>
          <h5 style={{ color: '#005293', marginBottom: '15px', textAlign: 'center' }}>Kategori</h5>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  backgroundColor: activeCategory === category ? '#005293' : 'white',
                  color: activeCategory === category ? 'white' : '#005293',
                  border: '2px solid #005293',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  fontSize: '0.9rem'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div>
          <h5 style={{ color: '#005293', marginBottom: '15px', textAlign: 'center' }}>Typ</h5>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            justifyContent: 'center'
          }}>
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                style={{
                  backgroundColor: activeType === type ? '#ffcd00' : 'white',
                  color: activeType === type ? '#005293' : '#005293',
                  border: '2px solid #ffcd00',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  fontSize: '0.9rem'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Resources Grid */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#005293', marginBottom: '40px', textAlign: 'center' }}>
          Alla Resurser
        </h2>
        <div className="row">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="col-md-6 col-lg-4 mb-4">
              <div style={{
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                  <span style={{
                    backgroundColor: '#005293',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    {resource.type}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {renderStars(resource.rating)}
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>{resource.rating}</span>
                  </div>
                </div>

                <h4 style={{ 
                  color: '#005293', 
                  marginBottom: '10px',
                  fontSize: '1.1rem',
                  lineHeight: '1.4'
                }}>
                  {resource.title}
                </h4>

                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.5',
                  fontSize: '0.9rem',
                  marginBottom: '15px'
                }}>
                  {resource.description}
                </p>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '15px'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    <div>{resource.fileType} • {resource.fileSize}</div>
                    <div>{formatNumber(resource.downloadCount)} nedladdningar</div>
                  </div>
                  <button 
                    onClick={() => handleDownload(resource)}
                    style={{
                      backgroundColor: '#005293',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#00457e';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#005293';
                    }}
                  >
                    Ladda Ner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <i className="bi bi-search" style={{ fontSize: '3rem', marginBottom: '20px', color: '#005293' }}></i>
            <h4 style={{ color: '#005293', marginBottom: '10px' }}>Inga resurser hittades</h4>
            <p>Prova att ändra dina filterinställningar.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#005293', marginBottom: '20px' }}>
          Behöver du personlig vägledning?
        </h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Våra karriärrådgivare kan ge dig skräddarsydd hjälp baserat på dina unika behov och mål.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          style={{
            backgroundColor: '#005293',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          Boka Gratis Konsultation
        </button>
      </div>
    </div>
  );
}

export default Resurser;