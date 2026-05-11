import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mencari elemen dengan id 'root' di index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Gagal menemukan elemen root. Pastikan public/index.html memiliki <div id='root'></div>");
}

const root = ReactDOM.createRoot(rootElement);

// Menjalankan aplikasi dalam mode Strict untuk mendeteksi masalah potensial
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
