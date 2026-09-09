import { createContext, useContext } from 'react'
import { products, categories, getProductById, getCategoryById, getSubcategoryName } from '../data/products'

const CatalogContext = createContext(null)

export function CatalogProvider({ children }) {
  const value = { products, categories, getProductById, getCategoryById, getSubcategoryName }
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
}

export function useCatalog() {
  const ctx = useContext(CatalogContext)
  if (!ctx) throw new Error('useCatalog must be used within a CatalogProvider')
  return ctx
}
