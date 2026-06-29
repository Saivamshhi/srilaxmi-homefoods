import { useState } from "react"
import siteConfig from "../../data/siteConfig"
import "./Navbar.scss"

const allNavLinks = [
  { label: "Home", href: "#hero" },
  { label: "Gallery", href: "#gallery" },
  { label: "Videos", href: "#videos", requiresFlag: "enableVideos" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Payment", href: "#payment" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = allNavLinks.filter(
    (link) => !link.requiresFlag || siteConfig[link.requiresFlag],
  )

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  const handleBrandClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${menuOpen ? " navbar--open" : ""}`}>
      <nav className="navbar__nav">
        <a href="#" className="navbar__brand" onClick={handleBrandClick}>
          Srilaxmi Homefoods
        </a>
        <a
          href="tel:+918688410008"
          className="navbar__phone"
          aria-label="Call us at 7569432469"
        >
          📞 7569432469
        </a>
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__item">
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
