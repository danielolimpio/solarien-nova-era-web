
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Terms = () => {
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
              <h1 className="text-4xl font-bold text-white mb-2">
                Termos de Uso
              </h1>
              <p className="text-gray-300">
                Termos e condições de uso da Solarien Energy
              </p>
            </div>
          </div>

          <Card className="bg-green-800/20 border-green-700">
            <CardHeader>
              <CardTitle className="text-solarien-primary">
                Termos e Condições de Uso
              </CardTitle>
              <CardDescription className="text-gray-300">
                Última atualização: Janeiro de 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-6 leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-white mb-4">1. Definições</h2>
                  <p>
                    Para os fins destes Termos de Uso, as seguintes definições se aplicam:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Solarien Energy:</strong> Empresa especializada em gestão de contratos e consultoria energética.</li>
                    <li><strong>Usuário:</strong> Pessoa física ou jurídica que utiliza os serviços da Solarien Energy.</li>
                    <li><strong>Plataforma:</strong> Website, aplicativos e sistemas da Solarien Energy.</li>
                    <li><strong>Serviços:</strong> Consultoria energética, migração para energia por assinatura e mercado livre.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">2. Aceitação dos Termos</h2>
                  <p>
                    Ao acessar e utilizar os serviços da Solarien Energy, você concorda em cumprir e estar sujeito a estes Termos de Uso. 
                    Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">3. Descrição dos Serviços</h2>
                  <p>
                    A Solarien Energy oferece:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Consultoria especializada em energia elétrica</li>
                    <li>Migração gratuita para energia por assinatura</li>
                    <li>Assessoria para migração ao mercado livre de energia</li>
                    <li>Gestão de contratos energéticos</li>
                    <li>Análise de viabilidade econômica</li>
                    <li>Acompanhamento e suporte técnico</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">4. Responsabilidades do Usuário</h2>
                  <p>
                    O usuário se compromete a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Manter a confidencialidade de suas credenciais de acesso</li>
                    <li>Utilizar os serviços de forma legal e adequada</li>
                    <li>Cumprir com todas as obrigações contratuais</li>
                    <li>Comunicar imediatamente qualquer uso não autorizado de sua conta</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">5. Responsabilidades da Solarien Energy</h2>
                  <p>
                    A Solarien Energy se compromete a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prestar serviços com qualidade e transparência</li>
                    <li>Manter a confidencialidade das informações do cliente</li>
                    <li>Fornecer suporte técnico adequado</li>
                    <li>Cumprir com todas as regulamentações do setor elétrico</li>
                    <li>Oferecer migração gratuita conforme condições estabelecidas</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">6. Privacidade e Proteção de Dados</h2>
                  <p>
                    A Solarien Energy está comprometida com a proteção da privacidade dos usuários. 
                    Todas as informações pessoais são tratadas de acordo com nossa Política de Privacidade e 
                    em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">7. Limitação de Responsabilidade</h2>
                  <p>
                    A Solarien Energy não se responsabiliza por:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Falhas no fornecimento de energia elétrica por parte das distribuidoras</li>
                    <li>Mudanças na regulamentação do setor elétrico</li>
                    <li>Perdas indiretas ou consequenciais</li>
                    <li>Interrupções temporárias dos serviços para manutenção</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">8. Modificações dos Termos</h2>
                  <p>
                    A Solarien Energy reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após sua publicação na plataforma. 
                    É responsabilidade do usuário verificar periodicamente os termos atualizados.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">9. Rescisão</h2>
                  <p>
                    Estes termos permanecerão em vigor até serem rescindidos por qualquer das partes. 
                    A Solarien Energy pode rescindir ou suspender o acesso aos serviços imediatamente, 
                    sem aviso prévio, em caso de violação destes termos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">10. Lei Aplicável</h2>
                  <p>
                    Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                    Qualquer disputa será resolvida no foro da comarca de São Paulo, SP.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">11. Contato</h2>
                  <p>
                    Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: contato@solarien.com.br</li>
                    <li>Telefone: +55 (11) 99736-1698</li>
                    <li>Endereço: São Paulo - SP, Brasil</li>
                  </ul>
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

export default Terms;
