import React, { useState, useEffect, useRef } from 'react';
import './RequestForm.css';

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
  const [backendUrl, setBackendUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // FIXED: Use your actual Render backend URL
    const url = 'https://global-worker-backend.onrender.com';
    setBackendUrl(url);
    console.log(`Backend URL satt till: ${url}`);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Manuell validering av CV-fil
    if (!formData.cv) {
      setError('Du måste ladda upp en CV-fil');
      setSubmitting(false);
      return;
    }

    // Validera namn och email
    if (!formData.name.trim()) {
      setError('Namn är obligatoriskt');
      setSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setError('E-post är obligatoriskt');
      setSubmitting(false);
      return;
    }

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('message', formData.message);
    submitData.append('cv', formData.cv);

    try {
      console.log('Skickar CV till:', `${backendUrl}/api/send-cv`);
      
      const response = await fetch(`${backendUrl}/api/send-cv`, {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();
      console.log('Svar från server:', result);

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Något gick fel vid sändning');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Kunde inte ansluta till servern på ${backendUrl}. Kontrollera att backend körs.`);
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
        e.target.value = ''; // Rensa input
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 
                           'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError('Ogiltigt filformat. Endast PDF, DOC och DOCX är tillåtna.');
        e.target.value = ''; // Rensa input
        return;
      }
      
      setFormData({ ...formData, cv: file });
      setFileName(file.name);
      setError('');
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, cv: null });
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="request-form-container">
      {/* Hero Section */}
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
        {/* Form Card */}
        <div className={`form-card ${isVisible ? 'visible' : ''}`}>
          {/* Top Color Bar */}
          <div className="form-card-bar"></div>
          
          <div className="form-card-content">
            {/* Header */}
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
              /* Success State */
              <div className="success-state">
                <div className="success-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
                
                <h3 className="success-title">Tack för ditt CV!</h3>
                
                <p className="success-description">
                  Ditt CV har skickats till <strong>Johan Karlsson</strong> och han kommer kontakta dig på{' '}
                  <strong className="success-email">{formData.email}</strong> inom kort.
                </p>
                
                {/* Summary Card */}
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
                {/* Error Message */}
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
                <form onSubmit={handleSubmit} noValidate>
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
                          onClick={handleFileClick}
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
                            ref={fileInputRef}
                            id='file-input'
                            type='file'
                            accept='.pdf,.doc,.docx'
                            onChange={handleFileChange}
                            className="file-input"
                            style={{ display: 'none' }}
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

                {/* Footer Note */}
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

        {/* Stats Bar */}
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
    </div>
  );
}

export default RequestForm;