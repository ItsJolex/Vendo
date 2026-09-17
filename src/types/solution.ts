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
