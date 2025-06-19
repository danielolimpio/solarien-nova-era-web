import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'A Energia Solar do Futuro',
    'Economia Garantida de 45%',
    'Migração Gratuita Garantida',
    'Suporte 24h Disponível'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Solar Panels Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Dark solar panels background" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        </div>

        {/* Solar Rain Animation - Partículas mais finas e sutis */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Partículas principais - linhas mais finas */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`drop-${i}`}
              className="absolute bg-gradient-to-b from-yellow-300/40 via-yellow-200/30 to-amber-200/20"
              style={{
                left: `${Math.random() * 120 - 10}%`,
                top: `${Math.random() * -100}%`,
                width: '1.5px',
                height: `${Math.random() * 20 + 15}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 4 + 6}s`,
                transform: `rotate(15deg)`,
                opacity: Math.random() * 0.2 + 0.3,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                boxShadow: '0 0 8px rgba(255, 193, 7, 0.2)',
                animation: `fall ${Math.random() * 4 + 6}s linear infinite`,
              }}
            />
          ))}
          
          {/* Partículas médias mais sutis */}
          {[...Array(150)].map((_, i) => (
            <div
              key={`med-drop-${i}`}
              className="absolute bg-gradient-to-b from-yellow-200/35 via-amber-200/25 to-orange-200/15"
              style={{
                left: `${Math.random() * 130 - 15}%`,
                top: `${Math.random() * -80}%`,
                width: '1px',
                height: `${Math.random() * 18 + 12}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                transform: `rotate(12deg)`,
                opacity: Math.random() * 0.15 + 0.25,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                boxShadow: '0 0 6px rgba(255, 193, 7, 0.15)',
                animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
              }}
            />
          ))}
          
          {/* Micro partículas muito sutis */}
          {[...Array(200)].map((_, i) => (
            <div
              key={`micro-drop-${i}`}
              className="absolute bg-gradient-to-b from-amber-100/30 via-yellow-100/20 to-orange-100/10"
              style={{
                left: `${Math.random() * 140 - 20}%`,
                top: `${Math.random() * -60}%`,
                width: '0.8px',
                height: `${Math.random() * 15 + 10}px`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${Math.random() * 6 + 7}s`,
                transform: `rotate(18deg)`,
                opacity: Math.random() * 0.1 + 0.2,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                boxShadow: '0 0 4px rgba(255, 193, 7, 0.1)',
                animation: `fall ${Math.random() * 6 + 7}s linear infinite`,
              }}
            />
          ))}
          
          {/* Algumas partículas um pouco mais visíveis para destaque sutil */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`accent-drop-${i}`}
              className="absolute bg-gradient-to-b from-yellow-300/50 via-amber-300/40 to-orange-200/30"
              style={{
                left: `${Math.random() * 110 - 5}%`,
                top: `${Math.random() * -90}%`,
                width: '2px',
                height: `${Math.random() * 25 + 20}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
                transform: `rotate(10deg)`,
                opacity: Math.random() * 0.2 + 0.4,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                boxShadow: '0 0 10px rgba(255, 193, 7, 0.25)',
                animation: `fall ${Math.random() * 3 + 4}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* CSS Animation for falling effect */}
        <style>{`
          @keyframes fall {
            0% {
              transform: translateY(-100vh) rotate(15deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(15deg);
              opacity: 0;
            }
          }
        `}</style>

        {/* Enhanced Energy Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-[#02ff91]/30 via-[#02ff91]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-[#00c26f]/20 via-[#00c26f]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-radial from-[#00844e]/15 via-[#00844e]/8 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Animated Typing Text */}
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight min-h-[2em] flex items-center justify-center">
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Gestão de contratos e consultoria energética com{' '}
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent font-semibold">
                migração gratuita
              </span>{' '}
              para energia por assinatura e mercado livre
            </p>
            
            {/* Enhanced Buttons with Neon Effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#02ff91] to-[#00c26f] hover:from-[#00c26f] hover:to-[#00844e] text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse border-2 border-[#02ff91] hover:border-[#00c26f] glow-effect">
                Simular Economia
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-3 border-[#02ff91] text-[#02ff91] hover:bg-gradient-to-r hover:from-[#02ff91] hover:to-[#00c26f] hover:text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:shadow-[#02ff91]/50 glow-effect"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Enhanced Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">45%</div>
              <div className="text-gray-300 text-sm md:text-base">Economia Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">24h</div>
              <div className="text-gray-300 text-sm md:text-base">Suporte Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-gray-300 text-sm md:text-base">Cidades Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-300 text-sm md:text-base">Taxa de Migração</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#02ff91] via-[#00c26f] to-transparent opacity-80"></div>
    </>
  );
};

export default HeroSection;
