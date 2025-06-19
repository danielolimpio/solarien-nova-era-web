
import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerLinks = {
    'Institucional': ['Home', 'Sobre', 'Serviços', 'Usinas', 'Contatos', 'FAQ'],
    'Plataforma': ['Como Funciona', 'Licenciados', 'Depoimentos', 'Portal do Cliente', 'Blog/Notícias'],
    'Políticas': ['Termos de Uso', 'Política de Privacidade', 'Política de Cookies', 'Política de Transparência', 'Envie o Feedback']
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-solarien-primary/20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-solarien-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Solarien Energy</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Especialistas em gestão de contratos e consultoria energética. Oferecemos migração gratuita para energia por assinatura e mercado livre, atendendo todo o Brasil.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-white border border-solarien-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-gray-800 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 whitespace-nowrap"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-solarien-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-solarien-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-sm">
              Copyright 2025 | Todos direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-solarien-primary/20 rounded-lg flex items-center justify-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-solarien-primary/70 group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-solarien-primary/20 rounded-lg flex items-center justify-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-solarien-primary/70 group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-solarien-primary/20 rounded-lg flex items-center justify-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-solarien-primary/70 group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-solarien-primary/20 rounded-lg flex items-center justify-center hover:bg-solarien-primary/10 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="X (Twitter)"
              >
                <div className="w-6 h-6 bg-solarien-primary/70 group-hover:bg-solarien-primary rounded transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
              </a>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 ml-4"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
