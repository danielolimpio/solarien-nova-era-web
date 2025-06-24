
import React, { Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { Separator } from '../components/ui/separator';

// Lazy loading para componentes não críticos com preload estratégico
const AboutSection = React.lazy(() => 
  import('../components/AboutSection').then(module => {
    // Preload próximo componente
    import('../components/PartnersCarousel');
    return module;
  })
);

const PartnersCarousel = React.lazy(() => 
  import('../components/PartnersCarousel').then(module => {
    // Preload próximo componente
    import('../components/SolarPlantsCarousel');
    return module;
  })
);

const SolarPlantsCarousel = React.lazy(() => 
  import('../components/SolarPlantsCarousel').then(module => {
    // Preload próximo componente
    import('../components/BrazilMap');
    return module;
  })
);

const BrazilMap = React.lazy(() => 
  import('../components/BrazilMap').then(module => {
    // Preload próximo componente
    import('../components/EntrepreneurshipSection');
    return module;
  })
);

const EntrepreneurshipSection = React.lazy(() => 
  import('../components/EntrepreneurshipSection').then(module => {
    // Preload próximo componente
    import('../components/LicenseSection');
    return module;
  })
);

const LicenseSection = React.lazy(() => 
  import('../components/LicenseSection').then(module => {
    // Preload próximo componente
    import('../components/Footer');
    return module;
  })
);

const Footer = React.lazy(() => 
  import('../components/Footer').then(module => {
    // Preload próximo componente
    import('../components/WhatsAppFloat');
    return module;
  })
);

const WhatsAppFloat = React.lazy(() => import('../components/WhatsAppFloat'));
const VideoSection = React.lazy(() => 
  import('../components/VideoSection').then(module => {
    // Preload próximo componente
    import('../components/PartnersCarousel');
    return module;
  })
);

// Componente de fallback otimizado
const OptimizedFallback = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-solarien-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  // Preload de recursos críticos no mount
  React.useEffect(() => {
    // Preload primeiro componente lazy
    import('../components/AboutSection');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<OptimizedFallback />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<OptimizedFallback />}>
        <VideoSection />
      </Suspense>
      
      <div id="parcerias">
        <Suspense fallback={<OptimizedFallback />}>
          <PartnersCarousel />
        </Suspense>
      </div>
      
      <Suspense fallback={<OptimizedFallback />}>
        <SolarPlantsCarousel />
      </Suspense>
      
      <Suspense fallback={<OptimizedFallback />}>
        <BrazilMap />
      </Suspense>
      
      <div id="licenciado">
        <Suspense fallback={<OptimizedFallback />}>
          <EntrepreneurshipSection />
        </Suspense>
      </div>
      
      <Suspense fallback={<OptimizedFallback />}>
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
