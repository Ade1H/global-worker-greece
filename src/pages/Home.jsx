import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';
import CompanyMap from '../components/CompanyMap';
import WorkerMap from '../components/WorkerMap';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)'
    }}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Video & CV Section */}
      <div style={{
        padding: '3rem 1rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 0.3s'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Kom igång på 3 enkla steg
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Registrera dig, skicka din ansökan och möt arbetsgivare – helt digitalt
            </p>
          </div>

          {/* Process Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
             { number: '01', title: 'Skapa Profil', desc: 'Registrera dig på vår plattform', icon: 'bi-person-badge' },
{ number: '02', title: 'Skicka Ansökan', desc: 'Fyll i dina uppgifter och CV', icon: 'bi-file-earmark-arrow-up' },
{ number: '03', title: 'Möt Arbetsgivare', desc: 'Starta din nya karriär', icon: 'bi-briefcase' }
            ].map((step, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${0.5 + (index * 0.1)}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.25rem'
                }}>
                  {step.number}
                </div>
                <i className={`bi ${step.icon}`} style={{
                  fontSize: '2rem',
                  color: '#2563eb',
                  marginBottom: '1rem'
                }}></i>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Video Recorder & Request Form */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Add responsive grid for larger screens */}
            {window.innerWidth >= 1024 && (
              <style>{`
                @media (min-width: 1024px) {
                  .form-grid {
                    grid-template-columns: 1fr 1fr !important;
                  }
                }
              `}</style>
            )}
            
            <div className="form-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}>
              {/* Video Recorder Card - Fixed */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                height: '100%'
              }}>
                <VideoRecorder />
              </div>

              {/* Request Form Card - Fixed */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                height: '100%'
              }}>
                <RequestForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(to bottom, #ffffff, #f8fafc)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Global täckning
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Vår närvaro sträcker sig över kontinenter – från kontor till talanger
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Add responsive grid for larger screens */}
            {window.innerWidth >= 1024 && (
              <style>{`
                @media (min-width: 1024px) {
                  .maps-grid {
                    grid-template-columns: 1fr 1fr !important;
                  }
                }
              `}</style>
            )}
            
            <div className="maps-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}>
              {/* Company Map */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  padding: '1.5rem',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-building" style={{ fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                        Företag i 8 länder
                      </h3>
                      <p style={{ margin: '0.25rem 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
                        Global Worker kontor världen över
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ height: '300px' }}>
                  <CompanyMap />
                </div>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#2563eb'
                      }}></div>
                      <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>
                        Aktiva kontor
                      </span>
                    </div>
                    <span style={{
                      background: '#dbeafe',
                      color: '#1d4ed8',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      8 länder
                    </span>
                  </div>
                </div>
              </div>

              {/* Worker Map */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #059669, #047857)',
                  padding: '1.5rem',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-people" style={{ fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                        Arbetare världen över
                      </h3>
                      <p style={{ margin: '0.25rem 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
                        Talangfulla arbetare redo för nya uppdrag
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ height: '300px' }}>
                  <WorkerMap />
                </div>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#059669'
                      }}></div>
                      <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>
                        Aktiva arbetare
                      </span>
                    </div>
                    <span style={{
                      background: '#d1fae5',
                      color: '#065f46',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      500+ aktiva
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            padding: '2rem',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb'
          }}>
            {[
              { number: '8+', label: 'Länder', icon: 'bi-globe', color: '#2563eb' },
              { number: '500+', label: 'Arbetare', icon: 'bi-people', color: '#059669' },
              { number: '150+', label: 'Placeringar', icon: 'bi-briefcase', color: '#f59e0b' },
              { number: '98%', label: 'Nöjda kunder', icon: 'bi-star', color: '#ef4444' }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <i className={`bi ${stat.icon}`} style={{ fontSize: '1.5rem', color: stat.color }}></i>
                  <span style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#111827'
                  }}>
                    {stat.number}
                  </span>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;