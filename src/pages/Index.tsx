
import React, { Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { Separator } from '../components/ui/separator';

// Lazy loading para componentes não críticos
const AboutSection = React.lazy(() => import('../components/AboutSection'));
const PartnersCarousel = React.lazy(() => import('../components/PartnersCarousel'));
const SolarPlantsCarousel = React.lazy(() => import('../components/SolarPlantsCarousel'));
const BrazilMap = React.lazy(() => import('../components/BrazilMap'));
const EntrepreneurshipSection = React.lazy(() => import('../components/EntrepreneurshipSection'));
const LicenseSection = React.lazy(() => import('../components/LicenseSection'));
const Footer = React.lazy(() => import('../components/Footer'));
const WhatsAppFloat = React.lazy(() => import('../components/WhatsAppFloat'));
const VideoSection = React.lazy(() => import('../components/VideoSection'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <VideoSection />
      </Suspense>
      
      <div id="parcerias">
        <Suspense fallback={<LoadingSpinner />}>
          <PartnersCarousel />
        </Suspense>
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <SolarPlantsCarousel />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <BrazilMap />
      </Suspense>
      
      <div id="licenciado">
        <Suspense fallback={<LoadingSpinner />}>
          <EntrepreneurshipSection />
        </Suspense>
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <LicenseSection />
      </Suspense>
      
      <Separator className="h-1 bg-gradient-to-r from-transparent via-solarien-primary to-transparent opacity-60" />
      
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={<div />}>
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
};

export default Index;
