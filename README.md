# Walker Web Services — Official Website

> **"Need A Website? Contact Walker Web Services for any kind of website today."**

An ultra-modern, high-converting digital agency website designed directly from the official **Walker Web Services** brand flyer. Engineered with React 19, Vite, and Tailwind CSS v4 for blazing-fast speed, mobile-first responsiveness, and instant lead capture via WhatsApp and interactive quote generation.

---

## 🚀 Key Features

- **Flyer-Faithful Branding**:
  - Stylized Walker 'W' dynamic wing logo in SVG.
  - Signature dark curved contact footer bar featuring WhatsApp (`0537968981`) and Instagram (`@walkerwebservices`).
  - Core Brand Pillars: **Fast Delivery**, **Professionalism**, and **Trustworthy**.
  - Interactive hero mockups featuring floating cards (*"Sales +120%"*, *"Client Message"*, *"New Order"*).
  - Built-in *"View Brand Flyer"* modal showcasing the original flyer design.

- **Interactive Multi-Step Booking & Quote Builder**:
  - **Step 1: Website Type** (Landing Page, Corporate Business, E-Commerce Store, Creative Portfolio, Custom Web App, Redesign).
  - **Step 2: Custom Add-Ons** (MoMo/Card Payment Gateway, Direct WhatsApp Ordering, Custom Logo & Branding, 48h Rush Delivery, SEO Setup).
  - **Step 3: Timeline & Budget Selector**.
  - **Step 4: Contact & Instant WhatsApp Dispatch**: Generates a formatted project summary and immediately opens a WhatsApp conversation with `0537968981` with celebratory confetti!

- **Tiered Pricing Packages**:
  - **Starter Launchpad** (Single-page conversion funnel, 3-5 days delivery)
  - **Business Pro** (Multi-page corporate suite, 5-8 days delivery)
  - **E-Commerce Growth** (Full online store with checkout & WhatsApp ordering, 7-12 days delivery)
  - **Custom Enterprise** (Bespoke web apps & portals)
  - Currency toggle between Ghana Cedis (₵ GHS) and US Dollars ($ USD).

- **Proven Portfolio Showcase & Filter**:
  - Filterable by Business, E-Commerce, Landing Pages, and Web Apps.
  - Conversion metrics and tags on each project card.

- **Why Walker Web Services vs Other Agencies**:
  - Detailed comparison table showing why clients choose Walker for speed, direct WhatsApp communication, clean code, and zero subscription traps.

- **Frequently Asked Questions (FAQ) & Verified Testimonials**.

- **Floating WhatsApp Quick-Action Button**:
  - Pulsing direct WhatsApp launcher with greeting tooltip.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite`)
- **Icons**: Lucide React + Custom Brand SVGs
- **Effects**: Canvas Confetti, CSS Glassmorphism, Animated Gradients

---

## 🏃 Quick Start Guide

### 1. Run Development Server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production:
```bash
npm run build
```
The optimized production output will be in the `dist/` folder.

### 3. Preview Production Build:
```bash
npm run preview
```

---

## ⚙️ Customizing Phone Number, Social Links & Content

All core contact information and brand details are centralized in one file:
`src/data/siteConfig.js`:

```javascript
export const siteConfig = {
  name: "Walker Web Services",
  phone: "0537968981",
  whatsappNumber: "233537968981", // Format: country code + phone without leading 0
  instagramHandle: "@walkerwebservices",
  instagramUrl: "https://instagram.com/walkerwebservices",
  email: "walkerwebservices@gmail.com",
  ...
};
```

---

## 🌐 Free 1-Click Deployment (Vercel / Netlify)

### Option A: Vercel (Recommended)
1. Push this folder to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite and builds it instantly.

### Option B: Netlify
1. Drag and drop the `dist/` folder directly to [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repo.
2. Set build command to `npm run build` and publish directory to `dist`.
