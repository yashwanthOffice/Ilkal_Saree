const borders = [
  { name: 'Gomi (Ilkal Dadi)', desc: 'Angle-bracket shapes set between broad stripes — the most recognisable Ilkal border.' },
  { name: 'Chikki Paras', desc: 'A row of small triangles arranged between wide bands of colour.' },
  { name: 'Zari / Jari', desc: 'Fine embroidery worked in gold or silver-toned thread along the edge.' },
  { name: 'Gayathri', desc: 'A newer border style, 2.5–4 inches wide, added to the traditional set.' },
]

const facts = [
  { label: 'Origin', value: 'Ilkal town, Bagalkot district, Karnataka' },
  { label: 'Tradition dates to', value: '~8th century AD' },
  { label: 'GI Tag', value: 'Granted in 2006' },
  { label: 'Typical weave time', value: '5–10 days per saree, handloom' },
  { label: 'Common lengths', value: '6, 8 and 9 yards' },
  { label: 'Yarn combinations', value: 'Cotton body with silk or art-silk pallu and border' },
]

export default function IlkalInfo() {
  return (
    <section id="ilkal-info" className="ilkal-info">
      <style>{`
.ilkal-info {
  padding-block: var(--space-7);
  scroll-margin-top: calc(var(--header-height) + var(--space-3));
}

.ilkal-info__intro {
  text-align: center;
  max-width: 68ch;
  margin-inline: auto;
  margin-bottom: var(--space-6);
}

.ilkal-info__intro h2 {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  margin-block: var(--space-2) var(--space-3);
}

.ilkal-info__intro p {
  color: var(--color-charcoal-soft);
  font-size: 1.02rem;
}

.ilkal-technique__grid {
  display: grid;
  gap: var(--space-5);
  margin-bottom: var(--space-7);
}

.ilkal-technique h3 {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  margin-bottom: var(--space-3);
}

.ilkal-technique p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 62ch;
}

.ilkal-facts {
  background: var(--color-blush);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  align-self: start;
}

.ilkal-facts h4 {
  font-size: 1.05rem;
  margin-bottom: var(--space-3);
  color: var(--color-maroon-dark);
}

.ilkal-facts__row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  padding-block: var(--space-2);
  border-bottom: 1px solid rgba(110, 20, 35, 0.12);
  font-size: 0.85rem;
}

.ilkal-facts__row dt {
  color: var(--color-charcoal-soft);
  font-weight: 600;
}

.ilkal-facts__row dd {
  margin: 0;
  text-align: right;
  font-weight: 600;
  color: var(--color-maroon-dark);
}

.ilkal-borders__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-7);
}

.border-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
}

.border-card h4 {
  font-size: 1rem;
  color: var(--color-maroon);
  margin-bottom: var(--space-2);
}

.border-card p {
  font-size: 0.88rem;
  color: var(--color-charcoal-soft);
}

.ilkal-colour__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.ilkal-colour h3 {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  margin-block: var(--space-2) var(--space-3);
}

.ilkal-colour p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 60ch;
}

.ilkal-colour__swatches {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 1;
}

.ilkal-colour__swatches span {
  display: block;
  height: 100%;
}

.ilkal-info__sources {
  font-size: 0.75rem;
  color: var(--color-charcoal-soft);
  text-align: center;
  padding-top: var(--space-6);
}

@media (min-width: 768px) {
  .ilkal-technique__grid {
    grid-template-columns: 1.5fr 1fr;
  }

  .ilkal-borders__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .ilkal-colour__grid {
    grid-template-columns: 1fr 1.2fr;
  }
}
      `}</style>

      <div className="container">
        <div className="ilkal-info__intro">
          <p className="eyebrow">Heritage &amp; Craft</p>
          <h2>The Ilkal Saree</h2>
          <p>
            A handloom tradition from the town of Ilkal in Karnataka's Bagalkot district, known
            for a joinery technique found nowhere else in Indian weaving — and for borders bold
            enough to be recognised at a glance.
          </p>
        </div>

        <div className="ilkal-technique__grid">
          <div className="ilkal-technique">
            <h3>The Tope Teni technique</h3>
            <p>
              In almost every other Indian saree, the body and the pallu are woven as one
              continuous piece of fabric. An Ilkal saree is woven differently: the body, the
              border and the pallu are each woven separately, then joined by hand using a series
              of small interlocking loops — a method called Tope Teni, or the looping technique.
            </p>
            <p>
              The join is done on a traditional pit loom (locally called a "kuni magga"), using
              three shuttles and two contrasting yarn colours. The result is a saree with a
              distinct, almost temple-shaped structure where the pallu meets the body — the
              exact motif this site borrows for its own dividing lines.
            </p>
          </div>
          <div className="ilkal-facts">
            <h4>Quick Facts</h4>
            <dl>
              {facts.map((f) => (
                <div key={f.label} className="ilkal-facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="section__heading">
          <p className="eyebrow">Reading The Fabric</p>
          <h3 style={{ marginTop: '8px' }}>Four traditional border styles</h3>
        </div>
        <div className="ilkal-borders__grid">
          {borders.map((b) => (
            <div key={b.name} className="border-card">
              <h4>{b.name}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="ilkal-colour__grid">
          <div className="ilkal-colour__swatches" aria-hidden="true">
            <span style={{ background: '#6e1423' }} />
            <span style={{ background: '#c9a227' }} />
            <span style={{ background: '#0f4c46' }} />
            <span style={{ background: '#f3e4e1' }} />
          </div>
          <div className="ilkal-colour">
            <p className="eyebrow">Colour &amp; Pattern</p>
            <h3>Deep reds, bold contrast, agricultural motifs</h3>
            <p>
              Ilkal pallus are traditionally built from bold red and white bands in simple,
              striking geometric patterns. The best-known pattern is called Tope Teni, said to
              echo the look of a jowar (sorghum) crop. Some sarees add Kasuti embroidery, a folk
              needlework style from Karnataka, worked into motifs like temple chariots, elephants
              and lotus flowers.
            </p>
            <p>
              Historically, an Ilkal saree marked more than an occasion — it was considered a
              sign of a woman's standing and inner strength, and it's still worn today for
              weddings, festivals and temple ceremonies across North Karnataka.
            </p>
          </div>
        </div>

        <p className="ilkal-info__sources">
          Sources: Incredible India (Ministry of Tourism), Wikipedia — Ilkal sari, and
          independent heritage and craft publications on Ilkal weaving.
        </p>
      </div>
    </section>
  )
}
