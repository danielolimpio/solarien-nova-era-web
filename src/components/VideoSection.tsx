import React, { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Play, Zap, Leaf, Users } from 'lucide-react';
import { PrimaryButton } from './premium/PremiumUI';

/**
 * Light / clean variant of the section — used to break the all-green rhythm
 * on the Home page. Dark text on off-white background.
 */
const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = 'F2uVQecpZ4M';

  const features = [
    { Icon: Zap, title: 'Inovação', desc: 'Tecnologia de ponta para energia limpa e distribuída.' },
    { Icon: Leaf, title: 'Sustentabilidade', desc: 'Compromisso com a preservação do meio ambiente.' },
    { Icon: Users, title: 'Comunidade', desc: 'Conectando pessoas e empresas à energia acessível.' },
  ];

  return (
    <section className="py-20 border-y border-black/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Nossa História</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="text-center mb-12">
            <h2 id="video-heading" className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">
              Conheça Nossa História
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-3xl mx-auto">
              Descubra como estamos transformando o futuro da energia no Brasil e construindo um mundo mais sustentável para todos.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="border border-black/10 overflow-hidden shadow-sm">
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
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-white/70 bg-black/40 backdrop-blur flex items-center justify-center group-hover:border-white transition-colors">
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

            <div className="mt-16 grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">
              {features.map(({ Icon, title, desc }) => (
                <article key={title} className="bg-[#f7f5f0] p-8 flex flex-col hover:bg-white transition-colors">
                  <div className="w-14 h-14 rounded-md border border-black/15 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-slate-900" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 tracking-tight mb-2">{title}</h3>
                  <p className="text-slate-600 font-light text-sm">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
