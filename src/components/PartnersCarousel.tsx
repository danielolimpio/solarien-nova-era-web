import React from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ceeeLogo from '@/assets/ceee-logo.png';
import rgeLogo from '@/assets/rge-logo.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const PartnersCarousel = () => {
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
    },
    {
      name: 'Light',
      logo: '/lovable-uploads/db66c2d1-2e4b-40b1-ab3b-9bfd7df28e4a.png'
    },
    {
      name: 'CPFL Piratininga',
      logo: '/lovable-uploads/8f128a3d-37f5-44b3-9e31-b11c8d3af105.png'
    },
    {
      name: 'EDP',
      logo: '/lovable-uploads/37c4c532-2e09-48c1-8923-b19903e8d75b.png'
    },
    {
      name: 'Neoenergia Brasília',
      logo: '/lovable-uploads/a95cc55e-8b0c-43b0-bc70-94a68c6d1136.png'
    },
    {
      name: 'COSERN',
      logo: '/lovable-uploads/13f4f575-48aa-4162-ba85-9cbc2a8949d6.png'
    },
    {
      name: 'CEEE',
      logo: ceeeLogo
    },
    {
      name: 'RGE',
      logo: rgeLogo
    }
  ];

  return <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background image - Otimizada para performance */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Solar panels background" className="w-full h-full object-cover opacity-10" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      {/* Wind Turbine Image - Responsivo */}
      <div className="absolute right-0 bottom-0 h-full w-auto pointer-events-none z-5 hidden lg:block opacity-30">
        <img src="/lovable-uploads/b6e6ba38-4115-45c3-8473-d0b3ab7fa6e6.png" alt="Wind turbine" className="h-full w-auto object-contain object-bottom" loading="lazy" decoding="async" />
      </div>

      <div className="responsive-container relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-6" style={{ backgroundColor: '#002113' }}>
            <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4" style={{ color: '#002113' }} />
            </div>
            <span className="text-solarien-primary font-medium">Distribuidoras Parceiras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nossas <span className="bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent">Parcerias</span>
          </h2>
          <p className="text-gray-600 responsive-text max-w-2xl mx-auto leading-relaxed">
            Você continua utilizando a mesma rede de distribuição convencional
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="bg-white/90 backdrop-blur-sm border border-solarien-primary/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg h-full">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-solarien-primary text-white hover:bg-solarien-primary/90 border-none shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-solarien-primary text-white hover:bg-solarien-primary/90 border-none shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Botão Ver Mapa de Descontos */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <a
            href="https://drive.google.com/file/d/1uuMcodSlA23tK0grM3JesLxiNc-yxnQt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-solarien-primary text-white font-medium rounded-lg hover:bg-solarien-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Mapa de Descontos
          </a>
        </div>
      </div>
    </section>;
};
export default PartnersCarousel;