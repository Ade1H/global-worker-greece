import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#1a1a2e',
      color: '#e2e8f0',
      padding: '40px 0 20px',
      borderTop: '2px solid #16213e',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Container fix - Remove Bootstrap container class and use inline style */}
      <div style={{
        maxWidth: '100%', // Changed from Bootstrap container
        paddingLeft: '15px',
        paddingRight: '15px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {/* Grid layout fix */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '40px',
        }}>
          {/* Logo Section */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="/images/logo.png" 
                alt="Global Worker Logo" 
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  padding: '5px',
                  border: '2px solid #0ea5e9',
                }}
              />
              <div>
                <h3 style={{
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  margin: '0 0 3px 0',
                }}>
                  Global Worker
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  margin: 0,
                }}>
                  Grekland • Sverige
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.2)', 
              padding: '15px',
              borderRadius: '10px',
              borderLeft: '3px solid #0ea5e9',
            }}>
              <div style={{ color: '#0ea5e9', fontSize: '0.9rem', fontWeight: '600', marginBottom: '10px' }}>
                <i className="bi bi-graph-up me-2"></i>
                Snabbstatistik
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ color: '#cbd5e1' }}>Placerade arbetare:</span>
                  <span style={{ color: '#0ea5e9', fontWeight: '600' }}>156</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#cbd5e1' }}>Jobb just nu:</span>
                  <span style={{ color: '#0ea5e9', fontWeight: '600' }}>28</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ 
              color: '#0ea5e9',
              marginBottom: '15px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              <i className="bi bi-compass me-2"></i>
              Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { icon: 'house', label: 'Hem', path: '/' },
                { icon: 'briefcase', label: 'Karriär', path: '/karriar' },
                { icon: 'gear', label: 'Tjänster', path: '/tjanster' },
                { icon: 'info-circle', label: 'Om oss', path: '/about' },
                { icon: 'envelope', label: 'Kontakt', path: '/contact' },
              ].map((item) => (
                <li key={item.path} style={{ marginBottom: '8px' }}>
                  <Link 
                    to={item.path}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '6px 0',
                      transition: 'all 0.2s ease',
                      borderLeft: '2px solid transparent',
                      paddingLeft: '10px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#0ea5e9';
                      e.currentTarget.style.borderLeft = '2px solid #0ea5e9';
                      e.currentTarget.style.paddingLeft = '15px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.borderLeft = '2px solid transparent';
                      e.currentTarget.style.paddingLeft = '10px';
                    }}
                  >
                    <i className={`bi bi-${item.icon}`} style={{ width: '16px', textAlign: 'center' }}></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Länder - UPDATED WITH YOUR COUNTRIES */}
          <div>
            <h5 style={{ 
              color: '#0ea5e9',
              marginBottom: '15px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              <i className="bi bi-globe me-2"></i>
              Våra länder
            </h5>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
            }}>
              {[
                { flag: '🇬🇷', name: 'Grekland'},
                { flag: '🇪🇸', name: 'Spanien' },
                { flag: '🇸🇪', name: 'Sverige'},
                { flag: '🇹🇭', name: 'Thailand'},
                { flag: '🇧🇷', name: 'Brasilien'},
                { flag: '🇦🇪', name: 'Dubai'},
                { flag: '🇸🇨', name: 'Seychellerna' },
                { flag: '🇨🇴', name: 'Colombia' },
              ].map((country) => (
                <div 
                  key={country.name}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                    e.currentTarget.style.border = '1px solid rgba(14, 165, 233, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '1.2rem' }}>{country.flag}</span>
                      <span style={{ color: '#cbd5e1', marginLeft: '8px', fontSize: '0.85rem' }}>
                        {country.name}
                      </span>
                    </div>
                    <span style={{ 
                      color: '#0ea5e9', 
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      background: 'rgba(14, 165, 233, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}>
                      {country.jobs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ 
              color: '#0ea5e9',
              marginBottom: '15px', 
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              <i className="bi bi-headset me-2"></i>
              Kontakta oss
            </h5>
            
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.2)', 
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '15px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0ea5e9',
                }}>
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '3px' }}>
                    Huvudkontor
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.4' }}>
                    Leoforos Thisseos 330<br />
                    Kallithea 17675<br />
                    Aten, Grekland
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0ea5e9',
                }}>
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '3px' }}>
                    Telefon
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                    +30 697 263 6053
                  </div>
                </div>
              </div>
              
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0ea5e9',
                }}>
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '3px' }}>
                    Email
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                    Johan.karlsson@globalworker.nu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Fixed to remove extra space */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '20px',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
        }}>
          <div style={{ 
            color: '#94a3b8', 
            fontSize: '0.8rem',
          }}>
            © {currentYear} Global Worker. Alla rättigheter förbehållna.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0ea5e9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '15px',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              paddingLeft: '15px',
            }}>
              {['Integritet', 'Villkor', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  style={{ 
                    color: '#94a3b8', 
                    textDecoration: 'none', 
                    fontSize: '0.75rem',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0ea5e9'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive styles for mobile */}
      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 20px 0 15px !important;
          }
          
          /* Make grid stack on mobile */
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          /* Adjust logo size for mobile */
          .logo-section img {
            height: 70px !important;
            width: 70px !important;
          }
          
          /* Make countries grid responsive */
          .countries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 6px !important;
          }
          
          /* Adjust bottom bar for mobile */
          .bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 10px !important;
          }
          
          .bottom-bar > div:last-child {
            flex-direction: column !important;
            gap: 10px !important;
            border-left: none !important;
            padding-left: 0 !important;
          }
          
          /* Reduce padding on mobile */
          footer > div {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          .countries-grid {
            grid-template-columns: 1fr !important;
          }
          
          .logo-section img {
            height: 60px !important;
            width: 60px !important;
          }
          
          .stats-box {
            padding: 12px !important;
          }
          
          .contact-box {
            padding: 15px !important;
          }
        }
        
        /* Ensure no extra space below footer */
        html, body {
          margin: 0;
          padding: 0;
        }
        
        /* Fix for any remaining spacing issues */
        footer::after {
          content: '';
          display: block;
          height: 0;
          clear: both;
        }
      `}</style>
    </footer>
  );
}

export default Footer;