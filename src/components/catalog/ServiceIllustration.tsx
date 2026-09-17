import React from 'react';
import { IllustrationType } from '../../types/solution';

interface ServiceIllustrationProps {
  type: IllustrationType;
  className?: string;
  size?: 'card' | 'hero';
}

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({
  type,
  className = '',
  size = 'card',
}) => {
  const isHero = size === 'hero';

  return (
    <div
      className={`relative w-full overflow-hidden bg-canvas-ice select-none flex items-center justify-center ${
        isHero ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[1/1]'
      } ${className}`}
    >
      {/* Cruces industriales blueprint en las 4 esquinas */}
      <span className="absolute top-1.5 left-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute top-1.5 right-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-1.5 left-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-1.5 right-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>

      {/* Marca de agua de código y coordenadas técnicas */}
      <div className="absolute top-2 left-6 text-[8px] font-mono text-slate-400 tracking-wider uppercase pointer-events-none">
        GRID // SYS-0{type === 'local-web' ? '1' : type === 'catalog-whatsapp' ? '2' : type === 'corporate' ? '3' : '4'} // 48-72H
      </div>

      {/* Cuadrícula técnica sutil de fondo */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00381F 1px, transparent 1px),
            linear-gradient(to bottom, #00381F 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ILUSTRACIÓN 1: PÁGINA WEB ESENCIAL LOCAL */}
      {type === 'local-web' && (
        <div className="relative w-[82%] h-[78%] flex items-center justify-center">
          {/* Teléfono Vectorial */}
          <div className="relative w-36 sm:w-44 h-full bg-white border-2 border-emerald-pine shadow-neo-pine flex flex-col justify-between p-2">
            {/* Cabecera del teléfono */}
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-pine/30">
              <div className="w-1.5 h-1.5 bg-emerald-pine" />
              <div className="h-1.5 w-12 bg-silver-chrome border border-emerald-pine/40" />
              <span className="text-[7px] font-mono font-bold text-emerald-pine">4G</span>
            </div>

            {/* Contenido interior de la web */}
            <div className="flex-1 my-2 flex flex-col gap-1.5 justify-center">
              {/* Bloque de Hero */}
              <div className="h-6 bg-emerald-deep/10 border border-emerald-pine/30 p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-deep" />
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="h-1 w-full bg-emerald-pine/70" />
                  <div className="h-1 w-2/3 bg-emerald-pine/40" />
                </div>
              </div>

              {/* Pin de Google Maps estilizado */}
              <div className="bg-white border-2 border-emerald-pine p-1 flex items-center justify-between shadow-[2px_2px_0px_#00381F]">
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-emerald-vibrant fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-[8px] font-mono font-bold text-emerald-pine">MAPS // LOCAL</span>
                </div>
                <span className="w-1.5 h-1.5 bg-emerald-vibrant animate-ping" />
              </div>

              {/* Burbuja / Botón de WhatsApp */}
              <div className="bg-emerald-deep text-white p-1 border border-emerald-pine flex items-center justify-center gap-1 shadow-[2px_2px_0px_#00381F]">
                <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                <span className="text-[8px] font-mono font-black uppercase tracking-wider">WHATSAPP DIRECT</span>
              </div>
            </div>

            {/* Barra inferior */}
            <div className="pt-1 border-t border-emerald-pine/30 flex justify-center">
              <div className="w-8 h-1 bg-emerald-pine" />
            </div>
          </div>

          {/* Badge lateral plateado flotante */}
          <div className="absolute -bottom-2 -right-1 sm:right-2 bg-silver-chrome border-2 border-emerald-pine px-2 py-1 shadow-neo-pine text-[8px] font-mono font-bold text-emerald-pine">
            SLA: 48-72H
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 2: CATÁLOGO & PEDIDOS POR WHATSAPP */}
      {type === 'catalog-whatsapp' && (
        <div className="relative w-[84%] h-[80%] flex items-center justify-center">
          {/* Matriz de Catálogo */}
          <div className="w-full max-w-[210px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1.5">
            {/* Header del catálogo */}
            <div className="flex items-center justify-between pb-1 border-b border-emerald-pine text-[8px] font-mono font-bold text-emerald-pine">
              <span>CATÁLOGO // 0% FEES</span>
              <span className="bg-emerald-pine text-white px-1">[ ACTIVO ]</span>
            </div>

            {/* Grid 2x2 de productos abstractos */}
            <div className="grid grid-cols-2 gap-1.5 my-1">
              {[1, 2].map((i) => (
                <div key={i} className="border border-emerald-pine p-1 bg-canvas-ice flex flex-col gap-1">
                  <div className="h-7 bg-silver-chrome border border-silver-steel flex items-center justify-center">
                    <div className="w-3 h-3 border border-emerald-pine/50 rotate-45" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-8 bg-emerald-pine/80" />
                    <span className="text-[7px] font-mono text-emerald-deep font-bold">+</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Barra de Checkout de WhatsApp */}
            <div className="bg-emerald-pine text-white p-1.5 border border-emerald-pine flex items-center justify-between text-[8px] font-mono">
              <span className="font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white inline-block" /> CARRITO
              </span>
              <span className="bg-white text-emerald-pine font-black px-1.5 py-0.2">
                PEDIR VIA WA &rarr;
              </span>
            </div>
          </div>

          {/* Badge flotante de 0 comisiones */}
          <div className="absolute -top-1 -right-2 bg-white border-2 border-emerald-pine px-1.5 py-0.5 shadow-[2px_2px_0px_#00381F] text-[8px] font-mono font-bold text-emerald-vibrant">
            0% COMISIONES
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 3: WEB CORPORATIVA & AUTORIDAD */}
      {type === 'corporate' && (
        <div className="relative w-[86%] h-[80%] flex items-center justify-center">
          {/* Pantalla Desktop Blueprint */}
          <div className="w-full max-w-[220px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1.5">
            {/* Barra de ventana browser */}
            <div className="flex items-center justify-between pb-1 border-b border-emerald-pine">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-pine" />
                <span className="w-1.5 h-1.5 bg-silver-steel" />
                <span className="w-1.5 h-1.5 bg-silver-chrome" />
              </div>
              <span className="text-[7px] font-mono text-emerald-pine font-bold">HTTPS // SSL CERTIFIED</span>
            </div>

            {/* Layout corporativo institucional */}
            <div className="flex gap-1.5 items-stretch my-1">
              {/* Columna izquierda: Presentación ejecutiva */}
              <div className="w-3/5 bg-canvas-ice border border-silver-steel p-1.5 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-2 w-3/4 bg-emerald-pine" />
                  <div className="h-1 w-full bg-slate-300" />
                  <div className="h-1 w-4/5 bg-slate-300" />
                </div>
                <div className="h-3 w-1/2 bg-silver-chrome border border-emerald-pine mt-2 flex items-center justify-center">
                  <span className="text-[6px] font-mono font-bold text-emerald-pine">B2B LEAD</span>
                </div>
              </div>

              {/* Columna derecha: Sello de autoridad */}
              <div className="w-2/5 bg-emerald-deep text-white border border-emerald-pine p-1 flex flex-col items-center justify-center text-center">
                <div className="w-6 h-6 border border-white flex items-center justify-center mb-1">
                  <span className="text-[8px] font-mono font-black">★</span>
                </div>
                <span className="text-[6px] font-mono uppercase leading-tight font-bold">
                  AUTORIDAD & CONFIANZA
                </span>
              </div>
            </div>

            {/* Métricas de Uptime */}
            <div className="flex justify-between items-center pt-1 border-t border-silver-steel text-[7px] font-mono text-slate-600">
              <span>UPTIME: 99.9%</span>
              <span className="text-emerald-pine font-bold">[ ENTREGA: 48-72H ]</span>
            </div>
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 4: EMBUDO DE ANUNCIOS (ADS CRO) */}
      {type === 'funnel' && (
        <div className="relative w-[84%] h-[80%] flex items-center justify-center">
          {/* Arquitectura de Embudo */}
          <div className="w-full max-w-[210px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1">
            {/* Entrada de tráfico */}
            <div className="bg-silver-chrome border border-emerald-pine p-1 flex items-center justify-between text-[7px] font-mono font-bold text-emerald-pine">
              <span>TRÁFICO: ADS // IG // TIKTOK</span>
              <span className="text-emerald-vibrant">100% MÓVIL</span>
            </div>

            {/* Flujo de embudo */}
            <div className="flex flex-col items-center py-1 gap-1">
              <div className="w-full h-4 bg-emerald-pine/10 border border-emerald-pine flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-emerald-pine">1. GANCHO VISUAL DIRECTO</span>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emerald-pine" />
              <div className="w-4/5 h-4 bg-emerald-pine/20 border border-emerald-pine flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-emerald-pine">2. OFERTA & PRUEBA SOCIAL</span>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emerald-pine" />
              <div className="w-3/5 h-5 bg-emerald-deep text-white border-2 border-emerald-pine flex items-center justify-center shadow-[2px_2px_0px_#00381F]">
                <span className="text-[8px] font-mono font-black tracking-wider">WHATSAPP / LEAD</span>
              </div>
            </div>

            {/* Métrica de velocidad */}
            <div className="pt-1 border-t border-emerald-pine flex items-center justify-between text-[7px] font-mono font-bold">
              <span className="text-emerald-vibrant">{'VELOCIDAD: <0.8s'}</span>
              <span className="text-emerald-pine">[ 48-72H ]</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};