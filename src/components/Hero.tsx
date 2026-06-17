import { useMemo } from 'react';

const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#immersion',     label: 'Immersion' },
  { href: '#comprehension', label: 'Compréhension' },
  { href: '#repetition',    label: 'Répétition' },
  { href: '#accumulation',  label: 'Accumulation' },
  { href: '#parcours',      label: 'Mon Parcours' },
];

function Planet() {
  return (
    <div className="planet-wrapper">
      <div className="planet" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030b18] overflow-hidden flex flex-col">

      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr_220px] lg:items-center px-6 lg:px-16">

        {/* Planète — milieu sur mobile (order-2), colonne gauche sur desktop */}
        <div className="flex justify-center lg:justify-end items-center py-10 lg:py-0 lg:pr-12 order-2 lg:order-1">
          <Planet />
        </div>

        {/* Citation + tagline — en haut sur mobile (order-1), centre sur desktop */}
        <div className="flex flex-col justify-center order-1 lg:order-2 pt-16 lg:pt-0">
          <blockquote className="mb-8">
            <p className="font-display text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.4rem] text-white leading-snug italic">
              "Les frontières de mon langage signifient les frontières de mon monde."
            </p>
            <footer className="mt-5 text-accent text-xs tracking-[0.2em] uppercase">
              — Wittgenstein
            </footer>
          </blockquote>
          <p className="text-slate-400 text-lg leading-relaxed">
            Une vision{' '}
            <span className="text-accent font-medium">simple</span>{' '}
            de l'apprentissage des langues.
          </p>
        </div>

        {/* Navigation — bas sur mobile (order-3), colonne droite sur desktop */}
        <nav
          aria-label="Sections"
          className="order-3 lg:order-3 flex flex-row flex-wrap gap-x-6 gap-y-3 justify-center lg:flex-col lg:justify-center lg:gap-5 py-10 lg:py-0 lg:pl-10 lg:border-l lg:border-white/10"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-400 hover:text-accent transition-colors duration-200 text-sm lg:text-base tracking-wide whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Indicateur de scroll */}
      <div className="relative z-10 flex justify-center pb-8 text-white/20 text-sm animate-bounce" aria-hidden="true">
        ↓
      </div>
    </section>
  );
}
