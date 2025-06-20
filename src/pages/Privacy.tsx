
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <Shield className="w-10 h-10 text-solarien-primary" />
                Política de Privacidade
              </h1>
              <p className="text-gray-300">
                Veja como protegemos suas informações. Nossa política de privacidade explica o uso, armazenamento e segurança dos seus dados pessoais.
              </p>
            </div>
          </div>

          <Card className="bg-green-800/20 border-green-700">
            <CardHeader>
              <CardTitle className="text-solarien-primary">
                Política de Privacidade da Solarien
              </CardTitle>
              <CardDescription className="text-gray-300">
                Última atualização: 06/03/2025
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-6 leading-relaxed">
                <p>
                  A Solarien tem o compromisso de proteger a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as informações fornecidas pelos clientes que utilizam nossos serviços de portabilidade nas contas de energia para residências, comércios e indústrias através da Energia Compartilhada por Assinatura e Mercado Livre de Energia.
                </p>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">1. Coleta de Dados</h2>
                  <p>
                    Para oferecer nossos serviços de forma eficiente e gratuita, coletamos as seguintes informações dos usuários:
                  </p>
                  <p>
                    <strong>Dados da conta de energia:</strong> número da conta contrato, unidade consumidora, histórico de consumo e demais informações contidas na fatura.
                  </p>
                  <p>
                    <strong>Dados pessoais:</strong> nome completo, CPF, e-mail e número de WhatsApp.
                  </p>
                  <p>
                    Outras informações relevantes para o processamento e envio das faturas de energia.
                  </p>
                  <p>
                    Os dados são coletados através do anexo da conta de energia enviado pelo cliente no momento do cadastro.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">2. Uso dos Dados</h2>
                  <p>
                    Os dados coletados são utilizados exclusivamente para os seguintes fins:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processar a portabilidade da conta de energia do cliente;</li>
                    <li>Realizar análises para oferecer os melhores descontos na energia;</li>
                    <li>Gerar e enviar as faturas de energia mensalmente;</li>
                    <li>Manter comunicação com o cliente via WhatsApp e e-mail sobre seu consumo e serviços contratados;</li>
                    <li>Garantir a segurança e conformidade com normas regulatórias do setor de energia.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">3. Compartilhamento de Dados</h2>
                  <p>
                    A Solarien não vende, aluga ou compartilha os dados pessoais dos clientes com terceiros, exceto nos seguintes casos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Com parceiros e fornecedores responsáveis pelo processamento da portabilidade e geração de faturas de energia;</li>
                    <li>Quando exigido por lei ou por determinação judicial;</li>
                    <li>Para garantir a segurança e proteção contra fraudes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">4. Armazenamento e Segurança dos Dados</h2>
                  <p>
                    Os dados fornecidos pelos clientes são armazenados em ambiente seguro e protegido por tecnologias avançadas de criptografia e controle de acesso, garantindo a confidencialidade e integridade das informações.
                  </p>
                  <p>
                    O tempo de retenção dos dados será o necessário para cumprir as finalidades descritas nesta política e atender a obrigações legais.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">5. Direitos do Titular dos Dados</h2>
                  <p>
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), os clientes da Solarien têm os seguintes direitos sobre seus dados pessoais:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Acessar, corrigir ou atualizar seus dados pessoais;</li>
                    <li>Solicitar a exclusão de seus dados (salvo quando houver obrigação legal de retenção);</li>
                    <li>Solicitar a portabilidade dos dados;</li>
                    <li>Revogar consentimentos previamente concedidos;</li>
                    <li>Solicitar informações sobre o uso e compartilhamento de seus dados.</li>
                  </ul>
                  <p>
                    Para exercer qualquer um desses direitos, entre em contato pelo e-mail: contato@solarien.com.br
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">6. Alterações nesta Política de Privacidade</h2>
                  <p>
                    A Solarien se reserva o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas em nosso site www.solarien.com.br e notificadas aos usuários sempre que necessário.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">7. Contato</h2>
                  <p>
                    Caso tenha dúvidas sobre esta política ou sobre como seus dados são tratados, entre em contato conosco:
                  </p>
                  <p>
                    E-mail: contato@solarien.com.br
                  </p>
                  <p>
                    WhatsApp: +55 (11) 99736-1698
                  </p>
                  <p>
                    Site: www.solarien.com.br
                  </p>
                  <p className="mt-4 font-semibold text-solarien-primary">
                    Ao utilizar nossos serviços, você declara estar ciente e de acordo com os termos desta Política de Privacidade.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Privacy;
