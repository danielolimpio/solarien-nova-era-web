import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Filter, Tag, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchInput from '../components/SearchInput';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'entenda-cliente-antes-vender',
    title: 'Entenda o Cliente Antes de Vender: A Chave para Conversões na Solarien Energy',
    excerpt: 'Aprenda a reconhecer o perfil do cliente e use a abordagem certa para vender energia solar com mais eficiência e empatia.',
    image: '/lovable-uploads/entenda-cliente-antes-vender-solarien.jpg',
    date: '2025-01-28',
    readTime: '10 min',
    category: 'Vendas',
    tags: ['Vendas', 'Energia Solar', 'Conversão', 'Atendimento', 'Estratégia']
  },
  {
    id: '7-mitos-mercado-livre-energia',
    title: '7 mitos que você deve esquecer sobre Mercado Livre de Energia',
    excerpt: 'Descubra a verdade sobre o mercado livre de energia. Desmistificamos 7 mitos que te impedem de economizar na conta de luz. Saiba como migrar sem complicações.',
    image: '/lovable-uploads/7-mitos-mercado-livre-energia.jpg',
    date: '2025-01-24',
    readTime: '12 min',
    category: 'Mercado Livre',
    tags: ['Mercado Livre de Energia', 'Mitos', 'Economia', 'Migração', 'Dúvidas Comuns']
  },
  {
    id: 'mercado-livre-energia-2027',
    title: 'Mercado Livre de Energia 2027: Economia de R$ 35 Bi por Ano',
    excerpt: 'Abertura Total do Mercado Livre de Energia trará Economia de R$ 35 Bilhões por Ano: O que Você Precisa Saber',
    image: '/lovable-uploads/mercado-livre-energia-2027.jpg',
    date: '2025-01-22',
    readTime: '20 min',
    category: 'Mercado Livre',
    tags: ['Mercado Livre de Energia', 'Economia', 'MP 1.300/2025', 'Abertura 2027']
  },
  {
    id: 'mp-1300-2025',
    title: 'Medida Provisória nº 1.300 de 21 de maio de 2025: Revolução no Setor Elétrico Brasileiro',
    excerpt: 'Análise completa da MP 1.300/2025 que promete revolucionar o mercado de energia elétrica brasileiro com novas diretrizes para o setor.',
    image: '/lovable-uploads/83d68f1c-b8a9-441e-bd03-c276d396d3f9.png',
    date: '2025-01-20',
    readTime: '15 min',
    category: 'Legislação',
    tags: ['MP 1.300', 'Legislação', 'Mercado de Energia', 'Inovação']
  },
  {
    id: 'energia-injetada-futuro',
    title: 'Energia Injetada é o Futuro da Sustentabilidade e Economia no Setor Elétrico',
    excerpt: 'Descubra como a energia injetada está revolucionando o setor elétrico brasileiro, promovendo sustentabilidade e gerando economia significativa.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-18',
    readTime: '12 min',
    category: 'Sustentabilidade',
    tags: ['Energia Injetada', 'Sustentabilidade', 'Economia', 'Geração Distribuída']
  },
  {
    id: 'subgrupos-mercado-livre',
    title: 'Entenda os Subgrupos do Mercado Livre de Energia: Guia Completo',
    excerpt: 'Conheça detalhadamente os diferentes subgrupos do Mercado Livre de Energia e descubra qual se adequa melhor ao seu perfil de consumo.',
    image: '/lovable-uploads/ba1d97ab-490c-4e0d-bf90-e0561bdfb29a.png',
    date: '2025-01-16',
    readTime: '14 min',
    category: 'Mercado Livre',
    tags: ['Subgrupos Tarifários', 'Mercado Livre', 'Classificação', 'Energia Elétrica']
  },
  {
    id: 'abertura-total-2028',
    title: 'A Abertura Total do Mercado Livre de Energia em 2028: Revolução Energética Nacional',
    excerpt: 'Descubra como a abertura total do Mercado Livre em 2028 transformará o setor elétrico brasileiro e impactará todos os consumidores.',
    image: '/lovable-uploads/02722964-8945-4234-aeb3-a6b0c0594321.png',
    date: '2025-01-14',
    readTime: '16 min',
    category: 'Mercado Livre',
    tags: ['Abertura do Mercado', '2028', 'Transformação', 'Competitividade']
  },
  {
    id: 'transformacao-digital-mercado-livre',
    title: 'Transformação Digital no Mercado Livre de Energia: A Revolução Tecnológica do Setor',
    excerpt: 'Explore como a transformação digital está revolucionando o Mercado Livre de Energia com inteligência artificial, blockchain e IoT.',
    image: '/lovable-uploads/5069835f-93b4-40ab-8413-19af53f2ef6f.png',
    date: '2025-01-12',
    readTime: '18 min',
    category: 'Tecnologia',
    tags: ['Transformação Digital', 'Inteligência Artificial', 'IoT', 'Blockchain']
  },
  {
    id: 'mercado-livre-energia',
    title: 'Mercado Livre de Energia: A Revolução Energética que Você Precisa Conhecer',
    excerpt: 'Descubra como o Mercado Livre de Energia está transformando o setor elétrico brasileiro e como sua empresa pode se beneficiar dessa revolução.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Mercado Livre',
    tags: ['Mercado Livre', 'Economia', 'Energia Elétrica', 'Sustentabilidade']
  },
  {
    id: 'energia-por-assinatura',
    title: 'Energia por Assinatura: O Futuro da Democratização Energética',
    excerpt: 'Entenda como a energia por assinatura está revolucionando o acesso à energia limpa e gerando economia para milhões de brasileiros.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-10',
    readTime: '10 min',
    category: 'Energia Solar',
    tags: ['Energia por Assinatura', 'Energia Solar', 'Sustentabilidade', 'Inovação']
  },
  {
    id: 'lei-14300-2022',
    title: 'Lei 14.300/2022: Marco Legal da Geração Distribuída no Brasil',
    excerpt: 'Conheça os detalhes da nova lei que regulamenta a geração distribuída de energia elétrica e suas implicações para o futuro do setor.',
    image: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '2025-01-05',
    readTime: '12 min',
    category: 'Legislação',
    tags: ['Lei 14.300', 'Legislação', 'Geração Distribuída', 'Marco Legal']
  },
  {
    id: 'fontes-energia-renovaveis-nao-renovaveis',
    title: 'Fontes de Energia Renováveis e Não Renováveis: Um Guia Completo para Entender o Futuro da Energia',
    excerpt: 'Descubra as diferenças entre fontes renováveis e não renováveis e como a energia solar, biomassa e outras soluções sustentáveis estão transformando o mercado energético brasileiro.',
    image: '/lovable-uploads/fontes-energia-renovaveis.jpg',
    date: '2025-01-15',
    readTime: '15 min',
    category: 'Educação',
    tags: ['Energia Renovável', 'Energia Solar', 'Biomassa', 'Sustentabilidade', 'Mercado Livre']
  }
];

const Blog = () => {
  // navigation via Link instead of useNavigate
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // handle navigation via Link components

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        {/* Meta Tags para SEO do Blog */}
        <title>Blog Solarien — Energia Solar e Mercado Livre</title>
        <meta name="description" content="Fique por dentro das últimas novidades do mercado energético brasileiro. Análises especializadas, insights do setor e tendências sobre energia solar, mercado livre e sustentabilidade." />
        <meta name="keywords" content="blog energia solar, mercado livre energia, notícias energia renovável, artigos sustentabilidade, economia energia elétrica" />
        <link rel="canonical" href="https://solarien.com.br/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog Solarien Energy - Conhecimento em Energia" />
        <meta property="og:description" content="Análises especializadas, insights do setor e tendências que moldam o futuro da energia no Brasil" />
        <meta property="og:url" content="https://solarien.com.br/blog" />
        <meta property="og:image" content="https://solarien.com.br/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Solarien Energy" />
        <meta name="twitter:description" content="Fique por dentro das últimas novidades do mercado energético brasileiro" />
        <meta name="twitter:image" content="https://solarien.com.br/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" />
      </Helmet>
      
      <Header />
      
      <div className="container mx-auto px-4 pt-24">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <div className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-solarien-primary/10 via-solarien-secondary/5 to-solarien-tertiary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 backdrop-blur-sm border border-solarien-primary/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-solarien-primary" />
              <span className="text-sm font-semibold text-solarien-primary">Blog Solarien</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Conhecimento em <span className="text-transparent bg-clip-text bg-gradient-to-r from-solarien-primary to-solarien-secondary">Energia</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Fique por dentro das últimas novidades do mercado energético brasileiro. Análises especializadas, 
              insights do setor e tendências que moldam o futuro da energia no país.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col gap-4 max-w-5xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <div className="w-full sm:w-64">
                  <SearchInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onClear={clearSearch}
                    placeholder="Buscar artigos..."
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map(category => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={selectedCategory === category 
                        ? "bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black border-0 h-9 px-4 text-sm" 
                        : "border-white/20 text-gray-300 hover:bg-white/10 hover:border-solarien-primary/50 h-9 px-4 text-sm"
                      }
                    >
                      <Filter className="w-3 h-3 mr-1.5" />
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Results Info */}
            {searchTerm && (
              <div className="text-center mb-6">
                <p className="text-gray-300">
                  {filteredPosts.length === 0 
                    ? `Nenhum resultado encontrado para "${searchTerm}"` 
                    : `${filteredPosts.length} resultado${filteredPosts.length > 1 ? 's' : ''} encontrado${filteredPosts.length > 1 ? 's' : ''} para "${searchTerm}"`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                {searchTerm ? 'Nenhum artigo encontrado' : 'Nenhum artigo disponível'}
              </h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? 'Tente usar outras palavras-chave ou limpar a busca.' 
                  : 'Tente ajustar sua busca ou filtro.'
                }
              </p>
              {searchTerm && (
                <Button 
                  onClick={clearSearch}
                  variant="outline"
                  className="mt-4 border-slate-700 text-gray-300 hover:bg-slate-800/50"
                >
                  Limpar busca
                </Button>
              )}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className={`group block transform transition-all duration-700 hover:scale-105 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-solarien-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-solarien-primary/10">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-solarien-primary/90 to-solarien-secondary/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-solarien-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag}
                            className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs"
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-solarien-primary group-hover:text-solarien-secondary">Ler mais</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
