
import React, { useEffect, useState } from 'react';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    'CPFL Energia', 'Light', 'Enel', 'Equatorial', 'Energisa',
    'RGE', 'Copel', 'Cemig', 'AES', 'Neoenergia',
    'EDP', 'Eletrobras', 'DME', 'Sulgás', 'CEEE'
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
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Parceiros</span> <span className="text-gray-800">Distribuidoras</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conectamos você às principais distribuidoras de energia do Brasil
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 5) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {partners.slice(slideIndex * 5, (slideIndex + 1) * 5).map((partner, index) => (
                    <div 
                      key={partner}
                      className="bg-white/90 backdrop-blur-sm border border-solarien-primary/20 rounded-xl p-6 text-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:from-solarien-primary/40 group-hover:to-solarien-secondary/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-solarien-primary rounded opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-solarien-primary transition-colors duration-300">
                        {partner}
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
