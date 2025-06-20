import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    if (link === 'Home') {
      navigate('/');
    } else if (link === 'FAQ') {
      navigate('/faq');
    } else if (link === 'Termos de Uso') {
      navigate('/terms');
    } else if (link === 'Política de Privacidade') {
      navigate('/privacy');
    } else if (link === 'Contatos') {
      navigate('/contact');
    }
  };

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
    <footer className="border-t relative overflow-hidden" style={{ backgroundColor: '#002113', borderTopColor: 'rgba(34, 197, 94, 0.3)' }}>
      {/* Solar Panels Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Painéis Solares"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Background overlay with green transparency */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 33, 19, 0.75) 0%, rgba(0, 33, 19, 0.80) 100%)' }}></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" 
                alt="Solarien Energy" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em gestão de contratos e consultoria energética. Oferecemos migração gratuita para energia por assinatura e mercado livre, atendendo todo o Brasil.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-green-800 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white placeholder-gray-400"
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
              <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {['Home', 'FAQ', 'Termos de Uso', 'Política de Privacidade', 'Contatos'].includes(link) ? (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-gray-300 hover:text-solarien-primary transition-colors duration-300 text-sm font-medium text-left"
                      >
                        {link}
                      </button>
                    ) : (
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-300 hover:text-solarien-primary transition-colors duration-300 text-sm font-medium"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderTopColor: 'rgba(34, 197, 94, 0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-300 text-sm font-medium">
              Copyright 2025 | Todos direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="X (Twitter)"
              >
                <div className="w-6 h-6 bg-white group-hover:bg-solarien-primary rounded transition-colors duration-300 flex items-center justify-center">
                  <span className="text-green-800 font-bold text-sm">X</span>
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
