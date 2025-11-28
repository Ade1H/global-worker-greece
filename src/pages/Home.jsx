import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoRecorder from '../components/VideoRecorder';
import RequestForm from '../components/RequestForm';
import CompanyMap from '../components/CompanyMap';
import WorkerMap from '../components/WorkerMap';

// Exempeldata för kartor
const SAMPLE_COMPANIES = [
  { id: 'c1', name: 'Tech Corp', lat: 57.7089, lng: 11.9746, country: 'Sverige', city: 'Göteborg', industry: 'Teknik' },
  { id: 'c2', name: 'Bygg AB', lat: 37.9838, lng: 23.7275, country: 'Grekland', city: 'Aten', industry: 'Bygg' },
];

const SAMPLE_WORKERS = [
  { id: 'w1', name: 'Ava Johansson', lat: 57.7089, lng: 11.9746, country: 'Sverige', city: 'Göteborg', skills: ['Städning', 'Flytt'], availability: 'Heltid' },
  { id: 'w2', name: 'Yannis Papadopoulos', lat: 37.9838, lng: 23.7275, country: 'Grekland', city: 'Aten', skills: ['El', 'Hantverkare'], availability: 'Deltid' },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Video och CV Sektion - VIKTIGT: Denna sektion måste finnas */}
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

      {/* Kartsektion */}
      <div className='container py-4'>
        <h2 className='text-center mb-4'>Global täckning</h2>
        <div className='row'>
          <div className='col-lg-6 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Företag världen över</h5>
                <div style={{ height: '300px' }}>
                  <CompanyMap 
                    companies={SAMPLE_COMPANIES}
                    initialCenter={[40, 15]}
                    initialZoom={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Arbetare världen över</h5>
                <div style={{ height: '300px' }}>
                  <WorkerMap 
                    workers={SAMPLE_WORKERS}
                    initialCenter={[40, 15]}
                    initialZoom={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
