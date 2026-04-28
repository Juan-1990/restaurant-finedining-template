# Maison Laurent — Fine Dining Restaurant Landing Page

> A premium, production-ready React + Vite landing page template for fine dining restaurants, bistros, and upscale food establishments.

![Preview](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop)

---

## Live Demo

[▶ View Live Demo](https://your-demo-url.vercel.app) &nbsp;|&nbsp; [📁 GitHub Repo](https://github.com/yourusername/restaurant-finedining)

---

## Features

- **React 18 + Vite 5** — Lightning-fast development and production build
- **Tailwind CSS v3** — Utility-first styling with custom design tokens
- **Framer Motion** — Smooth scroll-triggered animations and page transitions
- **Fully Responsive** — Optimized for mobile, tablet, and desktop (320px → 1920px+)
- **Custom Fonts** — Cormorant Garamond + Cinzel + Jost via Google Fonts
- **Dark Elegant Theme** — Charcoal + gold palette, fully customizable via CSS variables
- **Sticky Navbar** — Transparent on top, solid on scroll, mobile hamburger menu
- **Filterable Menu** — Tab-based menu categories with animated transitions
- **Interactive Gallery** — Masonry-style CSS grid with hover zoom effects
- **Reservation Form** — Complete form with validation and success state
- **Scroll Animations** — Custom `useInView` hook for entrance animations
- **Zero Layout Shift** — Optimized images with `loading="lazy"` and explicit dimensions
- **SEO Ready** — Meta tags, Open Graph, and semantic HTML structure
- **Clean Code** — ESLint configured, components separated, data in `content.js`

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 5.2 | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.0 | Animations |
| Lucide React | 0.363 | Icons |

---

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd restaurant-finedining

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

---

## Project Structure

```
restaurant-finedining/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/             # Static assets (add your images here)
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky header with mobile menu
│   │   ├── Hero.jsx        # Full-screen hero with CTA
│   │   ├── Story.jsx       # About section with stats
│   │   ├── Menu.jsx        # Filterable menu cards
│   │   ├── Experience.jsx  # Feature cards grid
│   │   ├── Gallery.jsx     # Masonry image gallery
│   │   ├── Testimonials.jsx # Review cards with stars
│   │   ├── Reservations.jsx # Contact form section
│   │   └── Footer.jsx      # Site footer
│   ├── data/
│   │   └── content.js      # ⭐ ALL text & config — edit here
│   ├── hooks/
│   │   └── useInView.js    # Scroll animation hook
│   ├── styles/
│   │   └── index.css       # Global styles & Tailwind layers
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Customization Guide

### 1. Change all text content

Open `src/data/content.js` — this single file controls **all text** on the site:

```js
// Change restaurant name and contact info
export const siteConfig = {
  name: 'Your Restaurant Name',
  phone: '+1 (000) 000-0000',
  email: 'info@yourrestaurant.com',
  address: 'Your Address',
}

// Change hero headline and subtitle
export const heroData = {
  title: 'Your Headline\nYour Subheadline',
  subtitle: 'Your description here.',
  // ...
}
```

### 2. Change colors

Open `tailwind.config.js` and modify the `gold` and `cream` color palettes:

```js
colors: {
  gold: {
    400: '#e2a820',  // Main accent color
    500: '#c88a10',  // Darker accent
  },
}
```

### 3. Replace images

In `src/data/content.js`, replace the Unsplash URLs with your own images:

```js
export const heroData = {
  image: 'https://your-cdn.com/your-hero-image.jpg',
}
```

Or place images in `src/assets/` and import them:

```js
import heroImg from '../assets/hero.jpg'
```

### 4. Connect the reservation form

In `src/components/Reservations.jsx`, find the `handleSubmit` function and connect to your service:

**Option A — EmailJS (free tier available):**
```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  setSubmitted(true)
}
```

**Option B — Formspree:**
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  })
  setSubmitted(true)
}
```

### 5. Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```

---

## Image Credits

All images sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license) — free for commercial use, no attribution required.

| Image | Unsplash URL |
|---|---|
| Hero background | [photo-1414235077428](https://unsplash.com/photos/1414235077428) |
| Chef / Story | [photo-1600565193348](https://unsplash.com/photos/1600565193348) |
| Signature dish | [photo-1504674900247](https://unsplash.com/photos/1504674900247) |
| Restaurant interior | [photo-1555396273-367ea4eb4db5](https://unsplash.com/photos/1555396273) |
| Gourmet plating | [photo-1565299624946](https://unsplash.com/photos/1565299624946) |
| Wine selection | [photo-1551218808-94e220e084d2](https://unsplash.com/photos/1551218808) |
| Chef preparing | [photo-1559339352-11d035aa65de](https://unsplash.com/photos/1559339352) |
| Dessert | [photo-1567620905732](https://unsplash.com/photos/1567620905732) |
| Reservation bg | [photo-1424847651672](https://unsplash.com/photos/1424847651672) |

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## Sections Included

1. **Navbar** — Sticky, transparent-to-solid, mobile-responsive
2. **Hero** — Cinematic full-screen with animated text
3. **Story / About** — Two-column with animated stats counter
4. **Menu** — Category tabs with filterable dish cards
5. **Experience** — Feature icons grid
6. **Gallery** — Masonry CSS grid with hover effects
7. **Testimonials** — Review cards with star ratings
8. **Reservations** — Full booking form with success state
9. **Footer** — Links, contact info, social media

---

## Support

If you have questions or need customization help, please reach out through the marketplace support system. Response within 24–48 hours.

---

## License

This template is licensed for use per the marketplace terms. Please read the license file before use.

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

*Built with React + Vite + Tailwind CSS + Framer Motion*
