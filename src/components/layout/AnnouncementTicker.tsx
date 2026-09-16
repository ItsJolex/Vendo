import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const messages = [
    '/// DEPLOY BATCH 2026.04 // SPRINT DE ENTREGA EN 72 HORAS',
    'CÓDIGO ULTRA RÁPIDO (<0.8S) EN EDGE GLOBAL // CORE WEB VITALS 99-100',
    'CUPOS LIMITADOS DE DESARROLLO: SOLO 2 DISPONIBLES ESTA SEMANA',
    'CHECKOUT DIRECTO A WHATSAPP SIN COMISIONES DE TERCEROS',
    'GARANTÍA BLINDADA: RONDAS DE AJUSTES HASTA APROBACIÓN FINAL ///',
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
