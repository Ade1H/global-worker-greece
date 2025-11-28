import React from 'react';
import { useNavigate } from 'react-router-dom';

function Karriar() {
  const navigate = useNavigate();

  const careerPaths = [
    {
      title: "Sälj & Marknadsföring",
      description: "Bygg en karriär inom försäljning och marknadsföring. Perfekt för dig som är kommunikativ, resultatinriktad och gillar att arbeta med människor.",
      positions: ["Säljare B2C", "Säljare B2B", "Mötesbokare", "Marknadsföringsspecialist"],
      icon: "bi bi-megaphone",
      color: "#005293"
    },
    {
      title: "IT & Teknik",
      description: "Utveckla din karriär inom IT-branschen. Vi erbjuder möjligheter inom tekniksupport, systemadministration och mjukvaruutveckling.",
      positions: ["IT-tekniker", "IT-support", "Systemadministratör", "Nätverkstekniker"],
      icon: "bi bi-laptop",
      color: "#ffcd00"
    },
    {
      title: "Administration & Ekonomi",
      description: "Karriärmöjligheter inom administration, ekonomi och revision. Idealisk för detaljorienterade och organiserade personer.",
      positions: ["Revisor", "Administratör", "Ekonomiassistent", "Kundservice"],
      icon: "bi bi-calculator",
      color: "#005293"
    },
    {
      title: "Bygg & Anläggning",
      description: "Arbete inom byggbranschen för dig som gillar praktiskt arbete och att se konkreta resultat av ditt arbete.",
      positions: ["Byggarbetare", "Snickare", "Målare", "Anläggningsarbetare"],
      icon: "bi bi-hammer",
      color: "#ffcd00"
    },
    {
      title: "Logistik & Lager",
      description: "Karriär inom logistik, lager och transport. Viktiga roller som håller samhället i rörelse.",
      positions: ["Lagerarbetare", "Logistikansvarig", "Transport", "Förrådsarbetare"],
      icon: "bi bi-truck",
      color: "#005293"
    },
    {
      title: "Kundservice & Support",
      description: "Arbeta direkt med kunder och hjälp dem lösa sina behov. Utveckla dina kommunikationsfärdigheter.",
      positions: ["Kundtjänst", "Kundsupport", "Servicepersonal", "Supporttekniker"],
      icon: "bi bi-headset",
      color: "#ffcd00"
    }
  ];

  const successStories = [
    {
      name: "Maria Andersson",
      role: "Säljare B2C",
      story: "Började som mötesbokare och är nu teamledare för säljavdelningen efter 2 år.",
      image: "/images/success1.jpg"
    },
    {
      name: "Erik Johansson",
      role: "IT-tekniker",
      story: "Startade som IT-praktikant och har nu en fast anställning med utvecklingsmöjligheter.",
      image: "/images/success2.jpg"
    },
    {
      name: "Sofia Nilsson",
      role: "Marknadsföring",
      story: "Från kundtjänst till marknadsföringsspecialist på 18 månader.",
      image: "/images/success3.jpg"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #005293 0%, #00457e 100%)',
        color: 'white',
        padding: '60px 20px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Karriärmöjligheter</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Upptäck spännande karriärvägar och bygg din framtid med Global Worker
        </p>
        <button 
          onClick={() => navigate('/tjanster')}
          style={{
            backgroundColor: '#ffcd00',
            color: '#005293',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Se Alla Lediga Tjänster
        </button>
      </div>

      {/* Career Paths */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Utforska Karriärvägar
        </h2>
        <div className="row">
          {careerPaths.map((career, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div style={{
                border: `3px solid ${career.color}`,
                borderRadius: '12px',
                padding: '25px',
                height: '100%',
                backgroundColor: 'white',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <i className={career.icon} style={{ fontSize: '2.5rem', color: career.color }}></i>
                </div>
                <h3 style={{ color: career.color, textAlign: 'center', marginBottom: '15px' }}>
                  {career.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                  {career.description}
                </p>
                <div>
                  <h5 style={{ color: '#005293', marginBottom: '10px' }}>Typiska roller:</h5>
                  <ul style={{ paddingLeft: '20px', color: '#666' }}>
                    {career.positions.map((position, posIndex) => (
                      <li key={posIndex}>{position}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        marginBottom: '50px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Framgångsberättelser
        </h2>
        <div className="row">
          {successStories.map((story, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                textAlign: 'center',
                height: '100%',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ffcd00',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#005293',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ color: '#005293', marginBottom: '10px' }}>{story.name}</h4>
                <p style={{ 
                  color: '#ffcd00', 
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {story.role}
                </p>
                <p style={{ color: '#666', fontStyle: 'italic' }}>
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center',
        padding: '40px',
        border: '3px dashed #005293',
        borderRadius: '15px'
      }}>
        <h3 style={{ color: '#005293', marginBottom: '20px' }}>
          Redo att starta din karriär?
        </h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Oavsett om du letar efter ditt första jobb eller vill byta karriärriktning - vi hjälper dig hitta rätt väg.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/tjanster')}
            style={{
              backgroundColor: '#005293',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Se Lediga Jobb
          </button>
          <button 
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: '#ffcd00',
              color: '#005293',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Skicka Spontanansökan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Karriar;