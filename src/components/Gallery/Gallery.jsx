import useScrollAnimation from "../../hooks/useScrollAnimation"
import ImageCard from "../ImageCard/ImageCard"
import "./Gallery.scss"

function Gallery({ items, onImageClick }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="gallery"
      className={`gallery ${isVisible ? "gallery--visible" : ""}`}
      ref={ref}
    >
      <h2>Our Menu</h2>
      <div className="gallery__grid">
        {items.map((item, index) => (
          <ImageCard
            key={item.id}
            item={item}
            index={index}
            onClick={onImageClick}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
