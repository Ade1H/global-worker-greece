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
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      cv: null,
      message: ''
    });
  };

  return (
    <div className='request-form card'>
      <div className='card-body'>
        <h5 className='card-title'>Ladda upp ditt CV</h5>
        
        {error && (
          <div className='alert alert-danger'>
            {error}
          </div>
        )}
        
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Namn *</label>
              <input
                type='text'
                className='form-control'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>E-post *</label>
              <input
                type='email'
                className='form-control'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Telefon</label>
              <input
                type='tel'
                className='form-control'
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder='+46...'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>CV Uppladdning *</label>
              <input
                type='file'
                className='form-control'
                accept='.pdf,.doc,.docx'
                onChange={handleFileChange}
                required
              />
              <small className='text-muted'>Accepterade format: PDF, DOC, DOCX (max 10MB)</small>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meddelande</label>
              <textarea
                className='form-control'
                rows='3'
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder='Berätta lite om dig själv och dina kompetenser...'
              ></textarea>
            </div>
            <button 
              type='submit' 
              className='btn btn-primary'
              disabled={submitting}
            >
              {submitting ? 'Skickar CV...' : 'Skicka CV till Johan'}
            </button>
          </form>
        ) : (
          <div className='alert alert-success'>
            <h6>✅ Tack för ditt CV!</h6>
            <p><strong>Ditt CV har skickats till Johan Karlsson!</strong></p>
            
            <div className='mb-3'>
              <strong>Namn:</strong> {formData.name}<br />
              <strong>E-post:</strong> {formData.email}<br />
              <strong>Telefon:</strong> {formData.phone || 'Ej angivet'}<br />
              <strong>CV-fil:</strong> {formData.cv ? formData.cv.name : 'Ingen fil uppladdad'}<br />
              <strong>Meddelande:</strong> {formData.message}
            </div>
            
            <p className='mb-3'>
              <strong>Nästa steg:</strong><br />
              Johan Karlsson kommer kontakta dig på {formData.email} inom kort.
            </p>
            
            <button 
              className='btn btn-secondary'
              onClick={resetForm}
            >
              Skicka ett till CV
            </button>
          </div>
        )}
        
        <div className='mt-3'>
          <small className='text-muted'>
            CV:t skickas direkt till: <strong>Johan.karlsson@globalworker.nu</strong>
          </small>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
