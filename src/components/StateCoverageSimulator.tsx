import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { MapPin, Zap, Calculator, TrendingDown, Building, Sparkles, Target, Award } from 'lucide-react';

const StateCoverageSimulator = () => {
  const [selectedState, setSelectedState] = useState('');
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const stateData = {
    'Bahia': {
      distributors: [{ name: 'Coelba (Neoenergia)', discount: 15 }]
    },
    'Distrito Federal': {
      distributors: [{ name: 'CEB (Neoenergia)', discount: 15 }]
    },
    'Ceará': {
      distributors: [{ name: 'Enel', discount: 15 }]
    },
    'Goiás': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Maranhão': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Mato Grosso': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Mato Grosso do Sul': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Minas Gerais': {
      distributors: [
        { name: 'Cemig', discount: 15 },
        { name: 'Energisa', discount: 15 }
      ]
    },
    'Pará': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Paraná': {
      distributors: [
        { name: 'Copel', discount: 15 },
        { name: 'Energisa', discount: 15 }
      ]
    },
    'Pernambuco': {
      distributors: [{ name: 'Celpe (Neoenergia)', discount: 15 }]
    },
    'Piauí': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Rio Grande do Norte': {
      distributors: [{ name: 'Cosern (Neoenergia)', discount: 15 }]
    },
    'Santa Catarina': {
      distributors: [{ name: 'Celesc', discount: 15 }]
    },
    'São Paulo': {
      distributors: [
        { name: 'CPFL Paulista', discount: 15 },
        { name: 'Elektro (Neoenergia)', discount: 15 },
        { name: 'Energisa', discount: 15 },
        { name: 'Copel', discount: 15 }
      ]
    },
    'Sergipe': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Tocantins': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    }
  };

  const calculateEconomy = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    if (value && value > 0 && selectedState) {
      setShowResult(true);
    }
  };

  const resetSimulator = () => {
    setBillValue('');
    setShowResult(false);
  };

  const handleWhatsAppContact = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    const discountAmount = value * 0.15;
    const phoneNumber = '+5511997361698';
    const message = `Olá! Gostaria de contratar energia solar em ${selectedState}. Simulei uma economia de R$ ${discountAmount.toFixed(2).replace('.', ',')} mensais na minha conta de luz.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const billValueNum = parseFloat(billValue.replace(',', '.')) || 0;
  const discountAmount = billValueNum * 0.15;
  const newBillValue = billValueNum - discountAmount;
  const yearlyEconomy = discountAmount * 12;

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#00844e]/20 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 border-b border-[#00844e]/10">
        <CardTitle className="text-[#00844e] text-3xl flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          Simulador Nacional de Energia Solar
        </CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          Descubra sua economia com energia solar - Cobertura em 17 estados do Brasil
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl border border-[#00844e]/20">
            <Award className="w-12 h-12 text-[#00844e] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[#00844e] mb-1">15%</div>
            <div className="text-gray-600 font-medium">Desconto Garantido</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#02ff91]/10 to-[#00844e]/10 rounded-2xl border border-[#02ff91]/20">
            <MapPin className="w-12 h-12 text-[#02ff91] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[#02ff91] mb-1">17</div>
            <div className="text-gray-600 font-medium">Estados Cobertos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl border border-[#00844e]/20">
            <Building className="w-12 h-12 text-[#00844e] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[#00844e] mb-1">23</div>
            <div className="text-gray-600 font-medium">Distribuidoras</div>
          </div>
        </div>

        {/* State Selection Grid */}
        <div>
          <h3 className="text-gray-800 text-2xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-7 h-7 text-[#00844e]" />
            Selecione seu Estado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {Object.keys(stateData).sort().map((state) => (
              <Button
                key={state}
                variant={selectedState === state ? "default" : "outline"}
                onClick={() => {
                  setSelectedState(state);
                  setShowResult(false);
                }}
                className={`h-auto p-4 text-left transition-all duration-300 hover:scale-105 ${
                  selectedState === state
                    ? 'bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white shadow-lg shadow-[#00844e]/25'
                    : 'bg-[#00844e] text-[#02ff91] border-2 border-[#00844e]/20 hover:bg-[#00844e]/90 hover:border-[#00844e]/40'
                }`}
              >
                <div className="w-full">
                  <div className="font-bold text-sm mb-1">{state}</div>
                  <div className="text-xs opacity-80">
                    {stateData[state as keyof typeof stateData].distributors.length} distribuidora{stateData[state as keyof typeof stateData].distributors.length > 1 ? 's' : ''}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Selected State Details */}
        {selectedState && (
          <div className="bg-gradient-to-br from-[#00844e]/5 to-[#02ff91]/5 rounded-2xl p-8 border-2 border-[#00844e]/20 shadow-lg">
            <h4 className="text-gray-800 text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-[#00844e]" />
              {selectedState}
            </h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-[#00844e] font-bold text-lg mb-3">Distribuidoras Disponíveis:</h5>
                <div className="flex flex-wrap gap-3">
                  {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                    <Badge key={index} className="bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white px-4 py-2 text-sm font-semibold">
                      {distributor.name} - {distributor.discount}% desconto
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Simulator Section */}
              {!showResult ? (
                <div className="space-y-6 bg-white/70 rounded-xl p-6 border border-[#00844e]/20">
                  <h5 className="text-gray-800 font-bold text-xl flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-[#00844e]" />
                    Simule sua Economia
                  </h5>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800 font-medium">
                      <strong>💡 Dica importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Valor médio da sua conta de luz (R$)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 350,00"
                      value={billValue}
                      onChange={(e) => setBillValue(e.target.value)}
                      className="text-xl text-center border-2 border-[#00844e]/30 focus:border-[#00844e] bg-white h-14 text-gray-800 placeholder-gray-400 font-semibold"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <Button 
                    onClick={calculateEconomy}
                    disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
                    className="w-full bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-4 text-lg rounded-xl hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    Calcular Minha Economia
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 bg-white/70 rounded-xl p-6 border border-[#00844e]/20">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full mb-4">
                      <TrendingDown className="w-12 h-12 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-[#00844e] mb-2">
                      🎉 Sua Economia em {selectedState}
                    </h5>
                    <p className="text-gray-600">Com 15% de desconto garantido</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl p-8 space-y-6 border border-[#00844e]/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-white/80 rounded-xl">
                        <div className="text-sm text-gray-600 font-semibold mb-2">Conta Atual</div>
                        <div className="text-2xl font-bold text-gray-800">
                          R$ {billValueNum.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white/80 rounded-xl">
                        <div className="text-sm text-gray-600 font-semibold mb-2">Nova Conta</div>
                        <div className="text-2xl font-bold text-[#00844e]">
                          R$ {newBillValue.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                    </div>

                    <div className="text-center border-t-2 border-[#00844e]/20 pt-6">
                      <div className="text-lg text-gray-600 font-semibold mb-2">💰 Economia Mensal</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent mb-2">
                        R$ {discountAmount.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-lg text-[#00844e] font-bold">15% de desconto</div>
                    </div>

                    <div className="text-center bg-gradient-to-r from-[#00844e]/20 to-[#02ff91]/20 rounded-2xl p-6 border border-[#00844e]/30">
                      <div className="text-lg text-gray-700 font-semibold mb-2">🎯 Economia Anual</div>
                      <div className="text-5xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent animate-pulse">
                        R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-sm text-gray-600 mt-2">Valor que você economizará em 12 meses</div>
                    </div>

                    <div className="bg-gradient-to-r from-[#00844e]/10 to-[#02ff91]/10 rounded-xl p-4 border border-[#00844e]/20">
                      <h6 className="text-gray-800 font-bold mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-[#00844e]" />
                        Distribuidoras em {selectedState}:
                      </h6>
                      <div className="space-y-2">
                        {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                          <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#00844e] rounded-full"></div>
                            <span className="font-medium">{distributor.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={resetSimulator}
                      variant="outline"
                      className="flex-1 border-2 border-[#00844e]/30 text-[#00844e] hover:bg-[#00844e]/5 font-bold py-3"
                    >
                      Nova Simulação
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-3 hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300"
                      onClick={handleWhatsAppContact}
                    >
                      💬 Contratar Agora
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Coverage Summary */}
        <div className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 rounded-2xl p-8 border-2 border-[#00844e]/20">
          <h4 className="text-[#00844e] text-2xl font-bold mb-6 text-center">🇧🇷 Cobertura Nacional</h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <div className="text-3xl font-bold text-[#00844e] mb-2">17</div>
              <div className="text-gray-600 font-semibold">Estados Cobertos</div>
            </div>
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <div className="text-3xl font-bold text-[#02ff91] mb-2">23</div>
              <div className="text-gray-600 font-semibold">Distribuidoras</div>
            </div>
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <div className="text-3xl font-bold text-[#00844e] mb-2">15%</div>
              <div className="text-gray-600 font-semibold">Desconto</div>
            </div>
            <div className="text-center p-4 bg-white/70 rounded-xl">
              <div className="text-3xl font-bold text-[#02ff91] mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Renovável</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateCoverageSimulator;
