import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu whenever the viewport grows past the breakpoint,
  // so a resize (e.g. rotating a tablet) never leaves it stuck open.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="navbar">
      <style>{`
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-ivory);
  box-shadow: var(--shadow-card);
}

.navbar__row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-block: var(--space-2);
  min-height: var(--header-height);
}

.navbar__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__logo img {
  height: 52px;
  width: auto;
  display: block;
}

.navbar__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  flex-shrink: 0;
}

.navbar__burger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--color-charcoal);
  border-radius: 2px;
}

/* Desktop inline menu — hidden on mobile */
.navbar__desktop-menu {
  display: none;
}

/* Mobile dropdown menu — full width, collapses below the row */
.navbar__mobile-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease;
  background: var(--color-white);
}

.navbar__mobile-menu--open {
  max-height: 320px;
}

.navbar__menu-list {
  display: flex;
  flex-direction: column;
  padding-block: var(--space-2);
}

.navbar__menu-list li a {
  display: block;
  padding: var(--space-3);
  font-weight: 500;
  border-bottom: 1px solid var(--color-blush);
}

.navbar__menu-list li a.active {
  color: var(--color-maroon);
  font-weight: 700;
}

/* ===== Tablet / Desktop ===== */
@media (min-width: 900px) {
  .navbar__burger {
    display: none;
  }

  .navbar__mobile-menu {
    display: none;
  }

  .navbar__logo img {
    height: 64px;
    margin-right: var(--space-5);
  }

  .navbar__row {
    flex-wrap: nowrap;
  }

  .navbar__desktop-menu {
    display: block;
    margin-left: auto;
  }

  .navbar__desktop-menu .navbar__menu-list {
    flex-direction: row;
    gap: var(--space-6);
    padding-block: 0;
  }

  .navbar__desktop-menu .navbar__menu-list li a {
    padding: var(--space-2) 0;
    border-bottom: 2px solid transparent;
  }

  .navbar__desktop-menu .navbar__menu-list li a.active,
  .navbar__desktop-menu .navbar__menu-list li a:hover {
    color: var(--color-maroon);
    border-bottom-color: var(--color-gold);
  }
}
      `}</style>

      <div className="navbar__row container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Culture — rooted in culture, woven with grace" />
        </Link>

        <button
          className="navbar__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="navbar__desktop-menu" aria-label="Primary">
          <ul className="navbar__menu-list">
            <li>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-saree" end onClick={() => setMenuOpen(false)}>
                All Saree
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-saree/duppata" onClick={() => setMenuOpen(false)}>
                Duppata
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-saree/stoles" onClick={() => setMenuOpen(false)}>
                Stoles
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`} aria-label="Primary mobile">
        <ul className="navbar__menu-list container">
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-saree" end onClick={() => setMenuOpen(false)}>
              All Saree
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-saree/duppata" onClick={() => setMenuOpen(false)}>
              Duppata
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-saree/stoles" onClick={() => setMenuOpen(false)}>
              Stoles
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="temple-border" />
    </header>
  )
}
