// Automatically loads whatever images exist in each asset folder — drop files in,
// no code changes needed. One glob covers every product folder at once (Vite
// allows wildcard segments in the literal glob pattern, just not variables),
// then we group images by their parent folder name (e.g. "Ilkal Saree - Silk by Silk").

const allProductImageEntries = Object.entries(
  import.meta.glob('../assets/products/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    import: 'default',
  })
).sort(([a], [b]) => a.localeCompare(b))

// productImageMap: { "Ilkal Saree - Silk by Silk": [url1, url2, ...], ... }
const productImageMap = {}
for (const [path, url] of allProductImageEntries) {
  const match = path.match(/products\/([^/]+)\//)
  if (!match) continue
  const folderName = match[1]
  if (!productImageMap[folderName]) productImageMap[folderName] = []
  productImageMap[folderName].push(url)
}

// Returns an image for a specific product folder (cycles if more than one
// image is present). Returns null if that folder is empty — callers should
// render a placeholder in that case.
export function getProductImage(folderName, index = 0) {
  const images = productImageMap[folderName] || []
  if (images.length === 0) return null
  return images[index % images.length]
}

// For category-level previews (e.g. the homepage CategoryCard) — uses the
// first available image from any product folder that starts with this
// category's name (e.g. "Ilkal Saree - ...").
export function getCategoryPreviewImage(categoryName) {
  const prefix = `${categoryName} - `
  for (const folderName of Object.keys(productImageMap).sort()) {
    if (folderName.startsWith(prefix) && productImageMap[folderName].length > 0) {
      return productImageMap[folderName][0]
    }
  }
  return null
}

// ---- Homepage carousel ----
export const carouselImages = Object.entries(
  import.meta.glob('../assets/carousel/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

export function getCarouselImage(index) {
  if (carouselImages.length === 0) return null
  return carouselImages[index % carouselImages.length]
}

// Carousel image fit — see components/Carousel.jsx for how this is used.
// true  = show the whole image, uncropped ("contain"); empty space around it
//         fills with the carousel's background color. Use this if your
//         carousel photos are different sizes/aspect ratios.
// false = fill the whole slide, cropping the image if needed ("cover") —
//         the original behavior. Use this once your photos are all a
//         consistent wide aspect ratio and cropping is fine.
export const CAROUSEL_SHOW_FULL_IMAGE = true
