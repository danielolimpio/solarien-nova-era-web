
import React from 'react';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import DiscountSimulator from './DiscountSimulator';

const LicenseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 bg-solarien-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-solarien-secondary/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-solarien-tertiary/10 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Seja um</span> <span className="text-white">Licenciado</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Torne-se um parceiro licenciado e faça parte da revolução da energia solar no Brasil. 
                Ganhe dinheiro vendendo energia limpa e renovável.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <strong>Todos benefícios inclusos ao adquirir a licença</strong>
                </h3>
                
                <div className="grid gap-4">
                  {[
                    'Treinamento completo sobre energia solar',
                    'Material de vendas profissional',
                    'Suporte técnico especializado',
                    'Comissões atrativas por venda',
                    'Território exclusivo de atuação',
                    'Acompanhamento de performance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-800" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <DiscountSimulator>
                <Button className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 flex-1">
                  Simular Economia
                </Button>
              </DiscountSimulator>
              
              <Button 
                variant="outline" 
                className="border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex-1"
                onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-3xl p-8 border border-solarien-primary/30">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full mx-auto flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white">
                  Energia do Futuro
                </h3>
                
                <p className="text-gray-300 text-lg">
                  Faça parte da transformação energética do Brasil e construa um futuro mais sustentável.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-solarien-primary mb-2">15%</div>
                    <div className="text-gray-300">Desconto Garantido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-solarien-secondary mb-2">100%</div>
                    <div className="text-gray-300">Renovável</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
