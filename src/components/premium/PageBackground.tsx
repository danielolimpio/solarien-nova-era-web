import React from 'react';

interface PageBackgroundProps {
  image: string;
  alt?: string;
  /** Image opacity 0-1. Default 0.35 - clearly visible */
  opacity?: number;
  /** Fixed = parallax-like, Absolute = scrolls with section. Default fixed for pages, use false for sections */
  fixed?: boolean;
  /** Visual tone of the tint overlay */
  tone?: 'dark' | 'medium' | 'soft' | 'clean' | 'warm';
}

const TONES: Record<NonNullable<PageBackgroundProps['tone']>, string> = {
  // Dark green wash — legibility for white text
  dark: 'linear-gradient(180deg, rgba(0,33,19,0.68) 0%, rgba(0,33,19,0.58) 50%, rgba(0,33,19,0.78) 100%)',
  // Medium — lets image breathe more
  medium: 'linear-gradient(180deg, rgba(0,33,19,0.52) 0%, rgba(0,33,19,0.42) 50%, rgba(0,33,19,0.62) 100%)',
  // Soft — image dominant
  soft: 'linear-gradient(180deg, rgba(0,33,19,0.38) 0%, rgba(0,20,12,0.28) 50%, rgba(0,33,19,0.5) 100%)',
  // Clean — near-white for light sections (requires dark text)
  clean: 'linear-gradient(180deg, rgba(250,250,248,0.94) 0%, rgba(245,245,240,0.92) 100%)',
  // Warm — sepia/dawn variety
  warm: 'linear-gradient(180deg, rgba(30,20,10,0.58) 0%, rgba(50,30,15,0.48) 50%, rgba(20,15,5,0.68) 100%)',
};

const PageBackground: React.FC<PageBackgroundProps> = ({
  image,
  alt = '',
  opacity = 0.35,
  fixed = true,
  tone = 'dark',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 pointer-events-none overflow-hidden -z-10`}
      style={{ backgroundColor: tone === 'clean' ? '#f7f5f0' : '#002113' }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ opacity }}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0" style={{ background: TONES[tone] }} />
      {tone !== 'clean' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.10),_transparent_65%)]" />
      )}
    </div>
  );
};

export default PageBackground;

/**
 * Absolute-positioned background for a single section (not fixed).
 * Use this to give each section its own distinct backdrop on a page.
 */
export const SectionBackground: React.FC<PageBackgroundProps> = (props) => (
  <PageBackground {...props} fixed={false} />
);

/**
 * Themed image URLs per page (Unsplash). Each URL is distinct so pages don't share visuals.
 */
export const PAGE_BG = {
  // Home hero uses HeroSection's own image; PAGE_BG.home covers the rest of the home page.
  home: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=75',
  about: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=75',
  contact: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=75',
  faq: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=75',
  blog: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=75',
  howItWorks: 'https://images.unsplash.com/photo-1548611716-3000815a5803?auto=format&fit=crop&w=1920&q=75',
  licensed: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=75',
  solarPlants: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=75',
  testimonials: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=75',
  services: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=75',
  feedback: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=75',
  sitemap: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=75',
  legal: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=75',
  notFound: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=75',
  footer: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=75',
} as const;

/**
 * Per-section imagery for the Home page — each section gets its own visual identity.
 */
export const SECTION_BG = {
  about: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=75', // solar rooftop panels
  video: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1920&q=75', // green landscape
  partners: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=75', // modern office
  plants: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=75', // wind turbines at dawn
  entrepreneurship: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=75', // team meeting
  license: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1920&q=75', // city skyline
} as const;
