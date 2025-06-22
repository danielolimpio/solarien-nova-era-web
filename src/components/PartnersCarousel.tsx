

import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 5));
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar panels background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      {/* Wind Turbine Image */}
      <div className="absolute right-0 bottom-0 h-full w-auto pointer-events-none z-5">
        <img 
          src="/lovable-uploads/b6e6ba38-4115-45c3-8473-d0b3ab7fa6e6.png" 
          alt="Wind turbine" 
          className="h-full w-auto object-contain object-bottom opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Parceiros</span> <span className="text-gray-800">Distribuidoras</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Você continua utilizando a mesma rede de distribuição convencional
          </p>
        </div>

        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 5) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {partners.slice(slideIndex * 5, (slideIndex + 1) * 5).map((partner, index) => (
                    <div 
                      key={partner.name}
                      className="bg-white/90 backdrop-blur-sm border border-solarien-primary/20 rounded-xl p-6 text-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg"
                    >
                      <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-solarien-primary transition-colors duration-300 text-sm">
                        {partner.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-solarien-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

