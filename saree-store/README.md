# Culture Traditional Ilkal Saree — Frontend

A view-only React + Vite catalog site for a saree brand: homepage carousel, Ilkal saree
heritage info, browsable categories/subcategories, and a contact section. No cart, no login,
no prices — this is a display/catalog site. No backend yet — all data lives in memory
(`src/data/products.js` + React Context).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Adding your own images (no code required)

Images are loaded automatically using Vite's `import.meta.glob` — just drop image files into
the right folder, refresh, and they show up. No filenames or code changes required.

```
src/assets/
  logo/logo.png              The site logo (used in the navbar and footer)
  carousel/                  5 homepage carousel images (name them 1.jpg...5.jpg for order)
  products/
    Ilkal Saree - Silk by Silk/
    Ilkal Saree - Cotton by Cotton/
    Ilkal Saree - Border Silk by Cotton/
    Ilkal Saree - Pallu Silk Body Cotton/
    Ilkal Saree - Border Silk Pallu Silk Body Cotton/
    Khand Saree - Silk by Silk/
    ... (same 5 types for Khand Saree, Duppata, and Stoles — 20 folders total)
```

Each folder is named exactly `"<Category> - <Subcategory>"` and has its own `README.txt`.
Drop one or more photos into a folder and that specific catalog item picks them up
automatically (first image shown on cards, all images available for that item). The
category tiles on the homepage/All Saree pages just borrow the first image found in any
of that category's folders.

Accepted formats: `.jpg` `.jpeg` `.png` `.webp`. Until you add images, each spot shows a
clean placeholder box so the layout still looks intact.

## Carousel image fit

Some photos won't share the same aspect ratio. Open `src/utils/images.js` and look for:

```js
export const CAROUSEL_SHOW_FULL_IMAGE = true
```

- `true` — the whole image is always shown, uncropped ("contain"). Any empty space around
  it fills with the carousel's background color. Best while your carousel photos are mixed
  sizes/aspect ratios.
- `false` — each image fills the whole slide edge-to-edge, cropping if needed ("cover").
  Best once your carousel photos are all a consistent wide aspect ratio.

Flip the value and refresh to switch — no other changes needed.

## Project structure

```
src/
  App.jsx                    Routes + global tokens/reset (injected via <style> at the top)
  utils/images.js           Loads images from src/assets/ (import.meta.glob) + carousel fit toggle
  data/products.js         Categories, subcategories, and placeholder product data
  context/
    CatalogContext.jsx        Read-only catalog state (products/categories)
  components/
    Navbar.jsx                 Logo + Home / All Saree / About Us / Duppata / Stoles
    Footer.jsx                  Logo, categories, quick links, and the contact block (phone,
                                  email, Google Maps, Facebook, Instagram)
    Carousel.jsx                 Auto-advancing homepage carousel (5 slides, changes every 3s)
    IlkalInfo.jsx                 Ilkal saree heritage content, embedded on the Home page
    ProductCard.jsx
    CategoryCard.jsx
    FilterSidebar.jsx             Category/subcategory filters (no price filter)
  pages/
    Home.jsx                      Carousel + Ilkal info + category showcase + contact callout
    AboutUs.jsx                     Built from the company's About Us content + photos
    AllSaree.jsx                     Category/subcategory browsing grid
    ProductDetail.jsx                 Image, description, "Call to Enquire" / "Email Us"
    NotFound.jsx
```

No `.css` files exist in `src/` — every component/page carries its own styles inline via a
`<style>` tag, right next to the markup it styles.

## Routes

| Path | Page |
|---|---|
| `/` | Home (carousel + Ilkal info + categories + contact) |
| `/all-saree` | All categories |
| `/all-saree/:categoryId` | One category (`ilkal-saree`, `khand-saree`, `duppata`, `stoles`) |
| `/product/:productId` | Product detail |
| `/about` | About Us |

## Categories & subcategories

Four categories — **Ilkal Saree**, **Khand Saree**, **Duppata**, **Stoles** — each with the
same five subcategories:

1. Silk by Silk
2. Cotton by Cotton
3. Border Silk by Cotton
4. Pallu Silk Body Cotton
5. Border Silk Pallu Silk Body Cotton

Edit `subcategoryTemplate` and `categories` in `src/data/products.js` to change these, and
`products` (auto-generated, one placeholder item per subcategory) to add real items —
all sample/random data for now, as requested. If you add a new category or subcategory, also
create a matching `src/assets/products/<Category> - <Subcategory>/` folder for its photos.

## Contact details

Placeholder phone/email/social links live in `src/components/Footer.jsx` (top of the file,
`CONTACT` object) and are duplicated in `src/pages/ProductDetail.jsx`'s enquire buttons —
update both with the real phone number, email, Facebook/Instagram URLs, and Google Maps link.

## Next steps (when you add a backend/database)

- Replace `src/data/products.js` and `CatalogContext` with real API calls.
- Swap the `import.meta.glob` image folders for images served from the database/CDN.
- Re-add customer login, cart, and pricing if/when the site becomes transactional.
