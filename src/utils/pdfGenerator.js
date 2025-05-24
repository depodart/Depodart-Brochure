// utils/pdfGenerator.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Function to wait for images to load
const waitForImagesToLoad = () => {
  const images = document.querySelectorAll('img');
  const promises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve; // Resolve even on error to continue
    });
  });
  return Promise.all(promises);
};

export const generatePDF = async () => {
  try {
    // First wait for all images to load
    await waitForImagesToLoad();
    
    // Wait a bit more to ensure everything is rendered
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const element = document.querySelector('.App');
    
    // Hide the button during capture
    const button = document.querySelector('.pdf-button');
    const buttonDisplay = button ? button.style.display : null;
    if (button) button.style.display = 'none';
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: 'white',
      logging: true,
      onclone: (doc) => {
        // Additional processing on the cloned document if needed
        console.log('Document cloned for PDF generation');
      }
    });
    
    // Restore button
    if (button) button.style.display = buttonDisplay;
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210; // A4 width
    const pageHeight = 295; // A4 height
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save('depodart-brochure.pdf');
    
    console.log('PDF generated successfully');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
