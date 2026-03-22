# Aradana Caterers Website

A premium, high-performance web platform for a luxury catering service.

---

## Overview

A modern, responsive web application built to showcase luxury catering services. The site features a dark-mode aesthetic, smooth animations, and an optimized user journey from menu browsing to booking.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 14+ (App Router)            |
| Library     | React                               |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS                        |
| Animations  | Framer Motion                       |
| Analytics   | Google Analytics (GA4)              |

---

## Key Features

- **Luxury Hero Section** — Parallax effects and high-fidelity brand imagery.
- **Mobile-First Design** — Fully responsive UI for seamless browsing on any device.
- **Dynamic Menus** — Detailed sections for menus, events, and about us.
- **Performance Optimized** — Lightning-fast loading using `next/image` and SEO best practices.
- **SEO & Analytics** — Integrated Google Search Console and GA4 tracking.
- **Secure Hosting** — SSL-protected deployment via Vercel.

---

## Project Structure

```
src/
  ├── app/            # Next.js App Router (layouts & pages)
  ├── components/     # Reusable UI and section components
  └── public/         # Optimized assets and favicons
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Deployment & CI/CD

- **Platform:** Deployed on [Vercel](https://vercel.com).
- **Automation:** GitHub-integrated CI/CD pipeline with automatic deployment on push.
- **Domain:** [aradanacaterers.com](https://aradanacaterers.com) with global CDN.
