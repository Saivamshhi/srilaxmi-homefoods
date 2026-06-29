import { useState } from "react"
import "./ImageCard.scss"

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

function hasPrices(item) {
  return formatPrice(item.priceHalfKg) || formatPrice(item.pricePerKg)
}

function ImageCard({ item, index, onClick }) {
  const [imageError, setImageError] = useState(false)

  const imageSrc = `${import.meta.env.BASE_URL}images/${item.filename}`
  const halfKg = formatPrice(item.priceHalfKg)
  const perKg = formatPrice(item.pricePerKg)
  const priceText = [halfKg && `½kg: ${halfKg}`, perKg && `1kg: ${perKg}`]
    .filter(Boolean)
    .join(" | ")
  const ariaLabel = `${item.name}${priceText ? `, ${priceText}` : ""}`

  return (
    <div
      className="image-card"
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={() => onClick(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick(index)
        }
      }}
    >
      {!imageError ? (
        <img
          className="image-card__image"
          src={imageSrc}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="image-card__placeholder">Image unavailable</div>
      )}
      {hasPrices(item) && !imageError && (
        <div className="image-card__price-overlay" aria-hidden="true">
          <span className="image-card__name">{item.name}</span>
          <span className="image-card__prices">
            {halfKg && (
              <span className="image-card__price-text">½kg: {halfKg}</span>
            )}
            {halfKg && perKg && (
              <span className="image-card__price-separator"> | </span>
            )}
            {perKg && (
              <span className="image-card__price-text">1kg: {perKg}</span>
            )}
          </span>
        </div>
      )}
    </div>
  )
}

export default ImageCard
