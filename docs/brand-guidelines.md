# Redemption Collision Center — Brand Guidelines

## Quick Reference

| Element         | Value                               |
| --------------- | ----------------------------------- |
| Primary Color   | #1244c8 (brand-blue)                |
| Secondary Color | #0a0a0a (dark)                      |
| Accent Color    | #f5a623 (gold)                      |
| Primary Font    | Oswald                              |
| Body Font       | Inter                               |
| Voice           | Direct, Confident, Community-Rooted |

---

## 1. Brand Identity

**Business Name:** Redemption Collision Center  
**Short Name:** Redemption Collision  
**Tagline:** One Call. We Do It All.  
**Location:** 3975 Atascocita Way, Humble, TX 77396  
**Service Area:** Greater Houston (within 60 min of Beltway 8)  
**Phone:** (346) 471-5322  
**Email:** redemptioncollisioncenter@gmail.com  
**Website:** redemptioncollision.com

**Founded:** 2011 (built in New Orleans, now Humble TX)  
**Ownership:** Black-owned, Family-owned  
**Years in Business:** 13+

---

## 2. Mission & Values

**Mission:** To provide Houston-area families and businesses with honest, high-quality collision repair and auto body services — fast, professionally, and at prices they can count on.

**Core Values:**

- **Trust** — We deal straight. Free estimates, no hidden fees.
- **Excellence** — Factory-quality work on every job, no shortcuts.
- **Community** — Black-owned, family-owned, Humble TX rooted.
- **Accessibility** — Insurance claims welcome. Financing available.

---

## 3. Color Palette

### Primary Colors

| Name           | Hex     | CSS Variable       | Usage                                        |
| -------------- | ------- | ------------------ | -------------------------------------------- |
| **Brand Blue** | #1244c8 | --color-blue       | Primary CTA buttons, accent text, active nav |
| **Blue Light** | #2255e0 | --color-blue-light | Hover states, links                          |
| **Dark**       | #0a0a0a | --color-dark       | Page background, section fills               |
| **Darker**     | #050505 | --color-darker     | Footer, deepest backgrounds                  |
| **Light**      | #f5f5f5 | --color-light      | Primary text on dark backgrounds             |

### Secondary Colors

| Name          | Hex     | CSS Variable      | Usage                                 |
| ------------- | ------- | ----------------- | ------------------------------------- |
| **Gold**      | #f5a623 | --color-gold      | Accent highlights, star ratings       |
| **Gray**      | #888888 | --color-gray      | Secondary text, labels, muted content |
| **Gray Dark** | #333333 | --color-gray-dark | Dividers, borders                     |

### Color Rules

- **Never use red as a primary action color** — brand identity is blue
- Gold is for highlights only, not CTAs
- Minimum contrast ratio 4.5:1 for body text (WCAG AA)
- Dark overlay on video: `rgba(5, 5, 5, 0.72)` minimum

---

## 4. Typography

### Font Stack

| Role     | Font   | Weights                      | CSS Variable   |
| -------- | ------ | ---------------------------- | -------------- |
| Headings | Oswald | 400, 500, 600, 700           | --font-heading |
| Body     | Inter  | 300, 400, 500, 600, 700, 800 | --font-body    |

### Type Scale

| Element         | Size                       | Weight | Transform                       |
| --------------- | -------------------------- | ------ | ------------------------------- |
| H1 Hero         | clamp(2.5rem, 6vw, 4.5rem) | 700    | uppercase                       |
| H2 Section      | clamp(1.8rem, 4vw, 2.8rem) | 700    | uppercase                       |
| H3 Card         | 1.2rem–1.4rem              | 600    | uppercase                       |
| Body            | 1rem–1.15rem               | 400    | none                            |
| Label / Eyebrow | 0.75rem–0.85rem            | 500    | uppercase, 1px letter-spacing   |
| Button          | 0.875rem                   | 600    | uppercase, 0.5px letter-spacing |

### Typography Rules

- Headings always uppercase in Oswald
- Body text in Inter at 400 weight, line-height 1.6
- Eyebrow text: brand blue, uppercase, tracked tight
- Never use font sizes below 12px

---

## 5. Logo Usage

### Logo Variants

- **Full logo:** REDEMPTION (blue) + COLLISION CENTER (white) — horizontal layout
- **Short logo:** REDEMPTION (blue) + COLLISION (white) — footer / compact use
- **Favicon:** "R" in white on blue square (#1244c8), 32×32px SVG

### Logo Rules

- Always use the two-color format (blue + white on dark, or blue + dark on light)
- Never recolor the logo to a single solid color
- Minimum clear space: equal to the height of the "R" on all sides
- Never use logo on backgrounds lighter than #222 without a dark background card
- Logo image (`logo.png`) uses `onerror` fallback to text version

---

## 6. Voice & Tone

### Brand Voice

**Confident, Direct, Community-Rooted**

Redemption speaks like the most trusted mechanic in the neighborhood — someone who's been doing this for 13 years and doesn't need to oversell. Short sentences. Real numbers. No fluff.

### Voice Pillars

| Pillar          | Description                         | Example                                                                                 |
| --------------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| **Direct**      | Say what you mean. No filler.       | "Free estimates. No pressure." not "We'd love to offer you a complimentary assessment." |
| **Confident**   | We know our work. State it plainly. | "Factory color match guaranteed."                                                       |
| **Trustworthy** | Back claims with specifics          | "Top 3 Google Reviews Humble 2025" not "highly rated"                                   |
| **Community**   | Humble TX, Black-owned, family shop | "Built in New Orleans. Built for Houston."                                              |

### Tone by Context

| Context       | Tone                   | Notes                          |
| ------------- | ---------------------- | ------------------------------ |
| Homepage hero | Bold, punchy           | Short lines, impact words      |
| Service pages | Informative, confident | Benefits > features            |
| FAQs          | Plain, helpful         | Conversational, no jargon      |
| Forms / CTAs  | Urgent but not pushy   | "Quick response · No pressure" |
| Error pages   | Calm, helpful          | Never blame the user           |

---

## 7. Messaging Framework

### Primary Tagline

> **One Call. We Do It All.**

### Supporting Messages

| Message                                                                                       | Use case                    |
| --------------------------------------------------------------------------------------------- | --------------------------- |
| "13 years in the business, built in New Orleans — now bringing that expertise to Humble, TX." | About / hero description    |
| "Top 3 Google Reviews in Humble, 2025."                                                       | Trust signal                |
| "Free estimates. Always."                                                                     | CTA support                 |
| "Insurance claims welcome."                                                                   | Services / collision repair |
| "Collision repair, auto body, mechanical, roadside & financing."                              | Services overview           |
| "Quick response · No pressure"                                                                | Form card subtitle          |

### Services Messaging

| Service             | One-line                                                                          |
| ------------------- | --------------------------------------------------------------------------------- |
| Collision Repair    | "From minor dents to major damage — we fix it right, every time."                 |
| Auto Body & Paint   | "Factory color match guaranteed. You won't be able to tell where the damage was." |
| Mechanical Repair   | "Beyond the body — we handle mechanical work too."                                |
| Roadside Assistance | "Locked out, dead battery, flat tire — call us, we come to you."                  |
| Insurance Claims    | "We work with all major insurers and handle the paperwork."                       |
| Financing           | "Don't let cost stop you from getting your car fixed right."                      |

---

## 8. Design Patterns

### Buttons

- **Primary:** Blue background (#1244c8), white text, padding 14px 28px, border-radius 6px
- **Outline:** Transparent, 2px blue border, white text
- **Large modifier:** Adds 4px extra vertical padding
- Hover: Lightens to #2255e0 with 0.1s transition
- Active: scale(0.98)

### Cards / Panels

- Background: `rgba(8, 8, 20, 0.82)` with `backdrop-filter: blur(24px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border radius: 16px
- Shadow: `0 4px 24px rgba(0, 0, 0, 0.4)`

### Video Background

- Asset: `images/hero-logo-animation.mp4`
- Overlay: `rgba(5, 5, 5, 0.72)` fixed overlay
- All 13 pages share the same fixed video background
- `prefers-reduced-motion` fallback: static dark gradient

### Trust Signals

- Always display in threes: 13+, Top 3, Free
- Pulse animation on numbers (blue glow, 3.5s stagger)
- Trust strip: Black Owned, Family Owned Since 2011, Top 3 Google, Free Estimates

---

## 9. Don'ts

- ❌ Never use red as a CTA or brand color
- ❌ Never use placeholder phone numbers (713) or addresses
- ❌ Never claim unverified certifications (I-CAR, ASE, BBB)
- ❌ Never use emoji as structural icons — SVG only
- ❌ Never open browser windows automatically on the user's behalf
- ❌ Never display lorem ipsum or fake testimonials
- ❌ Never use light backgrounds — brand is dark-mode only

---

## 10. Asset Inventory

| Asset          | Path                             | Status                    |
| -------------- | -------------------------------- | ------------------------- |
| Logo PNG       | `images/logo.png`                | Live                      |
| Favicon SVG    | `images/favicon.svg`             | Live                      |
| Hero Video     | `images/hero-logo-animation.mp4` | Live                      |
| Gallery images | `images/gallery/`                | Live                      |
| OG Image       | `images/og-image.jpg`            | Referenced, verify exists |

---

_Last updated: 2026-06-22_  
_Site: https://redemption-collision.vercel.app_
