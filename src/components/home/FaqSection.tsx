import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿QUÉ MATERIAL EXACTO NECESITAN DE MI PARTE PARA EMPEZAR?',
      a: 'Lo indispensable: logotipo (si lo tienes), la lista de tus servicios o productos con precios, y a dónde quieres recibir a tus clientes (teléfono o link de pago). Si no tienes fotos o textos terminados, nosotros redactamos los copys de venta y seleccionamos fotografía editorial de alta calidad sin costo adicional.',
    },
    {
      q: '¿POR QUÉ DICEN QUE EL HOSTING ES DE $0 USD AL MES?',
      a: 'Desarrollamos sobre arquitectura moderna Serverless (Vercel / Cloudflare Edge). A diferencia de WordPress, que requiere servidores dedicados lentos de $20 a $50/mes para no caerse, el código estático compilado no consume cómputo continuo y el tier gratuito de estas redes mundiales cubre hasta 100.000 visitas al mes sin pagar un solo centavo.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA REALMENTE LA ENTREGA?',
      a: 'Para Landing Pages CRO el tiempo de entrega en entorno privado de staging es de 48 a 72 horas hábiles. Para tiendas online completas y webs corporativas, el sprint toma de 5 a 7 días hábiles tras recibir tus productos o contenidos base.',
    },
    {
      q: '¿CÓMO FUNCIONA EL COBRO Y LAS PASARELAS DE PAGO?',
      a: 'No cobramos ninguna comisión sobre tus ventas. Te configuramos tu propia pasarela (Stripe o Mercado Pago) directamente enlazada a tu cuenta de banco para que el dinero de tus clientes ingrese de forma automática e inmediata.',
    },
    {
      q: '¿QUÉ SUCEDE SI NECESITO CAMBIOS ANTES DEL LANZAMIENTO?',
      a: 'Protocolo de Revisión Quirúrgica: antes de conectar tu dominio oficial, revisamos la página contigo en un enlace privado. Realizamos los ajustes de diseño, textos y fotos que solicites hasta que el resultado cumpla al 100% el estándar acordado.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white border-b border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
            [ RESOLUCIÓN DE DUDAS COMERCIALES Y TÉCNICAS ]
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
                  <span className="w-6 h-6 border border-black flex items-center justify-center flex-shrink-0 text-black font-mono">
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
