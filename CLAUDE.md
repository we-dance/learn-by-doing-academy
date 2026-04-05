# Learn By Doing Academy

An AI education platform where students learn to build real products with AI through weekly live sessions, hands-on projects, and mentorship.

**Live site:** Landing page for the program with three pricing tiers (Community, Live, Mentorship).

## Quick start

```bash
git clone <repo-url>
cd learn-by-doing-academy
npm install
npm run dev
# Open http://localhost:8080
```

## Tech stack

| Layer      | Technology                           |
| ---------- | ------------------------------------ |
| Framework  | React 18                             |
| Language   | TypeScript                           |
| Build tool | Vite (port 8080)                     |
| Styling    | Tailwind CSS 3 + tailwindcss-animate |
| Components | shadcn/ui (Radix primitives)         |
| Icons      | lucide-react                         |
| Routing    | react-router-dom v6                  |
| Forms      | react-hook-form + zod                |
| State/data | @tanstack/react-query                |

## Project structure

```
src/
  main.tsx              # Entry point — mounts <App /> to #root
  App.tsx               # Router setup: "/" -> Index, "*" -> NotFound
  index.css             # Global styles, Tailwind directives, CSS variables
  App.css               # App-level styles
  pages/
    Index.tsx           # Main landing page (hero, pricing, FAQ, testimonials)
    NotFound.tsx        # 404 page
  components/
    ApplicationDialog.tsx  # Tier selection dialog with Stripe payment links
    FAQ.tsx                # Accordion FAQ section
    ui/                    # shadcn/ui primitives (button, card, dialog, etc.)
  hooks/
    use-mobile.tsx      # Responsive breakpoint hook
    use-toast.ts        # Toast notification hook
  lib/
    payment-matrix.ts   # Pricing tiers, Stripe links, feature lists
    utils.ts            # cn() helper (clsx + tailwind-merge)
public/                 # Static assets (favicon, OG image, logos)
index.html              # HTML shell
tailwind.config.ts      # Theme: colors, animations, fonts
vite.config.ts          # Vite config with @ path alias
```

## Key files to know

- **`src/lib/payment-matrix.ts`** — Single source of truth for pricing. Three tiers: Community (29 EUR), Live (79 EUR), Mentorship (199 EUR). Each has a Stripe payment link and feature list.
- **`src/pages/Index.tsx`** — The entire landing page. Large file with multiple sections: header, hero, how-it-works, pricing cards, success stories, FAQ, footer.
- **`src/components/ApplicationDialog.tsx`** — The purchase flow. User picks a tier, clicks "Start Free Trial", gets redirected to Stripe.
- **`tailwind.config.ts`** — Custom theme with emerald-based primary colors and dark background.

## Conventions

### Components

- Functional components with arrow functions: `const MyComponent = () => { ... }`
- One component per file. File name matches component name in PascalCase.
- shadcn/ui primitives live in `src/components/ui/` — do not edit these directly. Add new ones with the shadcn CLI.
- Custom components go in `src/components/`.
- Pages go in `src/pages/` and are wired in `App.tsx`.

### Styling

- Use Tailwind utility classes. No separate CSS files for components.
- Use the `cn()` helper from `src/lib/utils.ts` for conditional classes.
- Follow the existing color tokens: `primary`, `accent`, `muted`, `background`, `foreground`, `card`, `border`.
- Dark theme by default (the site uses a dark background).
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints.

### TypeScript

- Strict mode. Define interfaces for props.
- Use `@/` path alias for imports (maps to `src/`).
- Prefer explicit types over `any`.

### Naming

- Files: PascalCase for components (`ApplicationDialog.tsx`), kebab-case for utilities (`payment-matrix.ts`).
- CSS classes: Tailwind utilities only.
- Variables/functions: camelCase. Types/interfaces: PascalCase.

## Scripts

| Command             | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start dev server on port 8080 with HMR |
| `npm run build`     | Production build to `dist/`            |
| `npm run build:dev` | Development build                      |
| `npm run lint`      | Run ESLint                             |
| `npm run preview`   | Preview the production build locally   |

## How to contribute

1. Create a branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the conventions above
3. Test locally: `npm run dev` and check in browser
4. Run lint: `npm run lint`
5. Commit with a clear message explaining what and why
6. Push and open a PR

