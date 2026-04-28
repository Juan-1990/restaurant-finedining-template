import { useEffect, useRef, useState } from 'react'

/**
 * useInView — triggers when element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {{ ref, inView }}
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return { ref, inView }
}
