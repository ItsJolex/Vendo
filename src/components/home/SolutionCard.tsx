import React, { useState } from 'react';
import { WebSolution, formatCurrency } from '../../types/solution';
import { Check, Clock, Flame, ArrowRight, Star } from 'lucide-react';

interface SolutionCardProps {
  solution: WebSolution;
  onSelect: (solution: WebSolution) => void;
  onQuickView: (solution: WebSolution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onSelect,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-black/30 hover:shadow-card transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor Visual con Ratio Consistente 4:5 y Dual-Flip en Desktop */}
      <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden bg-[#FAFAFA]">
        <img
          src={isHovered ? solution.images.mobilePreview : solution.images.preview}
          alt={solution.name}
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay sutil inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges superiores flotantes */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex gap-1.5 flex-wrap">
            {solution.popular && (
              <span className="inline-flex items-center gap-1 bg-[#111111] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                Más Vendido
              </span>
            )}
            {solution.spotsLeft !== undefined && (
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-rose-100 shadow-sm">
                Solo {solution.spotsLeft} cupos
              </span>
            )}
          </div>

          <div className="bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            {solution.rating}
          </div>
        </div>

        {/* Etiqueta de Tiempo de Entrega flotante en esquina inferior */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            Entrega: {solution.deliveryDays}
          </span>
        </div>
      </div>

      {/* Contenido y Especificaciones */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Título y Tagline */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-[#111111] leading-tight mb-1 group-hover:text-[#2563EB] transition-colors">
              {solution.name}
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
              {solution.tagline}
            </p>
          </div>

          {/* Lista de características clave enfocadas en conversión */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
            {solution.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tags de stack técnico */}
          <div className="flex flex-wrap gap-1 mb-5">
            {solution.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium bg-[#FAFAFA] text-slate-500 px-2 py-0.5 rounded-md border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bloque de Precios y Call to Action */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-slate-400 line-through mr-2">
                {formatCurrency(solution.originalPrice)}
              </span>
              <span className="text-2xl font-extrabold text-[#111111] tracking-tight">
                {formatCurrency(solution.price)}
              </span>
              <span className="text-[10px] text-slate-500 font-medium ml-1">pago único</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Ahorras {Math.round(((solution.originalPrice - solution.price) / solution.originalPrice) * 100)}%
            </span>
          </div>

          {/* Botones de Acción Inmediata */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickView(solution)}
              className="h-10 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Detalles
            </button>
            <button
              onClick={() => onSelect(solution)}
              className="flex-1 h-10 rounded-xl bg-[#111111] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-sm"
            >
              <span>Elegir Solución</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
