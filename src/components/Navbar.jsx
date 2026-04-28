import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig, navLinks } from '../data/content'

/**
 * Navbar
 * - Transparent on top, solid charcoal on scroll
 * - Mobile hamburger menu with AnimatePresence
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-accent text-gold-400 text-xs tracking-widest2 uppercase mb-0.5">
            {siteConfig.tagline}
          </span>
          <span className="font-display text-cream-100 text-2xl italic">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-accent text-xs tracking-widest2 uppercase text-cream-300 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNavClick('#reservations')}
          className="hidden lg:inline-flex btn-primary text-sm py-3 px-6"
        >
          Reserve
        </button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream-100 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-charcoal-950/98 backdrop-blur-md border-t border-charcoal-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-accent text-xs tracking-widest2 uppercase text-cream-200 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#reservations')}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
