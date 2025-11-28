import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Evenemang() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Alla');

  const events = [
    {
      id: 1,
      title: "Tech Career Fair Stockholm",
      description: "Årets största tech-mässa för utvecklare, data scientists och IT-proffs. Möt över 50 tech-företag på jakt efter nya talanger.",
      date: "2024-02-15",
      time: "10:00 - 17:00",
      location: "Stockholm Waterfront",
      address: "Nils Ericsons Plan 4, 111 43 Stockholm",
      type: "Karriärmässa",
      category: "Tech",
      price: "Gratis",
      registrationRequired: true,
      spotsLeft: 23,
      image: "/images/events/tech-fair.jpg",
      organizer: "Global Worker & Tech Sweden",
      agenda: [
        "10:00 - Mässan öppnar",
        "11:00 - Keynote: Framtiden för AI i Sverige",
        "13:00 - Workshop: CV för tech-proffs",
        "15:00 - Paneldiskussion: Tech-trender 2024",
        "17:00 - Networking mingel"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Digital Intervju Workshop",
      description: "Lär dig bemästra digitala intervjuer. Praktiska övningar med feedback från rekryteringsexperter.",
      date: "2024-02-20",
      time: "18:00 - 20:00",
      location: "Online",
      address: "Zoom Webinar",
      type: "Workshop",
      category: "Karriärutveckling",
      price: "Gratis",
      registrationRequired: true,
      spotsLeft: 15,
      image: "/images/events/digital-interview.jpg",
      organizer: "Global Worker",
      agenda: [
        "18:00 - Välkommen & introduktion",
        "18:15 - Teknik och förberedelse",
        "18:45 - Praktiska intervjuövningar",
        "19:30 - Feedback och tips",
        "20:00 - Frågor & svar"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Svensk-Grekisk Affärsträff",
      description: "Nätverksträff för företag och proffs med intresse för svensk-grekiskt samarbete. Perfekt för expansion och internationella karriärer.",
      date: "2024-03-05",
      time: "17:30 - 20:00",
      location: "Grekiska Ambassaden",
      address: "Komendörsgatan 35, 114 58 Stockholm",
      type: "Nätverkning",
      category: "Internationellt",
      price: "Gratis",
      registrationRequired: true,
      spotsLeft: 42,
      image: "/images/events/business-meeting.jpg",
      organizer: "Global Worker & Grekiska Ambassaden",
      agenda: [
        "17:30 - Incheckning och välkomstdrink",
        "18:00 - Presentation: Affärsmöjligheter i Grekland",
        "18:30 - Nätverkning",
        "19:30 - Mingel med grekiska delikatesser"
      ],
      featured: false
    },
    {
      id: 4,
      title: "CV & LinkedIn Konsultation",
      description: "Få professionell feedback på ditt CV och LinkedIn-profile. En-mot-en session med våra rekryteringsexperter.",
      date: "2024-02-25",
      time: "09:00 - 16:00",
      location: "Global Worker Kontor",
      address: "Kungsgatan 32, 111 35 Stockholm",
      type: "Konsultation",
      category: "Karriärutveckling",
      price: "Gratis",
      registrationRequired: true,
      spotsLeft: 8,
      image: "/images/events/cv-consultation.jpg",
      organizer: "Global Worker",
      agenda: [
        "30-minuters individuella sessioner",
        "CV-analys och förbättringsförslag",
        "LinkedIn-profil optimering",
        "Personligt återkopplingsdokument"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Sales & Marketing Career Day",
      description: "Träffa ledande företag inom försäljning och marknadsföring. Perfekt för både nyexaminerade och erfarna proffs.",
      date: "2024-03-12",
      time: "11:00 - 16:00",
      location: "Mall of Scandinavia",
      address: "Mall of Scandinavia, 170 87 Solna",
      type: "Karriärmässa",
      category: "Sales/Marketing",
      price: "Gratis",
      registrationRequired: false,
      spotsLeft: null,
      image: "/images/events/sales-career-day.jpg",
      organizer: "Global Worker & Sales Sweden",
      agenda: [
        "11:00 - Mässan öppnar",
        "12:00 - Panel: Framgång inom digital försäljning",
        "14:00 - Workshop: Storytelling i försäljning",
        "15:00 - Speed-intervjuer med företag"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Relocation Guide: Sverige till Grekland",
      description: "Informationsmöte för dig som överväger att flytta och arbeta i Grekland. Praktiska tips om boende, skatter och kultur.",
      date: "2024-03-18",
      time: "18:30 - 20:00",
      location: "Online",
      address: "Microsoft Teams",
      type: "Webinar",
      category: "Internationellt",
      price: "Gratis",
      registrationRequired: true,
      spotsLeft: 67,
      image: "/images/events/relocation-guide.jpg",
      organizer: "Global Worker",
      agenda: [
        "18:30 - Introduktion till Grekland",
        "18:45 - Praktiska relocation-tips",
        "19:15 - Skatter och juridik",
        "19:45 - Kultur och integration",
        "20:00 - Frågor & svar"
      ],
      featured: false
    }
  ];

  const eventTypes = ['Alla', 'Karriärmässa', 'Workshop', 'Nätverkning', 'Webinar', 'Konsultation'];
  const categories = ['Alla', 'Tech', 'Karriärutveckling', 'Internationellt', 'Sales/Marketing'];

  const filteredEvents = events.filter(event => {
    const typeMatch = activeFilter === 'Alla' || event.type === activeFilter || event.category === activeFilter;
    return typeMatch;
  });

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('sv-SE', options);
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= new Date();
  };

  const EventCard = ({ event }) => (
    <div className="col-md-6 col-lg-4 mb-4">
      <div style={{
        border: event.featured ? '3px solid #ffcd00' : '2px solid #e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        height: '100%',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      }}>
        {/* Featured Badge */}
        {event.featured && (
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            backgroundColor: '#ffcd00',
            color: '#005293',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            zIndex: 2
          }}>
            Utvalt
          </div>
        )}

        {/* Event Image */}
        <div style={{
          height: '160px',
          backgroundColor: '#f8f9fa',
          backgroundImage: `url(${event.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          {/* Date Badge */}
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: '#005293',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            <div style={{ fontSize: '1.2rem' }}>{new Date(event.date).getDate()}</div>
            <div style={{ fontSize: '0.7rem' }}>
              {new Date(event.date).toLocaleDateString('sv-SE', { month: 'short' })}
            </div>
          </div>

          {/* Type Badge */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#005293',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: '600'
          }}>
            {event.type}
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          <h4 style={{ 
            color: '#005293', 
            marginBottom: '10px',
            fontSize: '1.2rem',
            lineHeight: '1.4'
          }}>
            {event.title}
          </h4>

          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>
              <i className="bi bi-calendar me-2" style={{ color: '#005293' }}></i>
              {formatDate(event.date)} • {event.time}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: '#666', fontSize: '0.9rem' }}>
              <i className="bi bi-geo-alt me-2" style={{ color: '#005293' }}></i>
              {event.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#666', fontSize: '0.9rem' }}>
              <i className="bi bi-tag me-2" style={{ color: '#005293' }}></i>
              {event.category} • {event.price}
            </div>
          </div>

          <p style={{ 
            color: '#555', 
            lineHeight: '1.5',
            fontSize: '0.9rem',
            marginBottom: '20px'
          }}>
            {event.description}
          </p>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #e0e0e0',
            paddingTop: '15px'
          }}>
            <div>
              {event.registrationRequired && event.spotsLeft && (
                <div style={{ fontSize: '0.8rem', color: event.spotsLeft < 10 ? '#dc2626' : '#666' }}>
                  {event.spotsLeft} platser kvar
                </div>
              )}
            </div>
            <button 
              style={{
                backgroundColor: '#005293',
                color: 'white',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#00457e';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#005293';
              }}
            >
              {event.registrationRequired ? 'Anmäl Dig' : 'Läs Mer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Evenemang</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Upptäck kommande karriärmässor, workshops och nätverksträffar för att boosta din karriär
        </p>
      </div>

      {/* Event Stats */}
      <div style={{ marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                {upcomingEvents.length}
              </div>
              <div style={{ color: '#666' }}>Kommande Evenemang</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                {events.filter(e => e.type === 'Workshop').length}
              </div>
              <div style={{ color: '#666' }}>Workshops</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                {events.filter(e => e.price === 'Gratis').length}
              </div>
              <div style={{ color: '#666' }}>Gratis Evenemang</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#005293', marginBottom: '5px' }}>
                500+
              </div>
              <div style={{ color: '#666' }}>Delta Tidigare</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px', textAlign: 'center' }}>
          Filtrera Evenemang
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px', 
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              style={{
                backgroundColor: activeFilter === type ? '#005293' : 'white',
                color: activeFilter === type ? 'white' : '#005293',
                border: '2px solid #005293',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem'
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#005293', marginBottom: '40px', textAlign: 'center' }}>
          Kommande Evenemang
        </h2>
        <div className="row">
          {filteredEvents.filter(event => isUpcoming(event.date)).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {filteredEvents.filter(event => isUpcoming(event.date)).length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <i className="bi bi-calendar-x" style={{ fontSize: '3rem', marginBottom: '20px', color: '#005293' }}></i>
            <h4 style={{ color: '#005293', marginBottom: '10px' }}>Inga evenemang just nu</h4>
            <p>Kolla in våra andra evenemang eller prenumerera på vårt nyhetsbrev för att få uppdateringar.</p>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h3 style={{ color: '#005293', marginBottom: '15px' }}>
          Missa inga evenemang!
        </h3>
        <p style={{ color: '#666', marginBottom: '25px' }}>
          Prenumerera på vårt evenemangsnyhetsbrev och få förhandsvisning på kommande karriärmöjligheter.
        </p>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ display: 'flex' }}>
            <input
              type="email"
              placeholder="Ange din e-postadress"
              style={{
                flex: '1',
                padding: '12px 15px',
                border: '2px solid #005293',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
                fontSize: '1rem'
              }}
            />
            <button
              style={{
                backgroundColor: '#005293',
                color: 'white',
                border: '2px solid #005293',
                padding: '12px 25px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Prenumerera
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px' }}>
          Vill du arrangera ett evenemang med oss?
        </h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Vi samarbetar gärna med företag och organisationer för att skapa meningsfulla karriärevenemang.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          style={{
            backgroundColor: '#005293',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          Kontakta Oss för Samarbete
        </button>
      </div>
    </div>
  );
}

export default Evenemang;