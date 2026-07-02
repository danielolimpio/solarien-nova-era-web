import React, { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Play, Zap, Leaf, Users } from 'lucide-react';
import { PremiumSection, PremiumGrid, PremiumCard, PremiumIconBadge, PrimaryButton } from './premium/PremiumUI';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = 'F2uVQecpZ4M';

  return (
    <PremiumSection label="Nossa História">
      <div className="text-center mb-12">
        <h2 id="video-heading" className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Conheça Nossa História
        </h2>
        <p className="text-lg text-white/70 font-light max-w-3xl mx-auto">
          Descubra como estamos transformando o futuro da energia no Brasil e construindo um mundo mais sustentável para todos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="border border-white/10 overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            {!isVideoLoaded ? (
              <button
                onClick={() => setIsVideoLoaded(true)}
                className="relative w-full h-full group cursor-pointer"
                aria-label="Carregar vídeo do YouTube"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Solarien Energy - Nossa História"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-white/40 bg-black/40 backdrop-blur flex items-center justify-center group-hover:border-white transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" strokeWidth={1.25} />
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
                title="Solarien Energy - Nossa História"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </AspectRatio>
        </div>

        <div className="text-center mt-10">
          <PrimaryButton href="https://wa.me/5511997361698" target="_blank" rel="noopener noreferrer">
            Quero Economizar Agora
          </PrimaryButton>
        </div>

        <div className="mt-16">
          <PremiumGrid cols={3}>
            <PremiumCard>
              <PremiumIconBadge Icon={Zap} />
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Inovação</h3>
              <p className="text-white/60 font-light text-sm">Tecnologia de ponta para energia limpa e distribuída.</p>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={Leaf} />
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Sustentabilidade</h3>
              <p className="text-white/60 font-light text-sm">Compromisso com a preservação do meio ambiente.</p>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={Users} />
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Comunidade</h3>
              <p className="text-white/60 font-light text-sm">Conectando pessoas e empresas à energia acessível.</p>
            </PremiumCard>
          </PremiumGrid>
        </div>
      </div>
    </PremiumSection>
  );
};

export default VideoSection;
