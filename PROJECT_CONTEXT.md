# VÉNDO ® — Documento de Contexto y Transferencia (Project Handoff)

> **Propósito de este documento:** Proveer el contexto técnico, conceptual y de diseño completo para que cualquier nueva conversación o agente de IA pueda retomar el desarrollo de **VÉNDO** de manera inmediata y sin perder ninguna directriz.

---

## 1. Identidad y Propósito del Proyecto

* **Nombre de la plataforma:** VÉNDO ®
* **Propósito comercial:** Plataforma de comercio electrónico y venta ágil de **soluciones y desarrollo web de alto rendimiento** (Landing pages de alta conversión, Tiendas Online E-commerce, Webs Corporativas y Embudos de venta).
* **Propuesta de valor:** Ayudar a clientes, emprendedores, marcas y empresas a multiplicar sus conversiones y ventas mediante páginas web ultrarrápidas (<0.8s) y sin fricción operativa.
* **Modelo de venta:** Catálogo transaccional (los servicios web se ofrecen y seleccionan como productos de e-commerce con variantes, add-ons y carrito lateral que conecta a WhatsApp en 1 solo clic).

---

## 2. Ubicación y Repositorio

* **Directorio local:** `/home/joel/Proyectos/vendo-web/`
* **Acceso alternativo:** `/home/joel/Proyectos/Vendo/vendo-web/` *(enlace simbólico)*
* **Repositorio oficial de GitHub:** [https://github.com/ItsJolex/Vendo](https://github.com/ItsJolex/Vendo)
* **Rama principal:** `main`
* **Despliegue de producción:** Vercel (conectado al repositorio de GitHub).

---

## 3. Filosofía Visual y Reglas Inquebrantables de UI/UX

El diseño sigue estrictamente el estándar **Sharp Catalog / YoungLA / Brutalista Clásico** (inspirado en [YoungLA](https://www.youngla.com/) y plataformas transaccionales de líneas puras):

1. **Border-Radius Cero Absoluto (`0px`)**:
   * Forzado globalmente en CSS (`* { border-radius: 0px !important; }`) y configurado en `tailwind.config.js`.
   * Cero botones redondeados, cero tarjetas tipo burbuja, cero modales curvos.
   * Todas las esquinas son **vivas a 90 grados**.
2. **Líneas Divisorias Capilares (Hairline Borders de 1px)**:
   * No se usan sombras difusas (`box-shadow: none`).
   * La jerarquía se establece mediante bordes sólidos de 1px (`border border-black` o `border-neutral-300`).
3. **Paleta de Alto Contraste**:
   * **Blanco puro (`#FFFFFF`)** y **Negro profundo (`#000000`)**.
   * Fondo neutro de apoyo: `#F5F5F5` / `#FAFAFA`.
   * Acentos de urgencia y badges: Rojo de conversión (`#DC2626` / `text-red-600`).
4. **Tipografía Monumental y Corchetes**:
   * Fuentes: *Barlow Condensed* y *Montserrat* (pesos 800/900 en mayúsculas), con acentos técnicos en *Space Mono*.
   * Microcopia en corchetes: `[ BEST SELLER ]`, `[ 2 CUPOS RESTANTES ]`, `[ TODOS (4) ]`, `CARRITO [ n ]`.
   * Precios en tipografía tabular monoespaciada (`font-mono font-black`).
5. **La Landing ES el Catálogo**:
   * Pestañas fijas pegajosas al scroll (`sticky top-[60px]`).
   * Filtrado dinámico en memoria sin recargas de página.

---

## 4. Stack Técnico

* **Framework:** React 18 + Vite 5 + TypeScript
* **Estilos:** Tailwind CSS v3 + PostCSS + Autoprefixer
* **Iconos:** Lucide React (`lucide-react`)
* **Gestión de Estado:** `CartContext` con persistencia en `localStorage` (`vendo_cart_v2`).

### Comandos de Operación:
```bash
cd /home/joel/Proyectos/vendo-web
npm run dev      # Inicia el servidor de desarrollo local en http://localhost:5173
npm run build    # Chequeo estricto de tipos TypeScript y build de producción (dist/)
npm run preview  # Vista previa del build local
```

---

## 5. Arquitectura del Código

```
/home/joel/Proyectos/vendo-web/
├── index.html                    # Carga tipografías Google Fonts (Montserrat, Barlow Condensed, Space Mono)
├── tailwind.config.js            # Blindaje 0px en todas las utilidades de radio y animación ticker
├── src/
│   ├── main.tsx                  # Punto de entrada de React
│   ├── App.tsx                   # Ensamblador de vistas, modales y proveedores
│   ├── index.css                 # * { border-radius: 0px !important; } y directivas Tailwind
│   ├── context/
│   │   └── CartContext.tsx       # Carrito global, cálculo de totales, threshold de dominio gratis
│   ├── types/
│   │   └── solution.ts           # Modelos de datos TypeScript (WebSolution, Addon, CategoryId)
│   ├── data/
│   │   └── solutions.ts          # Catálogo de servicios digitales (Landing, E-commerce, Corporativa, Funnel)
│   └── components/
│       ├── layout/
│       │   ├── AnnouncementTicker.tsx # Cinta en movimiento continuo estilo drop YoungLA
│       │   ├── Header.tsx             # Cabecera de 60px con drawer izquierdo y contador de carrito
│       │   ├── StickyBottomBar.tsx    # Barra fija inferior exclusiva para dispositivos móviles
│       │   └── Footer.tsx             # Pie de página editorial con enlaces y garantías
│       ├── home/
│       │   ├── HeroBanner.tsx         # Hero masivo con fotografía oscura y matriz técnica de 4 columnas
│       │   ├── TechnicalSpecs.tsx     # Especificaciones de velocidad (<0.8s), mobile-first y pasarelas
│       │   ├── ProcessSection.tsx     # Protocolo de trabajo en 3 pasos con garantía blindada
│       │   └── FaqSection.tsx         # Acordeón de preguntas frecuentes con toggles cuadrados [+] y [-]
│       ├── catalog/
│       │   ├── CategoryTabs.tsx       # Pestañas sticky con conteo de elementos entre corchetes
│       │   ├── ProductGrid.tsx        # Grilla responsiva de tarjetas
│       │   └── ProductCard.tsx        # Tarjetas 3:4 con dual-flip al hover y selector rápido de planes
│       └── cart/
│           └── CartDrawer.tsx         # Carrito lateral derecho con cross-sell y botón de pedido a WhatsApp
└── PROJECT_CONTEXT.md            # Este documento
```

---

## 6. Próximos Pasos Sugeridos para la Siguiente Conversación

1. **Personalización de Textos y Precios:** Adaptar los copys específicos, monedas locales o paquetes según la oferta final deseada.
2. **Configuración del Número de WhatsApp:** Actualizar la URL de WhatsApp (`wa.me/XXXXXXXXXXX`) con el número oficial del negocio para recibir las órdenes directas.
3. **Formulario de Contacto / Leads:** Conectar un formulario de webhook (ej. Formspree, Resend o Telegram bot) si se desea captar correos además de WhatsApp.
4. **Dominio Personalizado en Vercel:** Configurar el dominio oficial (ej. `vendo.agency` o `vendo.store`) en los ajustes del proyecto en Vercel.
