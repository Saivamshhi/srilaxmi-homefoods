import { useEffect } from "react"
import "./Lightbox.scss"

function formatPrice(price) {
  if (
    price == null ||
    price <= 0 ||
    price > 99999 ||
    !Number.isInteger(price)
  ) {
    return null
  }
  return `₹${price}`
}

function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex]
  const imageSrc = `${import.meta.env.BASE_URL}images/${item.filename}`
  const halfKg = formatPrice(item.priceHalfKg)
  const perKg = formatPrice(item.pricePerKg)
  const priceText = [halfKg && `½kg: ${halfKg}`, perKg && `1kg: ${perKg}`]
    .filter(Boolean)
    .join(" | ")

  // Lock body scroll on mount, restore on unmount
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        const prev = (currentIndex - 1 + items.length) % items.length
        onNavigate(prev)
      } else if (e.key === "ArrowRight") {
        const next = (currentIndex + 1) % items.length
        onNavigate(next)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, items.length, onClose, onNavigate])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          aria-label="Close lightbox"
          onClick={onClose}
        >
          &times;
        </button>
        <button
          className="lightbox__prev"
          aria-label="Previous image"
          onClick={() =>
            onNavigate((currentIndex - 1 + items.length) % items.length)
          }
        >
          &#10094;
        </button>
        <img className="lightbox__image" src={imageSrc} alt={item.alt} />
        <div className="lightbox__info">
          <span className="lightbox__name">{item.name}</span>
          {priceText && <span className="lightbox__price">{priceText}</span>}
        </div>
        <button
          className="lightbox__next"
          aria-label="Next image"
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default Lightbox
