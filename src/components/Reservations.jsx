import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { reservationData, siteConfig } from '../data/content'

/**
 * Reservations — Split layout: image left, form right
 * Form handles state locally (connect to backend/EmailJS as needed)
 */
export default function Reservations() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend, EmailJS, or Formspree
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: siteConfig.phone },
    { icon: Mail, label: 'Email', value: siteConfig.email },
    { icon: MapPin, label: 'Address', value: siteConfig.address },
    { icon: Clock, label: 'Hours', value: siteConfig.hours.weekdays },
  ]

  return (
    <section id="reservations" className="py-28 lg:py-36 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {reservationData.eyebrow}
          </motion.span>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {reservationData.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'italic text-gradient-gold block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h2>
          <motion.p
            className="section-subtitle max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {reservationData.subtitle}
          </motion.p>
          <div className="divider-gold" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative overflow-hidden h-52 lg:h-64">
              <img
                src={reservationData.image}
                alt="Restaurant ambiance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-950/50" />
            </div>
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="font-accent text-xs text-gold-400 tracking-widest uppercase mb-1">
                      {label}
                    </div>
                    <div className="font-body text-sm text-cream-200">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="card-dark h-full flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
                <CheckCircle size={48} className="text-gold-400" />
                <div>
                  <h3 className="font-display text-2xl text-cream-100 mb-2">
                    Reservation Requested
                  </h3>
                  <p className="font-body text-cream-300 text-sm">
                    We will confirm your reservation within 24 hours. We look forward to welcoming you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-cream-300/30"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-cream-300/30"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000"
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-cream-300/30"
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors"
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === '1' ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="">Select time</option>
                    {['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map(
                      (t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="font-accent text-xs text-gold-400 tracking-widest uppercase">
                    Special Requests
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dietary requirements, celebrations, accessibility needs..."
                    className="bg-charcoal-950 border border-charcoal-800 text-cream-100 font-body text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-cream-300/30"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full justify-center">
                    Request Reservation
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
