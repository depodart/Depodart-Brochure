import React from 'react';
import { FaCertificate, FaHandshake, FaCogs, FaCheckCircle } from 'react-icons/fa';
import { logo } from '../assets';
import QRCode from 'react-qr-code';

// Constants
const WEBSITE_URL = 'https://www.depodart.com';

// Component for individual section card
const SectionCard = ({ icon, title, content }) => (
  <div className="bg-background-tertiary-dark p-6 rounded-lg shadow-card">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h2 className=" text-xl font-bold mb-4 text-tertiary-light">{title}</h2>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

// Component for company header
const CompanyHeader = () => (
  <div className="flex items-center justify-end gap-4">
    <img src={logo} alt="DepoDart Logo" className="w-16 h-16" />
    <h1 className="text-5xl font-bold tracking-wide m-0">DepoDart</h1>
  </div>
);

// Component for QR code section
const QRCodeSection = () => (
  <div className="p-2">
    <QRCode 
      value={WEBSITE_URL}
      size={64}
      level="H"
      includeMargin={true}
      className="mx-auto bg-white"
    />
    <a 
      href={WEBSITE_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white text-xs mt-1 block text-center"
    >
      {WEBSITE_URL.replace('https://', '')}
    </a>
  </div>
);

// Component for footer
const Footer = () => (
  <footer className="bg-tertiary-light text-white py-6 text-center border-b-2 border-white">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-xl font-medium mb-2">{WEBSITE_URL.replace('https://', '')}</p>
      <p className="text-sm opacity-80">© {new Date().getFullYear()} DepoDart. All Rights Reserved.</p>
    </div>
  </footer>
);

const LastPage = () => {
  const sections = [
    {
      icon: <FaCertificate className="text-4xl " />,
      title: "DATA CERTIFICATION",
      content: "DepoDart maintains the highest standards of data quality and security. Our platform is certified to handle sensitive information with utmost confidentiality. We ensure that all data processing meets international standards while maintaining exceptional performance and reliability. Our commitment to continuous improvement drives us to implement cutting-edge security measures."
    },
    {
      icon: <FaHandshake className="text-4xl " />,
      title: "GLOBAL PARTNERSHIPS",
      content: "DepoDart collaborates with leading technology partners and data providers worldwide. Our extensive network includes partnerships with major cloud providers, data analytics firms, and research institutions. We've established relationships with over 150 organizations across various industries, ensuring comprehensive data coverage and innovative solutions."
    },
    {
      icon: <FaCogs className="text-4xl " />,
      title: "FLEXIBLE SOLUTIONS",
      content: "Our team of data scientists and engineers can integrate into your workflow at any stage. Whether you need data collection, analysis, or visualization, we provide tailored solutions that adapt to your specific requirements. Our platform scales seamlessly to meet your growing data needs."
    },
    {
      icon: <FaCheckCircle className="text-4xl " />,
      title: "PROVEN TRACK RECORD",
      content: "DepoDart has successfully processed and analyzed over 3,000 datasets, ranging from small-scale research projects to enterprise-level big data implementations. Our platform handles data volumes from gigabytes to petabytes, delivering consistent results across all scales."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-tertiary-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <SectionCard key={index} {...section} />
            ))}
          </div>
          
          <div className="mt-12 flex flex-row justify-between items-center gap-4">
            <CompanyHeader />
            <QRCodeSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LastPage;
