
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, Zap, TrendingDown } from 'lucide-react';

interface DiscountSimulatorProps {
  children: React.ReactNode;
  state?: string;
  discount?: string;
}

const DiscountSimulator = ({ children, state, discount = '15%' }: DiscountSimulatorProps) => {
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);

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

  return (
    <Dialog onOpenChange={(open) => !open && resetSimulator()}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border-solarien-primary/20">
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
                <p className="text-gray-600">
                  Digite a média da sua conta de luz dos últimos 12 meses
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
                  <div className="text-sm text-gray-600">Economia Mensal</div>
                  <div className="text-2xl font-bold text-solarien-secondary">
                    R$ {discountAmount.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-600">Economia Anual</div>
                  <div className="text-3xl font-bold text-gradient">
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
                <Button className="flex-1 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold">
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
