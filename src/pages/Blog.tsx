import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchInput from '../components/SearchInput';
import Breadcrumbs from '../components/Breadcrumbs';
import { PageShell, PageHero, PremiumSection } from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

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
  { id: 'entenda-cliente-antes-vender', title: 'Entenda o Cliente Antes de Vender: A Chave para Conversões', excerpt: 'Reconheça o perfil do cliente e use a abordagem certa para vender energia solar com mais eficiência.', image: '/lovable-uploads/entenda-cliente-antes-vender-solarien.jpg', date: '2025-01-28', readTime: '10 min', category: 'Vendas', tags: ['Vendas', 'Energia Solar', 'Conversão'] },
  { id: '7-mitos-mercado-livre-energia', title: '7 mitos que você deve esquecer sobre Mercado Livre de Energia', excerpt: 'A verdade sobre o mercado livre. Desmistificamos 7 mitos que te impedem de economizar.', image: '/lovable-uploads/7-mitos-mercado-livre-energia.jpg', date: '2025-01-24', readTime: '12 min', category: 'Mercado Livre', tags: ['Mercado Livre', 'Mitos', 'Economia'] },
  { id: 'mercado-livre-energia-2027', title: 'Mercado Livre de Energia 2027: Economia de R$ 35 Bi por Ano', excerpt: 'Abertura total do Mercado Livre trará economia de R$ 35 bilhões por ano: o que você precisa saber.', image: '/lovable-uploads/mercado-livre-energia-2027.jpg', date: '2025-01-22', readTime: '20 min', category: 'Mercado Livre', tags: ['Mercado Livre', 'Economia', 'MP 1.300/2025'] },
  { id: 'mp-1300-2025', title: 'MP nº 1.300/2025: Revolução no Setor Elétrico Brasileiro', excerpt: 'Análise completa da MP 1.300/2025 que promete revolucionar o mercado de energia elétrica.', image: '/lovable-uploads/83d68f1c-b8a9-441e-bd03-c276d396d3f9.png', date: '2025-01-20', readTime: '15 min', category: 'Legislação', tags: ['MP 1.300', 'Legislação'] },
  { id: 'energia-injetada-futuro', title: 'Energia Injetada é o Futuro da Sustentabilidade', excerpt: 'Como a energia injetada está revolucionando o setor elétrico brasileiro.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', date: '2025-01-18', readTime: '12 min', category: 'Sustentabilidade', tags: ['Energia Injetada', 'Sustentabilidade'] },
  { id: 'subgrupos-mercado-livre', title: 'Entenda os Subgrupos do Mercado Livre de Energia', excerpt: 'Conheça os diferentes subgrupos do Mercado Livre e descubra qual se adequa ao seu perfil.', image: '/lovable-uploads/ba1d97ab-490c-4e0d-bf90-e0561bdfb29a.png', date: '2025-01-16', readTime: '14 min', category: 'Mercado Livre', tags: ['Subgrupos', 'Mercado Livre'] },
  { id: 'abertura-total-2028', title: 'A Abertura Total do Mercado Livre em 2028', excerpt: 'Como a abertura total do Mercado Livre transformará o setor elétrico brasileiro.', image: '/lovable-uploads/02722964-8945-4234-aeb3-a6b0c0594321.png', date: '2025-01-14', readTime: '16 min', category: 'Mercado Livre', tags: ['Abertura', '2028'] },
  { id: 'transformacao-digital-mercado-livre', title: 'Transformação Digital no Mercado Livre de Energia', excerpt: 'Como IA, blockchain e IoT estão revolucionando o Mercado Livre.', image: '/lovable-uploads/5069835f-93b4-40ab-8413-19af53f2ef6f.png', date: '2025-01-12', readTime: '18 min', category: 'Tecnologia', tags: ['Transformação Digital', 'IA'] },
  { id: 'mercado-livre-energia', title: 'Mercado Livre de Energia: A Revolução Energética', excerpt: 'Como o Mercado Livre está transformando o setor elétrico brasileiro.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', date: '2025-01-15', readTime: '8 min', category: 'Mercado Livre', tags: ['Mercado Livre', 'Economia'] },
  { id: 'energia-por-assinatura', title: 'Energia por Assinatura: O Futuro da Democratização Energética', excerpt: 'Como a energia por assinatura está revolucionando o acesso à energia limpa.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', date: '2025-01-10', readTime: '10 min', category: 'Energia Solar', tags: ['Assinatura', 'Solar'] },
  { id: 'lei-14300-2022', title: 'Lei 14.300/2022: Marco Legal da Geração Distribuída', excerpt: 'Conheça os detalhes da nova lei que regulamenta a geração distribuída.', image: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', date: '2025-01-05', readTime: '12 min', category: 'Legislação', tags: ['Lei 14.300', 'GD'] },
  { id: 'fontes-energia-renovaveis-nao-renovaveis', title: 'Fontes de Energia Renováveis e Não Renováveis', excerpt: 'Guia completo sobre fontes renováveis e não renováveis e o futuro da energia.', image: '/lovable-uploads/fontes-energia-renovaveis.jpg', date: '2025-01-15', readTime: '15 min', category: 'Educação', tags: ['Renovável', 'Solar'] },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filtered = blogPosts.filter((p) => {
    const s = searchTerm.toLowerCase();
    const matchSearch = s === '' || p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s) || p.tags.some((t) => t.toLowerCase().includes(s));
    const matchCat = selectedCategory === 'Todos' || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.blog} />
      <Helmet>
        <title>Blog Solarien — Energia Solar e Mercado Livre</title>
        <meta name="description" content="Análises, insights e tendências sobre energia solar, mercado livre e sustentabilidade." />
        <link rel="canonical" href="https://solarien.com.br/blog" />
      </Helmet>

      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Blog Solarien"
          title="Conhecimento em energia."
          subtitle="Análises especializadas, insights do setor e tendências que moldam o futuro da energia no Brasil."
        />

        <PremiumSection label="Artigos">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-10">
            <div className="md:w-72">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                onClear={() => setSearchTerm('')}
                placeholder="Buscar artigos..."
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-md text-xs uppercase tracking-[0.18em] font-light transition-colors ${
                    selectedCategory === c
                      ? 'bg-solarien-primary text-black'
                      : 'border border-white/15 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-white/10 bg-[#002113] p-16 text-center">
              <BookOpen className="w-10 h-10 text-white/30 mx-auto mb-4" strokeWidth={1.25} />
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Nenhum artigo encontrado</h3>
              <p className="text-white/55 font-light text-sm">Tente outras palavras-chave ou limpe os filtros.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {filtered.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-[#002113] flex flex-col hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="relative overflow-hidden border-b border-white/10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#002113] border border-white/15 text-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-light">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-white/50 text-xs font-light mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-light text-white tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-solarien-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/65 font-light text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-white/55 text-[11px] font-light tracking-wide inline-flex items-center gap-1">
                          <Tag className="w-3 h-3" strokeWidth={1.5} />
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between text-sm tracking-wide">
                      <span className="text-white/70 font-light group-hover:text-solarien-primary">Ler artigo</span>
                      <ArrowRight className="w-4 h-4 text-solarien-primary group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </PremiumSection>
      </PageShell>
      <Footer />
    </div>
  );
};

export default Blog;
