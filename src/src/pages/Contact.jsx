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
        {/* Hero Header - Professional */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
            lineHeight: '1.2'
          }}>
            Kontakta Oss
          </h1>
          <p style={{
            fontSize: '1.125rem',
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

        {/* Contact Tabs - Clean */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2.5rem',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            padding: '0 1rem'
          }}>
            <button
              onClick={() => setActiveTab('contact')}
              style={{
                padding: '0.875rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'contact' ? '#1e293b' : 'transparent',
                color: activeTab === 'contact' ? 'white' : '#4b5563',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.color = '#1f2937';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.color = '#4b5563';
                }
              }}
            >
              Kontaktinformation
            </button>
            <button
              onClick={() => setActiveTab('form')}
              style={{
                padding: '0.875rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'form' ? '#1e293b' : 'transparent',
                color: activeTab === 'form' ? 'white' : '#4b5563',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'form') {
                  e.target.style.color = '#1f2937';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'form') {
                  e.target.style.color = '#4b5563';
                }
              }}
            >
              Skicka Ansökan
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Contact Information Card */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s ease-out 0.3s',
              height: '100%'
            }}>
              <div style={{ 
                padding: '2rem',
                borderLeft: '4px solid #3b82f6'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '8px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      color: '#3b82f6'
                    }}>
                      📞
                    </div>
                  </div>
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#1f2937' 
                  }}>
                    Kontaktinformation
                  </h2>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#3b82f6' }}>📍</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Adress
                      </h3>
                      <p style={{ 
                        color: '#6b7280', 
                        lineHeight: '1.5',
                        fontSize: '0.875rem'
                      }}>
                        Global Worker Grekland<br />
                        Leoforos Thisseos 330<br />
                        Kallithea 17675<br />
                        Aten, Grekland
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#3b82f6' }}>📱</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Telefon
                      </h3>
                      <a 
                        href="tel:+302101234567" 
                        style={{ 
                          color: '#3b82f6', 
                          fontWeight: '500',
                          fontSize: '0.875rem',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = 'none';
                        }}
                      >
                        +30 210 123 4567
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#3b82f6' }}>✉️</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        E-post
                      </h3>
                      <a 
                        href="mailto:info@globalworker.se" 
                        style={{ 
                          color: '#3b82f6', 
                          fontWeight: '500',
                          fontSize: '0.875rem',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = 'none';
                        }}
                      >
                        info@globalworker.se
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: '#3b82f6' }}>🕒</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Öppettider
                      </h3>
                      <p style={{ 
                        color: '#6b7280',
                        fontSize: '0.875rem'
                      }}>
                        <span style={{ fontWeight: '500' }}>Måndag - Fredag:</span> 09:00 - 18:00<br />
                        <span style={{ fontWeight: '500' }}>Lördag:</span> Stängt<br />
                        <span style={{ fontWeight: '500' }}>Söndag:</span> Stängt
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div style={{ 
                  marginTop: '2rem', 
                  paddingTop: '1.5rem', 
                  borderTop: '1px solid #e5e7eb' 
                }}>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    Följ oss
                  </h3>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {[
                      { platform: 'LinkedIn', icon: '🔗' },
                      { platform: 'Facebook', icon: '📘' },
                      { platform: 'Instagram', icon: '📷' },
                      { platform: 'Twitter', icon: '🐦' }
                    ].map((item) => (
                      <a
                        key={item.platform}
                        href={`https://${item.platform.toLowerCase()}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '2.25rem',
                          height: '2.25rem',
                          borderRadius: '6px',
                          background: '#f3f4f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#4b5563',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#eff6ff';
                          e.currentTarget.style.color = '#3b82f6';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f3f4f6';
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Request Form */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease-out 0.4s',
              height: '100%'
            }}>
              <div style={{
                borderLeft: '4px solid #10b981'
              }}>
                <RequestForm />
              </div>
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
            background: 'white',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '8px',
                background: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  fontSize: '1.25rem',
                  color: '#d97706'
                }}>
                  🎥
                </div>
              </div>
              <div>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Video Presentation
                </h2>
                <p style={{ 
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Skicka en videopresentation för att öka dina chanser
                </p>
              </div>
            </div>
            <VideoRecorder />
          </div>
        </div>

        {/* Map Section */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.6s'
        }}>
          <div style={{ 
            padding: '2rem',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '8px',
                background: '#f5f3ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  fontSize: '1.25rem',
                  color: '#7c3aed'
                }}>
                  🗺️
                </div>
              </div>
              <h2 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: '#1f2937' 
              }}>
                Hitta till oss
              </h2>
            </div>

            <div style={{ 
              borderRadius: '6px', 
              overflow: 'hidden', 
              border: '1px solid #e5e7eb',
              marginBottom: '1.5rem' 
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.435370376295!2d23.697847876795076!3d37.95266577192569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc6b6c1e7b4f%3A0x1b1c6d3f3f3f3f3f!2sLeoforos%20Thisseos%20330%2C%20Kallithea%2017675%2C%20Greece!5e0!3m2!1sen!2sse!4v1698765432100!5m2!1sen!2sse" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Worker Grekland Location"
              ></iframe>
            </div>

            <div style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              padding: '1rem',
              background: '#f9fafb',
              borderRadius: '6px'
            }}>
              <p style={{ 
                color: '#6b7280', 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>
                <span style={{ fontSize: '1rem' }}>📍</span>
                Vi ligger centralt i Kallithea, nära Aten – lätt att nå med kollektivtrafik
              </p>
            </div>

            {/* Transportation Grid */}
            <div>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem'
              }}>
                {[
                  { 
                    icon: '🚇', 
                    color: '#3b82f6', 
                    bg: '#eff6ff', 
                    title: 'Metro', 
                    text: '10 min gång från Kallithea Station' 
                  },
                  { 
                    icon: '🚌', 
                    color: '#10b981', 
                    bg: '#ecfdf5', 
                    title: 'Buss', 
                    text: 'Busshållplats 50m bort (linje 550)' 
                  },
                  { 
                    icon: '🅿️', 
                    color: '#8b5cf6', 
                    bg: '#f5f3ff', 
                    title: 'Parkering', 
                    text: 'Gratis gatu-parkering i området' 
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      background: item.bg,
                      borderRadius: '8px',
                      padding: '1rem',
                      borderLeft: `3px solid ${item.color}`,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '6px',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${item.color}30`
                      }}>
                        <div style={{ fontSize: '1.25rem' }}>{item.icon}</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ 
                          fontWeight: '600', 
                          color: '#1f2937', 
                          marginBottom: '0.25rem',
                          fontSize: '0.875rem'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ 
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          lineHeight: '1.4'
                        }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div style={{
          background: '#1e293b',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          color: 'white',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.7s'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              lineHeight: '1.3'
            }}>
              Behöver du omedelbar hjälp?
            </h2>
            <p style={{ 
              color: '#cbd5e1', 
              marginBottom: '2rem',
              fontSize: '0.875rem',
              lineHeight: '1.5'
            }}>
              Ring oss direkt eller skicka ett meddelande – vi svarar inom 24 timmar
            </p>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a
                href="tel:+302101234567"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.875rem 1.75rem',
                  background: 'white',
                  color: '#1e293b',
                  fontWeight: '600',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>📞</span>
                Ring Nu: +30 210 123 4567
              </a>
              <a
                href="mailto:info@globalworker.se"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.875rem 1.75rem',
                  background: 'transparent',
                  color: 'white',
                  fontWeight: '600',
                  border: '1px solid #475569',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#475569';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>✉️</span>
                Skicka Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .transport-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .cta-buttons {
            flex-direction: row !important;
            justify-content: center !important;
          }
        }
        
        @media (min-width: 640px) {
          .transport-item {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;