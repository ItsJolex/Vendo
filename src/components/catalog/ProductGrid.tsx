import React from 'react';
import { solutions } from '../../data/solutions';
import { ProductCard } from './ProductCard';
import { WebSolution, CategoryId } from '../../types/solution';

interface ProductGridProps {
  category: CategoryId;
  onQuickView: (sol: WebSolution) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category, onQuickView }) => {
  const filtered =
    category === 'todos'
      ? solutions
      : solutions.filter((s) => s.category === category);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Información de la colección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-black gap-2 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-black font-mono">
            SERVICIOS & PAQUETES ACTIVOS // {category.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
          <span>SLA: 48-72H</span>
          <span>•</span>
          <span>MOSTRANDO {filtered.length} DE {solutions.length} UNIDADES</span>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((sol) => (
          <ProductCard
            key={sol.id}
            solution={sol}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};
