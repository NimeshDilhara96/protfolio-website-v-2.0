import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Stats from './Components/Stats';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Download from './Components/Download'; // Add this import
import './Components/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Education />
            <Technologies />
            <Projects />
            <Stats />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/downloads" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;