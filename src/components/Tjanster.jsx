import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Tjanster() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
      icon: "bi bi-person-badge",
      color: "#2563eb"
    },
    {
      title: "Säljare B2B",
      description: "Arbeta med försäljning till företag. Utveckla affärsförmåga, bygg långsiktiga kundrelationer och skapa värde genom strategisk marknadsföring.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-building",
      color: "#10b981"
    },
    {
      title: "Mötesbokare B2C",
      description: "Inkörsport till säljkarriär. Utveckla stark kommunikationsförmåga och lär dig förstå kundbehov för att bli attraktiv på arbetsmarknaden.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-calendar-check",
      color: "#8b5cf6"
    },
    {
      title: "IT-tekniker",
      description: "Ansvar för installation, underhåll och support av IT-system. Felsökning, teknisk support och säkerhet för hårdvara och mjukvara.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-laptop",
      color: "#f59e0b"
    },
    {
      title: "Marknadsföringsspecialist",
      description: "Planera, genomför och optimera marknadsföringskampanjer. Utveckla kundrelationer och stärk företagets varumärke.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-megaphone",
      color: "#ef4444"
    },
    {
      title: "Revisor",
      description: "Granska och säkerställ korrekthet i bokföring och ekonomiska rapporter. Analysera finansiella processer för regelefterlevnad.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-calculator",
      color: "#ec4899"
    },
    {
      title: "Kundtjänst",
      description: "Ge utmärkt kundservice genom tydlig kommunikation och support. Säkerställ snabb hjälp och positiv kundupplevelse.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projekt"],
      icon: "bi bi-headset",
      color: "#06b6d4"
    }
  ];

  const handleSpontaneousApplication = () => {
    navigate('/contact');
  };

  const getGridColumns = () => {
    if (windowWidth >= 1024) return 'repeat(3, 1fr)';
    if (windowWidth >= 768) return 'repeat(2, 1fr)';
    return '1fr';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: windowWidth >= 768 ? '2.5rem' : '2rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
            background: 'linear-gradient(to right, #005293, #0077c8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Lediga Tjänster
          </h1>
          <p style={{
            fontSize: windowWidth >= 768 ? '1.25rem' : '1.1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s'
          }}>
            Upptäck spännande karriärmöjligheter inom olika branscher
          </p>
        </div>

        {/* Job Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: getGridColumns(),
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {jobPositions.map((job, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                position: 'relative'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Color Bar */}
              <div style={{
                height: '6px',
                background: `linear-gradient(90deg, ${job.color}, ${job.color}dd)`,
                width: '100%'
              }}></div>
              
              <div style={{ padding: '1.5rem' }}>
                {/* Job Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    background: `${job.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: job.color,
                    fontSize: '1.25rem'
                  }}>
                    <i className={job.icon}></i>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#111827',
                      margin: '0 0 0.25rem 0',
                      lineHeight: '1.3'
                    }}>
                      {job.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="bi bi-geo-alt" style={{ fontSize: '0.875rem', color: '#6b7280' }}></i>
                      <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  display: '-webkit-box',
                  WebkitLineClamp: '4',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {job.description}
                </p>

                {/* Employment Types */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {job.employmentTypes.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      style={{
                        backgroundColor: `${job.color}15`,
                        color: job.color,
                        padding: '0.375rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <button 
                  style={{
                    backgroundColor: job.color,
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 8px 20px ${job.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
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
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: job.color,
                  animation: 'slideInRight 0.3s ease forwards',
                  opacity: 0
                }}>
                  <i className="bi bi-arrow-right-circle" style={{ fontSize: '1.25rem' }}></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Spontaneous Application CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '20px',
          padding: '2.5rem',
          textAlign: 'center',
          border: '1px solid #bae6fd',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.8s',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'white',
            fontSize: '1.5rem'
          }}>
            <i className="bi bi-search"></i>
          </div>
          
          <h3 style={{ 
            fontSize: windowWidth >= 768 ? '1.75rem' : '1.5rem',
            fontWeight: '700', 
            color: '#111827', 
            marginBottom: '1rem'
          }}>
            Inte hittat vad du söker?
          </h3>
          
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '2rem',
            fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Skicka in en spontanansökan så hör vi av oss när vi har tjänster som matchar din kompetens och ambitioner.
          </p>
          
          <button 
            onClick={handleSpontaneousApplication}
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#1e3a8a',
              border: 'none',
              padding: windowWidth >= 768 ? '1rem 2.5rem' : '0.875rem 2rem',
              borderRadius: '12px',
              fontSize: windowWidth >= 768 ? '1rem' : '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 30px rgba(251, 191, 36, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="bi bi-send"></i>
            Skicka spontanansökan
          </button>
          
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <i className="bi bi-clock" style={{ color: '#f59e0b' }}></i>
            Vi återkommer inom 48 timmar
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth >= 640 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
          gap: '1.5rem',
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb'
        }}>
          {[
            { number: '7', label: 'Lediga tjänster', icon: 'bi-briefcase', color: '#2563eb' },
            { number: '1', label: 'Stad', icon: 'bi-geo-alt', color: '#10b981' },
            { number: '3', label: 'Anställningsformer', icon: 'bi-clock', color: '#8b5cf6' },
            { number: '48h', label: 'Snabb respons', icon: 'bi-lightning', color: '#f59e0b' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '12px',
                background: `${stat.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem',
                color: stat.color,
                fontSize: '1.25rem'
              }}>
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '0.25rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Tjanster;