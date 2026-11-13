import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'

export default function AllSaree() {
  const { categoryId: categorySlug } = useParams()
  const { categories, sarees, loading, getCategoryBySlug } = useCatalog()
  const [activeSubcategory, setActiveSubcategory] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeCategoryObj = categorySlug ? getCategoryBySlug(categorySlug) : null

  const filtered = useMemo(() => {
    let list = sarees
    if (activeCategoryObj) list = list.filter((s) => s.category_id === activeCategoryObj.id)
    if (activeSubcategory) list = list.filter((s) => s.subcategory_id === activeSubcategory)
    return list
  }, [sarees, activeCategoryObj, activeSubcategory])

  function handleSelectCategory(slug) {
    window.location.href = slug ? `/all-saree/${slug}` : '/all-saree'
  }

  return (
    <div className="page all-saree">
      <style>{`
.all-saree__banner {
  padding-block: var(--space-5) var(--space-4);
  border-bottom: 1px solid var(--color-blush);
}

.all-saree__banner h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-top: var(--space-1);
}

.all-saree__layout {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-5) var(--space-7);
}

.all-saree__toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}

.all-saree__count {
  color: var(--color-charcoal-soft);
  font-size: 0.9rem;
}

.all-saree__filter-btn {
  padding: 10px 18px;
}

.all-saree__empty {
  text-align: center;
  padding-block: var(--space-7);
  color: var(--color-charcoal-soft);
}

.all-saree__empty h3 {
  color: var(--color-maroon-dark);
  margin-bottom: var(--space-2);
}

.all-saree .product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .all-saree .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) {
  .all-saree__layout {
    grid-template-columns: 240px 1fr;
    align-items: start;
  }
  .all-saree__filter-btn {
    display: none;
  }
}

@media (min-width: 1280px) {
  .all-saree .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
      `}</style>

      <div className="all-saree__banner container">
        <p className="eyebrow">{activeCategoryObj ? activeCategoryObj.name : 'All Sarees'}</p>
        <h1>{activeCategoryObj ? activeCategoryObj.tagline : 'Browse The Full Collection'}</h1>
      </div>

      <div className="container all-saree__layout">
        <FilterSidebar
          categories={categories}
          activeCategory={categorySlug || null}
          activeSubcategory={activeSubcategory}
          onSelectCategory={handleSelectCategory}
          onSelectSubcategory={setActiveSubcategory}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div>
          <div className="all-saree__toolbar">
            <button className="btn btn-outline all-saree__filter-btn" onClick={() => setSidebarOpen(true)}>
              Filters
            </button>
            <p className="all-saree__count">{loading ? 'Loading…' : `${filtered.length} sarees`}</p>
          </div>

          {loading ? (
            <div className="all-saree__empty">
              <h3>Loading the collection…</h3>
            </div>
          ) : filtered.length === 0 ? (
            <div className="all-saree__empty">
              <h3>No sarees here yet</h3>
              <p>Check back soon — new pieces are added regularly.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((s) => (
                <ProductCard key={s.id} saree={s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
