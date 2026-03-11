import React, { useEffect } from 'react';
import Loading from './Loading';

const FormRedirect = () => {
  useEffect(() => {
    // Open form in new tab (better for mobile grid questions)
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeL3MSA6v1dolbSjegZHlrGyxxW2VTYio8iadjSpawXPB7o1w/viewform', '_blank');
    
    // Redirect back to home after opening the form
    window.location.href = '/';
  }, []);

  // Show loading while redirecting
  return <Loading />;
};

export default FormRedirect;
