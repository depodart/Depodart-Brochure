import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from '../PDFDocument';

const PDFBrochure = () => {
  return (
    <div className="w-full h-screen">
      <PDFViewer width="100%" height="100%" className="border-0">
        <PDFDocument />
      </PDFViewer>
    </div>
  );
};

export default PDFBrochure; 