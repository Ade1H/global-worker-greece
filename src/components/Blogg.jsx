import React, { useState, useEffect } from 'react';
import './Blogg.css';

function Blogg() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Featured article
  const featuredArticle = {
    title: "Arbetsvisum i Grekland: Allt du behöver veta",
    excerpt: "Steg-för-steg guide till arbetsvisumprocessen för EU och icke-EU medborgare som vill arbeta i Grekland.",
    date: "15 Mars 2024"
  };

  // Simple articles list
  const articles = [
    {
      id: 1,
      title: "Bästa branscherna för jobb i Aten",
      excerpt: "Utforska de mest eftertraktade branscherna i huvudstaden.",
      date: "10 Mars 2024"
    },
    {
      id: 2,
      title: "Löner och förmåner i Grekland",
      excerpt: "Vad kan du förvänta dig när du arbetar i Grekland?",
      date: "5 Mars 2024"
    },
    {
      id: 3,
      title: "Arbetskultur i Grekland",
      excerpt: "Lär dig om arbetskultur och etikett på grekiska arbetsplatser.",
      date: "28 Feb 2024"
    },
    {
      id: 4,
      title: "Digital nomad i Grekland",
      excerpt: "Allt om att arbeta på distans från vackra platser.",
      date: "20 Feb 2024"
    }
  ];

  // Simple categories
  const categories = [
    "Karriärråd",
    "Juridik & Visum", 
    "Marknadsanalys",
    "Kultur",
    "Ekonomi",
    "Distansarbete",
    "Success Stories",
    "Processer"
  ];

  return (
    <div className="blogg-container">
      <div className="blogg-content">
       {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
              Global Worker Blogg
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
              Insikter, tips och guider för din karriärresa i Grekland. 
            Få värdefull information om arbetsmarknad, visum och arbetskultur.
            </p>
            
          </div>
        </div>

        {/* Featured Article */}
       {/*  <div className="featured-card">
          <span className="featured-badge">
            Utvald Artikel
          </span>
          <h2 className="featured-title">
            {featuredArticle.title}
          </h2>
          <p className="featured-excerpt">
            {featuredArticle.excerpt}
          </p>
          <div className="article-date">
            <i className="bi bi-calendar"></i>
            {featuredArticle.date}
          </div>
          <a href="#" className="read-more">
            Läs artikel
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
 */}
        {/* Articles Grid */}
        {/* <div className="articles-grid">
          {articles.map((article, index) => (
            <div 
              key={article.id}
              className="article-card"
              style={{ 
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h3 className="article-title">
                {article.title}
              </h3>
              <p className="article-excerpt">
                {article.excerpt}
              </p>
              <div className="article-date">
                <i className="bi bi-calendar"></i>
                {article.date}
              </div>
              <button className="read-button">
                Läs mer
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          ))}
        </div> */}

        {/* Categories Section */}
       {/*  <div className="categories-section">
          <h3 className="categories-title">
            Kategorier
          </h3>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-tag">
                {category}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Blogg;