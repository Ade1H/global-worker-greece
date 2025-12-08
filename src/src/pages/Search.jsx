import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  const [activeTab, setActiveTab] = useState('jobbarbeiter');
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Exempeldata
  const jobbData = [
    {
      id: 1,
      title: 'Byggnadsarbetare i Spanien',
      company: 'Solbygg AB',
      location: 'Barcelona, Spanien',
      salary: '35.000 - 42.000 SEK/månad',
      type: 'Heltid',
      duration: '12 månader',
      description: 'Söker erfarna byggnadsarbetare för projekt i soliga Barcelona.',
      requirements: ['Erfarenhet bygg', 'EU arbets tillstånd', 'Svenska'],
      benefits: ['Boende ingår', 'Flyg betalt', 'Sjukförsäkring'],
      posted: '2 dagar sedan',
      urgent: true
    },
    {
      id: 2,
      title: 'Hotellpersonal i Grekland',
      company: 'Sun Hotels',
      location: 'Kreta, Grekland',
      salary: '28.000 - 32.000 SEK/månad',
      type: 'Säsongsarbete',
      duration: '6-8 månader',
      description: 'Serviceminded personal till lyxhotell i Kreta.',
      requirements: ['Servicearbete', 'Engelska', 'Utdrag ur belastningsregistret'],
      benefits: ['Gratis boende', 'Måltider', 'Strandaccess'],
      posted: '1 vecka sedan',
      urgent: false
    }
  ];

  const arbetareData = [
    {
      id: 1,
      name: 'Anna Svensson',
      profession: 'Byggnadsarbetare',
      location: 'Stockholm',
      experience: '5 år',
      languages: ['Svenska', 'Engelska'],
      availability: 'Omgående',
      skills: ['Betongarbete', 'Murarbete', 'Timmerarbete']
    },
    {
      id: 2,
      name: 'Erik Johansson',
      profession: 'Restaurangpersonal',
      location: 'Göteborg',
      experience: '3 år',
      languages: ['Svenska', 'Spanska'],
      availability: '1 månad',
      skills: ['Kundservice', 'Kassahantering', 'Matlagning']
    }
  ];

  const foretagData = [
    {
      id: 1,
      name: 'Solbygg AB',
      location: 'Barcelona, Spanien',
      industry: 'Bygg & Anläggning',
      employees: '50-100',
      lookingFor: 'Byggnadsarbetare, Hantverkare',
      description: 'Svenskt byggföretag etablerat i Spanien'
    },
    {
      id: 2,
      name: 'Sun Hotels Group',
      location: 'Kreta, Grekland',
      industry: 'Hotell & Turism',
      employees: '100+',
      lookingFor: 'Receptionister, Städpersonal, Servitörer',
      description: 'Lyxhotellkedja som söker svensk personal'
    }
  ];

  // Filtrering
  const filteredJobbarbeiter = arbetareData.filter(arbetare =>
    arbetare.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    arbetare.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredJobb = jobbData.filter(jobb =>
    jobb.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jobb.location.toLowerCase().includes(location.toLowerCase()) ||
    jobb.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredForetag = foretagData.filter(foretag =>
    foretag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foretag.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid py-4 px-3 px-md-5">
      {/* Sökruta */}
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="search-hero p-4 rounded shadow-sm bg-light">
            <h1 className="mb-4">
              <i className="bi bi-search me-2"></i>
              Sök bland jobb, arbetare och företag
            </h1>
            
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-bold">Vad letar du efter?</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="T.ex. 'byggnadsarbetare', 'hotellpersonal', 'företag i Spanien'"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="fw-bold">Plats</label>
                    <select
                      className="form-select form-select-lg"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="">Alla platser</option>
                      <option value="spanien">Spanien</option>
                      <option value="grekland">Grekland</option>
                      <option value="italien">Italien</option>
                      <option value="portugal">Portugal</option>
                      <option value="cypern">Cypern</option>
                      <option value="malta">Malta</option>
                      <option value="sverige">Sverige</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <button 
                    type="button"
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <i className="bi bi-funnel me-2"></i>
                    Filter
                  </button>
                </div>
              </div>

              {/* Avancerade filter */}
              {showFilters && (
                <div className="row mt-4 g-3">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Kategori</label>
                      <select className="form-select">
                        <option value="alla">Alla kategorier</option>
                        <option value="byggnad">Bygg & Anläggning</option>
                        <option value="hotell">Hotell & Restaurang</option>
                        <option value="jordbruk">Jordbruk</option>
                        <option value="teknik">Teknik & IT</option>
                        <option value="sjukvard">Sjukvård</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Lön (SEK/månad)</label>
                      <input type="range" className="form-range" min="20000" max="50000" step="1000" />
                      <div className="d-flex justify-content-between">
                        <small>20 000</small>
                        <small>50 000+</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-3 d-flex flex-wrap gap-2">
              <span className="badge bg-light text-dark p-2">
                <i className="bi bi-briefcase me-1"></i> {jobbData.length} jobb tillgängliga
              </span>
              <span className="badge bg-light text-dark p-2">
                <i className="bi bi-geo-alt me-1"></i> 8 länder
              </span>
              <span className="badge bg-light text-dark p-2">
                <i className="bi bi-building me-1"></i> {foretagData.length} företag
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Resultat */}
      <div className="row">
        <div className="col-lg-12">
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'jobbarbeiter' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobbarbeiter')}
              >
                <i className="bi bi-people me-2"></i>
                Arbetare ({filteredJobbarbeiter.length})
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'jobb' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobb')}
              >
                <i className="bi bi-briefcase me-2"></i>
                Jobb ({filteredJobb.length})
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'foretag' ? 'active' : ''}`}
                onClick={() => setActiveTab('foretag')}
              >
                <i className="bi bi-building me-2"></i>
                Företag ({filteredForetag.length})
              </button>
            </li>
          </ul>

          {/* Arbetare Tab */}
          {activeTab === 'jobbarbeiter' && (
            <div className="row g-4 mt-3">
              {filteredJobbarbeiter.length === 0 ? (
                <div className="col-12">
                  <div className="text-center py-5">
                    <h4>Inga arbetare hittades</h4>
                    <p>Försök med andra söktermer</p>
                  </div>
                </div>
              ) : (
                filteredJobbarbeiter.map(arbetare => (
                  <div key={arbetare.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                            {arbetare.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="card-title mb-1">{arbetare.name}</h5>
                            <p className="card-subtitle text-muted">{arbetare.profession}</p>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <span className="badge bg-info me-1">
                            <i className="bi bi-geo-alt me-1"></i> {arbetare.location}
                          </span>
                          <span className="badge bg-success">{arbetare.experience} erfarenhet</span>
                        </div>

                        <p className="card-text">
                          <strong>Språk:</strong> {arbetare.languages.join(', ')}
                          <br />
                          <strong>Tillgänglig:</strong> {arbetare.availability}
                        </p>

                        <div className="mb-3">
                          <small className="text-muted">Kompetenser:</small>
                          <div className="d-flex flex-wrap gap-1 mt-1">
                            {arbetare.skills.slice(0, 3).map((skill, idx) => (
                              <span key={idx} className="badge bg-light text-dark">{skill}</span>
                            ))}
                          </div>
                        </div>

                        <Link 
                          to={`/arbeiter/${arbetare.id}`} 
                          className="btn btn-outline-primary w-100"
                        >
                          Visa profil
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Jobb Tab */}
          {activeTab === 'jobb' && (
            <div className="row g-4 mt-3">
              {filteredJobb.length === 0 ? (
                <div className="col-12">
                  <div className="text-center py-5">
                    <h4>Inga jobb hittades</h4>
                    <p>Försök med andra söktermer eller platser</p>
                  </div>
                </div>
              ) : (
                filteredJobb.map(jobb => (
                  <div key={jobb.id} className="col-lg-12">
                    <div className="card shadow-sm mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="card-title mb-1">
                              {jobb.title}
                              {jobb.urgent && (
                                <span className="badge bg-danger ms-2">Akut</span>
                              )}
                            </h5>
                            <p className="card-subtitle text-muted mb-2">
                              {jobb.company} • {jobb.location}
                            </p>
                            
                            <div className="mb-2">
                              <span className="badge bg-primary me-1">{jobb.salary}</span>
                              <span className="badge bg-secondary me-1">{jobb.type}</span>
                              <span className="badge bg-info">{jobb.duration}</span>
                            </div>

                            <p className="card-text mb-3">
                              {jobb.description}
                            </p>

                            <div className="mb-3">
                              <small className="text-muted d-block mb-1">Krav:</small>
                              <div className="d-flex flex-wrap gap-1">
                                {jobb.requirements.slice(0, 3).map((req, idx) => (
                                  <span key={idx} className="badge bg-light text-dark">{req}</span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-3">
                              <small className="text-muted d-block mb-1">Förmåner:</small>
                              <div className="d-flex flex-wrap gap-1">
                                {jobb.benefits.slice(0, 3).map((benefit, idx) => (
                                  <span key={idx} className="badge bg-success">{benefit}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-end">
                            <small className="text-muted d-block mb-2">{jobb.posted}</small>
                            <Link 
                              to={`/jobb/${jobb.id}`} 
                              className="btn btn-primary btn-sm"
                            >
                              Ansök nu
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Företag Tab */}
          {activeTab === 'foretag' && (
            <div className="row g-4 mt-3">
              {filteredForetag.length === 0 ? (
                <div className="col-12">
                  <div className="text-center py-5">
                    <h4>Inga företag hittades</h4>
                    <p>Försök med andra söktermer</p>
                  </div>
                </div>
              ) : (
                filteredForetag.map(foretag => (
                  <div key={foretag.id} className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title mb-3">{foretag.name}</h5>
                        
                        <div className="mb-3">
                          <span className="badge bg-info me-1">
                            <i className="bi bi-geo-alt me-1"></i> {foretag.location}
                          </span>
                          <span className="badge bg-secondary">{foretag.industry}</span>
                        </div>

                        <p className="card-text">
                          <strong>Anställda:</strong> {foretag.employees}
                          <br />
                          <strong>Söker:</strong> {foretag.lookingFor}
                        </p>

                        <p className="card-text small">
                          {foretag.description}
                        </p>

                        <div className="d-flex gap-2">
                          <Link 
                            to={`/foretag/${foretag.id}`} 
                            className="btn btn-outline-primary flex-fill"
                          >
                            Visa företag
                          </Link>
                          <Link 
                            to="/contact" 
                            className="btn btn-primary flex-fill"
                          >
                            Kontakta
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Populära sökningar */}
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Populära sökningar</h5>
              <div className="d-flex flex-wrap gap-2">
                {['byggnadsarbetare spanien', 'hotellpersonal grekland', 'jordbruk italien', 'it-support malta', 'restaurang cypern', 'turism portugal'].map((term, idx) => (
                  <span 
                    key={idx} 
                    className="badge bg-light text-dark p-2"
                    style={{cursor: 'pointer'}}
                    onClick={() => setSearchTerm(term)}
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;