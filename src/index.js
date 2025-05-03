import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import reportWebVitals from './reportWebVitals';

// Set initial theme
const savedTheme = localStorage.getItem('futuristic-theme') || 'dark';
document.documentElement.className = savedTheme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();