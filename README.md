# Leopay — Landing Page (React + Plain CSS)

A faithful recreation of the **Leopay Website Redesign** landing page from Figma,
built with React (Vite) and hand-written plain CSS — no UI framework, no Tailwind.

## Run it

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # production build into /dist
npm run preview    # preview the production build
```

## Structure

```
leopay-landing/
├── index.html                 # entry, loads Google Fonts (Inter + Poppins)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # assembles all sections in order
    ├── styles/
    │   └── global.css         # design tokens (colors, type, spacing), resets, shared button/eyebrow primitives
    └── components/            # one .jsx + matching .css per section
        ├── Logo.jsx           # reusable Leopay mark + wordmark (inline SVG)
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css            # headline, floating flag/coin chips, dotted globe
        ├── Partners.jsx / .css        # trusted partners + payment methods strip
        ├── FastestWay.jsx / .css      # "move your money" — Others vs Leopay metric cards
        ├── Comparison.jsx / .css      # "Built for smarter Global Payments" checklist
        ├── Features.jsx / .css        # 4 illustrated feature cards
        ├── GlobalPresence.jsx / .css  # country pills (Active/Beta/Soon) + dotted world map
        ├── Testimonials.jsx / .css    # dark section, simple carousel
        ├── Faq.jsx / .css             # accordion
        ├── Cta.jsx / .css             # green ribbed call-to-action banner
        └── Footer.jsx / .css          # link columns + giant translucent wordmark
```

## Design tokens

All colors and type live as CSS variables in `src/styles/global.css`:

| Token        | Value     | Use                         |
|--------------|-----------|-----------------------------|
| `--navy`     | `#162755` | headings, primary text      |
| `--navy-ink` | `#060612` | hero headline               |
| `--green`    | `#00ba85` | accent, CTAs                |
| `--slate`    | `#505670` | body copy                   |

Display font: **Poppins**. Body font: **Inter** (the original uses the private
"Britti Sans / Geist" faces; these are the closest free web equivalents).

## Notes

- Flag and coin glyphs in the hero/map use Unicode emoji so the project stays
  fully self-contained (the Figma asset URLs expire after 7 days). Swap in real
  SVGs under `public/assets/` if you want pixel-exact brand icons.
- Fully responsive down to mobile, with visible keyboard focus and
  `prefers-reduced-motion` respected.
