import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Gallery from "./components/Gallery/Gallery"
import VideoSection from "./components/VideoSection/VideoSection"
import About from "./components/About/About"
import LocationMap from "./components/LocationMap/LocationMap"
import UPIPayment from "./components/UPIPayment/UPIPayment"
import Footer from "./components/Footer/Footer"
import Lightbox from "./components/Lightbox/Lightbox"
import foodItems from "./data/foodItems"
import siteConfig from "./data/siteConfig"
import "./App.scss"

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleLightboxClose = () => {
    setLightboxOpen(false)
  }

  const handleLightboxNavigate = (newIndex) => {
    setLightboxIndex(newIndex)
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Gallery items={foodItems} onImageClick={handleImageClick} />
        {siteConfig.enableVideos && <VideoSection />}
        <About />
        <LocationMap />
        <UPIPayment />
      </main>
      <Footer />
      {lightboxOpen && (
        <Lightbox
          items={foodItems}
          currentIndex={lightboxIndex}
          onClose={handleLightboxClose}
          onNavigate={handleLightboxNavigate}
        />
      )}
    </div>
  )
}

export default App
