
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
                Termos de Uso da Solarien
              </h1>
              <p className="text-gray-300">
                Bem-vindo à Solarien! Leia atentamente antes de utilizar nossos serviços.
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
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dados da conta de energia (número da unidade consumidora, histórico de consumo, etc.);</li>
                    <li>Dados pessoais (nome, CPF, e-mail e WhatsApp);</li>
                    <li>Anexo da conta de energia, necessário para análise e processamento da portabilidade.</li>
                  </ul>
                  <p className="mt-4">
                    O usuário declara que as informações fornecidas são verdadeiras e se responsabiliza pela veracidade dos dados inseridos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">4. Uso dos Serviços</h2>
                  <p>
                    Ao aderir aos serviços da Solarien, o usuário autoriza:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>O uso dos dados fornecidos para análise e intermediação da portabilidade da conta de energia;</li>
                    <li>O recebimento das faturas mensais e comunicações via WhatsApp e e-mail;</li>
                    <li>A análise de perfil de consumo para oferecer as melhores condições no fornecimento de energia.</li>
                  </ul>
                  <p className="mt-4">
                    O uso dos serviços está sujeito à disponibilidade do modelo de portabilidade na região do cliente e às regras regulatórias do setor energético brasileiro.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">5. Responsabilidades do Usuário</h2>
                  <p>
                    O usuário se compromete a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fornecer informações corretas e atualizadas;</li>
                    <li>Manter contato ativo para recebimento das faturas e comunicações;</li>
                    <li>Respeitar os termos estabelecidos neste documento;</li>
                    <li>Não utilizar os serviços para fins ilícitos ou fraudulentos.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">6. Responsabilidades da Solarien</h2>
                  <p>
                    A Solarien se compromete a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Proteger os dados fornecidos pelos usuários, conforme nossa Política de Privacidade;</li>
                    <li>Oferecer suporte e esclarecer dúvidas sobre os serviços prestados;</li>
                    <li>Atuar como intermediadora na portabilidade da conta de energia, garantindo transparência no processo;</li>
                    <li>Respeitar as normas regulatórias do setor energético.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">7. Limitações de Responsabilidade</h2>
                  <p>
                    A Solarien não se responsabiliza por:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informações incorretas fornecidas pelo usuário;</li>
                    <li>Mudanças nas normas e regras do setor energético que possam impactar a portabilidade;</li>
                    <li>Interferências externas, como falhas em sistemas de terceiros ou indisponibilidade dos serviços de fornecedores de energia;</li>
                    <li>Danos decorrentes do mau uso dos serviços por parte do usuário.</li>
                  </ul>
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
                  <ul className="list-disc pl-6 space-y-2">
                    <li>E-mail: contato@solarien.com.br</li>
                    <li>WhatsApp: +55 (11) 99736-1698</li>
                    <li>Site: www.solarien.com.br</li>
                  </ul>
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
