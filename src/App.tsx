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