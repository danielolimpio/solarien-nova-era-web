

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import DiscountSimulator from './DiscountSimulator';
import { CircleDollarSign, Wrench, SquareSlash } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Energia do Futuro',
    'Economia Garantida',
    'Portabilidade Grátis',
    'Suporte Humanizado'
  ];

  const handleSaibaMaisClick = () => {
    const phoneNumber = '+5511997361698';
    const message = 'Olá! Gostaria de saber mais sobre energia limpa e economia na conta de luz.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        {/* Ultra Realistic Solar Rays Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Raios primários ultra-finos */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`sunray-primary-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 120 - 10}%`,
                top: `-30%`,
                width: '0.2px',
                height: '130%',
                animationDelay: `${Math.random() * 40}s`,
                animationDuration: `${35 + Math.random() * 25}s`,
                transform: `rotate(${12 + Math.random() * 8}deg) translateY(-60px)`,
                opacity: Math.random() * 0.15 + 0.10,
                borderRadius: '50% 50% 50% 50% / 90% 90% 10% 10%',
                background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.18) 0%, rgba(255, 223, 127, 0.12) 25%, rgba(255, 235, 157, 0.08) 60%, transparent 100%)',
                animation: `sunrayFall ${35 + Math.random() * 25}s linear infinite`,
              }}
            />
          ))}
          
          {/* Raios secundários dourados */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`sunray-gold-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 115 - 7}%`,
                top: `-25%`,
                width: '0.3px',
                height: '125%',
                animationDelay: `${Math.random() * 30}s`,
                animationDuration: `${25 + Math.random() * 20}s`,
                transform: `rotate(${10 + Math.random() * 6}deg) translateY(-45px)`,
                opacity: Math.random() * 0.18 + 0.12,
                borderRadius: '50% 50% 50% 50% / 85% 85% 15% 15%',
                background: 'linear-gradient(to bottom, rgba(255, 193, 7, 0.22) 0%, rgba(255, 215, 0, 0.18) 20%, rgba(255, 223, 127, 0.14) 50%, rgba(255, 235, 157, 0.08) 80%, transparent 100%)',
                animation: `sunrayFall ${25 + Math.random() * 20}s linear infinite`,
              }}
            />
          ))}
          
          {/* Raios mais espessos para profundidade */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`sunray-thick-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 110 - 5}%`,
                top: `-35%`,
                width: '0.5px',
                height: '135%',
                animationDelay: `${Math.random() * 50}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                transform: `rotate(${8 + Math.random() * 4}deg) translateY(-50px)`,
                opacity: Math.random() * 0.20 + 0.15,
                borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                background: 'linear-gradient(to bottom, rgba(255, 193, 7, 0.25) 0%, rgba(255, 215, 0, 0.20) 15%, rgba(255, 223, 127, 0.15) 40%, rgba(255, 235, 157, 0.10) 70%, transparent 100%)',
                animation: `sunrayFall ${20 + Math.random() * 15}s linear infinite`,
              }}
            />
          ))}
          
          {/* Micro raios ambiente ultra-sutis */}
          {[...Array(60)].map((_, i) => (
            <div
              key={`sunray-micro-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 130 - 15}%`,
                top: `-20%`,
                width: '0.15px',
                height: '120%',
                animationDelay: `${Math.random() * 60}s`,
                animationDuration: `${50 + Math.random() * 30}s`,
                transform: `rotate(${15 + Math.random() * 10}deg) translateY(-30px)`,
                opacity: Math.random() * 0.10 + 0.08,
                borderRadius: '50% 50% 50% 50% / 95% 95% 5% 5%',
                background: 'linear-gradient(to bottom, rgba(255, 245, 178, 0.12) 0%, rgba(255, 235, 157, 0.08) 50%, transparent 100%)',
                animation: `sunrayFall ${50 + Math.random() * 30}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* CSS Animation for ultra-realistic sun rays */}
        <style>{`
          @keyframes sunrayFall {
            0% {
              transform: translateY(-130vh) rotate(var(--rotation, 12deg));
              opacity: 0;
            }
            8% {
              opacity: var(--max-opacity, 0.15);
            }
            92% {
              opacity: var(--max-opacity, 0.15);
            }
            100% {
              transform: translateY(130vh) rotate(var(--rotation, 12deg));
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
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight min-h-[2.5em] flex items-center justify-center overflow-visible">
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent overflow-visible">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Gestão de contratos e consultoria energética com{' '}
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent font-semibold">
                migração gratuita
              </span>{' '}
              para energia por assinatura e mercado livre
            </p>

            {/* New Benefits Section with Icons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium">Sem Custos</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium">Sem Obras</span>
              </div>
              <div className="flex items-center gap-2">
                <SquareSlash className="w-5 h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium">Sem Placas</span>
              </div>
            </div>
            
            {/* Enhanced Buttons with Neon Effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <DiscountSimulator>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#02ff91] to-[#00c26f] hover:from-[#00c26f] hover:to-[#00844e] text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse border-2 border-[#02ff91] hover:border-[#00c26f] glow-effect">
                  Simular Economia
                </Button>
              </DiscountSimulator>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-3 border-[#02ff91] text-[#02ff91] hover:bg-gradient-to-r hover:from-[#02ff91] hover:to-[#00c26f] hover:text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:shadow-[#02ff91]/50 glow-effect"
                onClick={handleSaibaMaisClick}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Enhanced Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">Até 45%</div>
              <div className="text-gray-300 text-sm md:text-base">Economia Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">100k</div>
              <div className="text-gray-300 text-sm md:text-base">Clientes Migraram</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">4200</div>
              <div className="text-gray-300 text-sm md:text-base">Cidades Atingidas</div>
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

