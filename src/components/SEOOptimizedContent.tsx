
import React from 'react';

const SEOOptimizedContent = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800" aria-labelledby="seo-content-heading">
      <div className="responsive-container">
        {/* Conteúdo otimizado para palavras-chave estratégicas */}
        <div className="max-w-4xl mx-auto">
          <h2 id="seo-content-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent">
            Energia Solar por Assinatura e Mercado Livre de Energia
          </h2>
          
          {/* Seção sobre Energia Solar por Assinatura */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              O que é Energia Solar por Assinatura?
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                A <strong>energia solar por assinatura</strong> da Solarien Energy é uma solução inovadora que permite 
                você economizar até 45% na conta de luz utilizando <strong>energia limpa e renovável</strong> sem 
                precisar instalar placas solares em sua propriedade.
              </p>
              <p>
                Diferente de outras empresas como iGreen Energy, Lex Alexandria, Alexandria Energia, Lex Energia 
                ou Enerzee, a Solarien Energy oferece <strong>migração gratuita</strong> para energia solar 
                com economia garantida e suporte especializado.
              </p>
            </div>
          </div>

          {/* Seção sobre Mercado Livre de Energia */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Mercado Livre de Energia: Liberdade para Escolher
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                No <strong>mercado livre de energia</strong>, você tem a liberdade de escolher seu fornecedor 
                e negociar diretamente os preços da energia elétrica. A Solarien Energy oferece consultoria 
                especializada e <strong>gestão completa de contratos energéticos</strong>.
              </p>
              <p>
                Nossa expertise em <strong>economia de energia</strong> garante que você obtenha as melhores 
                condições do mercado, com transparência total e suporte técnico especializado.
              </p>
            </div>
          </div>

          {/* Seção sobre Energia Limpa e Renovável */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Energia Limpa e Renovável: O Futuro Sustentável
            </h3>
            <div className="text-gray-300 leading-relaxled space-y-4">
              <p>
                A <strong>energia limpa</strong> é fundamental para um futuro sustentável. Com a Solarien Energy, 
                você contribui para a preservação do meio ambiente enquanto economiza significativamente na 
                conta de luz através de <strong>energia renovável</strong> de qualidade.
              </p>
              <p>
                Nossa solução em <strong>energia solar</strong> conecta você às melhores usinas solares do país, 
                garantindo fornecimento estável de energia limpa com economia garantida e sem complicações.
              </p>
            </div>
          </div>

          {/* Vantagens competitivas */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-[#02ff91]/20">
              <h4 className="text-xl font-semibold text-[#02ff91] mb-4">
                Por que escolher a Solarien Energy?
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Migração 100% gratuita para energia solar</li>
                <li>✓ Economia garantida até 45% na conta de luz</li>
                <li>✓ Sem obras, sem instalações, sem placas</li>
                <li>✓ Consultoria especializada em mercado livre</li>
                <li>✓ Suporte técnico especializado</li>
                <li>✓ +100.000 clientes satisfeitos</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-[#02ff91]/20">
              <h4 className="text-xl font-semibold text-[#02ff91] mb-4">
                Alternativa Superior às Concorrentes
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Melhor que iGreen Energy em economia</li>
                <li>✓ Mais eficiente que Lex Alexandria</li>
                <li>✓ Superior à Alexandria Energia em suporte</li>
                <li>✓ Mais vantajosa que Lex Energia</li>
                <li>✓ Mais completa que Enerzee</li>
                <li>✓ Líder em energia solar por assinatura</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SEOOptimizedContent);
