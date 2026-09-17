import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { formatCurrency, getWhatsAppUrl } from '../../types/solution';
import { globalAddons } from '../../data/solutions';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Tag, Check } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    totalAmount,
    addItem,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const freeThreshold = 500;
  const progressPercent = Math.min(100, Math.round((totalAmount / freeThreshold) * 100));
  const remaining = Math.max(0, freeThreshold - totalAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (cleanCode === 'SPRINT50' || cleanCode === 'VENDO50') {
      const discount = Math.min(50, totalAmount);
      setDiscountAmount(discount);
      setCouponApplied(cleanCode);
      setCouponError('');
    } else if (cleanCode === 'VENDO10') {
      const discount = Math.round(totalAmount * 0.1);
      setDiscountAmount(discount);
      setCouponApplied(cleanCode);
      setCouponError('');
    } else {
      setCouponError('CÓDIGO NO VÁLIDO');
    }
  };

  const handleRemoveCoupon = () => {
    setDiscountAmount(0);
    setCouponApplied('');
    setCouponCode('');
    setCouponError('');
  };

  const finalAmount = Math.max(0, totalAmount - discountAmount);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (it) =>
          `▪ *${it.quantity}x ${it.title}* [${it.variant}] — ${formatCurrency(
            it.price * it.quantity
          )}`
      )
      .join('\n');

    const couponLine = couponApplied ? `\n*CUPÓN APLICADO:* ${couponApplied} (-${formatCurrency(discountAmount)})\n` : '';

    const message = `¡Hola VÉNDO! 🚀\nQuiero contratar el siguiente plan para mi negocio:\n\n${itemsSummary}\n${couponLine}\n*TOTAL:* ${formatCurrency(
      finalAmount
    )}\n\n¿Cuáles son los pasos para comenzar con el diseño y la entrega en 72h?`;

    window.open(getWhatsAppUrl(message), '_blank');
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
            <h2 className="text-xs font-black uppercase tracking-widest text-black font-mono">
              ORDEN ACTIVA [ {itemCount} ]
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[10px] font-mono uppercase text-neutral-400 hover:text-red-600 px-2 py-1 border border-neutral-300 hover:border-red-600"
                title="Vaciar carrito"
              >
                [ VACIAR ]
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-1 hover:bg-black hover:text-white transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Barra de Beneficio Gratuito Segmentada (Estilo Display Digital) */}
        <div className="bg-neutral-100 p-3 border-b border-black">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-black mb-1.5 font-mono">
            {remaining > 0 ? (
              <span>FALTAN {formatCurrency(remaining)} PARA DOMINIO .COM + SSL ANUAL GRATIS</span>
            ) : (
              <span className="text-emerald-700 font-bold">✓ DOMINIO .COM + SSL 100% BONIFICADOS</span>
            )}
            <span>[{progressPercent}%]</span>
          </div>
          <div className="grid grid-cols-10 gap-1 h-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-full border border-black ${
                  (i + 1) * 10 <= progressPercent ? 'bg-black' : 'bg-white'
                }`}
              />
            ))}
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
                        title="Eliminar de la orden"
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
                        title="Reducir"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-neutral-100"
                        title="Aumentar"
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

          {/* Módulo de Cupón de Descuento Brutalista */}
          {items.length > 0 && (
            <div className="pt-4 pb-2">
              <div className="border border-black p-2.5 bg-neutral-50 text-left">
                <div className="flex items-center gap-1.5 mb-2">
                  <Tag className="w-3 h-3 text-black" />
                  <span className="text-[10px] font-mono font-black uppercase text-black">
                    CÓDIGO PROMOCIONAL // SPRINT
                  </span>
                </div>
                {couponApplied ? (
                  <div className="flex items-center justify-between bg-white border border-emerald-600 p-1.5 text-[10px] font-mono">
                    <div className="flex items-center gap-1 text-emerald-700 font-bold">
                      <Check className="w-3 h-3" />
                      <span>{couponApplied} (-{formatCurrency(discountAmount)})</span>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-neutral-400 hover:text-red-600 uppercase font-bold"
                    >
                      [ QUITAR ]
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-1">
                    <input
                      type="text"
                      placeholder="EJ. SPRINT50"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 h-8 px-2 border border-black text-xs font-mono uppercase bg-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="h-8 px-3 bg-black text-white text-[10px] font-mono font-bold uppercase hover:bg-neutral-800"
                    >
                      APLICAR
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[9px] font-mono text-red-600 mt-1 uppercase font-bold">
                    {couponError}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Cross-Sell en Drawer (Completa tu Pack) */}
          {items.length > 0 && (
            <div className="pt-3">
              <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2 font-mono">
                POTENCIA TU INFRAESTRUCTURA // ADD-ONS
              </span>
              <div className="space-y-1.5">
                {globalAddons.map((addon) => {
                  const isAlreadyAdded = items.some(
                    (it) => it.id === addon.id && it.variant === 'ADD-ON'
                  );

                  return (
                    <div
                      key={addon.id}
                      className={`p-2 border ${
                        isAlreadyAdded
                          ? 'border-emerald-700 bg-emerald-50/50'
                          : 'border-neutral-300 bg-neutral-50'
                      } flex items-center justify-between text-left`}
                    >
                      <div className="pr-2">
                        <p className="text-[10px] font-bold uppercase text-black line-clamp-1">
                          {addon.name}
                        </p>
                        <span className="text-[10px] font-mono text-neutral-500">
                          +{formatCurrency(addon.price)}
                        </span>
                      </div>
                      {addon.comingSoon ? (
                        <span className="px-2.5 py-1 border border-neutral-400 text-neutral-500 text-[9px] font-mono font-black uppercase bg-neutral-100 flex-shrink-0 select-none">
                          [ PRÓXIMAMENTE ]
                        </span>
                      ) : isAlreadyAdded ? (
                        <span className="px-2 py-1 border border-emerald-700 text-emerald-800 text-[9px] font-mono font-black uppercase bg-white flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" />
                          <span>AGREGADO</span>
                        </span>
                      ) : (
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
                          className="px-2 py-1 bg-white border border-black text-[9px] font-black uppercase hover:bg-black hover:text-white flex-shrink-0"
                        >
                          [ + AGREGAR ]
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bloque Inferior de Liquidación y Pago */}
        <div className="p-4 border-t border-black bg-white space-y-2.5">
          <div className="space-y-1 text-[11px] font-mono text-neutral-600 border-b border-neutral-200 pb-2">
            <div className="flex justify-between">
              <span>SUBTOTAL ITEMS:</span>
              <span className="text-black font-bold">{formatCurrency(totalAmount)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-red-600 font-bold">
                <span>DESCUENTO ({couponApplied}):</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-neutral-500">
              <span>DESPLIEGUE EN SERVIDOR EDGE:</span>
              <span className="text-emerald-700 font-bold">GRATIS ($0)</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between text-xs font-black uppercase tracking-wider font-mono">
            <span>TOTAL A PAGAR:</span>
            <span className="text-lg font-black">{formatCurrency(finalAmount)}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-neutral-600 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>PAGO SEGURO // SPRINT GARANTIZADO 72H</span>
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
