import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaRedo } from 'react-icons/fa';

const FormRedirect = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef(null);

  const handleClose = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1); // Force iframe reload
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#11181C] rounded-2xl shadow-2xl border border-[#F8F9FA]/10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#11181C] border-b border-[#F8F9FA]/10 flex-shrink-0">
          <h2 className="text-xl font-bold text-[#F8F9FA]">Contact Form</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11181C] text-[#F8F9FA]/70 hover:bg-[#34B27B] hover:text-white transition-all duration-300 hover:rotate-180"
              aria-label="Refresh form"
              title="Clear & Refresh Form"
            >
              <FaRedo className="text-sm" />
            </button>
            <button
              onClick={handleClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#11181C] text-[#F8F9FA]/70 hover:bg-red-500 hover:text-white transition-all duration-300 hover:rotate-90"
              aria-label="Close form"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        {/* Form Content Area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#11181C] z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#34B27B]/20 border-t-[#34B27B] rounded-full animate-spin"></div>
                <p className="text-[#F8F9FA]/70">Loading form...</p>
              </div>
            </div>
          )}

          {/* Google Form Iframe */}
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSeL3MSA6v1dolbSjegZHlrGyxxW2VTYio8iadjSpawXPB7o1w/viewform?embedded=true"
            className="w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={() => setIsLoading(false)}
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={handleClose}
        aria-label="Close form"
      ></div>
    </div>
  );
};

export default FormRedirect;
