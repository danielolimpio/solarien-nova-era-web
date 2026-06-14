export interface ServiceDetail {
  slug: string;
  iconName: string;
  shortTitle: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  heroDescription: string;
  metaDescription: string;
  keywords: string;
  sections: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  stats: { value: string; label: string }[];
  process: { step: string; title: string; description: string }[];
  faq: { q: string; a: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'economia-de-agua-empresas',
    iconName: 'Waves',
    shortTitle: 'Economia de Água para Empresas',
    title: 'Economia de Água para Empresas',
    tagline: 'Reduza até 70% na conta de água da sua empresa.',
    description:
      'Reduza até 70% na Conta de Água da Sua Empresa com Soluções Simples',
    features: [
      'Identifique Vazamentos Ocultos',
      'Dispositivos Economizadores',
      'Monitoramento em Tempo Real',
      'Sem Obras e Investimentos',
      'Remuneração Pelo Sucesso',
    ],
    heroDescription:
      'Nossa solução de Economia de Água para Empresas identifica vazamentos ocultos, instala dispositivos economizadores sem obras e implementa monitoramento em tempo real para reduzir sua conta de água em até 70%, sem custo inicial.',
    metaDescription:
      'Economia de Água para Empresas: reduza até 70% na conta de água com identificação de vazamentos, dispositivos economizadores e monitoramento em tempo real. Zero custo inicial.',
    keywords:
      'economia de água empresa, redução conta de água, vazamentos ocultos, dispositivos economizadores, monitoramento água, gestão hídrica empresas',
    sections: [
      {
        title: 'Como funciona a Economia de Água',
        body:
          'Realizamos um diagnóstico completo do sistema hídrico da empresa, identificando vazamentos ocultos, pontos de desperdício e oportunidades de instalação de dispositivos economizadores. Todo o processo é feito sem obras, sem investimento inicial e com remuneração apenas pelo resultado obtido.',
        bullets: [
          'Mapeamento hidráulico completo do empreendimento',
          'Instalação de arejadores e redutores de vazão sem quebra-quebra',
          'Monitoramento em tempo real via sensores IoT',
          'Relatórios mensais de consumo e economia alcançada',
        ],
      },
      {
        title: 'Tecnologias aplicadas',
        body:
          'Utilizamos arejadores de alta eficiência, válvulas redutoras de pressão, sensores de fluxo inteligentes e software de gestão hídrica para garantir a máxima redução de consumo sem prejudicar o conforto e a operação do negócio.',
      },
      {
        title: 'Modelo de remuneração',
        body:
          'Não cobramos nada para instalação, manutenção ou monitoramento. Nossa remuneração é um percentual da economia real gerada mensalmente, com contrato transparente e sem fidelidade.',
      },
    ],
    stats: [
      { value: '70%', label: 'Economia máxima' },
      { value: 'R$ 0', label: 'Investimento inicial' },
      { value: '100%', label: 'Sem obras' },
      { value: '30 dias', label: 'Primeira economia' },
    ],
    process: [
      { step: '01', title: 'Diagnóstico hidráulico', description: 'Mapeamento completo da rede de água e identificação de vazamentos.' },
      { step: '02', title: 'Instalação dos equipamentos', description: 'Dispositivos economizadores instalados em torneiras, chuveiros e descargas.' },
      { step: '03', title: 'Monitoramento', description: 'Sensores IoT acompanham o consumo em tempo real 24/7.' },
      { step: '04', title: 'Economia mensal', description: 'Você paga menos na conta de água e acompanha os resultados no painel.' },
    ],
    faq: [
      { q: 'Preciso parar a operação para instalar?', a: 'Não. A instalação é rápida, silenciosa e não interfere na rotina da empresa.' },
      { q: 'Funciona para qualquer tipo de empresa?', a: 'Sim. Atendemos comércios, indústrias, hospitais, hotéis, condomínios e escritórios.' },
      { q: 'Qual o prazo para começar a economizar?', a: 'A primeira redução na fatura costuma aparecer já no primeiro mês após a instalação.' },
    ],
  },
  {
    slug: 'energia-por-assinatura',
    iconName: 'Zap',
    shortTitle: 'Energia por Assinatura',
    title: 'Energia por Assinatura',
    tagline: 'Energia limpa, sem investimento, sem obra.',
    description: 'Acesso à energia limpa sem investimento inicial, instalação ou manutenção',
    features: [
      'Sem custos de instalação',
      'Economia de até 35% na conta de luz',
      'Energia 100% renovável',
      'Sem obras ou reformas',
      'Migração gratuita',
    ],
    heroDescription:
      'A Energia por Assinatura permite que sua residência ou empresa receba créditos de energia limpa gerados em usinas solares compartilhadas, sem instalar nada e com economia imediata na fatura.',
    metaDescription:
      'Energia por Assinatura: até 35% de economia na conta de luz, sem investimento, sem obra e 100% renovável. Conheça o serviço da Solarien.',
    keywords:
      'energia por assinatura, energia solar compartilhada, geração distribuída, autoconsumo remoto, economia conta de luz',
    sections: [
      {
        title: 'Como funciona a Energia por Assinatura',
        body:
          'Sua unidade consumidora passa a receber créditos de energia injetados na rede da concessionária por uma usina solar compartilhada. Você continua sendo atendido pela mesma distribuidora, mantém a mesma estrutura elétrica e passa a pagar uma fatura menor.',
        bullets: [
          'Modelo regulado pela Lei 14.300/2022 e pela ANEEL',
          'Compatível com unidades do Grupo B (residências, comércios e pequenas indústrias)',
          'Sem fidelidade abusiva e sem multa de cancelamento desproporcional',
        ],
      },
      {
        title: 'Quem pode aderir',
        body:
          'Residências, condomínios, comércios, escritórios, indústrias de pequeno porte e órgãos do terceiro setor podem aderir à modalidade desde que tenham consumo médio mensal compatível com a oferta de créditos disponível na sua distribuidora.',
      },
      {
        title: 'Vantagens fiscais e contábeis',
        body:
          'A assinatura é tratada como despesa operacional (OPEX), preservando o caixa da empresa e dispensando depreciação de ativos. Para pessoas físicas, o ganho é direto na conta mensal.',
      },
    ],
    stats: [
      { value: '35%', label: 'Economia máxima' },
      { value: 'R$ 0', label: 'Investimento inicial' },
      { value: '100%', label: 'Energia renovável' },
      { value: '30 dias', label: 'Primeira economia' },
    ],
    process: [
      { step: '01', title: 'Análise da fatura', description: 'Avaliação técnica da sua conta de energia para definir a melhor cota.' },
      { step: '02', title: 'Adesão digital', description: 'Contrato 100% digital, sem burocracia, sem visita técnica.' },
      { step: '03', title: 'Alocação de créditos', description: 'A usina passa a injetar créditos vinculados à sua unidade consumidora.' },
      { step: '04', title: 'Economia mensal', description: 'Você paga menos pela energia e recebe relatórios mensais de desempenho.' },
    ],
    faq: [
      { q: 'Preciso fazer alguma obra?', a: 'Não. Não há instalação de painéis, equipamentos ou alteração no padrão de entrada.' },
      { q: 'Posso cancelar a qualquer momento?', a: 'Sim, respeitando o aviso prévio contratual, normalmente de 90 dias.' },
      { q: 'A distribuidora continua sendo a mesma?', a: 'Sim. Você continua atendido pela sua concessionária local; apenas recebe créditos da usina compartilhada.' },
    ],
  },
  {
    slug: 'mercado-livre-de-energia',
    iconName: 'Network',
    shortTitle: 'Mercado Livre de Energia',
    title: 'Mercado Livre de Energia',
    tagline: 'Liberdade para escolher seu fornecedor de energia.',
    description: 'Liberdade para escolher seu fornecedor de energia e economizar até 45%',
    features: [
      'Economia de até 45%',
      'Contratos personalizados',
      'Consultoria especializada',
      'Gestão completa do processo',
      'Suporte técnico dedicado',
    ],
    heroDescription:
      'O Mercado Livre de Energia (ACL) permite que empresas negociem diretamente com geradoras e comercializadoras condições, preço, prazo e fonte da energia consumida, com economia média entre 25% e 45%.',
    metaDescription:
      'Migração para o Mercado Livre de Energia (ACL) com economia de até 45%. Consultoria completa: viabilidade, contratos, CCEE e gestão.',
    keywords:
      'mercado livre de energia, ACL, consumidor livre, consumidor especial, migração mercado livre, CCEE, comercializadora energia',
    sections: [
      {
        title: 'O que muda no Mercado Livre',
        body:
          'No Ambiente de Contratação Livre, o consumidor escolhe o fornecedor, negocia preço, prazo e fonte (incentivada ou convencional) e passa a operar dentro da CCEE com medição, contabilização e liquidação próprias.',
        bullets: [
          'Aplicável a consumidores com demanda contratada ≥ 500 kW (livre) ou qualquer demanda (especial, fontes incentivadas)',
          'Abertura total do mercado prevista até 2026',
          'Possibilidade de PPA de longo prazo com lastro renovável',
        ],
      },
      {
        title: 'Etapas da migração',
        body:
          'A Solarien executa todo o processo: diagnóstico de viabilidade, denúncia contratual com a distribuidora, adesão à CCEE, contratação de comercializadora, gestão de medição e contabilização mensal.',
      },
      {
        title: 'Gestão contínua',
        body:
          'Após a migração, fazemos a gestão de sazonalização, flexibilidade contratual, exposição ao PLD, encargos setoriais e oportunidades de recompra ou venda de excedente.',
      },
    ],
    stats: [
      { value: '45%', label: 'Economia máxima' },
      { value: '2026', label: 'Abertura total do mercado' },
      { value: '500 kW', label: 'Demanda mínima ACL' },
      { value: '24/7', label: 'Gestão CCEE' },
    ],
    process: [
      { step: '01', title: 'Viabilidade', description: 'Estudo técnico e econômico com base nas últimas 12 faturas.' },
      { step: '02', title: 'Estratégia', description: 'Definição da modalidade, fonte e prazo contratual ideal.' },
      { step: '03', title: 'Migração', description: 'Adesão à CCEE, denúncia da distribuidora e contratação da energia.' },
      { step: '04', title: 'Gestão', description: 'Acompanhamento mensal de medição, contabilização e liquidação.' },
    ],
    faq: [
      { q: 'Qual o tempo de migração?', a: 'Em média 6 a 12 meses, conforme prazo de aviso prévio à distribuidora.' },
      { q: 'Preciso trocar a fiação ou medidor?', a: 'A distribuidora instala um medidor SMF (Sistema de Medição para Faturamento) compatível com a CCEE.' },
      { q: 'Posso voltar para o mercado cativo?', a: 'Sim, respeitando os prazos regulatórios e o aviso prévio mínimo.' },
    ],
  },
  {
    slug: 'restituicao-creditos-rci-e',
    iconName: 'ReceiptText',
    shortTitle: 'Restituição de Créditos RCI - E',
    title: 'Restituição de Créditos RCI - E (Energia)',
    tagline: 'Recuperação administrativa de créditos de energia.',
    description:
      'Recuperação administrativas de créditos de energia de cobranças indevidas analisadas nos últimos 10 anos',
    features: [
      'Auditoria Técnica de 5 a 10 anos',
      'Identificação de Inconsistências',
      'Fundamentação nas Normas da ANEEL',
      'Zero Custo para o Cliente',
      'Prazo típico 60 a 180 dias',
    ],
    heroDescription:
      'A Restituição de Créditos RCI - E identifica cobranças indevidas em faturas de energia elétrica nos últimos 10 anos e busca a restituição administrativa junto à distribuidora, com fundamentação nas normas da ANEEL.',
    metaDescription:
      'Restituição de Créditos RCI - E: recupere administrativamente cobranças indevidas de energia dos últimos 10 anos. Zero custo inicial.',
    keywords:
      'restituição créditos energia, RCI energia, cobranças indevidas energia, auditoria fatura energia, ANEEL, recuperação tributária energia',
    sections: [
      {
        title: 'O que é a RCI - E',
        body:
          'É um trabalho técnico-jurídico de auditoria das faturas de energia elétrica dos últimos 10 anos, com identificação de erros de enquadramento tarifário, demanda contratada, fator de potência, ICMS, PIS, COFINS, TUSD e TUSDg, seguido de pedido administrativo de restituição à distribuidora.',
        bullets: [
          'Enquadramento tarifário inadequado (A4, A3a, B3 etc.)',
          'Cobrança de demanda reativa em desacordo com o REN ANEEL 1.000/2021',
          'Aplicação indevida de bandeiras tarifárias',
          'Erros de medição e refaturamento sem comunicação prévia',
        ],
      },
      {
        title: 'Por que é administrativa',
        body:
          'Toda a recuperação é feita pela via administrativa, diretamente junto à distribuidora e, quando necessário, à ANEEL, sem necessidade de ação judicial. Isso garante prazos menores e custos próximos de zero para o cliente.',
      },
      {
        title: 'Fundamentação legal',
        body:
          'Os pedidos são embasados na Resolução Normativa ANEEL 1.000/2021, no Decreto 5.163/2004, na Lei 9.427/1996 e nas resoluções específicas de bandeiras tarifárias e ICMS na base de cálculo.',
      },
    ],
    stats: [
      { value: '10 anos', label: 'Janela de auditoria' },
      { value: 'R$ 0', label: 'Custo inicial' },
      { value: '60-180', label: 'Dias até a restituição' },
      { value: '100%', label: 'Via administrativa' },
    ],
    process: [
      { step: '01', title: 'Coleta de faturas', description: 'Reunimos os últimos 60 meses de faturas e contratos.' },
      { step: '02', title: 'Auditoria técnica', description: 'Engenheiros eletricistas e contadores cruzam dados e identificam inconsistências.' },
      { step: '03', title: 'Pedido administrativo', description: 'Protocolamos junto à distribuidora com fundamentação ANEEL.' },
      { step: '04', title: 'Restituição', description: 'Crédito em fatura ou devolução direta ao cliente.' },
    ],
    faq: [
      { q: 'Quanto custa o serviço?', a: 'Zero custo inicial. A remuneração é exclusivamente success fee sobre o valor efetivamente recuperado.' },
      { q: 'Preciso processar a distribuidora?', a: 'Não. Todo o trabalho é administrativo, sem ação judicial.' },
      { q: 'Quem pode contratar?', a: 'Empresas e condomínios do Grupo A e B com faturas de energia regulares.' },
    ],
  },
  {
    slug: 'restituicao-creditos-eletrobras',
    iconName: 'Scale',
    shortTitle: 'Restituição de Créditos Eletrobrás',
    title: 'Restituição de Créditos Eletrobrás',
    tagline: 'Recuperação judicial dos empréstimos compulsórios de 1987 e 1994.',
    description:
      'Recuperação judicial de créditos compulsórios de energia da Eletrobras dos anos de 1987 e 1994',
    features: [
      'Auditoria Histórica de até 40 anos',
      'Identificação de Créditos da Eletrobras',
      'Possibilidade de Venda do Crédito',
      'Sem Custo Inicial para Análise',
      'Pagamento à Vista em 7 dias',
    ],
    heroDescription:
      'Indústrias e grandes consumidores que pagaram o Empréstimo Compulsório sobre Energia Elétrica nos anos de 1987 e 1994 têm direito à restituição dos valores, corrigidos e com juros, por via judicial.',
    metaDescription:
      'Restituição de Créditos Eletrobrás: recuperação judicial dos empréstimos compulsórios de 1987 e 1994. Auditoria de até 40 anos, sem custo inicial.',
    keywords:
      'restituição eletrobras, empréstimo compulsório eletrobras, créditos eletrobras 1987, créditos eletrobras 1994, recuperação judicial energia',
    sections: [
      {
        title: 'O que foi o Empréstimo Compulsório',
        body:
          'Criado pela Lei 4.156/1962, o Empréstimo Compulsório sobre Energia Elétrica foi cobrado de consumidores industriais até 1993. A devolução, prevista em ações da Eletrobras, foi feita de forma incompleta e os valores remanescentes podem ser recuperados judicialmente.',
        bullets: [
          'Aplicável a indústrias com consumo ≥ 2.000 kWh/mês entre 1977 e 1993',
          'Inclui correção monetária pela tabela do STJ e juros de mora',
          'Trabalho conjunto de engenharia, contabilidade e advocacia',
        ],
      },
      {
        title: 'Recuperação 100% judicial',
        body:
          'Diferente da RCI - E, esta restituição exige ação judicial específica contra a Eletrobras, com base em jurisprudência consolidada do STJ (REsp 1.003.955/RS e Tema 962/STJ).',
      },
      {
        title: 'Venda do crédito',
        body:
          'Após o trânsito em julgado e habilitação, oferecemos a possibilidade de cessão (venda) do crédito a investidores institucionais, com pagamento à vista em até 7 dias úteis.',
      },
    ],
    stats: [
      { value: '40 anos', label: 'Auditoria histórica' },
      { value: '7 dias', label: 'Pagamento à vista do crédito' },
      { value: '1987/1994', label: 'Anos com direito' },
      { value: 'R$ 0', label: 'Custo de análise' },
    ],
    process: [
      { step: '01', title: 'Análise documental', description: 'Levantamento de faturas e comprovantes da época junto à distribuidora.' },
      { step: '02', title: 'Cálculo do crédito', description: 'Apuração do valor histórico com correção e juros.' },
      { step: '03', title: 'Ação judicial', description: 'Protocolamos e acompanhamos a ação até o trânsito em julgado.' },
      { step: '04', title: 'Recebimento ou venda', description: 'Cliente recebe via precatório/RPV ou vende o crédito à vista.' },
    ],
    faq: [
      { q: 'Minha empresa tem direito?', a: 'Indústrias com consumo elegível entre 1977 e 1993 têm direito; fazemos análise gratuita.' },
      { q: 'Qual o prazo?', a: 'Da propositura ao trânsito em julgado, em média 24 a 48 meses. Com cessão, o pagamento é em 7 dias.' },
      { q: 'Há custo inicial?', a: 'Não. A análise é gratuita e os honorários são success fee.' },
    ],
  },
  {
    slug: 'restituicao-creditos-rci-a',
    iconName: 'Droplets',
    shortTitle: 'Restituição de Créditos RCI - A',
    title: 'Restituição de Créditos RCI - A (Água e Esgoto)',
    tagline: 'Recuperação administrativa de créditos de água e esgoto.',
    description:
      'Recuperação de créditos de água e esgoto de cobranças indevidas analisadas nos últimos 10 anos',
    features: [
      'Auditoria Técnica de 5 a 10 anos',
      'Identificação de Inconsistências',
      'Recuperação Administrativa ANEEL',
      'Zero Custo para o Cliente',
      'Prazo típico 60 a 150 dias',
    ],
    heroDescription:
      'A Restituição de Créditos RCI - A identifica cobranças indevidas em faturas de água e esgoto nos últimos 10 anos e busca a restituição administrativa junto à concessionária de saneamento.',
    metaDescription:
      'Restituição de Créditos RCI - A: recupere administrativamente cobranças indevidas de água e esgoto dos últimos 10 anos. Zero custo inicial.',
    keywords:
      'restituição créditos água, RCI água esgoto, cobranças indevidas saneamento, auditoria fatura água, recuperação tributária saneamento',
    sections: [
      {
        title: 'O que é a RCI - A',
        body:
          'É a auditoria das faturas de água e esgoto dos últimos 10 anos, com identificação de erros de categoria de consumo, estimativa indevida, vazamentos não reconhecidos, cobrança de esgoto sobre volume não coletado e aplicação incorreta de tarifa social ou comercial.',
        bullets: [
          'Categoria de consumo aplicada incorretamente (residencial, comercial, industrial)',
          'Cobrança de esgoto em imóveis sem coleta efetiva',
          'Estimativas mantidas por longos períodos sem leitura real',
          'Vazamentos comprovados sem aplicação do desconto regulamentar',
        ],
      },
      {
        title: 'Recuperação administrativa',
        body:
          'Todo o trabalho é feito junto à concessionária de saneamento e, quando necessário, à agência reguladora estadual, sem necessidade de ação judicial. Prazos curtos e custo inicial zero para o cliente.',
      },
      {
        title: 'Quem pode contratar',
        body:
          'Condomínios, indústrias, hospitais, escolas, redes de varejo, hotéis e qualquer imóvel com faturas significativas de água e esgoto nos últimos 10 anos.',
      },
    ],
    stats: [
      { value: '10 anos', label: 'Janela de auditoria' },
      { value: 'R$ 0', label: 'Custo inicial' },
      { value: '60-150', label: 'Dias até a restituição' },
      { value: '100%', label: 'Via administrativa' },
    ],
    process: [
      { step: '01', title: 'Coleta de faturas', description: 'Reunimos os últimos 120 meses de faturas e histórico de consumo.' },
      { step: '02', title: 'Auditoria técnica', description: 'Engenharia e contabilidade cruzam leitura, categoria e tarifa aplicada.' },
      { step: '03', title: 'Pedido administrativo', description: 'Protocolamos junto à concessionária e à agência reguladora.' },
      { step: '04', title: 'Restituição', description: 'Crédito em fatura ou devolução direta ao cliente.' },
    ],
    faq: [
      { q: 'Quanto custa?', a: 'Zero custo inicial. Remuneração apenas success fee sobre o valor recuperado.' },
      { q: 'Funciona para qualquer concessionária?', a: 'Sim. Atendemos clientes em todo o Brasil, com adaptação à regulação estadual.' },
      { q: 'Posso contratar como condomínio?', a: 'Sim. Condomínios residenciais e comerciais são um dos perfis com maior recuperação.' },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
