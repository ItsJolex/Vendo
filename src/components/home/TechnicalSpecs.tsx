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
              INGENIERÍA WEB SIN FRICCIÓN TÉCNICA
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            ESTÁNDAR VÉNDO CORE 2026
          </span>
        </div>

        {/* Matriz Técnica de 3 Módulos */}
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
                Desarrollamos código estático compilado en Edge sin plugins pesados. Tu página vuela tanto en 4G como en fibra óptica.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">LIGHTHOUSE SCORE: 98-100</span>
              <span className="text-[10px] text-neutral-500">OPTIMIZACIÓN SUB-SEGUNDO // ZERO BLOAT</span>
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
                MOBILE-FIRST TRANSACCIONAL
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 82% del tráfico de tus campañas proviene de celulares. Diseñamos con ergonomía táctil: botones grandes al alcance del pulgar, drawer deslizable y carga instantánea.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">TASA DE REBOTE: -58%</span>
              <span className="text-[10px] text-neutral-500">INTERFAZ TÁCTIL ESTILO APLICACIÓN</span>
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
                WHATSAPP & STRIPE EN 1-CLIC
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                Conectamos tu pedido directamente al WhatsApp de tu equipo con el detalle estructurado de la orden o a pasarelas como Stripe y Mercado Pago para recibir el dinero en tu cuenta bancaria.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">CONVERSIÓN DIRECTA: +3.4X</span>
              <span className="text-[10px] text-neutral-500">CERO COMISIONES DE PLATAFORMAS</span>
            </div>
          </div>

        </div>

        {/* Tabla Comparativa de Benchmark */}
        <div className="mt-10 border border-black bg-white">
          <div className="p-4 bg-neutral-100 border-b border-black flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-black font-mono">
              [ TABLA DE BENCHMARK // VÉNDO VS. DESARROLLO CONVENCIONAL ]
            </span>
            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              AUDITADO EN GOOGLE PAGESPEED INSIGHTS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-black text-white border-b border-black uppercase text-[10px] tracking-wider">
                  <th className="p-3 border-r border-neutral-800">MÉTRICA / PARÁMETRO</th>
                  <th className="p-3 border-r border-neutral-800 text-neutral-400">WORDPRESS / WIX / ELEMENTOR</th>
                  <th className="p-3 text-emerald-400 font-bold">ARQUITECTURA VÉNDO ®</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Velocidad LCP (Carga de contenido)</td>
                  <td className="p-3 text-red-600 border-r border-neutral-200">3.8s - 6.5s (Lenta por plugins)</td>
                  <td className="p-3 font-bold text-black">&lt; 0.8s (Compilación estática en Edge)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Costo Mensual de Mantenimiento</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">$25 a $60 USD / mes (Hosting cPanel + plugins)</td>
                  <td className="p-3 font-bold text-black">$0 USD / mes (Infraestructura Serverless)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Riesgo de Caídas / Infección malware</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">Alto (Plugins desactualizados)</td>
                  <td className="p-3 font-bold text-black">Nulo (Sin base de datos expuesta)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Flujo de Compra</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">3 a 5 pasos lentos con recargas</td>
                  <td className="p-3 font-bold text-black">1-Clic directo a WhatsApp o Pasarela</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
