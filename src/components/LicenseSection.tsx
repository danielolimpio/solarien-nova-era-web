
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const LicenseSection = () => {
  const benefits = [
    'Direito de uso da Marca Solarien Energy',
    'Licença Vitalícia como Consultor Autorizado',
    'Backoffice Completo com Gestão de Ganhos',
    'Ganhos de Conexões e Indicações Atrativas',
    'Treinamentos e Atualizações Contínuas',
    'Material Profissional de Divulgação Incluso',
    'Sistema pronto com suporte técnico e comercial',
    'Ferramentas com IA e integração ao WhatsApp',
    'Plano de carreira com bônus e incentivos',
    'Atendimento especializado para os seus Clientes',
    'Comissões recorrentes por licenciados ativos',
    'Rede própria com ganhos ilimitados em multinível',
    'Assessoria especializada e atendimento humanizado'
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Business partnership background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">SEJA UM</span> <span className="text-gray-800">LICENCIADO</span>
            </h2>
          </div>

          {/* License Card */}
          <div className="bg-gradient-to-br from-white/90 to-solarien-primary/5 border border-solarien-primary/20 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
            {/* Benefits Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-gradient">BENEFÍCIOS</span>
              </h3>
              <p className="text-lg text-gray-700 text-center mb-8">
                Todos benefícios inclusos ao adquirir a licença
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-solarien-primary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-4 text-lg rounded-xl hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 transform hover:scale-105">
                  SEJA UM LICENCIADO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
