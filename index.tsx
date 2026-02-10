
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Remove loading indicator if it exists
const loadingIndicator = document.getElementById('loading-indicator');
if (loadingIndicator) {
  // We'll let React handle the replacement, but we can also manually hide it
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
