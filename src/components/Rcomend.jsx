import React, { useState } from 'react';

function Rekommendationer() {
  const [activeFilter, setActiveFilter] = useState('Alla');

  const testimonials = [
    {
      id: 1,
      name: "Anders Larsson",
      position: "VD, TechSolutions AB",
      company: "TechSolutions AB",
      type: "Företag",
      rating: 5,
      text: "Global Worker har varit en ovärderlig partner för vår tillväxt. De har levererat exceptionella IT-talanger som direkt bidragit till vår framgång. Deras förståelse för vår verksamhet och kultur är imponerande.",
      image: "/images/testimonials/anders.jpg",
      date: "2024-01-10",
      category: "IT-rekrytering"
    },
    {
      id: 2,
      name: "Elena Papadopoulos",
      position: "Marknadschef",
      company: "Athena Consulting",
      type: "Företag",
      rating: 5,
      text: "Som grekiskt företag som vill expandera till Sverige var Global Worker den perfekta partnern. Deras kunskap om både den svenska och grekiska arbetsmarknaden gav oss en unik fördel.",
      image: "/images/testimonials/elena.jpg",
      date: "2024-01-08",
      category: "Internationell rekrytering"
    },
    {
      id: 3,
      name: "Marcus Berg",
      position: "Senior Utvecklare",
      company: "Google",
      type: "Arbetare",
      rating: 5,
      text: "Genom Global Worker fick jag mitt drömjobb i Grekland. De guidade mig genom hela processen - från ansökan till relocation. Professionellt och personligt bemötande hela vägen!",
      image: "/images/testimonials/marcus.jpg",
      date: "2024-01-05",
      category: "Tech"
    },
    {
      id: 4,
      name: "Lisa Malm",
      position: "Säljchef",
      company: "SalesForce Nordic",
      type: "Företag",
      rating: 5,
      text: "Vi har anlitat Global Worker för flera seniora säljrekryteringar och resultaten har överträffat våra förväntningar. Deras nätverk och screeningprocess är exceptionell.",
      image: "/images/testimonials/lisa.jpg",
      date: "2024-01-03",
      category: "Sales-rekrytering"
    },
    {
      id: 5,
      name: "Nikolas Dimitriou",
      position: "IT-tekniker",
      company: "Microsoft",
      type: "Arbetare",
      rating: 5,
      text: "Global Worker hjälpte mig att hitta ett fantastiskt jobb i Stockholm. De förberedde mig utmärkt för intervjuer och förhandlade en konkurrenskraftig paket. Tack!",
      image: "/images/testimonials/nikolas.jpg",
      date: "2023-12-28",
      category: "Tech"
    },
    {
      id: 6,
      name: "Sara Chen",
      position: "HR Director",
      company: "Nordic Bank",
      type: "Företag",
      rating: 5,
      text: "Snabb, professionell och effektiv. Global Worker förstod våra behav perfekt och levererade kvalificerade kandidater inom rekordtid. Vår go-to partner för rekrytering.",
      image: "/images/testimonials/sara.jpg",
      date: "2023-12-25",
      category: "Finance-rekrytering"
    },
    {
      id: 7,
      name: "David Eriksson",
      position: "Marknadsföringsspecialist",
      company: "Spotify",
      type: "Arbetare",
      rating: 5,
      text: "Efter att ha flyttat från Grekland hjälpte Global Worker mig att etablera mig på den svenska arbetsmarknaden. Deras kontakter och rådgivning var ovärderliga.",
      image: "/images/testimonials/david.jpg",
      date: "2023-12-20",
      category: "Marketing"
    },
    {
      id: 8,
      name: "Maria Rodriguez",
      position: "VD",
      company: "MedTech Solutions",
      type: "Företag",
      rating: 5,
      text: "Global Worker har varit instrumental i vår expansion till Grekland. Deras lokala kunskap kombinerat med internationell expertis gav oss en smidig start.",
      image: "/images/testimonials/maria.jpg",
      date: "2023-12-18",
      category: "Internationell rekrytering"
    }
  ];

  const stats = [
    { number: "98%", label: "Nöjda kunder" },
    { number: "4.9/5", label: "Genomsnittligt betyg" },
    { number: "500+", label: "Recensioner" },
    { number: "95%", label: "Återkommande kunder" }
  ];

  const filters = ['Alla', 'Företag', 'Arbetare', 'Tech', 'Sales', 'Marketing', 'Internationell'];

  const filteredTestimonials = activeFilter === 'Alla' 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.type === activeFilter || testimonial.category === activeFilter
      );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: '#ffcd00', marginRight: '2px' }}
      ></i>
    ));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('sv-SE', options);
  };

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
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Rekommendationer</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Läs vad våra kunder och kandidater säger om sitt samarbete med Global Worker
        </p>
      </div>

      {/* Stats Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#005293', marginBottom: '40px' }}>
          Vårt Rykte i Siffror
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

      {/* Filters */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px', textAlign: 'center' }}>
          Filtrera Rekommendationer
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px', 
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                backgroundColor: activeFilter === filter ? '#005293' : 'white',
                color: activeFilter === filter ? 'white' : '#005293',
                border: '2px solid #005293',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = '#005293';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#005293';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#005293', marginBottom: '40px', textAlign: 'center' }}>
          {activeFilter === 'Alla' ? 'Alla Rekommendationer' : `${activeFilter} Rekommendationer`}
        </h2>
        <div className="row">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 mb-4">
              <div style={{
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                padding: '30px',
                backgroundColor: 'white',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                height: '100%',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}>
                {/* Type Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: testimonial.type === 'Företag' ? '#005293' : '#ffcd00',
                  color: testimonial.type === 'Företag' ? 'white' : '#005293',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.7rem',
                  fontWeight: '600'
                }}>
                  {testimonial.type}
                </div>

                {/* Stars */}
                <div style={{ marginBottom: '20px' }}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p style={{ 
                  color: '#555', 
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  marginBottom: '25px',
                  position: 'relative'
                }}>
                  <i className="bi bi-quote" style={{ 
                    color: '#ffcd00', 
                    fontSize: '2rem',
                    position: 'absolute',
                    top: '-10px',
                    left: '-5px',
                    opacity: 0.3
                  }}></i>
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '20px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#ffcd00',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#005293',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginRight: '15px',
                    flexShrink: 0
                  }}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600', 
                      color: '#005293',
                      marginBottom: '5px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      marginBottom: '3px'
                    }}>
                      {testimonial.position}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: '#888'
                    }}>
                      {testimonial.company} • {formatDate(testimonial.date)}
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '15px'
                }}>
                  <span style={{
                    backgroundColor: '#f8f9fa',
                    color: '#005293',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    border: '1px solid #005293'
                  }}>
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#005293', marginBottom: '20px' }}>
          Redo att bli vår nästa framgångsberättelse?
        </h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Oavsett om du är ett företag som behöver talanger eller en arbetssökande som vill hitta ditt drömjobb - vi hjälper dig att nå dina mål.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => window.location.href = '/tjanster'}
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
            Se Lediga Tjänster
          </button>
          <button 
            onClick={() => window.location.href = '/contact'}
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

      {/* Trust Indicators */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h3 style={{ color: '#005293', marginBottom: '30px' }}>
          Förtroendeindikatorer
        </h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <i className="bi bi-award" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>Certifierade Proffs</h5>
            <p style={{ color: '#666' }}>Alla våra rekryterare är certifierade och har branscherfarenhet</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-check" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>DataSkydd</h5>
            <p style={{ color: '#666' }}>Vi följer GDPR och säkerställer att din information är skyddad</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-hand-thumbs-up" style={{ fontSize: '2.5rem', color: '#005293', marginBottom: '15px' }}></i>
            <h5 style={{ color: '#005293', marginBottom: '10px' }}>Bekräftat Förtroende</h5>
            <p style={{ color: '#666' }}>Verifierade recensioner från riktiga kunder och kandidater</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rekommendationer;