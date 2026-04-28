import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { heroData, siteConfig } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/**
 * Hero — Full-screen cinematic section with parallax image
 */
export default function Hero() {
  const scrollToStory = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleLines = heroData.title.split('\n')

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Fine dining restaurant atmosphere"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="absolute inset-0 bg-charcoal-950/30" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 left-8 w-16 h-16 border-t border-l border-gold-500/40 hidden lg:block" />
      <div className="absolute top-28 right-8 w-16 h-16 border-t border-r border-gold-500/40 hidden lg:block" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b border-l border-gold-500/40 hidden lg:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r border-gold-500/40 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          className="section-tag"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          {heroData.eyebrow}
        </motion.span>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {titleLines.map((line, i) => (
            <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
              {line}
            </span>
          ))}
        </motion.h1>

        <div className="divider-gold" />

        <motion.p
          className="section-subtitle max-w-xl mx-auto mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <a href="#reservations" className="btn-primary">
            {heroData.cta}
            <ChevronRight size={14} />
          </a>
          <a href="#menu" className="btn-outline">
            {heroData.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToStory}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-400/70 hover:text-gold-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-accent text-xs tracking-widest2 uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
