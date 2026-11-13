# Culture Traditional Ilkal Saree — Frontend + Supabase Backend

A React + Vite catalog site for a saree brand, backed by Supabase (Postgres database +
Auth + Storage). Public visitors browse categories and sarees; a logged-in admin manages
everything from `/admin`.

## 1. Create your Supabase project

1. Go to [supabase.com](https://supabase.com), sign up free, and create a new project.
2. Wait for it to finish provisioning (~2 minutes).
3. Open **SQL Editor** → **New query**, paste the entire contents of
   `supabase/schema.sql` from this project, and run it. This creates all tables, security
   policies, the image storage bucket, and seeds the 4 categories × 5 types.

## 2. Create your admin account

1. In Supabase, go to **Authentication → Users → Add user** (create user manually).
2. Enter an email and password — this is what you'll log in with at `/admin/login`.
3. Copy the new user's **UID** (shown in the users list).
4. Back in **SQL Editor**, run:
   ```sql
   insert into admins (user_id) values ('paste-the-uid-here');
   ```
   Without this step, you can log in but every admin action will be blocked — the `admins`
   table is what the security policies check.

## 3. Connect the frontend to your project

1. In Supabase, go to **Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. In this project, copy `.env.example` to `.env` and fill in both values:
   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
   The anon key is safe to expose in frontend code — it only ever grants what the Row
   Level Security policies in `supabase/schema.sql` allow (public read, admin-only write).

## 4. Run it

```bash
npm install
npm run dev
```

Visit the site, then go to `/admin/login` (also linked quietly at the bottom of the
footer) and sign in with the admin account from step 2.

## Using the admin panel

- **`/admin`** — list of all sarees, with edit/delete
- **`/admin/sarees/new`** — add a saree: name, category, type, description, fabric,
  colour, occasion, availability/featured flags, and multiple photos (drag in several
  files at once)
- **`/admin/sarees/:id/edit`** — same form, plus reordering/removing existing photos
- **`/admin/categories`** — view categories and add new subcategories ("types")

Anything added here appears on the public site immediately — no code changes, no
redeploy.

## Project structure

```
supabase/schema.sql          Run once in Supabase's SQL Editor — tables, RLS, seed data
src/
  lib/supabaseClient.js      Supabase client, reads .env
  context/
    AuthContext.jsx           Admin login/session (Supabase Auth)
    CatalogContext.jsx         Fetches categories/sarees/images from Supabase
  components/
    RequireAdmin.jsx           Route guard — redirects to /admin/login if not signed in
    Navbar.jsx, Footer.jsx, Carousel.jsx, IlkalInfo.jsx, ProductCard.jsx, CategoryCard.jsx,
    FilterSidebar.jsx
  pages/
    Home.jsx, AboutUs.jsx, AllSaree.jsx, ProductDetail.jsx, NotFound.jsx    (public)
    AdminLogin.jsx, AdminDashboard.jsx, AdminSareeForm.jsx, AdminCategories.jsx  (admin)
  utils/images.js             Homepage carousel images only (src/assets/carousel/) —
                                everything else now lives in Supabase
```

No `.css` files exist in `src/` — every component/page carries its own styles inline via a
`<style>` tag, right next to the markup it styles.

## Routes

| Path | Page | Access |
|---|---|---|
| `/` | Home (carousel + Ilkal info + categories + contact) | Public |
| `/all-saree` / `/all-saree/:categorySlug` | Browse sarees | Public |
| `/product/:slug` | Saree detail | Public |
| `/about` | About Us | Public |
| `/admin/login` | Admin sign-in | Public |
| `/admin` | Saree list, edit/delete | Admin only |
| `/admin/sarees/new`, `/admin/sarees/:id/edit` | Add/edit a saree + photos | Admin only |
| `/admin/categories` | View categories, add a type | Admin only |

## Homepage carousel

Drop 1–5 images into `src/assets/carousel/` (name them `1.jpg`...`5.jpg` for order) — this
one folder stays local since it's decorative banner imagery, not catalog data. See
`src/assets/carousel/README.txt`.

The fit mode (whole image visible vs. cropped to fill) is a single toggle in
`src/utils/images.js`:
```js
export const CAROUSEL_SHOW_FULL_IMAGE = true
```

## Security notes

- Row Level Security (in `supabase/schema.sql`) is what actually enforces admin-only
  writes — the frontend's `RequireAdmin` route guard is just a UX nicety, not the real
  security boundary. Even if someone bypassed the frontend entirely, Supabase itself
  rejects non-admin writes.
- Never commit your real `.env` file (already in `.gitignore`).
- The anon key in `.env` is meant to be public; never expose a Supabase **service role**
  key in frontend code.

## Deployment

The frontend deploys the same way as any static Vite app (Vercel/Netlify/Cloudflare
Pages/etc.) — just set the two `VITE_SUPABASE_*` environment variables in your hosting
provider's dashboard. Supabase itself is already hosted; there's no separate backend to
deploy.
