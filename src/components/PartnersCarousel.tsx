import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ceeeLogo from '@/assets/ceee-logo.png';
import rgeLogo from '@/assets/rge-logo.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PremiumSection, OutlineButton } from './premium/PremiumUI';

const partners = [
  { name: 'CPFL Paulista', logo: '/lovable-uploads/e3b594d4-f1a6-4d70-adc3-141c679ec79d.png' },
  { name: 'Elektro', logo: '/lovable-uploads/e9a8b182-db53-4a89-95ab-79afaea484c6.png' },
  { name: 'Equatorial', logo: '/lovable-uploads/e1b46b57-c34a-45d1-97ca-5ed24dc933b1.png' },
  { name: 'Energisa', logo: '/lovable-uploads/9b091af4-d60e-4e28-aa5c-9c770a9811bb.png' },
  { name: 'Copel', logo: '/lovable-uploads/489829d7-f934-4173-be27-1afcd1ff5868.png' },
  { name: 'Cemig', logo: '/lovable-uploads/c2fd2f8e-4e33-4b3a-80e9-4a0aeefc32a8.png' },
  { name: 'Neoenergia', logo: '/lovable-uploads/7888696b-6fb2-4e12-bb93-82cc34080259.png' },
  { name: 'Celesc', logo: '/lovable-uploads/698f64a7-9fae-4e06-b3e4-03d4dc4ef08f.png' },
  { name: 'Coelba', logo: '/lovable-uploads/16985188-0aa0-4c38-baf1-dccef3fd31cb.png' },
  { name: 'Enel', logo: '/lovable-uploads/e70579a1-fb07-4f3a-aa6a-0f789d66e11a.png' },
  { name: 'Light', logo: '/lovable-uploads/db66c2d1-2e4b-40b1-ab3b-9bfd7df28e4a.png' },
  { name: 'CPFL Piratininga', logo: '/lovable-uploads/8f128a3d-37f5-44b3-9e31-b11c8d3af105.png' },
  { name: 'EDP', logo: '/lovable-uploads/37c4c532-2e09-48c1-8923-b19903e8d75b.png' },
  { name: 'Neoenergia Brasília', logo: '/lovable-uploads/a95cc55e-8b0c-43b0-bc70-94a68c6d1136.png' },
  { name: 'COSERN', logo: '/lovable-uploads/13f4f575-48aa-4162-ba85-9cbc2a8949d6.png' },
  { name: 'CEEE', logo: ceeeLogo },
  { name: 'RGE', logo: rgeLogo },
];

const PartnersCarousel = () => {
  return (
    <PremiumSection label="Distribuidoras Parceiras">
      <div className="text-center mb-12">
        <h2 id="parcerias-heading" className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Nossas Parcerias
        </h2>
        <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
          Você continua utilizando a mesma rede de distribuição convencional — sem trocas, obras ou interrupções.
        </p>
      </div>

      <div className="relative px-12">
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-2 sm:-ml-3">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="bg-[#002113] border border-white/10 p-6 text-center hover:bg-white/[0.02] transition-colors h-full">
                  <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center bg-white/95 rounded-md p-2">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="text-white/80 font-light text-sm tracking-tight">{partner.name}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent text-white border-white/25 hover:bg-white/5">
            <ChevronLeft className="w-5 h-5" strokeWidth={1.25} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent text-white border-white/25 hover:bg-white/5">
            <ChevronRight className="w-5 h-5" strokeWidth={1.25} />
          </CarouselNext>
        </Carousel>
      </div>

      <div className="flex justify-center mt-12">
        <OutlineButton href="https://drive.google.com/file/d/1uuMcodSlA23tK0grM3JesLxiNc-yxnQt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Ver Mapa de Descontos
        </OutlineButton>
      </div>
    </PremiumSection>
  );
};

export default PartnersCarousel;
