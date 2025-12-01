import React, { useState } from 'react';

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

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      height: '100%'
    }}>
      <div style={{ padding: '2rem' }}>
        {submitted ? (
          <div style={{
            textAlign: 'center',
            padding: '1rem 0'
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'white',
              fontSize: '2rem'
            }}>
              ✓
            </div>
            
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Tack för ditt CV!
            </h3>
            
            <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Ditt CV har skickats till <strong>Johan Karlsson</strong> och han kommer kontakta dig på{' '}
              <strong>{formData.email}</strong> inom kort.
            </p>
            
            {/* Summary Card */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '2rem',
              border: '1px solid #e5e7eb',
              textAlign: 'left'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="bi bi-file-text" style={{ color: '#3b82f6' }}></i>
                Uppgifter skickade
              </h4>
              
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6b7280' }}>Namn:</span>
                  <span style={{ fontWeight: '500', color: '#111827' }}>{formData.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6b7280' }}>E-post:</span>
                  <span style={{ fontWeight: '500', color: '#3b82f6' }}>{formData.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6b7280' }}>Telefon:</span>
                  <span style={{ fontWeight: '500', color: '#111827' }}>
                    {formData.phone || 'Ej angivet'}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6b7280' }}>CV-fil:</span>
                  <span style={{ fontWeight: '500', color: '#111827' }}>
                    {fileName || 'Ingen fil'}
                  </span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={resetForm}
              style={{
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <i className="bi bi-plus-circle"></i>
              Skicka ett till CV
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.25rem'
              }}>
                📄
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0
                }}>
                  Digital CV-ansökan
                </h3>
                <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                  Fyll i formuläret för att skicka ditt CV
                </p>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: '#fee2e2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <i className="bi bi-exclamation-triangle"></i>
                  <strong>Åtgärda följande:</strong>
                </div>
                <p style={{ margin: 0 }}>{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gap: '1.25rem' }}>
                {/* Name Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Namn <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i className="bi bi-person" style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }}></i>
                    <input
                      type='text'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder='Ditt fullständiga namn'
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 3rem',
                        borderRadius: '10px',
                        border: '1px solid #d1d5db',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    E-post <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i className="bi bi-envelope" style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }}></i>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder='din@epost.se'
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 3rem',
                        borderRadius: '10px',
                        border: '1px solid #d1d5db',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Telefon
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i className="bi bi-telephone" style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }}></i>
                    <input
                      type='tel'
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder='+46 70 123 45 67'
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 3rem',
                        borderRadius: '10px',
                        border: '1px solid #d1d5db',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    CV Uppladdning <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  
                  {!fileName ? (
                    <div style={{
                      border: '2px dashed #d1d5db',
                      borderRadius: '10px',
                      padding: '2rem 1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: '#f9fafb'
                    }}
                    onClick={() => document.getElementById('file-input').click()}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                    >
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        background: '#e0e7ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                        color: '#4f46e5'
                      }}>
                        <i className="bi bi-cloud-arrow-up" style={{ fontSize: '1.25rem' }}></i>
                      </div>
                      <p style={{ margin: '0 0 0.25rem 0', color: '#111827' }}>
                        <strong>Klicka för att ladda upp CV</strong>
                      </p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.85rem' }}>
                        PDF, DOC, DOCX (max 10MB)
                      </p>
                      <input
                        id='file-input'
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileChange}
                        required
                        style={{ display: 'none' }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      background: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      borderRadius: '10px',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '8px',
                          background: '#3b82f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <div>
                          <p style={{ margin: 0, fontWeight: '500', color: '#111827' }}>
                            {fileName}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>
                            {(formData.cv?.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type='button'
                        onClick={removeFile}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                          padding: '0.5rem'
                        }}
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Meddelande
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i className="bi bi-chat-left-text" style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '1rem',
                      color: '#9ca3af'
                    }}></i>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows='4'
                      placeholder='Berätta lite om dig själv, dina kompetenser och vad du söker...'
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 3rem',
                        borderRadius: '10px',
                        border: '1px solid #d1d5db',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '0.5rem' }}>
                  <button 
                    type='submit' 
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: submitting 
                        ? '#9ca3af' 
                        : 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {submitting ? (
                      <>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid white',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
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
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e5e7eb',
              fontSize: '0.85rem',
              color: '#6b7280'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <i className="bi bi-shield-check" style={{ color: '#10b981' }}></i>
                <span>Dina uppgifter är säkra med oss</span>
              </div>
              <p style={{ margin: 0, lineHeight: '1.4' }}>
                CV:t skickas direkt till: <strong>Johan.karlsson@globalworker.nu</strong>
              </p>
            </div>
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
}

export default RequestForm;