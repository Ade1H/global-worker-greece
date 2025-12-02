import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const stats = [
    { number: "10+", label: "År i branschen", icon: "bi-calendar", color: "#2563eb" },
    { number: "5,000+", label: "Placerade arbetare", icon: "bi-people", color: "#10b981" },
    { number: "200+", label: "Samarbetspartners", icon: "bi-handshake", color: "#8b5cf6" },
    { number: "95%", label: "Nöjda kunder", icon: "bi-star", color: "#f59e0b" }
  ];

  const values = [
    {
      icon: "bi-shield-check",
      title: "Pålitlighet",
      description: "Vi bygger långsiktiga relationer baserade på förtroende och transparens.",
      color: "#2563eb"
    },
    {
      icon: "bi-people",
      title: "Människor i fokus",
      description: "Varje individ är unik - vi matchar rätt person med rätt uppdrag.",
      color: "#10b981"
    },
    {
      icon: "bi-graph-up",
      title: "Kvalitet",
      description: "Vi strävar efter excellens i allt vi gör, från rekrytering till uppföljning.",
      color: "#8b5cf6"
    },
    {
      icon: "bi-globe",
      title: "Globalt nätverk",
      description: "Med kontakter över hela världen hittar vi de bästa talangerna.",
      color: "#f59e0b"
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Grundande",
      description: "Global Worker grundades med visionen att förbättra arbetsmarknaden.",
      icon: "bi-rocket-takeoff",
      color: "#2563eb"
    },
    {
      year: "2016",
      title: "Internationell expansion",
      description: "Vi expanderade vår verksamhet till Grekland och övriga Europa.",
      icon: "bi-globe-europe-africa",
      color: "#10b981"
    },
    {
      year: "2018",
      title: "Digital plattform",
      description: "Lanserade vår egen rekryteringsplattform för bättre matchning.",
      icon: "bi-laptop",
      color: "#8b5cf6"
    },
    {
      year: "2020",
      title: "5000:e placeringen",
      description: "Nådde milstolpen med 5000 framgångsrika arbetarplaceringar.",
      icon: "bi-trophy",
      color: "#f59e0b"
    },
    {
      year: "2024",
      title: "Framtidsvision",
      description: "Fortsatt expansion med fokus på hållbarhet och teknik.",
      icon: "bi-lightning-charge",
      color: "#ec4899"
    }
  ];

  const reasons = [
    {
      icon: "bi-clock-history",
      title: "Snabba Processer",
      description: "Effektiv rekrytering från ansökan till anställning",
      color: "#2563eb"
    },
    {
      icon: "bi-award",
      title: "Expertis",
      description: "10+ års erfarenhet av arbetsmarknaden",
      color: "#10b981"
    },
    {
      icon: "bi-heart",
      title: "Personligt Ansvar",
      description: "Dedikerad kontaktperson under hela processen",
      color: "#8b5cf6"
    },
    {
      icon: "bi-shield-check",
      title: "Transparens",
      description: "Öppen kommunikation och tydliga processer",
      color: "#f59e0b"
    }
  ];

  const getGridColumns = () => {
    if (windowWidth >= 1024) return 'repeat(4, 1fr)';
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
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          color: 'white',
          padding: windowWidth >= 768 ? '5rem 2rem' : '3rem 1.5rem',
          borderRadius: '24px',
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
            animation: 'floatParticles 20s linear infinite'
          }}></div>
          
          <h1 style={{
            fontSize: windowWidth >= 768 ? '3rem' : '2.25rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            position: 'relative',
            background: 'linear-gradient(to right, #ffffff, #dbeafe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Om Global Worker
          </h1>
          
          <p style={{
            fontSize: windowWidth >= 768 ? '1.25rem' : '1.1rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Sedan 2014 har vi hjälpt företag och arbetssökande att hitta varandra. 
            Vår passion är att skapa meningsfulla karriärer och bygga starka arbetsplatser.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: windowWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: '#1e3a8a',
            padding: '3rem 2rem',
            borderRadius: '20px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
            animationDelay: '0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(251, 191, 36, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              <i className="bi bi-bullseye"></i>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem' }}>
              Vårt Uppdrag
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
              Att vara den främsta partner för både arbetssökande och företag genom att 
              erbjuda skräddarsydda rekryteringslösningar som främjar tillväxt, mångfald 
              och långsiktigt framgång.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '20px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
            animationDelay: '0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(37, 99, 235, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              <i className="bi bi-eye"></i>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem' }}>
              Vår Vision
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
              En värld där varje individ har möjlighet att hitta meningsfullt arbete 
              och varje företag kan nå sin fulla potential genom rätt talanger.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Vår Verkan i Siffror
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Resultat som talar för sig själva
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {stats.map((stat, index) => (
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
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${0.4 + (index * 0.1)}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 15px 50px ${stat.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: `${stat.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: stat.color,
                  fontSize: '1.5rem'
                }}>
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Våra Värderingar
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Grundpelarna i allt vi gör
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: '1.5rem'
          }}>
            {values.map((value, index) => (
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
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${0.8 + (index * 0.1)}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${value.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  background: `${value.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: value.color,
                  fontSize: '1.5rem'
                }}>
                  <i className={`bi ${value.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Vår Resa
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Från idé till global verksamhet
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line - only show on desktop */}
            {windowWidth >= 768 && (
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '3px',
                background: 'linear-gradient(to bottom, #2563eb, #10b981, #8b5cf6, #f59e0b, #ec4899)',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}></div>
            )}

            <div style={{ display: 'grid', gap: '2rem' }}>
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: windowWidth >= 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    position: 'relative',
                    zIndex: 2,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                    animationDelay: `${1.2 + (index * 0.1)}s`
                  }}
                >
                  {/* Timeline Content */}
                  <div style={{
                    flex: 1,
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                    border: `2px solid ${item.color}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 15px 50px ${item.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '8px',
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color,
                        fontSize: '1.25rem'
                      }}>
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#111827',
                        margin: 0
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{ color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Year Marker */}
                  <div style={{
                    width: windowWidth >= 768 ? '6rem' : '5rem',
                    height: windowWidth >= 768 ? '6rem' : '5rem',
                    background: item.color,
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: windowWidth >= 768 ? '1.25rem' : '1.1rem',
                    flexShrink: 0,
                    boxShadow: `0 8px 25px ${item.color}40`
                  }}>
                    <div style={{ fontSize: windowWidth >= 768 ? '0.875rem' : '0.75rem', opacity: 0.9 }}>
                      ÅR
                    </div>
                    <div>{item.year}</div>
                  </div>

                  {/* Empty space for desktop layout */}
                  {windowWidth >= 768 && <div style={{ flex: 1 }}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{
          background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
          borderRadius: '24px',
          padding: windowWidth >= 768 ? '3rem 2rem' : '2rem 1.5rem',
          marginBottom: '4rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Varför Välja Global Worker?
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Det som gör oss till den bästa partnern
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {reasons.map((reason, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${1.8 + (index * 0.1)}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 15px 50px ${reason.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: `${reason.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: reason.color,
                  fontSize: '1.5rem'
                }}>
                  <i className={`bi ${reason.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {reason.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'white',
          border: '2px solid #dbeafe',
          borderRadius: '24px',
          padding: windowWidth >= 768 ? '3rem 2rem' : '2rem 1.5rem',
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
            fontSize: windowWidth >= 768 ? '2rem' : '1.5rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Redo att börja samarbeta?
          </h3>
          
          <p style={{
            color: '#6b7280',
            marginBottom: '2rem',
            fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Oavsett om du är en arbetssökande eller ett företag - vi hjälper dig att nå dina mål.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: windowWidth >= 640 ? 'row' : 'column',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <button 
              onClick={() => navigate('/tjanster')}
              style={{
                padding: windowWidth >= 768 ? '1rem 2.5rem' : '0.875rem 1.5rem',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: windowWidth >= 768 ? '1rem' : '0.95rem',
                transition: 'all 0.3s ease',
                flex: windowWidth >= 640 ? 1 : 'auto',
                minWidth: windowWidth >= 640 ? 'auto' : '100%'
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
                padding: windowWidth >= 768 ? '1rem 2.5rem' : '0.875rem 1.5rem',
                background: 'transparent',
                color: '#2563eb',
                border: '2px solid #2563eb',
                borderRadius: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: windowWidth >= 768 ? '1rem' : '0.95rem',
                transition: 'all 0.3s ease',
                flex: windowWidth >= 640 ? 1 : 'auto',
                minWidth: windowWidth >= 640 ? 'auto' : '100%'
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
              <i className="bi bi-chat-dots" style={{ marginRight: '0.5rem' }}></i>
              Kontakta Oss
            </button>
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

export default Om;