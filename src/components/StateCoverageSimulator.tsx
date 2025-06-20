
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { MapPin, Zap, Calculator, TrendingDown, Building } from 'lucide-react';
import DiscountSimulator from './DiscountSimulator';

const StateCoverageSimulator = () => {
  const [selectedState, setSelectedState] = useState('');
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const stateData = {
    'Bahia': {
      distributors: [{ name: 'Coelba (Neoenergia)', discount: 15 }]
    },
    'Brasília (DF)': {
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
    <Card className="bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 border-solarien-primary/30">
      <CardHeader>
        <CardTitle className="text-solarien-primary text-3xl flex items-center gap-3">
          <MapPin className="w-10 h-10" />
          Simulador de Cobertura Nacional
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Descubra sua economia com energia solar por estado - Grupo B (Baixa Tensão)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* State Selection Grid */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            <Building className="w-6 h-6 text-solarien-primary" />
            Estados com Cobertura
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.keys(stateData).map((state) => (
              <Button
                key={state}
                variant={selectedState === state ? "default" : "outline"}
                onClick={() => {
                  setSelectedState(state);
                  setShowResult(false);
                }}
                className={`h-auto p-3 text-left ${
                  selectedState === state
                    ? 'bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black'
                    : 'border-solarien-primary/30 text-white hover:bg-solarien-primary/10 hover:border-solarien-primary'
                }`}
              >
                <div className="w-full">
                  <div className="font-semibold text-sm">{state}</div>
                  <div className="text-xs opacity-70">
                    {stateData[state as keyof typeof stateData].distributors.length} distribuidora{stateData[state as keyof typeof stateData].distributors.length > 1 ? 's' : ''}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Selected State Details */}
        {selectedState && (
          <div className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-6 border border-solarien-primary/20">
            <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-solarien-primary" />
              {selectedState}
            </h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-solarien-primary font-semibold mb-2">Distribuidoras Disponíveis:</h5>
                <div className="flex flex-wrap gap-2">
                  {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                    <Badge key={index} variant="secondary" className="bg-solarien-primary/20 text-solarien-primary border-solarien-primary/30">
                      {distributor.name} - {distributor.discount}% desconto
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Simulator Section */}
              {!showResult ? (
                <div className="space-y-4 bg-green-800/20 rounded-lg p-4">
                  <h5 className="text-white font-semibold flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-solarien-primary" />
                    Simule sua Economia
                  </h5>
                  
                  <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Valor médio da sua conta de luz (R$)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 350"
                      value={billValue}
                      onChange={(e) => setBillValue(e.target.value)}
                      className="text-lg text-center border-solarien-primary/30 focus:border-solarien-primary bg-green-800/30 text-white placeholder-gray-400"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <Button 
                    onClick={calculateEconomy}
                    disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
                    className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Calcular Economia
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 bg-green-800/20 rounded-lg p-4">
                  <div className="text-center">
                    <TrendingDown className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                    <h5 className="text-xl font-bold text-solarien-primary mb-4">
                      Sua Economia em {selectedState}
                    </h5>
                  </div>

                  <div className="bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-300">Conta Atual</div>
                        <div className="text-xl font-bold text-white">
                          R$ {billValueNum.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300">Nova Conta</div>
                        <div className="text-xl font-bold text-solarien-primary">
                          R$ {newBillValue.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                    </div>

                    <div className="text-center border-t border-solarien-primary/20 pt-4">
                      <div className="text-sm text-gray-300">💰 Economia Mensal</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent">
                        R$ {discountAmount.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-sm text-solarien-primary mt-1">15% de desconto</div>
                    </div>

                    <div className="text-center bg-gradient-to-r from-solarien-primary/30 to-solarien-secondary/30 rounded-lg p-4">
                      <div className="text-sm text-gray-300">🎯 Economia Anual</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent animate-pulse">
                        R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
                      </div>
                    </div>

                    <div className="bg-solarien-primary/10 rounded-lg p-4">
                      <h6 className="text-white font-semibold mb-2">Distribuidoras em {selectedState}:</h6>
                      <div className="space-y-1">
                        {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                          <div key={index} className="text-sm text-gray-300">
                            • {distributor.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={resetSimulator}
                      variant="outline"
                      className="flex-1 border-solarien-primary/30 text-solarien-primary hover:bg-solarien-primary/10"
                    >
                      Nova Simulação
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold"
                      onClick={handleWhatsAppContact}
                    >
                      Contratar Agora
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Coverage Summary */}
        <div className="bg-gradient-to-r from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-6 border border-solarien-primary/20">
          <h4 className="text-solarien-primary text-xl font-bold mb-4">Resumo da Cobertura Nacional</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-solarien-primary mb-2">17</div>
              <div className="text-gray-300">Estados Cobertos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solarien-secondary mb-2">25</div>
              <div className="text-gray-300">Distribuidoras Parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solarien-tertiary mb-2">15%</div>
              <div className="text-gray-300">Desconto Garantido</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateCoverageSimulator;
