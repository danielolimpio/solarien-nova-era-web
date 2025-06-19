import React from 'react';
import { Zap, Shield, ShieldCheck, BadgeCheck } from 'lucide-react';
import { Button } from './ui/button';

const LicenseSection = () => {
  const benefits = [
    "Direito de uso da Marca Solarien Energy",
    "Licença Vitalícia como Consultor Autorizado",
    "Backoffice Completo com Gestão de Ganhos",
    "Ganhos de Conexões e Indicações Atrativas",
    "Treinamentos e Atualizações Contínuas",
    "Material Profissional de Divulgação Incluso",
    "Sistema pronto com suporte técnico e comercial",
    "Ferramentas com IA e integração ao WhatsApp",
    "Plano de carreira com bônus e incentivos",
    "Atendimento especializado para os seus Clientes",
    "Comissões recorrentes por licenciados ativos",
    "Rede própria com ganhos ilimitados em multinível",
    "Assessoria especializada e atendimento humanizado"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-solarien-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-solarien-secondary/10 rounded-full blur-2xl"></div>
      </div>

      {/* Target circles background - centered with section and responsive */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center" style={{ top: '60px' }}>
          {/* Large circles for desktop */}
          <div className="hidden md:block absolute w-[1400px] h-[1400px] border border-[#02ff91] rounded-full opacity-10" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite'
          }}></div>
          <div className="hidden md:block absolute w-[1200px] h-[1200px] border border-[#00c26f] rounded-full opacity-12" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.4s'
          }}></div>
          <div className="hidden md:block absolute w-[1000px] h-[1000px] border border-[#00844e] rounded-full opacity-15" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.8s'
          }}></div>
          <div className="hidden md:block absolute w-[800px] h-[800px] border border-[#02ff91] rounded-full opacity-18" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.2s'
          }}></div>
          <div className="hidden md:block absolute w-[640px] h-[640px] border border-[#00c26f] rounded-full opacity-20" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.6s'
          }}></div>
          <div className="hidden md:block absolute w-[480px] h-[480px] border border-[#00844e] rounded-full opacity-25" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 2.0s'
          }}></div>
          <div className="hidden md:block absolute w-[360px] h-[360px] border border-[#02ff91] rounded-full opacity-28" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 2.4s'
          }}></div>
          <div className="hidden md:block absolute w-[240px] h-[240px] border border-[#00c26f] rounded-full opacity-30" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 2.8s'
          }}></div>
          <div className="hidden md:block absolute w-[160px] h-[160px] border border-[#00844e] rounded-full opacity-35" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 3.2s'
          }}></div>
          <div className="hidden md:block absolute w-[80px] h-[80px] border border-[#02ff91] rounded-full opacity-40" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 3.6s'
          }}></div>

          {/* Medium circles for tablet */}
          <div className="hidden sm:block md:hidden absolute w-[800px] h-[800px] border border-[#02ff91] rounded-full opacity-10" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite'
          }}></div>
          <div className="hidden sm:block md:hidden absolute w-[650px] h-[650px] border border-[#00c26f] rounded-full opacity-12" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.4s'
          }}></div>
          <div className="hidden sm:block md:hidden absolute w-[500px] h-[500px] border border-[#00844e] rounded-full opacity-15" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.8s'
          }}></div>
          <div className="hidden sm:block md:hidden absolute w-[350px] h-[350px] border border-[#02ff91] rounded-full opacity-18" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.2s'
          }}></div>
          <div className="hidden sm:block md:hidden absolute w-[250px] h-[250px] border border-[#00c26f] rounded-full opacity-20" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.6s'
          }}></div>

          {/* Small circles for mobile */}
          <div className="block sm:hidden absolute w-[400px] h-[400px] border border-[#02ff91] rounded-full opacity-10" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite'
          }}></div>
          <div className="block sm:hidden absolute w-[320px] h-[320px] border border-[#00c26f] rounded-full opacity-12" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.4s'
          }}></div>
          <div className="block sm:hidden absolute w-[240px] h-[240px] border border-[#00844e] rounded-full opacity-15" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 0.8s'
          }}></div>
          <div className="block sm:hidden absolute w-[180px] h-[180px] border border-[#02ff91] rounded-full opacity-18" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.2s'
          }}></div>
          <div className="block sm:hidden absolute w-[120px] h-[120px] border border-[#00c26f] rounded-full opacity-20" style={{ 
            borderWidth: '1px',
            animation: 'target-pulse 4s ease-in-out infinite 1.6s'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">SEJA UM</span>{" "}
            <span className="text-gray-800">LICENCIADO</span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-12">
            BENEFÍCIOS
          </h3>
          
          <p className="text-lg text-gray-600 mb-12">
            <strong>Todos benefícios inclusos ao adquirir a licença</strong>
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-solarien-primary/20 hover:border-solarien-primary/40 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#002113' }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mt-0.5">
                  <Zap className="w-4 h-4 text-solarien-tertiary" />
                </div>
                <span className="text-white text-left font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button - Only SEJA UM LICENCIADO button */}
          <div className="flex justify-center items-center mb-8">
            <Button 
              className="bg-gradient-to-r from-solarien-primary via-solarien-secondary to-solarien-primary text-black font-bold px-16 py-8 text-2xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-solarien-primary/50 glow-effect"
              onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
            >
              SEJA UM LICENCIADO
            </Button>
          </div>

          {/* Icons below the button */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-700 text-sm font-medium">Segurança</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse delay-300">
                <ShieldCheck className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-700 text-sm font-medium">Garantia</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mb-2 animate-pulse delay-500">
                <BadgeCheck className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-700 text-sm font-medium">Autenticidade</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes target-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
};

export default LicenseSection;
