import { useEffect } from 'react';

export function useMobileOptimization() {
  useEffect(() => {
    // Detect if on mobile and apply aggressive optimizations
    const isMobile = window.innerWidth < 768 || navigator.userAgent.includes('Mobile');
    
    if (isMobile) {
      // Force GPU acceleration for better scroll performance
      document.documentElement.style.willChange = 'auto';
      
      // Reduce motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduce-motion');
      }

      // For slower mobile devices, reduce animation frame rate
      const ua = navigator.userAgent;
      const isLowEndDevice = /Android/.test(ua) && 
        !/Chrome|Firefox|Edge/.test(ua);
      
      if (isLowEndDevice) {
        // Add class to allow CSS to reduce animations on low-end devices
        document.documentElement.classList.add('low-end-device');
      }
    }
  }, []);
}
