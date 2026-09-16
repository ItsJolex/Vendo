import React from 'react';
import { WebSolution, formatCurrency } from '../../types/solution';
import { useCart } from '../../context/CartContext';
import { X, Check, ArrowRight } from 'lucide-react';

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

  if (!isOpen || !solution) return null;

  const handleAddToCart = () => {
    addItem({
      id: solution.id,
      title: solution.name,
      variant: 'ESTÁNDAR',
      price: solution.price,
      image: solution.images.preview,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white border border-black p-6 text-left max-h-[90vh] overflow-y-auto shadow-none">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black mb-6">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-black">
              ESPECIFICACIONES // {solution.sku} — {solution.name}
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-black hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Imagen y Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="aspect-[3/4] bg-neutral-100 border border-neutral-300 overflow-hidden">
              <img
                src={solution.images.preview}
                alt={solution.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
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

                <div className="bg-neutral-100 p-3 border border-neutral-200 mb-4 text-[11px] font-mono text-neutral-700">
                  <strong className="block text-black">PERFIL IDEAL:</strong>
                  {solution.idealFor}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black font-mono text-black">
                    {formatCurrency(solution.price)}
                  </span>
                  <span className="text-xs text-neutral-400 line-through font-mono">
                    {formatCurrency(solution.originalPrice)}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-black text-white text-xs font-black uppercase tracking-widest border border-black hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>AGREGAR AL CARRITO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="pt-4 border-t border-black">
            <h4 className="text-xs font-black uppercase tracking-widest text-black mb-3">
              CARACTERÍSTICAS INCLUIDAS EN EL CÓDIGO:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 font-medium">
              {solution.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-2 border border-neutral-200 bg-neutral-50">
                  <Check className="w-3.5 h-3.5 text-black flex-shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
