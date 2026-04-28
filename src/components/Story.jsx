import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { storyData } from '../data/content'

/**
 * Story — Two-column layout: text + image + animated stats
 */
export default function Story() {
  const { ref, inView } = useInView()

  return (
    <section id="story" className="py-28 lg:py-36 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <img
                src={storyData.image}
                alt="Chef Laurent in the kitchen"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-500/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 border border-gold-500/20 -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <span className="section-tag">{storyData.eyebrow}</span>
            <h2 className="section-title mb-6">
              {storyData.title.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="divider-gold mx-0 mb-8" />
            {storyData.paragraphs.map((p, i) => (
              <p key={i} className="section-subtitle mb-4 text-base">
                {p}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-charcoal-800">
              {storyData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-display text-4xl text-gradient-gold italic mb-1">
                    {stat.value}
                  </div>
                  <div className="font-accent text-xs text-cream-300 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
