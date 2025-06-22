import React from 'react';
import { Zap, Users, Target, TrendingUp, Star, Award, Banknote, Rocket, Download, Crown } from 'lucide-react';
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

  // Componente de nota de real estática e realista
  const StaticRealNote = ({ value, color, left, top, rotation }: { 
    value: string, 
    color: string,
    left: string,
    top: string,
    rotation: number
  }) => (
    <div 
      className="absolute opacity-15"
      style={{
        left,
        top,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`noteGradient-${value}-${left}`} cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9"/>
            <stop offset="40%" stopColor={color} stopOpacity="0.7"/>
            <stop offset="70%" stopColor={color} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.3"/>
          </radialGradient>
          
          <linearGradient id={`shadowGradient-${value}-${left}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)"/>
            <stop offset="50%" stopColor="rgba(0,0,0,0.15)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)"/>
          </linearGradient>
          
          <linearGradient id={`borderGradient-${value}-${left}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5"/>
            <stop offset="50%" stopColor="#fff" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#fff" stopOpacity="0.5"/>
          </linearGradient>
          
          <filter id={`shadow-${value}-${left}`}>
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.2"/>
          </filter>
        </defs>
        
        {/* Sombra projetada */}
        <path 
          d="M10 6 Q50 -2 90 6 Q96 25 90 44 Q50 52 10 44 Q4 25 10 6 Z" 
          fill={`url(#shadowGradient-${value}-${left})`}
          transform="translate(2, 3)"
        />
        
        {/* Corpo principal da nota */}
        <path 
          d="M8 4 Q50 -4 92 4 Q98 25 92 46 Q50 54 8 46 Q2 25 8 4 Z" 
          fill={`url(#noteGradient-${value}-${left})`}
          stroke={`url(#borderGradient-${value}-${left})`}
          strokeWidth="0.8" 
          filter={`url(#shadow-${value}-${left})`}
        />
        
        {/* Borda interna decorativa */}
        <path 
          d="M12 8 Q50 0 88 8 Q94 25 88 42 Q50 50 12 42 Q6 25 12 8 Z" 
          fill="none"
          stroke="#fff" 
          strokeWidth="0.4" 
          strokeOpacity="0.3"
        />
        
        {/* Marca do Banco Central */}
        <ellipse cx="20" cy="15" rx="6" ry="8" fill="#fff" fillOpacity="0.1"/>
        <text x="20" y="18" textAnchor="middle" fontSize="3" fill="#fff" opacity="0.25" fontWeight="bold">BCB</text>
        
        {/* Símbolo R$ */}
        <text x="16" y="28" fontSize="6" fill="#fff" fontWeight="bold" opacity="0.6">R$</text>
        
        {/* Valor da nota */}
        <text x="50" y="32" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold" opacity="0.7" fontFamily="serif">{value}</text>
        
        {/* Elementos decorativos */}
        <circle cx="15" cy="12" r="2" fill="#fff" fillOpacity="0.12"/>
        <circle cx="85" cy="15" r="1.5" fill="#fff" fillOpacity="0.12"/>
        <circle cx="12" cy="38" r="1.8" fill="#fff" fillOpacity="0.12"/>
        <circle cx="88" cy="35" r="2.2" fill="#fff" fillOpacity="0.12"/>
        
        {/* Marca d'água central */}
        <ellipse cx="70" cy="25" rx="12" ry="10" fill="#fff" fillOpacity="0.06"/>
        
        {/* Linhas de segurança */}
        <rect x="35" y="20" width="25" height="3" rx="1.5" fill="#fff" fillOpacity="0.1"/>
        <rect x="30" y="26" width="15" height="2" rx="1" fill="#fff" fillOpacity="0.08"/>
        <rect x="38" y="30" width="12" height="1.5" rx="0.75" fill="#fff" fillOpacity="0.06"/>
        
        {/* Número de série */}
        <text x="12" y="45" fontSize="2.5" fill="#fff" opacity="0.3" fontFamily="monospace" letterSpacing="0.3">
          {value === "100" ? "AA" : value === "50" ? "BB" : "CC"}{Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}A
        </text>
        
        {/* Código de barras */}
        <g opacity="0.15">
          {[...Array(10)].map((_, i) => (
            <rect 
              key={i} 
              x={65 + i * 1.5} 
              y={40} 
              width={i % 3 === 0 ? 1.2 : 0.6} 
              height={6} 
              fill="#fff"
            />
          ))}
        </g>
      </svg>
    </div>
  );

  // Premium Golden Trophy Icon Component
  const PremiumTrophyIcon = () => (
    <div className="relative">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#FFA500" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="75%" stopColor="#DAA520" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DC" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
          <radialGradient id="shine" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#DAA520" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#B8860B" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* Trophy Base */}
        <rect x="30" y="60" width="20" height="8" rx="2" fill="url(#goldGradient)" filter="url(#shadow)"/>
        <rect x="25" y="68" width="30" height="6" rx="3" fill="url(#goldGradient)" filter="url(#shadow)"/>
        
        {/* Trophy Stem */}
        <rect x="37" y="52" width="6" height="12" fill="url(#goldGradient)"/>
        
        {/* Trophy Cup */}
        <path d="M20 25 Q20 15 30 15 L50 15 Q60 15 60 25 L60 40 Q60 50 50 52 L30 52 Q20 50 20 40 Z" fill="url(#goldGradient)" filter="url(#glow)"/>
        
        {/* Trophy Handles */}
        <path d="M15 25 Q10 25 10 30 L10 35 Q10 40 15 40" stroke="url(#goldRim)" strokeWidth="3" fill="none"/>
        <path d="M65 25 Q70 25 70 30 L70 35 Q70 40 65 40" stroke="url(#goldRim)" strokeWidth="3" fill="none"/>
        
        {/* Trophy Rim */}
        <ellipse cx="40" cy="25" rx="20" ry="3" fill="url(#goldRim)"/>
        
        {/* Decorative Elements */}
        <circle cx="40" cy="35" r="8" fill="none" stroke="url(#goldRim)" strokeWidth="2" opacity="0.7"/>
        <path d="M35 30 L40 35 L45 30" stroke="url(#goldRim)" strokeWidth="2" fill="none"/>
        
        {/* Crown on top */}
        <path d="M32 15 L35 8 L40 12 L45 8 L48 15" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="35" cy="8" r="2" fill="#FFD700"/>
        <circle cx="40" cy="12" r="2" fill="#FFD700"/>
        <circle cx="45" cy="8" r="2" fill="#FFD700"/>
        
        {/* Shine effect */}
        <ellipse cx="35" cy="30" rx="12" ry="15" fill="url(#shine)" opacity="0.6"/>
        
        {/* Star decorations */}
        <path d="M25 35 L27 37 L30 35 L27 33 Z" fill="#FFF8DC" opacity="0.8"/>
        <path d="M50 35 L52 37 L55 35 L52 33 Z" fill="#FFF8DC" opacity="0.8"/>
        
        {/* Dollar sign in center */}
        <text x="40" y="40" textAnchor="middle" fontSize="12" fill="#B8860B" fontWeight="bold">$</text>
      </svg>
      
      {/* Glow effect around the icon */}
      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-150"></div>
      <div className="absolute inset-0 bg-yellow-300/10 rounded-full blur-2xl scale-200"></div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001a0e 0%, #002113 50%, #003d20 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-solarien-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-solarien-secondary/15 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-solarien-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-solarien-secondary/10 rounded-full blur-xl"></div>
        
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
            <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4" style={{ color: '#002113' }} />
            </div>
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
          
          {/* Download PDF Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://drive.google.com/file/d/1We9W89nqwsFpjlzYVdi5Bb_FKuGrK5pL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-solarien-primary/20 border border-solarien-primary/40 rounded-lg text-solarien-primary hover:bg-solarien-primary/30 transition-all duration-300"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                <Download className="w-4 h-4" style={{ color: '#002113' }} />
              </div>
              <span className="font-medium">Baixar Apresentação PDF</span>
            </a>
          </div>
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
                  <benefit.icon className="w-8 h-8" style={{ color: '#002113' }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Section with Money Background */}
        <div className="relative rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          {/* Money Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/329fed93-8f70-40a5-af74-d24ce55136f1.png" 
              alt="Money background" 
              className="w-full h-full object-cover brightness-[0.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
          </div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <PremiumTrophyIcon />
                <p className="text-yellow-400 text-xs font-semibold mt-4 tracking-wide">
                  A Melhor Comissão do Mercado
                </p>
              </div>
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
          <a
            href="https://painel.solarien.com.br/solarien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-solarien-primary via-solarien-secondary to-solarien-primary text-black font-bold px-16 py-8 text-2xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-solarien-primary/50 glow-effect">
              QUERO EMPREENDER AGORA
            </Button>
          </a>
          
          <p className="text-gray-400 mt-6 text-lg">
            Comece sua jornada de sucesso no mercado livre de energia
          </p>

          {/* Icons below the text */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2">
                <Rocket className="w-4 h-4" style={{ color: '#002113' }} />
              </div>
              <span className="text-solarien-primary text-sm font-medium">Inovação</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2">
                <Zap className="w-4 h-4" style={{ color: '#002113' }} />
              </div>
              <span className="text-solarien-primary text-sm font-medium">Energia</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2">
                <Target className="w-4 h-4" style={{ color: '#002113' }} />
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
