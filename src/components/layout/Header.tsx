import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenConsult: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsult }) => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-canvas-card border-b-2 border-emerald-pine text-emerald-pine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
          
          {/* Zona Izquierda: Menú Hamburguesa + Moneda */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLeftMenuOpen(true)}
              className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest hover:opacity-70 transition-opacity"
              aria-label="Abrir menú"
            >
              <Menu className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">MENÚ</span>
            </button>
            <span className="text-[11px] font-mono text-silver-metallic hidden md:inline">
              [ USD / LATAM ]
            </span>
          </div>

          {/* Zona Central: Logotipo Brutalista con Isotipo */}
          <div className="text-center">
            <a href="#top" className="inline-flex items-center gap-2 group">
              {/* Isotipo SVG Oficial */}
              <div className="w-7 h-7 bg-emerald-pine border-2 border-emerald-pine flex items-center justify-center shadow-neo-pine group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
                  <path d="M22 28 L36 28 L50 68 L36 68 Z" fill="#FFFFFF" />
                  <path d="M44 68 L68 28 L56 28 L38 68 Z" fill="#187E5F" />
                  <polygon points="68,16 82,34 54,34" fill="#187E5F" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-[0.2em] font-display uppercase leading-none text-emerald-pine">
                VÉNDO<span className="text-emerald-vibrant">®</span>
              </h1>
            </a>
          </div>

          {/* Zona Derecha: Asesoría */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenConsult}
              className="btn-neo-emerald hidden sm:inline-flex text-xs font-black uppercase tracking-wider px-3.5 py-1.5 font-mono"
            >
              [ + ASESORÍA ]
            </button>
          </div>

        </div>
      </header>

      {/* Drawer Lateral Izquierdo de Navegación (0px radius) */}
      {leftMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-emerald-pine/70 transition-opacity"
            onClick={() => setLeftMenuOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-canvas-card h-full p-6 flex flex-col justify-between z-10 border-r-2 border-emerald-pine shadow-neo-pine animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-emerald-pine mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-pine">
                  NAVEGACIÓN // VÉNDO
                </span>
                <button
                  onClick={() => setLeftMenuOpen(false)}
                  className="p-1 hover:bg-emerald-pine hover:text-white transition-colors"
                >
                  <X className="w-5 h-5 text-emerald-pine" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4 text-sm font-extrabold uppercase tracking-wider">
                <a
                  href="#catalogo"
                  onClick={() => setLeftMenuOpen(false)}
                  className="py-1 border-b border-silver-steel hover:pl-2 transition-all flex items-center justify-between text-emerald-pine"
                >
                  <span>Catálogo de Soluciones</span>
                  <span className="text-xs text-silver-metallic">[04]</span>
                </a>
                <a
                  href="#especificaciones"
                  onClick={() => setLeftMenuOpen(false)}
                  className="py-1 border-b border-silver-steel hover:pl-2 transition-all flex items-center justify-between text-emerald-pine"
                >
                  <span>Ficha Técnica & Velocidad</span>
                  <span className="text-xs text-silver-metallic">[0.8s]</span>
                </a>
                <a
                  href="#proceso"
                  onClick={() => setLeftMenuOpen(false)}
                  className="py-1 border-b border-silver-steel hover:pl-2 transition-all flex items-center justify-between text-emerald-pine"
                >
                  <span>Protocolo de Entrega</span>
                  <span className="text-xs text-silver-metallic">[48-72H]</span>
                </a>
                <a
                  href="#faq"
                  onClick={() => setLeftMenuOpen(false)}
                  className="py-1 border-b border-silver-steel hover:pl-2 transition-all flex items-center justify-between text-emerald-pine"
                >
                  <span>Garantía & Preguntas</span>
                  <span className="text-xs text-silver-metallic">[FAQ]</span>
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t-2 border-emerald-pine space-y-3">
              <button
                onClick={() => {
                  setLeftMenuOpen(false);
                  onOpenConsult();
                }}
                className="btn-neo-emerald w-full py-3 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 font-mono"
              >
                <MessageSquare className="w-4 h-4" />
                <span>INICIAR BRIEF TÉCNICO</span>
              </button>
              <p className="text-[10px] font-mono text-silver-metallic text-center uppercase">
                ESTRUCTURA DE ALTA CONVERSIÓN
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};