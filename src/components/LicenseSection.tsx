
import React from 'react';
import { Check } from 'lucide-react';
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
            Todos benefícios inclusos ao adquirir a licença
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl border border-solarien-primary/20 hover:border-solarien-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-solarien-primary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-white text-left font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-solarien-primary hover:bg-solarien-secondary text-black font-bold px-12 py-6 text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            SEJA UM LICENCIADO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
