import React, { useState } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [need, setNeed] = useState('Aparecer en Google Maps y búsqueda local');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `¡Hola equipo VÉNDO! 🚀\nMi nombre es *${name}* de *${business || 'Nuevo Proyecto'}*.\nObjetivo de mi negocio: *${need}*.\n\nQuiero información para activar mi página web y aparecer en Google Maps.`;
    window.open(getWhatsAppUrl(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white border border-black p-6 text-left shadow-none">
          <div className="flex items-center justify-between pb-3 border-b border-black mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-black" />
              <h3 className="text-xs font-black uppercase tracking-widest text-black font-mono">
                ASESORÍA DIRECTA // WHATSAPP
              </h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-black hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-neutral-600 mb-4 font-medium leading-relaxed">
            Canal directo. Analizamos tu negocio, te recomendamos el plan ideal y te damos fecha de entrega en 72h.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-black mb-1">
                TU NOMBRE
              </label>
              <input
                type="text"
                required
                placeholder="NOMBRE COMPLETO"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 px-3 border border-black text-xs font-mono focus:outline-none bg-white text-black"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-black mb-1">
                NOMBRE DE TU MARCA O NEGOCIO
              </label>
              <input
                type="text"
                required
                placeholder="EJ. RESTAURANTE / CONSULTORIO / TIENDA"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full h-10 px-3 border border-black text-xs font-mono focus:outline-none bg-white text-black"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-black mb-1">
                OBJETIVO PRINCIPAL
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full h-10 px-3 border border-black text-xs font-mono bg-white text-black focus:outline-none"
              >
                <option value="Aparecer en Google Maps y búsqueda local">APARECER EN GOOGLE MAPS Y BÚSQUEDA LOCAL</option>
                <option value="Página web rápida para mi negocio">PÁGINA WEB RÁPIDA PARA MI NEGOCIO</option>
                <option value="Vender con catálogo y pedidos a WhatsApp">VENDER CON CATÁLOGO Y PEDIDOS A WHATSAPP</option>
                <option value="Web corporativa para servicios profesionales">WEB CORPORATIVA PARA SERVICIOS PROFESIONALES</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-11 mt-2 bg-black text-white text-xs font-black uppercase tracking-widest border border-black hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>CONECTAR POR WHATSAPP AHORA</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
