import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Loading from './Components/Loading';

// Lazy load components for better performance
const About = lazy(() => import('./Components/about'));
const WhatIOffer = lazy(() => import('./Components/WhatIOffer'));
const Education = lazy(() => import('./Components/Education'));
const Technologies = lazy(() => import('./Components/Technologies'));
const Projects = lazy(() => import('./Components/Projects'));
const Stats = lazy(() => import('./Components/Stats'));
const ClientReviews = lazy(() => import('./Components/ClientReviews'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));
const Download = lazy(() => import('./Components/Download'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Education />
              <Technologies />
              <Projects />
              <WhatIOffer />
              <Stats />
              <ClientReviews />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/downloads" element={<Download />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;