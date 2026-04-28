import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { testimonialsData } from '../data/content'

/**
 * Testimonials — Three-column review cards with star ratings
 */
export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section className="py-28 lg:py-36 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {testimonialsData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {testimonialsData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.items.map((item, i) => (
            <motion.div
              key={i}
              className="card-dark relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-gold-500/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="font-display text-lg italic text-cream-200 leading-relaxed mb-6">
                "{item.quote}"
              </p>

              <div className="border-t border-charcoal-800 pt-4">
                <div className="font-accent text-sm text-cream-100 tracking-wide">{item.author}</div>
                <div className="font-body text-xs text-cream-300 mt-0.5">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
