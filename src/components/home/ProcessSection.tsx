import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SELECCIÓN DE SOLUCIÓN',
      desc: 'Eliges el paquete del catálogo y los add-ons específicos que requiere tu modelo de negocio.',
    },
    {
      num: '02',
      title: 'PROGRAMACIÓN EN 72H',
      desc: 'Ensamblamos el diseño, redactamos los copys de venta y conectamos tus canales de pago.',
    },
    {
      num: '03',
      title: 'DESPLIEGUE Y VENTAS',
      desc: 'Conectamos tu dominio oficial con certificado SSL y tu página queda activa generando clientes.',
    },
  ];

  return (
    <section id="proceso" className="py-16 bg-neutral-50 border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-black gap-2">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
              [ PROTOCOLO DE TRABAJO ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
              CÓMO OPERAMOS // 3 PASOS
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            CERO RETRASOS // ENTREGA ÁGIL
          </span>
        </div>

        {/* Pasos en Rejilla Recta */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          {steps.map((s) => (
            <div key={s.num} className="p-6 text-left flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black font-mono text-neutral-300 block mb-3">
                  [{s.num}]
                </span>
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Garantía en caja recta */}
        <div className="mt-8 p-6 bg-black text-white border border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-white flex-shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest">
                GARANTÍA DE AJUSTES ILIMITADOS VÉNDO
              </h4>
              <p className="text-[11px] text-neutral-300 font-medium">
                No lanzamos hasta que estés 100% satisfecho con el resultado y la velocidad.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/?text=Hola%20VÉNDO,%20quiero%20conocer%20más%20sobre%20el%20proceso%20de%20entrega"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black text-xs font-black uppercase tracking-wider border border-white hover:bg-neutral-200 transition-colors flex-shrink-0"
          >
            [ HABLAR CON EL EQUIPO ]
          </a>
        </div>

      </div>
    </section>
  );
};
