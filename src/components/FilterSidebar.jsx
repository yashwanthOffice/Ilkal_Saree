
export default function FilterSidebar({
  categories,
  activeCategory,
  activeSubcategory,
  onSelectCategory,
  onSelectSubcategory,
  isOpen,
  onClose,
}) {
  const activeCat = categories.find((c) => c.id === activeCategory)

  return (
    <>
      <style>{`
.filter-sidebar__scrim {
  position: fixed;
  inset: 0;
  background: rgba(42, 33, 28, 0.5);
  z-index: 199;
}

.filter-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(84vw, 320px);
  background: var(--color-white);
  z-index: 200;
  padding: var(--space-4);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
}

.filter-sidebar--open {
  transform: translateX(0);
}

.filter-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.filter-sidebar__close {
  background: none;
  border: none;
  font-size: 1.1rem;
}

.filter-sidebar__group {
  margin-bottom: var(--space-5);
}

.filter-sidebar__group h4 {
  font-family: var(--font-body);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-2);
}

.filter-sidebar__group ul li button {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 8px 0;
  font-size: 0.92rem;
  color: var(--color-charcoal);
}

.filter-sidebar__group ul li button.is-active {
  color: var(--color-maroon);
  font-weight: 700;
}

.filter-sidebar__group input[type='range'] {
  width: 100%;
  accent-color: var(--color-maroon);
}

/* Desktop: docked column, no drawer/scrim behaviour */
@media (min-width: 900px) {
  .filter-sidebar__scrim {
    display: none;
  }

  .filter-sidebar {
    position: static;
    transform: none;
    width: 100%;
    box-shadow: var(--shadow-card);
    border-radius: var(--radius-md);
    padding: var(--space-4);
  }

  .filter-sidebar__header {
    display: none;
  }
}
`}</style>
      
      {isOpen && <div className="filter-sidebar__scrim" onClick={onClose} />}
      <aside className={`filter-sidebar ${isOpen ? 'filter-sidebar--open' : ''}`}>
        <div className="filter-sidebar__header">
          <h3>Filters</h3>
          <button className="filter-sidebar__close" onClick={onClose} aria-label="Close filters">
            ✕
          </button>
        </div>

        <div className="filter-sidebar__group">
          <h4>Category</h4>
          <ul>
            <li>
              <button
                className={!activeCategory ? 'is-active' : ''}
                onClick={() => onSelectCategory(null)}
              >
                All Sarees
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={activeCategory === cat.id ? 'is-active' : ''}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {activeCat && (
          <div className="filter-sidebar__group">
            <h4>{activeCat.name} &mdash; Type</h4>
            <ul>
              <li>
                <button
                  className={!activeSubcategory ? 'is-active' : ''}
                  onClick={() => onSelectSubcategory(null)}
                >
                  All Types
                </button>
              </li>
              {activeCat.subcategories.map((sub) => (
                <li key={sub.id}>
                  <button
                    className={activeSubcategory === sub.id ? 'is-active' : ''}
                    onClick={() => onSelectSubcategory(sub.id)}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </>
  )
}
