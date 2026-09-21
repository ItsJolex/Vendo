import React, { useState } from 'react';
import { X, FileText, MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE, getWhatsAppUrl } from '../../types/solution';

export type LegalTab = 'terms' | 'hosting' | 'ip' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  const whatsappLegalUrl = getWhatsAppUrl(
    'Hola VÉNDO, tengo una consulta sobre los Términos y Condiciones o el servicio de Hosting de mi proyecto web.'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-emerald-pine/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-3xl bg-white border-2 border-emerald-pine p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto shadow-neo-pine-lg flex flex-col justify-between">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b-2 border-emerald-pine mb-5">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-pine" />
                <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-widest text-emerald-pine">
                  MARCO LEGAL & TÉRMINOS // VÉNDO ®
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-emerald-pine hover:text-white transition-colors border border-emerald-pine"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pestañas Selectoras */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6 border-b-2 border-silver-steel pb-4">
              <button
                onClick={() => setActiveTab('terms')}
                className={`p-2 text-[10px] font-mono font-black uppercase text-center border-2 transition-all ${
                  activeTab === 'terms'
                    ? 'bg-emerald-pine text-white border-emerald-pine shadow-neo-pine'
                    : 'bg-canvas-ice text-emerald-pine border-silver-steel hover:border-emerald-pine'
                }`}
              >
                [01] TÉRMINOS & SLA
              </button>
              <button
                onClick={() => setActiveTab('hosting')}
                className={`p-2 text-[10px] font-mono font-black uppercase text-center border-2 transition-all ${
                  activeTab === 'hosting'
                    ? 'bg-emerald-pine text-white border-emerald-pine shadow-neo-pine'
                    : 'bg-canvas-ice text-emerald-pine border-silver-steel hover:border-emerald-pine'
                }`}
              >
                [02] HOSTING ($10-$13)
              </button>
              <button
                onClick={() => setActiveTab('ip')}
                className={`p-2 text-[10px] font-mono font-black uppercase text-center border-2 transition-all ${
                  activeTab === 'ip'
                    ? 'bg-emerald-pine text-white border-emerald-pine shadow-neo-pine'
                    : 'bg-canvas-ice text-emerald-pine border-silver-steel hover:border-emerald-pine'
                }`}
              >
                [03] DERECHOS & IP
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`p-2 text-[10px] font-mono font-black uppercase text-center border-2 transition-all ${
                  activeTab === 'privacy'
                    ? 'bg-emerald-pine text-white border-emerald-pine shadow-neo-pine'
                    : 'bg-canvas-ice text-emerald-pine border-silver-steel hover:border-emerald-pine'
                }`}
              >
                [04] PRIVACIDAD & DATOS
              </button>
            </div>

            {/* CONTENIDO DE PESTAÑA 1: TÉRMINOS GENERALES Y SLA */}
            {activeTab === 'terms' && (
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
                <div className="bg-canvas-ice p-3 border-l-4 border-emerald-pine font-mono text-[11px]">
                  <strong>RESUMEN:</strong> VÉNDO es un servicio ágil de desarrollo web y optimización digital para comercios locales. Cumplimos un protocolo estricto de entrega técnica en 48 a 72 horas condicionado a la entrega del material del cliente.
                </div>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  1. Alcance del Desarrollo y Compromiso de Entrega (48 a 72 Horas)
                </h4>
                <p>
                  El plazo de entrega garantizado (48 a 72 horas hábiles) comienza formalmente a computarse una vez que el cliente haya consignado la totalidad de la información básica requerida: logotipo, catálogo o lista de productos/servicios con precios, números de contacto y ubicación de Google Maps.
                </p>
                <p>
                  Cualquier demora por parte del cliente en suministrar este material o en dar visto bueno a revisiones intermedias postergará proporcionalmente la fecha de entrega final, sin que ello constituya incumplimiento por parte de VÉNDO.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  2. Revisiones y Aprobación
                </h4>
                <p>
                  Antes del lanzamiento definitivo, se proporciona al cliente un enlace privado de previsualización para realizar revisiones de textos, números telefónicos y productos. Una vez otorgada la aprobación final y publicado el sitio web en su dominio definitivo, cualquier modificación estructural o adición sustancial de páginas será cotizada como un requerimiento adicional.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  3. Exención de Garantía Comercial
                </h4>
                <p>
                  VÉNDO garantiza al 100% el rendimiento técnico del sitio web (velocidad de carga inferior a 0.8s, disponibilidad en servidores, enlaces directos a WhatsApp funcionales e indexación de Google Maps). No obstante, VÉNDO no garantiza ni se hace responsable por cifras de ventas, facturación o número de prospectos, ya que dichos resultados dependen exclusivamente de la oferta comercial, precios, atención al cliente y demanda del mercado del negocio del cliente.
                </p>
              </div>
            )}

            {/* CONTENIDO DE PESTAÑA 2: POLÍTICA DE HOSTING Y PAGOS MENSUALES */}
            {activeTab === 'hosting' && (
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
                <div className="bg-emerald-pine text-white p-3 border-l-4 border-emerald-vibrant font-mono text-[11px]">
                  <strong>POLÍTICA DE HOSTING GESTIONADO:</strong> El desarrollo incluye el 1er mes cubierto al 100%. A partir del segundo mes, el hosting y mantenimiento tiene una cuota fija accesible de entre $10 y $13 USD mensuales.
                </div>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  1. ¿Por qué existe una cuota de hosting mensual?
                </h4>
                <p>
                  Para garantizar que tu sitio web no se caiga nunca y cargue en menos de 0.8 segundos, VÉNDO aloja todos los proyectos en infraestructura de clase mundial (Vercel Pro CDN con distribución global) y utiliza herramientas avanzadas de ingeniería e inteligencia artificial. Estos servidores conllevan costos de suscripción mensual fijos.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  2. Cuota mensual accesible ($10 a $13 USD/mes)
                </h4>
                <p>
                  El cliente dispone del **primer mes (30 días) completamente cubierto** con el pago del desarrollo web. A partir del día 31, el cliente abona una cuota de mantenimiento y hosting de entre **$10 y $13 USD mensuales** (dependiendo del volumen de tráfico y de las funcionalidades del catálogo). Esta cuota incluye:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-slate-800">
                  <li>Servidores Vercel Pro con 99.9% de Uptime garantizado.</li>
                  <li>Certificado de seguridad SSL (HTTPS) con renovación automática.</li>
                  <li>Monitoreo de caídas y copias de seguridad continuas.</li>
                  <li>Soporte técnico directo para ajustes menores de contacto o precios.</li>
                </ul>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  3. Plazos de Pago y Política de Suspensión por Mora
                </h4>
                <p>
                  El pago del hosting se realiza en los primeros 5 días de cada ciclo mensual. En caso de mora superior a 7 días continuos sin notificación, el servicio de alojamiento web se suspenderá temporalmente, mostrándose una página de mantenimiento. Los archivos y la estructura del proyecto se resguardan intactos por 60 días para su reactivación una vez regularizado el pago.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  4. Libertad y Propiedad del Código
                </h4>
                <p>
                  Si el cliente prefiere en cualquier momento contratar y administrar su propio hosting por cuenta propia, tiene derecho a solicitar la entrega del código fuente de su sitio web, cesando en ese instante la cuota mensual y la responsabilidad de soporte de VÉNDO.
                </p>
              </div>
            )}

            {/* CONTENIDO DE PESTAÑA 3: PROPIEDAD INTELECTUAL */}
            {activeTab === 'ip' && (
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
                <div className="bg-canvas-ice p-3 border-l-4 border-emerald-pine font-mono text-[11px]">
                  <strong>RESPONSABILIDAD DEL CLIENTE:</strong> El cliente certifica que posee los derechos legales de todas las imágenes, marcas y contenidos entregados para la elaboración de la web.
                </div>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  1. Titularidad del Material Suministrado
                </h4>
                <p>
                  El cliente declara bajo su exclusiva responsabilidad que es legítimo titular o cuenta con las debidas autorizaciones y licencias para el uso de todas las marcas comerciales, logotipos, fotografías, catálogos, menús y textos que provea a VÉNDO para ser incorporados en el sitio web.
                </p>
                <p>
                  VÉNDO queda totalmente exento de cualquier responsabilidad civil, penal o comercial derivada de reclamaciones de terceros por plagio, violación de derechos de autor, usurpación de marca o uso indebido de imágenes proporcionadas por el cliente.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  2. Portafolio Comercial
                </h4>
                <p>
                  VÉNDO se reserva el derecho de mostrar el enlace del sitio web y capturas del trabajo realizado en su sección de portafolio público y redes sociales como muestra de credenciales técnicas, salvo manifestación expresa por escrito en contrario por parte del cliente.
                </p>
              </div>
            )}

            {/* CONTENIDO DE PESTAÑA 4: PRIVACIDAD Y CONTACTO */}
            {activeTab === 'privacy' && (
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
                <div className="bg-canvas-ice p-3 border-l-4 border-emerald-pine font-mono text-[11px]">
                  <strong>PROTECCIÓN DE DATOS:</strong> No comercializamos ni transferimos información personal o comercial de nuestros clientes bajo ninguna circunstancia.
                </div>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  1. Uso Exclusivo de Datos
                </h4>
                <p>
                  Los números de teléfono de WhatsApp, direcciones físicas, nombres de responsables y listados de productos facilitados únicamente se utilizarán para la correcta configuración técnica de la página web y la comunicación directa de soporte y facturación del servicio.
                </p>

                <h4 className="text-sm font-black uppercase text-emerald-pine font-display">
                  2. Canal Oficial de Atención y Jurisdicción
                </h4>
                <p>
                  Para cualquier consulta legal, comercial, solicitud de baja o comprobantes de pago, el único canal oficial autorizado es:
                </p>
                <div className="bg-white border-2 border-emerald-pine p-3 font-mono text-xs space-y-1">
                  <div><strong>SERVICIO:</strong> VÉNDO ® // Crecimiento Digital para Negocios Locales</div>
                  <div><strong>WHATSAPP OFICIAL:</strong> +{WHATSAPP_PHONE} (+58 414-9428999)</div>
                  <div><strong>JURISDICCIÓN:</strong> República Bolivariana de Venezuela / Estándares Digitales Internacionales</div>
                </div>
              </div>
            )}

          </div>

          {/* Footer del Modal */}
          <div className="pt-6 border-t-2 border-emerald-pine mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10px] font-mono text-slate-500">
              ACTUALIZADO: 2026 // ACEPTACIÓN AL CONTRATAR CUALQUIER PLAN
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappLegalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo-emerald px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 font-mono w-full sm:w-auto"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>CONSULTAR AL EQUIPO LEGAL</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  history.replaceState(null, '', window.location.pathname);
                }}
                className="btn-neo-silver px-4 py-2 text-xs font-black uppercase tracking-wider font-mono"
              >
                ENTENDIDO
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};