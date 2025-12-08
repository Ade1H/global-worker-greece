import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';

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
      phone: "+30 697 263 6053",
      initials: "JK"
    },
   
    
  ];

  const departments = [
    {
      name: "Rekrytering & Matchning",
      description: "Vår kärnverksamhet - att hitta rätt talang till rätt uppdrag.",
      icon: "bi-search",
      memberCount: "8 specialister"
    },
    {
      name: "Kundservice & Support",
      description: "Hjälper både arbetstagare och arbetsgivare under hela processen.",
      icon: "bi-headset",
      memberCount: "5 experter"
    },
    {
      name: "Operationer & Logistik",
      description: "Säkerställer smidiga processer och bra arbetsvillkor.",
      icon: "bi-gear",
      memberCount: "6 koordinatorer"
    },
    {
      name: "Marknadsföring & Kommunikation",
      description: "Bygger varumärke och driver digital närvaro.",
      icon: "bi-megaphone",
      memberCount: "3 strateger"
    }
  ];

  const teamStats = [
    { number: "15", label: "Teammedlemmar", icon: "bi-people" },
    { number: "8", label: "Språk vi talar", icon: "bi-translate" },
    { number: "60+", label: "Kombinerade års erfarenhet", icon: "bi-award" },
    { number: "24/7", label: "Tillgänglighet", icon: "bi-clock" }
  ];

  return (
    <div className="team-container">
      <div className="team-content">
        {/* Hero Section */}
    <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Vårt Team
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
             Möt de passionerade experter som gör varje rekrytering till en framgångsrik matchning. 
            Vårt team kombinerar lokal expertis med global reach.
            </p>
            
          </div>
        </div>

        {/* Team Stats */}
        <div className="stats-grid">
          {teamStats.map((stat, index) => (
            <div 
              key={index}
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              <div className="stat-icon-wrapper">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="stat-number">
                {stat.number}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-header">
            <h2 className="section-title">
              Möt Teamet
            </h2>
            <p className="section-subtitle">
              Passionerade experter dedikerade till att skapa framgångsrika karriärer
            </p>
          </div>

          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`member-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Top Color Bar */}
                <div className="member-card-bar"></div>
                
                <div className="member-card-content">
                  {/* Avatar */}
                  <div className="member-avatar">
                    {member.initials}
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="member-name">
                    {member.name}
                  </h3>
                  
                  <div className="member-role">
                    {member.role}
                  </div>
                  
                  <div className="member-department">
                    {member.department}
                  </div>
                  
                  {/* Bio */}
                  <p className="member-bio">
                    {member.bio}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="member-contact">
                    <div className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <span className="contact-text">
                        {member.email}
                      </span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <span className="contact-text">
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                {hoveredMember === index && (
                  <div className="hover-overlay">
                    <div className="overlay-content">
                      <div className="overlay-icon">
                        <i className="bi bi-chat-dots"></i>
                      </div>
                      <h4 className="overlay-title">
                        Kontakta {member.name.split(' ')[0]}
                      </h4>
                      <p className="overlay-role">
                        {member.role}
                      </p>
                      <div className="contact-buttons">
                        <a 
                          href={`mailto:${member.email}`}
                          className="contact-button email"
                        >
                          <i className="bi bi-envelope"></i>
                          Email
                        </a>
                        <a 
                          href={`tel:${member.phone.replace(/\s+/g, '')}`}
                          className="contact-button phone"
                        >
                          <i className="bi bi-telephone"></i>
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
          <div className="section-header">
            <h2 className="section-title">
              Våra Avdelningar
            </h2>
            <p className="section-subtitle">
              Specialiserade team som arbetar tillsammans för att leverera exceptionell service
            </p>
          </div>

          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className={`department-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${1.2 + (index * 0.1)}s` }}
              >
                <div className="department-icon">
                  <i className={`bi ${dept.icon}`}></i>
                </div>
                <h3 className="department-name">
                  {dept.name}
                </h3>
                <p className="department-description">
                  {dept.description}
                </p>
                <div className="department-count">
                  {dept.memberCount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="join-cta">
          <div className="join-icon">
            <i className="bi bi-people"></i>
          </div>
          
          <h2 className="join-title">
            Vill du bli en del av vårt team?
          </h2>
          
          <p className="join-description">
            Vi letar alltid efter passionerade talanger som delar vår vision om att skapa meningsfulla karriärer.
          </p>
          
          <button 
            onClick={() => navigate('/tjanster')}
            className="join-button"
          >
            <i className="bi bi-search"></i>
            Se Våra Lediga Tjänster
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;