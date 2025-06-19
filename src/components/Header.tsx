
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
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
      isScrolled ? 'backdrop-blur-md border-b shadow-lg' : 'backdrop-blur-sm'
    }`} style={{ backgroundColor: '#002113' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" 
              alt="Solarien Energy" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.id)}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-800 font-bold text-white hover:text-solarien-primary"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-white font-bold hover:text-solarien-primary transition-colors duration-300">
              Entrar
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 animate-energy-pulse">
              Cadastrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-800 transition-colors duration-300"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b shadow-lg" style={{ backgroundColor: '#002113' }}>
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.id)}
                  className="p-3 rounded-lg hover:bg-green-800 transition-colors duration-300 text-left text-white font-bold"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-green-700/30">
                <button className="p-3 text-white font-bold hover:bg-green-800 rounded-lg transition-colors duration-300">
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
