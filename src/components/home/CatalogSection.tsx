import React, { useState } from 'react';
import { solutions, categories } from '../../data/solutions';
import { SolutionCard } from './SolutionCard';
import { WebSolution, CategoryId } from '../../types/solution';
import { Layers } from 'lucide-react';

interface CatalogSectionProps {
  onSelectSolution: (sol: WebSolution) => void;
  onQuickView: (sol: WebSolution) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectSolution,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');

  const filteredSolutions =
    selectedCategory === 'todos'
      ? solutions
      : solutions.filter((s) => s.category === selectedCategory);

  return (
    <section id="soluciones" className="py-12 sm:py-20 bg-[#FFFFFF] border-y border-[#E2E8F0] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              Catálogo de Soluciones Digitales
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Elige la infraestructura exacta para tu negocio.
            </h2>
            <p className="text-sm text-[#64748B] mt-2 max-w-xl">
              Entrega llave en mano con diseño a medida, arquitectura rápida y cero dolores de cabeza técnicos.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Mostrando <strong>{filteredSolutions.length}</strong> opciones disponibles
          </div>
        </div>

        {/* Selector de Categorías (Píldoras App-Like Horizontales con scroll suave) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const count =
              cat.id === 'todos'
                ? solutions.length
                : solutions.filter((s) => s.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-[#FAFAFA] text-[#64748B] border border-[#E2E8F0] hover:border-black hover:text-[#111111]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid de Soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onSelect={onSelectSolution}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Banner inferior de solución a medida */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAFAFA] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#111111]">
              ¿Tienes un requerimiento especial o una plataforma a medida?
            </h4>
            <p className="text-xs text-[#64748B] mt-1">
              Desarrollamos aplicaciones web completas, SaaS y paneles personalizados para empresas en crecimiento.
            </p>
          </div>
          <a
            href="https://wa.me/?text=Hola%20VÉNDO,%20necesito%20una%20solución%20web%20a%20medida%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#111111] hover:border-black transition-all"
          >
            Hablar con un Ingeniero
          </a>
        </div>

      </div>
    </section>
  );
};
