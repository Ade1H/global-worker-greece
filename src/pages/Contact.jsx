import React from 'react';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';

function Contact() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ color: '#005293', marginBottom: '10px' }}>Kontakta Oss</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Har du frågor eller vill skicka en spontanansökan? Vi hjälper dig gärna!
        </p>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6 mb-4">
          <div style={{
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            height: '100%'
          }}>
            <h3 style={{ color: '#005293', marginBottom: '20px' }}>Kontaktinformation</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ color: '#005293' }}>Adress</h5>
              <p>Global Worker Sverige<br />
              Arbetsgatan 123<br />
              123 45 Stockholm</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ color: '#005293' }}>Telefon</h5>
              <p>+46 8 123 45 67</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ color: '#005293' }}>E-post</h5>
              <p>info@globalworker.se</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ color: '#005293' }}>Öppettider</h5>
              <p>Mån-Fre: 08:00 - 17:00<br />
              Lördag: 10:00 - 14:00<br />
              Söndag: Stängt</p>
            </div>
          </div>
        </div>

        {/* Request Form */}
        <div className="col-md-6 mb-4">
          <RequestForm />
        </div>
      </div>

      {/* Video Recorder Section */}
      <div style={{ marginTop: '40px' }}>
        <VideoRecorder />
      </div>

      {/* Map Section */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: '#005293', marginBottom: '20px', textAlign: 'center' }}>
          Hitta till oss
        </h3>
        <div style={{
          width: '100%',
          height: '400px',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.306440125365!2d18.06325917690926!3d59.32985451124648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c73c762c5!2sStockholm%20City!5e0!3m2!1ssv!2sse!4v1698765432100!5m2!1ssv!2sse" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Global Worker Stockholm Location"
          ></iframe>
        </div>
        
        {/* Map Instructions */}
        <div style={{ 
          marginTop: '15px', 
          textAlign: 'center', 
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>📍 Vi ligger centralt i Stockholm, lätt att nå med kollektivtrafik</p>
        </div>
      </div>

      {/* Transportation Info */}
      <div className="row" style={{ marginTop: '30px' }}>
        <div className="col-md-4 text-center">
          <div style={{ padding: '15px' }}>
            <i className="bi bi-train-front" style={{ fontSize: '2rem', color: '#005293' }}></i>
            <h5 style={{ color: '#005293', margin: '10px 0' }}>Tunnelbana</h5>
            <p>5 min gång från T-Centralen</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div style={{ padding: '15px' }}>
            <i className="bi bi-bus-front" style={{ fontSize: '2rem', color: '#005293' }}></i>
            <h5 style={{ color: '#005293', margin: '10px 0' }}>Buss</h5>
            <p>Busshållplats 100m bort</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div style={{ padding: '15px' }}>
            <i className="bi bi-p-circle" style={{ fontSize: '2rem', color: '#005293' }}></i>
            <h5 style={{ color: '#005293', margin: '10px 0' }}>Parkering</h5>
            <p>Närmsta parkeringshus 200m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;