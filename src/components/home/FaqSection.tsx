import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿QUÉ NECESITO PARA EMPEZAR?',
      a: 'Solo tu logo (si tienes), la lista de tus productos o servicios con precios, y tu número de WhatsApp. Nosotros redactamos los textos y preparamos el diseño.',
    },
    {
      q: '¿EL HOSTING ESTÁ INCLUIDO?',
      a: 'Sí, hosting de alta velocidad incluido. Sin mensualidades obligatorias ni costos sorpresa.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA LA ENTREGA?',
      a: 'Entregamos en 48 a 72 horas para páginas web locales y de 3 a 5 días para catálogos con pedidos.',
    },
    {
      q: '¿CÓMO ME CONTACTAN O COMPRAN LOS CLIENTES?',
      a: 'Tus clientes tocan un botón y te escriben directo a tu WhatsApp con el producto o pedido listo, o te llaman directamente desde Google Maps.',
    },
    {
      q: '¿ME AYUDAN CON GOOGLE MAPS?',
      a: 'Sí, optimizamos y enlazamos la ficha de tu negocio para que aparezcas cuando busquen lo que vendes en tu ciudad.',
    },
    {
      q: '¿QUÉ PASA SI QUIERO CAMBIOS ANTES DE PUBLICAR?',
      a: 'Revisamos la página contigo en un enlace privado. Hacemos los ajustes que necesites hasta que estés 100% satisfecho antes de activarla.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-canvas-ice border-b-2 border-emerald-pine">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-silver-metallic block mb-1">
            [ PREGUNTAS FRECUENTES // DUDAS RESUELTAS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-emerald-pine">
            PREGUNTAS FRECUENTES // FAQ
          </h2>
        </div>

        {/* Acordeón Recto */}
        <div className="border-2 border-emerald-pine divide-y-2 divide-emerald-pine shadow-neo-pine bg-white">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-canvas-ice transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-pine">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 bg-emerald-pine border-2 border-emerald-pine flex items-center justify-center flex-shrink-0 text-white font-mono">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-silver-steel bg-canvas-ice font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};