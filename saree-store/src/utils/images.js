// The saree catalog images now come from Supabase Storage (see CatalogContext).
// This file only still handles the homepage carousel, which stays local since
// it's decorative banner imagery, not catalog data — drop files into
// src/assets/carousel/ and they show up automatically.

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
