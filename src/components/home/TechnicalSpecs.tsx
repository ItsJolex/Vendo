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
              [ FICHA TÉCNICA // AUDITORÍA DE RENDIMIENTO ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-black">
              INGENIERÍA WEB SIN COMPLICACIONES
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            ESTÁNDAR VÉNDO 2026
          </span>
        </div>

        {/* Matriz Técnica de 3 Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          
          {/* Bloque 1 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MÓDULO 01
                </span>
                <Terminal className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                CARGA EN &lt; 0.8S
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                Nadie espera una página lenta. Tu web abre al instante tanto en datos móviles como en Wi-Fi. Cero código basura ni plugins pesados.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">LIGHTHOUSE SCORE: 99/100</span>
              <span className="text-[10px] text-neutral-500">CERO REBOTES // MÁXIMA VELOCIDAD</span>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left bg-neutral-50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MÓDULO 02
                </span>
                <Smartphone className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                100% PARA MÓVIL
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 85% de tus clientes locales busca desde su teléfono. Diseñamos con botones táctiles grandes, navegación fluida y formato tipo aplicación.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">RESPUESTA TÁCTIL INMEDIATA</span>
              <span className="text-[10px] text-neutral-500">DISEÑO ADAPTADO A TU CLIENTE LOCAL</span>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MÓDULO 03
                </span>
                <ShoppingBag className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                WHATSAPP EN 1 CLIC
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                Sin carritos engorrosos ni formularios infinitos. El cliente toca un botón y te escribe directo con el pedido o consulta ya redactada.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">CONVERSIÓN DIRECTA</span>
              <span className="text-[10px] text-neutral-500">CERO COMISIONES DE PLATAFORMAS</span>
            </div>
          </div>

        </div>

        {/* Tabla Comparativa de Benchmark */}
        <div className="mt-10 border border-black bg-white">
          <div className="p-4 bg-neutral-100 border-b border-black flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-black font-mono">
              [ COMPARATIVA // VÉNDO VS. WEBS TRADICIONALES ]
            </span>
            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              SIN TRUCOS NI COSTOS OCULTOS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-black text-white border-b border-black uppercase text-[10px] tracking-wider">
                  <th className="p-3 border-r border-neutral-800">PARÁMETRO</th>
                  <th className="p-3 border-r border-neutral-800 text-neutral-400">WEBS TRADICIONALES (WORDPRESS/WIX)</th>
                  <th className="p-3 text-emerald-400 font-bold">SISTEMA VÉNDO ®</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Velocidad en Celular</td>
                  <td className="p-3 text-red-600 border-r border-neutral-200">4.0s - 7.5s (Lenta y pesada)</td>
                  <td className="p-3 font-bold text-black">&lt; 0.8s (Carga instantánea)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Costo de Hosting Mensual</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">$15 a $45 USD/mes obligatorios</td>
                  <td className="p-3 font-bold text-black">$0 USD (Hosting de alta velocidad incluido)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Ficha Google Maps</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">Cobro extra o no incluida</td>
                  <td className="p-3 font-bold text-black">Incluida y optimizada para tu ciudad</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Contacto con el Cliente</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">Formulario lento por correo</td>
                  <td className="p-3 font-bold text-black">1 Clic directo a tu WhatsApp con mensaje listo</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Tiempo de Entrega</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">3 a 6 semanas de espera</td>
                  <td className="p-3 font-bold text-black">48 a 72 horas garantizadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
