# Image Guide — Maison Laurent Fine Dining

All images are from Unsplash — FREE for commercial use, no attribution required.
Download the highest resolution available (click the links below).

---

## How to download

1. Click each link below
2. On the Unsplash page, click the **Download** button (top right)
3. Choose the largest size available (typically "Original" or "2400px+")
4. Save to your project's `src/assets/` folder with the filename shown

---

## Images to download

| # | Section | Filename to save as | Download Link |
|---|---------|-------------------|---------------|
| 1 | Hero background | `hero-bg.jpg` | https://unsplash.com/photos/iCvqqTs-pS8 |
| 2 | Chef / Story | `chef-story.jpg` | https://unsplash.com/photos/1Shk_PkNkNw |
| 3 | Gallery — signature dish (large) | `gallery-dish-1.jpg` | https://unsplash.com/photos/MqT0asuoIcU |
| 4 | Gallery — restaurant interior | `gallery-interior.jpg` | https://unsplash.com/photos/E8Ufcyxz514 |
| 5 | Gallery — plating detail | `gallery-plating.jpg` | https://unsplash.com/photos/IGfIGP5ONV0 |
| 6 | Gallery — wine pour | `gallery-wine.jpg` | https://unsplash.com/photos/sF3nkQsVnkw |
| 7 | Gallery — chef at work | `gallery-chef.jpg` | https://unsplash.com/photos/Yn0l7uwBrpw |
| 8 | Gallery — dessert (wide) | `gallery-dessert.jpg` | https://unsplash.com/photos/6ElTPTuHejU |
| 9 | Reservations background | `reservations-bg.jpg` | https://unsplash.com/photos/fxJTl_gDh28 |

---

## After downloading

Replace the Unsplash CDN URLs in `src/data/content.js` with your local file paths:

```js
// Before (CDN URL):
image: 'https://images.unsplash.com/photo-1414235077428...

// After (local file):
import heroImg from '../assets/hero-bg.jpg'
// ...
image: heroImg,
```

Or you can keep the CDN URLs for your demo — they load fast and look great.

---

## Additional free image sources

If you want more variety or different styles:

- **Unsplash** — https://unsplash.com/s/photos/fine-dining
- **Pexels** — https://pexels.com/search/restaurant/
- **Foodiesfeed** — https://foodiesfeed.com (food photos only, free commercial use)

### Best search terms for restaurant images:
- "fine dining plating"
- "restaurant interior dark"
- "chef kitchen professional"
- "wine candlelight dinner"
- "gourmet food presentation"
- "michelin star restaurant"

---

## Image optimization tips

Before replacing images in production, optimize them:

1. **Resize** — Hero images: max 1920px wide. Gallery: max 800px
2. **Compress** — Use https://squoosh.app (free, in-browser)
3. **Format** — Use WebP for modern browsers (Vite handles this automatically with plugins)
4. **Loading** — Keep `loading="eager"` only on hero image. All others: `loading="lazy"`
