import { Instagram, Facebook, ArrowUp } from 'lucide-react'
import { siteConfig, navLinks } from '../data/content'

/**
 * Footer — Dark elegant footer with links, contact, and scroll-to-top
 */
export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-accent text-gold-400 text-xs tracking-widest2 uppercase block mb-1">
              {siteConfig.tagline}
            </span>
            <span className="font-display text-3xl italic text-cream-100 block mb-4">
              {siteConfig.name}
            </span>
            <p className="font-body text-sm text-cream-300 leading-relaxed max-w-sm">
              An extraordinary culinary experience in the heart of the city. Where every meal becomes a cherished memory.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 border border-charcoal-800 flex items-center justify-center text-cream-300 hover:border-gold-500 hover:text-gold-400 transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="w-9 h-9 border border-charcoal-800 flex items-center justify-center text-cream-300 hover:border-gold-500 hover:text-gold-400 transition-all"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-accent text-xs text-gold-400 tracking-widest2 uppercase mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-xs text-gold-400 tracking-widest2 uppercase mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="font-body text-sm text-cream-300">{siteConfig.phone}</li>
              <li className="font-body text-sm text-cream-300">{siteConfig.email}</li>
              <li className="font-body text-sm text-cream-300 leading-relaxed">{siteConfig.address}</li>
              <li className="font-body text-xs text-cream-300/70 mt-1">{siteConfig.hours.weekdays}</li>
              <li className="font-body text-xs text-cream-300/70">{siteConfig.hours.weekend}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream-300/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 border border-charcoal-800 flex items-center justify-center text-cream-300 hover:border-gold-500 hover:text-gold-400 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
