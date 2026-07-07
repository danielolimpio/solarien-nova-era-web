import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Tag, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedPosts from '../components/RelatedPosts';
import { Button } from '../components/ui/button';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
import { blogPosts, type BlogPost } from '@/data/blog-posts';
export { blogPosts };

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#002113' }}>
        <Header />
        <div className="text-center pt-24">
          <BookOpen className="w-12 h-12 text-white/30 mx-auto mb-4" strokeWidth={1.25} />
          <h2 className="text-2xl font-light text-white tracking-tight mb-2">Artigo não encontrado</h2>
          <p className="text-white/60 font-light mb-6">O artigo que você está procurando não existe.</p>
          <Button onClick={() => navigate('/blog')} className="bg-solarien-primary text-black hover:bg-white">
            Voltar ao Blog
          </Button>
        </div>
      </div>
    );
  }

  const processMarkdownLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      
      parts.push(
        <Link 
          key={match.index} 
          to={linkUrl}
          className="text-solarien-primary hover:text-solarien-secondary underline transition-colors"
        >
          {linkText}
        </Link>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-white mb-6 mt-8">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold text-solarien-primary mb-4 mt-6">
            {paragraph.replace('### ', '')}
          </h3>
        );
      } else if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-300 mb-2 ml-6 list-disc">
            {processMarkdownLinks(paragraph.replace('- ', ''))}
          </li>
        );
      } else if (paragraph.includes('|')) {
        // Handle table rows
        const cells = paragraph.split('|').filter(cell => cell.trim());
        if (cells.length > 1) {
          return (
            <div key={index} className="grid grid-cols-3 gap-4 mb-2">
              {cells.map((cell, cellIndex) => (
                <div key={cellIndex} className={`p-3 rounded ${cellIndex === 0 ? 'bg-solarien-primary/10 font-semibold text-solarien-primary' : 'bg-slate-700/30 text-gray-300'}`}>
                  {cell.trim()}
                </div>
              ))}
            </div>
          );
        }
      } else if (paragraph.trim()) {
        return (
          <p key={index} className="text-gray-300 mb-4 leading-relaxed">
            {processMarkdownLinks(paragraph)}
          </p>
        );
      }
      return null;
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  // Gerar URL absoluta para a imagem
  const getAbsoluteImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http')) return imagePath;
    return `https://solarien.com.br${imagePath}`;
  };

  const absoluteImageUrl = getAbsoluteImageUrl(post.image);
  const canonicalUrl = `https://solarien.com.br/blog/${post.id}`;
  const suffix = ' | Solarien';
  const seoTitle = (post.title + suffix).length > 60
    ? `${post.title.substring(0, 60 - suffix.length - 1).trimEnd()}…${suffix}`
    : `${post.title}${suffix}`;

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.blog} />
      <Helmet>
        <title>{post.title} — Blog Solarien</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://solarien.com.br/blog/${post.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={getAbsoluteImageUrl(post.image)} />
      </Helmet>

      <Header />
      <main className="pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <section className="py-16 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-[0.10]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#002113]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => navigate('/blog')}
                className="mb-8 text-white/70 hover:text-white hover:bg-white/5 -ml-3 font-light"
              >
                <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Voltar ao blog
              </Button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
                <Tag className="w-3 h-3" strokeWidth={1.5} />
                {post.category}
              </div>

              <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-3xl">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/55 font-light text-sm border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" strokeWidth={1.5} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span>{post.readTime}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  className="text-white/55 hover:text-white hover:bg-white/5 font-light ml-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Compartilhar
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="border border-white/15 text-white/65 px-3 py-1 text-[11px] uppercase tracking-[0.16em] font-light">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="border border-white/10 bg-[#002113] p-8 md:p-14">
                <div className="prose prose-lg prose-invert max-w-none">
                  {formatContent(post.content)}
                </div>
              </article>

              <div className="mt-16">
                <RelatedPosts currentPostId={post.id} currentCategory={post.category} allPosts={blogPosts} />
              </div>

              <div className="text-center mt-16">
                <Button
                  onClick={() => navigate('/blog')}
                  className="bg-solarien-primary text-black hover:bg-white px-8 py-3 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2} />
                  Voltar ao blog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
