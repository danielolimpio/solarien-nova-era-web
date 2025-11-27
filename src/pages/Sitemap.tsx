import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Map, Home, Building2, Zap, HelpCircle, Phone, Users, BookOpen, FileText, Shield } from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Institucional',
      icon: Building2,
      links: [
        { name: 'Página Inicial', path: '/' },
        { name: 'Sobre Nós', path: '/sobre' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Contato', path: '/contato' },
      ]
    },
    {
      title: 'Soluções',
      icon: Zap,
      links: [
        { name: 'Como Funciona', path: '/como-funciona' },
        { name: 'Usinas Solares', path: '/usinas' },
        { name: 'Seja Licenciado', path: '/licenciado' },
      ]
    },
    {
      title: 'Conteúdo',
      icon: BookOpen,
      links: [
        { name: 'Blog / Notícias', path: '/blog' },
        { name: 'Depoimentos', path: '/depoimentos' },
        { name: 'FAQ - Perguntas Frequentes', path: '/faq' },
        { name: 'Feedback', path: '/feedback' },
      ]
    },
    {
      title: 'Políticas e Termos',
      icon: Shield,
      links: [
        { name: 'Termos de Uso', path: '/termos-de-uso' },
        { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
        { name: 'Política de Cookies', path: '/politica-de-cookies' },
        { name: 'Política de Transparência', path: '/politica-de-transparencia' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Mapa do Site – Solarien Energy"
        description="Navegue por todas as páginas do site da Solarien Energy. Encontre informações sobre energia solar, mercado livre de energia, serviços e muito mais."
        keywords="mapa do site, sitemap, solarien, navegação, páginas"
        canonical="https://solarien.com.br/sitemap"
      />
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-solarien-primary/10 mb-6">
              <Map className="w-8 h-8 text-solarien-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mapa do Site – Solarien Energy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navegue facilmente por todas as seções do nosso site. Encontre rapidamente as informações que você procura sobre energia solar e mercado livre de energia.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sitemapSections.map((section) => (
              <div 
                key={section.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-solarien-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-solarien-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-solarien-primary transition-colors duration-200 text-sm flex items-center gap-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary/50" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Não encontrou o que procura?{' '}
              <Link 
                to="/contato" 
                className="text-solarien-primary hover:underline font-medium"
              >
                Entre em contato conosco
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;