
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

        {/* Efeitos de energia otimizados */}
        <div className="absolute inset-0 will-change-opacity" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-[#02ff91]/30 via-[#02ff91]/15 to-transparent rounded-full blur-3xl animate-soft-pulse" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-[#00c26f]/20 via-[#00c26f]/10 to-transparent rounded-full blur-2xl animate-soft-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-radial from-[#00844e]/15 via-[#00844e]/8 to-transparent rounded-full blur-xl animate-soft-pulse delay-2000" />
        </div>

        {/* Conteúdo principal com estrutura semântica otimizada */}
        <header className="relative z-10 text-center px-4 pt-32 md:pt-20">
          <div className="max-w-4xl mx-auto">
            {/* H1 otimizado para SEO */}
            <h1 className="sr-only" itemProp="name">
              Solarien Energy - Energia Solar e Mercado Livre de Energia com Economia até 45% na Conta de Luz - Alternativa sustentável a igreen energy, lex alexandria, alexandria energia, lex energia e enerzee
            </h1>
            
            {/* Texto animado com atributos SEO */}
            <div data-seo-context="energia-renovavel-limpa">
              <TypewriterText texts={texts} />
            </div>
            
            <p 
              className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
              itemProp="description"
              data-seo-keywords="gestão contratos, consultoria energética, migração gratuita, energia por assinatura"
            >
              <strong>Gestão de contratos e consultoria energética</strong> com{' '}
              <span className="bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent font-semibold">
                migração gratuita para energia por assinatura e mercado livre
              </span>{' '}
              - <em>Sem custos, sem obras, sem instalação de placas solares</em>
            </p>

            {/* Seção de benefícios com schema estruturado */}
            <div 
              className="flex flex-row justify-center items-center gap-4 sm:gap-6 mb-12 hover:animate-soft-pulse transition-all duration-300" 
              itemScope 
              itemType="https://schema.org/ItemList"
              data-seo-benefits="sem-custos-obras-placas"
            >
              {benefitsData.map(({ Icon, text }, index) => (
                <div key={text} className="flex items-center gap-1 sm:gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#02ff91]" aria-hidden="true" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base" itemProp="name">{text}</span>
                  <meta itemProp="position" content={`${index + 1}`} />
                </div>
              ))}
            </div>
            
            {/* Botões otimizados com texto descritivo e SEO */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <DiscountSimulator>
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-[#02ff91] to-[#00c26f] hover:from-[#00c26f] hover:to-[#00844e] text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-[#02ff91] hover:border-[#00c26f] glow-effect hover:animate-gentle-glow will-change-transform"
                  aria-label="Simular economia na conta de luz com energia solar"
                  data-seo-action="simular-economia-energia-solar"
                >
                  Simular Economia na Conta de Luz
                </Button>
              </DiscountSimulator>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-3 border-[#02ff91] text-[#02ff91] hover:bg-gradient-to-r hover:from-[#02ff91] hover:to-[#00c26f] hover:text-black font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[#02ff91]/50 glow-effect hover:animate-gentle-glow will-change-transform"
                onClick={handleSaibaMaisClick}
                aria-label="Saiba mais sobre energia solar e mercado livre"
                data-seo-action="saiba-mais-energia-renovavel"
              >
                Saiba Mais sobre Energia Solar
              </Button>
            </div>
          </div>
          
          {/* Estatísticas otimizadas com microdata */}
          <div 
            className="mt-16 pb-8 md:pb-0 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" 
            itemScope 
            itemType="https://schema.org/Organization"
            data-seo-stats="economia-clientes-cidades-migracao"
          >
            {statisticsData.map(({ value, label }) => (
              <div key={label} className="text-center hover:animate-soft-pulse transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2" itemProp="description">{value}</div>
                <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">{label}</div>
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
