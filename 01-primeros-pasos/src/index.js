import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css';
import App from './App';

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the new render method
root.render(
  <App />
);
