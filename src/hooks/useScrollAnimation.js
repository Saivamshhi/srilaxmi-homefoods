import { useState, useRef, useEffect } from "react"

/**
 * Custom hook for scroll-triggered entrance animations.
 * Uses IntersectionObserver to detect when an element enters the viewport.
 * Respects prefers-reduced-motion by immediately showing content.
 *
 * @param {Object} options - Optional configuration (reserved for future use)
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export default function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}
