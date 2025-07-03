
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  const handleScrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'contato') {
      navigate('/contato');
      setIsMobileMenuOpen(false);
      return;
    }

    if (sectionId === 'home') {
      navigate('/');
      setIsMobileMenuOpen(false);
      return;
    }

    if (window.location.pathname !== '/') {
      navigate('/');
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
  }, [navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const menuItems = useMemo(() => [
    { name: 'Home', id: 'home', description: 'Página inicial da Solarien Energy', url: 'https://solarien.com.br/' },
    { name: 'Sobre', id: 'sobre', description: 'Conheça a Solarien Energy', url: 'https://solarien.com.br/#sobre' },
    { name: 'Parcerias', id: 'parcerias', description: 'Nossos parceiros em energia solar', url: 'https://solarien.com.br/#parcerias' },
    { name: 'Serviços', id: 'servicos', description: 'Serviços de energia solar e mercado livre', url: 'https://solarien.com.br/#servicos' },
    { name: 'Licenciado', id: 'licenciado', description: 'Informações sobre licenciamento', url: 'https://solarien.com.br/#licenciado' },
    { name: 'Contato', id: 'contato', description: 'Entre em contato conosco', url: 'https://solarien.com.br/contato' }
  ], []);

  const headerStyle = useMemo(() => ({ backgroundColor: '#002113' }), []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ios-safe-area will-change-transform ${
        isScrolled ? 'backdrop-blur-md border-b shadow-lg' : 'backdrop-blur-sm'
      }`} 
      style={headerStyle}
      role="banner"
    >
      <div className="responsive-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo otimizado com schema */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-2 sm:ml-0" itemScope itemType="https://schema.org/Organization">
            <img 
              src="/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" 
              alt="Solarien Energy - Logo empresa energia solar e mercado livre" 
              className="h-12 sm:h-10 md:h-12 w-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={48}
              height={48}
              itemProp="logo"
            />
            <span className="sr-only" itemProp="name">Solarien Energy</span>
          </div>

          {/* Desktop Navigation com estrutura semântica otimizada para Sitelinks */}
          <nav 
            className="hidden lg:flex items-center space-x-4 xl:space-x-8" 
            role="navigation" 
            aria-label="Menu principal"
            itemScope 
            itemType="https://schema.org/SiteNavigationElement"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className="px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-800 font-bold text-white hover:text-solarien-primary text-sm xl:text-base touch-friendly will-change-transform"
                aria-label={item.description}
                itemProp="name"
                data-sitelink-url={item.url}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons otimizados */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="https://painel.solarien.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 lg:px-4 py-2 text-white font-bold hover:text-solarien-primary transition-colors duration-300 text-sm lg:text-base touch-friendly"
              aria-label="Entrar no painel do cliente Solarien"
              itemProp="url"
              data-sitelink="portal-cliente"
            >
              Entrar
            </a>
            <a
              href="https://painel.solarien.com.br/solarien"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 animate-energy-pulse text-sm lg:text-base touch-friendly will-change-transform"
              aria-label="Cadastrar-se na Solarien Energy"
              itemProp="url"
              data-sitelink="cadastro"
            >
              Cadastrar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-lg hover:bg-green-800 transition-colors duration-300 touch-friendly z-50"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b shadow-lg z-40 will-change-transform" 
            style={headerStyle}
            role="navigation"
            aria-label="Menu mobile"
            itemScope 
            itemType="https://schema.org/SiteNavigationElement"
          >
            <nav className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="p-4 rounded-lg hover:bg-green-800 transition-colors duration-300 text-left text-white font-bold touch-friendly"
                  aria-label={item.description}
                  itemProp="name"
                  data-sitelink-url={item.url}
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
                  aria-label="Entrar no painel do cliente"
                  itemProp="url"
                  data-sitelink="portal-cliente"
                >
                  Entrar
                </a>
                <a
                  href="https://painel.solarien.com.br/solarien"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg text-center touch-friendly"
                  aria-label="Cadastrar-se na Solarien"
                  itemProp="url"
                  data-sitelink="cadastro"
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

export default React.memo(Header);
