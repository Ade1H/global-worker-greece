import React, { useState, useEffect } from 'react';
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
import ChatBot from './components/ChatBot';
import Tjanster from './components/Tjanster';
import Karriar from './components/Karriar';
import About from './components/About';
import Team from './components/Team';
import Blogg from './components/Blogg';
import Rcomend from './components/Rcomend';
import Event from './components/Event';
import Res from './components/Res';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSidebarToggle = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', position: 'relative' }}>
        <Sidebar onToggle={handleSidebarToggle} />
        <div style={{ 
          flex: 1, 
          marginLeft: isMobile ? '0' : (sidebarExpanded ? '220px' : '60px'),
          transition: 'margin-left 0.3s ease',
          minHeight: '100vh',
          width: isMobile ? '100%' : (sidebarExpanded ? 'calc(100% - 220px)' : 'calc(100% - 60px)'),
          position: 'relative',
          zIndex: 1
        }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/tjanster" element={<Tjanster />} />
            <Route path="/karriar" element={<Karriar />} />
            <Route path="/blogg" element={<Blogg />} />
            <Route path="/rekommendationer" element={<Rcomend />} />
            <Route path="/evenemang" element={<Event />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/About" element={<About />} />
            <Route path="/resurser" element={<Res />} />
            <Route path='/workers' element={<Workers />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/search' element={<Search />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
          
          {/* Add ChatBot component */}
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;