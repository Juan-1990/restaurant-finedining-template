import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { menuData } from '../data/content'

/**
 * Menu — Filterable menu with category tabs and animated cards
 */
export default function Menu() {
  const { ref, inView } = useInView()
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0])

  const filtered = menuData.items.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-28 lg:py-36 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {menuData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {menuData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <div className="divider-gold" />
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {menuData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-accent text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold-500 border-gold-500 text-charcoal-950'
                  : 'border-charcoal-800 text-cream-300 hover:border-gold-600 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                className="card-dark relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    {item.tag}
                  </span>
                  <span className="font-display text-2xl text-gold-400 italic">{item.price}</span>
                </div>
                <h3 className="font-display text-xl text-cream-100 mb-3 group-hover:text-gold-300 transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-cream-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full menu CTA */}
        <div className="text-center mt-14">
          <a href="#reservations" className="btn-outline">
            Request Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
