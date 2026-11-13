-- ============================================================
-- Culture Traditional Ilkal Saree — Supabase schema
-- Run this once in the Supabase SQL Editor (Project → SQL Editor → New query).
-- Safe to re-run: uses "if not exists" / "or replace" where possible.
-- ============================================================

-- ---------- Extensions ----------
create extension if not exists "pgcrypto"; -- for gen_random_uuid()

-- ---------- Tables ----------

create table if not exists categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,               -- "Ilkal Saree"
  slug        text not null unique,        -- "ilkal-saree"
  tagline     text,
  image_url   text,                        -- optional category hero image
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists subcategories (
  id            uuid primary key default gen_random_uuid(),
  category_id   uuid not null references categories(id) on delete cascade,
  name          text not null,             -- "Silk by Silk"
  slug          text not null,             -- "silk-by-silk"
  created_at    timestamptz not null default now(),
  unique (category_id, slug)
);

create table if not exists sarees (
  id              uuid primary key default gen_random_uuid(),
  category_id     uuid not null references categories(id),
  subcategory_id  uuid not null references subcategories(id),
  name            text not null,
  slug            text not null unique,
  description     text,
  fabric          text,
  color           text,
  occasion        text,
  featured        boolean not null default false,
  available       boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table if not exists saree_images (
  id              uuid primary key default gen_random_uuid(),
  saree_id        uuid not null references sarees(id) on delete cascade,
  image_url       text not null,           -- public Supabase Storage URL
  storage_path    text not null,           -- bucket path, used to delete the file later
  alt_text        text,
  display_order   int not null default 0,
  created_at      timestamptz not null default now()
);

-- Admin allowlist: which auth.users may write to the catalog.
-- After creating your admin user in Authentication → Users, insert their
-- user id here (see the README instructions).
create table if not exists admins (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  created_at  timestamptz not null default now()
);

-- ---------- updated_at trigger ----------
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists categories_set_updated_at on categories;
create trigger categories_set_updated_at
  before update on categories
  for each row execute function set_updated_at();

drop trigger if exists sarees_set_updated_at on sarees;
create trigger sarees_set_updated_at
  before update on sarees
  for each row execute function set_updated_at();

-- ---------- Row Level Security ----------

alter table categories enable row level security;
alter table subcategories enable row level security;
alter table sarees enable row level security;
alter table saree_images enable row level security;
alter table admins enable row level security;

-- Everyone (including logged-out visitors) can read the catalog.
drop policy if exists "public read categories" on categories;
create policy "public read categories" on categories for select using (true);

drop policy if exists "public read subcategories" on subcategories;
create policy "public read subcategories" on subcategories for select using (true);

drop policy if exists "public read sarees" on sarees;
create policy "public read sarees" on sarees for select using (true);

drop policy if exists "public read saree_images" on saree_images;
create policy "public read saree_images" on saree_images for select using (true);

-- Only signed-in admins (present in the admins table) can write.
drop policy if exists "admin write categories" on categories;
create policy "admin write categories" on categories for all
  using (auth.uid() in (select user_id from admins))
  with check (auth.uid() in (select user_id from admins));

drop policy if exists "admin write subcategories" on subcategories;
create policy "admin write subcategories" on subcategories for all
  using (auth.uid() in (select user_id from admins))
  with check (auth.uid() in (select user_id from admins));

drop policy if exists "admin write sarees" on sarees;
create policy "admin write sarees" on sarees for all
  using (auth.uid() in (select user_id from admins))
  with check (auth.uid() in (select user_id from admins));

drop policy if exists "admin write saree_images" on saree_images;
create policy "admin write saree_images" on saree_images for all
  using (auth.uid() in (select user_id from admins))
  with check (auth.uid() in (select user_id from admins));

-- Nobody can read/write the admins table via the client API — it's only
-- ever checked internally by the policies above.
drop policy if exists "no client access to admins" on admins;
create policy "no client access to admins" on admins for all using (false);

-- Lets the frontend check "am I an admin?" without being able to read the
-- admins table directly (the table itself stays locked down above).
-- SECURITY DEFINER runs as the function owner, bypassing RLS just for this
-- one safe, narrow check.
create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (select 1 from admins where user_id = auth.uid());
$$;

-- Let any signed-in user call it (it only ever tells them about themselves).
grant execute on function is_admin() to authenticated;

-- ---------- Seed: categories + subcategories ----------
-- Safe to re-run — "on conflict do nothing" skips rows that already exist.

insert into categories (name, slug, tagline) values
  ('Ilkal Saree', 'ilkal-saree', 'Traditional Tope Teni handloom sarees from Karnataka'),
  ('Khand Saree', 'khand-saree', 'Classic khand weave sarees, handcrafted on the loom'),
  ('Duppata', 'duppata', 'Handwoven duppatas in silk and cotton blends'),
  ('Stoles', 'stoles', 'Lightweight handloom stoles for everyday and festive wear')
on conflict (slug) do nothing;

insert into subcategories (category_id, name, slug)
select c.id, s.name, s.slug
from categories c
cross join (values
  ('Silk by Silk', 'silk-by-silk'),
  ('Cotton by Cotton', 'cotton-by-cotton'),
  ('Border Silk by Cotton', 'border-silk-by-cotton'),
  ('Pallu Silk Body Cotton', 'pallu-silk-body-cotton'),
  ('Border Silk Pallu Silk Body Cotton', 'border-silk-pallu-silk-body-cotton')
) as s(name, slug)
on conflict (category_id, slug) do nothing;

-- ---------- Storage bucket ----------
-- Run once — creates a public bucket for saree photos.
insert into storage.buckets (id, name, public)
values ('saree-images', 'saree-images', true)
on conflict (id) do nothing;

-- Public can view images (needed since the bucket serves the public site).
drop policy if exists "public read saree-images" on storage.objects;
create policy "public read saree-images" on storage.objects
  for select using (bucket_id = 'saree-images');

-- Only admins can upload/replace/delete images.
drop policy if exists "admin write saree-images" on storage.objects;
create policy "admin write saree-images" on storage.objects
  for all using (
    bucket_id = 'saree-images'
    and auth.uid() in (select user_id from admins)
  )
  with check (
    bucket_id = 'saree-images'
    and auth.uid() in (select user_id from admins)
  );
