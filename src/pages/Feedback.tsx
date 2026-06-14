import React, { useState } from 'react';
import { MessageSquare, Star, ThumbsUp, TrendingUp, Smile, Meh, Frown, Heart, CheckCircle, AlertCircle, XCircle, Monitor, Headphones, DollarSign, Settings, ArrowRight, LucideIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { PageShell, PageHero, PremiumSection, PremiumGrid, PremiumCard } from '../components/premium/PremiumUI';

interface Metrics {
  satisfaction: { excellent: number; good: number; average: number; poor: number };
  recommendation: { definitely: number; probably: number; maybe: number; no: number };
  improvements: { website: number; support: number; prices: number; process: number };
}

const Feedback = () => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState('');
  const [answers, setAnswers] = useState({ satisfaction: '', recommendation: '', improvements: '' });
  const [metrics, setMetrics] = useState<Metrics>({
    satisfaction: { excellent: 45, good: 35, average: 15, poor: 5 },
    recommendation: { definitely: 50, probably: 30, maybe: 15, no: 5 },
    improvements: { website: 40, support: 25, prices: 20, process: 15 },
  });

  const choose = (category: keyof typeof answers, value: string) => {
    setAnswers((p) => ({ ...p, [category]: value }));
    setMetrics((prev) => {
      const next = JSON.parse(JSON.stringify(prev)) as Metrics;
      // @ts-ignore
      if (next[category][value] !== undefined) next[category][value] += 1;
      return next;
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_vvxglpf',
        'template_vskkgic',
        {
          from_name: 'Feedback User',
          from_email: 'feedback@solarien.com.br',
          subject: 'Novo Feedback',
          message: `Feedback: ${feedback}\nSatisfação: ${answers.satisfaction}\nRecomendação: ${answers.recommendation}\nMelhorias: ${answers.improvements}`,
        },
        'cZ2wsFAjNlCiZaIIG'
      );
      toast({ title: 'Feedback enviado!', description: 'Obrigado pela sua contribuição.' });
      setFeedback('');
      setAnswers({ satisfaction: '', recommendation: '', improvements: '' });
    } catch {
      toast({ title: 'Erro ao enviar', description: 'Tente novamente.', variant: 'destructive' });
    }
  };

  const pct = (value: number, total: number) => Math.round((value / total) * 100);
  const total = (m: Record<string, number>) => Object.values(m).reduce((a, b) => a + b, 0);

  type Opt = { value: string; label: string; icon: LucideIcon };
  const optionBtn = (selected: boolean, onClick: () => void, opt: Opt) => (
    <button
      key={opt.value}
      onClick={onClick}
      className={`p-5 border transition-colors flex flex-col items-center gap-2 text-sm font-light ${
        selected ? 'border-solarien-primary bg-white/[0.04] text-white' : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
      }`}
    >
      <opt.icon className={`w-5 h-5 ${selected ? 'text-solarien-primary' : 'text-white/60'}`} strokeWidth={1.5} />
      {opt.label}
    </button>
  );

  const renderMetric = (title: string, Icon: LucideIcon, data: Record<string, number>, labels: Record<string, string>) => {
    const t = total(data);
    return (
      <PremiumCard>
        <div className="flex items-center gap-3 mb-6">
          <Icon className="w-5 h-5 text-solarien-primary" strokeWidth={1.5} />
          <h3 className="text-lg font-light text-white tracking-tight">{title}</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(data).map(([k, v]) => {
            const p = pct(v, t);
            return (
              <div key={k} className="space-y-2">
                <div className="flex justify-between text-xs font-light">
                  <span className="text-white/70">{labels[k]}</span>
                  <span className="text-solarien-primary">{p}%</span>
                </div>
                <Progress value={p} className="h-1" />
              </div>
            );
          })}
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-white/50 font-light">{t} votos</span>
        </div>
      </PremiumCard>
    );
  };

  return (
    <div className="min-h-screen">
      <SEO title="Envie seu Feedback - Solarien" description="Sua opinião é fundamental." keywords="feedback solarien" canonical="https://solarien.com.br/feedback" />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Feedback"
          title="Sua opinião importa."
          subtitle="Ajude-nos a melhorar continuamente nossos serviços. Responda o quiz e deixe sua mensagem."
        />

        <PremiumSection label="Quiz de Satisfação">
          <div className="border border-white/10 bg-[#002113] p-10 space-y-10">
            <div>
              <h3 className="text-white font-light tracking-tight mb-5">1. Como você avalia nossa plataforma?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {([
                  { value: 'excellent', label: 'Excelente', icon: Star },
                  { value: 'good', label: 'Boa', icon: Smile },
                  { value: 'average', label: 'Regular', icon: Meh },
                  { value: 'poor', label: 'Ruim', icon: Frown },
                ] as Opt[]).map((o) => optionBtn(answers.satisfaction === o.value, () => choose('satisfaction', o.value), o))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-light tracking-tight mb-5">2. Recomendaria nossos serviços?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {([
                  { value: 'definitely', label: 'Definitivamente', icon: Heart },
                  { value: 'probably', label: 'Provavelmente', icon: CheckCircle },
                  { value: 'maybe', label: 'Talvez', icon: AlertCircle },
                  { value: 'no', label: 'Não', icon: XCircle },
                ] as Opt[]).map((o) => optionBtn(answers.recommendation === o.value, () => choose('recommendation', o.value), o))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-light tracking-tight mb-5">3. O que podemos melhorar?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                {([
                  { value: 'website', label: 'Website', icon: Monitor },
                  { value: 'support', label: 'Atendimento', icon: Headphones },
                  { value: 'prices', label: 'Preços', icon: DollarSign },
                  { value: 'process', label: 'Processo', icon: Settings },
                ] as Opt[]).map((o) => optionBtn(answers.improvements === o.value, () => choose('improvements', o.value), o))}
              </div>
            </div>
          </div>
        </PremiumSection>

        <PremiumSection label="Resultados em tempo real">
          <PremiumGrid cols={3}>
            {renderMetric('Satisfação', Star, metrics.satisfaction, { excellent: 'Excelente', good: 'Boa', average: 'Regular', poor: 'Ruim' })}
            {renderMetric('Recomendação', ThumbsUp, metrics.recommendation, { definitely: 'Definitivamente', probably: 'Provavelmente', maybe: 'Talvez', no: 'Não' })}
            {renderMetric('Melhorias', TrendingUp, metrics.improvements, { website: 'Website', support: 'Atendimento', prices: 'Preços', process: 'Processo' })}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Mensagem">
          <div className="border border-white/10 bg-[#002113] p-10">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-solarien-primary" strokeWidth={1.5} />
              <h3 className="text-lg font-light text-white tracking-tight">Deixe seu feedback</h3>
            </div>
            <form onSubmit={submit} className="space-y-5">
              <textarea
                placeholder="Escreva aqui seu feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-white/15 rounded-md focus:outline-none focus:border-solarien-primary text-white placeholder:text-white/40 text-sm font-light resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors"
              >
                Enviar Feedback
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </PremiumSection>
      </PageShell>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;
