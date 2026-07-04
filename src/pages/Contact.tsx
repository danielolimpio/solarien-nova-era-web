import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, Clock, MapPin, ArrowRight, LucideIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
} from '../components/premium/PremiumUI';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

const inputCls =
  'w-full px-4 py-3 bg-transparent border border-white/15 rounded-md focus:outline-none focus:border-solarien-primary text-white placeholder:text-white/40 text-sm font-light';

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '' },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        'service_vvxglpf',
        'template_vskkgic',
        {
          to_email: 'contato@solarien.com.br',
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          reply_to: values.email,
        },
        'cZ2wsFAjNlCiZaIIG'
      );
      toast({ title: 'Mensagem enviada!', description: 'Entraremos em contato em breve.' });
      form.reset();
    } catch {
      toast({ title: 'Erro ao enviar', description: 'Tente novamente mais tarde.', variant: 'destructive' });
    }
  };

  const contactInfo: { icon: LucideIcon; title: string; value: string; action?: () => void }[] = [
    { icon: Phone, title: 'Telefone', value: '+55 (11) 99736-1698', action: () => window.open('tel:+5511997361698', '_self') },
    { icon: Mail, title: 'E-mail', value: 'contato@solarien.com.br', action: () => window.open('mailto:contato@solarien.com.br', '_blank') },
    { icon: MapPin, title: 'Endereço', value: 'Av. Julia Freire, 1200 - João Pessoa - PB' },
    { icon: Clock, title: 'Horário', value: 'Segunda à Sexta: 8h às 18h' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Solarien Energy',
    telephone: '+55-11-99736-1698',
    email: 'contato@solarien.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Julia Freire, 1200 - Expedicionários',
      addressLocality: 'João Pessoa',
      addressRegion: 'PB',
      addressCountry: 'BR',
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    url: 'https://solarien.com.br/',
  };

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.contact} />
      <SEO
        title="Entre em Contato - Solarien Energy"
        description="Fale com a Solarien sobre energia solar, mercado livre e economia na conta de luz."
        keywords="contato solarien, consultoria energética, simular economia conta luz, WhatsApp Solarien"
        canonical="https://solarien.com.br/contato"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Contato"
          title="Vamos conversar sobre energia."
          subtitle="Tire dúvidas, peça uma simulação ou agende uma análise gratuita da sua conta de luz."
        />

        <PremiumSection label="Canais">
          <PremiumGrid cols={4}>
            {contactInfo.map(({ icon: Icon, title, value, action }) => (
              <PremiumCard key={title} className={action ? 'cursor-pointer' : ''}>
                <div onClick={action}>
                  <PremiumIconBadge Icon={Icon} />
                  <h3 className="text-lg font-light text-white tracking-tight mb-2">{title}</h3>
                  <p className="text-white/65 font-light text-sm leading-relaxed">{value}</p>
                </div>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Envie sua mensagem">
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-[#002113] p-10">
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-2">
                Formulário de contato
              </h2>
              <p className="text-white/65 font-light text-sm mb-8">
                Preencha os campos abaixo. Retornaremos em até 1 dia útil.
              </p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <input placeholder="Nome completo" {...form.register('name')} className={inputCls} />
                <input type="email" placeholder="seu@email.com" {...form.register('email')} className={inputCls} />
                <input placeholder="(11) 99999-9999" {...form.register('phone')} className={inputCls} />
                <input placeholder="Assunto" {...form.register('subject')} className={inputCls} />
                <textarea
                  placeholder="Escreva sua mensagem..."
                  rows={5}
                  {...form.register('message')}
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors w-full"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </form>
            </div>
            <div className="bg-[#002113] p-10 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-2">
                Atendimento direto
              </h2>
              <p className="text-white/65 font-light text-sm mb-8">
                Prefere conversar agora? Fale com nosso time pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5511997361698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors text-sm tracking-wide mb-6"
              >
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Sede</span>
                  <p className="text-white/70 font-light text-sm mt-2">
                    Av. Julia Freire, 1200 - Expedicionários<br />
                    João Pessoa - PB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PremiumSection>
      </PageShell>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
