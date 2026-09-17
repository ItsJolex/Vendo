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
        className="fixed inset-0 bg-emerald-pine/60 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer deslizante desde la derecha */}
      <aside className="fixed inset-y-0 right-0 max-w-[420px] w-full bg-white border-l-2 border-emerald-pine z-10 flex flex-col justify-between shadow-neo-pine-lg animate-in slide-in-from-right duration-200">
        
        {/* Cabecera del Carrito */}
        <div className="p-4 border-b-2 border-emerald-pine flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald-pine" />
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-pine font-mono">
              ORDEN ACTIVA [ {itemCount} ]
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[10px] font-mono uppercase text-silver-metallic hover:text-red-600 px-2 py-1 border-2 border-silver-steel hover:border-red-600"
                title="Vaciar carrito"
              >
                [ VACIAR ]
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-1 hover:bg-emerald-pine hover:text-white transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5 text-emerald-pine" />
            </button>
          </div>
        </div>

        {/* Barra de Beneficio Gratuito Segmentada (Estilo Display Digital) */}
        <div className="bg-canvas-ice p-3 border-b-2 border-emerald-pine">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-emerald-pine mb-1.5 font-mono">
            {remaining > 0 ? (
              <span>FALTAN {formatCurrency(remaining)} PARA DOMINIO .COM + SSL ANUAL GRATIS</span>
            ) : (
              <span className="text-emerald-vibrant font-bold">✓ DOMINIO .COM + SSL 100% BONIFICADOS</span>
            )}
            <span>[{progressPercent}%]</span>
          </div>
          <div className="grid grid-cols-10 gap-1 h-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-full border-2 border-emerald-pine ${
                  (i + 1) * 10 <= progressPercent ? 'bg-emerald-deep' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lista de Items */}
        <div className="flex-1 overflow-y-auto p-4 divide-y-2 divide-silver-steel">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-silver-metallic">
              <ShoppingBag className="w-10 h-10 stroke-[1] mb-3 text-silver-steel" />
              <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-pine mb-1">
                TU CARRITO ESTÁ VACÍO
              </p>
              <p className="text-[11px] text-slate-500 mb-4">
                Selecciona una solución web del catálogo para comenzar.
              </p>
              <button
                onClick={closeCart}
                className="px-4 py-2 border-2 border-emerald-pine text-xs font-black uppercase tracking-wider hover:bg-emerald-pine hover:text-white"
              >
                [ VER CATÁLOGO ]
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="py-3 flex gap-3">
                {/* Miniatura */}
                <div className="w-16 h-20 bg-canvas-ice border-2 border-silver-steel flex-shrink-0 overflow-hidden">
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
                      <h4 className="text-xs font-black uppercase tracking-wider text-emerald-pine line-clamp-1">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-silver-metallic hover:text-red-600 p-0.5"
                        title="Eliminar de la orden"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="inline-block text-[9px] font-mono font-bold uppercase bg-canvas-ice border-2 border-silver-steel px-1.5 py-0.5 mt-0.5 text-emerald-pine">
                      PLAN: {item.variant}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border-2 border-emerald-pine text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-canvas-ice"
                        title="Reducir"
                      >
                        <Minus className="w-3 h-3 text-emerald-pine" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold text-emerald-pine">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-canvas-ice"
                        title="Aumentar"
                      >
                        <Plus className="w-3 h-3 text-emerald-pine" />
                      </button>
                    </div>

                    <span className="text-xs font-black font-mono text-emerald-pine">
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
              <div className="border-2 border-emerald-pine p-2.5 bg-canvas-ice text-left">
                <div className="flex items-center gap-1.5 mb-2">
                  <Tag className="w-3 h-3 text-emerald-pine" />
                  <span className="text-[10px] font-mono font-black uppercase text-emerald-pine">
                    CÓDIGO PROMOCIONAL // SPRINT
                  </span>
                </div>
                {couponApplied ? (
                  <div className="flex items-center justify-between bg-white border-2 border-emerald-vibrant p-1.5 text-[10px] font-mono">
                    <div className="flex items-center gap-1 text-emerald-vibrant font-bold">
                      <Check className="w-3 h-3" />
                      <span>{couponApplied} (-{formatCurrency(discountAmount)})</span>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-silver-metallic hover:text-red-600 uppercase font-bold"
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
                      className="flex-1 h-8 px-2 border-2 border-emerald-pine text-xs font-mono uppercase bg-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="h-8 px-3 bg-emerald-pine text-white text-[10px] font-mono font-bold uppercase hover:bg-emerald-deep"
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
              <span className="block text-[10px] font-black uppercase tracking-widest text-silver-metallic mb-2 font-mono">
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
                      className={`p-2 border-2 ${
                        isAlreadyAdded
                          ? 'border-emerald-vibrant bg-emerald-vibrant/10'
                          : 'border-silver-steel bg-canvas-ice'
                      } flex items-center justify-between text-left`}
                    >
                      <div className="pr-2">
                        <p className="text-[10px] font-bold uppercase text-emerald-pine line-clamp-1">
                          {addon.name}
                        </p>
                        <span className="text-[10px] font-mono text-silver-metallic">
                          +{formatCurrency(addon.price)}
                        </span>
                      </div>
                      {addon.comingSoon ? (
                        <span className="badge-silver px-2.5 py-1 border-2 border-silver-steel text-[9px] font-mono font-black uppercase bg-canvas-ice flex-shrink-0 select-none">
                          [ PRÓXIMAMENTE ]
                        </span>
                      ) : isAlreadyAdded ? (
                        <span className="px-2 py-1 border-2 border-emerald-vibrant text-emerald-deep text-[9px] font-mono font-black uppercase bg-white flex items-center gap-1">
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
                          className="px-2 py-1 bg-white border-2 border-emerald-pine text-[9px] font-black uppercase hover:bg-emerald-pine hover:text-white flex-shrink-0"
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
        <div className="p-4 border-t-2 border-emerald-pine bg-white space-y-2.5">
          <div className="space-y-1 text-[11px] font-mono text-slate-600 border-b-2 border-silver-steel pb-2">
            <div className="flex justify-between">
              <span>SUBTOTAL ITEMS:</span>
              <span className="text-emerald-pine font-bold">{formatCurrency(totalAmount)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-red-600 font-bold">
                <span>DESCUENTO ({couponApplied}):</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-500">
              <span>DESPLIEGUE EN SERVIDOR EDGE:</span>
              <span className="text-emerald-vibrant font-bold">GRATIS ($0)</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between text-xs font-black uppercase tracking-wider font-mono">
            <span className="text-emerald-pine">TOTAL A PAGAR:</span>
            <span className="text-lg font-black text-emerald-pine">{formatCurrency(finalAmount)}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-pine" />
            <span>PAGO SEGURO // SPRINT GARANTIZADO 72H</span>
          </div>

          <button
            onClick={handleCheckoutWhatsApp}
            disabled={items.length === 0}
            className={`w-full py-3.5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-emerald-pine transition-colors ${
              items.length > 0
                ? 'btn-neo-emerald'
                : 'bg-canvas-ice text-silver-metallic border-silver-steel cursor-not-allowed'
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