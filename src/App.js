// src/App.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import FirstPage from './pages/First';
import SecondPage from './pages/Second';
import ThirdPage from './pages/Third';
import LastPage from './pages/Last';
import MapDemo from './components/Map2';
import PDFDocument from './components/PDF/PDFDocument';

function App() {
  return (
    <div className="App relative">
      {/* Floating Download Button */}
      <div className="fixed top-4 right-4 z-50">
        <PDFDownloadLink 
          document={<PDFDocument />} 
          fileName="depodart-brochure.pdf"
          className="bg-tertiary-light hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
        >
          {({ blob, url, loading, error }) => (
            <span className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              {loading ? 'Generating PDF...' : 'Download PDF'}
            </span>
          )}
        </PDFDownloadLink>
      </div>

      {/* Main Content */}
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <LastPage />
      
      {/* New Interactive Map Demo */}
      {/* <MapDemo /> */}
     
    </div>
  );
}

export default App;
