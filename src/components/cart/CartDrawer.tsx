import React from 'react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../types/solution';
import { globalAddons } from '../../data/solutions';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    totalAmount,
    addItem,
  } = useCart();

  if (!isOpen) return null;

  const freeThreshold = 500;
  const progressPercent = Math.min(100, Math.round((totalAmount / freeThreshold) * 100));
  const remaining = Math.max(0, freeThreshold - totalAmount);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (it) =>
          `• ${it.quantity}x *${it.title}* [${it.variant}] — ${formatCurrency(
            it.price * it.quantity
          )}`
      )
      .join('\n');

    const message = `¡Hola VÉNDO! 🚀\nQuiero confirmar el pedido de mi orden web:\n\n${itemsSummary}\n\n*TOTAL A PAGAR:* ${formatCurrency(
      totalAmount
    )}\n\n¿Cuáles son los pasos para comenzar con el desarrollo?`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer deslizante desde la derecha */}
      <aside className="fixed inset-y-0 right-0 max-w-[420px] w-full bg-white border-l border-black z-10 flex flex-col justify-between shadow-none animate-in slide-in-from-right duration-200">
        
        {/* Cabecera del Carrito */}
        <div className="p-4 border-b border-black flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <h2 className="text-xs font-black uppercase tracking-widest text-black">
              CARRITO [ {itemCount} ]
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-black hover:text-white transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Beneficio Gratuito (Threshold) */}
        <div className="bg-neutral-100 p-3 border-b border-neutral-300">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-black mb-1.5 font-mono">
            {remaining > 0 ? (
              <span>TE FALTAN {formatCurrency(remaining)} PARA DOMINIO .COM GRATIS</span>
            ) : (
              <span className="text-emerald-700">¡DOMINIO Y ASESORÍA 100% BONIFICADOS!</span>
            )}
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-neutral-300 overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Lista de Items */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-neutral-200">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-400">
              <ShoppingBag className="w-10 h-10 stroke-[1] mb-3 text-neutral-300" />
              <p className="text-xs font-extrabold uppercase tracking-widest text-black mb-1">
                TU CARRITO ESTÁ VACÍO
              </p>
              <p className="text-[11px] text-neutral-500 mb-4">
                Selecciona una solución web del catálogo para comenzar.
              </p>
              <button
                onClick={closeCart}
                className="px-4 py-2 border border-black text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white"
              >
                [ VER CATÁLOGO ]
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="py-3 flex gap-3">
                {/* Miniatura */}
                <div className="w-16 h-20 bg-neutral-100 border border-neutral-300 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Detalle */}
                <div className="flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-black uppercase tracking-wider text-black line-clamp-1">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-neutral-400 hover:text-red-600 p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="inline-block text-[9px] font-mono font-bold uppercase bg-neutral-100 border border-neutral-300 px-1.5 py-0.5 mt-0.5">
                      PLAN: {item.variant}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-black text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-neutral-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-neutral-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-black font-mono">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Cross-Sell en Drawer (Completa tu Pack) */}
          {items.length > 0 && (
            <div className="pt-4 mt-2">
              <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">
                POTENCIA TU INFRAESTRUCTURA // ADD-ONS
              </span>
              <div className="space-y-1.5">
                {globalAddons.slice(0, 2).map((addon) => (
                  <div
                    key={addon.id}
                    className="p-2 border border-neutral-300 bg-neutral-50 flex items-center justify-between text-left"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase text-black line-clamp-1">
                        {addon.name}
                      </p>
                      <span className="text-[10px] font-mono text-neutral-500">
                        +{formatCurrency(addon.price)}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        addItem({
                          id: addon.id,
                          title: addon.name,
                          variant: 'ADD-ON',
                          price: addon.price,
                          image:
                            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
                        })
                      }
                      className="px-2 py-1 bg-white border border-black text-[9px] font-black uppercase hover:bg-black hover:text-white"
                    >
                      [ + AGREGAR ]
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bloque Inferior de Pago */}
        <div className="p-4 border-t border-black bg-white space-y-3">
          <div className="flex items-baseline justify-between text-xs font-black uppercase tracking-wider font-mono">
            <span>SUBTOTAL ORDEN:</span>
            <span className="text-base">{formatCurrency(totalAmount)}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-neutral-600 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>PAGO SEGURO // PROTOCOLO DE ENTREGA 72H</span>
          </div>

          <button
            onClick={handleCheckoutWhatsApp}
            disabled={items.length === 0}
            className={`w-full py-3.5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-black transition-colors ${
              items.length > 0
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-neutral-200 text-neutral-400 border-neutral-300 cursor-not-allowed'
            }`}
          >
            <span>PEDIR VÍA WHATSAPP // 1-CLIC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </aside>
    </div>
  );
};
