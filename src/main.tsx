import React from 'react';
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
// Mark app as mounted to hide the initial HTML fallback safely
rootEl.setAttribute('data-mounted', 'true');
