import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';

function Contact() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('contact');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Same color variables as Tjanster.css
  const colors = {
    primaryNavy: '#0a1f44',
    primaryNavyLight: '#1a2f5a',
    primaryBlue: '#2c5282',
    primaryBlueLight: '#4299e1',
    accentBlue: '#3182ce',
    accentGold: '#d69e2e',
    accentGreen: '#10b981',
    accentRed: '#dc2626',
    accentPurple: '#8b5cf6',
    
    navy50: '#f0f4f8',
    navy100: '#d9e2ec',
    navy200: '#bcccdc',
    navy300: '#9fb3c8',
    navy400: '#829ab1',
    navy500: '#627d98',
    navy600: '#486581',
    navy700: '#334e68',
    navy800: '#243b53',
    navy900: '#102a43',
    
    gray50: '#f8fafc',
    gray100: '#f1f5f9',
    gray200: '#e2e8f0',
    gray300: '#cbd5e1',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1e293b',
    gray900: '#0f172a',
    
    textPrimary: '#1f2937',
    textSecondary: '#4b5563',
    textTertiary: '#6b7280',
    
    borderLight: '#e5e7eb',
    borderMedium: '#d1d5db',
    borderDark: '#9ca3af',
    
    // Background gradients like Tjanster
    bgGradient: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    bgCard: 'white',
    bgDarkCard: 'linear-gradient(135deg, #0a1f44 0%, #1a2f5a 100%)',
  };

  return (
    <div className="contact-container" style={{
      minHeight: '100vh',
      background: colors.bgGradient, // SAME as Tjanster container
      padding: '2rem 1rem',
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Header - Professional */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: colors.navy900,
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
            color: colors.navy600,
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
          borderBottom: `1px solid ${colors.borderLight}`,
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
                background: activeTab === 'contact' ? colors.primaryNavy : 'transparent',
                color: activeTab === 'contact' ? 'white' : colors.textSecondary,
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.color = colors.textPrimary;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.color = colors.textSecondary;
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
                background: activeTab === 'form' ? colors.primaryNavy : 'transparent',
                color: activeTab === 'form' ? 'white' : colors.textSecondary,
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'form') {
                  e.target.style.color = colors.textPrimary;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'form') {
                  e.target.style.color = colors.textSecondary;
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
            gap: '0',
             height: '100%'
          }}>
            {/* Contact Information Card - SAME as Tjanster cards */}
            <div style={{
              background: colors.bgCard,
              borderRadius: 'var(--radius-xl, 20px)',
              border: `2px solid ${colors.navy200}`,
              boxShadow: 'var(--shadow-lg, 0 10px 40px rgba(0, 0, 0, 0.2))',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s ease-out 0.3s',
              height: '100%'
            }}>
              <div style={{ 
                padding: '2rem',
                borderLeft: `4px solid ${colors.accentBlue}`
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
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--navy-700) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(10, 31, 68, 0.2)'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      color: 'white'
                    }}>
                      📞
                    </div>
                  </div>
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: colors.navy900 
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
                      background: colors.navy50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: colors.accentBlue }}>📍</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: colors.navy900, 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Adress
                      </h3>
                      <p style={{ 
                        color: colors.navy600, 
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
                      background: colors.navy50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: colors.accentBlue }}>📱</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: colors.navy900, 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Telefon
                      </h3>
                      <a 
                        href="tel:+30 697 263 6053" 
                        style={{ 
                          color: colors.accentBlue, 
                          fontWeight: '500',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.primaryBlueLight;
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = colors.accentBlue;
                          e.target.style.textDecoration = 'none';
                        }}
                      >
                         +30 697 263 6053
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: colors.navy50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: colors.accentBlue }}>✉️</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: colors.navy900, 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        E-post
                      </h3>
                      <a 
                        href="mailto:Johan.karlsson@globalworker.nu" 
                        style={{ 
                          color: colors.accentBlue, 
                          fontWeight: '500',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.primaryBlueLight;
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = colors.accentBlue;
                          e.target.style.textDecoration = 'none';
                        }}
                      >
                        Johan.karlsson@globalworker.nu
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '6px',
                      background: colors.navy50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <div style={{ fontSize: '0.875rem', color: colors.accentBlue }}>🕒</div>
                    </div>
                    <div>
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: colors.navy900, 
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        Öppettider
                      </h3>
                      <p style={{ 
                        color: colors.navy600,
                        fontSize: '0.875rem'
                      }}>
                        <span style={{ fontWeight: '500', color: colors.navy900 }}>Måndag - Fredag:</span> 09:00 - 18:00<br />
                        <span style={{ fontWeight: '500', color: colors.navy900 }}>Lördag:</span> Stängt<br />
                        <span style={{ fontWeight: '500', color: colors.navy900 }}>Söndag:</span> Stängt
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div style={{ 
                  marginTop: '2rem', 
                  paddingTop: '1.5rem', 
                  borderTop: `1px solid ${colors.borderLight}` 
                }}>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: colors.navy900, 
                    marginBottom: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    Följ oss
                  </h3>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
           {[
  { platform: 'LinkedIn', icon: 'bi-linkedin' },
  { platform: 'Facebook', icon: 'bi-facebook' },
  { platform: 'Instagram', icon: 'bi-instagram' },
  { platform: 'Twitter', icon: 'bi-twitter' }
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
      background: colors.gray100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.textSecondary,
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = colors.navy50;
      e.currentTarget.style.color = colors.accentBlue;
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = colors.gray100;
      e.currentTarget.style.color = colors.textSecondary;
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <i className={`bi ${item.icon}`}></i> {/* Här är ändringen */}
  </a>
))}
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Video Recorder and Request Form Container */}
            <div style={{
              background: colors.bgCard,
              borderRadius: 'var(--radius-xl, 20px)',
              border: `2px solid ${colors.navy200}`,
              boxShadow: 'var(--shadow-lg, 0 10px 40px rgba(0, 0, 0, 0.2))',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease-out 0.4s',
              height: '100%'
            }}>
              {/* Combined Container Header */}
              

              {/* Combined Content Area - Equal sized sections */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
                height: '100%'
                }}>
                {/* Request Form Section - Equal height */}
                <div style={{
                  padding: '2rem',
                  borderBottom: `1px solid ${colors.borderLight}`
                }}>
                 
                  
                  {/* RequestForm wrapper with fixed height */}
                  <div style={{
                    minHeight: '350px',
                    height: '100%',
                    position: 'relative'
                  }}>
                    <RequestForm />
                  </div>
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: `linear-gradient(to right, transparent, ${colors.borderLight}, transparent)`,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: colors.bgCard,
                    padding: '0 1rem',
                    color: colors.navy400,
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    ELLER
                  </div>
                </div>

                {/* Video Recorder Section - Equal height */}
                <div style={{
                  padding: '2rem',
                  borderTop: `1px solid ${colors.borderLight}`
                }}>
                 
                  
                  
                  {/* VideoRecorder wrapper with fixed height */}
                  <div style={{
                    minHeight: '350px',
                    height: '100%',
                    position: 'relative'
                  }}>
                    <VideoRecorder />
                  </div>
                </div>
              </div>

              {/* Combined Footer Note */}
              <div style={{
                padding: '1rem 2rem',
                background: colors.navy50,
                borderTop: `1px solid ${colors.borderLight}`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    fontSize: '1rem',
                    color: colors.accentGold
                  }}>
                    💡
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.75rem',
                      color: colors.navy600,
                      lineHeight: '1.4',
                      margin: 0
                    }}>
                      <strong style={{ color: colors.navy900 }}>Tips:</strong> 
                      Både formuläret och videon hjälper oss att förstå dina behov bättre. 
                      Du kan välja att skicka båda eller enbart ett av alternativen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={{
          background: colors.bgCard,
          borderRadius: 'var(--radius-xl, 20px)',
          border: `2px solid ${colors.navy200}`,
          boxShadow: 'var(--shadow-lg, 0 10px 40px rgba(0, 0, 0, 0.2))',
          overflow: 'hidden',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.6s'
        }}>
          <div style={{ 
            padding: '2rem',
            borderLeft: `4px solid ${colors.accentPurple}`
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
                background: colors.navy50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  fontSize: '1.25rem',
                  color: colors.accentPurple
                }}>
                  🗺️
                </div>
              </div>
              <h2 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: colors.navy900 
              }}>
                Hitta till oss
              </h2>
            </div>

            <div style={{ 
              borderRadius: '6px', 
              overflow: 'hidden', 
              border: `1px solid ${colors.borderLight}`,
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
              background: colors.gray50,
              borderRadius: '6px'
            }}>
              <p style={{ 
                color: colors.navy600, 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>
                <span style={{ fontSize: '1rem', color: colors.accentBlue }}>📍</span>
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
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
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
                        <div style={{ fontSize: '1.25rem', color: item.color }}>{item.icon}</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ 
                          fontWeight: '600', 
                          color: colors.navy900, 
                          marginBottom: '0.25rem',
                          fontSize: '0.875rem'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ 
                          color: colors.navy600,
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

        {/* Quick Contact CTA - SAME as Tjanster spontaneous-cta */}
        <div style={{
          background: colors.bgDarkCard,
          borderRadius: 'var(--radius-xl, 20px)',
          padding: '3rem',
          textAlign: 'center',
          color: 'white',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.7s',
          position: 'relative',
          overflow: 'hidden',
          border: `1px solid ${colors.navy700}`
        }}>
          {/* Gradient top border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(to right, ${colors.accentBlue}, ${colors.accentGold})`
          }}></div>
          
          {/* Radial gradient overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(66, 153, 225, 0.1) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}></div>

          <div className="cta-icon" style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${colors.accentBlue}, ${colors.primaryBlueLight})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'white',
            fontSize: '1.5rem',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 4px 20px rgba(49, 130, 206, 0.3)'
          }}>
            <i className="bi bi-telephone"></i>
          </div>
          
          <h3 className="cta-title" style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Behöver du omedelbar hjälp?
          </h3>
          
          <p className="cta-description" style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            position: 'relative',
            zIndex: 1
          }}>
            Ring oss direkt eller skicka ett meddelande – vi svarar inom 24 timmar
          </p>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <a
              href="tel:+30 697 263 6053"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2.5rem',
                background: `linear-gradient(135deg, ${colors.accentBlue}, ${colors.primaryBlueLight})`,
                color: 'white',
                fontWeight: '700',
                borderRadius: 'var(--radius-md, 12px)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                gap: '0.5rem',
                boxShadow: '0 4px 20px rgba(49, 130, 206, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primaryBlueLight}, ${colors.accentBlue})`;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(49, 130, 206, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.accentBlue}, ${colors.primaryBlueLight})`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(49, 130, 206, 0.3)';
              }}
            >
              <span style={{ fontSize: '1rem' }}>📞</span>
              Ring Nu: +30 697 263 6053
            </a>
            <a
              href="mailto:Johan.karlsson@globalworker.nu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: '700',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 'var(--radius-md, 12px)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '1rem' }}>✉️</span>
              Skicka Email
            </a>
          </div>
          
          <p className="cta-note" style={{
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            <i className="bi bi-clock" style={{ color: colors.accentGold }}></i>
            Vi återkommer inom 48 timmar
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        /* Responsive Design */
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
        
        @media (max-width: 768px) {
          .contact-container {
            padding: 1.5rem 1rem;
          }
          
          .hero-title {
            font-size: 2.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .hero-title,
          .hero-subtitle,
          .contact-card,
          .form-card,
          .video-card,
          .map-card,
          .cta-card {
            opacity: 1;
            transform: none;
          }
        }
        
        /* Focus states */
        button:focus,
        a:focus {
          outline: 2px solid ${colors.accentBlue};
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default Contact;