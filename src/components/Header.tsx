
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Licenciado', id: 'licenciado' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-lg flex items-center justify-center energy-glow">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Solarien Energy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.id)}
                className="nav-hover px-4 py-2 rounded-lg transition-all duration-300 hover:text-solarien-primary font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-solarien-primary hover:text-white transition-colors duration-300">
              Entrar
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 animate-energy-pulse">
              Cadastrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-card transition-colors duration-300"
          >
            <Menu className="w-6 h-6 text-solarien-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.id)}
                  className="p-3 rounded-lg hover:bg-solarien-primary/10 transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <button className="p-3 text-solarien-primary hover:bg-solarien-primary/10 rounded-lg transition-colors duration-300">
                  Entrar
                </button>
                <button className="p-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg">
                  Cadastrar
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
