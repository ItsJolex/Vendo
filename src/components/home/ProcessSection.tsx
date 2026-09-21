import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ELIGES TU PLAN Y ENVÍAS TUS DATOS',
      desc: 'Nos mandas tu logo, productos o servicios y tu número de WhatsApp. Sin formularios complicados ni tecnicismos.',
    },
    {
      num: '02',
      title: 'CONSTRUIMOS TU WEB EN 72H',
      desc: 'Diseñamos tu página para celulares, enlazamos tu Google Maps y configuramos tus pedidos a WhatsApp.',
    },
    {
      num: '03',
      title: 'REVISAS Y EMPIEZAS A VENDER',
      desc: 'Te enviamos el enlace privado para tu aprobación final y la publicamos lista para recibir clientes.',
    },
  ];

  const whatsappProcessUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero conocer más sobre el servicio para mi negocio local'
  );

  return (
    <section id="proceso" className="py-16 bg-canvas-ice border-b-2 border-emerald-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b-2 border-emerald-pine gap-2">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-silver-metallic block mb-1">
              [ PROTOCOLO DE TRABAJO ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-emerald-pine">
              CÓMO OPERAMOS // 3 PASOS
            </h2>
          </div>
          <span className="text-xs font-mono text-silver-metallic">
            CERO RETRASOS // ENTREGA EN 48-72H
          </span>
        </div>

        {/* Pasos en Rejilla Recta */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-emerald-pine divide-y md:divide-y-0 md:divide-x divide-emerald-pine bg-white shadow-neo-pine">
          {steps.map((s) => (
            <div key={s.num} className="p-6 text-left flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black font-mono text-coral block mb-3">
                  [{s.num}]
                </span>
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-pine mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Garantía en caja recta */}
        <div className="mt-8 p-6 bg-emerald-deep text-white border-2 border-emerald-pine shadow-neo-pine-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-vibrant flex-shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest">
                GARANTÍA DE VELOCIDAD // PROTOCOLO 48-72H
              </h4>
              <p className="text-[11px] text-silver-chrome font-medium">
                1er mes de hosting de alta velocidad incluido, dominio y configuración. A partir del 2do mes, hosting gestionado en Vercel Pro por solo $10 a $13 USD/mes. Ajustamos tu web hasta que estés 100% satisfecho antes de activarla.
              </p>
            </div>
          </div>
          <a
            href={whatsappProcessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo-silver px-4 py-2 text-xs font-black uppercase tracking-wider flex-shrink-0 font-mono"
          >
            [ HABLAR CON EL EQUIPO → ]
          </a>
        </div>

      </div>
    </section>
  );
};