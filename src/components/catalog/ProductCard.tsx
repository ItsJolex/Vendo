import React from 'react';
import { WebSolution, getServiceConsultationUrl } from '../../types/solution';
import { ServiceIllustration } from './ServiceIllustration';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface ProductCardProps {
  solution: WebSolution;
  onSelectSolution: (solution: WebSolution) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ solution, onSelectSolution }) => {
  return (
    <article className="group relative flex flex-col bg-white border-2 border-emerald-pine shadow-neo-pine hover:shadow-neo-pine-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-left">
      
      {/* Contenedor Superior: Badges y SLA */}
      <div className="flex items-center justify-between p-2 bg-canvas-ice border-b-2 border-emerald-pine text-[9px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 inline-block ${solution.popular ? 'bg-coral' : 'bg-emerald-vibrant'}`} />
          <span className="font-bold text-emerald-pine">{solution.sku}</span>
          {solution.popular && (
            <span className="badge-coral px-1.5 py-0.5 text-[8px] ml-1">
              [ POPULAR ]
            </span>
          )}
        </div>
        <span className="bg-white border border-emerald-pine px-1.5 py-0.5 font-bold text-emerald-pine">
          [ SLA: {solution.deliveryDays} ]
        </span>
      </div>

      {/* Ilustración Técnica Vectorial en Verde Esmeralda y Plata */}
      <div 
        onClick={() => onSelectSolution(solution)} 
        className="cursor-pointer border-b-2 border-emerald-pine group-hover:opacity-95 transition-opacity"
      >
        <ServiceIllustration type={solution.illustrationType} size="card" />
      </div>

      {/* Cuerpo Informativo */}
      <div className="p-4 flex flex-col flex-1 justify-between text-left">
        <div>
          {/* Métrica de Especificación */}
          <div className="mb-2 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
            {solution.specMetric}
          </div>

          {/* Título de la Solución */}
          <h3 
            onClick={() => onSelectSolution(solution)}
            className="text-base sm:text-lg font-black uppercase tracking-wider text-emerald-pine hover:text-emerald-vibrant cursor-pointer transition-colors mb-2"
          >
            {solution.name}
          </h3>

          {/* Tagline / Breve resumen */}
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {solution.tagline}
          </p>

          {/* 3 Viñetas de lo que incluye */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-silver-steel text-xs text-slate-700">
            {solution.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-pine flex-shrink-0 mt-1.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque Inferior: Cotización & Botones de Acción */}
        <div className="pt-3 border-t-2 border-emerald-pine">
          {/* Estado de Cotización (Sin precios fijos) */}
          <div className="flex items-center justify-between mb-3 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-pine block">
                [ COTIZACIÓN A MEDIDA ]
              </span>
              <span className="text-[10px] text-slate-500">
                Presupuesto según tu objetivo
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold bg-silver-chrome px-1.5 py-0.5 border border-silver-steel text-emerald-pine">
              48-72H
            </span>
          </div>

          {/* Botones de Acción */}
          <div className="grid grid-cols-5 gap-1.5">
            {/* Botón Principal: Ver Subpágina con Alcance Completo */}
            <button
              onClick={() => onSelectSolution(solution)}
              className="col-span-4 h-10 btn-neo-emerald text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <span>[ VER DETALLES Y ALCANCE ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Botón Secundario: Asesoría Directa a WhatsApp */}
            <a
              href={getServiceConsultationUrl(solution.name, solution.sku)}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 h-10 border-2 border-emerald-pine bg-white hover:bg-canvas-ice text-emerald-pine flex items-center justify-center transition-colors shadow-neo-pine"
              title="Solicitar asesoría rápida por WhatsApp"
              aria-label="Asesoría por WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-pine" />
            </a>
          </div>

        </div>

      </div>

    </article>
  );
};