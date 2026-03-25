import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DeferredTelemetry from './Components/DeferredTelemetry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DeferredTelemetry />
  </StrictMode>,
)
