# VÉNDO ® — PLAN MAESTRO DE MEJORAS ESTÉTICAS Y COPYWRITING
### Estándar Visual "Kinetic Brutalism" & Des-robotización de Textos (Anti-AI Footprint)
**Ruta del Proyecto:** `/home/joel/Proyectos/vendo-web/`  
**Diseñado para ejecución con:** OpenCode / Cursor / VS Code / Antigravity

---

## 1. Análisis y Blindaje de la Paleta de Color Oficial

Se respeta de forma estricta y sin alteraciones la paleta monocromática de alto contraste y acento de conversión establecida en el proyecto:

| Token / Nombre | Valor Hexadecimal | Uso Obligatorio en la Interfaz | Regla de Diseño |
| :--- | :--- | :--- | :--- |
| **Canvas / Base White** | `#FFFFFF` (`bg-white`) | Fondo principal de la landing, tarjetas y modales. | Cero fondos con tintes pasteles o cremas desaturados. Blanco puro. |
| **Monolith Black** | `#000000` (`bg-black`, `text-black`) | Tipografía dominante, bordes estructurales de 1px, botones primarios, hero dark block y cabecera invertida. | Negro puro absoluto (#000000). Prohibido usar grises oscuros tipo #1F2937 para textos principales. |
| **Crimson Red (Acento)** | `#DC2626` (`text-red-600`, `bg-red-600`) | Exclusivo para: micro-badges de urgencia (`[ BEST SELLER ]`, `[ 2 CUPOS ]`), puntos LED parpadeantes, tachados de descuento y decoradores subrayados. | Uso quirúrgico: máximo un 3% a 5% de la superficie visual. Nunca como fondo de secciones completas. |
| **Technical Neutral Light** | `#F5F5F5` / `#FAFAFA` (`bg-neutral-50` / `100`) | Fondo de filas de datos, bloques de especificaciones secundarias y celdas alternadas de tablas. | Proporciona separación mecánica sin recurrir a sombras. |
| **Hairline Border Rule** | `#000000` y `#E5E5E5` (`border-black` / `border-neutral-200`) | Todas las líneas divisorias, bordes de botones, celdas y tarjetas. Siempre de `1px solid`. | Prohibido el uso de sombras (`box-shadow: none` universal). |
| **Technical Muted Text** | `#737373` / `#A3A3A3` (`text-neutral-500` / `text-neutral-400`) | Metadatos técnicos, códigos SKU, timestamps, leyendas de moneda y etiquetas monoespaciadas. | Mantiene la jerarquía visual sin reducir la legibilidad. |
| **Metric Benchmark (Verde)** | `#10B981` (`text-emerald-500`) | Solo para métricas de rendimiento aprobadas (ej. `99/100 Core Web Vitals`). | Uso restringido a datos cuantitativos verificables. |

---

## 2. Hallazgos del Estudio con la Herramienta Stitch (`Kinetic Brutalism`)

A través de la generación en **StitchMCP** (Proyecto `VÉNDO ® — Sharp Catalog & Web Engineering`, tema *Kinetic Brutalism*), se han derivado principios de diseño para transformar la web de una tienda típica a una **terminal de ingeniería digital transaccional**:

1. **Cellular Grid Composition (Composición Celular sin Gaps Flotantes)**:
   * En lugar de tarjetas flotantes con `gap-6` y bordes aislados, los módulos pueden compartir bordes de 1px (`border-collapse` conceptual), emulando una hoja de especificaciones de hardware o una terminal de despacho de inventario.
2. **Monospace Tabular Data Alignment**:
   * Todos los números, precios, tiempos de entrega y métricas de servidor deben estar alineados usando la fuente monoespaciada con la propiedad CSS `font-variant-numeric: tabular-nums` (`tabular-nums font-mono`).
3. **Micro-Ingeniería Visual (Detalles Brutalistas)**:
   * **SKU Codes**: Asignar un identificador de inventario a cada servicio (ej. `SKU: VND-LND-01`, `BATCH: 2026-Q2`).
   * **Indicador de Estado en Vivo (Live Status)**: Un pequeño módulo de status operativo en tiempo real: `[● SISTEMA OPERATIVO // LATENCIA: 14MS // DESPLIEGUE EN 320 NODOS EDGE]`.
   * **Marcas de Cruces en Esquinas (`+`)**: Micro-marcas tipográficas `+` en las intersecciones de contenedores para reforzar la estética de plano técnico / blueprint industrial.
   * **Barra de Progreso Segmentada**: En el carrito, sustituir la barra continua genérica por un medidor de bloques segmentados estilo display digital: `[████████░░] 80%`.

---

## 3. Des-robotización de Copywriting (Eliminación de la Huella de IA)

### Diagnóstico de la "Huella de IA" en el Proyecto Actual
Muchos textos generados por modelos de lenguaje caen en fórmulas predecibles:
* **Fórmulas de IA detectadas:** "Diseñada específicamente para transformar visitas en clientes...", "Secuencia automatizada para calificar prospectos y cerrar ventas con mínimo esfuerzo...", "Te respondemos en menos de 15 minutos para orientarte sobre la mejor arquitectura...", "Garantía de ajustes ilimitados: no lanzamos hasta que estés 100% satisfecho...".
* **El problema:** Suenan a plantilla corporativa, a bot de soporte y a promesa vacía de curso de marketing de 2020.
* **El nuevo tono VÉNDO:** Directo, quirúrgico, técnico, implacable, con números de ingeniería, vocabulario de programador y honestidad comercial radical.

### Tabla Comparativa de Copys: Antes (IA Genérica) vs. Después (VÉNDO Editorial)

| Componente | Texto Anterior (Huella de IA) | Nuevo Texto VÉNDO (Crudo, Técnico, Humano) |
| :--- | :--- | :--- |
| **Ticker Superior** | `DROP 01 ACTIVO // INFRAESTRUCTURA WEB PARA EMPRESAS Y MARCAS • ENTREGA GARANTIZADA EN 48 A 72 HORAS` | `/// DEPLOY BATCH 2026.04 // SLA GARANTIZADO DE ENTREGA EN 72H // VELOCIDAD LCP <0.8S COMPROBADA EN GOOGLE // 2 CUPOS RESTANTES ESTA SEMANA ///` |
| **Hero Tagline** | `INFRAESTRUCTURA WEB QUE MULTIPLICA VENTAS` | `INFRAESTRUCTURA WEB DE ALTA CONVERSIÓN.` *(Subtítulo: Código puro sin constructores lentos. Programamos páginas web, tiendas online y embudos con tiempo de respuesta inferior a 0.8s. Sin comisiones ocultas, sin código basura de WordPress.)* |
| **Hero Botón 2** | `[ ASESORÍA DIRECTA VÍA WHATSAPP ]` | `[ INICIAR BRIEF TÉCNICO VÍA WHATSAPP → ]` |
| **Landing Page CRO** | `Diseñada específicamente para transformar visitas de anuncios en clientes listos para comprar.` | `Arquitectura de 1 sola página calibrada para tráfico pago de Meta Ads, TikTok y Google Ads. Cero puntos de fuga, tiempo de carga en frío de 0.65s y formulario directo a WhatsApp en 1 toque.` |
| **Tienda Online Pro** | `Catálogo de venta ágil, carrito sin fricción y pasarela de pago para vender en automático 24/7.` | `Motor e-commerce ultrarrápido sin plugins pesados ni comisiones por venta. Catálogo instantáneo, carrito deslizante en memoria y checkout enlazado a Stripe / Mercado Pago.` |
| **Web Corporativa** | `Proyecta solidez institucional y confianza inquebrantable ante empresas, inversores y clientes B2B.` | `Sitio institucional de alto impacto para consultoras, firmas de abogados y empresas B2B. Presentación de casos, agendamiento Cal.com/Calendly y posición sólida en Google.` |
| **Embudo B2B** | `Secuencia automatizada para calificar prospectos y cerrar ventas de alto valor con mínimo esfuerzo.` | `Pipeline de captación con filtro de clientes. Cuestionario condicional que descarta prospectos sin presupuesto antes de que toquen tu agenda o tu WhatsApp.` |
| **Ficha Técnica (Modulo 1)** | `El 53% de los usuarios abandona una web si tarda más de 3 segundos en cargar. Desarrollamos sin constructores lentos.` | `Zero Bloatware: 0 plugins innecesarios, 0 constructores tipo Elementor. Código Next.js/React compilado que pasa los Core Web Vitals de Google en verde oscuro (98-100).` |
| **Ficha Técnica (Modulo 3)** | `Conectamos tu web directamente al WhatsApp de tu equipo de ventas o a tu pasarela de cobro...` | `Checkout Directo: La orden viaja con resumen estructurado de productos directamente al WhatsApp del vendedor o procesa el pago vía webhook en Stripe/Mercado Pago sin intermediarios comisionistas.` |
| **Proceso Paso 02** | `PROGRAMACIÓN EN 72H: Ensamblamos el diseño, redactamos los copys de venta y conectamos tus canales de pago.` | `SPRINT DE DESARROLLO 72H: Programación en rama de producción, redacción de textos de venta basada en tu cliente ideal y configuración de pasarelas. Puedes monitorear el avance en un link privado de staging.` |
| **Garantía** | `No lanzamos hasta que estés 100% satisfecho con el resultado y la velocidad.` | `Protocolo de Revisión Quirúrgica: Tienes rondas de ajustes ilimitadas en el entorno de pruebas antes del despliegue final a tu dominio. Si el sitio no carga en menos de 1.2s en la prueba de PageSpeed, optimizamos el código sin costo adicional.` |
| **FAQ 01 (Materiales)** | `Solo lo esencial: logotipo (si lo tienes), tus servicios o catálogo... Si no tienes textos redactados, nuestro equipo selecciona imágenes profesionales de archivo con IA...` | `Lo básico: logotipo (en PNG/SVG si tienes), lista de servicios o productos con sus precios, y a dónde quieres recibir los clientes (teléfono/email). Si no tienes fotos o textos, nosotros redactamos los copys comerciales y seleccionamos fotografía editorial de alta resolución sin cobrarte extra.` |
| **FAQ 04 (Hosting)** | `Puedes agregar el paquete de Dominio .com + Hosting SSL... o si ya tienes tu propio hosting lo conectamos gratis.` | `Nuestras webs operan sobre arquitectura Serverless (Vercel / Cloudflare Edge). El costo de hosting base es de $0/mes para la inmensa mayoría de marcas porque no usa servidores dedicados lentos de cPanel. Si necesitas dominio .com nuevo, lo gestionamos en el checkout por $49/año incluyendo SSL.` |

---

## 4. Nuevos Micro-Componentes y Detalles Visuales a Implementar

### A. Elemento: Terminal Status Bar en el Header / Pre-Hero
Una barra de estatus que le da autenticidad técnica inmediata al visitante:
```tsx
<div className="bg-neutral-100 border-b border-black py-1 px-4 text-[10px] font-mono flex items-center justify-between uppercase">
  <div className="flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
    <span className="font-bold text-black">VÉNDO CORE ENGINE // V2.6.4</span>
    <span className="hidden sm:inline text-neutral-400">|</span>
    <span className="hidden sm:inline text-neutral-600">EDGE NETWORK: ACTIVA (320 NODOS)</span>
  </div>
  <div className="flex items-center gap-3">
    <span className="text-neutral-500">TIEMPO PROMEDIO RESPUESTA: <strong>0.64s</strong></span>
    <span className="text-red-600 font-bold">[ BATCH Q2: 2 CUPOS ]</span>
  </div>
</div>
```

### B. Elemento: Badges con Código SKU en las Tarjetas de Catálogo
Cada tarjeta en `ProductCard.tsx` incorpora su código SKU y especificación técnica rápida en la parte superior:
```tsx
<div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200 text-[10px] font-mono text-neutral-500">
  <span className="font-bold text-black">{solution.sku || 'SKU: VND-01'}</span>
  <span>SLA: {solution.deliveryDays}</span>
</div>
```

### C. Elemento: Matriz Comparativa Técnica (Web Tradicional vs. Arquitectura VÉNDO)
Integrar dentro de `TechnicalSpecs.tsx` una tabla brutalista de especificaciones para justificar el valor frente a agencias de WordPress genéricas:
```tsx
<div className="mt-8 border border-black bg-white overflow-x-auto">
  <table className="w-full text-left border-collapse text-xs font-mono">
    <thead>
      <tr className="bg-black text-white border-b border-black uppercase text-[10px] tracking-wider">
        <th className="p-3 border-r border-neutral-700">PARÁMETRO TÉCNICO</th>
        <th className="p-3 border-r border-neutral-700 text-neutral-400">WEB CONVENCIONAL (WORDPRESS / WIX)</th>
        <th className="p-3 text-emerald-400 font-bold">ARQUITECTURA VÉNDO ® (REACT / NEXT / TAILWIND)</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-neutral-200">
      <tr>
        <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Velocidad de Carga (LCP)</td>
        <td className="p-3 text-red-600 border-r border-neutral-200">3.5s - 6.2s (Pesada por plugins)</td>
        <td className="p-3 font-bold text-black">&lt; 0.8s (Compilada en Edge)</td>
      </tr>
      <tr>
        <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Costo de Mantenimiento</td>
        <td className="p-3 text-neutral-600 border-r border-neutral-200">$20 - $50 USD / mes (cPanel + plugins)</td>
        <td className="p-3 font-bold text-black">$0 USD / mes (Arquitectura Serverless)</td>
      </tr>
      <tr>
        <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Vulnerabilidad a Caídas y Hacks</td>
        <td className="p-3 text-neutral-600 border-r border-neutral-200">Alta (Actualizaciones de plugins rotos)</td>
        <td className="p-3 font-bold text-black">Cero (Código estático blindado con CDN global)</td>
      </tr>
      <tr>
        <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Conversión a WhatsApp</td>
        <td className="p-3 text-neutral-600 border-r border-neutral-200">Botón flotante genérico sin contexto</td>
        <td className="p-3 font-bold text-black">Pre-llenado inteligente con datos de orden y SKU</td>
      </tr>
    </tbody>
  </table>
</div>
```

### D. Elemento: Medidor de Descuento / Beneficio Segmentado en el Carrito (`CartDrawer.tsx`)
En lugar de una barra de progreso suave, un indicador táctico de casillas:
```tsx
{/* Indicador de Dominio Bonificado Segmentado */}
<div className="bg-neutral-100 p-3 border-b border-black">
  <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-black mb-1.5 font-mono">
    {remaining > 0 ? (
      <span>FALTAN {formatCurrency(remaining)} PARA DOMINIO .COM + SSL ANUAL BONIFICADO</span>
    ) : (
      <span className="text-emerald-700 font-bold">✓ DOMINIO .COM + SSL 100% BONIFICADOS</span>
    )}
    <span>[{progressPercent}%]</span>
  </div>
  <div className="grid grid-cols-10 gap-1 h-2">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className={`h-full border border-black ${
          (i + 1) * 10 <= progressPercent ? 'bg-black' : 'bg-white'
        }`}
      />
    ))}
  </div>
</div>
```

---

## 5. Guía de Modificación Archivo por Archivo (Listo para OpenCode)

A continuación se detalla el contenido exacto y las modificaciones de código para cada archivo:

### Archivo 1: `src/types/solution.ts`
Agregar los campos de ingeniería `sku`, `specMetric`, y `tierFeatures` para dar mayor densidad y evitar la apariencia de tienda genérica.

```typescript
export type CategoryId = 'todos' | 'landing' | 'ecommerce' | 'corporate' | 'funnel';

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
}

export interface WebSolution {
  id: string;
  sku: string;               // Nuevo: ej. "VND-LND-01"
  name: string;
  tagline: string;
  category: Exclude<CategoryId, 'todos'>;
  price: number;
  originalPrice: number;
  deliveryDays: string;
  specMetric: string;         // Nuevo: ej. "TTFB < 50ms" o "LCP 0.65s"
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

### Archivo 2: `src/data/solutions.ts`
Reemplazar con el catálogo depurado y con los nuevos copys humanos y técnicos.

```typescript
import { WebSolution, Addon, CategoryId } from '../types/solution';

export const categories: { id: CategoryId; label: string; count?: number }[] = [
  { id: 'todos', label: 'Todas las Soluciones' },
  { id: 'landing', label: 'Landing Pages CRO' },
  { id: 'ecommerce', label: 'Tiendas Online Pro' },
  { id: 'corporate', label: 'Webs Corporativas' },
  { id: 'funnel', label: 'Embudos de Adquisición' },
];

export const globalAddons: Addon[] = [
  {
    id: 'domain-hosting',
    name: 'Infraestructura Edge + Dominio .com (1 año)',
    price: 49,
    description: 'Servidor CDN en Cloudflare/Vercel con SSL Wildcard, redundancia global y 0 latencia.',
    tag: 'RECOMENDADO',
  },
  {
    id: 'payment-gateway',
    name: 'Checkout Automatizado (Stripe / Mercado Pago)',
    price: 69,
    description: 'Pasarela en 1-clic configurada con tu cuenta bancaria para cobro automático con tarjeta o PSE.',
    tag: 'VENTAS DIRECTAS',
  },
  {
    id: 'copywriting-cro',
    name: 'Copywriting Transaccional & Persuasión Comercial',
    price: 79,
    description: 'Redacción de titulares, argumentos de venta y objeciones calibrados para tu cliente específico.',
    tag: 'ALTA CONVERSIÓN',
  },
  {
    id: 'crm-whatsapp',
    name: 'Pipeline & Webhook a WhatsApp / CRM',
    price: 59,
    description: 'Despacho instantáneo de datos del comprador a tu teléfono en cuanto completan el formulario.',
    tag: 'CERO PÉRDIDA',
  },
];

export const solutions: WebSolution[] = [
  {
    id: 'landing-express-cro',
    sku: 'SKU: VND-LND-01',
    name: 'Landing Page Sprint CRO',
    tagline: 'Arquitectura de una sola página diseñada para recibir pauta de Meta Ads, TikTok o Google con tasa de rebote mínima.',
    category: 'landing',
    price: 289,
    originalPrice: 450,
    deliveryDays: '48 a 72 Horas',
    specMetric: 'LCP: 0.62S // 99 CORE VITALS',
    popular: true,
    spotsLeft: 2,
    rating: 4.9,
    reviewsCount: 38,
    images: {
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Velocidad de carga en frío < 0.8s (Core Web Vitals en verde)',
      'Estructura de persuasión directa sin bloques de relleno',
      'Despacho de contacto instantáneo a WhatsApp con mensaje preconfigurado',
      'Formulario de captura sin campos innecesarios',
      'Pixeles de seguimiento (Meta Ads, Google Analytics 4, TikTok Pixel) integrados',
    ],
    idealFor: 'Marcas de servicios, consultores, profesionales independientes, lanzamientos y clínicas que invierten en publicidad.',
    deliverables: [
      'Código fuente completo React/Tailwind desplegado en servidor Edge',
      'Adaptación milimétrica para móviles (80% del tráfico)',
      'Optimización de metadatos para indexación en Google',
      'Garantía técnica de ajustes durante 30 días post-lanzamiento',
    ],
    techStack: ['React 18', 'Tailwind CSS v3', 'Cloudflare Edge', 'WhatsApp API'],
  },
  {
    id: 'ecommerce-turnkey-sales',
    sku: 'SKU: VND-ECM-02',
    name: 'E-commerce Engine Pro',
    tagline: 'Catálogo de venta ágil, carrito en memoria ultrarrápido y pasarelas de pago directas sin comisiones por transacción.',
    category: 'ecommerce',
    price: 590,
    originalPrice: 890,
    deliveryDays: '5 a 7 Días',
    specMetric: 'CHECKOUT EN 1-CLIC // 0% FEE',
    popular: true,
    spotsLeft: 3,
    rating: 5.0,
    reviewsCount: 52,
    images: {
      preview: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Catálogo interactivo con filtrado dinámico en memoria (0 recargas)',
      'Slide Cart lateral con cálculo automático y promociones por umbral',
      'Conexión directa a Stripe, Mercado Pago o botón de pedido estructurado a WhatsApp',
      'Panel de control limpio para editar precios, fotos y stock sin tocar código',
      'Cero costos de plugins mensuales como en Shopify o WooCommerce',
    ],
    idealFor: 'Marcas de moda streetwear, cosmética, alimentos o productos físicos que quieren independencia operativa.',
    deliverables: [
      'Hasta 50 productos iniciales catalogados con variantes (talla, color)',
      'Módulo de cálculo de envíos fijos o retiro en tienda',
      'Buscador instantáneo sin latencia',
      'Video tutorial de 10 minutos para gestionar el inventario',
    ],
    techStack: ['React', 'Next.js API', 'Stripe / MP', 'Tailwind CSS'],
  },
  {
    id: 'corporate-brand-authority',
    sku: 'SKU: VND-CORP-03',
    name: 'Sitio Institucional & Autoridad',
    tagline: 'Arquitectura sobria de alto prestigio para proyectar solidez ante clientes corporativos, licitaciones e inversores.',
    category: 'corporate',
    price: 490,
    originalPrice: 750,
    deliveryDays: '4 a 6 Días',
    specMetric: 'SEO ON-PAGE // 100% AUTOGESTIÓN',
    popular: false,
    spotsLeft: 4,
    rating: 4.8,
    reviewsCount: 29,
    images: {
      preview: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Estructura multi-sección: Nosotros, Casos de Éxito, Servicios, Alianzas',
      'Integración directa con agenda online (Cal.com / Calendly)',
      'Optimización semántica de código para posicionamiento orgánico en Google',
      'Protección anti-spam en formularios sin molestos captchas lentos',
      'Diseño editorial de corte recto con tipografía institucional',
    ],
    idealFor: 'Firmas legales, consultoras de negocios, agencias de servicios, empresas constructoras y startups B2B.',
    deliverables: [
      'Hasta 6 páginas/secciones estructuradas y redactadas profesionalmente',
      'Configuración de dominio corporativo y correos @tunegocio.com',
      'Alta e indexación en Google Search Console',
      'Archivos abiertos y respaldo completo del código',
    ],
    techStack: ['TypeScript', 'React', 'Cal.com API', 'Tailwind CSS'],
  },
  {
    id: 'sales-funnel-leadgen',
    sku: 'SKU: VND-FNL-04',
    name: 'Embudo de Calificación B2B',
    tagline: 'Secuencia interactiva con formulario condicional para filtrar curiosos y hablar exclusivamente con clientes calificados.',
    category: 'funnel',
    price: 390,
    originalPrice: 620,
    deliveryDays: '3 a 4 Días',
    specMetric: 'FILTRO PASO A PASO // ALTO TICKET',
    popular: false,
    spotsLeft: 1,
    rating: 4.9,
    reviewsCount: 21,
    images: {
      preview: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Página de Captura + Cuestionario de Precalificación + Página de Confirmación',
      'Lógica condicional: sólo quienes cumplen presupuesto pasan a la agenda',
      'Integración inmediata con WhatsApp o correo del área comercial',
      'Módulo de testimonios y prueba de autoridad con métricas reales',
      'Seguimiento de eventos con Facebook Pixel y CAPI',
    ],
    idealFor: 'Venta de servicios de alto valor (High-Ticket), programas de formación, software y servicios de consultoría.',
    deliverables: [
      'Secuencia completa de 3 pasos montada y testeada',
      'Cuestionario interactivo optimizado para celular',
      'Automatización de alerta con todos los datos del lead',
      'Sesión de entrega y validación de conversiones en vivo',
    ],
    techStack: ['React', 'Typeform / Tally', 'Meta Conversion API', 'Tailwind'],
  },
];
```

---

### Archivo 3: `src/components/layout/AnnouncementTicker.tsx`
Textos con datos técnicos reales y códigos de lote:

```tsx
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
        {[...messages, ...messages, ...messages].map((msg, i) => (
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

### Archivo 4: `src/components/home/HeroBanner.tsx`
Agregar la barra técnica de micro-latencia (`Terminal Status Bar`), los títulos depurados y las marcas visuales de blueprint (`+`):

```tsx
import React from 'react';
import { ArrowDown, Terminal } from 'lucide-react';

interface HeroBannerProps {
  onExplore: () => void;
  onOpenConsult: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onOpenConsult }) => {
  return (
    <>
      {/* Micro Status Bar Técnica */}
      <div className="bg-neutral-100 border-b border-black py-1 px-4 text-[10px] font-mono flex items-center justify-between uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 inline-block animate-pulse" />
          <span className="font-bold text-black">VÉNDO CORE ENGINE // V2.6.4</span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-600">EDGE NETWORK: ACTIVA (320 NODOS)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-500 hidden sm:inline">TIEMPO PROMEDIO RESPUESTA: <strong>0.64s</strong></span>
          <span className="text-red-600 font-bold">[ BATCH Q2: 2 CUPOS DISPONIBLES ]</span>
        </div>
      </div>

      <section className="relative bg-black text-white border-b border-black overflow-hidden">
        {/* Background fotográfico industrial oscuro */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&h=1080&fit=crop&auto=format&sat=-100"
            alt="VÉNDO Web Engineering"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 flex flex-col items-center text-center">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-6">
            <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" />
            <span>SISTEMA TRANSACCIONAL VÉNDO // EDICIÓN 2026</span>
          </div>

          {/* Título Monumental */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight leading-[0.9] max-w-5xl mb-6">
            INFRAESTRUCTURA WEB <br />
            <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">
              QUE MULTIPLICA VENTAS
            </span>
          </h1>

          {/* Subtítulo Técnico Des-robotizado */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl uppercase tracking-wider font-semibold mb-10 leading-relaxed font-sans">
            Código puro sin constructores lentos. Programamos páginas web, tiendas online y embudos con tiempo de respuesta inferior a 0.8s. Sin comisiones ocultas, sin código basura de WordPress.
          </p>

          {/* Botones de Corte Recto */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-14">
            <button
              onClick={onExplore}
              className="h-12 px-8 bg-white text-black text-xs font-black uppercase tracking-widest border border-white hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>VER CATÁLOGO DISPONIBLE</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsult}
              className="h-12 px-8 bg-transparent text-white text-xs font-black uppercase tracking-widest border border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 font-mono"
            >
              <span>[ INICIAR BRIEF VÍA WHATSAPP → ]</span>
            </button>
          </div>

          {/* Tabla de Especificaciones de 4 Columnas */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 border border-white/20 bg-black/80 divide-x divide-y md:divide-y-0 divide-white/20 text-left">
            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                VELOCIDAD DE CARGA
              </span>
              <span className="text-xl font-black tracking-wider text-white font-mono">
                &lt; 0.8 SEG
              </span>
              <span className="block text-[10px] text-emerald-400 uppercase mt-1 font-mono">
                • 99/100 Core Web Vitals
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TIEMPO DE SPRINT
              </span>
              <span className="text-xl font-black tracking-wider text-white font-mono">
                48 - 72 HORAS
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Despliegue en Staging
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                TASA DE CONVERSIÓN
              </span>
              <span className="text-xl font-black tracking-wider text-white font-mono">
                +3.4X LEADS
              </span>
              <span className="block text-[10px] text-red-500 uppercase mt-1 font-mono">
                • Estructura AIDA probada
              </span>
            </div>

            <div className="p-4">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                PROTOCOLO VÉNDO
              </span>
              <span className="text-xl font-black tracking-wider text-white font-mono">
                BLINDADO
              </span>
              <span className="block text-[10px] text-neutral-300 uppercase mt-1 font-mono">
                • Ajustes pre-lanzamiento
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

### Archivo 5: `src/components/catalog/ProductCard.tsx`
Incorporar el SKU visual, la métrica técnica (`specMetric`), y refinar la microcopia de botones y selectores.

En la cabecera del cuerpo de la tarjeta:
```tsx
{/* Información del Producto */}
<div className="p-4 flex flex-col flex-1 justify-between text-left">
  <div>
    {/* Micro-header con SKU y Métrica */}
    <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-neutral-100 text-[9px] font-mono text-neutral-400">
      <span className="font-bold text-black">{solution.sku}</span>
      <span>{solution.specMetric}</span>
    </div>

    {/* Título y Tagline */}
    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black line-clamp-1 mb-1">
      {solution.name}
    </h3>
    <p className="text-[11px] text-neutral-500 line-clamp-2 leading-tight mb-3">
      {solution.tagline}
    </p>

    {/* Viñetas con viñeta cuadrada negra */}
    <div className="space-y-1 mb-4 pt-2 border-t border-neutral-100 text-[10px] text-neutral-700 font-medium">
      {solution.features.slice(0, 3).map((feat, idx) => (
        <div key={idx} className="flex items-center gap-1.5 line-clamp-1">
          <span className="w-1 h-1 bg-black flex-shrink-0" />
          <span className="truncate">{feat}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Precios y Botones */}
  <div className="pt-3 border-t border-black/10">
    <div className="flex items-baseline justify-between mb-3">
      <div className="flex items-baseline gap-2">
        <span className="text-base sm:text-lg font-black tabular-nums text-black font-mono">
          {formatCurrency(solution.price)}
        </span>
        <span className="text-xs text-neutral-400 line-through tabular-nums font-mono">
          {formatCurrency(solution.originalPrice)}
        </span>
      </div>
      <span className="text-[10px] font-mono font-bold uppercase text-red-600">
        AHORRO {Math.round(((solution.originalPrice - solution.price) / solution.originalPrice) * 100)}%
      </span>
    </div>

    {/* Botones de Acción */}
    <div className="grid grid-cols-4 gap-1.5">
      <button
        onClick={() => onQuickView(solution)}
        className="col-span-1 h-9 border border-black bg-white text-black text-[10px] font-black uppercase hover:bg-neutral-100 flex items-center justify-center"
        title="Ficha técnica completa"
      >
        <Eye className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={() => handleAdd('ESTÁNDAR', 0)}
        className="col-span-3 h-9 bg-black text-white text-[10px] font-black uppercase tracking-wider border border-black hover:bg-neutral-800 transition-colors flex items-center justify-center"
      >
        [ AGREGAR • {formatCurrency(solution.price)} ]
      </button>
    </div>
  </div>
</div>
```

---

### Archivo 6: `src/components/home/TechnicalSpecs.tsx`
Incorporar la tabla comparativa brutalista y actualizar los textos técnicos para que dejen de sonar a marketing y suenen a ingeniería:

```tsx
import React from 'react';
import { Smartphone, ShoppingBag, Terminal, Check, X } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section id="especificaciones" className="py-16 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-black gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
              [ FICHA TÉCNICA // AUDITORÍA DE RENDIMIENTO ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-black">
              INGENIERÍA WEB SIN FRICCIÓN TÉCNICA
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            ESTÁNDAR VÉNDO CORE 2026
          </span>
        </div>

        {/* Matriz Técnica de 3 Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          
          {/* Bloque 1 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 01
                </span>
                <Terminal className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                VELOCIDAD EXTREMA &lt; 0.8S
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 53% de los usuarios abandona una web si tarda más de 3 segundos en cargar. 
                Desarrollamos código estático compilado en Edge sin plugins pesados. Tu página vuela tanto en 4G como en fibra óptica.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">LIGHTHOUSE SCORE: 98-100</span>
              <span className="text-[10px] text-neutral-500">OPTIMIZACIÓN SUB-SEGUNDO // ZERO BLOAT</span>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left bg-neutral-50">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 02
                </span>
                <Smartphone className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                MOBILE-FIRST TRANSACCIONAL
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                El 82% del tráfico de tus campañas proviene de celulares. Diseñamos con ergonomía táctil: botones grandes al alcance del pulgar, drawer deslizable y carga instantánea.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">TASA DE REBOTE: -58%</span>
              <span className="text-[10px] text-neutral-500">INTERFAZ TÁCTIL ESTILO APLICACIÓN</span>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase text-neutral-400">
                  // MODULO 03
                </span>
                <ShoppingBag className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black mb-2">
                WHATSAPP & STRIPE EN 1-CLIC
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-6">
                Conectamos tu pedido directamente al WhatsApp de tu equipo con el detalle estructurado de la orden o a pasarelas como Stripe y Mercado Pago para recibir el dinero en tu cuenta bancaria.
              </p>
            </div>
            <div className="border-t border-neutral-200 pt-4 font-mono text-xs text-black">
              <span className="block font-bold">CONVERSIÓN DIRECTA: +3.4X</span>
              <span className="text-[10px] text-neutral-500">CERO COMISIONES DE PLATAFORMAS</span>
            </div>
          </div>

        </div>

        {/* Tabla Comparativa de Ingeniería */}
        <div className="mt-10 border border-black bg-white">
          <div className="p-4 bg-neutral-100 border-b border-black flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-black font-mono">
              [ TABLA DE BENCHMARK // VÉNDO VS. DESARROLLO CONVENCIONAL ]
            </span>
            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              AUDITADO EN GOOGLE PAGESPEED INSIGHTS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-black text-white border-b border-black uppercase text-[10px] tracking-wider">
                  <th className="p-3 border-r border-neutral-800">MÉTRICA / PARÁMETRO</th>
                  <th className="p-3 border-r border-neutral-800 text-neutral-400">WORDPRESS / WIX / ELEMENTOR</th>
                  <th className="p-3 text-emerald-400 font-bold">ARQUITECTURA VÉNDO ®</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Velocidad LCP (Carga de contenido)</td>
                  <td className="p-3 text-red-600 border-r border-neutral-200">3.8s - 6.5s (Lenta por base de datos y plugins)</td>
                  <td className="p-3 font-bold text-black">&lt; 0.8s (Compilación estática en Edge)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Costo Mensual de Mantenimiento</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">$25 a $60 USD / mes (Hosting cPanel + plugins)</td>
                  <td className="p-3 font-bold text-black">$0 USD / mes (Infraestructura Serverless)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Riesgo de Caídas / Infección malware</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">Alto (Plugins vulnerables desactualizados)</td>
                  <td className="p-3 font-bold text-black">Nulo (Sin base de datos expuesta)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-neutral-50 border-r border-neutral-200">Flujo de Compra</td>
                  <td className="p-3 text-neutral-600 border-r border-neutral-200">3 a 5 pasos lentos con recargas</td>
                  <td className="p-3 font-bold text-black">1-Clic directo a WhatsApp o Pasarela</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
```

---

### Archivo 7: `src/components/cart/CartDrawer.tsx`
Implementar la barra de beneficios segmentada en 10 bloques y refinar la microcopia de WhatsApp para que el mensaje enviado sea ultra profesional:

```tsx
// Modificar la función handleCheckoutWhatsApp para enviar un mensaje limpio y comercial:
const handleCheckoutWhatsApp = () => {
  if (items.length === 0) return;

  const itemsSummary = items
    .map(
      (it) =>
        `▪ *${it.quantity}x ${it.title}* [${it.variant}] — ${formatCurrency(it.price * it.quantity)}`
    )
    .join('\n');

  const message = `¡Hola VÉNDO! 🚀\nConfirmo el pedido de mi infraestructura web:\n\n${itemsSummary}\n\n*TOTAL ORDEN:* ${formatCurrency(totalAmount)}\n\n¿Cuáles son los requerimientos iniciales para iniciar el sprint de 72h?`;

  window.open(`https://wa.me/584149428999?text=${encodeURIComponent(message)}`, '_blank');
};
```

Reemplazar la barra continua por el medidor segmentado de 10 casillas:
```tsx
{/* Barra de Beneficio Gratuito Segmentada */}
<div className="bg-neutral-100 p-3 border-b border-black">
  <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-black mb-1.5 font-mono">
    {remaining > 0 ? (
      <span>FALTAN {formatCurrency(remaining)} PARA DOMINIO .COM + SSL ANUAL GRATIS</span>
    ) : (
      <span className="text-emerald-700 font-bold">✓ DOMINIO .COM + SSL 100% BONIFICADOS</span>
    )}
    <span>[{progressPercent}%]</span>
  </div>
  <div className="grid grid-cols-10 gap-1 h-2">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className={`h-full border border-black ${
          (i + 1) * 10 <= progressPercent ? 'bg-black' : 'bg-white'
        }`}
      />
    ))}
  </div>
</div>
```

---

### Archivo 8: `src/components/home/FaqSection.tsx`
Reemplazar las preguntas genéricas por dudas reales de clientes que contratan desarrollo web, con respuestas des-robotizadas y transparentes:

```tsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿QUÉ MATERIAL EXACTO NECESITAN DE MI PARTE PARA EMPEZAR?',
      a: 'Lo indispensable: logotipo (si lo tienes), la lista de tus servicios o productos con precios, y a dónde quieres recibir a tus clientes (teléfono o link de pago). Si no tienes fotos o textos terminados, nosotros redactamos los copys de venta y seleccionamos fotografía editorial de alta calidad sin costo adicional.',
    },
    {
      q: '¿POR QUÉ DICEN QUE EL HOSTING ES DE $0 USD AL MES?',
      a: 'Desarrollamos sobre arquitectura moderna Serverless (Vercel / Cloudflare Edge). A diferencia de WordPress, que requiere servidores dedicados lentos de $20 a $50/mes para no caerse, el código estático compilado no consume cómputo continuo y el tier gratuito de estas redes mundiales cubre hasta 100.000 visitas al mes sin pagar un solo centavo.',
    },
    {
      q: '¿CUÁNTO TIEMPO TARDA REALMENTE LA ENTREGA?',
      a: 'Para Landing Pages CRO el tiempo de entrega en entorno privado de staging es de 48 a 72 horas hábiles. Para tiendas online completas y webs corporativas, el sprint toma de 5 a 7 días hábiles tras recibir tus productos o contenidos base.',
    },
    {
      q: '¿CÓMO FUNCIONA EL COBRO Y LAS PASARELAS DE PAGO?',
      a: 'No cobramos ninguna comisión sobre tus ventas. Te configuramos tu propia pasarela (Stripe o Mercado Pago) directamente enlazada a tu cuenta de banco para que el dinero de tus clientes ingrese de forma automática e inmediata.',
    },
    {
      q: '¿QUÉ SUCEDE SI NECESITO CAMBIOS ANTES DEL LANZAMIENTO?',
      a: 'Protocolo de Revisión Quirúrgica: antes de conectar tu dominio oficial, revisamos la página contigo en un enlace privado. Realizamos los ajustes de diseño, textos y fotos que solicites hasta que el resultado cumpla al 100% el estándar acordado.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white border-b border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
            [ RESOLUCIÓN DE DUDAS COMERCIALES Y TÉCNICAS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
            PREGUNTAS FRECUENTES // FAQ
          </h2>
        </div>

        <div className="border border-black divide-y divide-black">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                    {faq.q}
                  </span>
                  <span className="w-6 h-6 border border-black flex items-center justify-center flex-shrink-0 text-black font-mono">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200 bg-neutral-50 font-medium">
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

## 6. Lista de Comprobación para el Programador (Checklist de Verificación)

Antes de dar por finalizada la implementación con OpenCode:

- [ ] **Compilación sin Errores:** Ejecutar `npm run build` para comprobar que TypeScript y Vite empaquetan sin advertencias ni errores de tipo.
- [ ] **Validación Estricta de Bordes:** Verificar en el inspector de elementos que ningún botón, input, tarjeta o modal tenga `border-radius` distinto a `0px`.
- [ ] **Sin Sombras Difusas:** Comprobar que no existan clases como `shadow-md`, `shadow-lg` o `shadow-xl`. Todo el relieve se genera mediante bordes sólidos de `1px` (`border-black` o `border-neutral-200`).
- [ ] **Prueba de Carrito y WhatsApp:** Agregar un producto al carrito, probar la suma de add-ons, y hacer clic en el botón de WhatsApp para certificar que el mensaje generado contiene los SKUs y los precios exactos.
- [ ] **Prueba Móvil:** Reducir la ventana a 375px (tamaño iPhone SE) para verificar que el ticker, la barra sticky inferior y las pestañas con scroll horizontal no se desborden.
