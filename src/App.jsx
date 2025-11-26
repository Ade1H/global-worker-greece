import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workers from './pages/Workers';
import Companies from './pages/Companies';
import Search from './pages/Search';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='d-flex flex-column flex-md-row'>
        <Sidebar />
        <div className='flex-grow-1' style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workers' element={<Workers />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/search' element={<Search />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
