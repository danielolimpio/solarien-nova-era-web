import React from 'react';

interface PageBackgroundProps {
  /** Full image URL (Unsplash recommended) */
  image: string;
  /** Alt text for the decorative image */
  alt?: string;
  /** Image opacity 0-1. Default 0.1 for subtle premium feel */
  opacity?: number;
  /** Fixed = stays behind content on scroll (parallax-like). Default true */
  fixed?: boolean;
}

/**
 * Decorative background layer used behind pages and large sections.
 * Keeps the premium dark #002113 look while re-introducing thematic imagery.
 */
const PageBackground: React.FC<PageBackgroundProps> = ({
  image,
  alt = '',
  opacity = 0.1,
  fixed = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 pointer-events-none overflow-hidden -z-10`}
      style={{ backgroundColor: '#002113' }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ opacity }}
        loading="lazy"
        decoding="async"
      />
      {/* Dark tint to preserve legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,33,19,0.85) 0%, rgba(0,33,19,0.75) 50%, rgba(0,33,19,0.9) 100%)',
        }}
      />
      {/* Subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.08),_transparent_60%)]" />
    </div>
  );
};

export default PageBackground;

export const PAGE_BG = {
  about: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=70',
  contact: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?auto=format&fit=crop&w=1920&q=70',
  faq: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=70',
  blog: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=70',
  howItWorks: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=70',
  licensed: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=70',
  solarPlants: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=70',
  testimonials: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=70',
  services: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=70',
  feedback: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=70',
  sitemap: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=70',
  legal: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=70',
  notFound: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=70',
  footer: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=70',
  home: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=70',
} as const;
