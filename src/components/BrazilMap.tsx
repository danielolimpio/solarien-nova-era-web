
import React, { useState } from 'react';
import DiscountSimulator from './DiscountSimulator';

const BrazilMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const statesData = [
    { name: 'São Paulo', discount: '15%', distributor: 'CPFL Paulista, Elektro, Energisa, Copel', code: 'SP', color: 'bg-solarien-primary' },
    { name: 'Santa Catarina', discount: '15%', distributor: 'Celesc', code: 'SC', color: 'bg-solarien-secondary' },
    { name: 'Paraná', discount: '15%', distributor: 'Energisa, Copel', code: 'PR', color: 'bg-solarien-tertiary' },
    { name: 'Mato Grosso do Sul', discount: '15%', distributor: 'Energisa', code: 'MS', color: 'bg-solarien-primary' },
    { name: 'Mato Grosso', discount: '15%', distributor: 'Energisa', code: 'MT', color: 'bg-solarien-secondary' },
    { name: 'Goiás', discount: '15%', distributor: 'Equatorial', code: 'GO', color: 'bg-solarien-tertiary' },
    { name: 'Distrito Federal', discount: '15%', distributor: 'CEB Neoenergia', code: 'DF', color: 'bg-solarien-primary' },
    { name: 'Minas Gerais', discount: '15%', distributor: 'Cemig, Energisa', code: 'MG', color: 'bg-solarien-secondary' },
    { name: 'Bahia', discount: '15%', distributor: 'Coelba Neoenergia', code: 'BA', color: 'bg-solarien-tertiary' },
    { name: 'Tocantins', discount: '15%', distributor: 'Energisa', code: 'TO', color: 'bg-solarien-primary' },
    { name: 'Pará', discount: '15%', distributor: 'Equatorial', code: 'PA', color: 'bg-solarien-secondary' },
    { name: 'Maranhão', discount: '15%', distributor: 'Equatorial', code: 'MA', color: 'bg-solarien-tertiary' },
    { name: 'Piauí', discount: '15%', distributor: 'Equatorial', code: 'PI', color: 'bg-solarien-primary' },
    { name: 'Ceará', discount: '15%', distributor: 'Enel', code: 'CE', color: 'bg-solarien-secondary' },
    { name: 'Rio Grande do Norte', discount: '15%', distributor: 'Cosern Neoenergia', code: 'RN', color: 'bg-solarien-tertiary' },
    { name: 'Pernambuco', discount: '15%', distributor: 'Celpe Neoenergia', code: 'PE', color: 'bg-solarien-primary' },
    { name: 'Sergipe', discount: '15%', distributor: 'Energisa', code: 'SE', color: 'bg-solarien-secondary' },
    { name: 'Rio de Janeiro', discount: '12%', distributor: 'Light', code: 'RJ', color: 'bg-solarien-tertiary' },
    { name: 'Espírito Santo', discount: '13%', distributor: 'EDP', code: 'ES', color: 'bg-solarien-primary' },
    { name: 'Rio Grande do Sul', discount: '16%', distributor: 'RGE', code: 'RS', color: 'bg-solarien-secondary' },
    { name: 'Paraíba', discount: '18%', distributor: 'Energisa', code: 'PB', color: 'bg-solarien-tertiary' },
    { name: 'Alagoas', discount: '17%', distributor: 'Equatorial', code: 'AL', color: 'bg-solarien-primary' },
    { name: 'Rondônia', discount: '15%', distributor: 'Energisa', code: 'RO', color: 'bg-solarien-secondary' },
    { name: 'Acre', discount: '16%', distributor: 'Energisa', code: 'AC', color: 'bg-solarien-tertiary' },
    { name: 'Amazonas', discount: '14%', distributor: 'Amazonas Energia', code: 'AM', color: 'bg-solarien-primary' },
    { name: 'Roraima', discount: '18%', distributor: 'Roraima Energia', code: 'RR', color: 'bg-solarien-secondary' },
    { name: 'Amapá', discount: '17%', distributor: 'CEA', code: 'AP', color: 'bg-solarien-tertiary' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-solarien-primary/5 to-solarien-secondary/10 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Modern building" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-solarien-primary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Cobertura</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra o desconto disponível em seu estado e a distribuidora parceira. Clique em qualquer estado para simular sua economia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Brazil Map */}
          <div className="relative">
            <div className="bg-white border border-solarien-primary/20 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-energy-pulse">
                    <span className="text-3xl font-bold text-white">BR</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">Mapa Interativo do Brasil</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clique em qualquer estado da lista ao lado para ver os detalhes e fazer sua simulação de economia
                  </p>
                </div>
                
                {/* Enhanced animated particles */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-solarien-primary rounded-full animate-glow shadow-lg shadow-solarien-primary/50"></div>
                <div className="absolute top-12 right-8 w-2 h-2 bg-solarien-secondary rounded-full animate-glow shadow-lg shadow-solarien-secondary/50" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-solarien-tertiary rounded-full animate-glow shadow-lg shadow-solarien-tertiary/50" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 right-6 w-2 h-2 bg-solarien-primary rounded-full animate-glow shadow-lg shadow-solarien-primary/50" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Enhanced States List */}
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {statesData.map((state) => (
              <DiscountSimulator key={state.code} state={state.name} discount={state.discount}>
                <div className={`w-full p-4 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-102 shadow-lg hover:shadow-xl group ${
                  selectedState?.code === state.code
                    ? 'bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 border-solarien-primary shadow-solarien-primary/25'
                    : 'bg-white border-solarien-primary/20 hover:bg-gradient-to-r hover:from-solarien-primary/10 hover:to-solarien-secondary/10 hover:border-solarien-primary/40'
                }`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${state.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-lg`}></div>
                      <div>
                        <h3 className="font-bold text-gray-800 group-hover:text-solarien-primary transition-colors duration-300">
                          {state.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-tight">{state.distributor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-solarien-primary group-hover:scale-110 transition-transform duration-300">
                        {state.discount}
                      </div>
                      <div className="text-xs text-gray-500">desconto</div>
                    </div>
                  </div>
                </div>
              </DiscountSimulator>
            ))}
          </div>
        </div>

        {selectedState && (
          <div className="mt-16 bg-white border border-solarien-primary/30 rounded-3xl p-8 md:p-12 animate-slide-up shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gradient mb-8">{selectedState.name}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">{selectedState.discount}</div>
                  <div className="text-gray-600 font-medium">Desconto Garantido</div>
                </div>
                <div className="text-center bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-2xl p-6">
                  <div className="text-lg font-semibold text-gray-800 mb-2">{selectedState.distributor}</div>
                  <div className="text-gray-600 font-medium">Distribuidora Parceira</div>
                </div>
                <div className="text-center bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 rounded-2xl p-6">
                  <DiscountSimulator state={selectedState.name} discount={selectedState.discount}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-xl hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 transform hover:scale-105">
                      Simular Agora
                    </button>
                  </DiscountSimulator>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(248, 250, 252, 0.5);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #02ff91, #00c26f);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #00c26f, #00844e);
          }
        `
      }} />
    </section>
  );
};

export default BrazilMap;
