import React from 'react';
import { ArrowUp, ShieldCheck, Lock, Cpu } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
    'PÁGINAS WEB RÁPIDAS',
    'GOOGLE MAPS LOCAL',
    'WHATSAPP BUSINESS',
    'HOSTING DE ALTA VELOCIDAD',
    'DISEÑO 100% PARA MÓVIL',
    'ENTREGA EN 72 HORAS',
    'CERO COSTOS OCULTOS',
    'ATENCIÓN: +58 414-9428999',
  ];

  const whatsappFooterUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero iniciar el diseño de la página web para mi negocio local.'
  );

  return (
    <footer className="bg-emerald-pine text-white border-t-2 border-emerald-deep text-left">
      {/* Ticker de Stack Tecnológico de Alto Rendimiento */}
      <div className="border-b-2 border-emerald-deep bg-emerald-deep py-3 overflow-hidden select-none">
        <div className="flex w-max animate-ticker whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-silver-chrome">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((item, idx) => (
            <span key={idx} className="mx-4 flex items-center gap-3">
              <span>{item}</span>
              <span className="text-emerald-vibrant font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b-2 border-emerald-deep">
          
          {/* Logo y Manifiesto */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-3xl font-black tracking-[0.2em] font-display uppercase text-white">
              VÉNDO<span className="text-silver-steel">®</span>
            </h3>
            <p className="text-xs text-silver-chrome max-w-sm uppercase font-medium leading-relaxed">
              Agencia de crecimiento digital para negocios locales. 
              Creamos páginas web, optimizamos Google Maps y ordenamos WhatsApp para que vendas más en tu ciudad.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-silver-chrome pt-2">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-white" /> CERO COSTOS OCULTOS
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-white" /> HOSTING INCLUIDO
              </span>
              <span className="flex items-center gap-1 text-emerald-vibrant font-bold">
                <Cpu className="w-3.5 h-3.5" /> ENTREGA EN 72H
              </span>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-silver-steel mb-3 font-mono">
              SOLUCIONES //
            </h4>
            <ul className="space-y-2 text-xs font-mono text-silver-chrome">
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] PÁGINAS WEB LOCALES</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] CATÁLOGOS & WHATSAPP</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] WEBS CORPORATIVAS</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] EMBUDOS DE ANUNCIOS</a></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-silver-steel mb-3 font-mono">
              ATENCIÓN & WHATSAPP //
            </h4>
            <p className="text-xs text-silver-chrome mb-3 font-medium font-mono">
              Directo: +58 414-9428999<br />
              Lunes a Sábado: 8:00 AM - 8:00 PM.
            </p>
            <a
              href={whatsappFooterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo-silver inline-block px-4 py-2 text-xs font-black uppercase tracking-wider font-mono"
            >
              [ CONTACTAR POR WHATSAPP → ]
            </a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-silver-metallic">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-vibrant inline-block animate-pulse" />
            <span>© {new Date().getFullYear()} VÉNDO ® // AGENCIA DE CRECIMIENTO DIGITAL LOCAL.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-silver-metallic hover:text-white transition-colors uppercase font-bold"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};