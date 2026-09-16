import React from 'react';
import { ArrowUp, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-black pt-14 pb-14 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          
          {/* Logo y Manifiesto */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-3xl font-black tracking-[0.2em] font-display uppercase">
              VÉNDO<span className="text-red-600">®</span>
            </h3>
            <p className="text-xs text-neutral-400 max-w-sm uppercase font-medium leading-relaxed">
              Infraestructura web de alto rendimiento y arquitectura de corte recto. 
              Desarrollamos motores digitales para marcas y empresas que buscan facturar sin complicaciones.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-400 pt-2">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-white" /> COBROS 100% SEGUROS
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-white" /> GARANTÍA DE SATISFACCIÓN
              </span>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-3">
              SOLUCIONES
            </h4>
            <ul className="space-y-2 text-xs font-mono text-neutral-400">
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] LANDING PAGES CRO</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] E-COMMERCE PRO</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] WEBS CORPORATIVAS</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] EMBUDOS DE VENTA</a></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-3">
              ATENCIÓN INMEDIATA
            </h4>
            <p className="text-xs text-neutral-400 mb-3 font-medium">
              Horario de atención técnica y soporte: Lunes a Sábado, 8:00 AM - 8:00 PM.
            </p>
            <a
              href="https://wa.me/?text=Hola%20VÉNDO,%20necesito%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-black text-xs font-black uppercase tracking-wider border border-white hover:bg-neutral-200"
            >
              [ CHATEAR POR WHATSAPP ]
            </a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} VÉNDO ® // TODOS LOS DERECHOS RESERVADOS. SHARP EDITION.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors uppercase font-bold"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
