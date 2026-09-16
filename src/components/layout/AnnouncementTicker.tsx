import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const messages = [
    'DROP 01 ACTIVO // INFRAESTRUCTURA WEB PARA EMPRESAS Y MARCAS',
    'ENTREGA GARANTIZADA EN 48 A 72 HORAS // CÓDIGO ULTRA RÁPIDO (<0.8S)',
    'CUPOS LIMITADOS: SOLO 2 DISPONIBLES ESTA SEMANA',
    '100% SATISFACCIÓN O AJUSTES ILIMITADOS // SOPORTE DIRECTO 1-ON-1',
  ];

  return (
    <div className="bg-black text-white text-[11px] font-bold uppercase tracking-widest py-2 overflow-hidden border-b border-neutral-800 select-none">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-4">
            <span>{msg}</span>
            <span className="text-neutral-500">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
