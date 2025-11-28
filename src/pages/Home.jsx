import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';
import CompanyMap from '../components/CompanyMap';
import WorkerMap from '../components/WorkerMap';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Video och CV Sektion */}
      <div className='container py-4'>
        <h2 className='text-center mb-4'>Kom igång</h2>
        <div className='row'>
          <div className='col-lg-6 mb-4'>
            <VideoRecorder />
          </div>
          <div className='col-lg-6 mb-4'>
            <RequestForm />
          </div>
        </div>
      </div>

      {/* Kartsektion - BOTH MAPS WITH IDENTICAL STYLING */}
      <div className='container py-4'>
        <h2 className='text-center mb-4'>Global täckning</h2>
        <div className='row'>
          <div className='col-lg-6 mb-4'>
            <div className='card h-100'>
              <div className='card-header bg-primary text-white'>
                <h5 className='card-title mb-0'>
                  <i className="bi bi-building me-2"></i>
                  Företag i 8 länder
                </h5>
              </div>
              <div className='card-body p-0'>
                <CompanyMap />
              </div>
              <div className='card-footer text-muted'>
                <small>Global Worker kontor världen över</small>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-4'>
            <div className='card h-100'>
              <div className='card-header bg-success text-white'>
                <h5 className='card-title mb-0'>
                  <i className="bi bi-people me-2"></i>
                  Arbetare världen över
                </h5>
              </div>
              <div className='card-body p-0'>
                <WorkerMap />
              </div>
              <div className='card-footer text-muted'>
                <small>Talangfulla arbetare redo för nya uppdrag</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;