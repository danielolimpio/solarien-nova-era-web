
import React from 'react';
import { Users, Target, Eye, Calendar, Handshake, Building, Network } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-solarien-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-solarien-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sobre</span> Nós
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mudando a forma de consumo de energia, oferecendo soluções inovadoras e econômicas para todos os perfis de clientes, construindo um futuro mais sustentável.
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 energy-glow">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto">
              Somos uma empresa comprometida com a sustentabilidade e a economia, conectando pessoas e empresas ao futuro da energia limpa e acessível. Com tecnologia de ponta e atendimento personalizado, garantimos resultados que impactam positivamente o planeta e sua conta de luz.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-8 border border-solarien-primary/20">
            <h3 className="text-2xl font-bold text-solarien-primary mb-6 text-center">COMPROMISSO</h3>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Na Solarien, nosso compromisso é impulsionar a sustentabilidade e a inovação, garantindo acesso à energia limpa e econômica para todos. Utilizamos tecnologia avançada e soluções personalizadas para reduzir emissões, otimizar custos e promover um futuro energético justo.
            </p>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mt-4">
              Cada projeto reflete nosso pacto com o meio ambiente, a eficiência e a satisfação dos clientes, consolidando-nos como aliados na construção de um mundo mais verde e próspero.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-solarien-primary/5 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-solarien-primary">Missão</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nossa missão é democratizar o acesso à energia limpa, proporcionando soluções inovadoras e eficientes que promovem economia e sustentabilidade para nossos clientes e o meio ambiente.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-solarien-primary/5 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-solarien-primary">Visão</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ser referência global em soluções energéticas inteligentes, liderando a transição para um modelo sustentável e transformando o mercado de energia com inovação e excelência.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Nossa</span> Jornada
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-solarien-primary/5 transition-all duration-300 group animate-slide-up">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
                <h4 className="text-xl font-bold text-solarien-primary">2022</h4>
              </div>
              <h5 className="font-semibold text-white mb-2">Chegamos em 2022</h5>
              <p className="text-gray-400 text-sm">
                Chegamos ao mercado com uma proposta inovadora: oferecer aos brasileiros uma nova forma de lidar com o consumo de energia.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-solarien-primary/5 transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                <Handshake className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
                <h4 className="text-xl font-bold text-solarien-primary">Parcerias</h4>
              </div>
              <h5 className="font-semibold text-white mb-2">Parcerias Estratégicas</h5>
              <p className="text-gray-400 text-sm">
                Ao longo desses 3 anos ampliamos as parcerias estratégicas por todo Brasil, atingindo todos os perfis de consumidores de energia elétrica.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-solarien-primary/5 transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
                <h4 className="text-xl font-bold text-solarien-primary">Unidades</h4>
              </div>
              <h5 className="font-semibold text-white mb-2">Unidades de Negócio</h5>
              <p className="text-gray-400 text-sm">
                Ofertamos energia de fontes 100% renováveis e financeiramente mais acessíveis, com até 30% de desconto na tarifa para Grupo A e Grupo B.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-solarien-primary/5 transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-solarien-primary mr-3 group-hover:animate-pulse" />
                <h4 className="text-xl font-bold text-solarien-primary">Expansão</h4>
              </div>
              <h5 className="font-semibold text-white mb-2">Expansão de Rede</h5>
              <p className="text-gray-400 text-sm">
                Além dos serviços já oferecidos, abrimos a oportunidade para você criar seu legado e transformar o futuro com energia sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
