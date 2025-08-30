import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      name: 'CPFL Paulista',
      logo: '/lovable-uploads/e3b594d4-f1a6-4d70-adc3-141c679ec79d.png'
    },
    {
      name: 'Elektro',
      logo: '/lovable-uploads/e9a8b182-db53-4a89-95ab-79afaea484c6.png'
    },
    {
      name: 'Equatorial',
      logo: '/lovable-uploads/e1b46b57-c34a-45d1-97ca-5ed24dc933b1.png'
    },
    {
      name: 'Energisa',
      logo: '/lovable-uploads/9b091af4-d60e-4e28-aa5c-9c770a9811bb.png'
    },
    {
      name: 'Copel',
      logo: '/lovable-uploads/489829d7-f934-4173-be27-1afcd1ff5868.png'
    },
    {
      name: 'Cemig',
      logo: '/lovable-uploads/c2fd2f8e-4e33-4b3a-80e9-4a0aeefc32a8.png'
    },
    {
      name: 'Neoenergia',
      logo: '/lovable-uploads/7888696b-6fb2-4e12-bb93-82cc34080259.png'
    },
    {
      name: 'Celesc',
      logo: '/lovable-uploads/698f64a7-9fae-4e06-b3e4-03d4dc4ef08f.png'
    },
    {
      name: 'Coelba',
      logo: '/lovable-uploads/16985188-0aa0-4c38-baf1-dccef3fd31cb.png'
    },
    {
      name: 'Enel',
      logo: '/lovable-uploads/e70579a1-fb07-4f3a-aa6a-0f789d66e11a.png'
    }
  ];

  // Configuração responsiva para diferentes tamanhos de tela
  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 5;
    const width = window.innerWidth;
    if (width < 640) return 2;      // Mobile: 2 itens
    if (width < 768) return 3;      // SM: 3 itens
    if (width < 1024) return 4;     // MD: 4 itens
    return 5;                       // LG+: 5 itens
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(partners.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000); // Aumentei para 4 segundos para melhor UX
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background image - Otimizada para performance */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar panels background" 
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      {/* Wind Turbine Image - Responsivo */}
      <div className="absolute right-0 bottom-0 h-full w-auto pointer-events-none z-5 hidden lg:block opacity-30">
        <img 
          src="/lovable-uploads/b6e6ba38-4115-45c3-8473-d0b3ab7fa6e6.png" 
          alt="Wind turbine" 
          className="h-full w-auto object-contain object-bottom"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="responsive-container relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-solarien-primary/20 border border-solarien-primary/30 rounded-full px-6 py-2 mb-6">
            <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
              <Users className="w-4 h-4" style={{ color: '#002113' }} />
            </div>
            <span className="text-solarien-primary font-medium">Distribuidoras Parceiras</span>
          </div>
          
          <h2 className="responsive-heading font-bold mb-4">
            <span className="text-gradient">Sua Energia</span> <span className="text-gray-800">Nossa Parceria</span>
          </h2>
          <p className="text-gray-600 responsive-text max-w-2xl mx-auto leading-relaxed">
            Você continua utilizando a mesma rede de distribuição convencional
          </p>
        </div>

        <div className="relative overflow-hidden max-w-6xl mx-auto">
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-solarien-primary/40 transition-all duration-300 opacity-70 hover:opacity-100 shadow-lg"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-solarien-primary/40 transition-all duration-300 opacity-70 hover:opacity-100 shadow-lg"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className={`grid gap-4 sm:gap-6 ${
                  itemsPerSlide === 2 ? 'grid-cols-2' :
                  itemsPerSlide === 3 ? 'grid-cols-3' :
                  itemsPerSlide === 4 ? 'grid-cols-4' :
                  'grid-cols-5'
                }`}>
                  {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner) => (
                    <div 
                      key={partner.name}
                      className="bg-white/90 backdrop-blur-sm border border-solarien-primary/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-2 sm:mb-4 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-solarien-primary transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                        {partner.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators - Ajustados para tamanho médio */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-solarien-primary scale-110' : 'bg-gray-400'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
