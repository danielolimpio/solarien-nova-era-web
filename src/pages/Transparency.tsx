
import React from 'react';
import { Eye, Mail, Phone, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Transparency = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Eye className="w-12 h-12 text-solarien-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Política de <span className="text-gradient">Transparência</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conheça nossa Política de Transparência e saiba como garantimos clareza e ética em todos os nossos serviços e operações.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Section 1 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                    Compromisso com a Transparência
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Na Solarien, acreditamos que a transparência é essencial para estabelecer uma relação de confiança com nossos clientes, parceiros e colaboradores. Nosso compromisso é fornecer informações claras, precisas e acessíveis sobre nossos serviços, garantindo que todos os clientes compreendam plenamente os benefícios e condições da portabilidade de contas de energia.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 rounded-2xl border border-solarien-primary/20 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-secondary rounded-full flex items-center justify-center text-black font-bold">2</div>
                    Sobre Nossos Serviços
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A Solarien conecta residências, comércios e indústrias a usinas solares através do mercado livre de energia e da energia compartilhada por assinatura. Nossos clientes podem realizar a portabilidade de suas contas de energia gratuitamente e usufruir de descontos que variam de 10% a 30%, dependendo do estado e da concessionária.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Destacamos que:</h3>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-solarien-primary/20">
                        <div className="w-2 h-2 bg-solarien-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Não há necessidade de instalações, obras ou investimentos por parte do cliente.</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-solarien-primary/20">
                        <div className="w-2 h-2 bg-solarien-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Todo o processo é realizado sem burocracia, com injeção de energia iniciando em até 90 dias.</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-solarien-primary/20">
                        <div className="w-2 h-2 bg-solarien-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">O cliente pode optar por uma assinatura com fidelidade para obter descontos ainda maiores.</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-solarien-primary/20">
                        <div className="w-2 h-2 bg-solarien-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">A assinatura é feita de forma 100% online, com envio de documentos e reconhecimento facial, garantindo segurança e comodidade.</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-solarien-primary/20">
                        <div className="w-2 h-2 bg-solarien-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">O desconto é garantido em contrato, reforçando nosso compromisso com a transparência.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-tertiary rounded-full flex items-center justify-center text-white font-bold">3</div>
                    Dados e Privacidade
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Na Solarien, levamos a privacidade e segurança dos dados a sério. Seguimos todas as regulamentações aplicáveis sobre proteção de dados pessoais e garantimos:
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 bg-solarien-tertiary/10 rounded-lg border border-solarien-tertiary/20">
                      <div className="w-2 h-2 bg-solarien-tertiary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Transparência na coleta e uso de informações pessoais.</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-solarien-tertiary/10 rounded-lg border border-solarien-tertiary/20">
                      <div className="w-2 h-2 bg-solarien-tertiary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Segurança no armazenamento e proteção contra acessos não autorizados.</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-solarien-tertiary/10 rounded-lg border border-solarien-tertiary/20">
                      <div className="w-2 h-2 bg-solarien-tertiary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Controle e gestão de informações pelos usuários, permitindo que eles decidam sobre seus dados.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-solarien-secondary/5 to-solarien-primary/5 rounded-2xl border border-solarien-secondary/20 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                    Sustentabilidade e Responsabilidade Social
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nosso modelo de negócio está alinhado com práticas sustentáveis, promovendo o uso de energia renovável e acessível para mais pessoas. Acreditamos que a transição para fontes de energia limpa deve ser simples e vantajosa para todos, contribuindo para um futuro mais sustentável.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-secondary rounded-full flex items-center justify-center text-black font-bold">5</div>
                    Canais de Comunicação
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Estamos sempre disponíveis para esclarecer dúvidas e fornecer informações adicionais. Entre em contato conosco através de:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-solarien-primary/10 rounded-lg border border-solarien-primary/20">
                      <Mail className="w-6 h-6 text-solarien-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">E-mail:</p>
                        <p className="text-gray-700">contato@solarien.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-solarien-secondary/10 rounded-lg border border-solarien-secondary/20">
                      <Phone className="w-6 h-6 text-solarien-secondary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Telefone:</p>
                        <p className="text-gray-700">+55(11) 99736-1698</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-solarien-tertiary/10 rounded-lg border border-solarien-tertiary/20">
                      <Globe className="w-6 h-6 text-solarien-tertiary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Site:</p>
                        <p className="text-gray-700">solarien.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-12 p-8 bg-gradient-to-br from-solarien-tertiary/5 to-solarien-primary/5 rounded-2xl border border-solarien-tertiary/20 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-solarien-tertiary rounded-full flex items-center justify-center text-white font-bold">6</div>
                    Atualização da Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Esta Política de Transparência pode ser revisada periodicamente para garantir sua atualização conforme mudanças regulatórias e aprimoramento dos nossos serviços. Qualquer alteração será comunicada de forma clara e acessível aos nossos clientes.
                  </p>
                </div>

                {/* Final Statement */}
                <div className="p-8 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-2xl text-center">
                  <p className="text-lg font-semibold text-black">
                    Na Solarien, a transparência é um pilar fundamental do nosso trabalho. Garantimos que todos os processos sejam conduzidos com clareza, honestidade e compromisso com nossos clientes.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transparency;
