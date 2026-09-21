import React from 'react';
import { CategoryId } from '../../types/solution';
import { categories, solutions } from '../../data/solutions';

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div
      id="catalogo"
      className="sticky top-[60px] z-30 bg-canvas-card border-y-2 border-emerald-pine px-4 sm:px-6 lg:px-8 py-3 scroll-mt-[60px]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Pestañas de Categoría con Scroll Horizontal Táctil */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          {categories.map((cat) => {
            const count =
              cat.id === 'todos'
                ? solutions.length
                : solutions.filter((s) => s.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-black uppercase tracking-wider transition-all border-2 border-emerald-pine ${
                  isActive
                    ? 'bg-terracotta text-white shadow-neo-pine'
                    : 'bg-white text-emerald-pine hover:bg-canvas-ice'
                }`}
              >
                [ {cat.label} ({count}) ]
              </button>
            );
          })}
        </div>

        {/* Indicador de inventario a la derecha */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono uppercase text-silver-metallic flex-shrink-0">
          <span className="w-1.5 h-1.5 bg-emerald-vibrant inline-block" />
          <span>CATÁLOGO TRANSACCIONAL 2026</span>
        </div>

      </div>
    </div>
  );
};