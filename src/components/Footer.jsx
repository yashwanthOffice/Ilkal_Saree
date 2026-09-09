import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'

// Placeholder contact details — update with the real ones any time.
const CONTACT = {
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  email: 'culturetraditionalilkalsaree@gmail.com',
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  mapsUrl: 'https://maps.google.com/?q=Ilkal,Karnataka',
  address: 'Kamatagi, Near Hosapeti Oni, Bagalkot District, Karnataka',
}

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
.footer {
  background: var(--color-maroon-dark);
  color: var(--color-blush);
  margin-top: var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  padding-block: var(--space-6);
}

.footer__brand h3 {
  color: var(--color-gold-light);
  font-size: 1.4rem;
  line-height: 1.3;
  margin-bottom: var(--space-2);
}

.footer__logo {
  height: 88px;
  width: auto;
  margin-bottom: var(--space-3);
}

.footer__brand p {
  max-width: 32ch;
  color: var(--color-blush);
  opacity: 0.85;
  font-size: 0.9rem;
}

.footer__col h4 {
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.footer__col ul li {
  margin-bottom: var(--space-2);
}

.footer__col ul li a {
  font-size: 0.9rem;
  opacity: 0.85;
}

.footer__col ul li a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.9rem;
  opacity: 0.92;
}

.footer__contact-item:hover {
  opacity: 1;
}

.footer__contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 1rem;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-block: var(--space-3);
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (min-width: 640px) {
  .footer__grid {
    grid-template-columns: 1.3fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
  }
}
      `}</style>

      <div className="temple-border" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Culture — rooted in culture, woven with grace" className="footer__logo" />
          <p>Handwoven Ilkal sarees, khand sarees, duppatas and stoles, sourced directly from weaver families in Karnataka.</p>
        </div>

        <div className="footer__col">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/all-saree/ilkal-saree">Ilkal Saree</Link></li>
            <li><Link to="/all-saree/khand-saree">Khand Saree</Link></li>
            <li><Link to="/all-saree/duppata">Duppata</Link></li>
            <li><Link to="/all-saree/stoles">Stoles</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-saree">All Saree</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#ilkal-info">The Ilkal Saree Story</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get In Touch</h4>
          <div className="footer__contact-list">
            <a className="footer__contact-item" href={CONTACT.phoneHref}>
              <span className="footer__contact-icon" aria-hidden>📞</span>
              {CONTACT.phone}
            </a>
            <a className="footer__contact-item" href={`mailto:${CONTACT.email}`}>
              <span className="footer__contact-icon" aria-hidden>✉️</span>
              {CONTACT.email}
            </a>
            <a className="footer__contact-item" href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
              <span className="footer__contact-icon" aria-hidden>📍</span>
              {CONTACT.address}
            </a>
            <a className="footer__contact-item" href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
              <span className="footer__contact-icon" aria-hidden>f</span>
              Facebook
            </a>
            <a className="footer__contact-item" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
              <span className="footer__contact-icon" aria-hidden>📷</span>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Culture Traditional Ilkal Saree. All rights reserved.</p>
      </div>
    </footer>
  )
}
