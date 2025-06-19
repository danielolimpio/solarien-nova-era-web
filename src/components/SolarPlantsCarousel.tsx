
import React, { useState } from 'react';

const SolarPlantsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solarPlants = [
    {
      id: 1,
      name: 'Usina Solar Bahia',
      location: 'Bahia, Brasil',
      capacity: '500 MW',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Uma das maiores usinas solares do Nordeste brasileiro'
    },
    {
      id: 2,
      name: 'Complexo Solar Ceará',
      location: 'Ceará, Brasil',
      capacity: '750 MW',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Tecnologia de ponta em energia fotovoltaica'
    },
    {
      id: 3,
      name: 'Parque Solar Minas',
      location: 'Minas Gerais, Brasil',
      capacity: '320 MW',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Energia limpa para mais de 200 mil residências'
    },
    {
      id: 4,
      name: 'Solar Farm São Paulo',
      location: 'São Paulo, Brasil',
      capacity: '450 MW',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Inovação e sustentabilidade no interior paulista'
    },
    {
      id: 5,
      name: 'Usina Pernambuco',
      location: 'Pernambuco, Brasil',
      capacity: '600 MW',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Gerando energia para o desenvolvimento regional'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Nossas</span> <span className="text-white">Usinas Solares</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos de energia solar que estamos desenvolvendo pelo Brasil
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
          {solarPlants.map((plant, index) => (
            <div
              key={plant.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${
                activeIndex === index 
                  ? 'flex-grow lg:flex-[3] h-96' 
                  : 'flex-shrink-0 lg:flex-[1] h-96 lg:h-96'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                  activeIndex === index 
                    ? 'from-black/70 via-black/30 to-transparent' 
                    : 'from-black/80 via-black/50 to-black/20'
                }`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className={`transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-80 transform translate-y-2'
                }`}>
                  <h3 className={`font-bold text-white mb-2 transition-all duration-500 ${
                    activeIndex === index ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
                  }`}>
                    {plant.name}
                  </h3>
                  
                  <div className={`transition-all duration-700 overflow-hidden ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-8 opacity-70'
                  }`}>
                    <p className="text-solarien-primary font-semibold mb-2">
                      📍 {plant.location}
                    </p>
                    <p className="text-solarien-secondary font-semibold mb-3">
                      ⚡ {plant.capacity}
                    </p>
                    {activeIndex === index && (
                      <p className="text-gray-300 leading-relaxed animate-fade-in">
                        {plant.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Active Indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 ${
                activeIndex === index ? 'bg-solarien-primary scale-125' : 'bg-white/50'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {solarPlants.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-solarien-primary scale-125' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarPlantsCarousel;
