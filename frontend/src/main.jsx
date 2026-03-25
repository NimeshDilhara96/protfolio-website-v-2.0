import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (import.meta.env.PROD) {
  const loadTelemetry = () => {
    Promise.all([
      import('@vercel/analytics/react'),
      import('@vercel/speed-insights/react'),
    ]).then(([analyticsModule, speedInsightsModule]) => {
      const Analytics = analyticsModule.Analytics
      const SpeedInsights = speedInsightsModule.SpeedInsights

      root.render(
        <StrictMode>
          <App />
          <Analytics />
          <SpeedInsights />
        </StrictMode>,
      )
    }).catch(() => {
      // Telemetry load failures should never block app interactivity.
    })
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadTelemetry, { timeout: 3000 })
  } else {
    window.setTimeout(loadTelemetry, 1500)
  }
}
