import { Link, useNavigate } from 'react-router-dom'
import { useCatalog } from '../context/CatalogContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../lib/supabaseClient'
import { useState } from 'react'

export default function AdminDashboard() {
  const { sarees, categories, loading, refresh, getSubcategoryName } = useCatalog()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [deletingId, setDeletingId] = useState(null)

  async function handleLogout() {
    await logout()
    navigate('/admin/login')
  }

  async function handleDelete(saree) {
    if (!window.confirm(`Delete "${saree.name}"? This also deletes its photos. This can't be undone.`)) {
      return
    }
    setDeletingId(saree.id)

    // Delete the storage files first, then the DB row (image rows cascade-delete).
    const paths = (saree.saree_images || []).map((img) => img.storage_path)
    if (paths.length > 0) {
      await supabase.storage.from('saree-images').remove(paths)
    }
    const { error } = await supabase.from('sarees').delete().eq('id', saree.id)
    if (error) {
      alert('Could not delete: ' + error.message)
    } else {
      await refresh()
    }
    setDeletingId(null)
  }

  function categoryName(id) {
    return categories.find((c) => c.id === id)?.name || '—'
  }

  return (
    <div className="page container admin-dashboard">
      <style>{`
.admin-dashboard {
  padding-block: var(--space-5) var(--space-7);
}

.admin-dashboard__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.admin-dashboard__header h1 {
  font-size: clamp(1.5rem, 4vw, 2rem);
}

.admin-dashboard__actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.admin-table-wrap {
  overflow-x: auto;
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
}

.admin-table th,
.admin-table td {
  text-align: left;
  padding: var(--space-3);
  border-bottom: 1px solid var(--color-blush);
  font-size: 0.9rem;
}

.admin-table th {
  color: var(--color-charcoal-soft);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.admin-table__thumb {
  width: 48px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
  background: var(--color-blush);
}

.admin-table__actions {
  display: flex;
  gap: var(--space-2);
}

.admin-table__actions a,
.admin-table__actions button {
  font-size: 0.82rem;
  font-weight: 600;
}

.admin-table__actions button {
  background: none;
  border: none;
  color: var(--color-error);
}

.admin-empty {
  text-align: center;
  padding-block: var(--space-7);
  color: var(--color-charcoal-soft);
}
      `}</style>

      <div className="admin-dashboard__header">
        <h1>Manage Sarees</h1>
        <div className="admin-dashboard__actions">
          <Link to="/admin/categories" className="btn btn-outline">Manage Categories</Link>
          <Link to="/admin/sarees/new" className="btn btn-primary">+ Add Saree</Link>
          <button className="btn btn-outline" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : sarees.length === 0 ? (
        <div className="admin-empty">
          <p>No sarees yet. Click "Add Saree" to create your first one.</p>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Category</th>
                <th>Type</th>
                <th>Available</th>
                <th>Featured</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sarees.map((s) => (
                <tr key={s.id}>
                  <td>
                    {s.saree_images?.[0] ? (
                      <img className="admin-table__thumb" src={s.saree_images[0].image_url} alt="" />
                    ) : (
                      <div className="admin-table__thumb" />
                    )}
                  </td>
                  <td>{s.name}</td>
                  <td>{categoryName(s.category_id)}</td>
                  <td>{getSubcategoryName(s.category_id, s.subcategory_id)}</td>
                  <td>{s.available ? 'Yes' : 'No'}</td>
                  <td>{s.featured ? 'Yes' : 'No'}</td>
                  <td>
                    <div className="admin-table__actions">
                      <Link to={`/admin/sarees/${s.id}/edit`}>Edit</Link>
                      <button onClick={() => handleDelete(s)} disabled={deletingId === s.id}>
                        {deletingId === s.id ? 'Deleting…' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
