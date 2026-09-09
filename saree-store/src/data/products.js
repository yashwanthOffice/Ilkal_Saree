// Mock catalog data — view-only, no prices/stock. Replace with real API calls
// once a backend/database exists. Images are pulled automatically from
// src/assets/products/<Category - Subcategory>/ — see getProductImage in
// utils/images.js.

export const subcategoryTemplate = [
  { id: 'silk-by-silk', name: 'Silk by Silk' },
  { id: 'cotton-by-cotton', name: 'Cotton by Cotton' },
  { id: 'border-silk-by-cotton', name: 'Border Silk by Cotton' },
  { id: 'pallu-silk-body-cotton', name: 'Pallu Silk Body Cotton' },
  { id: 'border-silk-pallu-silk-body-cotton', name: 'Border Silk Pallu Silk Body Cotton' },
]

export const categories = [
  {
    id: 'ilkal-saree',
    name: 'Ilkal Saree',
    tagline: 'Traditional Tope Teni handloom sarees from Karnataka',
    subcategories: subcategoryTemplate,
  },
  {
    id: 'khand-saree',
    name: 'Khand Saree',
    tagline: 'Classic khand weave sarees, handcrafted on the loom',
    subcategories: subcategoryTemplate,
  },
  {
    id: 'duppata',
    name: 'Duppata',
    tagline: 'Handwoven duppatas in silk and cotton blends',
    subcategories: subcategoryTemplate,
  },
  {
    id: 'stoles',
    name: 'Stoles',
    tagline: 'Lightweight handloom stoles for everyday and festive wear',
    subcategories: subcategoryTemplate,
  },
]

// One placeholder product per subcategory per category (random sample data —
// replace freely; this is just so every page has something to display).
// folderName matches the asset folder: src/assets/products/<folderName>/
function buildProducts() {
  const items = []
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      const folderName = `${cat.name} - ${sub.name}`
      items.push({
        id: `${cat.id}-${sub.id}`,
        name: `${cat.name} — ${sub.name}`,
        category: cat.id,
        subcategory: sub.id,
        folderName,
        description: `A handwoven ${cat.name.toLowerCase()} in the "${sub.name}" style — sample placeholder description, update with real product details later.`,
      })
    }
  }
  return items
}

export const products = buildProducts()

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id)
}

export function getSubcategoryName(categoryId, subcategoryId) {
  const cat = getCategoryById(categoryId)
  return cat?.subcategories.find((s) => s.id === subcategoryId)?.name || subcategoryId
}
