import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCatalog } from '../context/CatalogContext.jsx'
import { supabase } from '../lib/supabaseClient'

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function AdminCategories() {
  const { categories, loading, refresh } = useCatalog()
  const [newSubName, setNewSubName] = useState('')
  const [targetCategory, setTargetCategory] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleAddSubcategory(e) {
    e.preventDefault()
    setError('')
    if (!targetCategory || !newSubName.trim()) {
      setError('Choose a category and enter a name.')
      return
    }
    setSaving(true)
    const { error: insertErr } = await supabase.from('subcategories').insert({
      category_id: targetCategory,
      name: newSubName.trim(),
      slug: slugify(newSubName),
    })
    setSaving(false)
    if (insertErr) {
      setError(insertErr.message)
      return
    }
    setNewSubName('')
    await refresh()
  }

  return (
    <div className="page container admin-categories">
      <style>{`
.admin-categories {
  padding-block: var(--space-5) var(--space-7);
  max-width: 720px;
}

.admin-categories__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

.admin-categories__header h1 {
  font-size: clamp(1.4rem, 3.6vw, 1.9rem);
}

.admin-cat-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--space-4);
  margin-bottom: var(--space-3);
}

.admin-cat-card h3 {
  color: var(--color-maroon);
  margin-bottom: var(--space-2);
}

.admin-cat-card ul li {
  font-size: 0.9rem;
  color: var(--color-charcoal-soft);
  padding-block: 3px;
}

.admin-add-sub {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--space-4);
  margin-top: var(--space-5);
}

.admin-add-sub h3 {
  margin-bottom: var(--space-3);
}

.admin-add-sub__row {
  display: grid;
  gap: var(--space-2);
  grid-template-columns: 1fr 1fr auto;
}

.admin-add-sub select,
.admin-add-sub input {
  border: 1px solid var(--color-blush);
  border-radius: var(--radius-sm);
  padding: 10px;
  font-family: inherit;
}

.admin-add-sub__error {
  color: var(--color-error);
  font-size: 0.85rem;
  margin-top: var(--space-2);
}
      `}</style>

      <div className="admin-categories__header">
        <h1>Categories</h1>
        <Link to="/admin" className="btn btn-outline">Back</Link>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : (
        categories.map((cat) => (
          <div key={cat.id} className="admin-cat-card">
            <h3>{cat.name}</h3>
            <ul>
              {cat.subcategories.map((sub) => (
                <li key={sub.id}>{sub.name}</li>
              ))}
            </ul>
          </div>
        ))
      )}

      <div className="admin-add-sub">
        <h3>Add a Type (Subcategory)</h3>
        <form className="admin-add-sub__row" onSubmit={handleAddSubcategory}>
          <select value={targetCategory} onChange={(e) => setTargetCategory(e.target.value)}>
            <option value="">Choose category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="e.g. Zari Border"
            value={newSubName}
            onChange={(e) => setNewSubName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Adding…' : 'Add'}
          </button>
        </form>
        {error && <p className="admin-add-sub__error">{error}</p>}
      </div>
    </div>
  )
}
