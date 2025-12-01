import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Karriar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const careerPaths = [
    {
      title: "Sälj & Marknadsföring",
      description: "Bygg en karriär inom försäljning och marknadsföring. Perfekt för dig som är kommunikativ, resultatinriktad och gillar att arbeta med människor.",
      positions: ["Säljare B2C", "Säljare B2B", "Mötesbokare", "Marknadsföringsspecialist"],
      icon: "bi bi-megaphone",
      color: "#2563eb",
      gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)"
    },
    {
      title: "IT & Teknik",
      description: "Utveckla din karriär inom IT-branschen. Vi erbjuder möjligheter inom tekniksupport, systemadministration och mjukvaruutveckling.",
      positions: ["IT-tekniker", "IT-support", "Systemadministratör", "Nätverkstekniker"],
      icon: "bi bi-laptop",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      title: "Administration & Ekonomi",
      description: "Karriärmöjligheter inom administration, ekonomi och revision. Idealisk för detaljorienterade och organiserade personer.",
      positions: ["Revisor", "Administratör", "Ekonomiassistent", "Kundservice"],
      icon: "bi bi-calculator",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    {
      title: "Bygg & Anläggning",
      description: "Arbete inom byggbranschen för dig som gillar praktiskt arbete och att se konkreta resultat av ditt arbete.",
      positions: ["Byggarbetare", "Snickare", "Målare", "Anläggningsarbetare"],
      icon: "bi bi-hammer",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    {
      title: "Logistik & Lager",
      description: "Karriär inom logistik, lager och transport. Viktiga roller som håller samhället i rörelse.",
      positions: ["Lagerarbetare", "Logistikansvarig", "Transport", "Förrådsarbetare"],
      icon: "bi bi-truck",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    {
      title: "Kundservice & Support",
      description: "Arbeta direkt med kunder och hjälp dem lösa sina behov. Utveckla dina kommunikationsfärdigheter.",
      positions: ["Kundtjänst", "Kundsupport", "Servicepersonal", "Supporttekniker"],
      icon: "bi bi-headset",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #db2777)"
    }
  ];

  const successStories = [
    {
      name: "Maria Andersson",
      role: "Säljare B2C",
      story: "Började som mötesbokare och är nu teamledare för säljavdelningen efter 2 år.",
      time: "2 år hos oss",
      color: "#2563eb"
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

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          color: 'white',
          padding: '4rem 2rem',
          borderRadius: '24px',
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '200%',
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
            animation: 'floatParticles 20s linear infinite'
          }}></div>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1rem',
            position: 'relative',
            background: 'linear-gradient(to right, #ffffff, #dbeafe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Karriärmöjligheter
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Upptäck spännande karriärvägar och bygg din framtid med Global Worker
          </p>
          
          <button 
            onClick={() => navigate('/tjanster')}
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#1e3a8a',
              border: 'none',
              padding: '1rem 3rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
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
            <span style={{ position: 'relative', zIndex: 2 }}>
              Se Alla Lediga Tjänster
            </span>
          </button>
        </div>

        {/* Career Paths */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Utforska Karriärvägar
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Hitta din väg bland våra populära karriärspår
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Responsive Grid */}
            {window.innerWidth >= 768 && (
              <style>{`
                @media (min-width: 768px) {
                  .career-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                  }
                }
              `}</style>
            )}
            
            {window.innerWidth >= 1024 && (
              <style>{`
                @media (min-width: 1024px) {
                  .career-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
              `}</style>
            )}
            
            <div className="career-grid" style={{ display: 'grid', gap: '2rem' }}>
              {careerPaths.map((career, index) => (
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
                    animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${career.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={{
                    background: career.gradient,
                    padding: '2rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '5rem',
                      height: '5rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50%',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white'
                    }}>
                      <i className={career.icon}></i>
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: 'white',
                      marginTop: '1rem',
                      marginBottom: 0
                    }}>
                      {career.title}
                    </h3>
                  </div>
                  
                  <div style={{ padding: '2rem' }}>
                    <p style={{
                      color: '#6b7280',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}>
                      {career.description}
                    </p>
                    
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                        color: career.color,
                        fontWeight: '600'
                      }}>
                        <i className="bi bi-briefcase"></i>
                        <span>Typiska roller:</span>
                      </div>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {career.positions.map((position, posIndex) => (
                          <span
                            key={posIndex}
                            style={{
                              background: `${career.color}15`,
                              color: career.color,
                              padding: '0.375rem 0.75rem',
                              borderRadius: '20px',
                              fontSize: '0.85rem',
                              fontWeight: '500'
                            }}
                          >
                            {position}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => navigate('/tjanster')}
                      style={{
                        width: '100%',
                        marginTop: '1.5rem',
                        padding: '0.75rem',
                        background: 'transparent',
                        color: career.color,
                        border: `2px solid ${career.color}`,
                        borderRadius: '10px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = career.color;
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = career.color;
                      }}
                    >
                      Se Lediga Jobb
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div style={{
          background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
          padding: '3rem 2rem',
          borderRadius: '24px',
          marginBottom: '4rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Framgångsberättelser
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Se hur andra byggt sina karriärer med oss
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {window.innerWidth >= 768 && (
              <style>{`
                @media (min-width: 768px) {
                  .stories-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
              `}</style>
            )}
            
            <div className="stories-grid" style={{ display: 'grid', gap: '2rem' }}>
              {successStories.map((story, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb',
                    transition: 'all 0.3s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    animationDelay: `${0.6 + (index * 0.1)}s`,
                    animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 15px 50px ${story.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    background: story.color,
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: '700',
                    boxShadow: `0 8px 25px ${story.color}40`
                  }}>
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    {story.name}
                  </h3>
                  
                  <div style={{
                    background: `${story.color}15`,
                    color: story.color,
                    padding: '0.375rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    {story.role}
                  </div>
                  
                  <p style={{
                    color: '#6b7280',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    "{story.story}"
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: story.color,
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    <i className="bi bi-clock"></i>
                    {story.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'white',
          border: '2px solid #dbeafe',
          borderRadius: '24px',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(to right, #2563eb, #10b981, #f59e0b, #8b5cf6)'
          }}></div>
          
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Redo att starta din karriär?
          </h3>
          
          <p style={{
            color: '#6b7280',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Oavsett om du letar efter ditt första jobb eller vill byta karriärriktning - vi hjälper dig hitta rätt väg.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            {window.innerWidth >= 640 && (
              <style>{`
                @media (min-width: 640px) {
                  .cta-buttons {
                    flex-direction: row !important;
                  }
                }
              `}</style>
            )}
            
            <div className="cta-buttons" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button 
                onClick={() => navigate('/tjanster')}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  flex: 1
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="bi bi-search" style={{ marginRight: '0.5rem' }}></i>
                Se Lediga Jobb
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'transparent',
                  color: '#2563eb',
                  border: '2px solid #2563eb',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  flex: 1
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563eb';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#2563eb';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="bi bi-send" style={{ marginRight: '0.5rem' }}></i>
                Skicka Spontanansökan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes floatParticles {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
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
      `}</style>
    </div>
  );
}

export default Karriar;