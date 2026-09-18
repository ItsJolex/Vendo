import { useState, useEffect } from 'react';
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
  );
}