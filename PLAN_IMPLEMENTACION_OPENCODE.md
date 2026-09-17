# GUÍA MAESTRA DE IMPLEMENTACIÓN // VÉNDO ®
## Transformación a Agencia de Crecimiento Digital Local (Estilo Christian Vondrak)

Este documento contiene las especificaciones exactas, bloques de código listos para sustitución y comandos de verificación para que **OpenCode** (o cualquier desarrollador) ejecute la actualización paso a paso y realice el push a GitHub con total precisión.

---

### TABLA DE CONTENIDOS
1. [Directrices Obligatorias](#1-directrices-obligatorias)
2. [Paso 1: Helper de WhatsApp y Tipos (`src/types/solution.ts`)](#paso-1-helper-de-whatsapp-y-tipos)
3. [Paso 2: Datos y Precios de Negocios Locales (`src/data/solutions.ts`)](#paso-2-datos-y-precios-de-negocios-locales)
4. [Paso 3: Hero Banner con Nuevo Titular y 4 Cajas (`src/components/home/HeroBanner.tsx`)](#paso-3-hero-banner-con-nuevo-titular-y-4-cajas)
5. [Paso 4: Ticker de Anuncios (`src/components/layout/AnnouncementTicker.tsx`)](#paso-4-ticker-de-anuncios)
6. [Paso 5: Tarjeta de Producto y Variantes (`src/components/catalog/ProductCard.tsx`)](#paso-5-tarjeta-de-producto-y-variantes)
7. [Paso 6: Modal de Detalles (`src/components/checkout/SolutionDetailsModal.tsx`)](#paso-6-modal-de-detalles)
8. [Paso 7: Carrito con Soporte NFC Próximamente y WhatsApp (`src/components/cart/CartDrawer.tsx`)](#paso-7-carrito-con-soporte-nfc-próximamente-y-whatsapp)
9. [Paso 8: Modal de Asesoría (`src/components/checkout/ConsultationModal.tsx`)](#paso-8-modal-de-asesoría)
10. [Paso 9: Ficha Técnica Simplificada y Minimalista (`src/components/home/TechnicalSpecs.tsx`)](#paso-9-ficha-técnica-simplificada-y-minimalista)
11. [Paso 10: Protocolo de Trabajo en 3 Pasos (`src/components/home/ProcessSection.tsx`)](#paso-10-protocolo-de-trabajo-en-3-pasos)
12. [Paso 11: Preguntas Frecuentes Directas (`src/components/home/FaqSection.tsx`)](#paso-11-preguntas-frecuentes-directas)
13. [Paso 12: Footer y Barra Inferior Móvil (`src/components/layout/Footer.tsx` y `StickyBottomBar.tsx`)](#paso-12-footer-y-barra-inferior-móvil)
14. [Paso 13: Compilación, Pruebas y Git Push](#paso-13-compilación-pruebas-y-git-push)

---

### 1. DIRECTRICES OBLIGATORIAS

- **Número Oficial de WhatsApp:** `+58 414-9428999` (Formato URL: `https://wa.me/584149428999?text=...`). **NUNCA** dejar `wa.me/?text=` sin número.
- **Titular del Hero:** `"VÉNDO, HAZ QUE TE ENCUENTREN, HAZ QUE TE COMPREN"`
- **Subtítulo del Hero:** `"VÉNDO es una agencia de crecimiento digital para negocios locales. Creamos páginas web, optimizamos Google Maps, ordenamos WhatsApp y mejoramos la forma en que los clientes descubren, contactan y compran en tu negocio."`
- **Estética Inquebrantable:** Brutalismo Clásico / Sharp Catalog:
  - `border-radius: 0px !important` en todos los componentes y elementos interactivos.
  - Bordes de 1px (`border-black` o `border-neutral-300`).
  - Paleta monocromática estricta (`#000000`, `#FFFFFF`, `#F5F5F5`) con acento quirúrgico en rojo `#DC2626`.
  - Cero sombras difusas (`box-shadow: none`).
  - Tipografía monumental en mayúsculas (*Barlow Condensed*, *Montserrat*, *Space Mono*).
- **Estilo de Copywriting (Inspiración Christian Vondrak):**
  - Textos cortos, directos y contundentes. Cero párrafos largos innecesarios.
  - Beneficios tangibles para el comerciante local (más ventas, clientes en Google Maps, pedidos directos a su WhatsApp).
  - Estructura de precios accesible (~$50 USD base), con hosting de alta velocidad incluido y cero costos ocultos.
- **Placa NFC Google Reviews:** Estado `[ PRÓXIMAMENTE ]` en catálogo/add-ons, no disponible para compra directa en esta fase.

---

### PASO 1: HELPER DE WHATSAPP Y TIPOS
**Archivo:** `src/types/solution.ts`

Centralizar la URL de WhatsApp para evitar enlaces rotos o sin número de teléfono en toda la aplicación, y agregar soporte para add-ons en estado próximo (`comingSoon`).

```typescript
export type CategoryId = 'todos' | 'landing' | 'ecommerce' | 'corporate' | 'funnel';

export const WHATSAPP_PHONE = '584149428999';

export const getWhatsAppUrl = (text: string): string => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
  comingSoon?: boolean;
}

export interface WebSolution {
  id: string;
  sku: string;
  name: string;
  tagline: string;
  category: Exclude<CategoryId, 'todos'>;
  price: number;
  originalPrice: number;
  deliveryDays: string;
  specMetric: string;
  popular?: boolean;
  spotsLeft?: number;
  rating: number;
  reviewsCount: number;
  images: {
    preview: string;
    mobilePreview: string;
  };
  features: string[];
  idealFor: string;
  deliverables: string[];
  techStack: string[];
}

export interface OrderDetails {
  solutionId: string;
  solutionName: string;
  basePrice: number;
  selectedAddons: Addon[];
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  businessName: string;
  projectNote?: string;
}

export const formatCurrency = (val: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};
```

---

### PASO 2: DATOS Y PRECIOS DE NEGOCIOS LOCALES
**Archivo:** `src/data/solutions.ts`

Sustituir los precios altos por paquetes accesibles para negocios locales alrededor de $50 USD, incluyendo hosting de alta velocidad, Google Maps y pedidos a WhatsApp sin trucos ni costos ocultos.

```typescript
import { WebSolution, Addon, CategoryId } from '../types/solution';

export const categories: { id: CategoryId; label: string; count?: number }[] = [
  { id: 'todos', label: 'Todos los Planes' },
  { id: 'landing', label: 'Páginas Web Locales' },
  { id: 'ecommerce', label: 'Catálogos & WhatsApp' },
  { id: 'corporate', label: 'Webs Corporativas' },
  { id: 'funnel', label: 'Embudos de Anuncios' },
];

export const globalAddons: Addon[] = [
  {
    id: 'nfc-google-reviews',
    name: 'Placa NFC para Reseñas en Google Maps',
    price: 0,
    description: 'Placa física inteligente para tu mostrador. Tus clientes acercan el teléfono y te dejan 5 estrellas al instante.',
    tag: 'PRÓXIMAMENTE',
    comingSoon: true,
  },
  {
    id: 'google-maps-pro',
    name: 'Optimización Avanzada de Ficha Google Maps',
    price: 20,
    description: 'Configuración de categorías clave, fotos geolocalizadas y palabras clave para liderar las búsquedas de tu zona.',
    tag: 'LOCAL SEO',
  },
  {
    id: 'menu-qr-digital',
    name: 'Menú o Catálogo Digital con Código QR',
    price: 15,
    description: 'Diseño de QR de alta resolución listo para imprimir en mesas, vitrinas o volantes con acceso directo a tu web.',
    tag: 'IMPRESO & FÍSICO',
  },
  {
    id: 'whatsapp-business-setup',
    name: 'Configuración de Respuestas Rápidas WhatsApp',
    price: 15,
    description: 'Plantillas de bienvenida, catálogo de productos y mensajes automáticos para atender a tus clientes sin demora.',
    tag: 'VENTAS RÁPIDAS',
  },
];

export const solutions: WebSolution[] = [
  {
    id: 'landing-esencial-local',
    sku: 'SKU: VND-LOC-01',
    name: 'Página Web Esencial Local',
    tagline: 'Tu negocio en Google y WhatsApp con una página rápida que convierte visitantes en clientes.',
    category: 'landing',
    price: 49,
    originalPrice: 90,
    deliveryDays: '48 a 72 Horas',
    specMetric: 'GOOGLE MAPS + WHATSAPP DIRECTO',
    popular: true,
    spotsLeft: 3,
    rating: 5.0,
    reviewsCount: 42,
    images: {
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Diseño ultra-rápido optimizado 100% para celulares',
      'Botón directo a tu WhatsApp con mensaje pre-cargado',
      'Integración y enlace a tu perfil de Google Maps',
      'Hosting de alta velocidad incluido (0 costos ocultos)',
      'Sin mensualidades obligatorias ni comisiones por ventas',
    ],
    idealFor: 'Restaurantes, barberías, consultorios, talleres, tiendas físicas y profesionales que buscan más clientes en su ciudad.',
    deliverables: [
      'Página web completa publicada y funcionando en 72h',
      'Adaptación móvil perfecta (diseño tipo app)',
      'Enlace a Google Maps y llamada directa',
      'Hosting de alta velocidad configurado y listo',
    ],
    techStack: ['React', 'Tailwind CSS', 'Google Maps Local', 'WhatsApp API'],
  },
  {
    id: 'catalogo-whatsapp-pedidos',
    sku: 'SKU: VND-CAT-02',
    name: 'Catálogo & Pedidos por WhatsApp',
    tagline: 'Muestra tus productos con fotos, precios y carrito. Tus clientes arman el pedido y te lo envían a WhatsApp.',
    category: 'ecommerce',
    price: 89,
    originalPrice: 150,
    deliveryDays: '3 a 5 Días',
    specMetric: 'CATÁLOGO INTERACTIVO // CARRITO WHATSAPP',
    popular: true,
    spotsLeft: 2,
    rating: 5.0,
    reviewsCount: 38,
    images: {
      preview: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Catálogo visual con fotos, descripciones y precios claros',
      'Carrito de compras rápido con cálculo automático del total',
      'Envío del pedido formateado y ordenado directo a tu WhatsApp',
      'Cero comisiones por venta (el 100% del dinero es tuyo)',
      'Hosting de alta velocidad y dominio gestionados incluidos',
    ],
    idealFor: 'Tiendas de ropa, reposterías, comida rápida, venta de repuestos y negocios con variedad de productos.',
    deliverables: [
      'Catálogo con hasta 40 productos iniciales cargados',
      'Carrito de compras interactivo para pedidos inmediatos',
      'Código QR en alta definición para tu mostrador o mesas',
      'Hosting rápido incluido sin mensualidades obligatorias',
    ],
    techStack: ['React', 'Tailwind CSS', 'WhatsApp Business', 'Edge CDN'],
  },
  {
    id: 'web-corporativa-autoridad',
    sku: 'SKU: VND-CORP-03',
    name: 'Web Corporativa & Autoridad Local',
    tagline: 'Página multi-sección para proyectar seriedad y captar clientes que buscan servicios profesionales en tu ciudad.',
    category: 'corporate',
    price: 119,
    originalPrice: 200,
    deliveryDays: '5 a 7 Días',
    specMetric: 'MULTI-SECCIÓN // ALTA AUTORIDAD',
    popular: false,
    spotsLeft: 4,
    rating: 4.9,
    reviewsCount: 26,
    images: {
      preview: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Estructura multi-sección: Servicios, Nosotros, Casos y Contacto',
      'Optimización SEO local para búsquedas en Google de tu área',
      'Botones de contacto rápido: llamada telefónica y WhatsApp',
      'Hosting de alta velocidad y dominio corporativo incluidos',
      'Diseño profesional sobrio de alto impacto visual',
    ],
    idealFor: 'Clínicas, bufetes de abogados, academias, inmobiliarias, constructoras y empresas de servicios consolidadas.',
    deliverables: [
      'Hasta 5 secciones completas con redacción profesional',
      'Alta en Google Search Console y Google Maps',
      'Formulario de contacto directo a tu correo y teléfono',
      'Hosting de alta velocidad incluido',
    ],
    techStack: ['TypeScript', 'React', 'Google SEO', 'Tailwind CSS'],
  },
  {
    id: 'embudo-anuncios-ads',
    sku: 'SKU: VND-FNL-04',
    name: 'Embudo de Ventas para Anuncios',
    tagline: 'Página de aterrizaje enfocada 100% en anuncios para que quien haga clic te contacte directo por WhatsApp.',
    category: 'funnel',
    price: 69,
    originalPrice: 120,
    deliveryDays: '48 a 72 Horas',
    specMetric: 'ALTA CONVERSIÓN // ANUNCIOS ADS',
    popular: false,
    spotsLeft: 2,
    rating: 4.9,
    reviewsCount: 19,
    images: {
      preview: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Diseñada específicamente para tráfico de Meta Ads y TikTok',
      'Mensaje directo y claro sin distracciones ni puntos de fuga',
      'Botón de WhatsApp con mensaje personalizado del anuncio',
      'Píxeles de seguimiento configurados (Meta Pixel y Google)',
      'Hosting de alta velocidad incluido',
    ],
    idealFor: 'Negocios locales que invierten en publicidad digital y quieren más mensajes de clientes reales listos para comprar.',
    deliverables: [
      'Landing page de alta conversión optimizada para pauta',
      'Instalación de píxel de Meta Ads y eventos de conversión',
      'Conexión de WhatsApp con tracking de campaña',
      'Hosting rápido incluido',
    ],
    techStack: ['React', 'Meta Pixel', 'TikTok Ads API', 'Tailwind'],
  },
];
```

---

### PASO 3: HERO BANNER CON NUEVO TITULAR Y 4 CAJAS
**Archivo:** `src/components/home/HeroBanner.tsx`

Actualizar el titular, subtítulo, cajas técnicas y enlace a WhatsApp de acuerdo a las directrices exactas del usuario.

```tsx
import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

interface HeroBannerProps {
  onExplore: () => void;
  onOpenConsult: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onOpenConsult }) => {
  const whatsappHeroUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero información para hacer crecer mi negocio local con una página web.'
  );

  return (
    <>
      {/* Micro Status Bar */}
      <div className="bg-neutral-100 border-b border-black py-1.5 px-4 text-[10px] font-mono flex items-center justify-between uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
          <span className="font-bold text-black">VÉNDO DIGITAL ENGINE // CRECIMIENTO LOCAL</span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-600">SISTEMA 100% GESTIONADO</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-500 hidden sm:inline">ATENCIÓN DIRECTA: <strong>+58 414-9428999</strong></span>
          <span className="text-red-600 font-bold">[ RESPUESTA INMEDIATA VÍA WHATSAPP ]</span>
        </div>
      </div>

      <section className="relative bg-black text-white border-b border-black overflow-hidden">
        {/* Background con overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&h=1080&fit=crop&auto=format&sat=-100"
            alt="VÉNDO Crecimiento Digital Local"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 flex flex-col items-center text-center">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-6">
            <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" />
            <span>VÉNDO ® // AGENCIA DE CRECIMIENTO DIGITAL LOCAL</span>
          </div>

          {/* Titular Monumental Obligatorio */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight sm:tracking-wide leading-[0.92] max-w-5xl mb-6">
            VÉNDO, HAZ QUE TE ENCUENTREN, <br />
            <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">
              HAZ QUE TE COMPREN
            </span>
          </h1>

          {/* Subtítulo Obligatorio */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl uppercase tracking-wider font-semibold mb-10 leading-relaxed font-sans">
            VÉNDO es una agencia de crecimiento digital para negocios locales. Creamos páginas web, optimizamos Google Maps, ordenamos WhatsApp y mejoramos la forma en que los clientes descubren, contactan y compran en tu negocio.
          </p>

          {/* Botones de Acción de Corte Recto (0px Radius) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-14">
            <button
              onClick={onExplore}
              className="h-12 px-8 bg-white text-black text-xs font-black uppercase tracking-widest border border-white hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>VER PLANES DISPONIBLES</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 bg-transparent text-white text-xs font-black uppercase tracking-widest border border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-mono"
            >
              <MessageSquare className="w-4 h-4" />
              <span>[ ESCRIBIR A WHATSAPP DIRECTO → ]</span>
            </a>
          </div>

          {/* 4 Cajas de Beneficios para Negocios Locales */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 border border-white/20 bg-black/80 divide-x divide-y md:divide-y-0 divide-white/20 text-left">
            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                VISIBILIDAD LOCAL
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                GOOGLE MAPS
              </span>
              <span className="block text-[10px] text-emerald-400 uppercase mt-1 font-mono">
                • Primero en tu ciudad
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                VENTA DIRECTA
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                WHATSAPP
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Pedidos en 1 solo clic
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TIEMPO DE ENTREGA
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                72 HORAS
              </span>
              <span className="block text-[10px] text-red-500 uppercase mt-1 font-mono">
                • Tu web lista y vendiendo
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TRANSPARENCIA TOTAL
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider text-white font-mono">
                TODO INCLUIDO
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Hosting + Sin costos ocultos
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
```

---

### PASO 4: TICKER DE ANUNCIOS
**Archivo:** `src/components/layout/AnnouncementTicker.tsx`

```tsx
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
```

---

### PASO 5: TARJETA DE PRODUCTO Y VARIANTES
**Archivo:** `src/components/catalog/ProductCard.tsx`

Actualizar las variantes para que sumen deltas razonables al precio base de ~$49 USD:

```tsx
  const variants = [
    { label: 'BASE', priceDelta: 0 },
    { label: 'PRO (+MAPS)', priceDelta: 20 },
    { label: 'FULL (+QR)', priceDelta: 35 },
  ];
```

---

### PASO 6: MODAL DE DETALLES
**Archivo:** `src/components/checkout/SolutionDetailsModal.tsx`

Actualizar las opciones del modal con las descripciones locales:

```tsx
  const planOptions = [
    { label: 'BASE', delta: 0, desc: 'Página web lista para vender + Hosting incluido' },
    { label: 'PRO (+MAPS)', delta: 20, desc: 'Optimización avanzada de Google Maps en tu ciudad' },
    { label: 'FULL (+QR)', delta: 35, desc: 'Google Maps + Código QR para mostrador + Hosting 1 año' },
  ];
```

---

### PASO 7: CARRITO CON SOPORTE NFC PRÓXIMAMENTE Y WHATSAPP
**Archivo:** `src/components/cart/CartDrawer.tsx`

1. Abrir WhatsApp enviando al número `584149428999`:
```tsx
  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (it) =>
          `▪ *${it.quantity}x ${it.title}* [${it.variant}] — ${formatCurrency(
            it.price * it.quantity
          )}`
      )
      .join('\n');

    const couponLine = couponApplied ? `\n*CUPÓN APLICADO:* ${couponApplied} (-${formatCurrency(discountAmount)})\n` : '';

    const message = `¡Hola VÉNDO! 🚀\nQuiero contratar el siguiente plan para mi negocio:\n\n${itemsSummary}\n${couponLine}\n*TOTAL:* ${formatCurrency(
      finalAmount
    )}\n\n¿Cuáles son los pasos para comenzar con el diseño y la entrega en 72h?`;

    window.open(`https://wa.me/584149428999?text=${encodeURIComponent(message)}`, '_blank');
  };
```

2. Renderizar Add-on con badge `[ PRÓXIMAMENTE ]` deshabilitado si `addon.comingSoon` es verdadero:
```tsx
{addon.comingSoon ? (
  <span className="px-2.5 py-1 border border-neutral-400 text-neutral-500 text-[9px] font-mono font-black uppercase bg-neutral-100 flex-shrink-0 select-none">
    [ PRÓXIMAMENTE ]
  </span>
) : isAlreadyAdded ? (
  <span className="px-2 py-1 border border-emerald-700 text-emerald-800 text-[9px] font-mono font-black uppercase bg-white flex items-center gap-1">
    <Check className="w-2.5 h-2.5" />
    <span>AGREGADO</span>
  </span>
) : (
  <button
    onClick={() =>
      addItem({
        id: addon.id,
        title: addon.name,
        variant: 'ADD-ON',
        price: addon.price,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
      })
    }
    className="px-2 py-1 bg-white border border-black text-[9px] font-black uppercase hover:bg-black hover:text-white flex-shrink-0"
  >
    [ + AGREGAR ]
  </button>
)}
```

---

### PASO 8: MODAL DE ASESORÍA
**Archivo:** `src/components/checkout/ConsultationModal.tsx`

Actualizar el número de teléfono a `+58 414-9428999` y afinar los textos para negocios locales:

```tsx
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `¡Hola equipo VÉNDO! 🚀\nMi nombre es *${name}* de *${business}*.\nObjetivo de mi negocio: *${need}*.\n\nQuiero información para activar mi página web y aparecer en Google Maps.`;
    window.open(`https://wa.me/584149428999?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };
```

---

### PASO 9: FICHA TÉCNICA SIMPLIFICADA Y MINIMALISTA
**Archivo:** `src/components/home/TechnicalSpecs.tsx`

Reescribir con textos sintéticos (estilo Christian Vondrak):

- **Módulo 01:** `CARGA EN < 0.8S`
  - *Texto:* Nadie espera una página lenta. Tu web abre al instante tanto en redes móviles como en Wi-Fi.
  - *Métrica:* 0 REBOTES // VELOCIDAD PURA
- **Módulo 02:** `100% PARA MÓVIL`
  - *Texto:* El 85% de tus clientes locales busca desde su teléfono. Botones grandes y ergonómicos.
  - *Métrica:* EXPERIENCIA TIPO APP
- **Módulo 03:** `WHATSAPP EN 1 CLIC`
  - *Texto:* Sin carritos engorrosos. El cliente toca un botón y te escribe directo con el pedido en mano.
  - *Métrica:* CONVERSIÓN INMEDIATA

---

### PASO 10: PROTOCOLO DE TRABAJO EN 3 PASOS
**Archivo:** `src/components/home/ProcessSection.tsx`

- Paso 1: `[01] ELIGES TU PLAN Y ENVÍAS TUS DATOS` (Logo, productos y WhatsApp).
- Paso 2: `[02] CONSTRUIMOS TU WEB EN 72H` (Diseño, Google Maps y botón de WhatsApp listos).
- Paso 3: `[03] REVISAS Y EMPIEZAS A VENDER` (Visto bueno final y apertura al público).
- Botón de garantía:
  `href="https://wa.me/584149428999?text=Hola%20VÉNDO,%20quiero%20conocer%20más%20sobre%20el%20servicio%20para%20mi%20negocio%20local"`

---

### PASO 11: PREGUNTAS FRECUENTES DIRECTAS
**Archivo:** `src/components/home/FaqSection.tsx`

```typescript
const faqs = [
  {
    q: '¿QUÉ NECESITO PARA EMPEZAR?',
    a: 'Solo tu logo (si tienes), la lista de tus productos o servicios con precios, y tu número de WhatsApp. Nosotros redactamos los textos y preparamos el diseño.',
  },
  {
    q: '¿EL HOSTING ESTÁ INCLUIDO?',
    a: 'Sí, hosting de alta velocidad incluido. Sin mensualidades obligatorias ni costos sorpresa.',
  },
  {
    q: '¿CUÁNTO TIEMPO TARDA LA ENTREGA?',
    a: 'Entregamos en 48 a 72 horas para páginas web locales y de 3 a 5 días para catálogos con pedidos.',
  },
  {
    q: '¿CÓMO ME CONTACTAN O COMPRAN LOS CLIENTES?',
    a: 'Tus clientes tocan un botón y te escriben directo a tu WhatsApp con el producto o pedido listo, o te llaman directamente desde Google Maps.',
  },
  {
    q: '¿ME AYUDAN CON GOOGLE MAPS?',
    a: 'Sí, optimizamos y enlazamos la ficha de tu negocio para que aparezcas cuando busquen lo que vendes en tu ciudad.',
  },
];
```

---

### PASO 12: FOOTER Y BARRA INFERIOR MÓVIL
**Archivos:** `src/components/layout/Footer.tsx` y `StickyBottomBar.tsx`

- En `Footer.tsx`:
  `href="https://wa.me/584149428999?text=Hola%20VÉNDO,%20quiero%20iniciar%20el%20diseño%20de%20mi%20página%20web"`
- En `StickyBottomBar.tsx`:
  Cambiar texto de precio base a: `DESDE $49 USD`.

---

### PASO 13: COMPILACIÓN, PRUEBAS Y GIT PUSH

```bash
# 1. Comprobar que no existan errores de TypeScript ni de Vite
cd /home/joel/Proyectos/vendo-web
npm run build

# 2. Revisar archivos modificados
git status

# 3. Añadir cambios
git add .

# 4. Crear commit descriptivo
git commit -m "feat: pivot to local business digital growth agency with Christian Vondrak concise copy, $50 pricing, and official WhatsApp"

# 5. Hacer push a main en GitHub
git push origin main
```
