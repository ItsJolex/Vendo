# GUÍA OPENCODE // ACTUALIZACIÓN DE FAVICON E ICONO OFICIAL VÉNDO 2.0

Este documento contiene las modificaciones para que **OpenCode** actualice el favicon del navegador y el logotipo en la cabecera de la web con el nuevo isotipo oficial de VÉNDO.

---

### 1. ACTUALIZAR FAVICON EN `index.html`

Reemplazar la línea del favicon en `index.html` (alrededor de la línea 5):

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2300381F'/><rect x='3' y='3' width='94' height='94' fill='none' stroke='%23CBD5E1' stroke-width='3'/><path d='M22 28 L36 28 L50 68 L36 68 Z' fill='%23FFFFFF'/><path d='M44 68 L68 28 L56 28 L38 68 Z' fill='%23187E5F'/><polygon points='68,16 82,34 54,34' fill='%23187E5F'/><text x='50' y='88' fill='%23FFFFFF' font-family='monospace' font-size='10' font-weight='900' letter-spacing='1' text-anchor='middle'>VÉNDO</text></svg>" />
```

---

### 2. ACTUALIZAR LOGO EN CABECERA (`src/components/layout/Header.tsx`)

En `src/components/layout/Header.tsx`, integrar el nuevo isotipo junto al nombre en la zona central:

```tsx
          {/* Zona Central: Logotipo Brutalista con Isotipo */}
          <div className="text-center">
            <a href="#top" className="inline-flex items-center gap-2 group">
              {/* Isotipo SVG Oficial */}
              <div className="w-7 h-7 bg-emerald-pine border-2 border-emerald-pine flex items-center justify-center shadow-neo-pine group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
                  <path d="M22 28 L36 28 L50 68 L36 68 Z" fill="#FFFFFF" />
                  <path d="M44 68 L68 28 L56 28 L38 68 Z" fill="#187E5F" />
                  <polygon points="68,16 82,34 54,34" fill="#187E5F" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-[0.2em] font-display uppercase leading-none text-emerald-pine">
                VÉNDO<span className="text-emerald-vibrant">®</span>
              </h1>
            </a>
          </div>
```

---

### 3. VERIFICACIÓN

Ejecutar:
```bash
npm run build
```
Para confirmar que todo compile sin errores.
