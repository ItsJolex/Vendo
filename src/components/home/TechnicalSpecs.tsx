import React from 'react';
import { Smartphone, ShoppingBag, Terminal } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section id="especificaciones" className="py-16 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-black gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
              [ FICHA TÉCNICA // INGENIERÍA ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-black">
              ¿POR QUÉ NUESTRAS WEBS FACTURAN MÁS?
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            ESTÁNDAR VÉNDO CORE 2026
          </span>
        </div>

        {/* Matriz Técnica de Corte Recto (1px Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          
          {/* Bloque 1 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 01
                </span>
                <Terminal className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                VELOCIDAD EXTREMA &lt; 0.8S
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 53% de los usuarios abandona una web si tarda más de 3 segundos en cargar. 
                Desarrollamos sin constructores lentos. Tu página vuela tanto en móviles como en computadoras.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">LIGHTHOUSE SCORE: 98-100</span>
              <span className="text-[10px] text-neutral-500">OPTIMIZACIÓN DE ASSETS Y CDN GLOBAL</span>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left bg-neutral-50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 02
                </span>
                <Smartphone className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                EXPERIENCIA 100% CELULAR
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 80% de tus ventas vendrán de anuncios en Instagram o TikTok. Diseñamos con botones grandes, 
                tiempos de respuesta instantáneos y navegación fija para que nadie se pierda.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">TASA DE REBOTE: -58%</span>
              <span className="text-[10px] text-neutral-500">GESTOS TÁCTILES FLUIDOS Y APPLIKE</span>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 03
                </span>
                <ShoppingBag className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                WHATSAPP & PASARELAS EN 1-CLIC
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                Conectamos tu web directamente al WhatsApp de tu equipo de ventas o a tu pasarela de cobro 
                (Stripe, Mercado Pago o PSE) para recibir pagos inmediatos sin comisiones de intermediarios.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">CONVERSIÓN DIRECTA: +3.4X</span>
              <span className="text-[10px] text-neutral-500">MÍNIMA FRICCIÓN OPERATIVA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
