
import React from 'react';
import StateCoverageSimulator from './StateCoverageSimulator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Factory, Building, Clock, Calendar, Target, Award, Percent, Shield, Wrench, Zap, HelpCircle } from 'lucide-react';

const BrazilMap = () => {
  const handleWhatsAppGroupA = () => {
    const phoneNumber = '+5511997361698';
    const message = 'Olá! Sou do Grupo A (Alta/Média Tensão) e gostaria de uma avaliação gratuita da minha fatura para verificar o desconto disponível.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <TooltipProvider>
      <section id="servicos" className="py-20 w-full bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-soft-pulse">
              <span className="text-gradient">Simulador</span> <span className="text-gray-800">Nacional</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descubra o desconto disponível em seu estado e simule sua economia com energia solar. 
              Atendemos 17 estados com desconto garantido de 15%.
            </p>
          </div>

          <StateCoverageSimulator />

          {/* Grupo A Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 mt-8 max-w-4xl mx-auto animate-gentle-glow">
            <div className="text-center mb-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3 cursor-help hover:text-blue-700 transition-colors animate-soft-pulse">
                    <div className="w-12 h-12 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                      <Factory className="w-6 h-6" style={{ color: 'rgb(0, 33, 19)' }} />
                    </div>
                    Grupo A - Alta e Média Tensão
                    <div className="w-5 h-5 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                      <HelpCircle className="w-3 h-3" style={{ color: 'rgb(0, 33, 19)' }} />
                    </div>
                  </h3>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4">
                  <div className="text-sm">
                    <p className="font-semibold text-blue-800 mb-2">🔵 Quem pode obter descontos:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Grandes indústrias</li>
                      <li>• Shopping centers</li>
                      <li>• Universidades</li>
                      <li>• Mineradoras</li>
                      <li>• Redes de hospitais</li>
                      <li>• Grandes empresas</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            
            {/* Main Features with Icons */}
            <div className="bg-white/80 rounded-xl p-6 border border-blue-100 mb-4">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-soft-pulse">
                  <div className="w-12 h-12 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Percent className="w-6 h-6" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <div className="text-2xl font-bold text-green-700 mb-1">Até 45%</div>
                  <div className="text-gray-600 font-medium">Economia</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 animate-soft-pulse">
                  <div className="w-12 h-12 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">5 anos</div>
                  <div className="text-gray-600 font-medium">Contrato</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 animate-soft-pulse">
                  <div className="w-12 h-12 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <div className="text-2xl font-bold text-purple-700 mb-1">180 dias</div>
                  <div className="text-gray-600 font-medium">Início da Injeção</div>
                </div>
              </div>

              {/* 100% Gratuito Badge */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-gentle-glow">
                  <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <span className="text-lg text-solarien-primary">100% GRATUITO</span>
                </div>
              </div>

              {/* Sem Custos Features */}
              <div className="flex flex-wrap justify-center gap-4 text-center">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border animate-soft-pulse">
                  <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sem Custos</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border animate-soft-pulse">
                  <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sem Obras</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border animate-soft-pulse">
                  <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4" style={{ color: 'rgb(0, 33, 19)' }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sem Placas</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-yellow-800 font-medium text-center">
                <strong>⚠️ Importante:</strong> Cada fatura precisa ser analisada individualmente por nossos especialistas. 
                Fazemos uma avaliação detalhada no histórico de consumo para identificar e quantificar o desconto aplicável.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={handleWhatsAppGroupA}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 text-lg rounded-xl hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto animate-gentle-glow"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                  <Factory className="w-4 h-4" style={{ color: 'rgb(0, 33, 19)' }} />
                </div>
                Solicitar Avaliação Gratuita - Grupo A
              </button>
              <p className="text-xs text-gray-600 mt-2">
                Envie sua fatura para análise detalhada e proposta personalizada
              </p>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default BrazilMap;
