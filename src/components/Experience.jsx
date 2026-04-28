import { motion } from 'framer-motion'
import { UtensilsCrossed, Wine, Sparkles, Calendar } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { experienceData } from '../data/content'

const iconMap = { UtensilsCrossed, Wine, Sparkles, Calendar }

/**
 * Experience — Feature cards grid with animated entrance
 */
export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-28 lg:py-36 bg-charcoal-950 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold-500/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {experienceData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {experienceData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <div className="divider-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-800">
          {experienceData.features.map((feat, i) => {
            const Icon = iconMap[feat.icon]
            return (
              <motion.div
                key={feat.title}
                className="card-dark group text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              >
                <div className="w-14 h-14 border border-gold-500/40 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
                  {Icon && <Icon size={22} className="text-gold-400" />}
                </div>
                <h3 className="font-display text-xl text-cream-100 mb-4 group-hover:text-gold-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="font-body text-sm text-cream-300 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
