
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from 'lucide-react';
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
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <FileText className="w-10 h-10 text-solarien-primary" />
                Termos de Uso
              </h1>
              <p className="text-gray-300">
                Leia os termos e condições que regem o uso dos nossos serviços de energia limpa.
              </p>
            </div>
          </div>

          <Card className="bg-green-800/20 border-green-700">
            <CardHeader>
              <CardTitle className="text-solarien-primary">
                Termos de Uso da Solarien
              </CardTitle>
              <CardDescription className="text-gray-300">
                Bem-vindo à Solarien! Ao acessar e utilizar nosso site e serviços, você concorda com os termos e condições descritos abaixo. Leia atentamente este documento antes de continuar a navegação ou utilizar nossos serviços.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-6 leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                  <p>
                    Ao utilizar os serviços oferecidos pela Solarien, você declara ter lido, compreendido e aceitado estes Termos de Uso. Caso não concorde com alguma cláusula, solicitamos que não utilize nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">2. Sobre a Solarien</h2>
                  <p>
                    A Solarien oferece serviços de portabilidade nas contas de energia para residências, comércios e indústrias por meio da Energia Compartilhada por Assinatura e do Mercado Livre de Energia. Nosso serviço é gratuito e visa proporcionar descontos na fatura de energia elétrica dos clientes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">3. Cadastro e Envio de Dados</h2>
                  <p>
                    Para utilizar nossos serviços, o usuário deverá fornecer as seguintes informações:
                  </p>
                  <p>
                    Dados da conta de energia (número da unidade consumidora, histórico de consumo, etc.);
                  </p>
                  <p>
                    Dados pessoais (nome, CPF, e-mail e WhatsApp);
                  </p>
                  <p>
                    Anexo da conta de energia, necessário para análise e processamento da portabilidade.
                  </p>
                  <p>
                    O usuário declara que as informações fornecidas são verdadeiras e se responsabiliza pela veracidade dos dados inseridos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">4. Uso dos Serviços</h2>
                  <p>
                    Ao aderir aos serviços da Solarien, o usuário autoriza:
                  </p>
                  <p>
                    O uso dos dados fornecidos para análise e intermediação da portabilidade da conta de energia;
                  </p>
                  <p>
                    O recebimento das faturas mensais e comunicações via WhatsApp e e-mail;
                  </p>
                  <p>
                    A análise de perfil de consumo para oferecer as melhores condições no fornecimento de energia.
                  </p>
                  <p>
                    O uso dos serviços está sujeito à disponibilidade do modelo de portabilidade na região do cliente e às regras regulatórias do setor energético brasileiro.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">5. Responsabilidades do Usuário</h2>
                  <p>
                    O usuário se compromete a:
                  </p>
                  <p>
                    Fornecer informações corretas e atualizadas;
                  </p>
                  <p>
                    Manter contato ativo para recebimento das faturas e comunicações;
                  </p>
                  <p>
                    Respeitar os termos estabelecidos neste documento;
                  </p>
                  <p>
                    Não utilizar os serviços para fins ilícitos ou fraudulentos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">6. Responsabilidades da Solarien</h2>
                  <p>
                    A Solarien se compromete a:
                  </p>
                  <p>
                    Proteger os dados fornecidos pelos usuários, conforme nossa Política de Privacidade;
                  </p>
                  <p>
                    Oferecer suporte e esclarecer dúvidas sobre os serviços prestados;
                  </p>
                  <p>
                    Atuar como intermediadora na portabilidade da conta de energia, garantindo transparência no processo;
                  </p>
                  <p>
                    Respeitar as normas regulatórias do setor energético.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">7. Limitações de Responsabilidade</h2>
                  <p>
                    A Solarien não se responsabiliza por:
                  </p>
                  <p>
                    Informações incorretas fornecidas pelo usuário;
                  </p>
                  <p>
                    Mudanças nas normas e regras do setor energético que possam impactar a portabilidade;
                  </p>
                  <p>
                    Interferências externas, como falhas em sistemas de terceiros ou indisponibilidade dos serviços de fornecedores de energia;
                  </p>
                  <p>
                    Danos decorrentes do mau uso dos serviços por parte do usuário.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">8. Alterações nos Termos de Uso</h2>
                  <p>
                    A Solarien pode modificar estes Termos de Uso a qualquer momento para atender a novas regulamentações ou melhorias no serviço. Qualquer alteração será publicada em nosso site (www.solarien.com.br) e comunicada aos usuários quando necessário.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">9. Rescisão e Cancelamento</h2>
                  <p>
                    O usuário pode solicitar o cancelamento da participação no serviço de portabilidade a qualquer momento, entrando em contato pelo e-mail ou WhatsApp disponíveis no site. A Solarien também pode suspender ou encerrar o acesso ao serviço em caso de descumprimento destes termos ou por motivos técnicos e regulatórios.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">10. Contato</h2>
                  <p>
                    Caso tenha dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
                    Ao utilizar nossos serviços, você declara estar ciente e de acordo com os termos estabelecidos neste documento.
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

export default Terms;
