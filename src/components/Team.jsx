import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

function Team() {
  const navigate = useNavigate(); // Add this hook

  const teamMembers = [
    // ... (keep all your team members data the same)
  ];

  const departments = [
    // ... (keep your departments data the same)
  ];

  const teamStats = [
    // ... (keep your stats data the same)
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
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Vårt Team</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Möt de passionerade experter som gör varje rekrytering till en framgångsrik matchning. 
          Vårt team kombinerar lokal expertis med global reach.
        </p>
      </div>

      {/* ... (keep all your existing sections the same) ... */}

      {/* Join Our Team CTA - FIXED BUTTON */}
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '50px 30px',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#005293', marginBottom: '20px' }}>
          Vill du bli en del av vårt team?
        </h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
          Vi letar alltid efter passionerade talanger som delar vår vision om att skapa meningsfulla karriärer.
        </p>
        <button 
          onClick={() => navigate('/tjanster')} // FIXED: Use navigate instead of window.location
          style={{
            backgroundColor: '#005293',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#00457e';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#005293';
          }}
        >
          Se Våra Lediga Tjänster
        </button>
      </div>
    </div>
  );
}

export default Team;