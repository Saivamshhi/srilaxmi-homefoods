import { useState } from "react"
import useScrollAnimation from "../../hooks/useScrollAnimation"
import "./LocationMap.scss"

export default function LocationMap() {
  const [mapError, setMapError] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="location"
      className={`location ${isVisible ? "location--visible" : ""}`}
      ref={ref}
    >
      <h2>Our Location</h2>
      <p className="location__address">
        5/4/630/2, Sharadha Nagar, Hyderabad, Telangana 500070
      </p>
      <div className="location__map-container">
        {!mapError ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.720605923201!2d78.57649627596795!3d17.32902450448224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e566e48559%3A0xd5956342c64ab6ac!2sVijaya%20Laxmi%20Nilayam%2C%205%2F4%2F630%2F2%2C%20Sharadha%20Nagar%2C%20Hyderabad%2C%20Telangana%20500070!5e0!3m2!1sen!2sin!4v1782753299532!5m2!1sen!2sin"
            title="Map showing location of Srilaxmi Homefoods"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setMapError(true)}
          />
        ) : (
          <div className="location__fallback">
            <p>
              Unable to load map. Visit us at: 5/4/630/2, Sharadha Nagar,
              Hyderabad, Telangana 500070
            </p>
            <a
              href="https://maps.google.com/?q=5/4/630/2+Sharadha+Nagar+Hyderabad+Telangana+500070"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
