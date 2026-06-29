import useScrollAnimation from "../../hooks/useScrollAnimation"
import "./About.scss"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      className={`about ${isVisible ? "about--visible" : ""}`}
      ref={ref}
    >
      <h2>About Us</h2>
      <p>
        Srilaxmi Homefoods is a family-run kitchen dedicated to preserving the
        rich culinary traditions of Telugu cuisine. Every snack and sweet we
        prepare is handmade with carefully sourced ingredients, following
        recipes passed down through generations. From the crispy Janthikalu to
        the melt-in-your-mouth Sunnundalu, each item is crafted with love and
        attention to detail. We believe that homemade food carries a warmth and
        authenticity that no factory can replicate. Our mission is to bring the
        taste of traditional Telugu home cooking to your doorstep, one batch at
        a time. Whether you are celebrating a festival, hosting guests, or
        simply craving a taste of home, Srilaxmi Homefoods has something special
        for you.
      </p>
    </section>
  )
}
