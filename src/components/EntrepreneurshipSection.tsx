import React from 'react';
import { Zap, Users, Target, TrendingUp, Rocket, Download } from 'lucide-react';
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

  // Ultra Realistic Trophy Icon Component
  const UltraRealisticTrophyIcon = () => (
    <div className="flex justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Ultra Realistic Gold Gradients */}
          <radialGradient id="ultraGoldMain" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFF8DC" />
            <stop offset="5%" stopColor="#FFFACD" />
            <stop offset="15%" stopColor="#FFD700" />
            <stop offset="30%" stopColor="#DAA520" />
            <stop offset="50%" stopColor="#B8860B" />
            <stop offset="70%" stopColor="#CD853F" />
            <stop offset="85%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#654321" />
          </radialGradient>
          
          <radialGradient id="ultraGoldHighlight" cx="25%" cy="15%" r="40%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9"/>
            <stop offset="20%" stopColor="#FFFACD" stopOpacity="0.7"/>
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#DAA520" stopOpacity="0.3"/>
          </radialGradient>
          
          <linearGradient id="ultraGoldReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
            <stop offset="25%" stopColor="#FFFACD" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4"/>
            <stop offset="75%" stopColor="#DAA520" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.1"/>
          </linearGradient>
          
          <radialGradient id="ultraGoldShadow" cx="70%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#654321" stopOpacity="0.8"/>
            <stop offset="40%" stopColor="#8B4513" stopOpacity="0.6"/>
            <stop offset="70%" stopColor="#A0522D" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#CD853F" stopOpacity="0.2"/>
          </radialGradient>
          
          <linearGradient id="ultraBaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C1C1C" />
            <stop offset="20%" stopColor="#2F1B14" />
            <stop offset="40%" stopColor="#5D4E37" />
            <stop offset="60%" stopColor="#8B4513" />
            <stop offset="80%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#D2691E" />
          </linearGradient>
          
          {/* Ultra Realistic Shadows and Effects */}
          <filter id="ultraDropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="3" dy="8" result="offset"/>
            <feFlood floodColor="rgba(0,0,0,0.7)"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="ultraInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="3"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feFlood floodColor="#4A2C17" floodOpacity="0.6"/>
            <feComposite in2="offset-blur" operator="in"/>
          </filter>
          
          <filter id="ultraBevel" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feSpecularLighting result="specOut" in="blur" specularConstant="2.5" specularExponent="25" lightingColor="#FFFFFF">
              <fePointLight x="25" y="15" z="60"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
            <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
          
          <filter id="ultraGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Base Shadow */}
          <ellipse id="ultraBaseShadow" cx="60" cy="110" rx="35" ry="8" fill="rgba(0,0,0,0.4)"/>
          
          {/* Texture Patterns */}
          <pattern id="goldTexture" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="url(#ultraGoldMain)"/>
            <circle cx="2" cy="2" r="0.5" fill="#FFFACD" opacity="0.3"/>
            <rect x="0" y="0" width="1" height="1" fill="#FFD700" opacity="0.2"/>
            <rect x="3" y="3" width="1" height="1" fill="#DAA520" opacity="0.2"/>
          </pattern>
          
          <pattern id="brushedMetal" patternUnits="userSpaceOnUse" width="2" height="20">
            <rect width="2" height="20" fill="url(#ultraGoldMain)"/>
            <rect x="0" y="0" width="1" height="20" fill="#FFFFFF" opacity="0.1"/>
            <rect x="1" y="0" width="1" height="20" fill="#000000" opacity="0.05"/>
          </pattern>
        </defs>
        
        {/* Base Shadow */}
        <use href="#ultraBaseShadow"/>
        
        {/* Trophy Base - Ultra Detailed */}
        <rect x="25" y="95" width="70" height="20" rx="10" fill="url(#ultraBaseGradient)" filter="url(#ultraDropShadow)"/>
        <rect x="27" y="97" width="66" height="16" rx="8" fill="url(#ultraGoldShadow)"/>
        <rect x="29" y="99" width="62" height="12" rx="6" fill="url(#brushedMetal)"/>
        
        {/* Base Decorative Elements */}
        <rect x="35" y="101" width="50" height="3" rx="1.5" fill="url(#ultraGoldHighlight)"/>
        <rect x="40" y="105" width="40" height="2" rx="1" fill="#FFFFFF" opacity="0.4"/>
        <rect x="45" y="108" width="30" height="1" rx="0.5" fill="#FFFACD" opacity="0.6"/>
        
        {/* Base Side Details */}
        <circle cx="35" cy="105" r="2" fill="url(#ultraGoldHighlight)" opacity="0.8"/>
        <circle cx="85" cy="105" r="2" fill="url(#ultraGoldHighlight)" opacity="0.8"/>
        <rect x="32" y="103" width="3" height="4" rx="1.5" fill="url(#ultraGoldShadow)"/>
        <rect x="85" y="103" width="3" height="4" rx="1.5" fill="url(#ultraGoldShadow)"/>
        
        {/* Trophy Stem - Ultra Detailed */}
        <rect x="52" y="75" width="16" height="25" rx="3" fill="url(#ultraGoldMain)" filter="url(#ultraBevel)"/>
        <rect x="54" y="77" width="12" height="21" rx="2" fill="url(#ultraGoldHighlight)" opacity="0.6"/>
        <rect x="56" y="79" width="8" height="17" rx="1" fill="url(#goldTexture)"/>
        
        {/* Stem Details */}
        <rect x="55" y="82" width="10" height="2" rx="1" fill="url(#ultraGoldReflection)"/>
        <rect x="55" y="87" width="10" height="2" rx="1" fill="url(#ultraGoldReflection)"/>
        <rect x="55" y="92" width="10" height="2" rx="1" fill="url(#ultraGoldReflection)"/>
        
        {/* Main Trophy Cup - Ultra Realistic Shape */}
        <path d="M25 40 Q25 22 38 18 L82 18 Q95 22 95 40 L95 65 Q95 78 82 82 L38 82 Q25 78 25 65 Z" 
              fill="url(#ultraGoldMain)" 
              filter="url(#ultraDropShadow)"/>
        
        {/* Cup Inner Shadow and Depth */}
        <path d="M30 43 Q30 25 40 21 L80 21 Q90 25 90 43 L90 68 Q90 76 80 79 L40 79 Q30 76 30 68 Z" 
              fill="url(#ultraGoldShadow)"/>
        
        {/* Cup Main Highlight */}
        <path d="M35 45 Q35 27 43 23 L77 23 Q85 27 85 45 L85 70 Q85 74 77 76 L43 76 Q35 74 35 70 Z" 
              fill="url(#goldTexture)"/>
        
        {/* Cup Major Reflection */}
        <path d="M38 48 Q38 30 45 26 L60 26 Q67 30 67 48 L67 60 Q67 65 60 67 L45 67 Q38 65 38 60 Z" 
              fill="url(#ultraGoldReflection)" 
              opacity="0.7"/>
        
        {/* Ultra Realistic Handles */}
        <path d="M15 45 Q8 45 5 52 L5 60 Q8 67 15 67 Q20 67 20 62 Q20 57 15 57 Q12 57 12 54 L12 50 Q12 45 15 45" 
              fill="url(#ultraGoldMain)" 
              filter="url(#ultraBevel)"/>
        <path d="M105 45 Q112 45 115 52 L115 60 Q112 67 105 67 Q100 67 100 62 Q100 57 105 57 Q108 57 108 54 L108 50 Q108 45 105 45" 
              fill="url(#ultraGoldMain)" 
              filter="url(#ultraBevel)"/>
        
        {/* Handle Decorative Details */}
        <circle cx="15" cy="49" r="3" fill="url(#ultraGoldHighlight)" opacity="0.8"/>
        <circle cx="105" cy="49" r="3" fill="url(#ultraGoldHighlight)" opacity="0.8"/>
        <circle cx="15" cy="63" r="2" fill="url(#ultraGoldShadow)" opacity="0.6"/>
        <circle cx="105" cy="63" r="2" fill="url(#ultraGoldShadow)" opacity="0.6"/>
        
        {/* Handle Texture */}
        <rect x="13" y="47" width="4" height="18" rx="2" fill="url(#brushedMetal)" opacity="0.3"/>
        <rect x="103" y="47" width="4" height="18" rx="2" fill="url(#brushedMetal)" opacity="0.3"/>
        
        {/* Trophy Rim - Ultra Detailed */}
        <ellipse cx="60" cy="40" rx="35" ry="7" fill="url(#ultraGoldHighlight)" filter="url(#ultraGlow)"/>
        <ellipse cx="60" cy="38" rx="33" ry="6" fill="url(#ultraGoldMain)"/>
        <ellipse cx="60" cy="36" rx="31" ry="5" fill="url(#ultraGoldReflection)" opacity="0.8"/>
        
        {/* Rim Details */}
        <ellipse cx="60" cy="35" rx="29" ry="3" fill="#FFFFFF" opacity="0.6"/>
        <ellipse cx="60" cy="34" rx="27" ry="2" fill="url(#ultraGoldHighlight)"/>
        
        {/* Decorative Band - Ultra Detailed */}
        <rect x="30" y="52" width="60" height="8" rx="4" fill="url(#ultraGoldShadow)"/>
        <rect x="32" y="54" width="56" height="4" rx="2" fill="url(#goldTexture)"/>
        <rect x="34" y="55" width="52" height="2" rx="1" fill="url(#ultraGoldHighlight)"/>
        
        {/* Band Decorative Elements */}
        <circle cx="40" cy="56" r="1.5" fill="#FFFFFF" opacity="0.8"/>
        <circle cx="60" cy="56" r="1.5" fill="#FFFFFF" opacity="0.8"/>
        <circle cx="80" cy="56" r="1.5" fill="#FFFFFF" opacity="0.8"/>
        
        {/* Center Medallion - Ultra Realistic */}
        <circle cx="60" cy="56" r="15" fill="url(#ultraGoldShadow)" filter="url(#ultraInnerShadow)"/>
        <circle cx="60" cy="56" r="13" fill="url(#ultraGoldMain)"/>
        <circle cx="60" cy="56" r="11" fill="url(#goldTexture)"/>
        <circle cx="60" cy="56" r="9" fill="url(#ultraGoldHighlight)" opacity="0.8"/>
        
        {/* Medallion Inner Ring */}
        <circle cx="60" cy="56" r="7" fill="none" stroke="url(#ultraGoldReflection)" strokeWidth="1" opacity="0.6"/>
        <circle cx="60" cy="56" r="5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.8"/>
        
        {/* Dollar Symbol - Embossed and Detailed */}
        <text x="60" y="63" textAnchor="middle" fontSize="16" fill="url(#ultraGoldShadow)" fontWeight="bold" fontFamily="serif">$</text>
        <text x="59" y="62" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold" fontFamily="serif">$</text>
        <text x="58" y="61" textAnchor="middle" fontSize="16" fill="#FFFFFF" fontWeight="bold" fontFamily="serif" opacity="0.6">$</text>
        
        {/* Ultra Realistic Reflections */}
        <path d="M40 28 Q55 20 70 28 L70 45 Q55 35 40 45 Z" fill="url(#ultraGoldReflection)" opacity="0.5"/>
        <ellipse cx="50" cy="35" rx="4" ry="12" fill="#FFFFFF" opacity="0.6"/>
        <ellipse cx="70" cy="40" rx="3" ry="8" fill="#FFFFFF" opacity="0.4"/>
        
        {/* Side Reflections */}
        <rect x="28" y="45" width="2" height="25" rx="1" fill="url(#ultraGoldReflection)" opacity="0.4"/>
        <rect x="90" y="45" width="2" height="25" rx="1" fill="url(#ultraGoldReflection)" opacity="0.4"/>
        
        {/* Bottom Reflection */}
        <ellipse cx="60" cy="75" rx="20" ry="4" fill="url(#ultraGoldShadow)" opacity="0.3"/>
        <ellipse cx="60" cy="74" rx="15" ry="2" fill="#FFFFFF" opacity="0.2"/>
        
        {/* Engraved Details */}
        <rect x="35" y="64" width="12" height="1.5" rx="0.75" fill="url(#ultraGoldShadow)" opacity="0.6"/>
        <rect x="73" y="64" width="12" height="1.5" rx="0.75" fill="url(#ultraGoldShadow)" opacity="0.6"/>
        <rect x="35" y="68" width="10" height="1" rx="0.5" fill="url(#ultraGoldShadow)" opacity="0.5"/>
        <rect x="75" y="68" width="10" height="1" rx="0.5" fill="url(#ultraGoldShadow)" opacity="0.5"/>
        <rect x="35" y="71" width="8" height="1" rx="0.5" fill="url(#ultraGoldShadow)" opacity="0.4"/>
        <rect x="77" y="71" width="8" height="1" rx="0.5" fill="url(#ultraGoldShadow)" opacity="0.4"/>
        
        {/* Final Glow Effect */}
        <circle cx="60" cy="56" r="50" fill="none" stroke="url(#ultraGoldHighlight)" strokeWidth="0.5" opacity="0.2" filter="url(#ultraGlow)"/>
      </svg>
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
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <UltraRealisticTrophyIcon />
                <p className="text-yellow-400 text-sm font-light mt-4 tracking-wide font-mono">
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
