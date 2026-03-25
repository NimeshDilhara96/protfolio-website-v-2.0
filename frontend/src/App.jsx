import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useInteractionAnimation } from './hooks/useInteractionAnimation';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Loading from './Components/Loading';
import FormRedirect from './Components/FormRedirect';

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
  // Disable expensive animations after first user interaction for better INP
  useInteractionAnimation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Education />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Technologies />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <WhatIOffer />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Stats />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <ClientReviews />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Footer />
            </Suspense>
          </>
        } />
        <Route path="/downloads" element={
          <Suspense fallback={<Loading />}>
            <Download />
          </Suspense>
        } />
        <Route path="/form" element={
          <Suspense fallback={<Loading />}>
            <FormRedirect />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;