
import React, { useState } from 'react';

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
    // Add your newsletter signup logic here
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-lg flex items-center justify-center energy-glow">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Solarien Energy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em gestão de contratos e consultoria energética. Oferecemos migração gratuita para energia por assinatura e mercado livre, atendendo todo o Brasil.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white placeholder-gray-400"
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
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-solarien-primary transition-colors duration-300 text-sm"
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
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright 2025 | Todos direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="w-10 h-10 bg-background/50 border border-border rounded-lg flex items-center justify-center hover:bg-solarien-primary/20 hover:border-solarien-primary/30 transition-all duration-300 group"
                  aria-label={social}
                >
                  <div className="w-5 h-5 bg-gray-400 group-hover:bg-solarien-primary rounded transition-colors duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
