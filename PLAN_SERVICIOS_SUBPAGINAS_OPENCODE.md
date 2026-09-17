# GUÍA DE IMPLEMENTACIÓN PARA OPENCODE // VÉNDO 2.0
## Servicios Sin Fotos, Cotización por Asesoría, Ilustraciones Vectoriales y Subpáginas Dedicadas (SLA: 48h - 72h)

Este documento contiene las especificaciones técnicas, arquitectura y código exacto para que **OpenCode** ejecute la reestructuración del catálogo y servicios de VÉNDO.

---

### ÍNDICE DE ARCHIVOS A MODIFICAR Y CREAR

1. [`src/types/solution.ts`](#1-tipos-de-datos-srctypessolutionts) — Modelo de datos con SLA de 48-72h, soporte para ilustraciones vectoriales y mensajes de WhatsApp.
2. [`src/data/solutions.ts`](#2-datos-de-soluciones-srcdatasolutionsts) — Catálogo sin fotos ni precios fijos, con especificaciones y cronograma detallado.
3. [`src/components/catalog/ServiceIllustration.tsx`](#3-componente-de-ilustraciones-vectoriales-srccomponentscatalogserviceillustrationtsx-nuevo) — **[NUEVO]** Ilustraciones técnicas blueprint en Verde Esmeralda y Plateado (puro SVG/CSS).
4. [`src/components/catalog/ProductCard.tsx`](#4-tarjetas-de-servicio-en-catálogo-srccomponentscatalogproductcardtsx) — Tarjeta minimalista sin fotos, con ilustración vectorial, badge [ 48H - 72H ] y botón a la subpágina.
5. [`src/components/catalog/ProductGrid.tsx`](#5-grilla-del-catálogo-srccomponentscatalogproductgridtsx) — Conexión con el selector de subpágina.
6. [`src/components/catalog/ServiceDetailPage.tsx`](#6-subpágina-dedicada-de-servicio-srccomponentscatalogservicedetailpagetsx-nuevo) — **[NUEVO]** Vista completa e inmersiva de subpágina con desglose de la web, cronograma de 48h-72h y botón de asesoría por WhatsApp.
7. [`src/App.tsx`](#7-enrutamiento-ligero-en-srcapptsx) — Enrutamiento nativo por hash (`#/servicio/:id`) con soporte para historial del navegador.
8. [Verificación Final](#8-verificación-final) — Comando de comprobación sin errores de TypeScript.

---

### 1. TIPOS DE DATOS (`src/types/solution.ts`)

Reemplazar el contenido completo de `src/types/solution.ts`:

```typescript
export type CategoryId = 'todos' | 'landing' | 'ecommerce' | 'corporate' | 'funnel';

export const WHATSAPP_PHONE = '584149428999';

export const getWhatsAppUrl = (text: string): string => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

export const getServiceConsultationUrl = (serviceName: string, sku?: string): string => {
  const text = `Hola VÉNDO, quiero recibir asesoría y una cotización personalizada para el servicio [${serviceName}${sku ? ` - ${sku}` : ''}]. Mi negocio es: `;
  return getWhatsAppUrl(text);
};

export interface Addon {
  id: string;
  name: string;
  price?: number;
  description: string;
  tag?: string;
  comingSoon?: boolean;
}

export type IllustrationType = 'local-web' | 'catalog-whatsapp' | 'corporate' | 'funnel';

export interface DeliverableSection {
  title: string;
  items: string[];
}

export interface WebSolution {
  id: string;
  sku: string;
  name: string;
  tagline: string;
  category: Exclude<CategoryId, 'todos'>;
  illustrationType: IllustrationType;
  deliveryDays: string; // '48 a 72 Horas'
  specMetric: string;
  popular?: boolean;
  rating: number;
  reviewsCount: number;
  features: string[]; // Viñetas cortas para la tarjeta principal
  idealFor: string;
  deliverables: string[];
  deliverablesSections: DeliverableSection[];
  techStack: string[];
  timelineSteps: { step: string; title: string; time: string; desc: string }[];
}

export interface OrderDetails {
  solutionId: string;
  solutionName: string;
  basePrice?: number;
  selectedAddons: Addon[];
  totalPrice?: number;
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

### 2. DATOS DE SOLUCIONES (`src/data/solutions.ts`)

Reemplazar el contenido de `src/data/solutions.ts` eliminando todas las imágenes de Unsplash y precios fijos, unificando la entrega a **48 a 72 Horas**:

```typescript
import { WebSolution, Addon, CategoryId } from '../types/solution';

export const categories: { id: CategoryId; label: string; count?: number }[] = [
  { id: 'todos', label: 'Todos los Servicios' },
  { id: 'landing', label: 'Páginas Web Locales' },
  { id: 'ecommerce', label: 'Catálogos & WhatsApp' },
  { id: 'corporate', label: 'Webs Corporativas' },
  { id: 'funnel', label: 'Embudos de Anuncios' },
];

export const globalAddons: Addon[] = [
  {
    id: 'nfc-google-reviews',
    name: 'Placa NFC para Reseñas en Google Maps',
    description: 'Placa física inteligente para tu mostrador. Tus clientes acercan el teléfono y te dejan 5 estrellas al instante.',
    tag: 'PRÓXIMAMENTE',
    comingSoon: true,
  },
  {
    id: 'google-maps-pro',
    name: 'Optimización Avanzada de Ficha Google Maps',
    description: 'Configuración de categorías clave, fotos geolocalizadas y palabras clave para liderar las búsquedas de tu zona.',
    tag: 'LOCAL SEO',
  },
  {
    id: 'menu-qr-digital',
    name: 'Menú o Catálogo Digital con Código QR',
    description: 'Diseño de QR de alta resolución listo para imprimir en mesas, vitrinas o volantes con acceso directo a tu web.',
    tag: 'IMPRESO & FÍSICO',
  },
  {
    id: 'whatsapp-business-setup',
    name: 'Configuración de Respuestas Rápidas WhatsApp',
    description: 'Plantillas de bienvenida, catálogo de productos y mensajes automáticos para atender a tus clientes sin demora.',
    tag: 'VENTAS RÁPIDAS',
  },
];

export const solutions: WebSolution[] = [
  {
    id: 'landing-esencial-local',
    sku: 'SKU: VND-LOC-01',
    name: 'Página Web Esencial Local',
    tagline: 'Tu negocio en Google y WhatsApp con una página rápida que convierte visitantes en clientes directos.',
    category: 'landing',
    illustrationType: 'local-web',
    deliveryDays: '48 a 72 Horas',
    specMetric: 'GOOGLE MAPS + WHATSAPP DIRECTO',
    popular: true,
    rating: 5.0,
    reviewsCount: 42,
    features: [
      'Diseño ultra-rápido optimizado 100% para celulares',
      'Botón directo a tu WhatsApp con mensaje pre-cargado',
      'Integración y enlace a tu perfil de Google Maps',
      'Hosting de alta velocidad incluido (0 costos ocultos)',
      'Sin mensualidades obligatorias ni comisiones por ventas',
    ],
    idealFor: 'Restaurantes, barberías, consultorios, talleres, tiendas físicas y profesionales que buscan más clientes en su ciudad.',
    deliverables: [
      'Página web completa publicada y funcionando en 48-72h',
      'Adaptación móvil perfecta (diseño tipo app)',
      'Enlace a Google Maps y llamada directa',
      'Hosting de alta velocidad configurado y listo',
    ],
    deliverablesSections: [
      {
        title: 'Arquitectura & Experiencia Móvil',
        items: [
          'Estructura de 1 página de alto impacto diseñada para pantallas táctiles',
          'Carga ultra-rápida en redes 4G/5G (<0.8 segundos de respuesta)',
          'Secciones estratégicas: Presentación, Servicios, Galería y Testimonios',
          'Cero plantillas lentas o código inflado de constructores tradicionales',
        ],
      },
      {
        title: 'Captación Local & WhatsApp',
        items: [
          'Botón flotante y enlaces de acción directa a tu WhatsApp oficial',
          'Mensaje pre-configurado para que sepas qué producto o servicio busca el cliente',
          'Geolocalización y enlace directo a cómo llegar en Google Maps',
          'Botón de llamada telefónica inmediata con un solo toque',
        ],
      },
      {
        title: 'Infraestructura & Propiedad',
        items: [
          'Dominio conectado con protocolo de seguridad SSL (HTTPS)',
          'Alojamiento web en servidores de distribución global',
          '100% propiedad del cliente (sin alquileres de plataforma ni ataduras)',
          'Código limpio, indexable por Google para posicionamiento local',
        ],
      },
      {
        title: 'Entrega & Soporte Inicial',
        items: [
          'Despliegue y verificación en vivo garantizada en 48 a 72 horas',
          'Pruebas de envío de mensajes hacia tu WhatsApp antes de la entrega',
          'Guía de uso para compartir tu enlace en Instagram, TikTok y estados',
          'Soporte técnico directo durante el lanzamiento',
        ],
      },
    ],
    techStack: ['React', 'Tailwind CSS', 'Google Maps Local', 'WhatsApp Direct'],
    timelineSteps: [
      { step: '01', title: 'Planificación & Contenido', time: 'Horas 0 - 24', desc: 'Recepción de logo, fotos, lista de servicios y datos de contacto de tu negocio.' },
      { step: '02', title: 'Programación & Optimización', time: 'Horas 24 - 48', desc: 'Construcción en código limpio, calibración de velocidad para móviles e integración con WhatsApp.' },
      { step: '03', title: 'Pruebas & Lanzamiento', time: 'Horas 48 - 72', desc: 'Revisión conjunta, conexión del dominio y puesta en marcha de tu página web.' },
    ],
  },
  {
    id: 'catalogo-whatsapp-pedidos',
    sku: 'SKU: VND-CAT-02',
    name: 'Catálogo & Pedidos por WhatsApp',
    tagline: 'Muestra tus productos ordenados con fotos, categorías y carrito. Tus clientes arman el pedido y te lo envían limpio a WhatsApp.',
    category: 'ecommerce',
    illustrationType: 'catalog-whatsapp',
    deliveryDays: '48 a 72 Horas',
    specMetric: 'CATÁLOGO INTERACTIVO // CARRITO WHATSAPP',
    popular: true,
    rating: 5.0,
    reviewsCount: 38,
    features: [
      'Catálogo visual con categorías, descripciones y disponibilidad',
      'Carrito de compras rápido con cálculo automático del total',
      'Envío del pedido formateado y ordenado directo a tu WhatsApp',
      'Cero comisiones por venta (el 100% del dinero es tuyo)',
      'Panel sencillo para actualizar precios cuando lo necesites',
    ],
    idealFor: 'Tiendas de ropa, bodegones, reposterías, repuestos, cosmética y comercios que venden por redes pero pierden tiempo tomando pedidos a mano.',
    deliverables: [
      'Catálogo digital interactivo publicado en 48-72h',
      'Sistema de carrito de compras sin registro obligatorio para el cliente',
      'Generador de mensaje detallado para WhatsApp (items, cantidades y total)',
      'Hosting ultra-rápido incluido',
    ],
    deliverablesSections: [
      {
        title: 'Módulo de Catálogo & Productos',
        items: [
          'Visualización limpia de productos organizada por categorías claras',
          'Ficha rápida de producto con detalles, variantes y especificaciones',
          'Buscador y filtros instantáneos sin recarga de página',
          'Diseñado para que comprar desde el celular tome menos de 3 clics',
        ],
      },
      {
        title: 'Sistema de Carrito & Checkout WhatsApp',
        items: [
          'Bandeja de carrito flotante con sumatoria automática en tiempo real',
          'Formulario ultra-corto de datos de entrega (Nombre, Dirección, Método de pago)',
          'Compilación del pedido en un solo mensaje estructurado para WhatsApp',
          'Evita errores de transcripción y ahorra horas de atención manual',
        ],
      },
      {
        title: 'Independencia Financiera',
        items: [
          'Cero comisiones por transacción (no cobramos porcentaje de tus ventas)',
          'El cliente te paga directamente a tus cuentas bancarias, Pago Móvil o Zelle',
          'Sin pasarelas de pago engorrosas ni bloqueos de fondos',
          'Velocidad de carga inmediata incluso con conexiones móviles inestables',
        ],
      },
      {
        title: 'Puesta en Marcha en 48-72h',
        items: [
          'Carga inicial de tus productos destacados',
          'Configuración del formato de mensaje para tu número de atención',
          'Enlace optimizado para la biografía de Instagram y botón de TikTok',
          'Acompañamiento en las primeras pruebas de pedido',
        ],
      },
    ],
    techStack: ['React', 'Tailwind CSS', 'WhatsApp Order Builder', 'Local Storage'],
    timelineSteps: [
      { step: '01', title: 'Estructura de Catálogo', time: 'Horas 0 - 24', desc: 'Organización de categorías, listado inicial de productos, precios y métodos de cobro.' },
      { step: '02', title: 'Desarrollo del Carrito', time: 'Horas 24 - 48', desc: 'Programación del flujo de selección y formato automatizado de pedidos para WhatsApp.' },
      { step: '03', title: 'Pruebas de Compra & Entrega', time: 'Horas 48 - 72', desc: 'Simulación de pedidos en vivo, ajustes finales y entrega del catálogo activo.' },
    ],
  },
  {
    id: 'corporativa-autoridad',
    sku: 'SKU: VND-CORP-03',
    name: 'Web Corporativa & Autoridad',
    tagline: 'Presencia digital sólida y profesional para empresas, consultoras, constructoras y marcas que cierran contratos de alto valor.',
    category: 'corporate',
    illustrationType: 'corporate',
    deliveryDays: '48 a 72 Horas',
    specMetric: 'AUTORIDAD B2B // PRESENTACIÓN EJECUTIVA',
    rating: 4.9,
    reviewsCount: 29,
    features: [
      'Arquitectura de varias secciones con diseño editorial exclusivo',
      'Presentación institucional, portafolio de proyectos y clientes',
      'Formularios directos para cotizaciones corporativas',
      'Optimización SEO básica para búsquedas de tu sector',
      'Correos corporativos vinculados a tu propio dominio',
    ],
    idealFor: 'Empresas de servicios, consultoras contables/legales, clínicas, constructoras, firmas de arquitectura y agencias.',
    deliverables: [
      'Web corporativa de alto calibre publicada en 48-72h',
      'Secciones completas de Nosotros, Servicios, Casos de Éxito y Contacto',
      'Conexión con dominio institucional y protocolo SSL de alta seguridad',
      'Botones de contacto ejecutivo directo',
    ],
    deliverablesSections: [
      {
        title: 'Imagen Corporativa de Alto Nivel',
        items: [
          'Diseño sobrio y limpio que transmite solidez, seriedad y confianza inmediata',
          'Estructura de navegación clara para tomadores de decisiones y clientes B2B',
          'Módulos de casos de éxito, clientes atendidos y certificaciones',
          'Identidad visual adaptada estrictamente a la paleta y estilo de tu empresa',
        ],
      },
      {
        title: 'Módulos de Servicios & Solicitud de Propuesta',
        items: [
          'Desglose detallado de cada servicio o unidad de negocio',
          'Formulario de contacto corporativo con campos clave para calificar prospectos',
          'Enlace a canal de atención prioritaria por WhatsApp para dirección comercial',
          'Descarga directa de brochure o presentación comercial en PDF',
        ],
      },
      {
        title: 'Seguridad & Infraestructura Robusta',
        items: [
          'Certificado SSL de cifrado bancario para máxima confiabilidad',
          'Servidores globales con 99.9% de tiempo de actividad garantizado',
          'Compatibilidad completa con pantallas de escritorio, portátiles y celulares',
          'Optimización de títulos y metadatos para indexación en Google',
        ],
      },
      {
        title: 'Despliegue Rápido 48-72h',
        items: [
          'Estructuración del contenido corporativo en las primeras 24 horas',
          'Revisión intermedia para garantizar el tono de comunicación adecuado',
          'Configuración técnica en servidores de alto rendimiento',
          'Entrega formal y traspaso de propiedad completa',
        ],
      },
    ],
    techStack: ['React', 'Tailwind CSS', 'Enterprise SEO', 'B2B Lead Routing'],
    timelineSteps: [
      { step: '01', title: 'Alineación de Marca', time: 'Horas 0 - 24', desc: 'Definición de propuesta de valor, estructura de secciones y recepción de material corporativo.' },
      { step: '02', title: 'Ensamblaje & Maquetación', time: 'Horas 24 - 48', desc: 'Programación de la interfaz ejecutiva, portafolio y canales de contacto calificado.' },
      { step: '03', title: 'Revisión & Salida en Vivo', time: 'Horas 48 - 72', desc: 'Verificación de enlaces, pruebas de seguridad SSL y publicación en el dominio oficial.' },
    ],
  },
  {
    id: 'landing-ads-cro',
    sku: 'SKU: VND-ADS-04',
    name: 'Embudo de Anuncios (Landing CRO)',
    tagline: 'Página de alta conversión diseñada exclusivamente para recibir tráfico de anuncios de Instagram, Facebook, Google o TikTok.',
    category: 'funnel',
    illustrationType: 'funnel',
    deliveryDays: '48 a 72 Horas',
    specMetric: 'ALTA CONVERSIÓN (CRO) // CARGA <0.8S',
    rating: 5.0,
    reviewsCount: 34,
    features: [
      'Estructura psicológica enfocada en una sola llamada a la acción (CTA)',
      'Tiempo de carga inferior a 0.8s para no perder clics que pagaste en pauta',
      'Sin menús distractores ni enlaces que saquen al prospecto de la página',
      'Instalación de Meta Pixel y Google Analytics para medir resultados',
      'Textos persuasivos orientados a la oferta y a la urgencia',
    ],
    idealFor: 'Negocios que invierten en publicidad digital, promociones flash, lanzamientos de productos, eventos o captación masiva de leads.',
    deliverables: [
      'Landing page de venta rápida lista para recibir pauta en 48-72h',
      'Píxeles y eventos de seguimiento configurados',
      'Diseño ultra-ligero enfocado en celulares (origen del 90% del tráfico de ads)',
      'Hosting de tráfico ilimitado',
    ],
    deliverablesSections: [
      {
        title: 'Ingeniería de Conversión (CRO)',
        items: [
          'Titular de impacto visual inmediato y propuesta de valor clara sobre el pliegue',
          'Eliminación de puntos de fuga: 0 enlaces externos para maximizar el clic al objetivo',
          'Bloques de prueba social: testimonios, cifras de clientes y sellos de garantía',
          'Gatillos de claridad y beneficio diseñados para responder las objeciones del cliente',
        ],
      },
      {
        title: 'Velocidad Extrema para Anuncios',
        items: [
          'Tiempo de respuesta inferior a 0.8 segundos comprobado',
          'Cada segundo de demora reduce un 20% la conversión: aquí no se pierde tráfico pagado',
          'Código minificado y optimización máxima de elementos visuales',
          'Carga perfecta incluso con mala señal en transporte público o exteriores',
        ],
      },
      {
        title: 'Medición & Seguimiento Publicitario',
        items: [
          'Integración de Meta Pixel (Facebook & Instagram Ads) para rastrear conversiones',
          'Configuración de eventos personalizados (clic en botón de WhatsApp / Formulario)',
          'Preparada para Google Ads y campañas de retargeting',
          'Métricas limpias para calcular con precisión tu retorno de inversión publicitaria',
        ],
      },
      {
        title: 'Garantía de Despliegue en 48-72h',
        items: [
          'Configuración express alineada con tu fecha de inicio de campaña',
          'Verificación de disparo de píxeles antes de lanzar el primer anuncio',
          'Pruebas de captura de clientes hacia tu canal de ventas',
          'Publicación inmediata y soporte durante el arranque',
        ],
      },
    ],
    techStack: ['React', 'Vite', 'Meta Pixel Ready', 'Google Tag Manager'],
    timelineSteps: [
      { step: '01', title: 'Estrategia del Gancho', time: 'Horas 0 - 24', desc: 'Análisis de tu oferta publicitaria, público objetivo y definición del llamado a la acción único.' },
      { step: '02', title: 'Desarrollo de Alta Velocidad', time: 'Horas 24 - 48', desc: 'Programación ultraligera, configuración de analítica de eventos y conexión de WhatsApp.' },
      { step: '03', title: 'Calibración & Salida a Pauta', time: 'Horas 48 - 72', desc: 'Comprobación de velocidad en Google PageSpeed, prueba de píxel y entrega final.' },
    ],
  },
];
```

---

### 3. COMPONENTE DE ILUSTRACIONES VECTORIALES (`src/components/catalog/ServiceIllustration.tsx`) [NUEVO]

Crear el archivo `src/components/catalog/ServiceIllustration.tsx`:

```tsx
import React from 'react';
import { IllustrationType } from '../../types/solution';

interface ServiceIllustrationProps {
  type: IllustrationType;
  className?: string;
  size?: 'card' | 'hero';
}

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({
  type,
  className = '',
  size = 'card',
}) => {
  const isHero = size === 'hero';

  return (
    <div
      className={`relative w-full overflow-hidden bg-canvas-ice select-none flex items-center justify-center ${
        isHero ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[1/1]'
      } ${className}`}
    >
      {/* Cruces industriales blueprint en las 4 esquinas */}
      <span className="absolute top-1.5 left-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute top-1.5 right-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-1.5 left-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>
      <span className="absolute bottom-1.5 right-2 text-[11px] font-mono text-emerald-pine/40 z-10 pointer-events-none">+</span>

      {/* Marca de agua de código y coordenadas técnicas */}
      <div className="absolute top-2 left-6 text-[8px] font-mono text-slate-400 tracking-wider uppercase pointer-events-none">
        GRID // SYS-0{type === 'local-web' ? '1' : type === 'catalog-whatsapp' ? '2' : type === 'corporate' ? '3' : '4'} // 48-72H
      </div>

      {/* Cuadrícula técnica sutil de fondo */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00381F 1px, transparent 1px),
            linear-gradient(to bottom, #00381F 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ILUSTRACIÓN 1: PÁGINA WEB ESENCIAL LOCAL */}
      {type === 'local-web' && (
        <div className="relative w-[82%] h-[78%] flex items-center justify-center">
          {/* Teléfono Vectorial */}
          <div className="relative w-36 sm:w-44 h-full bg-white border-2 border-emerald-pine shadow-neo-pine flex flex-col justify-between p-2">
            {/* Cabecera del teléfono */}
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-pine/30">
              <div className="w-1.5 h-1.5 bg-emerald-pine" />
              <div className="h-1.5 w-12 bg-silver-chrome border border-emerald-pine/40" />
              <span className="text-[7px] font-mono font-bold text-emerald-pine">4G</span>
            </div>

            {/* Contenido interior de la web */}
            <div className="flex-1 my-2 flex flex-col gap-1.5 justify-center">
              {/* Bloque de Hero */}
              <div className="h-6 bg-emerald-deep/10 border border-emerald-pine/30 p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-deep" />
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="h-1 w-full bg-emerald-pine/70" />
                  <div className="h-1 w-2/3 bg-emerald-pine/40" />
                </div>
              </div>

              {/* Pin de Google Maps estilizado */}
              <div className="bg-white border-2 border-emerald-pine p-1 flex items-center justify-between shadow-[2px_2px_0px_#00381F]">
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-emerald-vibrant fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-[8px] font-mono font-bold text-emerald-pine">MAPS // LOCAL</span>
                </div>
                <span className="w-1.5 h-1.5 bg-emerald-vibrant animate-ping" />
              </div>

              {/* Burbuja / Botón de WhatsApp */}
              <div className="bg-emerald-deep text-white p-1 border border-emerald-pine flex items-center justify-center gap-1 shadow-[2px_2px_0px_#00381F]">
                <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                <span className="text-[8px] font-mono font-black uppercase tracking-wider">WHATSAPP DIRECT</span>
              </div>
            </div>

            {/* Barra inferior */}
            <div className="pt-1 border-t border-emerald-pine/30 flex justify-center">
              <div className="w-8 h-1 bg-emerald-pine" />
            </div>
          </div>

          {/* Badge lateral plateado flotante */}
          <div className="absolute -bottom-2 -right-1 sm:right-2 bg-silver-chrome border-2 border-emerald-pine px-2 py-1 shadow-neo-pine text-[8px] font-mono font-bold text-emerald-pine">
            SLA: 48-72H
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 2: CATÁLOGO & PEDIDOS POR WHATSAPP */}
      {type === 'catalog-whatsapp' && (
        <div className="relative w-[84%] h-[80%] flex items-center justify-center">
          {/* Matriz de Catálogo */}
          <div className="w-full max-w-[210px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1.5">
            {/* Header del catálogo */}
            <div className="flex items-center justify-between pb-1 border-b border-emerald-pine text-[8px] font-mono font-bold text-emerald-pine">
              <span>CATÁLOGO // 0% FEES</span>
              <span className="bg-emerald-pine text-white px-1">[ ACTIVO ]</span>
            </div>

            {/* Grid 2x2 de productos abstractos */}
            <div className="grid grid-cols-2 gap-1.5 my-1">
              {[1, 2].map((i) => (
                <div key={i} className="border border-emerald-pine p-1 bg-canvas-ice flex flex-col gap-1">
                  <div className="h-7 bg-silver-chrome border border-silver-steel flex items-center justify-center">
                    <div className="w-3 h-3 border border-emerald-pine/50 rotate-45" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-8 bg-emerald-pine/80" />
                    <span className="text-[7px] font-mono text-emerald-deep font-bold">+</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Barra de Checkout de WhatsApp */}
            <div className="bg-emerald-pine text-white p-1.5 border border-emerald-pine flex items-center justify-between text-[8px] font-mono">
              <span className="font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white inline-block" /> CARRITO
              </span>
              <span className="bg-white text-emerald-pine font-black px-1.5 py-0.2">
                PEDIR VIA WA →
              </span>
            </div>
          </div>

          {/* Badge flotante de 0 comisiones */}
          <div className="absolute -top-1 -right-2 bg-white border-2 border-emerald-pine px-1.5 py-0.5 shadow-[2px_2px_0px_#00381F] text-[8px] font-mono font-bold text-emerald-vibrant">
            0% COMISIONES
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 3: WEB CORPORATIVA & AUTORIDAD */}
      {type === 'corporate' && (
        <div className="relative w-[86%] h-[80%] flex items-center justify-center">
          {/* Pantalla Desktop Blueprint */}
          <div className="w-full max-w-[220px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1.5">
            {/* Barra de ventana browser */}
            <div className="flex items-center justify-between pb-1 border-b border-emerald-pine">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-pine" />
                <span className="w-1.5 h-1.5 bg-silver-steel" />
                <span className="w-1.5 h-1.5 bg-silver-chrome" />
              </div>
              <span className="text-[7px] font-mono text-emerald-pine font-bold">HTTPS // SSL CERTIFIED</span>
            </div>

            {/* Layout corporativo institucional */}
            <div className="flex gap-1.5 items-stretch my-1">
              {/* Columna izquierda: Presentación ejecutiva */}
              <div className="w-3/5 bg-canvas-ice border border-silver-steel p-1.5 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-2 w-3/4 bg-emerald-pine" />
                  <div className="h-1 w-full bg-slate-300" />
                  <div className="h-1 w-4/5 bg-slate-300" />
                </div>
                <div className="h-3 w-1/2 bg-silver-chrome border border-emerald-pine mt-2 flex items-center justify-center">
                  <span className="text-[6px] font-mono font-bold text-emerald-pine">B2B LEAD</span>
                </div>
              </div>

              {/* Columna derecha: Sello de autoridad */}
              <div className="w-2/5 bg-emerald-deep text-white border border-emerald-pine p-1 flex flex-col items-center justify-center text-center">
                <div className="w-6 h-6 border border-white flex items-center justify-center mb-1">
                  <span className="text-[8px] font-mono font-black">★</span>
                </div>
                <span className="text-[6px] font-mono uppercase leading-tight font-bold">
                  AUTORIDAD & CONFIANZA
                </span>
              </div>
            </div>

            {/* Métricas de Uptime */}
            <div className="flex justify-between items-center pt-1 border-t border-silver-steel text-[7px] font-mono text-slate-600">
              <span>UPTIME: 99.9%</span>
              <span className="text-emerald-pine font-bold">[ ENTREGA: 48-72H ]</span>
            </div>
          </div>
        </div>
      )}

      {/* ILUSTRACIÓN 4: EMBUDO DE ANUNCIOS (ADS CRO) */}
      {type === 'funnel' && (
        <div className="relative w-[84%] h-[80%] flex items-center justify-center">
          {/* Arquitectura de Embudo */}
          <div className="w-full max-w-[210px] bg-white border-2 border-emerald-pine shadow-neo-pine p-2 flex flex-col gap-1">
            {/* Entrada de tráfico */}
            <div className="bg-silver-chrome border border-emerald-pine p-1 flex items-center justify-between text-[7px] font-mono font-bold text-emerald-pine">
              <span>TRÁFICO: ADS // IG // TIKTOK</span>
              <span className="text-emerald-vibrant">100% MÓVIL</span>
            </div>

            {/* Flujo de embudo */}
            <div className="flex flex-col items-center py-1 gap-1">
              <div className="w-full h-4 bg-emerald-pine/10 border border-emerald-pine flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-emerald-pine">1. GANCHO VISUAL DIRECTO</span>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emerald-pine" />
              <div className="w-4/5 h-4 bg-emerald-pine/20 border border-emerald-pine flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-emerald-pine">2. OFERTA & PRUEBA SOCIAL</span>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emerald-pine" />
              <div className="w-3/5 h-5 bg-emerald-deep text-white border-2 border-emerald-pine flex items-center justify-center shadow-[2px_2px_0px_#00381F]">
                <span className="text-[8px] font-mono font-black tracking-wider">WHATSAPP / LEAD</span>
              </div>
            </div>

            {/* Métrica de velocidad */}
            <div className="pt-1 border-t border-emerald-pine flex items-center justify-between text-[7px] font-mono font-bold">
              <span className="text-emerald-vibrant">VELOCIDAD: &lt;0.8s</span>
              <span className="text-emerald-pine">[ 48-72H ]</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
```

---

### 4. TARJETAS DE SERVICIO EN CATÁLOGO (`src/components/catalog/ProductCard.tsx`)

Reemplazar `src/components/catalog/ProductCard.tsx`:

```tsx
import React from 'react';
import { WebSolution, getServiceConsultationUrl } from '../../types/solution';
import { ServiceIllustration } from './ServiceIllustration';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface ProductCardProps {
  solution: WebSolution;
  onSelectSolution: (solution: WebSolution) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ solution, onSelectSolution }) => {
  return (
    <article className="group relative flex flex-col bg-white border-2 border-emerald-pine shadow-neo-pine hover:shadow-neo-pine-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-left">
      
      {/* Contenedor Superior: Badges y SLA */}
      <div className="flex items-center justify-between p-2 bg-canvas-ice border-b-2 border-emerald-pine text-[9px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-emerald-vibrant inline-block" />
          <span className="font-bold text-emerald-pine">{solution.sku}</span>
        </div>
        <span className="bg-white border border-emerald-pine px-1.5 py-0.5 font-bold text-emerald-pine">
          [ SLA: {solution.deliveryDays} ]
        </span>
      </div>

      {/* Ilustración Técnica Vectorial en Verde Esmeralda y Plata */}
      <div 
        onClick={() => onSelectSolution(solution)} 
        className="cursor-pointer border-b-2 border-emerald-pine group-hover:opacity-95 transition-opacity"
      >
        <ServiceIllustration type={solution.illustrationType} size="card" />
      </div>

      {/* Cuerpo Informativo */}
      <div className="p-4 flex flex-col flex-1 justify-between text-left">
        <div>
          {/* Métrica de Especificación */}
          <div className="mb-2 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
            {solution.specMetric}
          </div>

          {/* Título de la Solución */}
          <h3 
            onClick={() => onSelectSolution(solution)}
            className="text-base sm:text-lg font-black uppercase tracking-wider text-emerald-pine hover:text-emerald-vibrant cursor-pointer transition-colors mb-2"
          >
            {solution.name}
          </h3>

          {/* Tagline / Breve resumen */}
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {solution.tagline}
          </p>

          {/* 3 Viñetas de lo que incluye */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-silver-steel text-xs text-slate-700">
            {solution.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-pine flex-shrink-0 mt-1.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque Inferior: Cotización & Botones de Acción */}
        <div className="pt-3 border-t-2 border-emerald-pine">
          {/* Estado de Cotización (Sin precios fijos) */}
          <div className="flex items-center justify-between mb-3 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-pine block">
                [ COTIZACIÓN A MEDIDA ]
              </span>
              <span className="text-[10px] text-slate-500">
                Presupuesto según tu objetivo
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold bg-silver-chrome px-1.5 py-0.5 border border-silver-steel text-emerald-pine">
              48-72H
            </span>
          </div>

          {/* Botones de Acción */}
          <div className="grid grid-cols-5 gap-1.5">
            {/* Botón Principal: Ver Subpágina con Alcance Completo */}
            <button
              onClick={() => onSelectSolution(solution)}
              className="col-span-4 h-10 btn-neo-emerald text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <span>[ VER DETALLES Y ALCANCE ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Botón Secundario: Asesoría Directa a WhatsApp */}
            <a
              href={getServiceConsultationUrl(solution.name, solution.sku)}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 h-10 border-2 border-emerald-pine bg-white hover:bg-canvas-ice text-emerald-pine flex items-center justify-center transition-colors shadow-neo-pine"
              title="Solicitar asesoría rápida por WhatsApp"
              aria-label="Asesoría por WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-pine" />
            </a>
          </div>

        </div>

      </div>

    </article>
  );
};
```

---

### 5. GRILLA DEL CATÁLOGO (`src/components/catalog/ProductGrid.tsx`)

Actualizar `src/components/catalog/ProductGrid.tsx`:

```tsx
import React from 'react';
import { solutions } from '../../data/solutions';
import { ProductCard } from './ProductCard';
import { WebSolution, CategoryId } from '../../types/solution';

interface ProductGridProps {
  category: CategoryId;
  onSelectSolution: (sol: WebSolution) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category, onSelectSolution }) => {
  const filtered =
    category === 'todos'
      ? solutions
      : solutions.filter((s) => s.category === category);

  return (
    <section id="catalogo" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Barra Técnica Superior */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b-2 border-emerald-pine gap-2 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-emerald-vibrant inline-block animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-emerald-pine font-mono">
            CATÁLOGO DE SOLUCIONES // {category.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
          <span className="font-bold text-emerald-pine">SLA GARANTIZADO: 48 A 72 HORAS</span>
          <span>•</span>
          <span>{filtered.length} SERVICIOS DISPONIBLES</span>
        </div>
      </div>

      {/* Grilla de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((sol) => (
          <ProductCard
            key={sol.id}
            solution={sol}
            onSelectSolution={onSelectSolution}
          />
        ))}
      </div>
    </section>
  );
};
```

---

### 6. SUBPÁGINA DEDICADA DE SERVICIO (`src/components/catalog/ServiceDetailPage.tsx`) [NUEVO]

Crear el archivo `src/components/catalog/ServiceDetailPage.tsx`:

```tsx
import React, { useEffect } from 'react';
import { WebSolution, getServiceConsultationUrl, globalAddons } from '../../types/solution';
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

  const whatsappUrl = getServiceConsultationUrl(solution.name, solution.sku);

  return (
    <div className="min-h-screen bg-canvas-ice text-black text-left pb-16">
      
      {/* BARRA SUPERIOR DE SUBPÁGINA (STICKY BREADCRUMB) */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-emerald-pine px-4 sm:px-8 py-3">
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
                className="btn-neo-emerald h-12 px-6 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-neo-pine"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>SOLICITAR ASESORÍA Y COTIZACIÓN POR WHATSAPP →</span>
              </a>

              <button
                onClick={onBack}
                className="btn-neo-silver h-12 px-5 text-xs font-black uppercase tracking-wider flex items-center justify-center"
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

        {/* BLOQUE 3: MODELO DE COTIZACIÓN TRANSPARENTE */}
        <section className="bg-emerald-pine text-white p-6 sm:p-8 border-2 border-emerald-pine shadow-neo-pine">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-vibrant block mb-1">
              [ COTIZACIÓN TRANSPARENTE // SIN COSTOS OCULTOS ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight mb-3">
              ¿CÓMO DETERMINAMOS EL PRESUPUESTO?
            </h3>
            <p className="text-xs sm:text-sm text-silver-chrome leading-relaxed mb-6 font-medium">
              No creemos en tarifas fijas infladas ni en cobrarte mensualidades obligatorias por una web que es tuya. Evaluamos el tipo de negocio, la cantidad de productos o servicios que necesitas mostrar y te entregamos un presupuesto exacto y accesible mediante una asesoría directa por WhatsApp en menos de 15 minutos.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-silver-steel mb-6">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-vibrant" />
                Cero comisiones por ventas
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-vibrant" />
                Hosting incluido
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
              className="inline-flex items-center gap-2 bg-white text-emerald-pine hover:bg-canvas-ice px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#187E5F] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>RECIBIR ASESORÍA Y COTIZACIÓN AHORA MISMO →</span>
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
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t-2 border-emerald-pine p-3 shadow-neo-pine">
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
```

---

### 7. ENRUTAMIENTO LIGERO EN `src/App.tsx`

Reemplazar `src/App.tsx`:

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

  // Sincronización del hash de la URL para historial del navegador (Atrás / Adelante)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/servicio/')) {
        setSelectedSolutionId(hash.replace('#/servicio/', ''));
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

  const activeSolution = solutions.find((s) => s.id === selectedSolutionId);

  return (
    <CartProvider>
      <div id="top" className="min-h-screen flex flex-col bg-white text-black antialiased selection:bg-emerald-pine selection:text-white pb-14 md:pb-0">
        
        {/* Ticker Infinito Superior */}
        <AnnouncementTicker />

        {/* Cabecera Brutalista */}
        <Header onOpenConsult={() => setIsConsultOpen(true)} />

        {/* CUERPO: RENDERIZADO CONDICIONAL DE SUBPÁGINA O LANDING */}
        {activeSolution ? (
          <ServiceDetailPage
            solution={activeSolution}
            onBack={handleBackToCatalog}
          />
        ) : (
          <main className="flex-1">
            {/* Hero Banner VÉNDO 2.0 */}
            <HeroBanner
              onExplore={handleExploreCatalog}
              onOpenConsult={() => setIsConsultOpen(true)}
            />

            {/* Pestañas de Filtro del Catálogo */}
            <CategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Grilla de Servicios con Ilustraciones Vectoriales y SLA 48-72h */}
            <ProductGrid
              category={activeCategory}
              onSelectSolution={handleSelectSolution}
            />

            {/* Ficha Técnica y Matriz de Rendimiento */}
            <TechnicalSpecs />

            {/* Protocolo de Trabajo en 3 Pasos */}
            <ProcessSection />

            {/* Preguntas Frecuentes */}
            <FaqSection />
          </main>
        )}

        {/* Footer Unificado */}
        <Footer />

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

      </div>
    </CartProvider>
  );
}
```

---

### 8. VERIFICACIÓN FINAL

Una vez que OpenCode aplique los cambios, ejecutar el comando único de validación:

```bash
npm run build
```

El build debe pasar con éxito:
```text
✓ built in ...ms
```
Cero errores de TypeScript y cero imports huérfanos.
