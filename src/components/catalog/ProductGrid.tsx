import React from 'react';
import { solutions } from '../../data/solutions';
import { ProductCard } from './ProductCard';
import { WebSolution, CategoryId } from '../../types/solution';

interface ProductGridProps {
  category: CategoryId;
  onSelectSolution: (sol: WebSolution) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category, onSelectSolution }) => {
  const filtered =
    category === 'todos'
      ? solutions
      : solutions.filter((s) => s.category === category);

  return (
    <section id="catalogo" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Barra Técnica Superior */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b-2 border-emerald-pine gap-2 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-emerald-vibrant inline-block animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-emerald-pine font-mono">
            CATÁLOGO DE SOLUCIONES // {category.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
          <span className="font-bold text-emerald-pine">SLA GARANTIZADO: 48 A 72 HORAS</span>
          <span>•</span>
          <span>{filtered.length} SERVICIOS DISPONIBLES</span>
        </div>
      </div>

      {/* Grilla de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((sol) => (
          <ProductCard
            key={sol.id}
            solution={sol}
            onSelectSolution={onSelectSolution}
          />
        ))}
      </div>
    </section>
  );
};