
import React, { useState } from 'react';

const SolarPlantsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solarPlants = [
    {
      id: 1,
      name: 'Complexo Solar Bahia',
      location: 'Bahia, Brasil',
      capacity: '850 MW',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Uma das maiores fazendas solares do Nordeste brasileiro com tecnologia de ponta'
    },
    {
      id: 2,
      name: 'Fazenda Solar Ceará',
      location: 'Ceará, Brasil',
      capacity: '1.2 GW',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complexo de energia solar de grande escala com milhares de painéis fotovoltaicos'
    },
    {
      id: 3,
      name: 'Parque Solar Minas',
      location: 'Minas Gerais, Brasil',
      capacity: '675 MW',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Fazenda solar de grande porte gerando energia limpa para centenas de milhares de residências'
    },
    {
      id: 4,
      name: 'Solar Farm São Paulo',
      location: 'São Paulo, Brasil',
      capacity: '950 MW',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Instalação solar industrial de grande escala no interior paulista'
    },
    {
      id: 5,
      name: 'Usina Pernambuco',
      location: 'Pernambuco, Brasil',
      capacity: '780 MW',
      image: 'https://images.unsplash.com/photo-1562804698-94ab4a37cb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complexo fotovoltaico de grande porte contribuindo para o desenvolvimento regional'
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
