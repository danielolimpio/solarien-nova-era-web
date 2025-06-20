
import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { useNavigate } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Consent Popup */}
      <div className="fixed bottom-4 left-4 z-50 max-w-md">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-solarien-primary/30 shadow-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-solarien-primary" />
                <CardTitle className="text-white text-lg">
                  Controle sua Privacidade
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-gray-400 hover:text-white h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Nosso site usa cookies para melhorar a navegação.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => navigate('/privacy')}
                className="text-solarien-primary hover:underline"
              >
                Política de Privacidade
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={() => navigate('/cookies')}
                className="text-solarien-primary hover:underline"
              >
                Política de Cookies
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={() => navigate('/terms')}
                className="text-solarien-primary hover:underline"
              >
                Termos de Uso
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  size="sm"
                >
                  Aceitar
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  size="sm"
                >
                  Rejeitar
                </Button>
              </div>

              {/* Preferences Dialog */}
              <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-solarien-primary text-xs flex items-center gap-1 justify-center"
                  >
                    <Settings className="w-3 h-3" />
                    Minhas opções
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-solarien-primary/30 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-solarien-primary flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Preferências de Cookies
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">Cookies Essenciais</h4>
                          <p className="text-xs text-gray-400">Necessários para o funcionamento do site</p>
                        </div>
                        <div className="text-solarien-primary font-semibold text-sm">
                          Sempre ativo
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">Cookies de Performance</h4>
                          <p className="text-xs text-gray-400">Ajudam a melhorar a experiência</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-solarien-primary"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => {
                          handleAccept();
                          setShowPreferences(false);
                        }}
                        className="flex-1 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold"
                        size="sm"
                      >
                        Salvar Preferências
                      </Button>
                      <Button
                        onClick={() => setShowPreferences(false)}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        size="sm"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CookieConsent;
