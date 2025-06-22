
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Filter, Zap, TrendingUp, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '../components/ui/card';

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

1. **Análise de Viabilidade**: Verificação do perfil de consumo e potencial de economia
2. **Escolha do Agente**: Seleção do comercializador ou gerador
3. **Negociação**: Definição de preços, prazos e condições
4. **Formalização**: Assinatura do contrato de compra e venda de energia
5. **Comunicação**: Informação à distribuidora sobre a migração

## Desafios e Cuidados

Embora o Mercado Livre ofereça grandes vantagens, é importante estar atento a alguns aspectos:

- **Gestão de Contratos**: Necessidade de acompanhamento constante
- **Exposição ao PLD**: Risco de variação do Preço de Liquidação das Diferenças
- **Sazonalidade**: Variações no consumo podem impactar os custos

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

- **Locatários**: Que não podem instalar painéis solares
- **Condomínios**: Com dificuldades técnicas para instalação
- **Empresas**: Que buscam sustentabilidade sem investimento
- **Residências**: Em locais com sombreamento ou orientação inadequada

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

**Microgeração Distribuída**: Central geradora com potência instalada menor ou igual a 75 kW

**Minigeração Distribuída**: Central geradora com potência instalada superior a 75 kW e menor ou igual a 5 MW

### Sistema de Compensação de Energia Elétrica (SCEE)

O SCEE é regulamentado com os seguintes princípios:

1. **Autoconsumo Local**: Prioridade para o consumo da energia gerada na própria unidade
2. **Compensação de Excedentes**: Energia não consumida é injetada na rede e vira crédito
3. **Validade dos Créditos**: 60 meses para utilização dos créditos energéticos

## Regras de Transição

### Período de Transição (2022-2045)

A lei estabelece um período de transição de 23 anos, dividido em fases:

**Fase 1 (2023-2024)**:
- Cobrança gradual dos custos de uso do sistema de distribuição
- Início: 15% dos custos
- Crescimento: 15% ao ano

**Fase 2 (2025-2031)**:
- Cobrança de 30% a 90% dos custos
- Incremento anual definido pela ANEEL

**Fase 3 (2032-2045)**:
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
- **Direito à compensação**: Energia injetada vira crédito
- **Portabilidade**: Possibilidade de transferir créditos
- **Flexibilidade**: Diferentes modalidades de geração
- **Transparência**: Informações claras na conta de energia

### Para o Setor
- **Segurança Jurídica**: Marco legal robusto
- **Previsibilidade**: Regras claras de longo prazo
- **Sustentabilidade**: Incentivo às energias renováveis
- **Inovação**: Estímulo ao desenvolvimento tecnológico

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
- **Adaptação às Novas Regras**: Empresas e consumidores precisam se adequar
- **Financiamento**: Necessidade de linhas de crédito específicas
- **Grid Parity**: Manutenção da atratividade econômica

### Oportunidades
- **Mercado Expandido**: Potencial para milhões de consumidores
- **Inovação**: Novos produtos e serviços
- **Sustentabilidade**: Contribuição para metas climáticas

## Regulamentação Complementar

A ANEEL publicou diversas resoluções complementares:

- **REN 1.059/2023**: Atualização das regras técnicas
- **REN 1.000/2021**: Procedimentos de conexão
- **Módulo 3 do PRODIST**: Requisitos técnicos

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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-solarien-primary/10 via-solarien-secondary/5 to-solarien-tertiary/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-solarien-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-solarien-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 backdrop-blur-sm border border-solarien-primary/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-solarien-primary animate-pulse" />
              <span className="text-sm font-semibold text-solarien-primary">Blog Solarien Energy</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-solarien-primary via-solarien-secondary to-solarien-tertiary bg-clip-text text-transparent">
                Energia do
              </span>
              <br />
              <span className="text-white">Futuro</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Descubra as últimas inovações em energia renovável, mercado livre e tecnologias sustentáveis. 
              Conteúdo especializado para transformar o futuro energético do Brasil.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-solarien-primary/50 focus:border-solarien-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-solarien-primary/50 focus:border-solarien-primary/50 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Todas as categorias</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`group bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-solarien-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-solarien-primary/10 cursor-pointer transform hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
              }}
              onClick={() => handleReadMore(post.id)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-solarien-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag}
                      className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Por {post.author}</span>
                  <div className="flex items-center gap-2 text-solarien-primary group-hover:text-solarien-secondary transition-colors duration-300">
                    <span className="text-sm font-semibold">Ler mais</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">Nenhum artigo encontrado</h3>
            <p className="text-gray-500">Tente ajustar seus filtros de pesquisa.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
