import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AnnouncementTicker } from './components/layout/AnnouncementTicker';
import { Header } from './components/layout/Header';
import { HeroBanner } from './components/home/HeroBanner';
import { CategoryTabs } from './components/catalog/CategoryTabs';
import { ProductGrid } from './components/catalog/ProductGrid';
import { TechnicalSpecs } from './components/home/TechnicalSpecs';
import { ProcessSection } from './components/home/ProcessSection';
import { FaqSection } from './components/home/FaqSection';
import { Footer } from './components/layout/Footer';
import { StickyBottomBar } from './components/layout/StickyBottomBar';
import { CartDrawer } from './components/cart/CartDrawer';
import { ConsultationModal } from './components/checkout/ConsultationModal';
import { SolutionDetailsModal } from './components/checkout/SolutionDetailsModal';
import { WebSolution, CategoryId } from './types/solution';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [inspectSolution, setInspectSolution] = useState<WebSolution | null>(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const handleExploreCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div id="top" className="min-h-screen flex flex-col bg-white text-black antialiased selection:bg-black selection:text-white pb-14 md:pb-0">
        
        {/* Ticker Infinito Superior (Estilo YoungLA / Streetwear Drop) */}
        <AnnouncementTicker />

        {/* Cabecera Brutalista de 60px */}
        <Header onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Cuerpo Principal */}
        <main className="flex-1">
          {/* Hero Editorial de Alto Impacto con Especificaciones Técnicas */}
          <HeroBanner
            onExplore={handleExploreCatalog}
            onOpenConsult={() => setIsConsultOpen(true)}
          />

          {/* Barra de Categorías Pegajosa (La Landing actúa como Catálogo Embebido) */}
          <CategoryTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Grilla de Soluciones Digitales con Tarjetas 3:4 y Dual-Flip */}
          <ProductGrid
            category={activeCategory}
            onQuickView={(sol) => setInspectSolution(sol)}
          />

          {/* Matriz Técnica de Rendimiento y Arquitectura (Corte Recto 1px) */}
          <TechnicalSpecs />

          {/* Protocolo de Trabajo en 3 Pasos */}
          <ProcessSection />

          {/* Preguntas Frecuentes / Dudas de Compra */}
          <FaqSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Carrito Lateral Deslizante (Slide-over Cart Drawer) */}
        <CartDrawer />

        {/* Barra Móvil Sticky Bottom */}
        <StickyBottomBar
          onOpenConsult={() => setIsConsultOpen(true)}
          onExploreCatalog={handleExploreCatalog}
        />

        {/* Modal de Asesoría Rápida por WhatsApp */}
        <ConsultationModal
          isOpen={isConsultOpen}
          onClose={() => setIsConsultOpen(false)}
        />

        {/* Modal de Especificaciones Técnicas de Producto */}
        <SolutionDetailsModal
          isOpen={!!inspectSolution}
          onClose={() => setInspectSolution(null)}
          solution={inspectSolution}
        />

      </div>
    </CartProvider>
  );
}
