import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Blogg() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Alla');

  const blogPosts = [
    {
      id: 1,
      title: "5 Viktiga Tips för en Framgångsrik CV",
      excerpt: "Lär dig hur du skapar ett CV som fångar rekryterares uppmärksamhet och ökar dina chanser till intervju.",
      content: "I dagens konkurrensutsatta arbetsmarknad är ett välskrivet CV avgörande. Här delar vi de viktigaste tipsen för att skapa ett CV som sticker ut...",
      author: "Anna Svensson",
      date: "2024-01-15",
      readTime: "5 min läsning",
      category: "Karriärråd",
      image: "/images/blog/cv-tips.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Arbetsmarknaden i Grekland 2024: Trender och Möjligheter",
      excerpt: "En djupgående analys av de senaste trenderna på den grekiska arbetsmarknaden.",
      content: "Den grekiska arbetsmarknaden genomgår en spännande transformation. Med ökad digitalisering och tillväxt inom tech-sektorn...",
      author: "Maria Papadopoulos",
      date: "2024-01-10",
      readTime: "8 min läsning",
      category: "Marknadsinsikter",
      image: "/images/blog/greece-market.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Så Förbereder du dig för en Digital Intervju",
      excerpt: "Mastera konsten att göra ett starkt intryck via skärmen med dessa beprövade tips.",
      content: "Digitala intervjuer har blivit normen. Här är de bästa strategierna för att lyckas i din nästa videointervju...",
      author: "Erik Lindgren",
      date: "2024-01-08",
      readTime: "6 min läsning",
      category: "Intervjutips",
      image: "/images/blog/digital-interview.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Varför Kulturmatchning är Nyckeln till Långsiktig Framgång",
      excerpt: "Upptäck varför kulturell passning ofta är viktigare än tekniska färdigheter.",
      content: "En perfekt kulturmatch kan göra skillnaden mellan en kortvarig anställning och en lång karriär...",
      author: "Sofia Nilsson",
      date: "2024-01-05",
      readTime: "7 min läsning",
      category: "Rekrytering",
      image: "/images/blog/culture-fit.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Top 5 Efterfrågade Kompetenser inom Tech 2024",
      excerpt: "De tekniska färdigheter som företag letar efter just nu.",
      content: "Tech-branschen fortsätter att evolvers snabbt. Här är de mest efterfrågade kompetenserna för 2024...",
      author: "David Andersson",
      date: "2024-01-03",
      readTime: "4 min läsning",
      category: "Tech",
      image: "/images/blog/tech-skills.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Från Student till Professionell: Så Gör du Övergången",
      excerpt: "En guide för nyexaminerade som ska ut på arbetsmarknaden.",
      content: "Övergången från studier till arbetsliv kan vara utmanande. Lär dig hur du navigerar denna viktiga fas...",
      author: "Anna Svensson",
      date: "2023-12-28",
      readTime: "5 min läsning",
      category: "Karriärråd",
      image: "/images/blog/student-to-pro.jpg",
      featured: false
    }
  ];

  const categories = [
    'Alla',
    'Karriärråd',
    'Marknadsinsikter',
    'Intervjutips',
    'Rekrytering',
    'Tech',
    'Personlig Utveckling'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'Alla' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Global Worker Blogg</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Expertinsikter, karriärråd och marknadsanalyser för att hjälpa dig nå dina karriärmål
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#005293', marginBottom: '30px', textAlign: 'center' }}>
            Utvalda Inlägg
          </h2>
          <div className="row">
            {featuredPosts.map((post) => (
              <div key={post.id} className="col-md-6 mb-4">
                <div style={{
                  border: '2px solid #e0e0e0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onClick={() => navigate(`/blogg/${post.id}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}>
                  {/* Featured Badge */}
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
                    Utvald
                  </div>

                  {/* Post Image */}
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f8f9fa',
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      backgroundColor: '#005293',
                      color: 'white',
                      padding: '3px 10px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {post.category}
                    </div>
                  </div>

                  <div style={{ padding: '25px' }}>
                    <h3 style={{ 
                      color: '#005293', 
                      marginBottom: '15px',
                      fontSize: '1.4rem',
                      lineHeight: '1.4'
                    }}>
                      {post.title}
                    </h3>
                    
                    <p style={{ 
                      color: '#666', 
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #e0e0e0',
                      paddingTop: '15px'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: '#005293', fontWeight: '600' }}>
                          {post.author}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>
                          {formatDate(post.date)} • {post.readTime}
                        </div>
                      </div>
                      <button 
                        style={{
                          backgroundColor: 'transparent',
                          color: '#005293',
                          border: '2px solid #005293',
                          padding: '8px 20px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#005293';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#005293';
                        }}
                      >
                        Läs Mer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories Filter */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px', textAlign: 'center' }}>
          Kategorier
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px', 
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                backgroundColor: activeCategory === category ? '#005293' : 'white',
                color: activeCategory === category ? 'white' : '#005293',
                border: '2px solid #005293',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = '#005293';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#005293';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#005293', marginBottom: '40px', textAlign: 'center' }}>
          Senaste Inlägg
        </h2>
        <div className="row">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 mb-4">
              <div style={{
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onClick={() => navigate(`/blogg/${post.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}>
                {/* Post Image */}
                <div style={{
                  height: '160px',
                  backgroundColor: '#f8f9fa',
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: '#005293',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </div>
                </div>

                <div style={{ padding: '20px' }}>
                  <h4 style={{ 
                    color: '#005293', 
                    marginBottom: '10px',
                    fontSize: '1.1rem',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h4>
                  
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.5',
                    marginBottom: '15px',
                    fontSize: '0.9rem'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: '#666'
                  }}>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          Prenumerera på vårt nyhetsbrev
        </h3>
        <p style={{ color: '#666', marginBottom: '25px' }}>
          Få de senaste karriärråden och marknadsinsikterna direkt i din inkorg
        </p>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="input-group">
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

      {/* Popular Topics */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#005293', marginBottom: '30px' }}>
          Populära Ämnen
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {['CV-skrivning', 'Intervjuteknik', 'Löneförhandling', 'Karriärbyte', 'Tech-trender', 'Arbetsmarknaden'].map((topic) => (
            <span
              key={topic}
              style={{
                backgroundColor: '#ffcd00',
                color: '#005293',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogg;