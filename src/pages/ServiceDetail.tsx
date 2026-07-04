import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getServiceBySlug, services } from '../data/services';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  Zap,
  Network,
  ReceiptText,
  Scale,
  Droplets,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileText,
  LineChart,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Network,
  ReceiptText,
  Scale,
  Droplets,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const Icon = iconMap[service.iconName] ?? Sparkles;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.services} />
      <SEO
        title={`${service.title} | Solarien Energy`}
        description={service.metaDescription}
        keywords={service.keywords}
        canonical={`https://solarien.com.br/servicos/${service.slug}`}
      />
      <Header />
      <main className="pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.08),_transparent_60%)]" />
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary" />
                Serviço Solarien
              </div>
              <div className="flex items-start gap-6 mb-8">
                <div className="hidden sm:flex w-16 h-16 rounded-xl border border-white/20 items-center justify-center bg-white/[0.02]">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.25} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
                    {service.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/70 max-w-3xl font-light">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-10" />

              <p className="text-white/80 text-lg leading-relaxed max-w-4xl font-light">
                {service.heroDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors"
                >
                  Simular agora
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors"
                >
                  Falar com especialista
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {service.stats.map((s) => (
                <div key={s.label} className="py-10 px-4 text-center">
                  <div className="text-3xl md:text-4xl font-light text-white tracking-tight">{s.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">01 — Diferenciais</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-4 group">
                    <div className="mt-1 w-8 h-8 rounded-md border border-white/15 flex items-center justify-center group-hover:border-solarien-primary transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-solarien-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-white/85 text-base font-light pt-1">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">02 — O serviço</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="space-y-16">
                {service.sections.map((sec, idx) => (
                  <article key={sec.title} className="grid md:grid-cols-[180px_1fr] gap-8">
                    <div className="text-white/40 text-sm uppercase tracking-[0.2em] font-light">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-light text-white mb-5 tracking-tight">
                        {sec.title}
                      </h2>
                      <p className="text-white/75 leading-relaxed font-light text-base md:text-lg">
                        {sec.body}
                      </p>
                      {sec.bullets && (
                        <ul className="mt-6 space-y-3">
                          {sec.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-white/70 font-light">
                              <ChevronRight
                                className="w-4 h-4 text-solarien-primary mt-1 flex-shrink-0"
                                strokeWidth={2}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">03 — Processo</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                {service.process.map((p) => (
                  <div key={p.step} className="bg-[#002113] p-8 hover:bg-white/[0.02] transition-colors">
                    <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">{p.step}</div>
                    <h3 className="text-white font-light text-xl mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEES */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">04 — Garantias</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {[
                  { Icon: ShieldCheck, title: 'Transparência total', text: 'Relatórios mensais detalhados e auditoria aberta ao cliente.' },
                  { Icon: FileText, title: 'Fundamentação técnica', text: 'Cada pedido é embasado em normas, leis e jurisprudência específica.' },
                  { Icon: LineChart, title: 'Resultado mensurável', text: 'Economia e recuperação aferidas em moeda corrente, mês a mês.' },
                ].map(({ Icon: I, title, text }) => (
                  <div key={title} className="bg-[#002113] p-8">
                    <I className="w-7 h-7 text-white/80 mb-5" strokeWidth={1.25} />
                    <h3 className="text-white font-light text-lg mb-3 tracking-tight">{title}</h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">05 — Perguntas frequentes</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {service.faq.map((f) => (
                  <details key={f.q} className="group py-6 px-2">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-white font-light text-lg md:text-xl tracking-tight pr-8">{f.q}</h3>
                      <ChevronRight
                        className="w-5 h-5 text-solarien-primary transition-transform group-open:rotate-90 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                    </summary>
                    <p className="text-white/70 font-light leading-relaxed mt-4 pr-8">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
                Pronto para começar?
              </h2>
              <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
                Análise gratuita, sem compromisso. Nossa equipe avalia seu caso e apresenta o potencial de economia ou recuperação em até 7 dias úteis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors"
                >
                  Solicitar análise gratuita
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <a
                  href="https://wa.me/5511997361698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors"
                >
                  WhatsApp direto
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Outros serviços</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {otherServices.map((s) => {
                  const OI = iconMap[s.iconName] ?? Sparkles;
                  return (
                    <Link
                      key={s.slug}
                      to={`/servicos/${s.slug}`}
                      className="group bg-[#002113] p-8 hover:bg-white/[0.02] transition-colors"
                    >
                      <OI className="w-7 h-7 text-white/80 mb-5" strokeWidth={1.25} />
                      <h3 className="text-white font-light text-xl tracking-tight mb-3">{s.shortTitle}</h3>
                      <p className="text-white/60 font-light text-sm leading-relaxed mb-6">{s.tagline}</p>
                      <span className="inline-flex items-center gap-2 text-solarien-primary text-sm">
                        Saber mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
