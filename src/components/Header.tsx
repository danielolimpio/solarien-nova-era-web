import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  const handleNavigation = useCallback(
    (route: string) => {
      navigate(route);
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((p) => !p), []);

  const menuItems = useMemo(
    () => [
      { name: 'Home', route: '/' },
      { name: 'Sobre', route: '/sobre' },
      { name: 'Parcerias', route: '/usinas' },
      { name: 'Serviços', route: '/servicos' },
      { name: 'Licenciado', route: '/licenciado' },
      { name: 'Contato', route: '/contato' },
    ],
    []
  );

  const headerStyle = useMemo(
    () => ({ backgroundColor: '#002113' }),
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ios-safe-area ${
        isScrolled ? 'border-b border-white/10' : 'border-b border-transparent'
      }`}
      style={headerStyle}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center flex-shrink-0" itemScope itemType="https://schema.org/Organization">
            <img
              src="/lovable-uploads/solarien-logo-new.png"
              alt="Solarien Energy"
              className="h-10 sm:h-11 w-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={151}
              height={48}
              itemProp="logo"
            />
            <span className="sr-only" itemProp="name">Solarien Energy</span>
          </div>

          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Menu principal"
          >
            {menuItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavigation(item.route)}
                className="px-4 py-2 text-sm font-light tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://painel.solarien.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-light tracking-wide text-white/80 hover:text-white transition-colors"
            >
              Entrar
            </a>
            <a
              href="https://painel.solarien.com.br/solarien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-solarien-primary text-black text-sm font-medium rounded-md hover:bg-white transition-colors"
            >
              Cadastrar
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md border border-white/15 text-white"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 border-t border-white/10"
            style={headerStyle}
            role="navigation"
            aria-label="Menu mobile"
          >
            <nav className="flex flex-col p-4 gap-1 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavigation(item.route)}
                  className="p-3 text-left text-white font-light tracking-wide hover:bg-white/[0.04] rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-white/10">
                <a
                  href="https://painel.solarien.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white font-light tracking-wide rounded-md border border-white/20 text-center"
                >
                  Entrar
                </a>
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-solarien-primary text-black font-medium rounded-md text-center"
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
