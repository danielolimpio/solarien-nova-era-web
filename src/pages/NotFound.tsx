import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative isolate flex flex-col">
      <PageBackground image={PAGE_BG.notFound} />
      <Header />
      <main
        className="flex-1 flex items-center justify-center pt-20 pb-20"
        style={{ backgroundColor: '#002113' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary" />
              Erro 404
            </div>
            <h1 className="text-7xl md:text-9xl font-light text-white tracking-tight mb-6">404</h1>
            <p className="text-white/70 text-lg md:text-xl font-light mb-10">
              A página que você procura não existe ou foi movida.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors"
            >
              Voltar para o início
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
