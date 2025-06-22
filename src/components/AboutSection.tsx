
import React from 'react';
import { Users, Target, Eye, Award, Zap, Shield, MessageCircle, DollarSign, FileText, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Clean energy landscape" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-solarien-primary/5"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-full animate-float delay-700 blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 rounded-full animate-float delay-1000 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header with Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-solarien-primary/30 mb-6" style={{ backgroundColor: '#002113' }}>
            <div className="w-5 h-5 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-solarien-primary">Liderança em Energia Sustentável</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Sobre</span> <span className="text-gray-800">Nós</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Mudando a forma de consumo de energia, oferecendo soluções inovadoras e econômicas para todos os perfis de clientes, construindo um futuro mais sustentável.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-solarien-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl font-bold text-solarien-primary mb-2">2000+</div>
              <div className="text-sm text-gray-600">Usinas Solares</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-solarien-secondary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl font-bold text-solarien-secondary mb-2">3B+</div>
              <div className="text-sm text-gray-600">Faturamento Anual</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-solarien-tertiary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl font-bold text-solarien-tertiary mb-2">100k+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-solarien-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl font-bold text-solarien-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">Energia Limpa</div>
            </div>
          </div>
          
          {/* Partnership Text */}
          <p className="text-xl font-medium text-solarien-primary mt-8 tracking-wide font-mono">
            Parceria com as maiores comercializadoras do mercado
          </p>
        </div>

        {/* Enhanced Company Presentation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Enhanced Square Building Image with overlay */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/lovable-uploads/bde4e76d-6c52-45a3-8064-269c8716a781.png" 
                alt="Edifício corporativo moderno" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Enhanced glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
              
              {/* Floating info cards on image */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Tecnologia Avançada</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Qualidade Garantida</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-solarien-secondary/20 to-solarien-tertiary/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
          </div>

          {/* Right side - Enhanced Company Description */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-solarien-primary/10 to-solarien-secondary/10 border border-solarien-primary/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-solarien-primary">
                  Quem Somos
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos uma empresa comprometida com a sustentabilidade e a economia, conectando pessoas e empresas ao futuro da energia limpa e acessível.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com tecnologia de ponta e atendimento personalizado, garantimos resultados que impactam positivamente o planeta e sua conta de luz.
              </p>
            </div>

            {/* Enhanced Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-6 bg-white/70 rounded-2xl border border-solarien-primary/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Atendimento</h4>
                  <p className="text-gray-600">Personalizado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white/70 rounded-2xl border border-solarien-secondary/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-solarien-secondary to-solarien-tertiary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Economia</h4>
                  <p className="text-gray-600">100% Garantida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white/70 rounded-2xl border border-solarien-tertiary/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-solarien-tertiary to-solarien-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Energia</h4>
                  <p className="text-gray-600">100% Sustentável</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white/70 rounded-2xl border border-solarien-primary/10 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-solarien-primary/80 to-solarien-secondary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Contrato</h4>
                  <p className="text-gray-600">100% Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mission and Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 border border-solarien-primary/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solarien-primary to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-solarien-secondary to-transparent rounded-full"></div>
            </div>
            
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-solarien-primary">Missão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              Nossa missão é democratizar o acesso à energia limpa, proporcionando soluções inovadoras e eficientes que promovem economia e sustentabilidade para nossos clientes e o meio ambiente.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-solarien-secondary/5 to-solarien-tertiary/5 border border-solarien-secondary/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-solarien-secondary to-transparent rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-solarien-tertiary to-transparent rounded-full"></div>
            </div>
            
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-solarien-secondary to-solarien-tertiary rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-solarien-secondary">Visão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              Ser referência global em soluções energéticas inteligentes, liderando a transição para um modelo sustentável e transformando o mercado de energia com inovação e excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
