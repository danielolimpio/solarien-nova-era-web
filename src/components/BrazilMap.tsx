
import React from 'react';
import StateCoverageSimulator from './StateCoverageSimulator';
import { Factory, Building, Clock, Calendar, Target, Award } from 'lucide-react';

const BrazilMap = () => {
  const handleWhatsAppGroupA = () => {
    const phoneNumber = '+5511997361698';
    const message = 'Olá! Sou do Grupo A (Alta/Média Tensão) e gostaria de uma avaliação gratuita da minha fatura para verificar o desconto disponível.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicos" className="py-20 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Simulador</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra o desconto disponível em seu estado e simule sua economia com energia solar. 
            Atendemos 17 estados com desconto garantido de 15%.
          </p>
        </div>

        <StateCoverageSimulator />

        {/* Grupo A Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 mt-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
              <Factory className="w-6 h-6 text-white" />
            </div>
            Grupo A - Alta e Média Tensão
          </h3>
          
          <div className="bg-white/80 rounded-xl p-6 border border-blue-100 mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-3">💼 Quem se beneficia:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grandes indústrias</li>
                  <li>• Shopping centers</li>
                  <li>• Universidades</li>
                  <li>• Mineradoras</li>
                  <li>• Redes de hospitais</li>
                  <li>• Grandes empresas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-800 mb-3">📊 Características:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Economia até <strong className="text-purple-700">45%</strong></li>
                  <li>• Contrato de <strong>5 anos</strong></li>
                  <li>• Injeção até <strong>180 dias</strong></li>
                  <li>• <strong>100% gratuito</strong></li>
                  <li>• Sem instalação ou obras</li>
                  <li>• Sem placas solares</li>
                </ul>
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 text-lg rounded-xl hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105"
            >
              <Factory className="w-5 h-5 mr-2 inline" />
              Solicitar Avaliação Gratuita - Grupo A
            </button>
            <p className="text-xs text-gray-600 mt-2">
              Envie sua fatura para análise detalhada e proposta personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
