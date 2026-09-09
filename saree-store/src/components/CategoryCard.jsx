import { Link } from 'react-router-dom'
import { getCategoryPreviewImage } from '../utils/images'

export default function CategoryCard({ category }) {
  const image = getCategoryPreviewImage(category.name)

  return (
    <Link to={`/all-saree/${category.id}`} className="category-card">
      <style>{`
.category-card {
  position: relative;
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  isolation: isolate;
  background: var(--color-blush);
  z-index: 1;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.category-card:hover img,
.category-card:focus-visible img {
  transform: scale(1.06);
}

/* Empty-state: a single self-contained box, not layered under anything else. */
.category-card__empty {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  padding: var(--space-3);
}

.category-card__empty h3 {
  color: var(--color-maroon-dark);
  font-size: 1.2rem;
}

.category-card__empty p {
  font-size: 0.78rem;
  color: var(--color-charcoal-soft);
  max-width: 22ch;
}

.category-card__empty small {
  font-size: 0.68rem;
  color: var(--color-charcoal-soft);
  opacity: 0.7;
  margin-top: var(--space-2);
}

/* Image-state: gradient + text overlaid on the photo. Only ever rendered
   together with the <img>, never with the empty-state block above, so
   there is nothing for it to visually collide with. */
.category-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-3);
  background: linear-gradient(to top, rgba(42, 21, 15, 0.85) 0%, rgba(42, 21, 15, 0) 60%);
  color: var(--color-white);
}

.category-card__overlay h3 {
  color: var(--color-white);
  font-size: 1.3rem;
}

.category-card__overlay p {
  font-size: 0.82rem;
  opacity: 0.9;
  margin-top: 2px;
}
`}</style>

      {image ? (
        <>
          <img src={image} alt={category.name} loading="lazy" />
          <div className="category-card__overlay">
            <h3>{category.name}</h3>
            <p>{category.tagline}</p>
          </div>
        </>
      ) : (
        <div className="category-card__empty">
          <h3>{category.name}</h3>
          <p>{category.tagline}</p>
          <small>Add images to any "{category.name} - ..." folder in src/assets/products/</small>
        </div>
      )}
    </Link>
  )
}
