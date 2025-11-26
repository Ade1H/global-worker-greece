import React from 'react';

function HeroSection() {
  return (
    <section className='hero-section bg-primary text-white py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h1 className='display-4 fw-bold'>Global Worker Grekland</h1>
            <p className='lead'>Kopplar samman talangfulla arbetare med företag världen över</p>
            <div className='mt-4'>
              <button className='btn btn-light btn-lg me-3'>Hitta arbetare</button>
              <button className='btn btn-outline-light btn-lg'>Hitta företag</button>
            </div>
          </div>
          <div className='col-lg-6 text-center'>
            <img src='/images/hero1.png' alt='Hjältebild' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
