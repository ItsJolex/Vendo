import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SELECCIÓN DE ARQUITECTURA',
      desc: 'Seleccionas el paquete del catálogo y los módulos específicos que requiere tu modelo de venta directa o captación.',
    },
    {
      num: '02',
      title: 'SPRINT DE DESARROLLO 72H',
      desc: 'Programación en rama de staging, redacción de textos transaccionales y configuración de pasarelas. Monitoreas el avance en un enlace privado.',
    },
    {
      num: '03',
      title: 'DESPLIEGUE EN PRODUCCIÓN',
      desc: 'Conexión de dominio oficial con SSL Wildcard, auditoría final de Core Web Vitals (<0.8s) y entrega de accesos completos.',
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
                PROTOCOLO DE REVISIÓN QUIRÚRGICA VÉNDO
              </h4>
              <p className="text-[11px] text-neutral-300 font-medium">
                Rondas de ajustes en el entorno de pruebas antes del despliegue final. Si el sitio no carga en &lt; 0.8s, optimizamos el código sin costo adicional.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/?text=Hola%20VÉNDO,%20quiero%20conocer%20más%20sobre%20el%20protocolo%20de%20entrega%20en%2072h"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black text-xs font-black uppercase tracking-wider border border-white hover:bg-neutral-200 transition-colors flex-shrink-0 font-mono"
          >
            [ HABLAR CON EL EQUIPO ]
          </a>
        </div>

      </div>
    </section>
  );
};
