import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Zap, BookOpen, ShieldCheck, ArrowRight, LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
} from '@/components/premium/PremiumUI';

const Sitemap = () => {
  const sections: { title: string; icon: LucideIcon; links: { name: string; path: string }[] }[] = [
    {
      title: 'Institucional',
      icon: Building2,
      links: [
        { name: 'Página Inicial', path: '/' },
        { name: 'Sobre Nós', path: '/sobre' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Contato', path: '/contato' },
      ],
    },
    {
      title: 'Soluções',
      icon: Zap,
      links: [
        { name: 'Como Funciona', path: '/como-funciona' },
        { name: 'Usinas Solares', path: '/usinas' },
        { name: 'Seja Licenciado', path: '/licenciado' },
      ],
    },
    {
      title: 'Conteúdo',
      icon: BookOpen,
      links: [
        { name: 'Blog / Notícias', path: '/blog' },
        { name: 'Depoimentos', path: '/depoimentos' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Feedback', path: '/feedback' },
      ],
    },
    {
      title: 'Políticas e Termos',
      icon: ShieldCheck,
      links: [
        { name: 'Termos de Uso', path: '/termos-de-uso' },
        { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
        { name: 'Política de Cookies', path: '/politica-de-cookies' },
        { name: 'Política de Transparência', path: '/politica-de-transparencia' },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.sitemap} />
      <SEO
        title="Mapa do Site - Solarien Energy"
        description="Navegue por todas as páginas do site da Solarien Energy."
        keywords="mapa do site, sitemap, solarien"
        canonical="https://solarien.com.br/sitemap"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Mapa do Site"
          title="Navegue por todo o site."
          subtitle="Encontre rapidamente as informações que você procura sobre nossas soluções em energia."
        />

        <PremiumSection label="Páginas">
          <PremiumGrid cols={4}>
            {sections.map((s) => (
              <PremiumCard key={s.title}>
                <PremiumIconBadge Icon={s.icon} />
                <h2 className="text-lg font-light text-white tracking-tight mb-4">{s.title}</h2>
                <ul className="space-y-3">
                  {s.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-white font-light text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 text-solarien-primary group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            ))}
          </PremiumGrid>

          <p className="text-white/55 font-light text-sm text-center mt-10">
            Não encontrou o que procura?{' '}
            <Link to="/contato" className="text-solarien-primary hover:text-white">
              Entre em contato
            </Link>
          </p>
        </PremiumSection>
      </PageShell>
      <Footer />
    </div>
  );
};

export default Sitemap;
