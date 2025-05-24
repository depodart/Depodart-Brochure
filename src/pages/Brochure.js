import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFBrochure from '../components/PDF/PDFBrochure';
import PDFDocument from '../components/PDF/PDFDocument';
import { logo } from '../assets';

const Brochure = () => {
  return (
    <div className="min-h-screen bg-tertiary-dark">
      <header className="bg-secondary-dark text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DepoDart Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">DepoDart Brochure</h1>
          </div>
          <PDFDownloadLink 
            document={<PDFDocument />} 
            fileName="depodart-brochure.pdf"
            className="bg-tertiary-light hover:bg-tertiary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-background-tertiary-dark rounded-lg shadow-lg h-[calc(100vh-140px)]">
          <PDFBrochure />
        </div>
      </div>
    </div>
  );
};

export default Brochure; 