import useScrollAnimation from "../../hooks/useScrollAnimation"
import "./Hero.scss"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  const handleCtaClick = (e) => {
    e.preventDefault()
    document.querySelector("#gallery").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className={`hero ${isVisible ? "hero--visible" : ""}`}
      ref={ref}
    >
      <h1>Srilaxmi Homefoods</h1>
      <p className="hero__tagline">
        Authentic homemade Telugu snacks and sweets, made with love and
        tradition
      </p>
      <a href="#gallery" className="hero__cta" onClick={handleCtaClick}>
        Explore Our Menu
      </a>
    </section>
  )
}
