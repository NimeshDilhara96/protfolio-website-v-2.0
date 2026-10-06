import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInteractionAnimation } from './hooks/useInteractionAnimation';
import { useMobileOptimization } from './hooks/useMobileOptimization';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Loading from './Components/Loading';
import SectionSkeleton from './Components/common/SectionSkeleton';

// Lazy load components for better performance
const About = lazy(() => import('./Components/about'));
const WhatIOffer = lazy(() => import('./Components/WhatIOffer'));
const Technologies = lazy(() => import('./Components/Technologies'));
const Projects = lazy(() => import('./Components/Projects'));
const Stats = lazy(() => import('./Components/Stats'));
const ClientReviews = lazy(() => import('./Components/ClientReviews'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));
const Download = lazy(() => import('./Components/Download'));
const FormRedirect = lazy(() => import('./Components/FormRedirect'));
const Blog = lazy(() => import('./Components/blog'));

// Preview components for homepage (no duplicate content)
const AboutPreview = lazy(() => import('./Components/AboutPreview'));
const ProjectsPreview = lazy(() => import('./Components/ProjectsPreview'));
const WhatIOfferPreview = lazy(() => import('./Components/WhatIOfferPreview'));
const ContactPreview = lazy(() => import('./Components/ContactPreview'));
const ProjectsBento = lazy(() => import('./Components/ProjectsBento'));
const SkillsMarquee = lazy(() => import('./Components/SkillsMarquee'));
const HowIWork = lazy(() => import('./Components/HowIWork'));

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
            <Suspense fallback={<SectionSkeleton height="h-32" />}>
              <SkillsMarquee />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ProjectsPreview />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ProjectsBento />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <WhatIOfferPreview />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <HowIWork />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <AboutPreview />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ClientReviews />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ContactPreview />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
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
            <Suspense fallback={<SectionSkeleton />}>
              <WhatIOffer />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <HowIWork />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
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
            <Suspense fallback={<SectionSkeleton />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Technologies />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
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
            <Suspense fallback={<SectionSkeleton />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
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
            <Suspense fallback={<SectionSkeleton />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
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
        <Route path="/blog" element={
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;