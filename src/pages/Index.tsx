
import React, { Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoadingSpinner from '../components/LoadingSpinner';


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
    
    // Adicionar dados estruturados específicos da página
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Solarien Energy - Energia Solar e Mercado Livre",
      "description": "Migração gratuita para energia solar e mercado livre com economia garantida de até 45%",
      "url": "https://solarien.com.br/",
      "mainEntity": {
        "@type": "Service",
        "name": "Consultoria em Energia Solar",
        "description": "Serviços de migração para energia solar e mercado livre sem custos",
        "provider": {
          "@type": "Organization",
          "name": "Solarien Energy"
        }
      }
    });
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative isolate" style={{ backgroundColor: '#002113' }}>
      <PageBackground image={PAGE_BG.home} />
      <Header />
      <main>
        <HeroSection />
        
        <section id="sobre" aria-labelledby="sobre-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <AboutSection />
          </Suspense>
        </section>
        
        <section id="video" aria-labelledby="video-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <VideoSection />
          </Suspense>
        </section>
        
        <section id="parcerias" aria-labelledby="parcerias-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <PartnersCarousel />
          </Suspense>
        </section>
        
        <section id="usinas-solares" aria-labelledby="usinas-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <SolarPlantsCarousel />
          </Suspense>
        </section>
        
        <section id="licenciado" aria-labelledby="licenciado-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <EntrepreneurshipSection />
          </Suspense>
        </section>
        
        <section id="licencas" aria-labelledby="licencas-heading">
          <Suspense fallback={<OptimizedFallback />}>
            <LicenseSection />
          </Suspense>
        </section>
      </main>
      
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
