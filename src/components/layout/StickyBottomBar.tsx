import React from 'react';
import { ArrowDown, MessageSquare, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../types/solution';

interface StickyBottomBarProps {
  onOpenConsult: () => void;
  onExploreCatalog: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenConsult,
  onExploreCatalog,
}) => {
  const { itemCount, totalAmount, openCart } = useCart();

  return (
    <aside aria-label="Acciones móviles" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-emerald-pine p-2.5 shadow-neo-pine-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {itemCount > 0 ? (
          <>
            {/* Estado con Carrito Activo: Conversión directa en 1 toque */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono font-bold uppercase text-emerald-vibrant">
                [ ORDEN EN CURSO ]
              </span>
              <span className="text-xs font-black font-mono text-emerald-pine">
                {formatCurrency(totalAmount)} ({itemCount} {itemCount === 1 ? 'ítem' : 'ítems'})
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenConsult}
                className="btn-neo-silver h-9 px-2.5 text-xs font-bold uppercase flex items-center justify-center"
                aria-label="Iniciar Brief"
              >
                <MessageSquare className="w-4 h-4 text-emerald-pine" />
              </button>

              <button
                onClick={openCart}
                className="btn-neo-emerald h-9 px-4 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 font-mono"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>VER CARRITO [{itemCount}]</span>
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Estado inicial sin items */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono font-bold uppercase text-emerald-vibrant">
                [ 1ER MES HOSTING INCLUIDO ]
              </span>
              <span className="text-xs font-black font-mono text-emerald-pine">
                DESDE $49 USD
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenConsult}
                className="btn-neo-silver h-9 px-3 text-xs font-bold uppercase flex items-center justify-center"
                aria-label="Asesoría WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-pine" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="btn-neo-emerald h-9 px-4 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>CATÁLOGO</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};