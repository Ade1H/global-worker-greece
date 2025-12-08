import React, { useState, useEffect } from 'react';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cv: null,
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('message', formData.message);
    
    if (formData.cv) {
      submitData.append('cv', formData.cv);
    }

    try {
      const response = await fetch('http://localhost:5000/api/send-cv', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Något gick fel vid sändning');
      }
    } catch (err) {
      setError('Kunde inte ansluta till servern. Kontrollera att backend körs på port 5000.');
      console.error('Error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Filen är för stor. Maximal storlek är 10MB.');
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 
                           'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError('Ogiltigt filformat. Endast PDF, DOC och DOCX är tillåtna.');
        return;
      }
      
      setFormData({ ...formData, cv: file });
      setFileName(file.name);
      setError('');
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
    setFileName('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      cv: null,
      message: ''
    });
  };

  const removeFile = () => {
    setFormData({ ...formData, cv: null });
    setFileName('');
  };

  // CSS Variables matching Tjanster component
  const styles = {
    '--primary-navy': '#0a1f44',
    '--primary-navy-light': '#1a2f5a',
    '--primary-navy-dark': '#05132b',
    '--primary-blue': '#2c5282',
    '--primary-blue-light': '#4299e1',
    '--accent-blue': '#3182ce',
    '--accent-gold': '#d69e2e',
    '--navy-50': '#f0f4f8',
    '--navy-100': '#d9e2ec',
    '--navy-200': '#bcccdc',
    '--navy-300': '#9fb3c8',
    '--navy-400': '#829ab1',
    '--navy-500': '#627d98',
    '--navy-600': '#486581',
    '--navy-700': '#334e68',
    '--navy-800': '#243b53',
    '--navy-900': '#102a43',
    '--radius-sm': '8px',
    '--radius-md': '12px',
    '--radius-lg': '16px',
    '--radius-xl': '20px',
    '--shadow-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
    '--shadow-md': '0 4px 20px rgba(0, 0, 0, 0.15)',
    '--shadow-lg': '0 10px 40px rgba(0, 0, 0, 0.2)',
    '--shadow-xl': '0 15px 50px rgba(0, 0, 0, 0.25)',
    '--transition-base': '300ms ease'
  };

  return (
    <div className="request-form-container" style={styles}>
      {/* Hero Section - EXAKT SAMMA SOM TJANSTER */}
      <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
            CV-ansökan
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
            Skicka in ditt CV och video presentation för att komma i kontakt med vårt rekryteringsteam
          </p>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="form-wrapper">
        {/* Form Card - EXAKT SAMMA STIL SOM JOBBKORT */}
        <div className={`form-card ${isVisible ? 'visible' : ''}`}>
          {/* Top Color Bar - exakt som jobbkort */}
          <div className="form-card-bar"></div>
          
          <div className="form-card-content">
            {/* Header - samma stil */}
            <div className="form-header">
              <div className="form-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <div>
                <h3 className="form-title">Digital CV-ansökan</h3>
                <div className="form-subtitle">
                  <i className="bi bi-info-circle"></i>
                  <span>Fyll i formuläret för att skicka ditt CV</span>
                </div>
              </div>
            </div>

            {submitted ? (
              /* Success State - EXAKT SAMMA SOM SPONTANANSÖKAN CTA */
              <div className="success-state">
                <div className="success-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
                
                <h3 className="success-title">Tack för ditt CV!</h3>
                
                <p className="success-description">
                  Ditt CV har skickats till <strong>Johan Karlsson</strong> och han kommer kontakta dig på{' '}
                  <strong className="success-email">{formData.email}</strong> inom kort.
                </p>
                
                {/* Summary Card - med samma stil */}
                <div className="summary-card">
                  <h4 className="summary-title">
                    <i className="bi bi-file-text"></i>
                    Uppgifter skickade
                  </h4>
                  
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Namn:</span>
                      <span className="summary-value">{formData.name}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">E-post:</span>
                      <span className="summary-value email">{formData.email}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Telefon:</span>
                      <span className="summary-value">
                        {formData.phone || 'Ej angivet'}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">CV-fil:</span>
                      <span className="summary-value">
                        {fileName || 'Ingen fil'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={resetForm}
                  className="success-button"
                >
                  <i className="bi bi-plus-circle"></i>
                  Skicka ett till CV
                </button>
              </div>
            ) : (
              <>
                {/* Error Message - med samma stil */}
                {error && (
                  <div className="error-message">
                    <div className="error-header">
                      <i className="bi bi-exclamation-triangle"></i>
                      <strong>Åtgärda följande:</strong>
                    </div>
                    <p>{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    {/* Name Field */}
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-person"></i>
                        Namn <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type='text'
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder='Ditt fullständiga namn'
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-envelope"></i>
                        E-post <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type='email'
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder='din@epost.se'
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-telephone"></i>
                        Telefon
                      </label>
                      <div className="input-wrapper">
                        <input
                          type='tel'
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder='+46 70 123 45 67'
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-cloud-arrow-up"></i>
                        CV Uppladdning <span className="required">*</span>
                      </label>
                      
                      {!fileName ? (
                        <div 
                          className="file-dropzone"
                          onClick={() => document.getElementById('file-input').click()}
                        >
                          <div className="dropzone-icon">
                            <i className="bi bi-cloud-arrow-up"></i>
                          </div>
                          <p className="dropzone-title">
                            <strong>Klicka för att ladda upp CV</strong>
                          </p>
                          <p className="dropzone-subtitle">
                            PDF, DOC, DOCX (max 10MB)
                          </p>
                          <input
                            id='file-input'
                            type='file'
                            accept='.pdf,.doc,.docx'
                            onChange={handleFileChange}
                            required
                            className="file-input"
                          />
                        </div>
                      ) : (
                        <div className="file-preview">
                          <div className="file-info">
                            <div className="file-icon">
                              <i className="bi bi-file-earmark-text"></i>
                            </div>
                            <div className="file-details">
                              <p className="file-name">{fileName}</p>
                              <p className="file-size">
                                {(formData.cv?.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type='button'
                            onClick={removeFile}
                            className="remove-file"
                          >
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="form-group">
                      <label className="form-label">
                        <i className="bi bi-chat-left-text"></i>
                        Meddelande
                      </label>
                      <div className="input-wrapper">
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows='4'
                          placeholder='Berätta lite om dig själv, dina kompetenser och vad du söker...'
                          className="form-textarea"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                      <button 
                        type='submit' 
                        disabled={submitting}
                        className="submit-button"
                      >
                        {submitting ? (
                          <>
                            <div className="submit-spinner"></div>
                            Skickar CV...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-check"></i>
                            Skicka CV till Johan
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                {/* Footer Note - samma stil som tips */}
                <div className="form-footer">
                  <div className="footer-security">
                    <i className="bi bi-shield-check"></i>
                    <span>Dina uppgifter är säkra med oss</span>
                  </div>
                  <p className="footer-note">
                    CV:t skickas direkt till: <strong>Johan.karlsson@globalworker.nu</strong>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Stats Bar - EXAKT SAMMA SOM I TJANSTER */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <div className="stat-number">PDF/DOC</div>
            <div className="stat-label">Filformat</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-shield-lock"></i>
            </div>
            <div className="stat-number">SSL</div>
            <div className="stat-label">Säkerhet</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-clock-history"></i>
            </div>
            <div className="stat-number">48h</div>
            <div className="stat-label">Respons</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-check-circle"></i>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Säker</div>
          </div>
        </div>
      </div>

      {/* Inline CSS Styles matching Tjanster component */}
      <style jsx>{`
        .request-form-container {
       min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  padding: 2rem 1rem;
        }

        /* Hero Section - EXAKT SAMMA SOM TJANSTER */
        .hero-section {
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-light) 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          margin-bottom: 3rem;
          border-radius: var(--radius-xl);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .hero-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(66, 153, 225, 0.15) 0%, transparent 50%);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: white;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .hero-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out 0.2s;
        }

        .hero-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Form Wrapper */
        .form-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Form Card - EXAKT SAMMA STIL SOM JOBBKORT */
        .form-card {
          background: white;
          border-radius: var(--radius-xl);
          border: 2px solid var(--navy-200);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          transition: all var(--transition-base);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          margin-bottom: 3rem;
        }

        .form-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .form-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
          border-color: var(--accent-blue);
        }

        .form-card-bar {
          height: 6px;
          width: 100%;
          background: linear-gradient(90deg, var(--primary-navy), var(--accent-blue));
        }

        .form-card-content {
          padding: 2.5rem;
        }

        @media (max-width: 768px) {
          .form-card-content {
            padding: 1.5rem;
          }
        }

        /* Form Header - samma stil som jobbkort header */
        .form-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .form-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.5rem;
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--navy-700) 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(10, 31, 68, 0.2);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy-900);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .form-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--navy-600);
        }

        .form-subtitle i {
          font-size: 0.95rem;
          color: var(--accent-blue);
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          gap: 1.5rem;
        }

        /* Form Groups */
        .form-group {
          margin-bottom: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--navy-700);
          margin-bottom: 0.75rem;
        }

        .form-label i {
          font-size: 1rem;
          color: var(--accent-blue);
        }

        .required {
          color: #ef4444;
        }

        /* Input Styles - samma stil */
        .input-wrapper {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border-radius: var(--radius-md);
          border: 2px solid var(--navy-200);
          background: white;
          font-size: 0.95rem;
          color: var(--navy-800);
          transition: all var(--transition-fast);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--navy-400);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
          line-height: 1.5;
        }

        /* File Upload Styles */
        .file-dropzone {
          border: 2px dashed var(--navy-300);
          border-radius: var(--radius-md);
          padding: 2rem 1rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          background: var(--navy-50);
        }

        .file-dropzone:hover {
          border-color: var(--accent-blue);
          background: var(--navy-100);
        }

        .dropzone-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: var(--navy-100);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: var(--accent-blue);
          font-size: 1.25rem;
        }

        .dropzone-title {
          margin: 0 0 0.25rem 0;
          color: var(--navy-800);
          font-size: 1rem;
        }

        .dropzone-subtitle {
          margin: 0;
          color: var(--navy-600);
          font-size: 0.875rem;
        }

        .file-input {
          display: none;
        }

        .file-preview {
          background: linear-gradient(135deg, var(--navy-50) 0%, var(--navy-100) 100%);
          border: 1px solid var(--navy-200);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .file-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: var(--radius-sm);
          background: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
        }

        .file-details p {
          margin: 0;
        }

        .file-name {
          font-weight: 500;
          color: var(--navy-800);
          font-size: 0.95rem;
        }

        .file-size {
          font-size: 0.8rem;
          color: var(--navy-600);
        }

        .remove-file {
          background: transparent;
          border: none;
          color: #ef4444;
          cursor: pointer;
          font-size: 1.25rem;
          padding: 0.25rem;
          transition: all var(--transition-fast);
        }

        .remove-file:hover {
          transform: scale(1.1);
        }

        /* Error Message - med samma stil */
        .error-message {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          border: 1px solid #fecaca;
          color: #991b1b;
          padding: 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }

        .error-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .error-header i {
          font-size: 1rem;
        }

        .error-message p {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Submit Button - samma stil som jobbkort knappar */
        .form-actions {
          margin-top: 1rem;
        }

        .submit-button {
          background: linear-gradient(to right, var(--primary-navy), var(--navy-700));
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          width: 100%;
          font-weight: 600;
          font-size: 1rem;
          transition: all var(--transition-base);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 12px rgba(10, 31, 68, 0.2);
        }

        .submit-button:hover:not(:disabled) {
          background: linear-gradient(to right, var(--navy-700), var(--accent-blue));
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(10, 31, 68, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        /* Form Footer - samma stil som tips */
        .form-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--navy-200);
        }

        .footer-security {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--navy-600);
          font-size: 0.9rem;
        }

        .footer-security i {
          color: #10b981;
        }

        .footer-note {
          margin: 0;
          font-size: 0.875rem;
          color: var(--navy-600);
          line-height: 1.4;
        }

        /* Success State - EXAKT SAMMA SOM SPONTANANSÖKAN CTA */
        .success-state {
          text-align: center;
        }

        .success-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #34d399);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 1.75rem;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--navy-900);
          margin-bottom: 1rem;
        }

        .success-description {
          color: var(--navy-600);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .success-email {
          color: var(--accent-blue);
          font-weight: 600;
        }

        /* Summary Card - med samma stil */
        .summary-card {
          background: linear-gradient(135deg, var(--navy-50) 0%, var(--navy-100) 100%);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 2rem;
          border: 1px solid var(--navy-200);
          text-align: left;
        }

        .summary-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--navy-800);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .summary-title i {
          color: var(--accent-blue);
        }

        .summary-grid {
          display: grid;
          gap: 0.75rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-label {
          color: var(--navy-600);
          font-size: 0.9rem;
        }

        .summary-value {
          font-weight: 500;
          color: var(--navy-800);
          font-size: 0.9rem;
        }

        .summary-value.email {
          color: var(--accent-blue);
        }

        /* Success Button */
        .success-button {
          background: linear-gradient(135deg, var(--accent-blue), var(--primary-blue-light));
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-base);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
        }

        .success-button:hover {
          background: linear-gradient(135deg, var(--primary-blue-light), var(--accent-blue));
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(49, 130, 206, 0.4);
        }

        /* Stats Bar - EXAKT SAMMA SOM I TJANSTER */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          background: linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 100%);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--navy-700);
          color: white;
        }

        @media (min-width: 640px) {
          .stats-bar {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          text-align: center;
        }

        .stat-icon-wrapper {
          width: 3rem;
          height: 3rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          font-size: 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          color: var(--primary-blue-light);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.25rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Animations - EXAKT SAMMA */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .request-form-container {
            padding: 1.5rem 1rem;
          }
          
          .hero-section {
            padding: 3rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
          }
          
          .stats-bar {
            padding: 2rem;
          }
          
          .form-card-content {
            padding: 1.5rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .hero-section,
          .hero-title,
          .hero-subtitle,
          .form-card {
            opacity: 1;
            transform: none;
          }
        }

        /* Focus states */
        .form-input:focus,
        .form-textarea:focus,
        .submit-button:focus,
        .success-button:focus {
          outline: 2px solid var(--accent-blue);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default RequestForm;