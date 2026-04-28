import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { galleryData } from '../data/content'

/**
 * Gallery — CSS grid masonry layout with hover zoom effect
 */
export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {galleryData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {galleryData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <div className="divider-gold" />
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {galleryData.images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group ${img.span || ''}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40 transition-all duration-300 flex items-end p-4">
                <span className="font-accent text-xs text-cream-100 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
