import React, { useState } from 'react';
import { WebSolution, Addon, formatCurrency } from '../../types/solution';
import { globalAddons } from '../../data/solutions';
import { X, Check, MessageSquare, Clock } from 'lucide-react';

interface BottomSheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  solution: WebSolution | null;
}

export const BottomSheetDrawer: React.FC<BottomSheetDrawerProps> = ({
  isOpen,
  onClose,
  solution,
}) => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !solution) return null;

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAddonsList: Addon[] = globalAddons.filter((a) =>
    selectedAddonIds.includes(a.id)
  );

  const addonsTotal = selectedAddonsList.reduce((acc, curr) => acc + curr.price, 0);
  const finalTotal = solution.price + addonsTotal;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Por favor indica tu nombre y WhatsApp para poder contactarte.');
      return;
    }

    const addonsText =
      selectedAddonsList.length > 0
        ? `\n*Addons seleccionados:* ${selectedAddonsList.map((a) => a.name).join(', ')}`
        : '';

    const text = `¡Hola VÉNDO! 🚀\nQuiero ordenar la solución web:\n*${solution.name}* (${formatCurrency(solution.price)})${addonsText}\n*Total estimado:* ${formatCurrency(finalTotal)}\n\n*Mis Datos:*\n- Nombre: ${name}\n- Teléfono/WhatsApp: ${phone}\n- Mi Negocio: ${businessName || 'Por definir'}\n\nQuedo atento a los siguientes pasos.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/584149428999?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Contenedor Modal / Bottom Sheet */}
      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-t-3xl sm:rounded-2xl bg-white text-left align-bottom shadow-float transition-all max-h-[92vh] flex flex-col">
          
          {/* Header del Modal */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h3 className="text-sm font-bold text-[#111111]">
                Configuración Rápida de Solución
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cuerpo Scrollable */}
          <div className="p-5 overflow-y-auto space-y-6">
            
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#111111]">¡Solicitud Iniciada con Éxito!</h4>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  Te hemos redirigido a WhatsApp con el resumen de tu solución. Si no se abrió la ventana, haz clic abajo.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Volver a editar pedido
                </button>
              </div>
            ) : (
              <>
                {/* Resumen de la Solución Seleccionada */}
                <div className="bg-[#FAFAFA] p-4 rounded-xl border border-[#E2E8F0]">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase text-[#2563EB] tracking-wider">
                      Paquete Base
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {solution.deliveryDays}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#111111]">{solution.name}</h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    {solution.tagline}
                  </p>
                  <div className="mt-3 flex items-baseline justify-between pt-3 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium">Inversión base:</span>
                    <span className="text-lg font-bold text-[#111111]">{formatCurrency(solution.price)}</span>
                  </div>
                </div>

                {/* Addons y Personalizaciones Opcionales */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Mejoras Recomendadas (Add-ons)
                  </label>
                  <div className="space-y-2">
                    {globalAddons.map((addon) => {
                      const isSelected = selectedAddonIds.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'border-black bg-slate-50'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <div
                              className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                                isSelected
                                  ? 'bg-black border-black text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-[#111111]">
                                {addon.name}
                              </p>
                              <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                                {addon.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#111111] whitespace-nowrap">
                            +{formatCurrency(addon.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Formulario Exprés de 3 campos (Sin fricción) */}
                <form onSubmit={handleSendWhatsAppOrder} className="space-y-3 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Tus Datos para el Lanzamiento
                  </label>
                  
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Tu Nombre completo *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] text-xs text-[#111111] placeholder:text-slate-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp con código país *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] text-xs text-[#111111] placeholder:text-slate-400 focus:outline-none focus:border-black transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Nombre de tu negocio / marca"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] text-xs text-[#111111] placeholder:text-slate-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Resumen Total y Botón de Conversión Inmediato */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs text-slate-500 font-medium">Inversión Final:</span>
                        <div className="text-2xl font-black text-[#111111]">
                          {formatCurrency(finalTotal)}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                          Garantía 100% de Entrega
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-card"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Pedir por WhatsApp (Cierre Inmediato)</span>
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Sin cobros sorpresivos. Coordinamos detalles y puesta en marcha en tiempo real.
                    </p>
                  </div>
                </form>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
