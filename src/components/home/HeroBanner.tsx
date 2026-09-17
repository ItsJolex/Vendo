import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

interface HeroBannerProps {
  onExplore: () => void;
  onOpenConsult: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onOpenConsult }) => {
  const whatsappHeroUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero información para hacer crecer mi negocio local con una página web.'
  );

  return (
    <>
      {/* Micro Status Bar */}
      <div className="bg-emerald-pine border-b-2 border-emerald-deep py-2 px-4 text-[10px] font-mono flex items-center justify-between uppercase text-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-vibrant inline-block animate-pulse" />
          <span className="font-bold text-white">VÉNDO DIGITAL ENGINE // V2.0 EMERALD EDITION</span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300">SISTEMA 100% GESTIONADO</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-300 hidden sm:inline">ATENCIÓN DIRECTA: <strong>+58 414-9428999</strong></span>
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-vibrant bg-white px-2 py-0.5 font-black hover:bg-slate-100 transition-colors"
          >
            [ WHATSAPP DISPONIBLE ]
          </a>
        </div>
      </div>

      <section className="relative bg-canvas-ice text-emerald-pine border-b-2 border-emerald-pine overflow-hidden py-16 sm:py-24">
        {/* Fondo sutil tipo agua / esmeralda translúcida */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#187E5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Badge superior estilo Sticker */}
          <div className="inline-flex items-center gap-2 border-2 border-emerald-pine bg-white px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-emerald-pine mb-8 shadow-neo-pine -rotate-1">
            <span className="w-2 h-2 bg-emerald-vibrant inline-block animate-pulse" />
            <span className="font-bold">AGENCIA DE CRECIMIENTO DIGITAL LOCAL</span>
          </div>

          {/* Titular Monumental */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight leading-[0.92] max-w-5xl mb-6 text-emerald-pine">
            VÉNDO, HAZ QUE TE ENCUENTREN, <br />
            <span className="text-emerald-deep underline decoration-emerald-vibrant decoration-8 underline-offset-8">
              HAZ QUE TE COMPREN
            </span>
          </h1>

          {/* Subtítulo Conciso y Directo */}
          <p className="text-sm sm:text-base md:text-lg text-emerald-deep max-w-2xl font-bold mb-10 leading-relaxed font-sans">
            VÉNDO es una agencia de crecimiento digital para negocios locales. Creamos páginas web, optimizamos Google Maps, ordenamos WhatsApp y mejoramos la forma en que los clientes descubren, contactan y compran en tu negocio.
          </p>

          {/* Botones de Acción Táctiles (0px Radius + Clic Físico) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onExplore}
              className="btn-neo-emerald h-14 px-8 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>VER PLANES DISPONIBLES</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsult}
              className="btn-neo-silver h-14 px-8 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 font-mono"
            >
              <MessageSquare className="w-4 h-4 text-emerald-pine" />
              <span>[ ASESORÍA VÍA WHATSAPP → ]</span>
            </button>
          </div>

          {/* 4 Cajas de Beneficios Neo-Brutal con Sombras Duras */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            
            {/* Caja 1 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-emerald-vibrant font-bold uppercase tracking-widest mb-1">
                VISIBILIDAD LOCAL
              </span>
              <span className="text-xl font-black tracking-wider text-emerald-pine font-mono block">
                GOOGLE MAPS
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Primero en tu ciudad
              </span>
            </div>

            {/* Caja 2 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-emerald-vibrant font-bold uppercase tracking-widest mb-1">
                VENTA DIRECTA
              </span>
              <span className="text-xl font-black tracking-wider text-emerald-pine font-mono block">
                WHATSAPP
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Pedidos en 1 solo clic
              </span>
            </div>

            {/* Caja 3 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-emerald-vibrant font-bold uppercase tracking-widest mb-1">
                TIEMPO DE ENTREGA
              </span>
              <span className="text-xl font-black tracking-wider text-emerald-pine font-mono block">
                72 HORAS
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Tu web lista y vendiendo
              </span>
            </div>

            {/* Caja 4 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-emerald-vibrant font-bold uppercase tracking-widest mb-1">
                TRANSPARENCIA TOTAL
              </span>
              <span className="text-xl font-black tracking-wider text-emerald-pine font-mono block">
                TODO INCLUIDO
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Hosting + Cero costos ocultos
              </span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};