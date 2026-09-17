import React, { useState } from 'react';
import { WebSolution, formatCurrency } from '../../types/solution';
import { useCart } from '../../context/CartContext';
import { Plus, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  solution: WebSolution;
  onQuickView: (solution: WebSolution) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ solution, onQuickView }) => {
  const { addItem } = useCart();
  const [mobileSelectOpen, setMobileSelectOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const variants = [
    { label: 'BASE', priceDelta: 0 },
    { label: 'PRO (+MAPS)', priceDelta: 20 },
    { label: 'FULL (+QR)', priceDelta: 35 },
  ];

  const handleAdd = (variantName: string, delta: number) => {
    addItem({
      id: solution.id,
      title: solution.name,
      variant: variantName,
      price: solution.price + delta,
      image: solution.images.preview,
    });
    setMobileSelectOpen(false);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="group relative flex flex-col bg-white border-2 border-emerald-pine shadow-neo-pine hover:shadow-neo-pine-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-left">
      
      {/* Contenedor de Imagen 3:4 con Dual Flip */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-canvas-ice border-b-2 border-emerald-pine">
        
        {/* Esquinas con cruces industriales blueprint (+) */}
        <span className="absolute top-1 left-1.5 text-[10px] font-mono text-emerald-pine/40 select-none z-10 pointer-events-none">+</span>
        <span className="absolute top-1 right-1.5 text-[10px] font-mono text-emerald-pine/40 select-none z-10 pointer-events-none">+</span>

        {/* Badges de estilo Neo-Brutalista */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1 items-start">
          {solution.popular && (
            <span className="bg-emerald-deep text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 border-2 border-emerald-pine">
              [ BEST SELLER ]
            </span>
          )}
          {solution.spotsLeft !== undefined && (
            <span className="badge-silver px-2 py-0.5 text-[9px] font-bold">
              [ {solution.spotsLeft} CUPOS RESTANTES ]
            </span>
          )}
        </div>

        {/* Indicador de Entrega en esquina superior derecha */}
        <div className="absolute top-2 right-2 z-20 bg-white border-2 border-emerald-pine px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-pine">
          {solution.deliveryDays}
        </div>

        {/* Imagen Frontal */}
        <img
          src={solution.images.preview}
          alt={solution.name}
          className="h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
          loading="lazy"
        />

        {/* Imagen Reverso (Flip en Hover) */}
        <img
          src={solution.images.mobilePreview}
          alt={`${solution.name} detalle`}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Quick Variant Selector Overlay (Desktop: Emerge en Hover) */}
        <div className="absolute inset-x-0 bottom-0 z-20 hidden lg:flex translate-y-full items-center justify-center gap-1 bg-white/95 p-2.5 backdrop-blur-sm border-t-2 border-emerald-pine transition-transform duration-200 ease-out group-hover:translate-y-0">
          <span className="text-[10px] font-black uppercase tracking-wider text-silver-metallic mr-1 font-mono">
            NIVEL:
          </span>
          {variants.map((v) => (
            <button
              key={v.label}
              onClick={(e) => {
                e.stopPropagation();
                handleAdd(v.label, v.priceDelta);
              }}
              className="h-7 px-2 border-2 border-emerald-pine bg-white text-[10px] font-bold uppercase tracking-wider text-emerald-pine hover:bg-emerald-pine hover:text-white transition-colors"
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Botón Rápido para Móviles (lg:hidden) */}
        <div className="lg:hidden absolute bottom-2 right-2 z-20">
          <button
            onClick={() => setMobileSelectOpen(!mobileSelectOpen)}
            className="w-9 h-9 bg-emerald-pine text-white flex items-center justify-center border-2 border-emerald-pine active:scale-95 text-xs font-bold shadow-neo-pine"
            aria-label="Seleccionar plan"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Desplegable móvil de variantes */}
        {mobileSelectOpen && (
          <div className="lg:hidden absolute inset-x-0 bottom-0 z-30 bg-white border-t-2 border-emerald-pine p-2 flex flex-col gap-1.5 animate-in slide-in-from-bottom-2 shadow-neo-pine">
            <span className="text-[10px] font-black uppercase tracking-widest text-center text-silver-metallic font-mono">
              SELECCIONA NIVEL DE SPRINT:
            </span>
            <div className="grid grid-cols-3 gap-1">
              {variants.map((v) => (
                <button
                  key={v.label}
                  onClick={() => handleAdd(v.label, v.priceDelta)}
                  className="py-2 px-1 border-2 border-emerald-pine text-[9px] font-black uppercase bg-white text-emerald-pine active:bg-emerald-pine active:text-white flex flex-col items-center"
                >
                  <span>{v.label}</span>
                  <span className="font-mono text-silver-metallic">
                    {formatCurrency(solution.price + v.priceDelta)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Información de la Solución */}
      <div className="p-4 flex flex-col flex-1 justify-between text-left">
        <div>
          {/* Micro-header con SKU y Métrica */}
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-silver-steel text-[9px] font-mono text-silver-metallic">
            <span className="font-bold text-emerald-pine">{solution.sku}</span>
            <span className="text-slate-600 font-bold">{solution.specMetric}</span>
          </div>

          {/* Título y Tagline */}
          <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-pine line-clamp-1 mb-1">
            {solution.name}
          </h3>
          <p className="text-[11px] text-slate-600 line-clamp-2 leading-tight mb-3">
            {solution.tagline}
          </p>

          {/* Características en viñetas rectangulares */}
          <div className="space-y-1 mb-4 pt-2 border-t border-silver-steel text-[11px] text-slate-700 font-medium">
            {solution.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 line-clamp-1">
                <span className="w-1 h-1 bg-emerald-pine flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque Inferior: Precios y Acciones */}
        <div className="pt-3 border-t-2 border-emerald-pine">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-black tabular-nums text-emerald-pine font-mono">
                {formatCurrency(solution.price)}
              </span>
              <span className="text-xs text-silver-metallic line-through tabular-nums font-mono">
                {formatCurrency(solution.originalPrice)}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-vibrant">
              AHORRO {Math.round(((solution.originalPrice - solution.price) / solution.originalPrice) * 100)}%
            </span>
          </div>

          {/* Botones de Acción Inmediata (0px) */}
          <div className="grid grid-cols-4 gap-1.5">
            <button
              onClick={() => onQuickView(solution)}
              className="col-span-1 h-9 border-2 border-emerald-pine bg-white text-emerald-pine text-[10px] font-black uppercase hover:bg-canvas-ice flex items-center justify-center"
              title="Ficha técnica completa"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleAdd('BASE', 0)}
              className={`col-span-3 h-9 text-[10px] font-black uppercase tracking-wider border-2 border-emerald-pine transition-colors flex items-center justify-center gap-1.5 ${
                justAdded
                  ? 'bg-emerald-deep text-white border-emerald-deep shadow-neo-emerald'
                  : 'btn-neo-emerald'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>[ AGREGADO ]</span>
                </>
              ) : (
                <span>[ AGREGAR • {formatCurrency(solution.price)} ]</span>
              )}
            </button>
          </div>

        </div>

      </div>

    </article>
  );
};