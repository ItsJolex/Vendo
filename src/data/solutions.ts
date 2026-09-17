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