import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const messages = [
    '/// VÉNDO ® // AGENCIA DE CRECIMIENTO DIGITAL PARA NEGOCIOS LOCALES',
    'HAZ QUE TE ENCUENTREN, HAZ QUE TE COMPREN',
    'PÁGINAS WEB + GOOGLE MAPS + PEDIDOS POR WHATSAPP',
    'PLANES DESDE $49 USD // HOSTING DE ALTA VELOCIDAD INCLUIDO',
    'ENTREGA EN 72 HORAS // ATENCIÓN DIRECTA: +58 414-9428999 ///',
  ];

  return (
    <div className="bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest py-2 overflow-hidden border-b border-neutral-800 select-none">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-4">
            <span>{msg}</span>
            <span className="text-red-600 font-bold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
