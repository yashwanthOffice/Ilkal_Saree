import { Link } from 'react-router-dom'
import { getProductImage } from '../utils/images'
import { getSubcategoryName } from '../data/products'

export default function ProductCard({ product }) {
  const image = getProductImage(product.folderName)

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <style>{`
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;
  z-index: 1;
}

.product-card:hover,
.product-card:focus-visible {
  box-shadow: var(--shadow-hover);
  z-index: 2;
  transform: translateY(-3px);
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--color-blush);
}

.product-card__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-3);
  color: var(--color-maroon-dark);
  font-size: 0.75rem;
  opacity: 0.6;
}

.product-card__body {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-card__subcategory {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-teal);
}

.product-card__name {
  font-size: 1.05rem;
  color: var(--color-charcoal);
  font-weight: 600;
}
      `}</style>

      <div className="product-card__image-wrap">
        {image ? (
          <img src={image} alt={product.name} loading="lazy" />
        ) : (
          <div className="product-card__placeholder">Photo coming soon</div>
        )}
      </div>
      <div className="product-card__body">
        <p className="product-card__subcategory">{getSubcategoryName(product.category, product.subcategory)}</p>
        <h3 className="product-card__name">{product.name}</h3>
      </div>
    </Link>
  )
}
