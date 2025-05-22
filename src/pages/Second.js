import React from 'react';
import { logo, Brochure2 } from '../assets';

const SecondPage = () => {
  const content = {
    about: {
      title: "About Us",
      description: "DepoDart is a pioneering technology company specializing in mining data analytics and visualization. We combine cutting-edge technology with deep industry expertise to transform how mining companies understand and utilize their data."
    },
    mission: {
      title: "Our Mission",
      description: "Our mission is to revolutionize the mining industry through innovative data solutions. We strive to empower mining companies with actionable insights, enabling them to make informed decisions, optimize operations, and drive sustainable growth in the sector."
    }
  };

  const Section = ({ title, description }) => (
    <section className="mb-4 bg-background-tertiary-dark rounded-lg p-4">
      <h2 className="text-2xl font-bold text-white mb-2 border-b border-secondary-dark pb-2 px-4">DepoDart {title}</h2>
      <div className="px-4">
        <p className="text-white text-base leading-relaxed text-justify">DepoDart {description}</p>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen bg-tertiary-dark py-4 px-4">
      <header className="bg-tertiary-dark text-white mb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary-dark to-tertiary-light bg-clip-text text-transparent">
            DepoDart AI-Powered Mining Data Solutions
          </h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-4xl mx-auto space-y-4">
          <Section {...content.about} />
          <Section {...content.mission} />
        </div>
      </main>
      <div className="flex justify-center items-center my-4 px-4">
        <img 
          src={Brochure2} 
          alt="DepoDart Services" 
          className="w-full max-w-sm rounded-lg shadow"
        />
      </div>

      <div className="flex items-center justify-center mt-4 px-4">
        <div className="flex items-center gap-2 bg-background-tertiary-dark p-4 rounded-full shadow">
          <img src={logo} alt="DepoDart Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-bold text-white">DepoDart</h2>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
