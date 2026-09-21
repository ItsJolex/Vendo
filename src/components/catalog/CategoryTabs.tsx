import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -240 : 240;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div
      id="catalogo"
      className="sticky top-[60px] z-30 bg-canvas-card border-y-2 border-emerald-pine px-2 sm:px-6 lg:px-8 py-2.5 scroll-mt-[60px]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Contenedor con Flechas Laterales y Scroll Horizontal */}
        <div className="relative flex items-center w-full min-w-0">
          
          {/* Flecha Izquierda */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="flex-shrink-0 mr-1.5 w-8 h-8 border-2 border-emerald-pine bg-white hover:bg-canvas-ice text-emerald-pine flex items-center justify-center shadow-neo-pine transition-all z-10"
              aria-label="Ver categorías anteriores"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          {/* Carrusel de Pestañas */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full py-1"
          >
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
                  className={`flex-shrink-0 px-3.5 sm:px-4 py-2 text-xs font-black uppercase tracking-wider transition-all border-2 border-emerald-pine ${
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

          {/* Flecha Derecha */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="flex-shrink-0 ml-1.5 w-8 h-8 border-2 border-emerald-pine bg-white hover:bg-canvas-ice text-emerald-pine flex items-center justify-center shadow-neo-pine transition-all z-10"
              aria-label="Ver más categorías"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

        </div>

        {/* Indicador de inventario a la derecha (visible solo en pantallas extra anchas para no comprimir filtros) */}
        <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono uppercase text-slate-600 flex-shrink-0">
          <span className="w-1.5 h-1.5 bg-emerald-vibrant inline-block" />
          <span>CATÁLOGO TRANSACCIONAL 2026</span>
        </div>

      </div>
    </div>
  );
};