import React from 'react';
import { ArrowRight, CheckCircle2, Zap, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenConsult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onOpenConsult }) => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 overflow-hidden">
      {/* Fondo sutil degradado radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Columna Izquierda: Copy Directo & CRO */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pill de Estado */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm mb-5 text-xs font-semibold text-[#111111]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Infraestructura Web de Alta Conversión</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#2563EB] font-bold">VÉNDO v2.4</span>
            </div>

            {/* Titular Principal de Alto Impacto */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-5">
              Tu negocio no necesita otra web bonita. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#2563EB] to-[#111111]">
                Necesita una máquina de ventas.
              </span>
            </h1>

            {/* Subtítulo enfocado en dolores y beneficios */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-xl mb-8 leading-relaxed">
              Diseñamos y desarrollamos páginas web ultrarrápidas, tiendas online y embudos 
              orientados a una sola métrica: <strong>multiplicar tus clientes y facturación</strong> con mínima fricción.
            </p>

            {/* Acciones Principales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onExplore}
                className="h-12 px-7 rounded-xl bg-[#111111] text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-card group"
              >
                <span>Ver Catálogo de Soluciones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsult}
                className="h-12 px-6 rounded-xl bg-white text-[#111111] border border-[#E2E8F0] text-sm font-semibold hover:border-black hover:bg-[#FAFAFA] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Asesoría Rápida sin Compromiso</span>
              </button>
            </div>

            {/* Microgarantías de confianza */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-4 border-t border-slate-200/80 text-[12px] text-[#64748B]">
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Lista en 3 a 5 días</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Carga en &lt; 0.8s</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Autogestionable</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Mockup Visual Interactivo estilo App-Like */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 shadow-card">
              
              {/* Header de simulación de browser / app */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-md">
                  tunegocio.com/crecimiento
                </div>
                <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-emerald-500" /> 99/100
                </div>
              </div>

              {/* Contenido interactivo simulado */}
              <div className="space-y-4">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 rounded-xl relative overflow-hidden">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Caso Real — Resultados Primer Mes
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <h4 className="text-2xl font-black">+340%</h4>
                    <span className="text-xs text-slate-300">en prospectos calificados</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Tasa de rebote reducida de 68% a 14%</span>
                  </div>
                </div>

                {/* Métricas clave en Bento mini */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FAFAFA] p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-[11px] font-medium">Velocidad</span>
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <p className="text-lg font-bold text-[#111111]">0.7s</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">Instantánea en móviles</p>
                  </div>

                  <div className="bg-[#FAFAFA] p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-[11px] font-medium">Conversión</span>
                      <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                    <p className="text-lg font-bold text-[#111111]">4.8%</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Promedio del sector: 1.2%</p>
                  </div>
                </div>

                {/* Banner de Valoración de Clientes */}
                <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">MC</div>
                      <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">LR</div>
                      <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">JG</div>
                    </div>
                    <div>
                      <div className="flex text-amber-400">
                        {'★'.repeat(5)}
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">+140 clientes escalados</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#2563EB]">Garantía VÉNDO</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
