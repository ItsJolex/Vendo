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
      {/* Micro Status Bar Técnica Brutalista */}
      <div className="bg-neutral-100 border-b border-black py-1.5 px-4 text-[10px] font-mono flex items-center justify-between uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
          <span className="font-bold text-black">VÉNDO DIGITAL ENGINE // CRECIMIENTO LOCAL</span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-600">SISTEMA 100% GESTIONADO</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-500 hidden sm:inline">ATENCIÓN DIRECTA: <strong>+58 414-9428999</strong></span>
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-bold hover:underline"
          >
            [ RESPUESTA INMEDIATA VÍA WHATSAPP ]
          </a>
        </div>
      </div>

      <section className="relative bg-black text-white border-b border-black overflow-hidden">
        {/* Background con fotografía editorial de alta intensidad y overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&h=1080&fit=crop&auto=format&sat=-100"
            alt="VÉNDO Crecimiento Digital Local"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 flex flex-col items-center text-center">
          
          {/* Badge superior de lanzamiento */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-6">
            <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" />
            <span>VÉNDO ® // AGENCIA DE CRECIMIENTO DIGITAL LOCAL</span>
          </div>

          {/* Titular Monumental Estilo Brutalista Clásico */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight sm:tracking-wide leading-[0.92] max-w-5xl mb-6">
            VÉNDO, HAZ QUE TE ENCUENTREN, <br />
            <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">
              HAZ QUE TE COMPREN
            </span>
          </h1>

          {/* Subtítulo Obligatorio */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl uppercase tracking-wider font-semibold mb-10 leading-relaxed font-sans">
            VÉNDO es una agencia de crecimiento digital para negocios locales. Creamos páginas web, optimizamos Google Maps, ordenamos WhatsApp y mejoramos la forma en que los clientes descubren, contactan y compran en tu negocio.
          </p>

          {/* Botones de Acción de Corte Recto (0px Radius) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-14">
            <button
              onClick={onExplore}
              className="h-12 px-8 bg-white text-black text-xs font-black uppercase tracking-widest border border-white hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>VER PLANES DISPONIBLES</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsult}
              className="h-12 px-8 bg-transparent text-white text-xs font-black uppercase tracking-widest border border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-mono"
            >
              <MessageSquare className="w-4 h-4" />
              <span>[ ASESORÍA VÍA WHATSAPP → ]</span>
            </button>
          </div>

          {/* 4 Cajas de Beneficios para Negocios Locales */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 border border-white/20 bg-black/80 divide-x divide-y md:divide-y-0 divide-white/20 text-left">
            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                VISIBILIDAD LOCAL
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                GOOGLE MAPS
              </span>
              <span className="block text-[10px] text-emerald-400 uppercase mt-1 font-mono">
                • Primero en tu ciudad
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                VENTA DIRECTA
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                WHATSAPP
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Pedidos en 1 solo clic
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TIEMPO DE ENTREGA
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                72 HORAS
              </span>
              <span className="block text-[10px] text-red-500 uppercase mt-1 font-mono">
                • Tu web lista y vendiendo
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TRANSPARENCIA TOTAL
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                TODO INCLUIDO
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Hosting + Sin costos ocultos
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
