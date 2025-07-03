
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EntrepreneurshipSection from '../components/EntrepreneurshipSection';

const Licensed = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <EntrepreneurshipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Licensed;
