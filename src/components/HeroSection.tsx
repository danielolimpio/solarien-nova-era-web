
import React, { useCallback, useMemo } from 'react';
import { Button } from './ui/button';
import DiscountSimulator from './DiscountSimulator';
import { CircleDollarSign, Wrench, SquareSlash } from 'lucide-react';
import TypewriterText from './hero/TypewriterText';

const HeroSection = () => {
  const texts = useMemo(() => [
    'Energia do Futuro',
    'Reduza até 45%',
    'Migração Grátis!',
    'Suporte Rápido'
  ], []);

  const handleSaibaMaisClick = useCallback(() => {
    const phoneNumber = '+5511997361698';
    const message = 'Olá! Gostaria de saber mais sobre energia limpa e economia na conta de luz.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const benefitsData = useMemo(() => [
    { Icon: CircleDollarSign, text: 'Sem Custos' },
    { Icon: Wrench, text: 'Sem Obras' },
    { Icon: SquareSlash, text: 'Sem Placas' }
  ], []);

  const statisticsData = useMemo(() => [
    { value: 'Até 45%', label: 'Economia Garantida' },
    { value: '100k', label: 'Clientes Migraram' },
    { value: '4200', label: 'Cidades Atingidas' },
    { value: '95%', label: 'Taxa de Migração' }
  ], []);

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden content-visibility-auto"
        itemScope 
        itemType="https://schema.org/WebPageElement"
        data-seo-keywords="energia solar, mercado livre energia, economia conta luz"
      >
        {/* Background otimizado com srcset responsivo */}
        <div className="absolute inset-0">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
            />
            <source 
              media="(min-width: 769px)" 
              srcSet="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e759784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Painéis solares fotovoltaicos gerando energia limpa e renovável sustentável para economia na conta de luz"
              className="w-full h-full object-cover will-change-transform brightness-[0.3]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              itemProp="image"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        {/* Efeitos de energia - responsivos */}
        <div className="absolute inset-0 will-change-opacity" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-radial from-[#02ff91]/30 via-[#02ff91]/15 to-transparent rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-soft-pulse" />
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-gradient-radial from-[#00c26f]/20 via-[#00c26f]/10 to-transparent rounded-full blur-lg sm:blur-xl md:blur-2xl animate-soft-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/4 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-radial from-[#00844e]/15 via-[#00844e]/8 to-transparent rounded-full blur-md sm:blur-lg md:blur-xl animate-soft-pulse delay-2000" />
        </div>

        {/* Conteúdo principal - completamente responsivo */}
        <header className="relative z-10 text-center px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-22 md:pt-24 lg:pt-20">
          <div className="max-w-4xl mx-auto">
            {/* H1 otimizado para SEO */}
            <h1 className="sr-only" itemProp="name">
              Solarien Energy - Energia Solar e Mercado Livre de Energia com Economia até 45% na Conta de Luz - Alternativa sustentável a igreen energy, lex alexandria, alexandria energia, lex energia e enerzee
            </h1>
            
            {/* Texto animado com atributos SEO - responsivo */}
            <div data-seo-context="energia-renovavel-limpa" className="mb-4 sm:mb-5 md:mb-6">
              <TypewriterText texts={texts} />
            </div>
            
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              itemProp="description"
              data-seo-keywords="gestão contratos, consultoria energética, migração gratuita, energia por assinatura"
            >
              <strong>Gestão de contratos e consultoria energética</strong> com{' '}
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent font-semibold">
                migração gratuita para energia por assinatura e mercado livre
              </span>{' '}
              - <em>Sem custos, sem obras, sem instalação de placas solares</em>
            </p>

            {/* Seção de benefícios - SEMPRE horizontal em todos os dispositivos */}
            <div 
              className="flex flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12 hover:animate-soft-pulse transition-all duration-300 flex-wrap" 
              itemScope 
              itemType="https://schema.org/ItemList"
              data-seo-benefits="sem-custos-obras-placas"
            >
              {benefitsData.map(({ Icon, text }, index) => (
                <div key={text} className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink-0" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Icon className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-[#02ff91] flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap" itemProp="name">{text}</span>
                  <meta itemProp="position" content={`${index + 1}`} />
                </div>
              ))}
            </div>
            
            {/* Botões - responsivos com melhor spacing */}
            <div className="flex flex-col sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16">
              <DiscountSimulator>
                <Button 
                  className="w-full sm:w-full md:w-auto bg-gradient-to-r from-[#02ff91] to-[#00c26f] hover:from-[#00c26f] hover:to-[#00844e] text-black font-bold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 md:hover:scale-110 shadow-2xl border-2 border-[#02ff91] hover:border-[#00c26f] glow-effect hover:animate-gentle-glow will-change-transform"
                  aria-label="Simular economia na conta de luz com energia solar"
                  data-seo-action="simular-economia-energia-solar"
                >
                  Simular Economia na Conta de Luz
                </Button>
              </DiscountSimulator>
              <Button 
                variant="outline" 
                className="w-full sm:w-full md:w-auto border-2 md:border-3 border-[#02ff91] text-[#02ff91] hover:bg-gradient-to-r hover:from-[#02ff91] hover:to-[#00c26f] hover:text-black font-bold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 md:hover:scale-110 shadow-2xl hover:shadow-[#02ff91]/50 glow-effect hover:animate-gentle-glow will-change-transform"
                onClick={handleSaibaMaisClick}
                aria-label="Saiba mais sobre energia solar e mercado livre"
                data-seo-action="saiba-mais-energia-renovavel"
              >
                Saiba Mais sobre Energia Solar
              </Button>
            </div>
          </div>
          
          {/* Estatísticas - responsivas com layout otimizado */}
          <div 
            className="mt-8 sm:mt-12 md:mt-16 pb-6 sm:pb-8 md:pb-0 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0" 
            itemScope 
            itemType="https://schema.org/Organization"
            data-seo-stats="economia-clientes-cidades-migracao"
          >
            {statisticsData.map(({ value, label }) => (
              <div key={label} className="text-center hover:animate-soft-pulse transition-all duration-300">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-1 sm:mb-2" itemProp="description">{value}</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight px-1">{label}</div>
              </div>
            ))}
          </div>
        </header>
      </section>

      {/* Separador gradiente */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#02ff91] via-[#00c26f] to-transparent opacity-80" aria-hidden="true" />
    </>
  );
};

export default React.memo(HeroSection);
