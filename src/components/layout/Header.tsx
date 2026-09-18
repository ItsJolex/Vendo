import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Menu, X, ShoppingBag, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenConsult: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsult }) => {
  const { itemCount, openCart } = useCart();
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

          {/* Zona Central: Logotipo Brutalista */}
          <div className="text-center">
            <a href="#top" className="inline-block group">
              <h1 className="text-2xl sm:text-3xl font-black tracking-[0.2em] font-display uppercase leading-none text-emerald-pine">
                VÉNDO<span className="text-emerald-vibrant">®</span>
              </h1>
            </a>
          </div>

          {/* Zona Derecha: Asesoría + Contador de Carrito */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenConsult}
              className="btn-neo-silver hidden sm:inline-flex text-xs font-black uppercase tracking-wider px-3.5 py-1.5 font-mono"
            >
              [ + ASESORÍA ]
            </button>

            <button
              onClick={openCart}
              className="btn-neo-emerald flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 font-mono"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>CARRITO [ {itemCount} ]</span>
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