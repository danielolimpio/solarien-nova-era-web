import React, { useState } from 'react';

const solarPlants = [
  { id: 1, name: 'Complexo Solar Bahia', location: 'Bahia, Brasil', capacity: '850 MW', image: '/lovable-uploads/d9ff5b49-3fe5-4226-84bc-5c6cf3cf15eb.png', description: 'Uma das maiores fazendas solares do Nordeste brasileiro com tecnologia de ponta em energia fotovoltaica.' },
  { id: 2, name: 'Fazenda Solar Ceará', location: 'Ceará, Brasil', capacity: '1.2 GW', image: '/lovable-uploads/dd9f3c27-a8e2-4f99-9259-9be8edb3a44f.png', description: 'Complexo de energia solar de grande escala com milhares de painéis fotovoltaicos gerando energia limpa.' },
  { id: 3, name: 'Parque Solar Minas', location: 'Minas Gerais, Brasil', capacity: '675 MW', image: '/lovable-uploads/f03a9e0a-3305-4975-be71-a61f25d76fbc.png', description: 'Fazenda solar de grande porte gerando energia limpa e renovável para centenas de milhares de residências.' },
  { id: 4, name: 'Solar Farm São Paulo', location: 'São Paulo, Brasil', capacity: '950 MW', image: '/lovable-uploads/3e5c2fc7-f605-4bcb-a0e6-401d009716ec.png', description: 'Instalação solar industrial de grande escala no interior paulista contribuindo para sustentabilidade.' },
  { id: 5, name: 'Usina Pernambuco', location: 'Pernambuco, Brasil', capacity: '780 MW', image: '/lovable-uploads/7af34aca-57a1-464a-b3a9-6b2a8d383e5a.png', description: 'Complexo fotovoltaico de grande porte contribuindo para o desenvolvimento regional sustentável.' },
];

const SolarPlantsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Infraestrutura</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="text-center mb-12">
            <h2 id="usinas-heading" className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">
              Usinas Solares
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-3xl mx-auto">
              Mais de 2.000 usinas solares parceiras espalhadas por todo o Brasil gerando energia limpa e renovável.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 w-full" role="region" aria-label="Carrossel de usinas solares">
            {solarPlants.map((plant, index) => (
              <article
                key={plant.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-black/10 rounded-md ${
                  activeIndex === index ? 'lg:flex-[4] h-[480px]' : 'lg:flex-[1] h-[480px]'
                }`}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Selecionar ${plant.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index);
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src={plant.image}
                    alt={`${plant.name} - Usina solar fotovoltaica em ${plant.location} com capacidade de ${plant.capacity}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                    activeIndex === index ? 'from-black/80 via-black/30 to-transparent' : 'from-black/90 via-black/60 to-black/30'
                  }`} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">{plant.capacity}</div>
                  <h3 className={`font-light text-white tracking-tight mb-2 transition-all duration-500 ${
                    activeIndex === index ? 'text-3xl lg:text-4xl' : 'text-lg lg:text-xl'
                  }`}>
                    {plant.name}
                  </h3>
                  <div className={`transition-all duration-700 overflow-hidden ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white/70 font-light text-sm mb-2">{plant.location}</p>
                    <p className="text-white/80 font-light leading-relaxed">{plant.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-3" role="tablist">
            {solarPlants.map((plant, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-px transition-all duration-300 ${
                  index === activeIndex ? 'w-12 bg-slate-900' : 'w-6 bg-slate-300 hover:bg-slate-500'
                }`}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ir para ${plant.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarPlantsCarousel;
