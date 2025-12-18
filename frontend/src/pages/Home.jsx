import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';
import CompanyMap from '../components/CompanyMap';
import WorkerMap from '../components/WorkerMap';
import './Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { number: '8+', label: 'Länder', icon: 'bi-globe', color: '#2563eb', bgColor: '#dbeafe' },
    { number: '13+', label: 'Arbetare', icon: 'bi-people', color: '#059669', bgColor: '#d1fae5' },
    { number: '8+', label: 'Placeringar', icon: 'bi-briefcase', color: '#f59e0b', bgColor: '#fef3c7' },
    { number: '98%', label: 'Nöjda arbetare', icon: 'bi-star', color: '#ef4444', bgColor: '#fee2e2' }
  ];

  return (
    <div className="home-container">
      {/* Hero Section - FIXED: Remove wrapper div that might be causing issues */}
      <HeroSection />
      
      {/* Form Section */}
      <div className="form-section">
        <div className="combined-application-container elevated-card">
       {/*    <div className="combined-header">
            <div className="combined-header-content">
              <div className="combined-header-icon">
                <i className="bi bi-send"></i>
              </div>
              <div>
                <h2 className="combined-title">Ansök Nu</h2>
                <p className="combined-subtitle">Fyll i formuläret eller skicka en video</p>
              </div>
            </div>
          </div>
           */}
          <div className="combined-body">
            {/* Request Form Section */}
            <div className="form-section-container">
          {/*     <div className="form-section-header">
                <i className="bi bi-pencil-square"></i>
                <span>Ansökningsformulär</span>
              </div> */}
              <RequestForm />
            </div>

            {/* Divider */}
            <div className="combined-divider">
              <span className="combined-divider-text">ELLER</span>
            </div>

            {/* Video Recorder Section - Currently commented out */}
            {/* <div className="video-section-container">
              <div className="video-section-header">
                <i className="bi bi-camera-video"></i>
                <span>Video Presentation</span>
              </div>
              <div className="video-description">
                Spela in en kort video där du presenterar dig själv och berättar om dina erfarenheter.
              </div>
              <VideoRecorder />
            </div> */}

            {/* Footer Note */}
            <div className="combined-footer">
              <div className="combined-footer-content">
                <div className="combined-footer-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <p className="combined-footer-text">
                  <strong>Tips:</strong> Du kan ladda upp ditt CV här direkt.
                  📹 Videopresentationen skickar du via e-post till
                  johan.karlsson@globalworker.nu.
                  Både formuläret och videon hjälper oss att förstå dina behov bättre. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <section className="maps-section">
        <div className="container">
          <div className="maps-grid">
            <div className="map-card">
              <div className="map-header company-gradient">
                <div className="header-content">
                  <div className="header-icon">
                    <i className="bi bi-building"></i>
                  </div>
                  <div>
                    <h3 className="map-title">Företag i 8 länder</h3>
                    <p className="map-subtitle">Global Worker kontor världen över</p>
                  </div>
                </div>
              </div>
              <div className="map-container">
                <CompanyMap />
              </div>
              <div className="map-footer">
                <div className="footer-content">
                  <div className="status-indicator">
                    <span className="status-dot company-dot"></span>
                    <span className="status-label">Aktiva kontor</span>
                  </div>
                  <span className="status-badge company-badge">8 länder</span>
                </div>
              </div>
            </div>

            <div className="map-card">
              <div className="map-header worker-gradient">
                <div className="header-content">
                  <div className="header-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div>
                    <h3 className="map-title">Arbetare världen över</h3>
                    <p className="map-subtitle">Talangfulla arbetare redo för nya uppdrag</p>
                  </div>
                </div>
              </div>
              <div className="map-container">
                <WorkerMap />
              </div>
              <div className="map-footer">
                <div className="footer-content">
                  <div className="status-indicator">
                    <span className="status-dot worker-dot"></span>
                    <span className="status-label">Aktiva arbetare</span>
                  </div>
                  <span className="status-badge worker-badge">8 aktiva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div 
                  className="stat-icon" 
                  style={{ 
                    backgroundColor: stat.bgColor,
                    color: stat.color
                  }}
                >
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div className="stat-content">
                  <h4 
                    className="stat-number" 
                    style={{ color: '#0f172a' }}  
                  >
                    {stat.number}
                  </h4>
                  <p 
                    className="stat-label" 
                    style={{ color: '#1e293b' }}  
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;