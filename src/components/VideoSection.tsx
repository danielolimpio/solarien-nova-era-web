
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Wind Farm Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Wind turbines landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-solarien-primary/10"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-solarien-primary/20 via-solarien-primary/10 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-radial from-solarien-secondary/15 via-solarien-secondary/8 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-2/3 w-20 h-20 bg-gradient-radial from-solarien-tertiary/20 via-solarien-tertiary/10 to-transparent rounded-full blur-md animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Conheça</span> <span className="text-white">Nossa História</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra como estamos transformando o futuro da energia no Brasil e construindo um mundo mais sustentável para todos.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-solarien-primary/10 via-transparent to-solarien-secondary/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-solarien-primary/20 shadow-2xl">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-solarien-primary/30 to-solarien-secondary/30 rounded-2xl blur-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-solarien-secondary/20 to-solarien-tertiary/20 rounded-2xl blur-lg"></div>
            
            {/* Video Wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-solarien-primary/30">
              <AspectRatio ratio={16/9}>
                <iframe
                  src="https://www.youtube.com/embed/tzu8S27mAyk?rel=0&modestbranding=1&showinfo=0"
                  title="Solarien Energy - Nossa História"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
              
              {/* Glow effect overlay */}
              <div className="absolute inset-0 rounded-2xl shadow-inner border border-solarien-primary/20 pointer-events-none"></div>
            </div>
            
            {/* Video Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Assista ao vídeo e entenda como a <span className="text-gradient font-semibold">Solarien Energy</span> está revolucionando o mercado de energia limpa no Brasil.
              </p>
              
              {/* CTA Button */}
              <a
                href="https://wa.me/5511997361698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-solarien-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Quero Economizar Agora
              </a>
            </div>
          </div>
          
          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-solarien-primary/10 hover:border-solarien-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8" style={{ color: '#002113' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inovação</h3>
              <p className="text-gray-400 text-sm">Tecnologia de ponta para energia limpa</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-solarien-secondary/10 hover:border-solarien-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-solarien-secondary to-solarien-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8" style={{ color: '#002113' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sustentabilidade</h3>
              <p className="text-gray-400 text-sm">Compromisso com o meio ambiente</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-solarien-tertiary/10 hover:border-solarien-tertiary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-solarien-tertiary to-solarien-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8" style={{ color: '#002113' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comunidade</h3>
              <p className="text-gray-400 text-sm">Conectando pessoas à energia limpa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
