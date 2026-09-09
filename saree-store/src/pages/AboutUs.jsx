import weaverLoom from '../assets/about/weaver-loom.jpeg'
import familyOutside from '../assets/about/family-outside-shop.jpeg'
import familyWorkshop1 from '../assets/about/family-inside-workshop-1.jpeg'
import familyWorkshop2 from '../assets/about/family-inside-workshop-2.jpeg'
import kumaraswamyVisit from '../assets/about/kumaraswamy-visit.jpeg'
import skvLogo from '../assets/about/skv/skv-logo.png'
import skvWeaversWithFabric from '../assets/about/skv/project-weavers-with-fabric.jpeg'
import skvLoomTraining from '../assets/about/skv/project-loom-training.png'
import { Link } from 'react-router-dom'

const beliefs = [
  { title: 'Authenticity', desc: 'Bringing genuine, traditionally woven Ilkal sarees to our customers.' },
  { title: 'Quality', desc: 'Choosing sarees with care — attention to fabric, weaving, colour and finishing.' },
  { title: 'Tradition', desc: 'Respecting the heritage and craftsmanship behind every saree.' },
  { title: 'Trust', desc: 'Building long-lasting relationships with our customers through honest service.' },
  { title: 'Supporting Handloom', desc: 'Helping preserve handloom weaving skills by promoting traditional sarees.' },
]

export default function AboutUs() {
  return (
    <div className="page about">
      <style>{`
.about-hero {
  background: linear-gradient(160deg, var(--color-blush) 0%, var(--color-ivory) 55%);
  padding-block: var(--space-6) var(--space-5);
}

.about-hero__grid {
  display: grid;
  gap: var(--space-5);
}

.about-hero h1 {
  font-size: clamp(1.9rem, 5vw, 3rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-hero__lede {
  color: var(--color-charcoal-soft);
  max-width: 60ch;
  font-size: 1.05rem;
}

.about-hero__image img {
  width: 100%;
  border-radius: var(--radius-md);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  box-shadow: var(--shadow-hover);
}

.about-founder__grid,
.about-family__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.about-founder {
  padding-block: var(--space-7);
}

.about-founder h2,
.about-family h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-founder p,
.about-family p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 60ch;
}

.about-founder__images img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-family {
  background: var(--color-blush);
  padding-block: var(--space-7);
}

.about-family__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.about-family__images img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.about-beliefs {
  padding-block: var(--space-7);
}

.about-beliefs__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.belief-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
  border-top: 3px solid var(--color-gold);
}

.belief-card h3 {
  color: var(--color-maroon);
  font-size: 1.15rem;
  margin-bottom: var(--space-2);
}

.belief-card p {
  color: var(--color-charcoal-soft);
  font-size: 0.92rem;
}

.about-vision {
  background: var(--color-maroon-dark);
  color: var(--color-blush);
  padding-block: var(--space-7);
  text-align: center;
}

.about-vision__inner {
  max-width: 720px;
}

.about-vision h2 {
  color: var(--color-white);
  font-size: clamp(1.5rem, 3.6vw, 2.2rem);
  margin-block: var(--space-2) var(--space-4);
}

.about-vision__signature {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--color-gold-light);
  line-height: 1.6;
  margin-bottom: var(--space-5);
}

.about-vision__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.btn-outline--light {
  border-color: var(--color-blush);
  color: var(--color-blush);
}

.btn-outline--light:hover {
  background: var(--color-blush);
  color: var(--color-maroon-dark);
}

.about-skv {
  padding-block: var(--space-7);
}

.about-skv__intro {
  text-align: center;
  max-width: 68ch;
  margin-inline: auto;
  margin-bottom: var(--space-5);
}

.about-skv__logo {
  width: 100px;
  margin-inline: auto;
  margin-bottom: var(--space-3);
}

.about-skv__intro h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-1) var(--space-3);
}

.about-skv__intro p,
.about-skv__body p {
  color: var(--color-charcoal-soft);
}

.about-skv__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.about-skv__grid img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-skv__body {
  max-width: 68ch;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.about-moment {
  background: var(--color-blush);
  padding-block: var(--space-7);
}

.about-moment__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.about-moment__grid img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-moment h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-moment p {
  color: var(--color-charcoal-soft);
  max-width: 55ch;
}

@media (min-width: 768px) {
  .about-hero__grid {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }

  .about-founder__grid {
    grid-template-columns: 1fr 1.1fr;
  }

  .about-family__grid {
    grid-template-columns: 1fr 1.1fr;
  }

  .about-beliefs__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-moment__grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

@media (min-width: 1024px) {
  .about-beliefs__grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
`}</style>
      
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div>
            <p className="eyebrow">Our Story</p>
            <h1>Woven with tradition. Made with love.</h1>
            <p className="about-hero__lede">
              Welcome to Culture Traditional Ilkal Saree — a place where tradition,
              craftsmanship and the beauty of Indian handloom come together. Our journey began
              with a simple dream: to bring the timeless beauty of authentic Ilkal sarees to
              every woman who loves and respects our traditional culture.
            </p>
            <p className="about-hero__lede">
              Ilkal sarees are more than just beautiful garments. They carry the skill,
              dedication and heritage of generations of handloom weavers — every saree tells a
              story through its colours, patterns, traditional borders and distinctive Tope
              Teni weaving technique. Wearing an Ilkal saree isn't simply wearing a piece of
              clothing — it's carrying a part of our culture and heritage with you.
            </p>
          </div>
          <div className="about-hero__image">
            <img src={weaverLoom} alt="Dashartha R. Hoti weaving at a traditional pit loom" />
          </div>
        </div>
      </section>

      <div className="temple-border" />

      <section className="section container about-founder">
        <div className="about-founder__grid">
          <div className="about-founder__images">
            <img src={familyWorkshop1} alt="The Hoti family and weaving team seated together in the workshop" />
          </div>
          <div>
            <p className="eyebrow">30+ Years of Handloom Tradition</p>
            <h2>The story of Dashartha R. Hoti</h2>
            <p>
              Culture Traditional Ilkal Saree is more than a saree business — it is the journey of
              Dashartha R. Hoti, a passionate handloom weaver with more than 30 years of
              experience. For over three decades he has worked at the loom with patience, skill
              and love for the craft, learning that a saree isn't simply made with yarn and
              colour — it's made with time, patience, craftsmanship and tradition.
            </p>
            <p>
              Today he continues to weave traditional Ilkal sarees while also creating new
              designs inspired by the heritage of our culture — bringing handwoven sarees
              directly to people who appreciate authentic craftsmanship and timeless Indian
              tradition. Behind every saree is the hand of a weaver, and behind those hands,
              30+ years of experience and a deep respect for our traditional craft.
            </p>
            <p>
              Every saree we select is chosen with care, because we know you're not just buying
              a saree — you're choosing something for a festival, a family celebration, or a
              memory you'll keep. Our promise is to offer sarees that make you feel connected to
              tradition, confident in your style, and proud of our culture.
            </p>
          </div>
        </div>
      </section>

      <section className="about-family">
        <div className="container about-family__grid">
          <div className="about-family__images">
            <img src={familyOutside} alt="The Hoti weaving family and community outside their workshop in Kamatagi" />
            <img src={familyWorkshop2} alt="Family members and weavers gathered inside the workshop" />
          </div>
          <div className="about-family__copy">
            <p className="eyebrow">A Family Tradition, Woven by Hand</p>
            <h2>More than 15 hands keep this craft alive</h2>
            <p>
              Our journey isn't just about sarees — it's about family, tradition, hard work and
              the art of handloom weaving. For generations our family has been connected to
              traditional Ilkal weaving, and today more than 15 skilled members of our family and
              weaving community work together, carrying the craft forward with dedication and
              pride.
            </p>
            <p>
              Our master weavers carefully select the yarn, prepare the loom, and weave each
              saree with patience and attention to detail. Every saree takes time, skill and
              countless hours of handwork — because behind every saree is the hand of a weaver,
              and behind those hands, 30+ years of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section container about-beliefs">
        <div className="section__heading">
          <p className="eyebrow">What We Believe</p>
          <h2>The values behind every saree</h2>
        </div>
        <div className="about-beliefs__grid">
          {beliefs.map((b) => (
            <div key={b.title} className="belief-card">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container about-skv">
        <div className="about-skv__intro">
          <img src={skvLogo} alt="Somaiya Kala Vidya" className="about-skv__logo" />
          <p className="eyebrow">In Partnership With</p>
          <h2>Somaiya Kala Vidya</h2>
          <p>
            Special thanks to Somaiya Kala Vidya for its invaluable support and guidance. Their
            "Bhujodi to Bagalkote" initiative brought an Artisan-to-Artisan design exchange to
            our village of Kamatagi — connecting our weavers with the artisan community of
            Bhujodi, Gujarat, to help traditional Ilkal weavers design for new markets while
            staying true to their craft.
          </p>
        </div>

        <div className="about-skv__grid">
          <img src={skvWeaversWithFabric} alt="Weavers from the Bhujodi to Bagalkote exchange holding handwoven fabric" />
          <img src={skvLoomTraining} alt="Weavers and trainers working together at a traditional loom" />
        </div>

        <div className="about-skv__body">
          <p>
            What began as a design exchange grew into something bigger. After years of continued
            engagement with weavers around Kamatagi, the community came together to request an
            independent design school for the artisans of North Karnataka. With support from the
            K J Somaiya Trust and Rohini Nilekani Philanthropies, Somaiya Kala Vidya – Bagalkote
            was born, welcoming its first class of students in March 2024.
          </p>
          <p>
            Somaiya Kala Vidya's goal is to help artisans build on their own traditional
            knowledge and increase the value of their craft — without necessarily increasing the
            cost of time or materials — so that Ilkal weaving remains a sustainable, respected
            livelihood for the next generation.
          </p>
        </div>
      </section>

      <section className="about-moment">
        <div className="container about-moment__grid">
          <img src={kumaraswamyVisit} alt="Dashartha R. Hoti present during a visit to a Guledagudda handloom store" />
          <div>
            <p className="eyebrow">A Special Memory</p>
            <h2>A proud moment for our family</h2>
            <p>
              During a visit to the Hanamant Mavinmarada Handloom Store in Guledagudda, my
              father, Shri Dashartha R. Hoti, was present and had the chance to be personally
              acknowledged during the visit. It was a truly proud and memorable moment for our
              family — one we'll always carry with us.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container about-vision__inner">
          <p className="eyebrow">Our Vision</p>
          <h2>
            To preserve our traditional Ilkal handloom heritage while creating beautiful new
            designs for today's generation.
          </h2>
          <p className="about-vision__signature">
            Our father's 30+ years of experience is our foundation.
            <br />
            Our creativity is our future.
            <br />
            And tradition will always be at the heart of our sarees.
          </p>
          <div className="about-vision__actions">
            <Link to="/all-saree" className="btn btn-gold">Shop Our Collection</Link>
            <Link to="/#ilkal-info" className="btn btn-outline btn-outline--light">Learn About Ilkal Sarees</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
