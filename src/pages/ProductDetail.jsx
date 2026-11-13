import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCatalog } from '../context/CatalogContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

const detailStyles = `
.breadcrumb {
  padding-block: var(--space-4) var(--space-2);
  font-size: 0.8rem;
  color: var(--color-charcoal-soft);
  text-transform: capitalize;
}

.breadcrumb a:hover {
  color: var(--color-maroon);
}

.product-detail__grid {
  display: grid;
  gap: var(--space-5);
  padding-block: var(--space-3) var(--space-7);
}

.product-detail__image img {
  width: 100%;
  border-radius: var(--radius-md);
  aspect-ratio: 3 / 4;
  object-fit: cover;
  box-shadow: var(--shadow-card);
}

.product-detail__image-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-md);
  background: var(--color-blush);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4);
  color: var(--color-maroon-dark);
  opacity: 0.6;
}

.product-detail__info h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-block: var(--space-2) var(--space-3);
}

.product-detail__desc {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-5);
  max-width: 60ch;
}

.product-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.product-detail__facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-size: 0.88rem;
  color: var(--color-charcoal-soft);
}

.product-detail__related {
  padding-block: var(--space-6) var(--space-7);
  border-top: 1px solid var(--color-blush);
}

.product-detail__related h2 {
  font-size: 1.6rem;
  margin-bottom: var(--space-4);
}

.product-detail__related .product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.empty-state {
  text-align: center;
  padding-block: var(--space-8);
}

.empty-state h2 {
  margin-bottom: var(--space-2);
}

.empty-state p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-4);
}

.product-detail__thumbs {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
  overflow-x: auto;
}

.product-detail__thumbs button {
  flex-shrink: 0;
  width: 64px;
  height: 80px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid transparent;
  padding: 0;
  background: var(--color-blush);
}

.product-detail__thumbs button.is-active {
  border-color: var(--color-maroon);
}

.product-detail__thumbs img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .product-detail__grid {
    grid-template-columns: 1fr 1fr;
  }
  .product-detail__related .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
`

export default function ProductDetail() {
  const { productId: slug } = useParams()
  const { getSareeBySlug, getSubcategoryName, sarees, categories, loading } = useCatalog()
  const [activeImage, setActiveImage] = useState(0)

  if (loading) {
    return (
      <div className="page container empty-state">
        <style>{detailStyles}</style>
        <h2>Loading…</h2>
      </div>
    )
  }

  const saree = getSareeBySlug(slug)

  if (!saree) {
    return (
      <div className="page container empty-state">
        <style>{detailStyles}</style>
        <h2>Saree not found</h2>
        <p>The link may be incorrect.</p>
        <Link to="/all-saree" className="btn btn-primary">Back to All Saree</Link>
      </div>
    )
  }

  const images = saree.saree_images || []
  const currentImage = images[activeImage]?.image_url
  const category = categories.find((c) => c.id === saree.category_id)
  const related = sarees
    .filter((s) => s.category_id === saree.category_id && s.id !== saree.id)
    .slice(0, 4)

  return (
    <div className="page container product-detail">
      <style>{detailStyles}</style>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link> /{' '}
        {category && <Link to={`/all-saree/${category.slug}`}>{category.name}</Link>} / {saree.name}
      </nav>

      <div className="product-detail__grid">
        <div className="product-detail__image">
          {currentImage ? (
            <img src={currentImage} alt={saree.name} />
          ) : (
            <div className="product-detail__image-placeholder">
              No photos uploaded yet — add some from the admin panel
            </div>
          )}
          {images.length > 1 && (
            <div className="product-detail__thumbs">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  className={i === activeImage ? 'is-active' : ''}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={img.image_url} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-detail__info">
          <p className="eyebrow">{getSubcategoryName(saree.category_id, saree.subcategory_id)}</p>
          <h1>{saree.name}</h1>
          <p className="product-detail__desc">{saree.description}</p>

          <div className="product-detail__actions">
            <a href="tel:+919000000000" className="btn btn-primary">Call to Enquire</a>
            <a href="mailto:culturetraditionalilkalsaree@gmail.com" className="btn btn-outline">Email Us</a>
          </div>

          <ul className="product-detail__facts">
            <li>✓ 100% authentic handloom, sourced directly from weavers</li>
            <li>✓ Contact us for availability, pricing and custom orders</li>
            <li>✓ Photos are representative — actual weave and colour may vary slightly</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="product-detail__related">
          <h2>You may also like</h2>
          <div className="product-grid">
            {related.map((s) => (
              <ProductCard key={s.id} saree={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
