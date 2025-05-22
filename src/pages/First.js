import React from 'react';
import { logo, Brochure1 } from '../assets';

const FirstPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with company name and slogan */}
      <header className="bg-secondary-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-end">
          <div className="text-right pr-8">
            <div className="flex items-center justify-end gap-4">
              <img src={logo} alt="DepoDart Logo" className="w-16 h-16" />
              <h1 className="text-5xl font-bold tracking-wide m-0">DepoDart</h1>
            </div>
            <p className="text-xl mt-2 font-light">Where big data meets big discoveries</p>
          </div>
        </div>
      </header>

      {/* Main content with big image */}
      <main className="flex-1 flex items-center justify-center py-1">
        <div className="w-full max-w-7xl">
          <img 
            src={Brochure1} 
            alt="DepoDart showcase" 
            className="w-full h-[80vh] object-cover rounded-lg shadow-2xl" 
          />
        </div>
      </main>

      {/* Footer with background color and website */}
      <footer className="bg-tertiary-light text-white py-6 text-center border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xl font-medium mb-2">www.depodart.com</p>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} DepoDart. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FirstPage;
