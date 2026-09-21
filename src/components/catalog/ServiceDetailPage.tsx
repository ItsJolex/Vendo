import React, { useEffect } from 'react';
import { WebSolution, getServiceConsultationUrl } from '../../types/solution';
import { globalAddons } from '../../data/solutions';
import { ServiceIllustration } from './ServiceIllustration';
import { ArrowLeft, Check, Clock, MessageSquare, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface ServiceDetailPageProps {
  solution: WebSolution;
  onBack: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  solution,
  onBack,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [solution.id]);

  const whatsappUrl = getServiceConsultationUrl(solution.name);

  return (
    <div className="min-h-screen bg-canvas-ice text-black text-left pb-16">
      
      {/* BARRA SUPERIOR DE SUBPÁGINA (STICKY BREADCRUMB) - Debajo del Header global (60px) */}
      <div className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b-2 border-emerald-pine px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono font-black uppercase text-emerald-pine hover:text-emerald-vibrant transition-colors"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>← VOLVER AL CATÁLOGO</span>
          </button>

          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="hidden sm:inline-block text-slate-500">SUBPÁGINA DE SERVICIO //</span>
            <span className="bg-emerald-pine text-white px-2 py-0.5 font-bold uppercase">
              {solution.sku}
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION DE LA SUBPÁGINA */}
      <header className="bg-white border-b-2 border-emerald-pine px-4 sm:px-8 py-8 sm:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Información de Entrada */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="bg-emerald-deep text-white px-2.5 py-1 font-bold uppercase tracking-wider">
                [ SERVICIO ACTIVO ]
              </span>
              <span className="bg-silver-chrome border border-silver-steel px-2.5 py-1 font-bold text-emerald-pine">
                CATEGORÍA: {solution.category.toUpperCase()}
              </span>
              <span className="bg-white border-2 border-emerald-pine px-2.5 py-1 font-black text-emerald-vibrant flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                SLA: {solution.deliveryDays}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-emerald-pine leading-none">
              {solution.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl">
              {solution.tagline}
            </p>

            {/* Cuadro de Perfil Ideal */}
            <div className="p-3.5 bg-canvas-ice border-2 border-emerald-pine text-xs font-mono text-slate-800">
              <strong className="block font-black text-emerald-pine mb-1 uppercase tracking-wider">
                [ PERFIL IDEAL // PARA QUIÉN ES ]
              </strong>
              <span>{solution.idealFor}</span>
            </div>

            {/* Botón Principal de Conversión por Asesoría */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo-emerald min-h-[48px] py-2.5 h-auto text-center leading-snug px-6 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-neo-pine"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>SOLICITAR ASESORÍA Y COTIZACIÓN POR WHATSAPP →</span>
              </a>

              <button
                onClick={onBack}
                className="btn-neo-silver min-h-[48px] py-2.5 h-auto text-center leading-snug px-5 text-xs font-black uppercase tracking-wider flex items-center justify-center"
              >
                EXPLORAR OTROS PLANES
              </button>
            </div>
          </div>

          {/* Columna Derecha: Ilustración Vectorial Ampliada */}
          <div className="lg:col-span-5">
            <div className="border-2 border-emerald-pine shadow-neo-pine bg-white p-2">
              <ServiceIllustration type={solution.illustrationType} size="hero" />
              <div className="p-2 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-600 border-t border-silver-steel">
                <span>BLUEPRINT ID: {solution.sku}</span>
                <span className="font-bold text-emerald-pine">TIEMPO ESTIMADO: 48 - 72H</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DE LA SUBPÁGINA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-12">
        
        {/* BLOQUE 1: DESGLOSE COMPLETO DE LO QUE INCLUYE LA WEB */}
        <section>
          <div className="flex items-center gap-2 pb-2 mb-6 border-b-2 border-emerald-pine">
            <Sparkles className="w-5 h-5 text-emerald-vibrant" />
            <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-wider text-emerald-pine">
              QUÉ INCLUYE EXACTAMENTE ESTA PÁGINA WEB
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.deliverablesSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-pine p-6 shadow-neo-pine"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-silver-steel">
                  <span className="text-xs font-mono font-black text-white bg-emerald-pine px-2 py-0.5">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-wide text-emerald-pine">
                    {sec.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 bg-emerald-pine text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BLOQUE 2: PROTOCOLO DE TIEMPO DE ENTREGA (48H A 72H) */}
        <section className="bg-white border-2 border-emerald-pine p-6 sm:p-8 shadow-neo-pine">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-silver-steel gap-2">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-vibrant block">
                [ SLA COMPROMISO DE VELOCIDAD ]
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-wider text-emerald-pine">
                CRONOGRAMA DE ENTREGA: 48 A 72 HORAS
              </h2>
            </div>
            <span className="bg-emerald-pine text-white px-3 py-1 font-mono text-xs font-bold uppercase self-start sm:self-auto">
              DESPLIEGUE ÁGIL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.timelineSteps.map((step) => (
              <div
                key={step.step}
                className="border-2 border-silver-steel p-4 bg-canvas-ice flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-black mb-2">
                    <span className="text-emerald-pine">PASO {step.step}</span>
                    <span className="text-emerald-vibrant">{step.time}</span>
                  </div>
                  <h4 className="text-sm font-black uppercase text-emerald-pine mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOQUE 3: MODELO DE INVERSIÓN & HOSTING TRANSPARENTE */}
        <section className="bg-emerald-pine text-white p-6 sm:p-8 border-2 border-emerald-pine shadow-neo-pine">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-vibrant block mb-1">
              [ COTIZACIÓN TRANSPARENTE // INFRAESTRUCTURA REAL ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight mb-3">
              ¿CÓMO FUNCIONA LA INVERSIÓN Y EL HOSTING?
            </h3>
            <p className="text-xs sm:text-sm text-silver-chrome leading-relaxed mb-6 font-medium">
              No cobramos tarifas fijas infladas. Evaluamos el tamaño y módulos que necesita tu negocio y te entregamos un presupuesto exacto de desarrollo en minutos por WhatsApp. El desarrollo incluye tu **primer mes (30 días) de hosting de alta velocidad completamente gratis**. A partir del segundo mes, el hosting gestionado y soporte en servidores Vercel Pro es de solo **$10 a $13 USD al mes**, asegurando que tu página cargue en menos de 0.8s y nunca se caiga.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-silver-steel mb-6">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-vibrant" />
                Cero comisiones por ventas
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-vibrant" />
                1er Mes Hosting $0 (Luego $10-$13/mes)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-vibrant" />
                Entrega en 48-72h
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-pine hover:bg-canvas-ice px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#187E5F] transition-transform active:translate-x-0.5 active:translate-y-0.5 font-mono"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>RECIBIR ASESORÍA Y COTIZACIÓN POR WHATSAPP →</span>
            </a>
          </div>
        </section>

        {/* BLOQUE 4: ADITAMENTOS OPCIONALES */}
        <section className="bg-white border-2 border-emerald-pine p-6 shadow-neo-pine">
          <h3 className="text-lg font-black font-display uppercase tracking-wider text-emerald-pine mb-1">
            COMPLEMENTOS OPCIONALES DISPONIBLES
          </h3>
          <p className="text-xs text-slate-600 mb-6">
            Aditamentos que puedes sumar a tu página web para potenciar tu presencia física y digital:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalAddons.map((addon) => (
              <div key={addon.id} className="border border-silver-steel p-3.5 bg-canvas-ice flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-vibrant block mb-1">
                    {addon.tag || 'COMPLEMENTO'}
                  </span>
                  <h4 className="text-xs font-black uppercase text-emerald-pine mb-1.5">
                    {addon.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* CTA FIJO EN LA PARTE INFERIOR PARA MÓVILES */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t-2 border-emerald-pine p-3 shadow-neo-pine pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neo-emerald w-full h-11 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>COTIZAR EN WHATSAPP (48-72H)</span>
        </a>
      </div>

    </div>
  );
};