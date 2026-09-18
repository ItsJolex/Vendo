import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenConsult: () => void;
  onExploreCatalog: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenConsult,
  onExploreCatalog,
}) => {
  return (
    <aside aria-label="Acciones móviles" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-emerald-pine p-2.5 shadow-neo-pine-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono font-bold uppercase text-emerald-vibrant">
            [ 1ER MES HOSTING INCLUIDO ]
          </span>
          <span className="text-xs font-black font-mono text-emerald-pine">
            DESDE $49 USD
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenConsult}
            className="btn-neo-silver h-9 px-3 text-xs font-bold uppercase flex items-center justify-center"
            aria-label="Asesoría WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-emerald-pine" />
          </button>

          <button
            onClick={onExploreCatalog}
            className="btn-neo-emerald h-9 px-4 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>CATÁLOGO</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};