import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

/* ============================================================
   Premium UI Primitives – matches /servicos design system
   - Background #002113
   - font-light / tracking-tight
   - monochrome lucide icons (strokeWidth 1.25)
   - thin white/10 borders, grid gap-px on white/10
   ============================================================ */

export const PageShell: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="pt-20" style={{ backgroundColor: '#002113' }}>
    {children}
  </main>
);

export const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3 mb-12">
    <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">{label}</span>
    <div className="flex-1 h-px bg-white/10" />
  </div>
);

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  stats?: { value: string; label: string }[];
}
export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, stats }) => (
  <section className="py-24 relative overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.06),_transparent_60%)]" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary" />
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {stats && (
          <div className="mt-12 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-light text-white">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export const PremiumSection: React.FC<React.PropsWithChildren<{ label?: string; className?: string }>> = ({
  label,
  className = '',
  children,
}) => (
  <section className={`py-20 border-b border-white/10 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {label && <SectionLabel label={label} />}
        {children}
      </div>
    </div>
  </section>
);

export const PremiumGrid: React.FC<React.PropsWithChildren<{ cols?: 2 | 3 | 4 }>> = ({
  cols = 3,
  children,
}) => {
  const colsClass = cols === 2 ? 'md:grid-cols-2' : cols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <div className={`grid ${colsClass} gap-px bg-white/10 border border-white/10`}>
      {children}
    </div>
  );
};

export const PremiumCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = '',
  children,
}) => (
  <article className={`bg-[#002113] p-8 flex flex-col hover:bg-white/[0.02] transition-colors ${className}`}>
    {children}
  </article>
);

export const PremiumIconBadge: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => (
  <div className="w-14 h-14 rounded-md border border-white/15 flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-white" strokeWidth={1.25} />
  </div>
);

export const PrimaryButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' | 'link'; to?: string }
> = ({ children, className = '', as = 'a', to, ...rest }) => {
  const cls = `inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors ${className}`;
  if (as === 'link' && to) {
    return (
      <Link to={to} className={cls}>
        {children}
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </Link>
    );
  }
  return (
    <a className={cls} {...rest}>
      {children}
      <ArrowRight className="w-4 h-4" strokeWidth={2} />
    </a>
  );
};

export const OutlineButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' | 'link'; to?: string }
> = ({ children, className = '', as = 'a', to, ...rest }) => {
  const cls = `inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors ${className}`;
  if (as === 'link' && to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
};

export const PremiumCTA: React.FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  primary?: { href?: string; to?: string; label: string };
  secondary?: { href?: string; to?: string; label: string };
}> = ({ title, description, primary, secondary }) => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">{title}</h2>
        <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primary &&
            (primary.to ? (
              <PrimaryButton as="link" to={primary.to}>
                {primary.label}
              </PrimaryButton>
            ) : (
              <PrimaryButton href={primary.href} target="_blank" rel="noopener noreferrer">
                {primary.label}
              </PrimaryButton>
            ))}
          {secondary &&
            (secondary.to ? (
              <OutlineButton as="link" to={secondary.to}>
                {secondary.label}
              </OutlineButton>
            ) : (
              <OutlineButton href={secondary.href} target="_blank" rel="noopener noreferrer">
                {secondary.label}
              </OutlineButton>
            ))}
        </div>
      </div>
    </div>
  </section>
);
