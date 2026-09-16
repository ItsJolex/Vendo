import { WebSolution, Addon, CategoryId } from '../types/solution';

export const categories: { id: CategoryId; label: string; count?: number }[] = [
  { id: 'todos', label: 'Todas las Soluciones' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'ecommerce', label: 'Tiendas Online' },
  { id: 'corporate', label: 'Webs Corporativas' },
  { id: 'funnel', label: 'Embudos de Venta' },
];

export const globalAddons: Addon[] = [
  {
    id: 'domain-hosting',
    name: 'Dominio .com + Hosting Ultra Rápido (1 año)',
    price: 49,
    description: 'Servidor CDN global optimizado con SSL y certificado de seguridad incluido.',
  },
  {
    id: 'payment-gateway',
    name: 'Integración Pasarela de Pagos (Stripe / Mercado Pago)',
    price: 69,
    description: 'Cobro automatizado con tarjeta de crédito, débito y transferencias locales.',
  },
  {
    id: 'copywriting-cro',
    name: 'Copywriting Persuasivo Orientado a Venta',
    price: 79,
    description: 'Redacción profesional de titulares, llamados a la acción y beneficios.',
  },
  {
    id: 'crm-whatsapp',
    name: 'Webhook Automatizado a WhatsApp / CRM',
    price: 59,
    description: 'Recibe alertas instantáneas en tu teléfono cada vez que un cliente contacte.',
  },
];

export const solutions: WebSolution[] = [
  {
    id: 'landing-express-cro',
    name: 'Landing Page de Alta Conversión',
    tagline: 'Diseñada específicamente para transformar visitas de anuncios en clientes listos para comprar.',
    category: 'landing',
    price: 289,
    originalPrice: 450,
    deliveryDays: '48 a 72 horas',
    popular: true,
    spotsLeft: 2,
    rating: 4.9,
    reviewsCount: 38,
    images: {
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Velocidad de carga inferior a 1 segundo (<0.8s)',
      'Estructura psicológica AIDA para máxima persuasión',
      'Botón flotante de WhatsApp con mensaje personalizado',
      'Formulario optimizado de 1 solo paso',
      'Pixel de Meta (Facebook/IG) y Google Ads integrado',
    ],
    idealFor: 'Negocios de servicios, coaches, lanzamientos, inmobiliarias y clínicas que hacen publicidad.',
    deliverables: [
      'Página 100% responsiva (Mobile & Desktop)',
      'Diseño Figma + Código Next.js/Tailwind',
      'Optimización SEO On-Page básica',
      'Garantía de soporte 30 días',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel / Cloudflare', 'WhatsApp API'],
  },
  {
    id: 'ecommerce-turnkey-sales',
    name: 'Tienda Online E-commerce Pro',
    tagline: 'Catálogo de venta ágil, carrito sin fricción y pasarela de pago para vender en automático 24/7.',
    category: 'ecommerce',
    price: 590,
    originalPrice: 890,
    deliveryDays: '5 a 7 días',
    popular: true,
    spotsLeft: 3,
    rating: 5.0,
    reviewsCount: 52,
    images: {
      preview: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Catálogo visual ultra dinámico con filtros de categoría',
      'Carrito lateral deslizante (Slide Cart) sin recarga',
      'Checkout en un clic conectado a Stripe o Mercado Pago',
      'Notificaciones automáticas de pedidos al WhatsApp del dueño',
      'Panel autogestionable fácil de actualizar sin saber código',
    ],
    idealFor: 'Marcas de ropa, cosmética, productos físicos o retail que buscan dejar de pagar altas comisiones.',
    deliverables: [
      'Hasta 50 productos iniciales cargados y configurados',
      'Buscador instantáneo predictivo',
      'Cálculo automático de envíos o retiro en tienda',
      'Capacitación en video para gestionar tu stock',
    ],
    techStack: ['React', 'Next.js', 'Stripe / Mercado Pago', 'Tailwind CSS'],
  },
  {
    id: 'corporate-brand-authority',
    name: 'Web Corporativa & Autoridad',
    tagline: 'Proyecta solidez institucional y confianza inquebrantable ante empresas, inversores y clientes B2B.',
    category: 'corporate',
    price: 490,
    originalPrice: 750,
    deliveryDays: '4 a 6 días',
    popular: false,
    spotsLeft: 4,
    rating: 4.8,
    reviewsCount: 29,
    images: {
      preview: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Arquitectura de información multi-sección elegante',
      'Presentación de portafolio, servicios y casos de éxito',
      'Agendamiento de reuniones integrado (Calendly)',
      'Optimización de posicionamiento orgánico en Google (SEO)',
      'Diseño editorial minimalista con micro-animaciones fluidas',
    ],
    idealFor: 'Firmas de abogados, consultoras, agencias, constructoras y empresas B2B consolidadas.',
    deliverables: [
      'Hasta 6 páginas/secciones completas estructuradas',
      'Diseño adaptable corporativo con estética premium',
      'Formularios seguros con protección anti-spam',
      'Indexación directa en Google Search Console',
    ],
    techStack: ['TypeScript', 'Next.js', 'Tailwind', 'Calendly API'],
  },
  {
    id: 'sales-funnel-leadgen',
    name: 'Embudo de Ventas (High-Ticket Funnel)',
    tagline: 'Secuencia automatizada para calificar prospectos y cerrar ventas de alto valor con mínimo esfuerzo.',
    category: 'funnel',
    price: 390,
    originalPrice: 620,
    deliveryDays: '3 a 4 días',
    popular: false,
    spotsLeft: 1,
    rating: 4.9,
    reviewsCount: 21,
    images: {
      preview: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
      mobilePreview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    },
    features: [
      'Página de captura + Página de gracias + Video VSL',
      'Cuestionario inteligente de precalificación de clientes',
      'Integración con campañas de email marketing o WhatsApp',
      'Prueba social dinámica (testimonios y garantías)',
      'Seguimiento de eventos de conversión (Lead, Schedule, Purchase)',
    ],
    idealFor: 'Infoproductores, mentores, empresas de software y servicios de ticket medio/alto.',
    deliverables: [
      'Filtro de prospectos para hablar solo con gente calificada',
      'Automatización de correos de confirmación',
      'Diseño psicológico enfocado en retención y acción',
      'Revisión en vivo y prueba A/B lista para pauta',
    ],
    techStack: ['React', 'Tailwind', 'Typeform / Tally', 'Meta Conversion API'],
  },
];

export const formatCurrency = (val: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};
