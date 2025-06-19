
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, Zap, TrendingDown, X } from 'lucide-react';

interface DiscountSimulatorProps {
  children: React.ReactNode;
  state?: string;
  discount?: string;
}

const DiscountSimulator = ({ children, state, discount = '15%' }: DiscountSimulatorProps) => {
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [open, setOpen] = useState(false);

  const calculateDiscount = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    if (value && value > 0) {
      setShowResult(true);
    }
  };

  const discountAmount = parseFloat(billValue.replace(',', '.')) * 0.15;
  const newBillValue = parseFloat(billValue.replace(',', '.')) - discountAmount;
  const yearlyEconomy = discountAmount * 12;

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

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-solarien-primary/20 relative">
        {/* Enhanced close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-50 p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <X className="h-5 w-5" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <span className="text-gradient">Simulador de Economia</span>
            {state && <div className="text-lg text-gray-600 mt-2">{state}</div>}
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
                  Grupo B - Desconto de 15% na tarifa de energia
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor médio da fatura (R$)
                  </label>
                  <Input
                    type="number"
                    placeholder="Ex: 350,00"
                    value={billValue}
                    onChange={(e) => setBillValue(e.target.value)}
                    className="text-lg text-center border-solarien-primary/30 focus:border-solarien-primary"
                  />
                </div>

                <Button 
                  onClick={calculateDiscount}
                  disabled={!billValue || parseFloat(billValue) <= 0}
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
                      R$ {parseFloat(billValue).toFixed(2).replace('.', ',')}
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
                  <div className="text-4xl font-bold text-gradient animate-pulse">
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
                  onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
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
