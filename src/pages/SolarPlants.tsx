import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarPlantsCarousel from '../components/SolarPlantsCarousel';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Sun, MapPin, Zap, TreePine, Factory, Users, LucideIcon } from 'lucide-react';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
  PremiumCTA,
} from '../components/premium/PremiumUI';

const SolarPlants = () => {
  const stats: { icon: LucideIcon; number: string; label: string; description: string }[] = [
    { icon: Factory, number: '2000+', label: 'Usinas Parceiras', description: 'Distribuídas por todo o Brasil.' },
    { icon: Zap, number: '5 GW', label: 'Capacidade Total', description: 'Potência instalada em energia renovável.' },
    { icon: Users, number: '1M+', label: 'Famílias Atendidas', description: 'Residências recebendo energia limpa.' },
    { icon: TreePine, number: '2,5M t', label: 'CO₂ Evitado', description: 'Reduzidas anualmente.' },
  ];

  const regions = [
    { region: 'Nordeste', states: ['BA', 'CE', 'PE', 'RN', 'PB'], capacity: '2.8 GW', plants: 850, highlight: 'Maior concentração devido ao excelente índice de irradiação solar.' },
    { region: 'Sudeste', states: ['SP', 'MG', 'RJ', 'ES'], capacity: '1.5 GW', plants: 650, highlight: 'Região com maior demanda energética industrial.' },
    { region: 'Centro-Oeste', states: ['MT', 'MS', 'GO', 'DF'], capacity: '450 MW', plants: 320, highlight: 'Crescimento acelerado no agronegócio sustentável.' },
    { region: 'Sul', states: ['RS', 'SC', 'PR'], capacity: '180 MW', plants: 150, highlight: 'Integração com outras fontes renováveis.' },
    { region: 'Norte', states: ['TO', 'PA', 'RO', 'AC'], capacity: '70 MW', plants: 30, highlight: 'Região em expansão com grande potencial.' },
  ];

  const technologies = [
    { title: 'Painéis Fotovoltaicos', description: 'Silício monocristalino e policristalino de alta eficiência.', efficiency: '20-22%' },
    { title: 'Sistemas de Rastreamento', description: 'Seguidores solares que acompanham o movimento do sol.', efficiency: '+15%' },
    { title: 'Inversores Inteligentes', description: 'Conversão DC/AC com monitoramento em tempo real.', efficiency: '98%' },
    { title: 'Armazenamento', description: 'Sistemas de baterias para fornecimento contínuo.', efficiency: '95%' },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.solarPlants} />
      <SEO
        title="Usinas Solares Parceiras - Rede Nacional"
        description="Maior rede de usinas solares do Brasil. Mais de 2000 usinas parceiras."
        keywords="usinas solares parceiras, fazenda solar Brasil, geração distribuída fotovoltaica, usina solar SCEE"
        canonical="https://solarien.com.br/usinas"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Rede Nacional"
          title={<>A maior rede de usinas solares do Brasil.</>}
          subtitle="Mais de 2.000 usinas parceiras gerando energia limpa e renovável para milhões de brasileiros, em todas as regiões do país."
          stats={[
            { value: '2000+', label: 'Usinas' },
            { value: '5 GW', label: 'Capacidade' },
            { value: '1M+', label: 'Famílias' },
          ]}
        />

        <div style={{ backgroundColor: '#002113' }}>
          <SolarPlantsCarousel />
        </div>

        <PremiumSection label="Números">
          <PremiumGrid cols={4}>
            {stats.map(({ icon: Icon, number, label, description }) => (
              <PremiumCard key={label}>
                <PremiumIconBadge Icon={Icon} />
                <div className="text-3xl font-light text-white tracking-tight mb-2">{number}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-solarien-primary mb-3">{label}</div>
                <p className="text-white/60 font-light text-sm leading-relaxed">{description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Presença Nacional">
          <PremiumGrid cols={3}>
            {regions.map((r) => (
              <PremiumCard key={r.region}>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-solarien-primary" strokeWidth={1.5} />
                  <h3 className="text-xl font-light text-white tracking-tight">{r.region}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-2xl font-light text-white">{r.capacity}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-1">Capacidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-white">{r.plants}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-1">Usinas</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {r.states.map((s) => (
                      <span key={s} className="border border-white/15 px-2 py-1 rounded text-xs text-white/70 font-light tracking-wider">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-white/60 font-light text-sm leading-relaxed">{r.highlight}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Tecnologia">
          <PremiumGrid cols={2}>
            {technologies.map((tech) => (
              <PremiumCard key={tech.title}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-light text-white tracking-tight">{tech.title}</h3>
                  <span className="border border-white/15 px-3 py-1 rounded text-xs text-solarien-primary font-light tracking-wider">
                    {tech.efficiency}
                  </span>
                </div>
                <p className="text-white/65 font-light text-sm leading-relaxed">{tech.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Impacto">
          <PremiumGrid cols={3}>
            <PremiumCard>
              <PremiumIconBadge Icon={TreePine} />
              <div className="text-2xl font-light text-white mb-2">12 Milhões</div>
              <div className="text-xs uppercase tracking-[0.18em] text-solarien-primary mb-3">Árvores Preservadas</div>
              <p className="text-white/60 font-light text-sm leading-relaxed">Equivalente ao CO₂ evitado anualmente.</p>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={Zap} />
              <div className="text-2xl font-light text-white mb-2">8 TWh</div>
              <div className="text-xs uppercase tracking-[0.18em] text-solarien-primary mb-3">Energia Limpa Gerada</div>
              <p className="text-white/60 font-light text-sm leading-relaxed">Anualmente por nossas usinas.</p>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={Sun} />
              <div className="text-2xl font-light text-white mb-2">99,9%</div>
              <div className="text-xs uppercase tracking-[0.18em] text-solarien-primary mb-3">Disponibilidade</div>
              <p className="text-white/60 font-light text-sm leading-relaxed">Confiabilidade no fornecimento.</p>
            </PremiumCard>
          </PremiumGrid>
        </PremiumSection>

        <PremiumCTA
          title="Conecte-se à energia do futuro."
          description="Faça parte da maior rede de energia solar do Brasil e contribua para um futuro mais sustentável."
          primary={{ href: 'https://painel.solarien.com.br/solarien', label: 'Cadastrar Agora' }}
          secondary={{ to: '/contato', label: 'Saber Mais' }}
        />
      </PageShell>
      <Footer />
    </div>
  );
};

export default SolarPlants;
