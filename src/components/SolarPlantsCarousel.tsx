
import React, { useState } from 'react';

const SolarPlantsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solarPlants = [
    {
      id: 1,
      name: 'Complexo Solar São Gonçalo',
      location: 'Piauí, Brasil',
      capacity: '608 MW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Uma das maiores usinas solares do Brasil, localizada no município de São Gonçalo do Gurguéia'
    },
    {
      id: 2,
      name: 'Usina Solar Lapa',
      location: 'Bahia, Brasil',
      capacity: '158 MW',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complexo fotovoltaico de grande porte localizado no oeste da Bahia'
    },
    {
      id: 3,
      name: 'Parque Solar Ituverava',
      location: 'Bahia, Brasil',
      capacity: '254 MW',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Uma das principais usinas solares do Nordeste brasileiro'
    },
    {
      id: 4,
      name: 'Complexo Solar Pirapora',
      location: 'Minas Gerais, Brasil',
      capacity: '321 MW',
      image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Maior complexo solar em operação no Brasil, localizado em Pirapora'
    },
    {
      id: 5,
      name: 'Usina Solar Horizon',
      location: 'Bahia, Brasil',
      capacity: '103 MW',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Usina solar estratégica para o desenvolvimento energético do Nordeste'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      
      {/* Full width container */}
      <div className="w-full px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Nossas</span> <span className="text-white">Usinas Solares</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos de energia solar que estamos desenvolvendo pelo Brasil
          </p>
        </div>

        {/* Full width carousel */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {solarPlants.map((plant, index) => (
            <div
              key={plant.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${
                activeIndex === index 
                  ? 'flex-grow lg:flex-[4] h-[500px]' 
                  : 'flex-shrink-0 lg:flex-[1] h-[500px]'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image - larger and more prominent */}
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
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className={`transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-80 transform translate-y-2'
                }`}>
                  <h3 className={`font-bold text-white mb-3 transition-all duration-500 ${
                    activeIndex === index ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                  }`}>
                    {plant.name}
                  </h3>
                  
                  <div className={`transition-all duration-700 overflow-hidden ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-12 opacity-70'
                  }`}>
                    <p className="text-solarien-primary font-semibold mb-3 text-lg">
                      📍 {plant.location}
                    </p>
                    <p className="text-solarien-secondary font-semibold mb-4 text-lg">
                      ⚡ {plant.capacity}
                    </p>
                    {activeIndex === index && (
                      <p className="text-gray-300 leading-relaxed animate-fade-in text-lg">
                        {plant.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Active Indicator */}
              <div className={`absolute top-6 right-6 w-4 h-4 rounded-full transition-all duration-500 ${
                activeIndex === index ? 'bg-solarien-primary scale-125' : 'bg-white/50'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {solarPlants.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
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
