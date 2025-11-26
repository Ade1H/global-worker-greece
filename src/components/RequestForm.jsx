import React, { useState } from 'react';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cv: null,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulär skickat:', formData);
    // Hantera formulärinsändning här
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  return (
    <div className='request-form card'>
      <div className='card-body'>
        <h5 className='card-title'>Ladda upp ditt CV</h5>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Namn</label>
            <input 
              type='text' 
              className='form-control'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required 
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>E-post</label>
            <input 
              type='email' 
              className='form-control'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required 
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>CV Uppladdning</label>
            <input 
              type='file' 
              className='form-control'
              accept='.pdf,.doc,.docx'
              onChange={handleFileChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Meddelande</label>
            <textarea 
              className='form-control'
              rows='3'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Skicka</button>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
