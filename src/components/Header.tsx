
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    // If it's the contact section, navigate to the contact page
    if (sectionId === 'contato') {
      navigate('/contact');
      setIsMobileMenuOpen(false);
      return;
    }

    // If it's the home section, navigate to the home page
    if (sectionId === 'home') {
      navigate('/');
      setIsMobileMenuOpen(false);
      return;
    }

    // Check if we're not on the home page
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Parcerias', id: 'parcerias' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Licenciado', id: 'licenciado' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ios-safe-area ${
      isScrolled ? 'backdrop-blur-md border-b shadow-lg' : 'backdrop-blur-sm'
    }`} style={{ backgroundColor: '#002113' }}>
      <div className="responsive-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Aumentado e movido para direita no mobile */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-2 sm:ml-0">
            <img 
              src="/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" 
              alt="Solarien Energy" 
              className="h-12 sm:h-10 md:h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation - Otimizado para tablets e desktops */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.id)}
                className="px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-800 font-bold text-white hover:text-solarien-primary text-sm xl:text-base touch-friendly"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Melhorado para tablets */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="https://painel.solarien.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 lg:px-4 py-2 text-white font-bold hover:text-solarien-primary transition-colors duration-300 text-sm lg:text-base touch-friendly"
            >
              Entrar
            </a>
            <a
              href="https://painel.solarien.com.br/solarien"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 animate-energy-pulse text-sm lg:text-base touch-friendly"
            >
              Cadastrar
            </a>
          </div>

          {/* Mobile Menu Button - Melhorado para touch */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-green-800 transition-colors duration-300 touch-friendly z-50"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Otimizado para todos os dispositivos móveis */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b shadow-lg z-40" style={{ backgroundColor: '#002113' }}>
            <nav className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.id)}
                  className="p-4 rounded-lg hover:bg-green-800 transition-colors duration-300 text-left text-white font-bold touch-friendly"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-green-700/30">
                <a
                  href="https://painel.solarien.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-white font-bold hover:bg-green-800 rounded-lg transition-colors duration-300 text-center touch-friendly"
                >
                  Entrar
                </a>
                <a
                  href="https://painel.solarien.com.br/solarien"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg text-center touch-friendly"
                >
                  Cadastrar
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
