import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Resurser() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Alla');
  const [activeType, setActiveType] = useState('Alla');
  const [hoveredCard, setHoveredCard] = useState(null);

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
      color: "#2563eb"
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
      color: "#059669"
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
      color: "#dc2626"
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
      color: "#7c3aed"
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
      color: "#0891b2"
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
      color: "#ea580c"
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
      color: "#9333ea"
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
      color: "#0d9488"
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
      color: "#c2410c"
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
      color: "#475569"
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

  const handleDownload = (resource) => {
    alert(`Laddar ner: ${resource.title}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        style={{ 
          color: index < Math.floor(rating) ? '#f59e0b' : '#d1d5db', 
          marginRight: '1px',
          fontSize: '0.9rem'
        }}
      >
        ★
      </span>
    ));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getFileTypeIcon = (fileType) => {
    return fileType === 'PDF' ? '📄' : 
           fileType === 'DOCX' ? '📝' : 
           fileType === 'Webb' ? '🌐' : 
           fileType === 'XLSX' ? '📊' : 
           fileType === 'ZIP' ? '📦' : '📄';
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1400px', 
      margin: '0 auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {/* Hero Section - Professional */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        padding: '80px 40px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, rgba(30, 64, 175, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)'
        }}></div>
        
        <h1 style={{ 
          marginBottom: '16px', 
          fontSize: '3rem',
          fontWeight: '700',
          position: 'relative',
          letterSpacing: '-0.5px'
        }}>
          Karriärresurser
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          maxWidth: '600px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          position: 'relative',
          opacity: 0.9,
          fontWeight: '400'
        }}>
          Professionella guider, mallar och verktyg för att hjälpa dig nå dina karriärmål
        </p>
      </div>

      {/* Stats Grid - Clean */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {[
            { 
              number: resources.length, 
              label: 'Resurser', 
              color: '#3b82f6'
            },
            { 
              number: formatNumber(resources.reduce((acc, curr) => acc + curr.downloadCount, 0)) + '+', 
              label: 'Nerladdningar', 
              color: '#10b981'
            },
            { 
              number: '4.7/5', 
              label: 'Genomsnittligt betyg', 
              color: '#f59e0b'
            },
            { 
              number: '100%', 
              label: 'Gratis åtkomst', 
              color: '#8b5cf6'
            }
          ].map((stat, index) => (
            <div key={index}>
              <div style={{ 
                textAlign: 'center',
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = stat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  color: stat.color,
                  marginBottom: '8px',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                
                <div style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Resources - Professional */}
      {featuredResources.length > 0 && (
        <div style={{ marginBottom: '60px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            marginBottom: '32px'
          }}>
            <div style={{ 
              width: '4px', 
              height: '24px', 
              backgroundColor: '#3b82f6',
              borderRadius: '2px'
            }}></div>
            <h2 style={{ 
              color: '#1f2937', 
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Rekommenderade Resurser
            </h2>
            <span style={{
              backgroundColor: '#eff6ff',
              color: '#1d4ed8',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              Utvalda
            </span>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
            gap: '24px',
            justifyContent: 'center'
          }}>
            {featuredResources.map((resource) => (
              <div 
                key={resource.id}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Left accent border */}
                <div style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  bottom: '0',
                  width: '4px',
                  backgroundColor: resource.color,
                  transition: 'all 0.2s ease'
                }}></div>

                <div style={{ padding: '24px' }}>
                  {/* Header */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}>
                    <div>
                      <span style={{
                        backgroundColor: `${resource.color}10`,
                        color: resource.color,
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ fontSize: '0.9rem' }}>
                          {getFileTypeIcon(resource.fileType)}
                        </span>
                        {resource.type}
                      </span>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        marginTop: '8px'
                      }}>
                        {renderStars(resource.rating)}
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>
                          {resource.rating} betyg
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '12px',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    lineHeight: '1.3'
                  }}>
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    fontSize: '0.875rem',
                    marginBottom: '20px'
                  }}>
                    {resource.description}
                  </p>

                  {/* Features */}
                  <div style={{ 
                    marginBottom: '24px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px' 
                    }}>
                      {resource.features.map((feature, index) => (
                        <span 
                          key={index}
                          style={{
                            backgroundColor: '#f9fafb',
                            color: '#4b5563',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            border: '1px solid #e5e7eb'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #f3f4f6',
                    paddingTop: '16px'
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: '#9ca3af',
                        marginBottom: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>{formatNumber(resource.downloadCount)} nedladdningar</span>
                        <span>•</span>
                        <span>{resource.fileSize}</span>
                      </div>
                      <span style={{
                        backgroundColor: '#f3f4f6',
                        color: '#4b5563',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {resource.category}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => handleDownload(resource)}
                      style={{
                        background: resource.color,
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '0.9';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>↓</span>
                      Ladda Ner
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters - Professional */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          marginBottom: '24px'
        }}>
          <div style={{ 
            width: '4px', 
            height: '20px', 
            backgroundColor: '#10b981',
            borderRadius: '2px'
          }}></div>
          <h3 style={{ 
            color: '#1f2937', 
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            Filtrera Resurser
          </h3>
        </div>
        
        {/* Category Filters */}
        <div style={{ marginBottom: '24px' }}>
          <h5 style={{ 
            color: '#4b5563', 
            marginBottom: '12px',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Kategori
          </h5>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px'
          }}>
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => setActiveCategory(category.label)}
                style={{
                  backgroundColor: activeCategory === category.label ? '#3b82f6' : 'white',
                  color: activeCategory === category.label ? 'white' : '#4b5563',
                  border: `1px solid ${activeCategory === category.label ? '#3b82f6' : '#d1d5db'}`,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.15s ease',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.label) {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.label) {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#d1d5db';
                  }
                }}
              >
                {category.label}
                <span style={{
                  backgroundColor: activeCategory === category.label ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
                  color: activeCategory === category.label ? 'white' : '#6b7280',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div>
          <h5 style={{ 
            color: '#4b5563', 
            marginBottom: '12px',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Typ
          </h5>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px'
          }}>
            {resourceTypes.map((type) => (
              <button
                key={type.label}
                onClick={() => setActiveType(type.label)}
                style={{
                  backgroundColor: activeType === type.label ? '#10b981' : 'white',
                  color: activeType === type.label ? 'white' : '#4b5563',
                  border: `1px solid ${activeType === type.label ? '#10b981' : '#d1d5db'}`,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.15s ease',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (activeType !== type.label) {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeType !== type.label) {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#d1d5db';
                  }
                }}
              >
                {type.label}
                <span style={{
                  backgroundColor: activeType === type.label ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
                  color: activeType === type.label ? 'white' : '#6b7280',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Resources Grid - Professional */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '4px', 
              height: '20px', 
              backgroundColor: '#8b5cf6',
              borderRadius: '2px'
            }}></div>
            <h2 style={{ 
              color: '#1f2937', 
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Alla Resurser
            </h2>
          </div>
          <span style={{
            backgroundColor: '#f5f3ff',
            color: '#7c3aed',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            {filteredResources.length} resurser
          </span>
        </div>
        
        {filteredResources.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            justifyContent: 'center'
          }}>
            {filteredResources.map((resource) => (
              <div 
                key={resource.id}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}
                onMouseEnter={() => setHoveredCard('small-' + resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ padding: '20px' }}>
                  {/* Type and Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      backgroundColor: `${resource.color}10`,
                      color: resource.color,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {resource.type}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {renderStars(resource.rating)}
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{resource.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    lineHeight: '1.4'
                  }}>
                    {resource.title}
                  </h4>

                  {/* Description */}
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontSize: '0.875rem',
                    marginBottom: '20px'
                  }}>
                    {resource.description}
                  </p>

                  {/* Info */}
                  <div style={{ 
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.75rem',
                      color: '#9ca3af'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>↓</span>
                        {formatNumber(resource.downloadCount)}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>{getFileTypeIcon(resource.fileType)}</span>
                        {resource.fileSize}
                      </span>
                    </div>
                    <span style={{
                      backgroundColor: '#f3f4f6',
                      color: '#4b5563',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      alignSelf: 'flex-start'
                    }}>
                      {resource.category}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button 
                    onClick={() => handleDownload(resource)}
                    style={{
                      width: '100%',
                      backgroundColor: resource.color,
                      color: 'white',
                      border: 'none',
                      padding: '10px 16px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '0.9';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>↓</span>
                    Ladda Ner
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '48px 24px',
            background: 'white',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px', color: '#d1d5db' }}>🔍</div>
            <h4 style={{ 
              color: '#1f2937', 
              marginBottom: '8px',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}>
              Inga resurser hittades
            </h4>
            <p style={{ 
              color: '#6b7280', 
              maxWidth: '400px', 
              margin: '0 auto',
              fontSize: '0.875rem',
              lineHeight: '1.5'
            }}>
              Prova att ändra dina filterinställningar för att hitta fler resurser.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section - Professional */}
      <div style={{ 
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '48px 32px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2 style={{ 
          color: '#1e293b', 
          marginBottom: '16px',
          fontSize: '1.875rem',
          fontWeight: '700'
        }}>
          Behöver du personlig vägledning?
        </h2>
        <p style={{ 
          color: '#64748b', 
          marginBottom: '32px', 
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Våra karriärrådgivare kan ge dig skräddarsydd hjälp baserat på dina unika behov och mål.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          style={{
            background: '#1e293b',
            color: 'white',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0f172a';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#1e293b';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Boka Gratis Konsultation
        </button>
      </div>
    </div>
  );
}

export default Resurser;