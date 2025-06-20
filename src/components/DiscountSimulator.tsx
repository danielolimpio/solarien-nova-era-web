
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, Zap, TrendingDown } from 'lucide-react';

interface DiscountSimulatorProps {
  children?: React.ReactNode;
  selectedState?: string;
  discount?: string;
}

const DiscountSimulator = ({ children, selectedState, discount = '15%' }: DiscountSimulatorProps) => {
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [open, setOpen] = useState(false);

  const calculateDiscount = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    if (value && value > 0) {
      setShowResult(true);
    }
  };

  const resetSimulator = () => {
    setBillValue('');
    setShowResult(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      resetSimulator();
    }
  };

  const handleWhatsAppContact = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    const discountAmount = value * 0.15;
    const phoneNumber = '+5511997361698';
    const message = `Olá! Gostaria de contratar o serviço de energia solar. Simulei uma economia de R$ ${discountAmount.toFixed(2).replace('.', ',')} mensais na minha conta de luz.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Calculate values
  const billValueNum = parseFloat(billValue.replace(',', '.')) || 0;
  const discountAmount = billValueNum * 0.15;
  const newBillValue = billValueNum - discountAmount;
  const yearlyEconomy = discountAmount * 12;

  // If no children provided (used as standalone component), render simulator directly
  if (!children) {
    return (
      <div className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-6 border border-solarien-primary/20">
        <div className="text-center mb-6">
          <Calculator className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Simulador de Economia
          </h3>
          {selectedState && (
            <div className="text-lg text-solarien-primary mb-2">{selectedState}</div>
          )}
          <p className="text-gray-300">
            Grupo B - Desconto de {discount} na tarifa de energia
          </p>
        </div>

        {!showResult ? (
          <div className="space-y-4">
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Valor médio da fatura (R$)
              </label>
              <Input
                type="number"
                placeholder="Ex: 350"
                value={billValue}
                onChange={(e) => setBillValue(e.target.value)}
                className="text-lg text-center border-solarien-primary/30 focus:border-solarien-primary bg-green-800/30 text-white"
                min="0"
                step="0.01"
              />
            </div>

            <Button 
              onClick={calculateDiscount}
              disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
              className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Calcular Economia
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <TrendingDown className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-solarien-primary mb-4">
                Sua Economia com {discount} de Desconto
              </h3>
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
                <div className="text-3xl font-bold text-solarien-secondary bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent">
                  R$ {discountAmount.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 rounded-lg p-4">
                <div className="text-sm text-gray-300">🎯 Economia Anual</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent animate-pulse">
                  R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
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
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-solarien-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <span className="bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent">
              Simulador de Economia
            </span>
            {selectedState && <div className="text-lg text-gray-600 mt-2">{selectedState}</div>}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          {!showResult ? (
            <>
              <div className="text-center">
                <Calculator className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Calcule sua economia mensal
                </h3>
                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mb-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
                  </p>
                </div>
                <p className="text-gray-600">
                  Grupo B - Desconto de {discount} na tarifa de energia
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor médio da fatura (R$)
                  </label>
                  <Input
                    type="number"
                    placeholder="Ex: 350"
                    value={billValue}
                    onChange={(e) => setBillValue(e.target.value)}
                    className="text-lg text-center border-solarien-primary/30 focus:border-solarien-primary"
                    min="0"
                    step="0.01"
                  />
                </div>

                <Button 
                  onClick={calculateDiscount}
                  disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
                  className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Calcular Economia
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <TrendingDown className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-solarien-primary mb-4">
                  Sua Economia com {discount} de Desconto
                </h3>
              </div>

              <div className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Conta Atual</div>
                    <div className="text-xl font-bold text-gray-800">
                      R$ {billValueNum.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Nova Conta</div>
                    <div className="text-xl font-bold text-solarien-primary">
                      R$ {newBillValue.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>

                <div className="text-center border-t border-solarien-primary/20 pt-4">
                  <div className="text-sm text-gray-600">💰 Economia Mensal</div>
                  <div className="text-3xl font-bold text-solarien-secondary bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent">
                    R$ {discountAmount.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 rounded-lg p-4">
                  <div className="text-sm text-gray-600">🎯 Economia Anual</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-solarien-primary to-solarien-secondary bg-clip-text text-transparent animate-pulse">
                    R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
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
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountSimulator;
