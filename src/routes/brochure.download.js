import { renderToString } from 'react-dom/server';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from '../components/PDFDocument';

export async function loader({ request }) {
  // Generate the PDF on the server
  const pdfDoc = <PDFDocument />;
  const pdfBuffer = await pdf(pdfDoc).toBuffer();

  // Return the PDF as a downloadable file
  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="depodart-brochure.pdf"'
    }
  });
}

export default function BrochureDownload() {
  // This component won't render anything visually
  // It's just a route for downloading the PDF
  return null;
} 