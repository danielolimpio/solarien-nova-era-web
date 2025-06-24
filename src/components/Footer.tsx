import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { sendNewsletterEmail } from '../services/emailService';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = (link: string) => {
    if (link === 'Home') {
      // Always navigate to home page, then scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else if (link === 'Sobre') {
      // Always navigate to home first, then scroll to about section
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('sobre');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById('sobre');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (link === 'Licenciados') {
      // Always navigate to home first, then scroll to entrepreneurship section (Oportunidade de Negócio)
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('licenciado');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById('licenciado');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (link === 'Serviços') {
      // Navigate to home first if not already there, then scroll to services
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('servicos');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById('servicos');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (link === 'Usinas') {
      // Navigate to home first if not already there, then scroll to solar plants
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('usinas');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById('usinas');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (['Como Funciona', 'Depoimentos', 'FAQ', 'Termos de Uso', 'Política de Privacidade', 'Política de Cookies', 'Política de Transparência', 'Envie o Feedback', 'Blog/Notícias'].includes(link)) {
      // Navigate to respective pages and scroll to top
      let route = '';
      switch (link) {
        case 'Como Funciona':
          route = '/como-funciona';
          break;
        case 'Depoimentos':
          route = '/depoimentos';
          break;
        case 'FAQ':
          route = '/faq';
          break;
        case 'Termos de Uso':
          route = '/terms';
          break;
        case 'Política de Privacidade':
          route = '/privacy';
          break;
        case 'Política de Cookies':
          route = '/cookies';
          break;
        case 'Política de Transparência':
          route = '/transparency';
          break;
        case 'Envie o Feedback':
          route = '/feedback';
          break;
        case 'Blog/Notícias':
          route = '/blog';
          break;
      }
      
      navigate(route);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else if (link === 'Contatos') {
      navigate('/contact');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else if (link === 'Portal do Cliente') {
      window.open('https://painel.solarien.com.br/login', '_blank');
    }
    setIsMobileMenuOpen(false);
  };

  const footerLinks = {
    'Institucional': ['Home', 'Sobre', 'Serviços', 'Usinas', 'Contatos', 'FAQ'],
    'Plataforma': ['Como Funciona', 'Licenciados', 'Depoimentos', 'Portal do Cliente', 'Blog/Notícias'],
    'Políticas': ['Termos de Uso', 'Política de Privacidade', 'Política de Cookies', 'Política de Transparência', 'Envie o Feedback']
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email para se inscrever.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingNewsletter(true);
    console.log('Inscrevendo na newsletter:', email);
    
    try {
      await sendNewsletterEmail({ email });
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail('');
    } catch (error) {
      console.error('Erro ao inscrever na newsletter:', error);
      toast({
        title: "Erro ao inscrever",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
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
                  disabled={isSubmittingNewsletter}
                />
                <button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmittingNewsletter ? 'Enviando...' : 'Assinar'}
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
                    {['Home', 'Sobre', 'Serviços', 'Usinas', 'FAQ', 'Termos de Uso', 'Política de Privacidade', 'Política de Cookies', 'Política de Transparência', 'Contatos', 'Como Funciona', 'Envie o Feedback', 'Portal do Cliente', 'Depoimentos', 'Licenciados', 'Blog/Notícias'].includes(link) ? (
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
                href="https://www.facebook.com/solarienoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/solarienoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@solarienenergy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-800 border border-green-700 rounded-lg flex items-center justify-center hover:bg-green-700 hover:border-solarien-primary/40 transition-all duration-300 group shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-white group-hover:text-solarien-primary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/solarienoficial"
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
