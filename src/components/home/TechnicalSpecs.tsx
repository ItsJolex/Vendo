import React from 'react';
import { Smartphone, ShoppingBag, Terminal } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section id="especificaciones" className="py-16 bg-canvas-ice border-b-2 border-emerald-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-emerald-pine gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-silver-metallic block mb-1">
              [ FICHA TÉCNICA // AUDITORÍA DE RENDIMIENTO ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-emerald-pine">
              INGENIERÍA WEB SIN COMPLICACIONES
            </h2>
          </div>
          <span className="text-xs font-mono text-silver-metallic">
            ESTÁNDAR VÉNDO 2026
          </span>
        </div>

        {/* Matriz Técnica de 3 Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-emerald-pine divide-y md:divide-y-0 md:divide-x divide-emerald-pine bg-white shadow-neo-pine">
          
          {/* Bloque 1 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-silver-metallic">
                  // MÓDULO 01
                </span>
                <Terminal className="w-4 h-4 text-emerald-pine" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-emerald-pine mb-2">
                {"CARGA EN < 0.8S"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                Nadie espera una página lenta. Tu web abre al instante tanto en datos móviles como en Wi-Fi. Cero código basura ni plugins pesados.
              </p>
            </div>
            <div className="border-t-2 border-silver-steel pt-4 font-mono text-xs text-emerald-pine">
              <span className="block font-bold">LIGHTHOUSE SCORE: 99/100</span>
              <span className="text-[10px] text-silver-metallic">CERO REBOTES // MÁXIMA VELOCIDAD</span>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left bg-canvas-ice">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-silver-metallic">
                  // MÓDULO 02
                </span>
                <Smartphone className="w-4 h-4 text-emerald-pine" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-emerald-pine mb-2">
                100% PARA MÓVIL
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                El 85% de tus clientes locales busca desde su teléfono. Diseñamos con botones táctiles grandes, navegación fluida y formato tipo aplicación.
              </p>
            </div>
            <div className="border-t-2 border-silver-steel pt-4 font-mono text-xs text-emerald-pine">
              <span className="block font-bold">RESPUESTA TÁCTIL INMEDIATA</span>
              <span className="text-[10px] text-silver-metallic">DISEÑO ADAPTADO A TU CLIENTE LOCAL</span>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-silver-metallic">
                  // MÓDULO 03
                </span>
                <ShoppingBag className="w-4 h-4 text-emerald-pine" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-emerald-pine mb-2">
                WHATSAPP EN 1 CLIC
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                Sin carritos engorrosos ni formularios infinitos. El cliente toca un botón y te escribe directo con el pedido o consulta ya redactada.
              </p>
            </div>
            <div className="border-t-2 border-silver-steel pt-4 font-mono text-xs text-emerald-pine">
              <span className="block font-bold">CONVERSIÓN DIRECTA</span>
              <span className="text-[10px] text-silver-metallic">CERO COMISIONES DE PLATAFORMAS</span>
            </div>
          </div>

        </div>

        {/* Tabla Comparativa de Benchmark */}
        <div className="mt-10 border-2 border-emerald-pine bg-white shadow-neo-pine">
          <div className="p-4 bg-canvas-ice border-b-2 border-emerald-pine flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-pine font-mono">
              [ COMPARATIVA // VÉNDO VS. WEBS TRADICIONALES ]
            </span>
            <span className="text-[10px] font-mono text-silver-metallic hidden sm:inline">
              SIN TRUCOS NI COSTOS OCULTOS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-emerald-pine text-white border-b-2 border-emerald-pine uppercase text-[10px] tracking-wider">
                  <th className="p-3 border-r-2 border-emerald-deep">PARÁMETRO</th>
                  <th className="p-3 border-r-2 border-emerald-deep text-silver-steel">WEBS TRADICIONALES (WORDPRESS/WIX)</th>
                  <th className="p-3 text-emerald-vibrant font-bold">SISTEMA VÉNDO ®</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-silver-steel">
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Velocidad en Celular</td>
                  <td className="p-3 text-red-600 border-r-2 border-silver-steel">4.0s - 7.5s (Lenta y pesada)</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">{'< 0.8s (Carga instantánea)'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Costo de Hosting Mensual</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">$15 a $45 USD/mes obligatorios</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">$0 USD (Hosting de alta velocidad incluido)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Ficha Google Maps</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">Cobro extra o no incluida</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">Incluida y optimizada para tu ciudad</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Contacto con el Cliente</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">Formulario lento por correo</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">1 Clic directo a tu WhatsApp con mensaje listo</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Tiempo de Entrega</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">3 a 6 semanas de espera</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">48 a 72 horas garantizadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};