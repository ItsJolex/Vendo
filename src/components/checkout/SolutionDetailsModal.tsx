import React, { useState } from 'react';
import { WebSolution, formatCurrency } from '../../types/solution';
import { useCart } from '../../context/CartContext';
import { X, Check, ArrowRight, Layers } from 'lucide-react';

interface SolutionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: WebSolution | null;
}

export const SolutionDetailsModal: React.FC<SolutionDetailsModalProps> = ({
  isOpen,
  onClose,
  solution,
}) => {
  const { addItem } = useCart();
  const [selectedPlan, setSelectedPlan] = useState<{ label: string; delta: number }>({
    label: 'BASE',
    delta: 0,
  });
  const [activeTab, setActiveTab] = useState<'features' | 'deliverables' | 'stack'>('features');

  if (!isOpen || !solution) return null;

  const planOptions = [
    { label: 'BASE', delta: 0, desc: 'Página web lista para vender + Hosting incluido' },
    { label: 'PRO (+MAPS)', delta: 20, desc: 'Optimización avanzada de Google Maps en tu ciudad' },
    { label: 'FULL (+QR)', delta: 35, desc: 'Google Maps + Código QR para mostrador + Hosting 1 año' },
  ];

  const currentPrice = solution.price + selectedPlan.delta;
  const currentOriginalPrice = solution.originalPrice + selectedPlan.delta;

  const handleAddToCart = () => {
    addItem({
      id: solution.id,
      title: solution.name,
      variant: selectedPlan.label,
      price: currentPrice,
      image: solution.images.preview,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-white border border-black p-6 text-left max-h-[92vh] overflow-y-auto shadow-none">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black mb-6">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-black">
              ESPECIFICACIONES // {solution.sku} — {solution.name}
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-black hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Imagen y Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="aspect-[3/4] bg-neutral-100 border border-neutral-300 overflow-hidden relative">
              <span className="absolute top-1 left-1.5 text-[10px] font-mono text-black/40 select-none z-10">+</span>
              <span className="absolute top-1 right-1.5 text-[10px] font-mono text-black/40 select-none z-10">+</span>
              <img
                src={solution.images.preview}
                alt={solution.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-0.5 inline-block">
                    ENTREGA: {solution.deliveryDays}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase border border-black px-2 py-0.5 inline-block text-neutral-800">
                    {solution.specMetric}
                  </span>
                </div>
                <h3 className="text-xl font-black font-display uppercase tracking-wider text-black mb-2">
                  {solution.name}
                </h3>
                <p className="text-xs text-neutral-600 mb-4 leading-relaxed font-medium">
                  {solution.tagline}
                </p>

                {/* Perfil Ideal */}
                <div className="bg-neutral-100 p-3 border border-neutral-200 mb-4 text-[11px] font-mono text-neutral-700">
                  <strong className="block text-black">PERFIL IDEAL:</strong>
                  {solution.idealFor}
                </div>

                {/* Selector Interactivo de Nivel de Sprint */}
                <div className="mb-4">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-black mb-1.5">
                    SELECCIONAR NIVEL DE DESARROLLO:
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    {planOptions.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setSelectedPlan({ label: opt.label, delta: opt.delta })}
                        className={`p-1.5 text-[9px] font-mono font-bold uppercase border transition-colors flex flex-col items-center text-center ${
                          selectedPlan.label === opt.label
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-neutral-300 hover:border-black'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className="text-[8px] opacity-75">+{formatCurrency(opt.delta)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bloque de Precio y Acción */}
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black font-mono text-black">
                    {formatCurrency(currentPrice)}
                  </span>
                  <span className="text-xs text-neutral-400 line-through font-mono">
                    {formatCurrency(currentOriginalPrice)}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-red-600 ml-auto">
                    NIVEL [{selectedPlan.label}]
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-black text-white text-xs font-black uppercase tracking-widest border border-black hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 font-mono"
                >
                  <span>AGREGAR A LA ORDEN • {formatCurrency(currentPrice)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Pestañas Técnicas de Detalle */}
          <div className="pt-4 border-t border-black">
            <div className="flex border-b border-black mb-4 gap-2">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-2 text-xs font-black uppercase tracking-wider font-mono border-b-2 -mb-px transition-colors ${
                  activeTab === 'features'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                [ CARACTERÍSTICAS DE CÓDIGO ({solution.features.length}) ]
              </button>
              <button
                onClick={() => setActiveTab('deliverables')}
                className={`pb-2 text-xs font-black uppercase tracking-wider font-mono border-b-2 -mb-px transition-colors ${
                  activeTab === 'deliverables'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                [ ENTREGABLES TÉCNICOS ({solution.deliverables.length}) ]
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`pb-2 text-xs font-black uppercase tracking-wider font-mono border-b-2 -mb-px transition-colors ${
                  activeTab === 'stack'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                [ STACK & HOSTING ]
              </button>
            </div>

            {/* Contenido Pestaña: Features */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 font-medium">
                {solution.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 border border-neutral-200 bg-neutral-50">
                    <Check className="w-3.5 h-3.5 text-black flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Contenido Pestaña: Deliverables */}
            {activeTab === 'deliverables' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 font-medium">
                {solution.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 border border-neutral-200 bg-neutral-50">
                    <Layers className="w-3.5 h-3.5 text-black flex-shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Contenido Pestaña: Stack Tecnológico */}
            {activeTab === 'stack' && (
              <div className="p-4 border border-neutral-200 bg-neutral-50 space-y-3">
                <span className="block text-[10px] font-mono font-bold uppercase text-neutral-500">
                  TECNOLOGÍAS DE PRODUCCIÓN INTEGRADAS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 border border-black bg-white text-xs font-mono font-bold uppercase text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-neutral-600 font-medium pt-2">
                  Arquitectura Serverless Edge con 99.9% uptime SLA y certificado de seguridad SSL Wildcard incluido.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
