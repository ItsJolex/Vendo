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
      <div className="fixed inset-0 bg-emerald-pine/70 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white border-2 border-emerald-pine p-6 text-left shadow-neo-pine-lg">
          <div className="flex items-center justify-between pb-3 border-b-2 border-emerald-pine mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-pine" />
              <h3 className="text-xs font-black uppercase tracking-widest text-emerald-pine font-mono">
                ASESORÍA DIRECTA // WHATSAPP
              </h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-emerald-pine hover:text-white transition-colors">
              <X className="w-5 h-5 text-emerald-pine" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">
            Canal directo. Analizamos tu negocio, te recomendamos la estructura ideal y te garantizamos entrega en 48 a 72 horas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-emerald-pine mb-1">
                TU NOMBRE
              </label>
              <input
                type="text"
                required
                placeholder="NOMBRE COMPLETO"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 px-3 border-2 border-emerald-pine text-xs font-mono focus:outline-none bg-white text-emerald-pine"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-emerald-pine mb-1">
                NOMBRE DE TU MARCA O NEGOCIO
              </label>
              <input
                type="text"
                required
                placeholder="EJ. RESTAURANTE / CONSULTORIO / TIENDA"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full h-10 px-3 border-2 border-emerald-pine text-xs font-mono focus:outline-none bg-white text-emerald-pine"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-emerald-pine mb-1">
                OBJETIVO PRINCIPAL
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full h-10 px-3 border-2 border-emerald-pine text-xs font-mono bg-white text-emerald-pine focus:outline-none"
              >
                <option value="Aparecer en Google Maps y búsqueda local">APARECER EN GOOGLE MAPS Y BÚSQUEDA LOCAL</option>
                <option value="Página web rápida para mi negocio">PÁGINA WEB RÁPIDA PARA MI NEGOCIO</option>
                <option value="Vender con catálogo y pedidos a WhatsApp">VENDER CON CATÁLOGO Y PEDIDOS A WHATSAPP</option>
                <option value="Web corporativa para servicios profesionales">WEB CORPORATIVA PARA SERVICIOS PROFESIONALES</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-neo-terracotta w-full h-11 mt-2 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
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