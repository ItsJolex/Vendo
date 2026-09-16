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
    <aside aria-label="Acciones móviles" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black p-2.5">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono font-bold uppercase text-red-600">
            [ CUPOS LIMITADOS ]
          </span>
          <span className="text-xs font-black font-mono text-black">
            DESDE $289 USD
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenConsult}
            className="h-9 px-3 border border-black bg-white text-black text-xs font-bold uppercase flex items-center justify-center"
            aria-label="Asesoría WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreCatalog}
            className="h-9 px-4 bg-black text-white text-[11px] font-black uppercase tracking-wider border border-black flex items-center gap-1.5 active:bg-neutral-800"
          >
            <span>CATÁLOGO</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
