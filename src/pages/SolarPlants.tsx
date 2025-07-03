
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarPlantsCarousel from '../components/SolarPlantsCarousel';

const SolarPlants = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <SolarPlantsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default SolarPlants;
