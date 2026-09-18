import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const messages = [
    '/// VÉNDO 2.0 // AGENCIA DE CRECIMIENTO DIGITAL PARA NEGOCIOS LOCALES',
    'HAZ QUE TE ENCUENTREN, HAZ QUE TE COMPREN',
    'PÁGINAS WEB + GOOGLE MAPS + PEDIDOS POR WHATSAPP',
    'COTIZACIONES A MEDIDA // 1ER MES DE HOSTING INCLUIDO (LUEGO $10-$13/MES)',
    'ENTREGA EN 48 A 72 HORAS // ATENCIÓN DIRECTA: +58 414-9428999 ///',
  ];

  return (
    <div className="bg-emerald-pine text-white text-[10px] font-mono font-bold uppercase tracking-widest py-2.5 overflow-hidden border-b-2 border-emerald-deep select-none">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-4">
            <span className="text-white tracking-wider">{msg}</span>
            <span className="text-emerald-vibrant font-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};