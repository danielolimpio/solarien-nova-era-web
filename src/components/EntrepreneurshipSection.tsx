
import React from 'react';
import { Zap, Users, Target, TrendingUp, Star, Award, Banknote, Rocket } from 'lucide-react';
import { Button } from './ui/button';

const EntrepreneurshipSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Seja um expert no mercado",
      description: "Domine o mercado livre de energia e torne-se referência"
    },
    {
      icon: TrendingUp,
      title: "Construa sua jornada de sucesso",
      description: "Desenvolva uma carreira sólida e lucrativa no setor energético"
    },
    {
      icon: Zap,
      title: "Ganhe conectando estabelecimentos",
      description: "Receba comissões por cada estabelecimento conectado"
    },
    {
      icon: Users,
      title: "Ganhe formando equipe de licenciados",
      description: "Construa sua rede e maximize seus ganhos"
    }
  ];

  // Componente de nota de real extremamente realista e curvada
  const RealNote = ({ value, color, animationDelay, animationDuration }: { 
    value: string, 
    color: string,
    animationDelay: number,
    animationDuration: number 
  }) => (
    <div 
      className="absolute money-animation opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${animationDuration}s`,
        transform: `rotate(${Math.random() * 60 - 30}deg)`
      }}
    >
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradiente principal para simular curvatura 3D */}
          <radialGradient id={`noteGradient-${value}-${animationDelay}`} cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8"/>
            <stop offset="40%" stopColor={color} stopOpacity="0.6"/>
            <stop offset="70%" stopColor={color} stopOpacity="0.4"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.2"/>
          </radialGradient>
          
          {/* Gradiente para sombra 3D */}
          <linearGradient id={`shadowGradient-${value}-${animationDelay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.4)"/>
            <stop offset="50%" stopColor="rgba(0,0,0,0.2)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
          </linearGradient>
          
          {/* Gradiente para bordas */}
          <linearGradient id={`borderGradient-${value}-${animationDelay}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#fff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#fff" stopOpacity="0.6"/>
          </linearGradient>
          
          {/* Filtros para efeitos */}
          <filter id={`blur-${value}-${animationDelay}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8"/>
          </filter>
          
          <filter id={`shadow-${value}-${animationDelay}`}>
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
          
          {/* Padrão de textura micro */}
          <pattern id={`microTexture-${value}-${animationDelay}`} x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" opacity="0.05">
            <circle cx="2" cy="2" r="0.5" fill="#fff"/>
            <rect x="0" y="0" width="2" height="2" fill="none" stroke="#fff" strokeWidth="0.1"/>
          </pattern>
        </defs>
        
        {/* Sombra projetada */}
        <path 
          d="M12 8 Q60 -2 108 8 Q115 30 108 52 Q60 62 12 52 Q5 30 12 8 Z" 
          fill={`url(#shadowGradient-${value}-${animationDelay})`}
          transform="translate(4, 6)"
          filter={`url(#blur-${value}-${animationDelay})`}
        />
        
        {/* Corpo principal da nota com curvatura extrema */}
        <path 
          d="M8 4 Q60 -8 112 4 Q118 30 112 56 Q60 68 8 56 Q2 30 8 4 Z" 
          fill={`url(#noteGradient-${value}-${animationDelay})`}
          stroke={`url(#borderGradient-${value}-${animationDelay})`}
          strokeWidth="1" 
          filter={`url(#shadow-${value}-${animationDelay})`}
        />
        
        {/* Textura micro da nota */}
        <path 
          d="M8 4 Q60 -8 112 4 Q118 30 112 56 Q60 68 8 56 Q2 30 8 4 Z" 
          fill={`url(#microTexture-${value}-${animationDelay})`}
        />
        
        {/* Borda interna decorativa curvada */}
        <path 
          d="M12 8 Q60 -4 108 8 Q114 30 108 52 Q60 64 12 52 Q6 30 12 8 Z" 
          fill="none"
          stroke="#fff" 
          strokeWidth="0.5" 
          strokeOpacity="0.4"
        />
        
        {/* Segunda borda interna */}
        <path 
          d="M16 12 Q60 0 104 12 Q110 30 104 48 Q60 60 16 48 Q10 30 16 12 Z" 
          fill="none"
          stroke="#fff" 
          strokeWidth="0.3" 
          strokeOpacity="0.2"
        />
        
        {/* Marca do Banco Central do Brasil */}
        <ellipse cx="25" cy="18" rx="8" ry="10" fill="#fff" fillOpacity="0.15" filter={`url(#blur-${value}-${animationDelay})`}/>
        <text x="25" y="22" textAnchor="middle" fontSize="4" fill="#fff" opacity="0.3" fontWeight="bold">BCB</text>
        
        {/* Símbolo R$ */}
        <text x="20" y="35" fontSize="8" fill="#fff" fontWeight="bold" opacity="0.7">R$</text>
        
        {/* Valor da nota - grande e centralizado */}
        <text x="60" y="38" textAnchor="middle" fontSize="20" fill="#fff" fontWeight="bold" opacity="0.8" fontFamily="serif">{value}</text>
        
        {/* Elementos decorativos das bordas - cantos */}
        <circle cx="18" cy="15" r="2.5" fill="#fff" fillOpacity="0.15"/>
        <circle cx="102" cy="18" r="2" fill="#fff" fillOpacity="0.15"/>
        <circle cx="15" cy="45" r="2.2" fill="#fff" fillOpacity="0.15"/>
        <circle cx="105" cy="42" r="2.8" fill="#fff" fillOpacity="0.15"/>
        
        {/* Padrão decorativo central - marca d'água */}
        <ellipse cx="80" cy="30" rx="15" ry="12" fill="#fff" fillOpacity="0.08" filter={`url(#blur-${value}-${animationDelay})`}/>
        <ellipse cx="85" cy="35" rx="8" ry="6" fill="#fff" fillOpacity="0.05"/>
        
        {/* Linhas de segurança */}
        <rect x="45" y="25" width="30" height="4" rx="2" fill="#fff" fillOpacity="0.12"/>
        <rect x="40" y="32" width="20" height="2.5" rx="1.25" fill="#fff" fillOpacity="0.08"/>
        <rect x="48" y="37" width="15" height="2" rx="1" fill="#fff" fillOpacity="0.06"/>
        
        {/* Micro linhas de impressão */}
        <line x1="30" y1="45" x2="55" y2="45" stroke="#fff" strokeWidth="0.4" strokeOpacity="0.15"/>
        <line x1="30" y1="47" x2="50" y2="47" stroke="#fff" strokeWidth="0.3" strokeOpacity="0.12"/>
        <line x1="30" y1="49" x2="45" y2="49" stroke="#fff" strokeWidth="0.3" strokeOpacity="0.08"/>
        
        {/* Número de série realista */}
        <text x="15" y="54" fontSize="3.5" fill="#fff" opacity="0.35" fontFamily="monospace" letterSpacing="0.5">
          {value === "100" ? "AA" : value === "50" ? "BB" : "CC"}{Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}A
        </text>
        
        {/* Código de barras simulado */}
        <g opacity="0.2">
          {[...Array(12)].map((_, i) => (
            <rect 
              key={i} 
              x={75 + i * 2} 
              y={48} 
              width={i % 3 === 0 ? 1.5 : 0.8} 
              height={8} 
              fill="#fff"
            />
          ))}
        </g>
        
        {/* Marca d'água central adicional */}
        <ellipse cx="90" cy="25" rx="10" ry="15" fill="#fff" fillOpacity="0.04" filter={`url(#blur-${value}-${animationDelay})`}/>
        
        {/* Elementos holográficos simulados */}
        <ellipse cx="85" cy="15" rx="6" ry="3" fill="#fff" fillOpacity="0.08" transform="rotate(45 85 15)"/>
        <ellipse cx="95" cy="45" rx="4" ry="2" fill="#fff" fillOpacity="0.06" transform="rotate(-30 95 45)"/>
        
        {/* Faixa de segurança */}
        <rect x="75" y="10" width="25" height="1.5" rx="0.75" fill="#fff" fillOpacity="0.1"/>
        <rect x="77" y="13" width="21" height="1" rx="0.5" fill="#fff" fillOpacity="0.08"/>
        <rect x="79" y="16" width="17" height="0.8" rx="0.4" fill="#fff" fillOpacity="0.06"/>
        
        {/* Padrões fractais nas bordas */}
        <path d="M12 8 Q15 10 18 8 Q21 6 24 8" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.1"/>
        <path d="M96 52 Q99 50 102 52 Q105 54 108 52" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.1"/>
      </svg>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001a0e 0%, #002113 50%, #003d20 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-solarien-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-solarien-secondary/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-solarien-primary/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-solarien-secondary/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Floating energy particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-solarien-primary rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-solarien-primary/20 border border-solarien-primary/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-solarien-primary" />
            <span className="text-solarien-primary font-medium">Oportunidade de Negócio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient block mb-2">Energia para</span>
            <span className="text-white">Empreender</span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="text-gradient">Empreender para</span> Compartilhar
          </h3>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Profissionais estão transformando o mercado com energia solar compartilhada, um modelo revolucionário que gera fortunas. 
            O Mercado Livre de Energia é a nova forma acessível e lucrativa para empreendedores.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm border border-solarien-primary/30 rounded-2xl p-6 hover:border-solarien-primary/50 transition-all duration-500 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Section with Money Background */}
        <div className="bg-gradient-to-r from-green-900/40 via-green-800/30 to-green-900/40 backdrop-blur-sm border border-solarien-primary/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          {/* Animated Real Notes Background - Mais realistas */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Notas de R$ 100 - Verde escuro */}
            {[...Array(12)].map((_, i) => (
              <RealNote 
                key={`note-100-${i}`}
                value="100" 
                color="#1a472a"
                animationDelay={Math.random() * 10}
                animationDuration={8 + Math.random() * 6}
              />
            ))}
            
            {/* Notas de R$ 50 - Verde médio */}
            {[...Array(10)].map((_, i) => (
              <RealNote 
                key={`note-50-${i}`}
                value="50" 
                color="#2d5a3d"
                animationDelay={Math.random() * 8}
                animationDuration={7 + Math.random() * 5}
              />
            ))}
            
            {/* Notas de R$ 20 - Verde claro */}
            {[...Array(8)].map((_, i) => (
              <RealNote 
                key={`note-20-${i}`}
                value="20" 
                color="#22c55e"
                animationDelay={Math.random() * 12}
                animationDuration={6 + Math.random() * 4}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Banknote className="w-12 h-12 text-solarien-primary" />
              <Star className="w-8 h-8 text-solarien-secondary animate-pulse" />
              <Award className="w-10 h-10 text-solarien-primary" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Ganhos 1ª Fatura</span>
            </h3>
            
            <div className="text-6xl md:text-8xl font-bold text-gradient mb-4">
              ATÉ 80%
            </div>
            
            <p className="text-2xl text-white font-semibold mb-6">
              de Comissão sobre Valor Faturável
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-solarien-primary/10 border border-solarien-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-solarien-primary mb-2">1ª Fatura</div>
                <div className="text-white">Ganho Imediato</div>
              </div>
              <div className="bg-solarien-primary/10 border border-solarien-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-solarien-primary mb-2">Recorrente</div>
                <div className="text-white">Ganho Mensal</div>
              </div>
              <div className="bg-solarien-primary/10 border border-solarien-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-solarien-primary mb-2">Equipe</div>
                <div className="text-white">Ganho em Rede</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-solarien-primary via-solarien-secondary to-solarien-primary text-black font-bold px-16 py-8 text-2xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-solarien-primary/50 glow-effect">
            QUERO EMPREENDER AGORA
          </Button>
          
          <p className="text-gray-400 mt-6 text-lg">
            Comece sua jornada de sucesso no mercado livre de energia
          </p>

          {/* Icons below the text */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse">
                <Rocket className="w-4 h-4 text-black" />
              </div>
              <span className="text-solarien-primary text-sm font-medium">Inovação</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse delay-300">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-solarien-primary text-sm font-medium">Energia</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse delay-500">
                <Target className="w-4 h-4 text-black" />
              </div>
              <span className="text-solarien-primary text-sm font-medium">Objetivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurshipSection;
