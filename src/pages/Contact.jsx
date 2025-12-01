import React, { useState, useEffect } from 'react';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';

function Contact() {
  const [activeTab, setActiveTab] = useState('contact');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      padding: '2rem 1rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}>
            Kontakta Oss
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s'
          }}>
            Har du frågor eller vill skicka en spontanansökan? Vi hjälper dig gärna!
          </p>
        </div>

        {/* Contact Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            background: '#f3f4f6',
            borderRadius: '12px',
            padding: '4px',
          }}>
            <button
              onClick={() => setActiveTab('contact')}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === 'contact' ? 'white' : 'transparent',
                color: activeTab === 'contact' ? '#2563eb' : '#6b7280',
                boxShadow: activeTab === 'contact' ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              Kontaktinformation
            </button>
            <button
              onClick={() => setActiveTab('form')}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === 'form' ? 'white' : 'transparent',
                color: activeTab === 'form' ? '#2563eb' : '#6b7280',
                boxShadow: activeTab === 'form' ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              Skicka Ansökan
            </button>
          </div>
        </div>

        {/* Main Content Grid - FIXED */}
        <div style={{ marginBottom: '3rem' }}>
          {/* Add responsive styles */}
          <style>{`
            @media (min-width: 1024px) {
              .contact-grid {
                grid-template-columns: 1fr 1fr !important;
              }
            }
          `}</style>
          
          <div className="contact-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Contact Information Card */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s ease-out 0.3s',
              height: '100%'
            }}>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '12px',
                    background: '#dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-chat-dots" style={{ fontSize: '1.5rem', color: '#2563eb' }}></i>
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>Kontaktinformation</h2>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      background: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <i className="bi bi-geo-alt" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Adress</h3>
                      <p style={{ color: '#6b7280', lineHeight: '1.5' }}>
                        Global Worker Grekland<br />
                        Leoforos Thisseos 330<br />
                        Kallithea 17675<br />
                        Aten, Grekland
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      background: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <i className="bi bi-telephone" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Telefon</h3>
                      <a href="tel:+302101234567" style={{ color: '#2563eb', fontWeight: '500' }}>
                        +30 210 123 4567
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      background: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <i className="bi bi-envelope" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>E-post</h3>
                      <a href="mailto:info@globalworker.se" style={{ color: '#2563eb', fontWeight: '500' }}>
                        info@globalworker.se
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      background: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <i className="bi bi-clock" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Öppettider</h3>
                      <p style={{ color: '#6b7280' }}>
                        <span style={{ fontWeight: '500' }}>Måndag - Fredag:</span> 09:00 - 18:00<br />
                        <span style={{ fontWeight: '500' }}>Lördag:</span> Stängt<br />
                        <span style={{ fontWeight: '500' }}>Söndag:</span> Stängt
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
                  <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Följ oss</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {['facebook', 'linkedin', 'instagram', 'twitter'].map((platform) => (
                      <a
                        key={platform}
                        href={`https://${platform}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '8px',
                          background: '#f3f4f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#6b7280',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#dbeafe';
                          e.currentTarget.style.color = '#2563eb';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f3f4f6';
                          e.currentTarget.style.color = '#6b7280';
                        }}
                      >
                        <i className={`bi bi-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Request Form */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease-out 0.4s',
              height: '100%'
            }}>
              <RequestForm />
            </div>
          </div>
        </div>

        {/* Video Recorder Section */}
        <div style={{
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.5s'
        }}>
          <div style={{
            background: 'linear-gradient(to right, #eff6ff, #e0e7ff)',
            borderRadius: '16px',
            border: '1px solid #dbeafe'
          }}>
            <VideoRecorder />
          </div>
        </div>

        {/* Map Section */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.6s'
        }}>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '12px',
                background: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="bi bi-geo" style={{ fontSize: '1.5rem', color: '#16a34a' }}></i>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>Hitta till oss</h2>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.435370376295!2d23.697847876795076!3d37.95266577192569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc6b6c1e7b4f%3A0x1b1c6d3f3f3f3f3f!2sLeoforos%20Thisseos%20330%2C%20Kallithea%2017675%2C%20Greece!5e0!3m2!1sen!2sse!4v1698765432100!5m2!1sen!2sse" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Worker Grekland Location"
              ></iframe>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ color: '#6b7280', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="bi bi-geo-alt" style={{ color: '#2563eb' }}></i>
                Vi ligger centralt i Kallithea, nära Aten – lätt att nå med kollektivtrafik
              </p>
            </div>

            {/* Transportation Grid */}
            <div>
              {/* Add responsive styles */}
              <style>{`
                @media (min-width: 768px) {
                  .transport-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
              `}</style>
              
              <div className="transport-grid" style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem'
              }}>
                {[
                  { icon: 'train-front', color: '#2563eb', bg: '#dbeafe', title: 'Metro', text: '10 min gång från Kallithea Station' },
                  { icon: 'bus-front', color: '#16a34a', bg: '#dcfce7', title: 'Buss', text: 'Busshållplats 50m bort (linje 550)' },
                  { icon: 'p-circle', color: '#7c3aed', bg: '#f3e8ff', title: 'Parkering', text: 'Gratis gatu-parkering i området' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      background: '#f9fafb',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = item.bg;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f9fafb';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '50%',
                      background: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className={`bi bi-${item.icon}`} style={{ fontSize: '1.5rem', color: item.color }}></i>
                    </div>
                    <h3 style={{ fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: '#6b7280' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div style={{
          background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
          borderRadius: '16px',
          padding: '2.5rem',
          textAlign: 'center',
          color: 'white',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.7s'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '1rem' }}>
              Behöver du omedelbar hjälp?
            </h2>
            <p style={{ color: '#93c5fd', marginBottom: '2rem' }}>
              Ring oss direkt eller skicka ett meddelande – vi svarar inom 24 timmar
            </p>
            <div>
              {/* Add responsive styles */}
              <style>{`
                @media (min-width: 640px) {
                  .cta-buttons {
                    flex-direction: row !important;
                  }
                }
              `}</style>
              
              <div className="cta-buttons" style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <a
                  href="tel:+302101234567"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#2563eb',
                    fontWeight: '700',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className="bi bi-telephone" style={{ marginRight: '0.75rem' }}></i>
                  Ring Nu: +30 210 123 4567
                </a>
                <a
                  href="mailto:info@globalworker.se"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem 2rem',
                    background: 'transparent',
                    color: 'white',
                    fontWeight: '700',
                    border: '2px solid white',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="bi bi-envelope" style={{ marginRight: '0.75rem' }}></i>
                  Skicka Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;