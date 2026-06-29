import useScrollAnimation from "../../hooks/useScrollAnimation"
import "./VideoSection.scss"

const videos = [
  { id: "dQw4w9WgXcQ", title: "Making traditional Ariselu at home" },
  { id: "jNQXAC9IVRw", title: "Srilaxmi Homefoods kitchen tour" },
]

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="videos"
      className={`video-section ${isVisible ? "video-section--visible" : ""}`}
      ref={ref}
    >
      <h2>Food Videos</h2>
      <div className="video-section__grid">
        {videos.map((video) => (
          <div key={video.id} className="video-section__card">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
