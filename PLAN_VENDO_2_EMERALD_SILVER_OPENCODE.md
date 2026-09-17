# GUÍA MAESTRA DE IMPLEMENTACIÓN OPENCODE // VÉNDO 2.0
## Edición Neo-Brutalista: Verde Esmeralda, Detalles Plateados y Bordes Rectos

Este archivo contiene el plan paso a paso, los bloques de código y las clases exactas para que **OpenCode** ejecute la transformación visual a **VÉNDO 2.0** sin ambigüedades.

---

### ÍNDICE DE PASOS
1. [Tokens de Color y Sombras (`tailwind.config.js`)](#1-tokens-de-color-y-sombras-tailwindconfigjs)
2. [Clases Neo-Brutales de Botones Mecánicos (`src/index.css`)](#2-clases-neo-brutales-de-botones-mecánicos-srcindexcss)
3. [Ticker de Anuncios Esmeralda y Plata (`src/components/layout/AnnouncementTicker.tsx`)](#3-ticker-de-anuncios-esmeralda-y-plata)
4. [Header con Logotipo y Botones Táctiles (`src/components/layout/Header.tsx`)](#4-header-con-logotipo-y-botones-táctiles)
5. [Hero Banner VÉNDO 2.0 (`src/components/home/HeroBanner.tsx`)](#5-hero-banner-véndo-20)
6. [Pestañas de Catálogo con Clic Mecánico (`src/components/catalog/CategoryTabs.tsx`)](#6-pestañas-de-catálogo-con-clic-mecánico)
7. [Tarjetas de Producto con Sombras Duras (`src/components/catalog/ProductCard.tsx`)](#7-tarjetas-de-producto-con-sombras-duras)
8. [Ficha Técnica y Tabla Comparativa (`src/components/home/TechnicalSpecs.tsx`)](#8-ficha-técnica-y-tabla-comparativa)
9. [Protocolo de 3 Pasos y Garantía (`src/components/home/ProcessSection.tsx`)](#9-protocolo-de-3-pasos-y-garantía)
10. [Preguntas Frecuentes Neo-Brutal (`src/components/home/FaqSection.tsx`)](#10-preguntas-frecuentes-neo-brutal)
11. [Footer en Verde Pino y Detalles Plateados (`src/components/layout/Footer.tsx`)](#11-footer-en-verde-pino-y-detalles-plateados)
12. [Barra Móvil Inferior (`src/components/layout/StickyBottomBar.tsx`)](#12-barra-móvil-inferior)
13. [Drawer del Carrito y Modal de Asesoría (`CartDrawer.tsx` y `ConsultationModal.tsx`)](#13-drawer-del-carrito-y-modal-de-asesoría)
14. [Compilación y Verificación Final](#14-compilación-y-verificación-final)

---

### PALETA DE COLOR OFICIAL VÉNDO 2.0

```
┌───────────────────────────┬───────────┬──────────────────────────────────────────┐
│ NOMBRE DEL TOKEN          │ HEX       │ ROL / APLICACIÓN                         │
├───────────────────────────┼───────────┼──────────────────────────────────────────┤
│ emerald-pine              │ #00381F   │ Bordes 2px-3px, sombras duras, textos     │
│ emerald-deep              │ #0B5844   │ Fondo de botones primarios, headers      │
│ emerald-vibrant           │ #187E5F   │ Badges de éxito, acentos, hover primario │
│ silver-chrome             │ #E2E8F0   │ Botones secundarios, bordes metálicos    │
│ silver-steel              │ #CBD5E1   │ Puntos de ticker, separadores, sombras   │
│ silver-metallic           │ #94A3B8   │ Microcopia técnica, sombras plata        │
│ canvas-ice                │ #F4F7F5   │ Fondo general de la página (gris hielo)  │
│ canvas-card               │ #FFFFFF   │ Superficie de tarjetas y modales         │
└───────────────────────────┴───────────┴──────────────────────────────────────────┘
```

---

### 1. TOKENS DE COLOR Y SOMBRAS (`tailwind.config.js`)

Abrir `tailwind.config.js` y extender la sección `theme.extend`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          vibrant: '#187E5F',
          deep: '#0B5844',
          pine: '#00381F',
        },
        silver: {
          light: '#F8FAFC',
          chrome: '#E2E8F0',
          steel: '#CBD5E1',
          metallic: '#94A3B8',
          border: '#64748B',
        },
        canvas: {
          ice: '#F4F7F5',
          card: '#FFFFFF',
        },
      },
      boxShadow: {
        'neo-pine': '4px 4px 0px 0px #00381F',
        'neo-pine-lg': '6px 6px 0px 0px #00381F',
        'neo-silver': '4px 4px 0px 0px #94A3B8',
        'neo-emerald': '4px 4px 0px 0px #0B5844',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

---

### 2. CLASES NEO-BRUTALES DE BOTONES MECÁNICOS (`src/index.css`)

Agregar las siguientes clases utilitarias al final de `src/index.css`:

```css
/* ==========================================================================
   VÉNDO 2.0 // ESTILO NEO-BRUTALISTA TÁCTIL (0PX BORDER-RADIUS)
   ========================================================================== */

/* Botón Primario Esmeralda con Clic Mecánico */
.btn-neo-emerald {
  background-color: #0B5844;
  color: #FFFFFF;
  border: 2px solid #00381F;
  box-shadow: 4px 4px 0px 0px #00381F;
  transition: transform 100ms ease, box-shadow 100ms ease, background-color 100ms ease;
  cursor: pointer;
  user-select: none;
}
.btn-neo-emerald:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #00381F;
  background-color: #187E5F;
}
.btn-neo-emerald:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #00381F;
}

/* Botón Secundario Plata / Metálico */
.btn-neo-silver {
  background: linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #CBD5E1 100%);
  color: #00381F;
  border: 2px solid #00381F;
  box-shadow: 4px 4px 0px 0px #00381F;
  transition: transform 100ms ease, box-shadow 100ms ease;
  cursor: pointer;
  user-select: none;
}
.btn-neo-silver:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #00381F;
  background: linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%);
}
.btn-neo-silver:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #00381F;
}

/* Tarjeta / Contenedor con Sombra Sólida Neo-Brutal */
.card-neo-brutal {
  background-color: #FFFFFF;
  border: 2px solid #00381F;
  box-shadow: 4px 4px 0px 0px #00381F;
  transition: transform 100ms ease, box-shadow 100ms ease;
}
.card-neo-brutal:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #00381F;
}

/* Badge Plateado Metálico */
.badge-silver {
  background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 60%, #CBD5E1 100%);
  color: #00381F;
  border: 1px solid #94A3B8;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
}
```

---

### 3. TICKER DE ANUNCIOS ESMERALDA Y PLATA
**Archivo:** `src/components/layout/AnnouncementTicker.tsx`

Sustituir por:

```tsx
import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const messages = [
    '/// VÉNDO 2.0 // AGENCIA DE CRECIMIENTO DIGITAL PARA NEGOCIOS LOCALES',
    'HAZ QUE TE ENCUENTREN, HAZ QUE TE COMPREN',
    'PÁGINAS WEB + GOOGLE MAPS + PEDIDOS POR WHATSAPP',
    'PLANES DESDE $49 USD // HOSTING DE ALTA VELOCIDAD INCLUIDO',
    'ENTREGA EN 72 HORAS // ATENCIÓN DIRECTA: +58 414-9428999 ///',
  ];

  return (
    <div className="bg-[#00381F] text-white text-[10px] font-mono font-bold uppercase tracking-widest py-2.5 overflow-hidden border-b-2 border-[#0B5844] select-none">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-4">
            <span className="text-white tracking-wider">{msg}</span>
            <span className="text-[#187E5F] font-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
```

---

### 4. HEADER CON LOGOTIPO Y BOTONES TÁCTILES
**Archivo:** `src/components/layout/Header.tsx`

Actualizar el encabezado para usar bordes `#00381F`, detalles en plata y botones mecánicos:

- Logotipo:
  ```tsx
  <h1 className="text-2xl sm:text-3xl font-black tracking-[0.2em] font-display uppercase leading-none text-[#00381F]">
    VÉNDO<span className="text-[#187E5F]">®</span>
  </h1>
  ```
- Botón `[ + INICIAR BRIEF ]`:
  ```tsx
  <button
    onClick={onOpenConsult}
    className="btn-neo-silver hidden sm:inline-flex text-xs font-black uppercase tracking-wider px-3.5 py-1.5 font-mono"
  >
    [ + ASESORÍA ]
  </button>
  ```
- Botón Carrito:
  ```tsx
  <button
    onClick={openCart}
    className="btn-neo-emerald flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 font-mono"
    aria-label="Abrir carrito"
  >
    <ShoppingBag className="w-3.5 h-3.5" />
    <span>CARRITO [ {itemCount} ]</span>
  </button>
  ```

---

### 5. HERO BANNER VÉNDO 2.0
**Archivo:** `src/components/home/HeroBanner.tsx`

Reescribir el Hero aplicando la paleta Esmeralda, el canvas hielo con sutil textura de agua esmeralda y las 4 cajas con sombras duras:

```tsx
import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../types/solution';

interface HeroBannerProps {
  onExplore: () => void;
  onOpenConsult: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onOpenConsult }) => {
  const whatsappHeroUrl = getWhatsAppUrl(
    'Hola VÉNDO, quiero información para hacer crecer mi negocio local con una página web.'
  );

  return (
    <>
      {/* Micro Status Bar */}
      <div className="bg-[#00381F] border-b-2 border-[#0B5844] py-2 px-4 text-[10px] font-mono flex items-center justify-between uppercase text-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#187E5F] inline-block animate-pulse" />
          <span className="font-bold text-white">VÉNDO DIGITAL ENGINE // V2.0 EMERALD EDITION</span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300">SISTEMA 100% GESTIONADO</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-300 hidden sm:inline">ATENCIÓN DIRECTA: <strong>+58 414-9428999</strong></span>
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#187E5F] bg-white px-2 py-0.5 font-black hover:bg-slate-100 transition-colors"
          >
            [ WHATSAPP DISPONIBLE ]
          </a>
        </div>
      </div>

      <section className="relative bg-[#F4F7F5] text-[#00381F] border-b-2 border-[#00381F] overflow-hidden py-16 sm:py-24">
        {/* Fondo sutil tipo agua / esmeralda translúcida */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#187E5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Badge superior estilo Sticker */}
          <div className="inline-flex items-center gap-2 border-2 border-[#00381F] bg-white px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#00381F] mb-8 shadow-neo-pine -rotate-1">
            <span className="w-2 h-2 bg-[#187E5F] inline-block animate-pulse" />
            <span className="font-bold">AGENCIA DE CRECIMIENTO DIGITAL LOCAL</span>
          </div>

          {/* Titular Monumental */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight leading-[0.92] max-w-5xl mb-6 text-[#00381F]">
            VÉNDO, HAZ QUE TE ENCUENTREN, <br />
            <span className="text-[#0B5844] underline decoration-[#187E5F] decoration-8 underline-offset-8">
              HAZ QUE TE COMPREN
            </span>
          </h1>

          {/* Subtítulo Conciso y Directo */}
          <p className="text-sm sm:text-base md:text-lg text-[#0B5844] max-w-2xl font-bold mb-10 leading-relaxed font-sans">
            VÉNDO es una agencia de crecimiento digital para negocios locales. Creamos páginas web, optimizamos Google Maps, ordenamos WhatsApp y mejoramos la forma en que los clientes descubren, contactan y compran en tu negocio.
          </p>

          {/* Botones de Acción Táctiles (0px Radius + Clic Físico) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onExplore}
              className="btn-neo-emerald h-14 px-8 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>VER PLANES DISPONIBLES</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsult}
              className="btn-neo-silver h-14 px-8 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 font-mono"
            >
              <MessageSquare className="w-4 h-4 text-[#00381F]" />
              <span>[ ASESORÍA VÍA WHATSAPP → ]</span>
            </button>
          </div>

          {/* 4 Cajas de Beneficios Neo-Brutal con Sombras Duras */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            
            {/* Caja 1 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-[#187E5F] font-bold uppercase tracking-widest mb-1">
                VISIBILIDAD LOCAL
              </span>
              <span className="text-xl font-black tracking-wider text-[#00381F] font-mono block">
                GOOGLE MAPS
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Primero en tu ciudad
              </span>
            </div>

            {/* Caja 2 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-[#187E5F] font-bold uppercase tracking-widest mb-1">
                VENTA DIRECTA
              </span>
              <span className="text-xl font-black tracking-wider text-[#00381F] font-mono block">
                WHATSAPP
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Pedidos en 1 solo clic
              </span>
            </div>

            {/* Caja 3 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-[#187E5F] font-bold uppercase tracking-widest mb-1">
                TIEMPO DE ENTREGA
              </span>
              <span className="text-xl font-black tracking-wider text-[#00381F] font-mono block">
                72 HORAS
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Tu web lista y vendiendo
              </span>
            </div>

            {/* Caja 4 */}
            <div className="card-neo-brutal p-5 bg-white">
              <span className="block text-[10px] font-mono text-[#187E5F] font-bold uppercase tracking-widest mb-1">
                TRANSPARENCIA TOTAL
              </span>
              <span className="text-xl font-black tracking-wider text-[#00381F] font-mono block">
                TODO INCLUIDO
              </span>
              <span className="block text-[11px] text-slate-600 uppercase mt-2 font-bold font-mono">
                • Hosting + Cero costos ocultos
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

### 6. PESTAÑAS DE CATÁLOGO CON CLIC MECÁNICO
**Archivo:** `src/components/catalog/CategoryTabs.tsx`

Actualizar para que las pestañas activas utilicen el verde esmeralda y sombras duras:

```tsx
<button
  key={cat.id}
  onClick={() => onSelectCategory(cat.id)}
  className={`flex-shrink-0 px-4 py-2 text-xs font-black uppercase tracking-wider transition-all border-2 border-[#00381F] ${
    isActive
      ? 'bg-[#0B5844] text-white shadow-neo-pine'
      : 'bg-white text-[#00381F] hover:bg-[#F4F7F5]'
  }`}
>
  [ {cat.label} ({count}) ]
</button>
```

---

### 7. TARJETAS DE PRODUCTO CON SOMBRAS DURAS
**Archivo:** `src/components/catalog/ProductCard.tsx`

1. Marco de la tarjeta:
   ```tsx
   <article className="group relative flex flex-col bg-white border-2 border-[#00381F] shadow-neo-pine hover:shadow-neo-pine-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-left">
   ```
2. Badges en esquina superior izquierda:
   - `[ BEST SELLER ]`: `bg-[#0B5844] text-white border border-[#00381F]`
   - `[ 72H ]`: `badge-silver px-2 py-0.5 text-[9px] font-bold`
3. Fila de precio:
   - Monto en `text-[#00381F] font-black text-xl`.
   - Ahorro en `text-[#187E5F] font-bold font-mono text-xs`.
4. Botón de agregar:
   - Utilizar `.btn-neo-emerald` con texto `[ AGREGAR • $49 USD ]`.

---

### 8. FICHA TÉCNICA Y TABLA COMPARATIVA
**Archivo:** `src/components/home/TechnicalSpecs.tsx`

- Fondo: `#F4F7F5`.
- Marco exterior de los 3 módulos: `border-2 border-[#00381F] divide-[#00381F] shadow-neo-pine`.
- Encabezado de tabla comparativa: `bg-[#00381F] text-white`.
- Celda de VÉNDO destacada: `bg-[#E8F3EE] text-[#00381F] font-black border-l-2 border-[#187E5F]`.

---

### 9. PROTOCOLO DE 3 PASOS Y GARANTÍA
**Archivo:** `src/components/home/ProcessSection.tsx`

- Números de paso `[01]`, `[02]`, `[03]`: en color plata metálico `#94A3B8` o verde esmeralda `#187E5F`.
- Caja de garantía inferior:
  - Fondo: `#0B5844` (Esmeralda profundo) con borde de 2px en `#00381F` y sombra dura.
  - Botón: `.btn-neo-silver` con texto `[ HABLAR CON EL EQUIPO → ]`.

---

### 10. PREGUNTAS FRECUENTES NEO-BRUTAL
**Archivo:** `src/components/home/FaqSection.tsx`

- Contenedor del acordeón: `border-2 border-[#00381F] divide-y-2 divide-[#00381F] shadow-neo-pine`.
- Botón de pregunta: `hover:bg-[#F4F7F5]` con iconos `Plus`/`Minus` en caja cuadrada de 24px con fondo `#00381F` y color blanco.
- Respuesta: `bg-[#F8FAF9] border-t border-slate-200 text-slate-800`.

---

### 11. FOOTER EN VERDE PINO Y DETALLES PLATEADOS
**Archivo:** `src/components/layout/Footer.tsx`

- Fondo: `#00381F` (Verde Pino Oscuro).
- Líneas divisorias: `#0B5844`.
- Logotipo: `VÉNDO ®` en blanco con `®` en plata `#CBD5E1`.
- Botón de WhatsApp: `.btn-neo-silver` con texto en `#00381F` apuntando a `+58 414-9428999`.
- Badges de confianza: Iconos en blanco con texto en plata claro (`#E2E8F0`).

---

### 12. BARRA MÓVIL INFERIOR
**Archivo:** `src/components/layout/StickyBottomBar.tsx`

- Fondo blanco con borde superior de 2px en `#00381F`.
- Badge: `[ HOSTING INCLUIDO ]` en texto `#187E5F` font-bold.
- Botón Carrito: `.btn-neo-emerald` con icono y contador en negrita.

---

### 13. DRAWER DEL CARRITO Y MODAL DE ASESORÍA
**Archivos:** `src/components/cart/CartDrawer.tsx` y `src/components/checkout/ConsultationModal.tsx`

1. **`CartDrawer.tsx`:**
   - Cabecera: Fondo `#00381F` con texto en blanco y plata.
   - Medidor segmentado: casillas activas en `#187E5F` y borde `#00381F`.
   - Add-on **Placa NFC Google Reviews**: Badge con clase `.badge-silver` indicando `[ PRÓXIMAMENTE ]`.
   - Botón de checkout hacia WhatsApp: `.btn-neo-emerald` ancho con sombra dura hacia `+58 414-9428999`.

2. **`ConsultationModal.tsx`:**
   - Marco del modal: `border-2 border-[#00381F] shadow-neo-pine-lg`.
   - Inputs y select: Borde de 2px en `#00381F`, focus outline en `#187E5F`.
   - Botón de envío: `.btn-neo-emerald` con texto `CONECTAR POR WHATSAPP AHORA`.

---

### 14. COMPILACIÓN Y VERIFICACIÓN FINAL

Una vez que OpenCode termine de aplicar los cambios en los archivos anteriores, ejecutar en la terminal:

```bash
# 1. Comprobar que TypeScript y Vite compilen con 0 errores:
npm run build

# 2. Verificar el árbol de Git:
git status

# 3. Guardar los cambios con un commit descriptivo:
git add .
git commit -m "feat(v2.0): implement Emerald Green and Silver Neo-Brutalism design system"

# 4. Hacer push a GitHub:
git push origin main
```

¡Listo! Con esto el proyecto quedará completamente transformado a la identidad **VÉNDO 2.0 (Emerald & Silver Neo-Brutalism)**.
