import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function DeferredTelemetry() {
  const [TelemetryComponents, setTelemetryComponents] = useState(null)

  useEffect(() => {
    if (!import.meta.env.PROD) return

    const loadDeferred = () => {
      Promise.all([
        import('@vercel/analytics/react'),
        import('@vercel/speed-insights/react'),
      ])
        .then(([analyticsModule, speedInsightsModule]) => {
          setTelemetryComponents({
            Analytics: analyticsModule.Analytics,
            SpeedInsights: speedInsightsModule.SpeedInsights,
          })
        })
        .catch(() => {
          // Telemetry failures should not affect app rendering.
        })

      // Load third-party tracking script after idle to reduce unused JS on initial load.
      window.TRACKING_WEBSITE_ID = 'ed9a639d-a4be-4b7c-90c4-f5adb2df3bf1'
      const trackingScript = document.createElement('script')
      trackingScript.src = 'https://website-traking-tool.onrender.com/track.js'
      trackingScript.async = true
      document.body.appendChild(trackingScript)
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadDeferred, { timeout: 3500 })
    } else {
      window.setTimeout(loadDeferred, 1800)
    }
  }, [])

  if (!TelemetryComponents) return null
  const { Analytics, SpeedInsights } = TelemetryComponents

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DeferredTelemetry />
  </StrictMode>,
)
