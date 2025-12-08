import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Team() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    {
      name: "Johan Karlsson",
      role: "VD & Grundare",
      department: "Ledning",
      bio: "10+ år inom rekrytering och arbetsmarknad med expertis inom internationell placering.",
      email: "johan.karlsson@globalworker.nu",
      phone: "+46 70 123 45 67",
      color: "#2563eb",
      initials: "JK"
    },
    {
      name: "Elena Papadopoulos",
      role: "Rekryteringschef Grekland",
      department: "Rekrytering",
      bio: "Expert på grekisk arbetsmarknad med bred erfarenhet av EU-arbetskraftsrörelser.",
      email: "elena@globalworker.nu",
      phone: "+30 210 123 4567",
      color: "#10b981",
      initials: "EP"
    },
    {
      name: "Anders Nilsson",
      role: "Senior Rekryterare",
      department: "Rekrytering",
      bio: "Specialiserad på IT- och teknikrekrytering med fokus på kvalitetsmatchning.",
      email: "anders.nilsson@globalworker.nu",
      phone: "+46 73 987 65 43",
      color: "#8b5cf6",
      initials: "AN"
    },
    {
      name: "Maria Johansson",
      role: "Kundrelationsansvarig",
      department: "Kundservice",
      bio: "Bygger långsiktiga relationer med både arbetstagare och arbetsgivare.",
      email: "maria.johansson@globalworker.nu",
      phone: "+46 72 345 67 89",
      color: "#f59e0b",
      initials: "MJ"
    },
    {
      name: "Nikolaos Katsaros",
      role: "Lokalkoordinator Aten",
      department: "Operationer",
      bio: "Ansvarig för lokal placering och integration av arbetare i Grekland.",
      email: "nikos@globalworker.nu",
      phone: "+30 697 123 4567",
      color: "#ef4444",
      initials: "NK"
    },
    {
      name: "Sofia Eriksson",
      role: "Marknadsföringschef",
      department: "Marknadsföring",
      bio: "Driver företagets varumärke och kommunikation på båda marknader.",
      email: "sofia.eriksson@globalworker.nu",
      phone: "+46 76 543 21 98",
      color: "#ec4899",
      initials: "SE"
    }
  ];

  const departments = [
    {
      name: "Rekrytering & Matchning",
      description: "Vår kärnverksamhet - att hitta rätt talang till rätt uppdrag.",
      icon: "bi-search",
      memberCount: "8 specialister",
      color: "#2563eb"
    },
    {
      name: "Kundservice & Support",
      description: "Hjälper både arbetstagare och arbetsgivare under hela processen.",
      icon: "bi-headset",
      memberCount: "5 experter",
      color: "#10b981"
    },
    {
      name: "Operationer & Logistik",
      description: "Säkerställer smidiga processer och bra arbetsvillkor.",
      icon: "bi-gear",
      memberCount: "6 koordinatorer",
      color: "#8b5cf6"
    },
    {
      name: "Marknadsföring & Kommunikation",
      description: "Bygger varumärke och driver digital närvaro.",
      icon: "bi-megaphone",
      memberCount: "3 strateger",
      color: "#f59e0b"
    }
  ];

  const teamStats = [
    { number: "15", label: "Teammedlemmar", icon: "bi-people", color: "#2563eb" },
    { number: "8", label: "Språk vi talar", icon: "bi-translate", color: "#10b981" },
    { number: "60+", label: "Kombinerade års erfarenhet", icon: "bi-award", color: "#8b5cf6" },
    { number: "24/7", label: "Tillgänglighet", icon: "bi-clock", color: "#f59e0b" }
  ];

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
            Vårt Team
          </h1>
          
          <p style={{
            fontSize: windowWidth >= 768 ? '1.25rem' : '1.1rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Möt de passionerade experter som gör varje rekrytering till en framgångsrik matchning. 
            Vårt team kombinerar lokal expertis med global reach.
          </p>
        </div>

        {/* Team Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {teamStats.map((stat, index) => (
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
                  animationDelay: `${0.2 + (index * 0.1)}s`
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

        {/* Team Members */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Möt Teamet
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Passionerade experter dedikerade till att skapa framgångsrika karriärer
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: '2rem'
          }}>
            {teamMembers.map((member, index) => (
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
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${0.6 + (index * 0.1)}s`
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Top Color Bar */}
                <div style={{
                  height: '6px',
                  background: `linear-gradient(90deg, ${member.color}, ${member.color}dd)`,
                  width: '100%'
                }}></div>
                
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    background: member.color,
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: '700',
                    transition: 'all 0.3s ease',
                    transform: hoveredMember === index ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: hoveredMember === index ? `0 12px 30px ${member.color}40` : `0 8px 25px ${member.color}40`
                  }}>
                    {member.initials}
                  </div>
                  
                  {/* Name & Role */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  
                  <div style={{
                    background: `${member.color}15`,
                    color: member.color,
                    padding: '0.375rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    {member.role}
                  </div>
                  
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    marginBottom: '1rem'
                  }}>
                    {member.department}
                  </div>
                  
                  {/* Bio */}
                  <p style={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}>
                    {member.bio}
                  </p>
                  
                  {/* Contact Info */}
                  <div style={{ 
                    background: '#f8fafc', 
                    borderRadius: '12px', 
                    padding: '1rem',
                    textAlign: 'left'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <i className="bi bi-envelope" style={{ color: member.color }}></i>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                        {member.email}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="bi bi-telephone" style={{ color: member.color }}></i>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Contact Button */}
                {hoveredMember === index && (
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    animation: 'fadeIn 0.3s ease forwards'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '3rem', 
                        height: '3rem', 
                        background: member.color, 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 1rem',
                        color: 'white',
                        fontSize: '1.25rem'
                      }}>
                        <i className="bi bi-chat-dots"></i>
                      </div>
                      <h4 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: '700', 
                        color: '#111827', 
                        marginBottom: '0.5rem' 
                      }}>
                        Kontakta {member.name.split(' ')[0]}
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                        {member.role}
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <a 
                          href={`mailto:${member.email}`}
                          style={{
                            padding: '0.5rem 1rem',
                            background: member.color,
                            color: 'white',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = `0 6px 20px ${member.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <i className="bi bi-envelope" style={{ marginRight: '0.25rem' }}></i>
                          Email
                        </a>
                        <a 
                          href={`tel:${member.phone.replace(/\s+/g, '')}`}
                          style={{
                            padding: '0.5rem 1rem',
                            background: 'transparent',
                            color: member.color,
                            border: `1px solid ${member.color}`,
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = member.color;
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = member.color;
                          }}
                        >
                          <i className="bi bi-telephone" style={{ marginRight: '0.25rem' }}></i>
                          Ring
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 768 ? '2.25rem' : '1.875rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Våra Avdelningar
            </h2>
            <p style={{
              fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Specialiserade team som arbetar tillsammans för att leverera exceptionell service
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {departments.map((dept, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  border: `2px solid ${dept.color}`,
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${1.2 + (index * 0.1)}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${dept.color}20`;
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
                  background: `${dept.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: dept.color,
                  fontSize: '1.5rem'
                }}>
                  <i className={`bi ${dept.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '0.75rem'
                }}>
                  {dept.name}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}>
                  {dept.description}
                </p>
                <div style={{
                  background: `${dept.color}15`,
                  color: dept.color,
                  padding: '0.375rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {dept.memberCount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '24px',
          padding: windowWidth >= 768 ? '3rem 2rem' : '2rem 1.5rem',
          textAlign: 'center',
          border: '1px solid #bae6fd'
        }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: '#1e3a8a',
            fontSize: '1.5rem'
          }}>
            <i className="bi bi-people"></i>
          </div>
          
          <h2 style={{ 
            fontSize: windowWidth >= 768 ? '2rem' : '1.75rem',
            fontWeight: '800', 
            color: '#111827', 
            marginBottom: '1rem'
          }}>
            Vill du bli en del av vårt team?
          </h2>
          
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '2rem',
            fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Vi letar alltid efter passionerade talanger som delar vår vision om att skapa meningsfulla karriärer.
          </p>
          
          <button 
            onClick={() => navigate('/tjanster')}
            style={{
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white',
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
              e.target.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="bi bi-search"></i>
            Se Våra Lediga Tjänster
          </button>
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;