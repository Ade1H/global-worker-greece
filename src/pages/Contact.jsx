import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';
import './Contact.css'; // Lägg till CSS-fil med samma tema

function Contact() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('contact');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="container">
          {/* Hero Header - Professional - SEPARAT från Tjanster */}
          <div className="contact-hero-section">
            <div className="contact-hero-content">
              <h1 className={`contact-hero-title ${isVisible ? 'visible' : ''}`}>
                Kontakta Oss
              </h1>
              <p className={`contact-hero-subtitle ${isVisible ? 'visible' : ''}`}>
                Har du frågor eller vill skicka en spontanansökan? Vi hjälper dig gärna!
              </p>
            </div>
          </div>

          {/* Contact Tabs - Clean */}
          <div className="contact-tabs">
          
          </div>

          {/* Main Content Grid */}
          <div className="contact-content-grid">
            <div className="grid-2col">
              {/* Contact Information Card */}
              <div className={`contact-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="contact-card-bar"></div>
                <div className="contact-card-content">
                  <div className="contact-card-header">
                    <div className="contact-card-icon">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <h3 className="contact-card-title">Kontaktinformation</h3>
                    </div>
                  </div>

                  <div className="contact-details">
                    {/* Address */}
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div>
                        <h4>Adress</h4>
                        <p>
                          Global Worker Grekland<br />
                          Leoforos Thisseos 330<br />
                          Kallithea 17675<br />
                          Aten, Grekland
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div>
                        <h4>Telefon</h4>
                        <a href="tel:+30 697 263 6053" className="contact-link">
                          +30 697 263 6053
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div>
                        <h4>E-post</h4>
                        <a href="mailto:Johan.karlsson@globalworker.nu" className="contact-link">
                          Johan.karlsson@globalworker.nu
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div>
                        <h4>Öppettider</h4>
                        <p>
                          <span className="hours-label">Måndag - Fredag:</span> 09:00 - 18:00<br />
                          <span className="hours-label">Lördag:</span> Stängt<br />
                          <span className="hours-label">Söndag:</span> Stängt
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="social-section">
                    <h4>Följ oss</h4>
                    <div className="social-links">
                      {[
                        { platform: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/your-profile' },
                        { platform: 'Facebook', icon: 'bi-facebook', url: 'https://www.facebook.com/profile.php?id=61584620006161' },
                        { platform: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/worker.global/' },
                        { platform: 'Twitter', icon: 'bi-twitter', url: 'https://twitter.com/your-profile' }
                      ].map((item) => (
                        <a
                          key={item.platform}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={`Följ oss på ${item.platform}`}
                        >
                          <i className={`bi ${item.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Combined Video Recorder and Request Form Container */}
              <div className={`form-video-container ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="contact-card-bar"></div>
                <div className="form-video-content">
                  {/* Request Form Section */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <div className="form-section-icon">
                        <i className="bi bi-pencil-square"></i>
                      </div>
                      <h3>Skicka Ansökan</h3>
                    </div>
                    <div className="form-wrapper">
                      <RequestForm />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="section-divider">
                    <span className="divider-text">ELLER</span>
                  </div>

                  {/* Video Recorder Section */}
                  <div className="video-section">
                    <div className="video-section-header">
                      <div className="video-section-icon">
                        <i className="bi bi-camera-video"></i>
                      </div>
                      <h3>Skicka Videoansökan</h3>
                    </div>
                    <div className="video-wrapper">
                      <VideoRecorder />
                    </div>
                  </div>
                </div>

                {/* Combined Footer Note */}
                <div className="form-video-footer">
                  <div className="footer-note">
                    <i className="bi bi-lightbulb"></i>
                    <p>
                      <strong>Tips:</strong> 
                      Både formuläret och videon hjälper oss att förstå dina behov bättre. 
                      Du kan välja att skicka båda eller enbart ett av alternativen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className={`map-container ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
            <div className="contact-card-bar"></div>
            <div className="map-card-content">
              <div className="map-card-header">
                <div className="map-card-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h3 className="map-card-title">Hitta till oss</h3>
                </div>
              </div>

              <div className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.435370376295!2d23.697847876795076!3d37.95266577192569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc6b6c1e7b4f%3A0x1b1c6d3f3f3f3f3f!2sLeoforos%20Thisseos%20330%2C%20Kallithea%2017675%2C%20Greece!5e0!3m2!1sen!2sse!4v1698765432100!5m2!1sen!2sse" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Worker Grekland Location"
                  className="map-iframe"
                ></iframe>
              </div>

              <div className="location-note">
                <i className="bi bi-geo-alt"></i>
                <p>Vi ligger centralt i Kallithea, nära Aten – lätt att nå med kollektivtrafik</p>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA - SAMA tema men separat klass */}
          <div className={`contact-cta ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
            <div className="contact-cta-icon">
              <i className="bi bi-telephone"></i>
            </div>
            
            <h3 className="contact-cta-title">Behöver du omedelbar hjälp?</h3>
            
            <p className="contact-cta-description">
              Ring oss direkt eller skicka ett meddelande – vi svarar inom 24 timmar
            </p>
            
            <div className="contact-cta-buttons">
              <a
                href="tel:+30 697 263 6053"
                className="contact-cta-button primary"
              >
                <i className="bi bi-telephone"></i>
                Ring Nu: +30 697 263 6053
              </a>
              <a
                href="mailto:Johan.karlsson@globalworker.nu"
                className="contact-cta-button secondary"
              >
                <i className="bi bi-envelope"></i>
                Skicka Email
              </a>
            </div>
            
            <p className="contact-cta-note">
              <i className="bi bi-clock"></i>
              Vi återkommer inom 48 timmar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;