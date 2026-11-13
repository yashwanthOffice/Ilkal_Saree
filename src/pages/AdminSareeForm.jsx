import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useCatalog } from '../context/CatalogContext.jsx'
import { supabase } from '../lib/supabaseClient'

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function AdminSareeForm() {
  const { id } = useParams()
  const isNew = !id
  const navigate = useNavigate()
  const { categories, sarees, refresh, loading: catalogLoading } = useCatalog()

  const existing = useMemo(() => sarees.find((s) => s.id === id), [sarees, id])

  const [form, setForm] = useState({
    name: '',
    slug: '',
    categoryId: '',
    subcategoryId: '',
    description: '',
    fabric: '',
    color: '',
    occasion: '',
    featured: false,
    available: true,
  })
  const [slugTouched, setSlugTouched] = useState(false)
  const [existingImages, setExistingImages] = useState([]) // from DB, may be reordered/deleted
  const [newFiles, setNewFiles] = useState([]) // File objects picked but not yet uploaded
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  // Populate form once the saree to edit has loaded.
  useEffect(() => {
    if (!isNew && existing) {
      setForm({
        name: existing.name || '',
        slug: existing.slug || '',
        categoryId: existing.category_id || '',
        subcategoryId: existing.subcategory_id || '',
        description: existing.description || '',
        fabric: existing.fabric || '',
        color: existing.color || '',
        occasion: existing.occasion || '',
        featured: !!existing.featured,
        available: existing.available !== false,
      })
      setExistingImages(existing.saree_images || [])
      setSlugTouched(true)
    }
  }, [isNew, existing])

  const selectedCategory = categories.find((c) => c.id === form.categoryId)

  function updateField(field, value) {
    setForm((f) => {
      const next = { ...f, [field]: value }
      if (field === 'name' && !slugTouched) {
        next.slug = slugify(value)
      }
      return next
    })
  }

  function handleCategoryChange(categoryId) {
    setForm((f) => ({ ...f, categoryId, subcategoryId: '' }))
  }

  function handleFilesPicked(e) {
    const files = Array.from(e.target.files || [])
    setNewFiles((prev) => [...prev, ...files])
    e.target.value = ''
  }

  function removeNewFile(index) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index))
  }

  function removeExistingImage(imageId) {
    setExistingImages((prev) => prev.filter((img) => img.id !== imageId))
  }

  function moveExistingImage(index, direction) {
    setExistingImages((prev) => {
      const next = [...prev]
      const target = index + direction
      if (target < 0 || target >= next.length) return next
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.categoryId || !form.subcategoryId) {
      setError('Please choose a category and a type.')
      return
    }

    setSaving(true)
    try {
      const payload = {
        name: form.name,
        slug: form.slug || slugify(form.name),
        category_id: form.categoryId,
        subcategory_id: form.subcategoryId,
        description: form.description,
        fabric: form.fabric,
        color: form.color,
        occasion: form.occasion,
        featured: form.featured,
        available: form.available,
      }

      let sareeId = id

      if (isNew) {
        const { data, error: insertErr } = await supabase
          .from('sarees')
          .insert(payload)
          .select()
          .single()
        if (insertErr) throw insertErr
        sareeId = data.id
      } else {
        const { error: updateErr } = await supabase.from('sarees').update(payload).eq('id', sareeId)
        if (updateErr) throw updateErr
      }

      // Handle image deletions (images removed from the existing list while editing).
      if (!isNew) {
        const keptIds = new Set(existingImages.map((img) => img.id))
        const removed = (existing?.saree_images || []).filter((img) => !keptIds.has(img.id))
        if (removed.length > 0) {
          await supabase.storage.from('saree-images').remove(removed.map((img) => img.storage_path))
          await supabase
            .from('saree_images')
            .delete()
            .in('id', removed.map((img) => img.id))
        }
      }

      // Persist the (possibly reordered) existing images' display_order.
      for (let i = 0; i < existingImages.length; i++) {
        await supabase.from('saree_images').update({ display_order: i }).eq('id', existingImages[i].id)
      }

      // Upload any newly picked files, appended after the existing ones.
      let nextOrder = existingImages.length
      for (const file of newFiles) {
        const path = `${sareeId}/${Date.now()}-${file.name}`
        const { error: uploadErr } = await supabase.storage.from('saree-images').upload(path, file)
        if (uploadErr) throw uploadErr

        const { data: urlData } = supabase.storage.from('saree-images').getPublicUrl(path)
        const { error: imgInsertErr } = await supabase.from('saree_images').insert({
          saree_id: sareeId,
          image_url: urlData.publicUrl,
          storage_path: path,
          display_order: nextOrder,
        })
        if (imgInsertErr) throw imgInsertErr
        nextOrder += 1
      }

      await refresh()
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'Something went wrong while saving.')
    } finally {
      setSaving(false)
    }
  }

  if (catalogLoading || (!isNew && !existing)) {
    return (
      <div className="page container" style={{ paddingBlock: '64px' }}>
        <p>Loading…</p>
      </div>
    )
  }

  return (
    <div className="page container admin-form">
      <style>{`
.admin-form {
  padding-block: var(--space-5) var(--space-7);
  max-width: 720px;
}

.admin-form__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

.admin-form__header h1 {
  font-size: clamp(1.4rem, 3.6vw, 1.9rem);
}

.admin-form form {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.admin-form__row {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: 1fr 1fr;
}

.admin-form label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.admin-form input[type='text'],
.admin-form input[type='email'],
.admin-form select,
.admin-form textarea {
  width: 100%;
  border: 1px solid var(--color-blush);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  font-size: 0.95rem;
  font-family: inherit;
}

.admin-form textarea {
  min-height: 100px;
  resize: vertical;
}

.admin-form__checkboxes {
  display: flex;
  gap: var(--space-4);
}

.admin-form__checkboxes label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.admin-form__images {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.admin-form__image {
  position: relative;
  width: 90px;
}

.admin-form__image img {
  width: 90px;
  height: 110px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  background: var(--color-blush);
}

.admin-form__image-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 0.75rem;
}

.admin-form__image-controls button {
  background: none;
  border: none;
  padding: 0;
}

.admin-form__error {
  color: var(--color-error);
  font-size: 0.88rem;
}
      `}</style>

      <div className="admin-form__header">
        <h1>{isNew ? 'Add Saree' : 'Edit Saree'}</h1>
        <Link to="/admin" className="btn btn-outline">Back</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="slug">URL slug</label>
          <input
            id="slug"
            type="text"
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true)
              updateField('slug', slugify(e.target.value))
            }}
          />
        </div>

        <div className="admin-form__row">
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              required
              value={form.categoryId}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="" disabled>Choose a category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="subcategory">Type</label>
            <select
              id="subcategory"
              required
              value={form.subcategoryId}
              onChange={(e) => updateField('subcategoryId', e.target.value)}
              disabled={!selectedCategory}
            >
              <option value="" disabled>Choose a type</option>
              {selectedCategory?.subcategories.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={form.description}
            onChange={(e) => updateField('description', e.target.value)}
          />
        </div>

        <div className="admin-form__row">
          <div>
            <label htmlFor="fabric">Fabric</label>
            <input id="fabric" type="text" value={form.fabric} onChange={(e) => updateField('fabric', e.target.value)} />
          </div>
          <div>
            <label htmlFor="color">Colour</label>
            <input id="color" type="text" value={form.color} onChange={(e) => updateField('color', e.target.value)} />
          </div>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <input id="occasion" type="text" value={form.occasion} onChange={(e) => updateField('occasion', e.target.value)} />
        </div>

        <div className="admin-form__checkboxes">
          <label>
            <input
              type="checkbox"
              checked={form.available}
              onChange={(e) => updateField('available', e.target.checked)}
            />
            Available
          </label>
          <label>
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => updateField('featured', e.target.checked)}
            />
            Featured
          </label>
        </div>

        <div>
          <label>Photos</label>
          {existingImages.length > 0 && (
            <div className="admin-form__images">
              {existingImages.map((img, i) => (
                <div key={img.id} className="admin-form__image">
                  <img src={img.image_url} alt="" />
                  <div className="admin-form__image-controls">
                    <button type="button" onClick={() => moveExistingImage(i, -1)} disabled={i === 0}>←</button>
                    <button type="button" onClick={() => removeExistingImage(img.id)} style={{ color: 'var(--color-error)' }}>Remove</button>
                    <button type="button" onClick={() => moveExistingImage(i, 1)} disabled={i === existingImages.length - 1}>→</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {newFiles.length > 0 && (
            <div className="admin-form__images">
              {newFiles.map((file, i) => (
                <div key={i} className="admin-form__image">
                  <img src={URL.createObjectURL(file)} alt="" />
                  <div className="admin-form__image-controls">
                    <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>New</span>
                    <button type="button" onClick={() => removeNewFile(i)} style={{ color: 'var(--color-error)' }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handleFilesPicked} />
        </div>

        {error && <p className="admin-form__error">{error}</p>}

        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? 'Saving…' : isNew ? 'Create Saree' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
