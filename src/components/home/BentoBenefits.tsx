import React from 'react';
import { Smartphone, ShoppingBag, Gauge, Sparkles, MessageCircle } from 'lucide-react';

export const BentoBenefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-12 sm:py-20 bg-[#FAFAFA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
            La Ventaja VÉNDO
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-2">
            No vendemos código. Construimos tu canal de ventas más rentable.
          </h2>
          <p className="text-sm text-[#64748B] mt-3">
            La mayoría de las webs fallan porque son lentas, difíciles de navegar o no inspiran confianza. 
            Así es como cambiamos las reglas del juego:
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Tarjeta 1 (Grande, 2 columnas en desktop) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-black/20 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">Rendimiento Extremo</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 mb-3">
                Carga inferior a 1 segundo. Cero clientes perdidos por lentitud.
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-xl">
                Google penaliza y los usuarios abandonan las páginas que tardan más de 2.5 segundos. 
                Nuestras plataformas están construidas sobre infraestructura moderna en la nube con puntuaciones de 95+ en Google PageSpeed.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-[#FAFAFA] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-black text-[#111111]">&lt; 0.8s</p>
                <p className="text-[10px] text-slate-500 font-medium">Tiempo de Carga</p>
              </div>
              <div className="bg-[#FAFAFA] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-black text-emerald-600">99/100</p>
                <p className="text-[10px] text-slate-500 font-medium">Google Core Vitals</p>
              </div>
              <div className="bg-[#FAFAFA] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-black text-[#2563EB]">-62%</p>
                <p className="text-[10px] text-slate-500 font-medium">Tasa de Rebote</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Mobile-First */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-black/20 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Experiencia App-Like</span>
              <h3 className="text-xl font-bold text-[#111111] mt-1 mb-2">
                Pensado 100% para celulares
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Más del 80% de tus clientes llegarán desde Instagram, TikTok o anuncios en el móvil. Diseñamos con botones táctiles grandes, menús deslizantes y cero fricción.
              </p>
            </div>

            <div className="mt-6 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-emerald-950">
                Gestos táctiles y transiciones instantáneas
              </span>
            </div>
          </div>

          {/* Tarjeta 3: Conversión a WhatsApp */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-black/20 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#111111] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">Cierre en Caliente</span>
              <h3 className="text-xl font-bold text-[#111111] mt-1 mb-2">
                WhatsApp Directo Prellenado
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Los clientes no quieren llenar formularios infinitos. Con 1 clic te envían un mensaje directo sabiendo exactamente qué producto o servicio quieren.
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-500 font-mono bg-[#FAFAFA] p-3 rounded-xl border border-slate-200">
              "Hola, vi tu web y quiero comprar el pack..."
            </div>
          </div>

          {/* Tarjeta 4: Pasarelas de Pago listas */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-black/20 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">Checkout Seguro</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1">
                  Cobros automatizados con tarjetas locales e internacionales
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              Conectamos tus cuentas oficiales de Stripe, Mercado Pago, PayPal o transferencias bancarias directas para que el dinero entre directamente a tu cuenta bancaria sin intermediarios.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-slate-200">Visa / Mastercard</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-slate-200">Mercado Pago</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-slate-200">Stripe</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-slate-200">PSE / OXXO / Bizum</span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">0% Comisión VÉNDO</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
