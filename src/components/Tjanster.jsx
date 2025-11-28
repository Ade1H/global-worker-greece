import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

function Tjanster() {
  const navigate = useNavigate(); // Add this line

  const jobPositions = [
    {
      title: "Säljare B2C",
      description: "Här presenterar vi karriärvägarna för dig som vill arbeta med försäljning och marknadsföring riktad direkt mot konsumenter. Rollen som säljare B2C ger dig möjlighet att utveckla kommunikationsförmåga, förstå kundbehov och bygga erfarenhet som kan leda till en långsiktig karriär inom försäljning och marknadsföring.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "Säljare B2B",
      description: "Här presenterar vi karriärvägarna för dig som vill arbeta med försäljning och marknadsföring riktad mot företag. Rollen som säljare B2B ger dig möjlighet att utveckla affärsförmåga, bygga långsiktiga kundrelationer och skapa värde för både kunder och företag, samtidigt som du utvecklar en stark kompetens inom försäljning och strategisk marknadsföring.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "Mötesbokare B2C",
      description: "Här presenterar vi de främsta karriärvägarna för dig som vill arbeta med försäljning och marknadsföring direkt mot konsumenter. Rollen som mötesbokare är ofta en inkörsport till en framgångsrik karriär inom sälj – där du utvecklar stark kommunikationsförmåga, lär dig förstå kundbehov och bygger erfarenhet som gör dig attraktiv på arbetsmarknaden.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "IT-tekniker",
      description: "En IT-tekniker ansvarar för installation, underhåll och support av företagets IT-system och nätverk. Rollen omfattar felsökning, teknisk support till användare samt säkerställande av att hårdvara, mjukvara och nätverkslösningar fungerar effektivt och säkert.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "Marknadsföringsspecialist",
      description: "Ansvarsområdet omfattar planering, genomförande och optimering av marknadsföringskampanjer samt utveckling av starka kundrelationer för att öka försäljning och stärka företagets varumärke.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "Revisor",
      description: "En revisor ansvarar för att granska och säkerställa korrektheten i företagets bokföring och ekonomiska rapporter. Rollen innefattar analys av finansiella processer, identifiering av risker och rådgivning för att säkerställa regelefterlevnad och ekonomisk transparens.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    },
    {
      title: "Kundtjänst",
      description: "Fokuserar på att ge utmärkt kundservice genom tydlig kundkontakt, support och korrekt produktinformation. Rollen säkerställer att kunder får snabb hjälp och en positiv upplevelse av företaget.",
      location: "Aten, Grekland",
      employmentTypes: ["Deltid", "Heltid", "Projektanställning"]
    }
  ];

  // Add this function to handle navigation
  const handleSpontaneousApplication = () => {
    navigate('/contact');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ color: '#005293', marginBottom: '10px' }}>Våra Tjänster</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Upptäck spännande karriärmöjligheter inom olika branscher
        </p>
      </div>

      <div className="row">
        {jobPositions.map((job, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              padding: '25px',
              height: '100%',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }}>
              <h3 style={{ 
                color: '#005293', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                minHeight: '60px'
              }}>
                {job.title}
              </h3>
              
              <p style={{ 
                color: '#555', 
                lineHeight: '1.6',
                marginBottom: '20px',
                minHeight: '120px'
              }}>
                {job.description}
              </p>
              
              <div style={{ marginBottom: '15px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '10px',
                  color: '#666'
                }}>
                  <i className="bi bi-geo-alt me-2" style={{ color: '#005293' }}></i>
                  <span>{job.location}</span>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {job.employmentTypes.map((type, typeIndex) => (
                    <span 
                      key={typeIndex}
                      style={{
                        backgroundColor: '#ffcd00',
                        color: '#005293',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                style={{
                  backgroundColor: '#005293',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: '600',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00457e';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#005293';
                }}
                onClick={() => navigate('/contact')} // Add this onClick
              >
                Ansök nu
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '50px', 
        padding: '30px', 
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#005293', marginBottom: '15px' }}>
          Inte hittat vad du söker?
        </h3>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Skicka in en spontanansökan så hör vi av oss när vi har tjänster som matchar din profil.
        </p>
        <button 
          onClick={handleSpontaneousApplication} // Add this onClick
          style={{
            backgroundColor: '#ffcd00',
            color: '#005293',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          Skicka spontanansökan
        </button>
      </div>
    </div>
  );
}

export default Tjanster;