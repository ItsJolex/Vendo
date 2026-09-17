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