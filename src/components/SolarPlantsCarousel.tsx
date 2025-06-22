
import React, { useState } from 'react';
import { Sun } from 'lucide-react';

const SolarPlantsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solarPlants = [
    {
      id: 1,
      name: 'Complexo Solar Bahia',
      location: 'Bahia, Brasil',
      capacity: '850 MW',
      image: '/lovable-uploads/d9ff5b49-3fe5-4226-84bc-5c6cf3cf15eb.png',
      description: 'Uma das maiores fazendas solares do Nordeste brasileiro com tecnologia de ponta'
    },
    {
      id: 2,
      name: 'Fazenda Solar Ceará',
      location: 'Ceará, Brasil',
      capacity: '1.2 GW',
      image: '/lovable-uploads/dd9f3c27-a8e2-4f99-9259-9be8edb3a44f.png',
      description: 'Complexo de energia solar de grande escala com milhares de painéis fotovoltaicos'
    },
    {
      id: 3,
      name: 'Parque Solar Minas',
      location: 'Minas Gerais, Brasil',
      capacity: '675 MW',
      image: '/lovable-uploads/f03a9e0a-3305-4975-be71-a61f25d76fbc.png',
      description: 'Fazenda solar de grande porte gerando energia limpa para centenas de milhares de residências'
    },
    {
      id: 4,
      name: 'Solar Farm São Paulo',
      location: 'São Paulo, Brasil',
      capacity: '950 MW',
      image: '/lovable-uploads/3e5c2fc7-f605-4bcb-a0e6-401d009716ec.png',
      description: 'Instalação solar industrial de grande escala no interior paulista'
    },
    {
      id: 5,
      name: 'Usina Pernambuco',
      location: 'Pernambuco, Brasil',
      capacity: '780 MW',
      image: '/lovable-uploads/7af34aca-57a1-464a-b3a9-6b2a8d383e5a.png',
      description: 'Complexo fotovoltaico de grande porte contribuindo para o desenvolvimento regional'
    }
  ];

  return (
    <section id="usinas" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background with subtle gradient and transparency overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
        <img 
          src="/lovable-uploads/ffac10ad-534c-488d-9cc2-e63ccb047edc.png" 
          alt="Solar transparency overlay" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        />
      </div>
      
      {/* Full width container */}
      <div className="w-full px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
              <Sun className="w-6 h-6" style={{ color: '#002113' }} />
            </div>
            <span className="text-gradient">Usinas</span> <span className="text-white">Solares</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 2000 usinas solares parceiras<br />
            espalhadas em todo Brasil
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
                activeIndex === index ? 'bg-solarien-primary scale-125 animate-[pulse_4s_ease-in-out_infinite]' : 'bg-white/50'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Reduzidos para tamanho muito menor */}
        <div className="flex justify-center mt-8 space-x-4">
          {solarPlants.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-0.1 h-0.1 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-solarien-primary scale-125 animate-[pulse_4s_ease-in-out_infinite]' 
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
