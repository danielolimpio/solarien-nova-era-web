import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Tag, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
}

// Same blog posts data as in Blog.tsx
const blogPosts: BlogPost[] = [
  {
    id: 'mercado-livre-energia',
    title: 'Mercado Livre de Energia: A Revolução Energética que Você Precisa Conhecer',
    excerpt: 'Descubra como o Mercado Livre de Energia está transformando o setor elétrico brasileiro e como sua empresa pode se beneficiar dessa revolução.',
    content: `O Mercado Livre de Energia representa uma das maiores transformações do setor elétrico brasileiro nas últimas décadas. Esta modalidade permite que consumidores com demanda superior a 500 kW possam escolher seu fornecedor de energia elétrica, negociando preços, prazos e condições de fornecimento diretamente com geradores ou comercializadores.

## O que é o Mercado Livre de Energia?

O Mercado Livre de Energia, também conhecido como Ambiente de Contratação Livre (ACL), é um segmento do Sistema Elétrico Brasileiro onde os consumidores podem escolher livremente seu fornecedor de energia elétrica. Diferentemente do mercado cativo, onde o consumidor deve comprar energia da distribuidora local, no mercado livre existe a liberdade de negociação.

## Principais Vantagens

### 1. Economia Significativa
- Redução de até 35% na conta de energia
- Previsibilidade de custos energéticos
- Eliminação de bandeiras tarifárias

### 2. Flexibilidade Contratual
- Prazos de contrato personalizados
- Volumes de energia ajustáveis
- Condições comerciais negociáveis

### 3. Sustentabilidade
- Possibilidade de contratar energia de fontes renováveis
- Contribuição para a matriz energética limpa
- Certificação de origem da energia

## Quem Pode Migrar?

Atualmente, podem migrar para o Mercado Livre:
- Consumidores com demanda igual ou superior a 500 kW
- Consumidores especiais (entre 500 kW e 3 MW) que contratem energia de fontes incentivadas
- Comunhões de consumidores que somem a demanda mínima

## O Processo de Migração

A migração para o Mercado Livre envolve várias etapas importantes:

1. Análise de Viabilidade: Verificação do perfil de consumo e potencial de economia
2. Escolha do Agente: Seleção do comercializador ou gerador
3. Negociação: Definição de preços, prazos e condições
4. Formalização: Assinatura do contrato de compra e venda de energia
5. Comunicação: Informação à distribuidora sobre a migração

## Desafios e Cuidados

Embora o Mercado Livre ofereça grandes vantagens, é importante estar atento a alguns aspectos:

- Gestão de Contratos: Necessidade de acompanhamento constante
- Exposição ao PLD: Risco de variação do Preço de Liquidação das Diferenças
- Sazonalidade: Variações no consumo podem impactar os custos

## O Futuro do Mercado Livre

Com a modernização do setor elétrico, espera-se que o Mercado Livre seja expandido para consumidores menores, democratizando ainda mais o acesso a essa modalidade. Iniciativas como a portabilidade da conta de luz e a digitalização dos processos tornarão a migração ainda mais acessível.

## Conclusão

O Mercado Livre de Energia representa uma oportunidade única para empresas reduzirem custos operacionais e aumentarem sua competitividade. Com o suporte adequado e uma estratégia bem definida, a migração pode gerar economias significativas e contribuir para um futuro energético mais sustentável.`,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Mercado Livre',
    author: 'Equipe Solarien',
    tags: ['Mercado Livre', 'Economia', 'Energia Elétrica', 'Sustentabilidade']
  },
  {
    id: 'energia-por-assinatura',
    title: 'Energia por Assinatura: O Futuro da Democratização Energética',
    excerpt: 'Entenda como a energia por assinatura está revolucionando o acesso à energia limpa e gerando economia para milhões de brasileiros.',
    content: `A energia por assinatura surge como uma solução inovadora que democratiza o acesso à energia solar fotovoltaica, permitindo que qualquer consumidor possa usufruir dos benefícios da energia limpa sem precisar instalar painéis solares em sua propriedade.

## O Conceito Revolucionário

A energia por assinatura funciona como um serviço de streaming, mas para energia elétrica. O consumidor assina um plano mensal e recebe créditos de energia elétrica gerada por usinas solares remotas, que são injetados diretamente em sua conta de luz através do sistema de compensação de energia elétrica.

## Como Funciona na Prática

### 1. Assinatura do Plano
O cliente escolhe um plano de acordo com seu perfil de consumo energético, sem necessidade de investimento inicial em equipamentos.

### 2. Geração Remota
A energia é gerada em usinas solares profissionais, com alta eficiência e manutenção especializada.

### 3. Compensação Automática
Os créditos de energia são automaticamente aplicados na conta de luz do consumidor, gerando economia imediata.

## Vantagens Incomparáveis

### Acessibilidade
- Sem necessidade de investimento inicial
- Disponível para qualquer tipo de imóvel
- Flexibilidade para mudanças de endereço

### Economia Garantida
- Redução de 10% a 30% na conta de luz
- Previsibilidade de gastos energéticos
- Proteção contra aumentos das tarifas

### Sustentabilidade
- Contribuição para a matriz energética limpa
- Redução da pegada de carbono
- Apoio ao desenvolvimento de energia renovável

## Diferenças da Energia Solar Tradicional

| Aspecto | Energia Solar Tradicional | Energia por Assinatura |
|---------|---------------------------|------------------------|
| Investimento Inicial | R$ 15.000 - R$ 80.000 | R$ 0 |
| Instalação | Necessária | Desnecessária |
| Manutenção | Responsabilidade do cliente | Inclusa no serviço |
| Flexibilidade | Baixa | Alta |
| Tempo de Implementação | 30-90 dias | Imediato |

## Perfil do Consumidor Ideal

A energia por assinatura é especialmente vantajosa para:

- Locatários: Que não podem instalar painéis solares
- Condomínios: Com dificuldades técnicas para instalação
- Empresas: Que buscam sustentabilidade sem investimento
- Residências: Em locais com sombreamento ou orientação inadequada

## Aspectos Regulatórios

A energia por assinatura é regulamentada pela ANEEL através da Resolução Normativa 687/2015 e suas atualizações, que estabeleceram o sistema de compensação de energia elétrica. Este marco regulatório garante:

- Segurança jurídica para consumidores
- Transparência nas transações
- Padronização dos processos
- Direitos e deveres bem definidos

## O Mercado em Expansão

O Brasil possui um dos maiores potenciais solares do mundo, com irradiação média superior a países líderes em energia solar. Este cenário favorável, combinado com:

- Queda nos custos da tecnologia solar
- Aumento das tarifas de energia elétrica
- Maior consciência ambiental
- Facilidades regulatórias

Cria um ambiente propício para o crescimento exponencial da energia por assinatura.

## Tecnologia e Inovação

As plataformas de energia por assinatura utilizam tecnologias avançadas:

### Monitoramento em Tempo Real
- Acompanhamento da geração solar
- Transparência total sobre os créditos
- Relatórios detalhados de economia

### Inteligência Artificial
- Otimização da alocação de energia
- Previsão de geração solar
- Personalização de planos

### Aplicativos Móveis
- Gestão completa pelo smartphone
- Notificações de economia
- Histórico de consumo e geração

## Impacto Social e Ambiental

A energia por assinatura gera impactos positivos significativos:

### Social
- Democratização da energia solar
- Geração de empregos verdes
- Redução de custos para famílias

### Ambiental
- Redução de emissões de CO2
- Diversificação da matriz energética
- Preservação de recursos hídricos

## Conclusão

A energia por assinatura representa o futuro da democratização energética no Brasil. Ao combinar acessibilidade, economia e sustentabilidade, esta modalidade torna a energia solar uma realidade para milhões de brasileiros, contribuindo para um futuro mais limpo e economicamente viável.`,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-10',
    readTime: '10 min',
    category: 'Energia Solar',
    author: 'Equipe Solarien',
    tags: ['Energia por Assinatura', 'Energia Solar', 'Sustentabilidade', 'Inovação']
  },
  {
    id: 'lei-14300-2022',
    title: 'Lei 14.300/2022: Marco Legal da Geração Distribuída no Brasil',
    excerpt: 'Conheça os detalhes da nova lei que regulamenta a geração distribuída de energia elétrica e suas implicações para o futuro do setor.',
    content: `A Lei 14.300/2022, sancionada em janeiro de 2022, representa um marco histórico para o setor de geração distribuída de energia elétrica no Brasil. Esta legislação estabelece o marco legal da microgeração e minigeração distribuída, trazendo segurança jurídica e definindo as regras para o desenvolvimento sustentável do setor.

## Contexto Histórico

Antes da Lei 14.300/2022, a geração distribuída era regulamentada apenas por resoluções da ANEEL. A necessidade de uma legislação federal tornou-se evidente com o crescimento exponencial do setor, que passou de algumas centenas de conexões em 2012 para mais de 1 milhão em 2021.

## Principais Dispositivos da Lei

### Definições Fundamentais

A lei estabelece definições claras para:

Microgeração Distribuída: Central geradora com potência instalada menor ou igual a 75 kW

Minigeração Distribuída: Central geradora com potência instalada superior a 75 kW e menor ou igual a 5 MW

### Sistema de Compensação de Energia Elétrica (SCEE)

O SCEE é regulamentado com os seguintes princípios:

1. Autoconsumo Local: Prioridade para o consumo da energia gerada na própria unidade
2. Compensação de Excedentes: Energia não consumida é injetada na rede e vira crédito
3. Validade dos Créditos: 60 meses para utilização dos créditos energéticos

## Regras de Transição

### Período de Transição (2022-2045)

A lei estabelece um período de transição de 23 anos, dividido em fases:

Fase 1 (2023-2024):
- Cobrança gradual dos custos de uso do sistema de distribuição
- Início: 15% dos custos
- Crescimento: 15% ao ano

Fase 2 (2025-2031):
- Cobrança de 30% a 90% dos custos
- Incremento anual definido pela ANEEL

Fase 3 (2032-2045):
- Cobrança integral dos custos do sistema
- Revisão periódica das regras

### Proteção para Sistemas Existentes

Sistemas instalados até janeiro de 2022 mantêm as regras originais até 2045, garantindo:
- Compensação integral da energia injetada
- Direito adquirido preservado
- Segurança para investimentos realizados

## Modalidades de Geração Distribuída

### 1. Geração junto à Carga
Sistema instalado na mesma propriedade da unidade consumidora.

### 2. Autoconsumo Remoto
Geração e consumo em locais diferentes, mas do mesmo titular.

### 3. Geração Compartilhada
Múltiplos consumidores compartilham uma mesma usina.

### 4. Empreendimento com Múltiplas Unidades Consumidoras (EMUC)
Condomínios e edifícios com geração compartilhada.

## Benefícios e Direitos Assegurados

### Para os Consumidores
- Direito à compensação: Energia injetada vira crédito
- Portabilidade: Possibilidade de transferir créditos
- Flexibilidade: Diferentes modalidades de geração
- Transparência: Informações claras na conta de energia

### Para o Setor
- Segurança Jurídica: Marco legal robusto
- Previsibilidade: Regras claras de longo prazo
- Sustentabilidade: Incentivo às energias renováveis
- Inovação: Estímulo ao desenvolvimento tecnológico

## Impactos da Lei no Mercado

### Crescimento Acelerado
A lei proporcionou:
- Aumento de 68% nas instalações em 2022
- Expansão para todas as classes de consumo
- Desenvolvimento de novos modelos de negócio

### Evolução Tecnológica
- Melhoria na eficiência dos equipamentos
- Redução dos custos de instalação
- Desenvolvimento de soluções digitais

### Criação de Empregos
- Mais de 600 mil empregos criados no setor
- Capacitação de mão de obra especializada
- Desenvolvimento de cadeia produtiva nacional

## Desafios e Oportunidades

### Desafios
- Adaptação às Novas Regras: Empresas e consumidores precisam se adequar
- Financiamento: Necessidade de linhas de crédito específicas
- Grid Parity: Manutenção da atratividade econômica

### Oportunidades
- Mercado Expandido: Potencial para milhões de consumidores
- Inovação: Novos produtos e serviços
- Sustentabilidade: Contribuição para metas climáticas

## Regulamentação Complementar

A ANEEL publicou diversas resoluções complementares:

- REN 1.059/2023: Atualização das regras técnicas
- REN 1.000/2021: Procedimentos de conexão
- Módulo 3 do PRODIST: Requisitos técnicos

## Perspectivas Futuras

### Expansão do Mercado
Projeções indicam:
- 5 milhões de conexões até 2030
- 25 GW de potência instalada
- R$ 100 bilhões em investimentos

### Integração com Outros Setores
- Mobilidade elétrica
- Armazenamento de energia
- Redes inteligentes (smart grids)

### Impacto Ambiental Positivo
- Redução de 20 milhões de toneladas de CO2 até 2030
- Diversificação da matriz energética
- Preservação de recursos hídricos

## Conclusão

A Lei 14.300/2022 representa um divisor de águas para a geração distribuída no Brasil. Ao estabelecer um marco legal sólido e duradouro, a lei cria as condições necessárias para o desenvolvimento sustentável do setor, beneficiando consumidores, empresas e a sociedade como um todo.

O futuro da geração distribuída no Brasil é promissor, com a lei proporcionando a segurança jurídica necessária para investimentos de longo prazo e o desenvolvimento de um mercado maduro e competitivo.`,
    image: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-05',
    readTime: '12 min',
    category: 'Legislação',
    author: 'Equipe Solarien',
    tags: ['Lei 14.300', 'Legislação', 'Geração Distribuída', 'Marco Legal']
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Header />
        <div className="text-center pt-24">
          <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-400 mb-2">Artigo não encontrado</h2>
          <p className="text-gray-500 mb-6">O artigo que você está procurando não existe.</p>
          <Button onClick={() => navigate('/blog')} className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black hover:shadow-lg hover:shadow-solarien-primary/25">
            Voltar ao Blog
          </Button>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-white mb-6 mt-8">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold text-solarien-primary mb-4 mt-6">
            {paragraph.replace('### ', '')}
          </h3>
        );
      } else if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-300 mb-2 ml-6 list-disc">
            {paragraph.replace('- ', '')}
          </li>
        );
      } else if (paragraph.includes('|')) {
        // Handle table rows
        const cells = paragraph.split('|').filter(cell => cell.trim());
        if (cells.length > 1) {
          return (
            <div key={index} className="grid grid-cols-3 gap-4 mb-2">
              {cells.map((cell, cellIndex) => (
                <div key={cellIndex} className={`p-3 rounded ${cellIndex === 0 ? 'bg-solarien-primary/10 font-semibold text-solarien-primary' : 'bg-slate-700/30 text-gray-300'}`}>
                  {cell.trim()}
                </div>
              ))}
            </div>
          );
        }
      } else if (paragraph.trim()) {
        // Process bold text by converting **text** to <strong>text</strong>
        const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        return (
          <p key={index} className="text-gray-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedText }}>
          </p>
        );
      }
      return null;
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-solarien-primary/10 via-solarien-secondary/5 to-solarien-tertiary/10"></div>
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button
              onClick={() => navigate('/blog')}
              variant="ghost"
              className="mb-6 text-solarien-primary hover:text-solarien-secondary hover:bg-solarien-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 backdrop-blur-sm border border-solarien-primary/30 rounded-full px-4 py-2 mb-6">
              <Tag className="w-4 h-4 text-solarien-primary" />
              <span className="text-sm font-semibold text-solarien-primary">{post.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <Button
                onClick={handleShare}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-solarien-primary"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="prose prose-lg prose-invert max-w-none">
              {formatContent(post.content)}
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/blog')}
              className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black hover:shadow-lg hover:shadow-solarien-primary/25 px-8 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
