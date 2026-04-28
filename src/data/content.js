// ============================================================
// SITE CONTENT — Edit this file to customize all text & data
// ============================================================

export const siteConfig = {
  name: 'Maison Laurent',
  tagline: 'Fine Dining Experience',
  phone: '+1 (212) 555-0182',
  email: 'reservations@maisonlaurent.com',
  address: '14 West 55th Street, New York, NY 10019',
  hours: {
    weekdays: 'Tuesday – Friday: 6:00 PM – 11:00 PM',
    weekend: 'Saturday – Sunday: 5:30 PM – 11:30 PM',
    closed: 'Closed Monday',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}

export const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservations', href: '#reservations' },
]

export const heroData = {
  eyebrow: 'Est. 2009 · New York',
  title: 'Where Cuisine\nBecomes Art',
  subtitle:
    'An intimate dining experience where classical French technique meets modern creativity. Every plate tells a story.',
  cta: 'Reserve a Table',
  ctaSecondary: 'View Menu',
  // Unsplash image — see IMAGES.md for full credits
  image:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop',
}

export const storyData = {
  eyebrow: 'Our Story',
  title: 'A Legacy of\nExceptional Flavour',
  paragraphs: [
    'Founded in 2009 by Chef Laurent Dubois, Maison Laurent was born from a singular vision: to create a space where extraordinary ingredients, impeccable technique, and warm hospitality converge.',
    'Each season brings a new chapter. Our menus are composed around the finest local and imported ingredients, prepared with reverence for classical French tradition and an openness to global influence.',
  ],
  stats: [
    { value: '15+', label: 'Years of Excellence' },
    { value: '3', label: 'Michelin Stars' },
    { value: '12', label: 'Seasonal Menus' },
    { value: '98%', label: 'Guest Satisfaction' },
  ],
  image:
    'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=85&auto=format&fit=crop',
}

export const menuData = {
  eyebrow: 'Our Menu',
  title: 'Crafted with\nPassion & Precision',
  categories: ['Tasting Menu', 'À la Carte', 'Wine Pairing'],
  items: [
    {
      category: 'Tasting Menu',
      name: 'Garden Première',
      description: 'Heirloom tomatoes, burrata foam, micro basil, aged balsamic reduction',
      price: '$28',
      tag: 'Vegetarian',
    },
    {
      category: 'Tasting Menu',
      name: 'Ocean Serenade',
      description: 'Hokkaido scallops, cauliflower purée, caviar, champagne beurre blanc',
      price: '$42',
      tag: 'Signature',
    },
    {
      category: 'Tasting Menu',
      name: 'Forest Reverie',
      description: 'Wagyu beef tenderloin, black truffle jus, pomme dauphinoise, seasonal fungi',
      price: '$68',
      tag: 'Chef\'s Pick',
    },
    {
      category: 'À la Carte',
      name: 'Foie Gras Royale',
      description: 'Pan-seared duck foie gras, brioche, fig compote, aged port reduction',
      price: '$38',
      tag: 'Classic',
    },
    {
      category: 'À la Carte',
      name: 'Bouillabaisse Moderne',
      description: 'Saffron broth, lobster, sea bass, mussels, rouille, grilled sourdough',
      price: '$52',
      tag: 'Seasonal',
    },
    {
      category: 'À la Carte',
      name: 'Dessert Ensemble',
      description: 'Dark chocolate sphere, salted caramel, hazelnut praline, gold leaf',
      price: '$22',
      tag: 'Sweet',
    },
  ],
}

export const experienceData = {
  eyebrow: 'The Experience',
  title: 'Every Detail\nConsidered',
  features: [
    {
      icon: 'UtensilsCrossed',
      title: 'Chef\'s Table',
      description:
        'An exclusive 8-seat experience in our kitchen. Watch the team craft each course and engage directly with Chef Laurent.',
    },
    {
      icon: 'Wine',
      title: 'Wine Cellar',
      description:
        'Over 1,200 labels curated by our sommelier. From Burgundy premiers crus to rare natural wines from emerging regions.',
    },
    {
      icon: 'Sparkles',
      title: 'Private Dining',
      description:
        'Three private rooms for gatherings of 8 to 40 guests. Full AV capabilities and bespoke menus crafted for your occasion.',
    },
    {
      icon: 'Calendar',
      title: 'Seasonal Events',
      description:
        'Monthly winemaker dinners, truffle season celebrations, and exclusive tastings with our culinary partners.',
    },
  ],
}

export const galleryData = {
  eyebrow: 'Gallery',
  title: 'A Feast\nfor the Eyes',
  images: [
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
      alt: 'Signature tasting dish',
      span: 'col-span-2 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop',
      alt: 'Restaurant interior ambiance',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
      alt: 'Gourmet plating',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format&fit=crop',
      alt: 'Wine selection',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
      alt: 'Chef preparing dish',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop',
      alt: 'Dessert presentation',
      span: 'col-span-2',
    },
  ],
}

export const testimonialsData = {
  eyebrow: 'Reviews',
  title: 'What Our\nGuests Say',
  items: [
    {
      quote:
        'An unforgettable evening. The scallop course alone was worth the journey. Service is impeccably warm without being stiff.',
      author: 'James R.',
      role: 'Food Critic, Bon Vivant Magazine',
      rating: 5,
    },
    {
      quote:
        'Three hours that felt like thirty minutes. Chef Laurent has created something truly rare — a restaurant with both soul and precision.',
      author: 'Sophia M.',
      role: 'Verified Guest',
      rating: 5,
    },
    {
      quote:
        'The private dining room for our anniversary was beyond expectations. Every detail had been considered. We will return.',
      author: 'David & Claire T.',
      role: 'Verified Guests',
      rating: 5,
    },
  ],
}

export const reservationData = {
  eyebrow: 'Reservations',
  title: 'Join Us for\nan Unforgettable Evening',
  subtitle:
    'Reservations recommended. We accommodate dietary requirements with advance notice. Dress code: smart elegant.',
  image:
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=85&auto=format&fit=crop',
}
