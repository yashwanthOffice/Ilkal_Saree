import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import AllSaree from './pages/AllSaree.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <style>{`
/* =========================================================
   DESIGN TOKENS
   Palette drawn from silk saree materials:
   maroon (kanjeevaram silk), antique gold (zari thread),
   ivory (undyed silk), deep teal (contrast border thread)
   ========================================================= */
:root {
  --color-maroon: #6e1423;
  --color-maroon-dark: #4a0d18;
  --color-gold: #c9a227;
  --color-gold-light: #e6c866;
  --color-ivory: #fbf6ed;
  --color-blush: #f3e4e1;
  --color-teal: #0f4c46;
  --color-charcoal: #2a211c;
  --color-charcoal-soft: #5c5049;
  --color-white: #ffffff;
  --color-error: #b3261e;
  --color-success: #2e6b3e;

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Work Sans', sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;

  --container-max: 1280px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;

  --shadow-card: 0 4px 20px rgba(42, 33, 28, 0.08);
  --shadow-hover: 0 10px 30px rgba(42, 33, 28, 0.14);

  --header-height: 68px;
}

/* =========================================================
   RESET
   ========================================================= */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--color-ivory);
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
  color: var(--color-maroon-dark);
}

p {
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

input, select, textarea {
  font-family: inherit;
  font-size: 1rem;
}

/* Visible keyboard focus everywhere, always */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* =========================================================
   LAYOUT PRIMITIVES (used across all pages)
   ========================================================= */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-3);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-5);
  }
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--space-6);
  }
}

.page {
  min-height: calc(100vh - var(--header-height));
}

/* Temple-border motif: the signature recurring divider,
   modelled on the woven zigzag border found on a saree. */
.temple-border {
  height: 14px;
  width: 100%;
  background:
    linear-gradient(135deg, var(--color-gold) 25%, transparent 25%) -7px 0,
    linear-gradient(225deg, var(--color-gold) 25%, transparent 25%) -7px 0;
  background-size: 14px 14px;
  background-color: transparent;
  opacity: 0.9;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-teal);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  background: var(--color-maroon);
  color: var(--color-white);
}
.btn-primary:hover {
  background: var(--color-maroon-dark);
}

.btn-outline {
  background: transparent;
  border-color: var(--color-maroon);
  color: var(--color-maroon);
}
.btn-outline:hover {
  background: var(--color-maroon);
  color: var(--color-white);
}

.btn-gold {
  background: var(--color-gold);
  color: var(--color-charcoal);
}
.btn-gold:hover {
  background: var(--color-gold-light);
}

.btn-block {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
`}</style>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/all-saree" element={<AllSaree />} />
          <Route path="/all-saree/:categoryId" element={<AllSaree />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
