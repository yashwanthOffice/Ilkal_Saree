import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabaseClient'

const CatalogContext = createContext(null)

export function CatalogProvider({ children }) {
  const [categories, setCategories] = useState([])
  const [sarees, setSarees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)

    const [{ data: cats, error: catErr }, { data: subs, error: subErr }] = await Promise.all([
      supabase.from('categories').select('*').order('name'),
      supabase.from('subcategories').select('*').order('name'),
    ])

    const { data: sareesData, error: sareeErr } = await supabase
      .from('sarees')
      .select('*, saree_images(*)')
      .order('created_at', { ascending: false })

    if (catErr || subErr || sareeErr) {
      setError(catErr || subErr || sareeErr)
      setLoading(false)
      return
    }

    const categoriesWithSubs = (cats || []).map((c) => ({
      ...c,
      subcategories: (subs || []).filter((s) => s.category_id === c.id),
    }))

    const sareesSorted = (sareesData || []).map((s) => ({
      ...s,
      saree_images: [...(s.saree_images || [])].sort((a, b) => a.display_order - b.display_order),
    }))

    setCategories(categoriesWithSubs)
    setSarees(sareesSorted)
    setLoading(false)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  function getCategoryBySlug(slug) {
    return categories.find((c) => c.slug === slug)
  }

  function getSubcategoryName(categoryId, subcategoryId) {
    const cat = categories.find((c) => c.id === categoryId)
    return cat?.subcategories.find((s) => s.id === subcategoryId)?.name || ''
  }

  function getSareeBySlug(slug) {
    return sarees.find((s) => s.slug === slug)
  }

  function getSareeImage(saree, index = 0) {
    const images = saree?.saree_images || []
    if (images.length === 0) return null
    return images[index % images.length].image_url
  }

  function getCategoryPreviewImage(categoryId) {
    const sareeWithImage = sarees.find(
      (s) => s.category_id === categoryId && (s.saree_images || []).length > 0
    )
    return sareeWithImage ? getSareeImage(sareeWithImage) : null
  }

  const value = {
    categories,
    sarees,
    loading,
    error,
    refresh,
    getCategoryBySlug,
    getSubcategoryName,
    getSareeBySlug,
    getSareeImage,
    getCategoryPreviewImage,
  }

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
}

export function useCatalog() {
  const ctx = useContext(CatalogContext)
  if (!ctx) throw new Error('useCatalog must be used within a CatalogProvider')
  return ctx
}
