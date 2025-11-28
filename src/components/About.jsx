import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

function Om() {
  const navigate = useNavigate(); // Add this hook

  const stats = [
    { number: "10+", label: "År i branschen" },
    { number: "5,000+", label: "Placerade arbetare" },
    { number: "200+", label: "Samarbetspartners" },
    { number: "95%", label: "Nöjda kunder" }
  ];

  const values = [
    {
      icon: "bi bi-shield-check",
      title: "Pålitlighet",
      description: "Vi bygger långsiktiga relationer baserade på förtroende och transparens."
    },
    {
      icon: "bi bi-people",
      title: "Människor i fokus",
      description: "Varje individ är unik - vi matchar rätt person med rätt uppdrag."
    },
    {
      icon: "bi bi-graph-up",
      title: "Kvalitet",
      description: "Vi strävar efter excellens i allt vi gör, från rekrytering till uppföljning."
    },
    {
      icon: "bi bi-globe",
      title: "Globalt nätverk",
      description: "Med kontakter över hela världen hittar vi de bästa talangerna."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Grundande",
      description: "Global Worker grundades med visionen att förbättra arbetsmarknaden."
    },
    {
      year: "2016",
      title: "Internationell expansion",
      description: "Vi expanderade vår verksamhet till Grekland och övriga Europa."
    },
    {
      year: "2018",
      title: "Digital plattform",
      description: "Lanserade vår egen rekryteringsplattform för bättre matchning."
    },
    {
      year: "2020",
      title: "5000:e placeringen",
      description: "Nådde milstolpen med 5000 framgångsrika arbetarplaceringar."
    },
    {
      year: "2024",
      title: "Framtidsvision",
      description: "Fortsatt expansion med fokus på hållbarhet och teknik."
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #005293 0%, #00457e 100%)',
        color: 'white',
        padding: '80px 20px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Om Global Worker</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Sedan 2014 har vi hjälpt företag och arbetssökande att hitta varandra. 
          Vår passion är att skapa meningsfulla karriärer och bygga starka arbetsplatser.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row" style={{ marginBottom: '60px' }}>
        <div className="col-md-6 mb-4">
          <div style={{
            backgroundColor: '#ffcd00',
            color: '#005293',
            padding: '40px 30px',
            borderRadius: '12px',
            height: '100%',
            textAlign: 'center'
          }}>
            <i className="bi bi-bullseye" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '15px' }}>Vårt Uppdrag</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Att vara den främsta partner för både arbetssökande och företag genom att 
              erbjuda skräddarsydda rekryteringslösningar som främjar tillväxt, mångfald 
              och långsiktigt framgång.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div style={{
            backgroundColor: '#005293',
            color: 'white',
            padding: '40px 30px',
            borderRadius: '12px',
            height: '100%',
            textAlign: 'center'
          }}>
            <i className="bi bi-eye" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '15px' }}>Vår Vision</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              En värld där varje individ har möjlighet att hitta meningsfullt arbete 
              och varje företag kan nå sin fulla potential genom rätt talanger.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Vår Verkan i Siffror
        </h2>
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#005293',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#666', fontSize: '1.1rem' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Våra Värderingar
        </h2>
        <div className="row">
          {values.map((value, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div style={{
                textAlign: 'center',
                padding: '30px 20px',
                border: '2px solid #005293',
                borderRadius: '10px',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <i className={value.icon} style={{ 
                  fontSize: '2.5rem', 
                  color: '#005293',
                  marginBottom: '20px'
                }}></i>
                <h4 style={{ color: '#005293', marginBottom: '15px' }}>
                  {value.title}
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Vår Resa
        </h2>
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '4px',
            backgroundColor: '#005293',
            transform: 'translateX(-50%)'
          }}></div>
          
          {timeline.map((item, index) => (
            <div key={index} className={`row ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} style={{ marginBottom: '40px' }}>
              <div className="col-md-5">
                <div style={{
                  backgroundColor: index % 2 === 0 ? '#005293' : '#ffcd00',
                  color: index % 2 === 0 ? 'white' : '#005293',
                  padding: '25px',
                  borderRadius: '10px',
                  position: 'relative',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    [index % 2 === 0 ? 'right' : 'left']: '-10px',
                    transform: 'translateY(-50%)',
                    width: '0',
                    height: '0',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    [index % 2 === 0 ? 'borderLeft' : 'borderRight']: `10px solid ${index % 2 === 0 ? '#005293' : '#ffcd00'}`
                  }}></div>
                  <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ margin: 0, lineHeight: '1.5' }}>{item.description}</p>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div style={{
                  backgroundColor: '#005293',
                  color: 'white',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  margin: '0 auto',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {item.year}
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#005293', marginBottom: '30px' }}>
          Varför Välja Global Worker?
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <i className="bi bi-clock-history" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>Snabba Processer</h5>
            <p style={{ color: '#666' }}>Effektiv rekrytering från ansökan till anställning</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-award" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>Expertis</h5>
            <p style={{ color: '#666' }}>10+ års erfarenhet av arbetsmarknaden</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-heart" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>Personligt Ansvar</h5>
            <p style={{ color: '#666' }}>Dedikerad kontaktperson under hela processen</p>
          </div>
        </div>
      </div>

      {/* CTA Section - FIXED BUTTONS */}
      <div style={{ 
        textAlign: 'center',
        padding: '50px 20px',
        marginTop: '50px'
      }}>
        <h3 style={{ color: '#005293', marginBottom: '20px' }}>
          Redo att börja samarbeta?
        </h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Oavsett om du är en arbetssökande eller ett företag - vi hjälper dig att nå dina mål.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/tjanster')} // FIXED: Use navigate
            style={{
              backgroundColor: '#005293',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Se Lediga Jobb
          </button>
          <button 
            onClick={() => navigate('/contact')} // FIXED: Use navigate
            style={{
              backgroundColor: '#ffcd00',
              color: '#005293',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Kontakta Oss
          </button>
        </div>
      </div>
    </div>
  );
}

export default Om;