import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Carousel, { buildCarouselSlides } from '../components/Carousel.jsx'
import IlkalInfo from '../components/IlkalInfo.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import { useCatalog } from '../context/CatalogContext.jsx'

const carouselCaptions = [
  'Culture Traditional Ilkal Saree',
  'Handwoven Ilkal Sarees',
  'Traditional Khand Weaves',
  'Duppatas & Stoles',
  'Crafted by Karnataka Weavers',
]

export default function Home() {
  const { categories } = useCatalog()
  const location = useLocation()

  // Support linking to #ilkal-info from other pages (e.g. footer link).
  useEffect(() => {
    if (location.hash === '#ilkal-info') {
      const el = document.getElementById('ilkal-info')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const slides = buildCarouselSlides(carouselCaptions)

  return (
    <div className="page">
      <style>{`
.section {
  padding-block: var(--space-7);
}

.section--tint {
  background: var(--color-blush);
}

.section__heading {
  margin-bottom: var(--space-5);
  text-align: center;
}

.section__heading h2 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-top: var(--space-1);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.home-contact {
  background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-4);
  text-align: center;
}

.home-contact h2 {
  color: var(--color-white);
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.home-contact p {
  color: var(--color-blush);
  max-width: 60ch;
  margin-inline: auto;
  margin-bottom: var(--space-4);
}

.home-contact__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.home-contact .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.home-contact .btn-outline:hover {
  background: var(--color-white);
  color: var(--color-maroon);
}

@media (min-width: 640px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
      `}</style>

      <Carousel slides={slides} />

      <IlkalInfo />

      <div className="temple-border" />

      <section className="section container">
        <div className="section__heading">
          <p className="eyebrow">Browse</p>
          <h2>Shop by Category</h2>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <section className="section section--tint container">
        <div className="home-contact">
          <p className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Get In Touch</p>
          <h2>Visit, call or message us</h2>
          <p>
            Reach out on Facebook, Instagram, phone or email — or find us on the map. We'll be
            adding online ordering soon; for now, get in touch directly for enquiries.
          </p>
          <div className="home-contact__row">
            <Link to="/all-saree" className="btn btn-gold">Browse All Saree</Link>
            <Link to="/about" className="btn btn-outline">About Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
