import React, { useCallback, useMemo } from 'react';
import { ArrowRight, CircleDollarSign, Wrench, SquareSlash } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from './hero/TypewriterText';

const HeroSection = () => {
  const texts = useMemo(
    () => ['Energia do Futuro', 'Reduza até 45%', 'Migração Grátis', 'Licença Gratuita'],
    []
  );

  const handleContact = useCallback(() => {
    const url = `https://wa.me/5511997361698?text=${encodeURIComponent(
      'Olá! Gostaria de saber mais sobre energia limpa e economia na conta de luz.'
    )}`;
    window.open(url, '_blank');
  }, []);

  const benefits = useMemo(
    () => [
      { Icon: CircleDollarSign, text: 'Sem Custos' },
      { Icon: Wrench, text: 'Sem Obras' },
      { Icon: SquareSlash, text: 'Sem Placas' },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: 'Até 45%', label: 'Economia' },
      { value: '100k+', label: 'Clientes' },
      { value: '4.200', label: 'Cidades' },
      { value: '95%', label: 'Migração' },
    ],
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden border-b border-white/10"
      style={{ backgroundColor: '#002113' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.08),_transparent_60%)]" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Painéis solares fotovoltaicos gerando energia limpa e renovável"
          className="w-full h-full object-cover opacity-[0.12]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary" />
            Solarien Energy
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-6">
            Economia garantida em<br className="hidden md:block" /> energia renovável.
          </h1>

          <div className="mb-6">
            <TypewriterText texts={texts} />
          </div>

          <p className="text-base md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Gestão de contratos e consultoria energética com migração gratuita para
            <span className="text-white"> energia por assinatura e mercado livre</span>. Sem custos,
            sem obras, sem instalação de placas.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {benefits.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/75 text-sm font-light">
                <Icon className="w-4 h-4 text-solarien-primary" strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors w-full sm:w-auto"
            >
              Falar com Especialista
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Conhecer Soluções
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto divide-x divide-white/10 border-t border-white/10 pt-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-2xl md:text-3xl font-light text-white">{s.value}</div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
