import { useEffect, useState } from 'react'
import { getCarouselImage, carouselImages, CAROUSEL_SHOW_FULL_IMAGE } from '../utils/images'

export default function Carousel({ slides }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="carousel" role="region" aria-label="Featured sarees">
      <style>{`
.carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  max-height: 640px;
  overflow: hidden;
  background: var(--color-maroon-dark);
}

.carousel__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel__slide--active {
  opacity: 1;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__slide img.carousel__slide-img--contain {
  object-fit: contain;
  background: var(--color-maroon-dark);
}

.carousel__slide-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
  color: var(--color-blush);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.1rem;
  opacity: 0.6;
  text-align: center;
  padding: var(--space-4);
}

.carousel__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 8, 6, 0.75) 0%, rgba(20, 8, 6, 0) 45%);
}

.carousel__caption {
  position: absolute;
  right: var(--space-3);
  bottom: var(--space-4);
  text-align: right;
  max-width: 80%;
}

.carousel__caption h2 {
  color: var(--color-white);
  font-size: clamp(1.3rem, 5vw, 2.4rem);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.carousel__dots {
  position: absolute;
  left: 50%;
  bottom: var(--space-3);
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0;
}

.carousel__dot--active {
  background: var(--color-gold);
  width: 22px;
}

@media (min-width: 768px) {
  .carousel {
    aspect-ratio: 21 / 9;
  }
  .carousel__caption {
    right: var(--space-6);
    bottom: var(--space-6);
  }
}
      `}</style>

      {slides.map((slide, i) => (
        <div key={i} className={`carousel__slide ${i === active ? 'carousel__slide--active' : ''}`}>
          {slide.image ? (
            <img
              src={slide.image}
              alt={slide.title}
              className={CAROUSEL_SHOW_FULL_IMAGE ? 'carousel__slide-img--contain' : ''}
            />
          ) : (
            <div className="carousel__slide-placeholder">
              Add images to src/assets/carousel/ to replace this placeholder
            </div>
          )}
          <div className="carousel__scrim" />
          <div className="carousel__caption">
            <h2>{slide.title}</h2>
          </div>
        </div>
      ))}

      <div className="carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === active ? 'carousel__dot--active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}

// Builds 5 slides by pairing captions with whatever carousel images exist.
export function buildCarouselSlides(captions) {
  return captions.map((title, i) => ({
    title,
    image: carouselImages.length > 0 ? getCarouselImage(i) : null,
  }))
}
