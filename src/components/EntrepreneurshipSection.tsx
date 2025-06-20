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
  const RealNote = ({ value, color }: { value: string, color: string }) => (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradiente para simular curvatura */}
        <linearGradient id={`noteGradient-${value}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4"/>
          <stop offset="30%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="70%" stopColor={color} stopOpacity="0.35"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.2"/>
        </linearGradient>
        
        {/* Gradiente para sombra 3D */}
        <linearGradient id={`shadowGradient-${value}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)"/>
          <stop offset="50%" stopColor="rgba(0,0,0,0.08)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.05)"/>
        </linearGradient>
        
        {/* Filtro para desfoque da marca d'água */}
        <filter id={`blur-${value}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
        </filter>
        
        {/* Padrão de textura */}
        <pattern id={`texture-${value}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" opacity="0.03">
          <rect x="0" y="0" width="4" height="4" fill="#fff"/>
          <rect x="4" y="4" width="4" height="4" fill="#fff"/>
        </pattern>
      </defs>
      
      {/* Sombra 3D curvada */}
      <path 
        d="M8 5 Q50 -2 92 5 Q96 25 92 45 Q50 52 8 45 Q4 25 8 5 Z" 
        fill={`url(#shadowGradient-${value})`}
        transform="translate(3, 3)"
      />
      
      {/* Corpo principal da nota curvada */}
      <path 
        d="M5 2 Q50 -5 95 2 Q98 25 95 48 Q50 55 5 48 Q2 25 5 2 Z" 
        fill={`url(#noteGradient-${value})`}
        stroke="#fff" 
        strokeWidth="0.5" 
        strokeOpacity="0.2"
      />
      
      {/* Textura da nota */}
      <path 
        d="M5 2 Q50 -5 95 2 Q98 25 95 48 Q50 55 5 48 Q2 25 5 2 Z" 
        fill={`url(#texture-${value})`}
      />
      
      {/* Borda interna decorativa curvada */}
      <path 
        d="M8 5 Q50 -2 92 5 Q95 25 92 45 Q50 52 8 45 Q5 25 8 5 Z" 
        fill="none"
        stroke="#fff" 
        strokeWidth="0.3" 
        strokeOpacity="0.15"
      />
      
      {/* Marca do Banco Central (simulada) */}
      <ellipse cx="20" cy="15" rx="6" ry="8" fill="#fff" fillOpacity="0.08" filter={`url(#blur-${value})`}/>
      <text x="20" y="18" textAnchor="middle" fontSize="3" fill="#fff" opacity="0.1" fontWeight="bold">BC</text>
      
      {/* Texto R$ */}
      <text x="15" y="28" fontSize="6" fill="#fff" fontWeight="bold" opacity="0.4">R$</text>
      
      {/* Valor da nota - tamanho maior e posicionamento melhor */}
      <text x="50" y="30" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold" opacity="0.5">{value}</text>
      
      {/* Elementos decorativos das bordas */}
      <circle cx="15" cy="10" r="2" fill="#fff" fillOpacity="0.08"/>
      <circle cx="85" cy="15" r="1.5" fill="#fff" fillOpacity="0.08"/>
      <circle cx="12" cy="40" r="1.8" fill="#fff" fillOpacity="0.08"/>
      <circle cx="88" cy="35" r="2.2" fill="#fff" fillOpacity="0.08"/>
      
      {/* Padrão decorativo central simulando desenhos da nota */}
      <ellipse cx="65" cy="25" rx="12" ry="8" fill="#fff" fillOpacity="0.06" filter={`url(#blur-${value})`}/>
      <rect x="40" y="20" width="25" height="3" rx="1.5" fill="#fff" fillOpacity="0.08"/>
      <rect x="35" y="26" width="15" height="2" rx="1" fill="#fff" fillOpacity="0.06"/>
      
      {/* Linhas decorativas simulando micro impressões */}
      <line x1="25" y1="35" x2="45" y2="35" stroke="#fff" strokeWidth="0.3" strokeOpacity="0.08"/>
      <line x1="25" y1="37" x2="40" y2="37" stroke="#fff" strokeWidth="0.3" strokeOpacity="0.06"/>
      <line x1="25" y1="39" x2="35" y2="39" stroke="#fff" strokeWidth="0.3" strokeOpacity="0.04"/>
      
      {/* Número de série mais realista */}
      <text x="12" y="46" fontSize="3" fill="#fff" opacity="0.2" fontFamily="monospace">
        {value === "100" ? "AA" : value === "50" ? "BB" : "CC"}{Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}
      </text>
      
      {/* Marca d'água central */}
      <ellipse cx="75" cy="25" rx="8" ry="12" fill="#fff" fillOpacity="0.03" filter={`url(#blur-${value})`}/>
      
      {/* Elementos de segurança simulados */}
      <rect x="70" y="8" width="20" height="1" rx="0.5" fill="#fff" fillOpacity="0.05"/>
      <rect x="72" y="10" width="16" height="0.8" rx="0.4" fill="#fff" fillOpacity="0.04"/>
      <rect x="74" y="12" width="12" height="0.6" rx="0.3" fill="#fff" fillOpacity="0.03"/>
    </svg>
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
          {/* Animated Real Notes Background */}
          <div className="absolute inset-0 overflow-hidden opacity-35">
            {/* Notas de R$ 100 */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`note-100-${i}`}
                className="absolute money-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                }}
              >
                <RealNote value="100" color="#1a472a" />
              </div>
            ))}
            
            {/* Notas de R$ 50 */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`note-50-${i}`}
                className="absolute money-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${5 + Math.random() * 3}s`,
                }}
              >
                <RealNote value="50" color="#2d5a3d" />
              </div>
            ))}
            
            {/* Notas de R$ 20 */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`note-20-${i}`}
                className="absolute money-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                }}
              >
                <RealNote value="20" color="#00a85c" />
              </div>
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
