import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  const faqs = [
    {
      q: '¿QUÉ NECESITO PARA EMPEZAR?',
      a: 'Solo tu logo (si tienes), la lista de tus productos o servicios con precios, y tu número de WhatsApp. Nosotros redactamos los textos y preparamos la estructura visual.',
    },
    {
      q: '¿EL HOSTING ESTÁ INCLUIDO O TIENE MENSUALIDAD?',
      a: 'El desarrollo de tu web incluye tu primer mes (30 días) de hosting de alta velocidad completamente cubierto. A partir del segundo mes, mantenemos tu web activa, protegida y con tiempo de carga inferior a 0.8s en servidores Vercel Pro por una cuota fija y accesible de entre $10 y $13 USD mensuales (según los recursos de tu negocio). Sin contratos forzosos ni letras pequeñas.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA LA ENTREGA?',
      a: 'Entregamos tu página web completa y funcionando en 48 a 72 horas hábiles garantizadas una vez que nos entregues el contenido básico de tu negocio.',
    },
    {
      q: '¿CÓMO ME CONTACTAN O COMPRAN LOS CLIENTES?',
      a: 'Tus clientes tocan un botón y te escriben directo a tu WhatsApp oficial con el producto o pedido listo, o te llaman directamente desde el mapa de Google Maps.',
    },
    {
      q: '¿ME AYUDAN CON GOOGLE MAPS?',
      a: 'Sí, optimizamos y enlazamos la ficha de tu negocio para que tus clientes cercanos te encuentren cuando busquen lo que vendes en tu ciudad.',
    },
    {
      q: '¿QUÉ PASA SI QUIERO CAMBIOS ANTES DE PUBLICAR?',
      a: 'Revisamos la página contigo en un enlace privado antes del lanzamiento. Hacemos los ajustes que necesites hasta que estés 100% satisfecho antes de activarla en tu dominio.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-canvas-ice border-b-2 border-emerald-pine">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-silver-metallic block mb-1">
            [ PREGUNTAS FRECUENTES // TRANSPARENCIA TOTAL ]
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
                  <span className="flex-shrink-0 w-6 h-6 border-2 border-emerald-pine flex items-center justify-center bg-canvas-ice text-emerald-pine">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-silver-steel bg-canvas-ice/50 font-medium">
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