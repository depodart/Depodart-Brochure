// PDFDocument.js
import React from 'react';
import { Document } from '@react-pdf/renderer';
import { FirstPageContent } from '../../pages/PDF/1_FirstPageContent';
import { LastPageContent } from '../../pages/PDF/LastPageContent';
import { ThirdPageContent } from '../../pages/PDF/3_ThirdPageContent';
import { SecondPageContent } from '../../pages/PDF/2_SecondPageContent';







const PDFDocument = () => (
  <Document>
    <FirstPageContent />
    <SecondPageContent />
    <ThirdPageContent />
    <LastPageContent />
  </Document>
);

export default PDFDocument;
