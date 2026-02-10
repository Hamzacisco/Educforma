import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Signal to the diagnostic script that we have started
(window as any).EDUCFORMA_MOUNTED = true;

console.log("EDUCFORMA: App entry point reached.");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Hide the loader quickly once React takes over
    const loader = document.getElementById('loading-indicator');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 300);
    }
    
    console.log("EDUCFORMA: Initial render complete.");
  } catch (err: any) {
    console.error("EDUCFORMA: Render error:", err);
  }
} else {
  console.error("EDUCFORMA: No root element found.");
}
