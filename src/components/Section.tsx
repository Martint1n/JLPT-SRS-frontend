import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SectionProps {
  id: string;
  number: string;
  title: string;
  tagline: string;
  content: string;
  more: string;
  bg: string;
}

export default function Section({ id, number, title, tagline, content, more, bg }: SectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id={id}
      className="min-h-screen flex items-center"
      style={{ backgroundColor: bg }}
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-20 lg:py-32">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-accent/50 font-mono text-xs tracking-widest">{number}</span>
          <div className="h-px w-12 bg-white/8" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
          {title}
        </h2>

        <p className="text-accent text-base md:text-lg mb-8 tracking-wide">
          {tagline}
        </p>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          {content}
        </p>

        {more && (
          <div className="mt-10">
            <button
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors duration-200"
            >
              <span className="tracking-wide">
                {expanded ? 'Réduire' : 'En savoir plus'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? 'max-h-150 opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-l-2 border-accent/25 pl-6 text-slate-400 leading-relaxed text-base">
                {more}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
