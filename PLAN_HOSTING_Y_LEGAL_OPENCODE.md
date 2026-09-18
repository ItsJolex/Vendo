# GUÍA DE IMPLEMENTACIÓN OPENCODE // VÉNDO 2.0
## Política de Hosting Mensual ($10 a $13 USD/mes) + Términos y Condiciones Legales

Este documento contiene las modificaciones exactas y el código completo para que **OpenCode** actualice la web de VÉNDO corrigiendo la política de hosting e incorporando el módulo de términos legales, privacidad y protección jurídica.

---

### ÍNDICE DE CAMBIOS

1. [`src/components/legal/LegalModal.tsx`](#1-nuevo-componente-legalmodaltsx) — **[NUEVO]** Modal neo-brutalista de Términos, Hosting, Propiedad Intelectual y Privacidad.
2. [`src/components/home/FaqSection.tsx`](#2-faqsectiontsx) — Corrección de la pregunta de hosting ($10-$13/mes) y SLA de 48-72h.
3. [`src/components/home/TechnicalSpecs.tsx`](#3-technicalspecstsx) — Comparativa técnica de infraestructura (Vercel Pro $10-$13/mes tras 1er mes $0).
4. [`src/data/solutions.ts`](#4-datasolutionsts) — Actualización de características y entregables en los 4 servicios.
5. [`src/components/catalog/ServiceDetailPage.tsx`](#5-servicedetailpagetsx) — Actualización del bloque de inversión y hosting gestionado.
6. [`src/components/layout/AnnouncementTicker.tsx`](#6-announcementtickertsx) — Actualización del ticker sin precios ciegos y con SLA 48-72h.
7. [`src/components/home/HeroBanner.tsx`](#7-herobannertsx) — Ajuste de cajas de tiempo (48-72h) y 1er mes de hosting.
8. [`src/components/home/ProcessSection.tsx`](#8-processsectiontsx) — Ajuste de la caja de garantía.
9. [`src/components/layout/StickyBottomBar.tsx`](#9-stickybottombartsx) — Badge de 1er mes de hosting.
10. [`src/components/checkout/ConsultationModal.tsx`](#10-consultationmodaltsx) — Unificación del SLA a 48-72h.
11. [`src/components/layout/Header.tsx`](#11-headertsx) — Ajuste del menú lateral a 48-72h.
12. [`src/components/layout/Footer.tsx`](#12-footertsx) — Enlaces legales interactivos para abrir los Términos y Condiciones.
13. [`src/App.tsx`](#13-apptsx) — Integración del modal legal en el flujo principal.
14. [Verificación](#14-verificación) — Compilación con `npm run build`.

---

### 1. NUEVO COMPONENTE: `src/components/legal/LegalModal.tsx`

Crear el archivo `src/components/legal/LegalModal.tsx`:

```tsx
import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Server, Lock, MessageSquare } from 'lucide-react';
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
                onClick={onClose}
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
```

---

### 2. `src/components/home/FaqSection.tsx`

Reemplazar el archivo `src/components/home/FaqSection.tsx` para incorporar la respuesta transparente del hosting y unificar el SLA a 48-72h:

```tsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // Pestaña de hosting abierta por defecto

  const faqs = [
    {
      q: '¿QUÉ NECESITO PARA EMPEZAR?',
      a: 'Solo tu logo (si tienes), la lista de tus productos o servicios con precios, y tu número de WhatsApp. Nosotros redactamos los textos y preparamos la estructura visual.',
    },
    {
      q: '¿EL HOSTING ESTÁ INCLUIDO O TIENE MENSUALIDAD?',
      a: 'El desarrollo de tu web incluye tu primer mes (30 días) de hosting de alta velocidad completamente cubierto. A partir del segundo mes, mantenemos tu web activa, protegida y con tiempo de carga inferior a 0.8s en servidores Vercel Pro por una cuota fija y accesible de entre $10 y $13 USD mensuales (según los recursos de tu negocio). Sin contratos forzosos ni letras pequeñas.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA LA ENTREGA?',
      a: 'Entregamos tu página web completa y funcionando en 48 a 72 horas hábiles garantizadas una vez que nos entregues el contenido básico de tu negocio.',
    },
    {
      q: '¿CÓMO ME CONTACTAN O COMPRAN LOS CLIENTES?',
      a: 'Tus clientes tocan un botón y te escriben directo a tu WhatsApp oficial con el producto o pedido listo, o te llaman directamente desde el mapa de Google Maps.',
    },
    {
      q: '¿ME AYUDAN CON GOOGLE MAPS?',
      a: 'Sí, optimizamos y enlazamos la ficha de tu negocio para que tus clientes cercanos te encuentren cuando busquen lo que vendes en tu ciudad.',
    },
    {
      q: '¿QUÉ PASA SI QUIERO CAMBIOS ANTES DE PUBLICAR?',
      a: 'Revisamos la página contigo en un enlace privado antes del lanzamiento. Hacemos los ajustes que necesites hasta que estés 100% satisfecho antes de activarla en tu dominio.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-canvas-ice border-b-2 border-emerald-pine">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-silver-metallic block mb-1">
            [ PREGUNTAS FRECUENTES // TRANSPARENCIA TOTAL ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-emerald-pine">
            PREGUNTAS FRECUENTES // FAQ
          </h2>
        </div>

        {/* Acordeón Recto */}
        <div className="border-2 border-emerald-pine divide-y-2 divide-emerald-pine shadow-neo-pine bg-white">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-canvas-ice transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-pine">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 border-2 border-emerald-pine flex items-center justify-center bg-canvas-ice text-emerald-pine">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-silver-steel bg-canvas-ice/50 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
```

---

### 3. `src/components/home/TechnicalSpecs.tsx`

Actualizar la tabla comparativa en `src/components/home/TechnicalSpecs.tsx` para reflejar con precisión el costo de hosting mensual en Vercel Pro:

Localizar la fila de Hosting Mensual (alrededor de la línea 121) y reemplazarla con:

```tsx
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Hosting e Infraestructura</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">$25 a $60 USD/mes + caídas frecuentes en servidores compartidos</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">
                    1er mes $0 (incluido). Luego solo $10 a $13 USD/mes en Vercel Pro (99.9% Uptime)
                  </td>
                </tr>
```

Y asegurar que la fila de tiempo de entrega indique:
```tsx
                <tr>
                  <td className="p-3 font-bold bg-canvas-ice border-r-2 border-silver-steel">Tiempo de Entrega</td>
                  <td className="p-3 text-slate-600 border-r-2 border-silver-steel">3 a 6 semanas de espera</td>
                  <td className="p-3 font-bold text-emerald-pine bg-emerald-vibrant/10 border-l-2 border-emerald-vibrant pl-4">48 a 72 horas garantizadas</td>
                </tr>
```

---

### 4. `src/data/solutions.ts`

Actualizar las menciones de hosting en `src/data/solutions.ts` para los 4 servicios:

- En `landing-esencial-local`:
  - En `features`:
    `'1er mes de hosting de alta velocidad incluido ($10 a $13 USD/mes posterior)',`
  - En `deliverables`:
    `'1er mes de hosting de alta velocidad configurado y cubierto',`
  - En `deliverablesSections`:
    `'Alojamiento web en Vercel Pro CDN (1er mes incluido, luego $10-$13/mes)',`
- En `catalogo-whatsapp-pedidos`:
  - En `deliverables`:
    `'1er mes de hosting ultra-rápido incluido ($10-$13 USD/mes posterior)',`
- En `corporativa-autoridad`:
  - En `deliverablesSections`:
    `'Servidores Vercel Pro con 99.9% de tiempo de actividad (1er mes cubierto)',`
- En `landing-ads-cro`:
  - En `deliverables`:
    `'1er mes de hosting de tráfico ilimitado incluido',`

---

### 5. `src/components/catalog/ServiceDetailPage.tsx`

Actualizar el bloque de cotización transparente y los badges de beneficios en `src/components/catalog/ServiceDetailPage.tsx`:

Reemplazar la sección `BLOQUE 3: MODELO DE COTIZACIÓN TRANSPARENTE` con:

```tsx
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
```

---

### 6. `src/components/layout/AnnouncementTicker.tsx`

Actualizar los mensajes del ticker en `src/components/layout/AnnouncementTicker.tsx`:

```tsx
  const messages = [
    '/// VÉNDO 2.0 // AGENCIA DE CRECIMIENTO DIGITAL PARA NEGOCIOS LOCALES',
    'HAZ QUE TE ENCUENTREN, HAZ QUE TE COMPREN',
    'PÁGINAS WEB + GOOGLE MAPS + PEDIDOS POR WHATSAPP',
    'COTIZACIONES A MEDIDA // 1ER MES DE HOSTING INCLUIDO (LUEGO $10-$13/MES)',
    'ENTREGA EN 48 A 72 HORAS // ATENCIÓN DIRECTA: +58 414-9428999 ///',
  ];
```

---

### 7. `src/components/home/HeroBanner.tsx`

En `src/components/home/HeroBanner.tsx`:
- En la Caja 3:
  Cambiar `72 HORAS` por `48 - 72 HORAS`.
- En la Caja 4:
  Reemplazar el contenido para que diga:
  ```tsx
            {/* Caja 4 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-emerald-vibrant font-bold uppercase tracking-widest mb-1">
                TRANSPARENCIA TOTAL
              </span>
              <span className="text-xl font-black tracking-wider text-emerald-pine font-mono block">
                INFRAESTRUCTURA
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • 1er Mes de Hosting Incluido (Luego $10-$13/mes)
              </span>
            </div>
  ```

---

### 8. `src/components/home/ProcessSection.tsx`

En `src/components/home/ProcessSection.tsx`, actualizar la caja de garantía inferior:

```tsx
        {/* Garantía en caja recta */}
        <div className="mt-8 p-6 bg-emerald-deep text-white border-2 border-emerald-pine shadow-neo-pine-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-vibrant flex-shrink-0" />
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest">
                GARANTÍA DE VELOCIDAD // PROTOCOLO 48-72H
              </h4>
              <p className="text-[11px] text-silver-chrome font-medium">
                1er mes de hosting de alta velocidad incluido, dominio y configuración. A partir del 2do mes, hosting gestionado en Vercel Pro por solo $10 a $13 USD/mes. Ajustamos tu web hasta que estés 100% satisfecho antes de activarla.
              </p>
            </div>
          </div>
          <a
            href={whatsappProcessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo-silver px-4 py-2 text-xs font-black uppercase tracking-wider flex-shrink-0 font-mono"
          >
            [ HABLAR CON EL EQUIPO → ]
          </a>
        </div>
```

---

### 9. `src/components/layout/StickyBottomBar.tsx`

En `src/components/layout/StickyBottomBar.tsx`:
Cambiar `[ HOSTING INCLUIDO ]` por `[ 1ER MES HOSTING INCLUIDO ]`.

---

### 10. `src/components/checkout/ConsultationModal.tsx`

En `src/components/checkout/ConsultationModal.tsx`:
Actualizar la línea 42 para indicar:
`Canal directo. Analizamos tu negocio, te recomendamos la estructura ideal y te garantizamos entrega en 48 a 72 horas.`

---

### 11. `src/components/layout/Header.tsx`

En `src/components/layout/Header.tsx`:
En el drawer de navegación móvil, actualizar la etiqueta de tiempo a `[48-72H]` (alrededor de la línea 108).

---

### 12. `src/components/layout/Footer.tsx`

Actualizar `src/components/layout/Footer.tsx` para incorporar la prop `onOpenLegal: (tab?: LegalTab) => void` y mostrar los enlaces legales en el footer:

```tsx
import React from 'react';
import { ArrowUp, ShieldCheck, Lock, Cpu } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';
import { LegalTab } from '../legal/LegalModal';

interface FooterProps {
  onOpenLegal?: (tab?: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
    'PÁGINAS WEB RÁPIDAS',
    'GOOGLE MAPS LOCAL',
    'WHATSAPP BUSINESS',
    'HOSTING VERCEL PRO ($10-$13/MES)',
    'DISEÑO 100% PARA MÓVIL',
    'ENTREGA EN 48 A 72 HORAS',
    'TRANSPARENCIA TOTAL',
    'ATENCIÓN: +58 414-9428999',
  ];

  const whatsappFooterUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero iniciar el diseño de la página web para mi negocio local.'
  );

  return (
    <footer className="bg-emerald-pine text-white border-t-2 border-emerald-deep text-left">
      {/* Ticker de Stack Tecnológico de Alto Rendimiento */}
      <div className="border-b-2 border-emerald-deep bg-emerald-deep py-3 overflow-hidden select-none">
        <div className="flex w-max animate-ticker whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-silver-chrome">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((item, idx) => (
            <span key={idx} className="mx-4 flex items-center gap-3">
              <span>{item}</span>
              <span className="text-emerald-vibrant font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b-2 border-emerald-deep">
          
          {/* Logo y Manifiesto */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-3xl font-black tracking-[0.2em] font-display uppercase text-white">
              VÉNDO<span className="text-silver-steel">®</span>
            </h3>
            <p className="text-xs text-silver-chrome max-w-sm uppercase font-medium leading-relaxed">
              Agencia de crecimiento digital para negocios locales. 
              Creamos páginas web, optimizamos Google Maps y ordenamos WhatsApp para que vendas más en tu ciudad.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-silver-chrome pt-2">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-white" /> TRANSPARENCIA TOTAL
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-white" /> 1ER MES HOSTING INCLUIDO
              </span>
              <span className="flex items-center gap-1 text-emerald-vibrant font-bold">
                <Cpu className="w-3.5 h-3.5" /> SLA: 48-72H
              </span>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-silver-steel mb-3 font-mono">
              SOLUCIONES //
            </h4>
            <ul className="space-y-2 text-xs font-mono text-silver-chrome">
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] PÁGINAS WEB LOCALES</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] CATÁLOGOS & WHATSAPP</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] WEBS CORPORATIVAS</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">[+] EMBUDOS DE ANUNCIOS</a></li>
            </ul>
          </div>

          {/* Contacto Directo & Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-silver-steel mb-3 font-mono">
              CONTACTO & MARCO LEGAL //
            </h4>
            <p className="text-xs text-silver-chrome mb-3 font-medium font-mono">
              WhatsApp: +58 414-9428999<br />
              Lunes a Sábado: 8:00 AM - 8:00 PM.
            </p>

            <ul className="space-y-1.5 text-[11px] font-mono text-silver-steel mb-4">
              <li>
                <button
                  onClick={() => onOpenLegal?.('terms')}
                  className="hover:text-white underline transition-colors"
                >
                  [+] Términos & Compromiso SLA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('hosting')}
                  className="hover:text-white underline transition-colors"
                >
                  [+] Política de Hosting ($10-$13/mes)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('privacy')}
                  className="hover:text-white underline transition-colors"
                >
                  [+] Privacidad & Contacto Legal
                </button>
              </li>
            </ul>

            <a
              href={whatsappFooterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo-silver inline-block px-4 py-2 text-xs font-black uppercase tracking-wider font-mono"
            >
              [ CONTACTAR POR WHATSAPP → ]
            </a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-silver-metallic">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-vibrant inline-block animate-pulse" />
            <span>© {new Date().getFullYear()} VÉNDO ® // AGENCIA DE CRECIMIENTO DIGITAL LOCAL.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-silver-metallic hover:text-white transition-colors uppercase font-bold"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
```

---

### 13. `src/App.tsx`

Actualizar `src/App.tsx` para integrar el estado de `LegalModal`:

```tsx
import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { AnnouncementTicker } from './components/layout/AnnouncementTicker';
import { Header } from './components/layout/Header';
import { HeroBanner } from './components/home/HeroBanner';
import { CategoryTabs } from './components/catalog/CategoryTabs';
import { ProductGrid } from './components/catalog/ProductGrid';
import { ServiceDetailPage } from './components/catalog/ServiceDetailPage';
import { TechnicalSpecs } from './components/home/TechnicalSpecs';
import { ProcessSection } from './components/home/ProcessSection';
import { FaqSection } from './components/home/FaqSection';
import { Footer } from './components/layout/Footer';
import { StickyBottomBar } from './components/layout/StickyBottomBar';
import { CartDrawer } from './components/cart/CartDrawer';
import { ConsultationModal } from './components/checkout/ConsultationModal';
import { LegalModal, LegalTab } from './components/legal/LegalModal';
import { WebSolution, CategoryId } from './types/solution';
import { solutions } from './data/solutions';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | null>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/servicio/')) {
      return hash.replace('#/servicio/', '');
    }
    return null;
  });
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('terms');

  // Sincronización de URL hash para soporte de botón Atrás del navegador
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/servicio/')) {
        setSelectedSolutionId(hash.replace('#/servicio/', ''));
      } else if (hash === '#/terminos') {
        setLegalTab('terms');
        setIsLegalOpen(true);
      } else if (hash === '#/hosting') {
        setLegalTab('hosting');
        setIsLegalOpen(true);
      } else if (hash === '#/privacidad') {
        setLegalTab('privacy');
        setIsLegalOpen(true);
      } else {
        setSelectedSolutionId(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectSolution = (sol: WebSolution) => {
    window.location.hash = `#/servicio/${sol.id}`;
    setSelectedSolutionId(sol.id);
  };

  const handleBackToCatalog = () => {
    window.location.hash = '';
    setSelectedSolutionId(null);
    setTimeout(() => {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleExploreCatalog = () => {
    if (selectedSolutionId) {
      handleBackToCatalog();
    } else {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (tab: LegalTab = 'terms') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  const activeSolution = solutions.find((s) => s.id === selectedSolutionId);

  return (
    <CartProvider>
      <div id="top" className="min-h-screen flex flex-col bg-white text-black antialiased selection:bg-emerald-pine selection:text-white pb-14 md:pb-0">
        
        {/* Ticker Infinito Superior */}
        <AnnouncementTicker />

        {/* Cabecera Brutalista */}
        <Header onOpenConsult={() => setIsConsultOpen(true)} />

        {/* RENDERIZADO DE SUBPÁGINA O LANDING */}
        {activeSolution ? (
          <ServiceDetailPage
            solution={activeSolution}
            onBack={handleBackToCatalog}
          />
        ) : (
          <main className="flex-1">
            <HeroBanner
              onExplore={handleExploreCatalog}
              onOpenConsult={() => setIsConsultOpen(true)}
            />

            <CategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            <ProductGrid
              category={activeCategory}
              onSelectSolution={handleSelectSolution}
            />

            <TechnicalSpecs />

            <ProcessSection />

            <FaqSection />
          </main>
        )}

        {/* Footer con Enlaces Legales */}
        <Footer onOpenLegal={handleOpenLegal} />

        {/* Carrito Lateral Deslizante */}
        <CartDrawer />

        {/* Barra Móvil Inferior */}
        <StickyBottomBar
          onOpenConsult={() => setIsConsultOpen(true)}
          onExploreCatalog={handleExploreCatalog}
        />

        {/* Modal de Asesoría Directa por WhatsApp */}
        <ConsultationModal
          isOpen={isConsultOpen}
          onClose={() => setIsConsultOpen(false)}
        />

        {/* Modal de Marco Legal, Términos y Hosting */}
        <LegalModal
          isOpen={isLegalOpen}
          onClose={() => setIsLegalOpen(false)}
          initialTab={legalTab}
        />

      </div>
    </CartProvider>
  );
}
```

---

### 14. VERIFICACIÓN

Ejecutar en la terminal del proyecto:

```bash
npm run build
```

El comando debe compilar con éxito:
```text
✓ built in ...ms
```
Verifica que no existan variables sin usar ni errores de tipado en TypeScript.
