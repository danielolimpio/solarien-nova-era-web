
import React from 'react';
import { Button } from './ui/button';
import DiscountSimulator from './DiscountSimulator';
import { CircleDollarSign, Wrench, SquareSlash } from 'lucide-react';
import TypewriterText from './hero/TypewriterText';

const HeroSection = () => {
  const texts = [
    'Energia do Futuro',
    'Reduza até 45%',
    'Migração Grátis!',
    'Suporte Rápido'
  ];

  const handleSaibaMaisClick = () => {
    const phoneNumber = '+5511997361698';
    const message = 'Olá! Gostaria de saber mais sobre energia limpa e economia na conta de luz.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        {/* Enhanced Energy Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-[#02ff91]/30 via-[#02ff91]/15 to-transparent rounded-full blur-3xl animate-soft-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-[#00c26f]/20 via-[#00c26f]/10 to-transparent rounded-full blur-2xl animate-soft-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-radial from-[#00844e]/15 via-[#00844e]/8 to-transparent rounded-full blur-xl animate-soft-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-32 md:pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Animated Typing Text */}
            <TypewriterText texts={texts} />
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Gestão de contratos e consultoria energética com{' '}
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent font-semibold">
                migração gratuita
              </span>{' '}
              para energia por assinatura e mercado livre
            </p>

            {/* New Benefits Section with Icons - Responsive Layout */}
            <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 mb-12 hover:animate-soft-pulse transition-all duration-300">
              <div className="flex items-center gap-1 sm:gap-2">
                <CircleDollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">Sem Custos</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">Sem Obras</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <SquareSlash className="w-4 h-4 sm:w-5 sm:h-5 text-[#02ff91]" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">Sem Placas</span>
              </div>
            </div>
            
            {/* Enhanced Buttons with Neon Effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <DiscountSimulator>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#02ff91] to-[#00c26f] hover:from-[#00c26f] hover:to-[#00844e] text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-[#02ff91] hover:border-[#00c26f] glow-effect hover:animate-gentle-glow">
                  Simular Economia
                </Button>
              </DiscountSimulator>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-3 border-[#02ff91] text-[#02ff91] hover:bg-gradient-to-r hover:from-[#02ff91] hover:to-[#00c26f] hover:text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[#02ff91]/50 glow-effect hover:animate-gentle-glow"
                onClick={handleSaibaMaisClick}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Enhanced Statistics */}
          <div className="mt-16 pb-8 md:pb-0 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center hover:animate-soft-pulse transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">Até 45%</div>
              <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">Economia Garantida</div>
            </div>
            <div className="text-center hover:animate-soft-pulse transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">100k</div>
              <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">Clientes Migraram</div>
            </div>
            <div className="text-center hover:animate-soft-pulse transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">4200</div>
              <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">Cidades Atingidas</div>
            </div>
            <div className="text-center hover:animate-soft-pulse transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">Taxa de Migração</div>
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
