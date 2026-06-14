import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, ArrowUp, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const go = (route: string) => {
    navigate(route);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const sections: { title: string; links: { label: string; action: () => void }[] }[] = [
    {
      title: 'Institucional',
      links: [
        { label: 'Home', action: () => go('/') },
        { label: 'Sobre', action: () => go('/sobre') },
        { label: 'Serviços', action: () => go('/servicos') },
        { label: 'Usinas', action: () => go('/usinas') },
        { label: 'Contato', action: () => go('/contato') },
        { label: 'FAQ', action: () => go('/faq') },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { label: 'Como Funciona', action: () => go('/como-funciona') },
        { label: 'Licenciados', action: () => go('/licenciado') },
        { label: 'Depoimentos', action: () => go('/depoimentos') },
        { label: 'Portal do Cliente', action: () => window.open('https://painel.solarien.com.br/login', '_blank') },
        { label: 'Blog / Notícias', action: () => go('/blog') },
      ],
    },
    {
      title: 'Políticas',
      links: [
        { label: 'Termos de Uso', action: () => go('/termos-de-uso') },
        { label: 'Política de Privacidade', action: () => go('/politica-de-privacidade') },
        { label: 'Política de Cookies', action: () => go('/politica-de-cookies') },
        { label: 'Política de Transparência', action: () => go('/politica-de-transparencia') },
        { label: 'Envie o Feedback', action: () => go('/feedback') },
        { label: 'Mapa do Site', action: () => go('/sitemap') },
      ],
    },
  ];

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_vvxglpf',
        'template_vskkgic',
        {
          from_name: 'Newsletter Subscriber',
          from_email: email,
          subject: 'Newsletter Subscription',
          message: `Nova inscrição na newsletter: ${email}`,
        },
        'cZ2wsFAjNlCiZaIIG'
      );
      toast({ title: 'Inscrição realizada!', description: 'Você foi inscrito na nossa newsletter.' });
      setEmail('');
    } catch {
      toast({ title: 'Erro na inscrição', description: 'Tente novamente mais tarde.', variant: 'destructive' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#002113' }}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/solarien-logo-new.png"
              alt="Solarien Energy"
              className="h-11 w-auto mb-6"
              width={151}
              height={48}
              loading="lazy"
              decoding="async"
            />
            <p className="text-white/65 font-light leading-relaxed mb-8 max-w-md text-sm">
              Especialistas em gestão de contratos e consultoria energética. Migração gratuita para
              energia por assinatura, mercado livre e recuperação de créditos em todo o Brasil.
            </p>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Newsletter</span>
              <form onSubmit={handleNewsletter} className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-transparent border border-white/15 rounded-md focus:outline-none focus:border-solarien-primary text-white placeholder:text-white/40 text-sm font-light"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors text-sm"
                >
                  Assinar
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">{s.title}</span>
              <ul className="mt-5 space-y-3">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={l.action}
                      className="text-white/65 hover:text-white transition-colors text-sm font-light text-left"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav aria-label="Soluções em energia" className="border-t border-white/10 pt-10 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Soluções Solarien</span>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65 font-light">
            <li><Link to="/servicos" className="hover:text-white">Mercado Livre de Energia</Link></li>
            <li><Link to="/servicos" className="hover:text-white">Energia por Assinatura</Link></li>
            <li><Link to="/servicos" className="hover:text-white">Geração Distribuída</Link></li>
            <li><Link to="/servicos" className="hover:text-white">Consultoria Energética</Link></li>
            <li><Link to="/servicos" className="hover:text-white">Restituição de Créditos</Link></li>
            <li><Link to="/como-funciona" className="hover:text-white">Como Migrar</Link></li>
            <li><Link to="/como-funciona" className="hover:text-white">Lei 14.300</Link></li>
            <li><Link to="/usinas" className="hover:text-white">Usinas Parceiras</Link></li>
            <li><Link to="/licenciado" className="hover:text-white">Seja Licenciado</Link></li>
            <li><Link to="/faq" className="hover:text-white">Dúvidas Frequentes</Link></li>
          </ul>
        </nav>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/55 text-xs font-light tracking-wide text-center md:text-left">
              © 2025 Solarien Energy. Todos os direitos reservados. Desenvolvido por{' '}
              <a
                href="https://danielolimpio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-solarien-primary"
              >
                Daniel Olímpio
              </a>
            </div>

            <div className="flex items-center gap-2">
              {[
                { href: 'https://www.facebook.com/solarienoficial/', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/solarienoficial/', Icon: Instagram, label: 'Instagram' },
                { href: 'https://www.youtube.com/@solarienenergy', Icon: Youtube, label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 rounded-md flex items-center justify-center hover:border-white/40 hover:text-white text-white/70 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
              <a
                href="https://x.com/solarienoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 rounded-md flex items-center justify-center hover:border-white/40 text-white/70 hover:text-white transition-colors text-xs font-light"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 ml-2 bg-solarien-primary text-black rounded-md flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
