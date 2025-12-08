import React, { useState, useEffect, useRef } from 'react';
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

 /*  */ const processSteps = [
    { 
      number: '01', 
      title: 'Skapa Profil', 
      desc: 'Registrera dig på vår plattform', 
      icon: 'bi-person-badge',
      gradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)'
    },
    { 
      number: '02', 
      title: 'Skicka Ansökan', 
      desc: 'Fyll i dina uppgifter och CV', 
      icon: 'bi-file-earmark-arrow-up',
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)'
    },
    { 
      number: '03', 
      title: 'Möt Arbetsgivare', 
      desc: 'Starta din nya karriär', 
      icon: 'bi-briefcase',
      gradient: 'linear-gradient(135deg, #059669, #047857)'
    }
  ];

  const stats = [
    { number: '8+', label: 'Länder', icon: 'bi-globe', color: '#2563eb', bgColor: '#dbeafe' },
    { number: '500+', label: 'Arbetare', icon: 'bi-people', color: '#059669', bgColor: '#d1fae5' },
    { number: '150+', label: 'Placeringar', icon: 'bi-briefcase', color: '#f59e0b', bgColor: '#fef3c7' },
    { number: '98%', label: 'Nöjda kunder', icon: 'bi-star', color: '#ef4444', bgColor: '#fee2e2' }
  ];

  return (
    <div className="home-container">
      {/* Hero Section - Updated with wrapper */}
      <div className="hero-section-wrapper">
        <HeroSection />
      </div>
      
      {/* Process Steps Section - Added mobile spacing class */}
     <div className="form-section">
  {/* Combined Container */}
  <div className="combined-application-container elevated-card">
    {/* Combined Header */}
 
    {/* Combined Body */}
    <div className="combined-body">
      {/* Request Form Section */}
      <div className="form-section-container">
        
        <RequestForm />
      </div>

      {/* Divider */}
      <div className="combined-divider">
        <span className="combined-divider-text">ELLER</span>
      </div>

      {/* Video Recorder Section */}
      <div className="video-section-container">
        
    
        <VideoRecorder />
      </div>

      {/* Footer Note */}
      <div className="combined-footer">
        <div className="combined-footer-content">
          <div className="combined-footer-icon">
            <i className="bi bi-lightbulb"></i>
          </div>
          <p className="combined-footer-text">
            <strong>Tips:</strong> Både formuläret och videon hjälper oss att förstå dina behov bättre. 
            Du kan välja att skicka båda eller enbart ett av alternativen.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Maps Section */}
      <section className="maps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Global täckning</h2>
            <p className="section-subtitle">
              Vår närvaro sträcker sig över kontinenter – från kontor till talanger
            </p>
          </div>

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
                  <span className="status-badge worker-badge">500+ aktiva</span>
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