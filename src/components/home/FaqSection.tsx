import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿QUÉ INFORMACIÓN NECESITO ENVIARLES PARA EMPEZAR?',
      a: 'Solo lo esencial: logotipo (si lo tienes), tus servicios o catálogo de productos, y datos de contacto/WhatsApp. Si no tienes textos redactados o fotos, nuestro equipo selecciona imágenes profesionales de archivo y redacta los copys de venta con IA y técnicas de persuasión.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA REALMENTE LA ENTREGA?',
      a: 'El estándar de entrega es de 48 a 72 horas para Landing Pages y de 5 a 7 días hábiles para tiendas online completas y webs corporativas, a partir de la recepción de tu material inicial.',
    },
    {
      q: '¿PUEDO MODIFICAR TEXTOS, PRECIOS Y FOTOS YO MISMO?',
      a: 'Sí, 100%. Te entregamos la web conectada a un panel autogestionable simple, junto con un video explicativo paso a paso de 5 minutos donde te enseñamos a editar cualquier texto o producto.',
    },
    {
      q: '¿INCLUYE DOMINIO, HOSTING Y CERTIFICADO DE SEGURIDAD?',
      a: 'Puedes agregar el paquete de Dominio .com + Hosting SSL de alta velocidad por solo $49/año en tu pedido, o si ya tienes tu propio hosting o dominio en GoDaddy, Namecheap o Hostinger, lo conectamos gratis.',
    },
    {
      q: '¿QUÉ SUCEDE SI NO ME GUSTA LA PRIMERA VERSIÓN?',
      a: 'Contamos con garantía blindada VÉNDO: realizamos todas las revisiones y ajustes necesarios hasta que la web cumpla exactamente tus expectativas antes de publicarla oficialmente.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white border-b border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
            [ RESOLUCIÓN DE DUDAS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
            PREGUNTAS FRECUENTES // FAQ
          </h2>
        </div>

        {/* Acordeón Recto */}
        <div className="border border-black divide-y divide-black">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                    {faq.q}
                  </span>
                  <span className="w-6 h-6 border border-black flex items-center justify-center flex-shrink-0 text-black">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200 bg-neutral-50 font-medium">
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
