import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInteractionAnimation } from './hooks/useInteractionAnimation';
import { useMobileOptimization } from './hooks/useMobileOptimization';
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
const FormRedirect = lazy(() => import('./Components/FormRedirect'));

function App() {
  // Disable expensive animations after first user interaction for better INP
  useInteractionAnimation();
  
  // Apply mobile-specific optimizations
  useMobileOptimization();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Suspense fallback={<div className="h-32 bg-[#11181C]" />}>
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
          <>
            <Helmet>
              <title>Downloads | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Download Nimesh Dilhara Kulasooriya resume and access project resources from the official portfolio downloads page."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/downloads" />
            </Helmet>
            <Suspense fallback={<Loading />}>
              <Download />
            </Suspense>
          </>
        } />
        <Route path="/what-i-offer" element={
          <>
            <Helmet>
              <title>What I Offer | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Explore services offered by Nimesh Dilhara Kulasooriya including web development, UI/UX design, and custom software solutions."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/what-i-offer" />
            </Helmet>
            <Navbar />
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <WhatIOffer />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Footer />
            </Suspense>
          </>
        } />
        <Route path="/about" element={
          <>
            <Helmet>
              <title>About Me | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Learn more about Nimesh Dilhara Kulasooriya, a software engineering undergraduate focused on full-stack development and AI."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/about" />
            </Helmet>
            <Navbar />
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Footer />
            </Suspense>
          </>
        } />
        <Route path="/projects" element={
          <>
            <Helmet>
              <title>Projects | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Explore software engineering projects by Nimesh Dilhara Kulasooriya including web applications, UI designs, and full-stack solutions."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/projects" />
            </Helmet>
            <Navbar />
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Footer />
            </Suspense>
          </>
        } />
        <Route path="/contact" element={
          <>
            <Helmet>
              <title>Contact | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Contact Nimesh Dilhara Kulasooriya for collaborations, freelance opportunities, and software engineering projects."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/contact" />
            </Helmet>
            <Navbar />
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-[#11181C]" />}>
              <Footer />
            </Suspense>
          </>
        } />
        <Route path="/form" element={
          <>
            <Helmet>
              <title>Research Survey | Nimesh Dilhara Kulasooriya</title>
              <meta
                name="description"
                content="Join Nimesh Dilhara Kulasooriya's AI dietary systems research survey and share your feedback through the official form page."
              />
              <link rel="canonical" href="https://nimeshdilhara.vercel.app/form" />
            </Helmet>
            <Suspense fallback={<Loading />}>
              <FormRedirect />
            </Suspense>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;