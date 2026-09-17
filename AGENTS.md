# AGENTS.md — VÉNDO

Single-page React 18 + Vite 5 + TS + Tailwind v3 app. Spanish-language mobile-first landing that doubles as an embedded catalog; "checkout" only builds `wa.me` links (no backend, no router).

## Commands & verification
- `npm run dev` — Vite on port 5173 (`strictPort`, host 0.0.0.0).
- `npm run build` — the ONLY verification gate: `tsc --noEmit && vite build`. There are no tests, no linter and no CI.
- tsconfig sets `noUnusedLocals`/`noUnusedParameters`: any unused import fails the build.

## Live vs dead components
`src/App.tsx` is the only assembler. These files are **orphaned leftovers from earlier iterations — do not edit or import them**:
`home/HeroSection.tsx`, `home/BentoBenefits.tsx`, `home/CatalogSection.tsx`, `home/SolutionCard.tsx`, `checkout/BottomSheetDrawer.tsx`.
The live tree is `layout/{AnnouncementTicker,Header,StickyBottomBar,Footer}` + `home/{HeroBanner,TechnicalSpecs,ProcessSection,FaqSection}` + `catalog/*` + `cart/CartDrawer` + `checkout/{ConsultationModal,SolutionDetailsModal}`.

## Design law (easy to break, high visibility)
- Absolute 0px radius, enforced globally: `* { border-radius: 0px !important; }` in `src/index.css`. Never add rounded elements or `rounded-*` classes.
- No blurred/soft shadows. Hierarchy = 2px solid borders + hard offset shadows (`shadow-neo-pine`, etc.) and the mechanical press buttons in `index.css` (`.btn-neo-emerald`, `.btn-neo-silver`, `.card-neo-brutal`, `.badge-silver`).
- Current palette is VÉNDO 2.0 emerald/silver tokens in `tailwind.config.js`. The black/white/red palette described in `README.md` and `PROJECT_CONTEXT.md` is stale V1; the authoritative visual spec is `PLAN_VENDO_2_EMERALD_SILVER_OPENCODE.md`.
- UI copy: Spanish, uppercase, bracket microcopy (`[ BEST SELLER ]`), prices/technical text in `font-mono`.

## Data & state
- Catalog content lives in `src/data/solutions.ts` (types in `src/types/solution.ts`). Prices are intentionally `0` (sell via consultation, not fixed price).
- WhatsApp number and URL builder are centralized in `src/types/solution.ts` (`WHATSAPP_PHONE`, `getWhatsAppUrl`). Change the business number there only.
- Cart persists to localStorage key `vendo_cart_v2` (`src/context/CartContext.tsx`). Bump the key suffix if `CartItem` shape changes.
- Fonts (Montserrat, Barlow Condensed, Space Mono) are loaded from Google Fonts in `index.html`; a new family requires editing both `index.html` and `fontFamily` in `tailwind.config.js`.

## Workflow
- Deploy: Vercel auto-builds `main` on GitHub `ItsJolex/Vendo`. Commits use English conventional style (`feat:` / `docs:`); project docs are in Spanish.
