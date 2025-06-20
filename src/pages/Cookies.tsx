
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Cookie } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Cookies = () => {
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
                <Cookie className="w-10 h-10 text-solarien-primary" />
                Política de Cookies
              </h1>
              <p className="text-gray-300">
                Saiba como usamos cookies para personalizar sua navegação e garantir uma experiência segura e eficiente no site.
              </p>
            </div>
          </div>

          <Card className="bg-green-800/20 border-green-700">
            <CardHeader>
              <CardTitle className="text-solarien-primary">
                Política de Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-6 leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-white mb-4">1. Introdução</h2>
                  <p>
                    A Solarien utiliza cookies para melhorar a experiência dos visitantes em nosso site, personalizar conteúdo e análises, bem como garantir um funcionamento eficiente da plataforma. Esta Política de Cookies explica o que são cookies, como os utilizamos e como você pode gerenciá-los.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">2. O que são Cookies?</h2>
                  <p>
                    Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você acessa nosso site. Eles contêm informações que ajudam a otimizar sua navegação e permitem que o site reconheça suas preferências em visitas futuras.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">3. Como utilizamos os Cookies?</h2>
                  <p>
                    A Solarien utiliza cookies para diversos fins, incluindo:
                  </p>
                  <p>
                    <strong>Cookies Essenciais:</strong> Necessários para o funcionamento adequado do site, garantindo segurança e acesso a funcionalidades essenciais.
                  </p>
                  <p>
                    <strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes utilizam o site, ajudando a melhorar a experiência do usuário.
                  </p>
                  <p>
                    <strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre suas escolhas e preferências, proporcionando uma navegação personalizada.
                  </p>
                  <p>
                    <strong>Cookies de Publicidade:</strong> Utilizados para apresentar conteúdo e anúncios personalizados com base nos seus interesses.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">4. Gerenciamento de Cookies</h2>
                  <p>
                    Você pode configurar seu navegador para recusar ou excluir cookies a qualquer momento. No entanto, ao desativar certos cookies, algumas funcionalidades do site podem ser afetadas. Para ajustar suas preferências, consulte as configurações do seu navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">5. Atualizações da Política de Cookies</h2>
                  <p>
                    Esta política pode ser atualizada periodicamente para refletir mudanças tecnológicas ou regulamentares. Recomendamos que você revise esta página regularmente para estar informado sobre como usamos cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4">6. Contato</h2>
                  <p>
                    Caso tenha dúvidas sobre nossa Política de Cookies, entre em contato conosco através de:
                  </p>
                  <p>
                    E-mail: contato@solarien.com.br
                  </p>
                  <p>
                    Telefone: +55(11) 99736-1698
                  </p>
                  <p className="mt-4 font-semibold text-solarien-primary">
                    Ao continuar utilizando nosso site, você concorda com o uso de cookies conforme descrito nesta política.
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

export default Cookies;
