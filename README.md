<div align="center">

<img src="./public/logo.png" alt="Fonel Corp logo" width="140" />

# Fonel - 24/7 Roadside Assistance

**A production-grade, conversion-focused web platform that connects stranded drivers in Calgary & Edmonton with on-demand roadside help — in one tap.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Emotion](https://img.shields.io/badge/Emotion-11-D26AC2?style=for-the-badge&logo=styledcomponents&logoColor=white)](https://emotion.sh/)
[![Motion](https://img.shields.io/badge/Motion-12-FFF312?style=for-the-badge&logo=framer&logoColor=black)](https://motion.dev/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4-FF6C37?style=for-the-badge&logo=maildotru&logoColor=white)](https://www.emailjs.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

<br />

### [🌐 Live Demo / Open App — fonel.ca](https://www.fonel.ca/)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Business Impact](#-business-impact)
- [Key Features & UI/UX Highlights](#-key-features--uiux-highlights)
- [Project Screenshots](#️-project-screenshots)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Author & Contact](#-author--contact)

---

## 🚗 Overview

**Fonel** is a live, client-facing web platform for **Fonel Corp**, a 24/7 roadside assistance company in **Calgary and Edmonton, Alberta, Canada**. The audience is drivers who need help right now: a dead battery in a parking lot, a flat tire on the highway, a car that won't start on a cold morning. The interface is built for them.

The platform is built **mobile-first**. Most visitors arrive on their phones, often under stress, so every screen does one job: **turn an urgent visit into a call, a WhatsApp message, or a booked service as fast as possible.** It is written in **React 19 + TypeScript** and bundled with **Vite**. It puts response speed, accessibility, SEO and clear calls to action ahead of decoration.

## 📈 Business Impact

- **Zero-friction contact:** Persistent floating **Call** and **WhatsApp** buttons stay on screen at every scroll position. A customer is never more than one tap from a technician.
- **Lead capture around the clock:** A structured, multi-step booking flow and a validated contact form send requests straight to the business inbox through EmailJS. No backend is needed and no lead is lost outside business hours.
- **Local search visibility:** Per-section SEO metadata (via `react-helmet`), a sitemap, and copy aimed at service-area keywords ("roadside assistance Calgary/Edmonton") help the site rank where customers search.
- **Trust signals:** Service-area maps, a "Why Choose Us" section and consistent branding build credibility within the first few seconds of a visit.

## ✨ Key Features & UI/UX Highlights

### 🏁 Hero Section — Instant Value Proposition
- A bold **"24/7 Reliable Roadside Assistance"** headline with the **Calgary & Edmonton** service area right below it.
- A high-contrast **"Call now!"** CTA that opens the phone dialer directly (`tel:` link).
- A custom illustrated hero in the brand's navy-and-amber palette, plus a short value-proposition card covering battery boosts, tire changes, lockouts and emergency fuel delivery.

### 🔧 Services Catalog
- Animated service cards for **Battery Boost**, **Battery Replacement** and **Tire Change**, each with a custom illustration, a clear benefit statement and a dedicated **"Book Now!"** button.
- Scroll-triggered entrance animations built with Motion's `useInView` for a polished, low-cost feel.

### 📅 Multi-Step Booking Wizard
- A guided **stepper flow** (Owner → Vehicle → Appointment) built on MUI's Stepper with custom connectors, icons and step styling.
- **Date/time scheduling** with MUI X Date Pickers + Day.js.
- Per-step validation with **React Hook Form**, inline error messages, a completion screen and a cancel-confirmation modal.
- A dedicated mobile layout: on small screens, a selected-service summary and bottom navigation bar replace the desktop layout.

### 🗺️ Areas Covered
- Illustrated coverage maps for the **Calgary service area** (Airdrie, Cochrane, Chestermere, Okotoks) and the **Edmonton service area** (St. Albert, Sherwood Park, Fort Saskatchewan, Stony Plain), so users can confirm coverage at a glance.

### 🏆 Why Choose Us
- Reason cards with friendly technician illustrations that highlight 24/7 availability and the customer-first service model.

### ✉️ Contact Section
- A validated contact form (Name, Email, Phone, Comment, Service selector) delivered through **EmailJS**.
- Quick-contact tiles for **phone**, **email** and **WhatsApp** (`wa.me` deep link).

### 📱 Global UX & Performance
- **Floating action buttons** (WhatsApp + Call) that react to scroll position through Motion values.
- A sticky navbar with smooth anchor navigation and a dedicated **mobile menu**.
- A full **footer** with contact info, coverage summary, site links and a **Privacy Policy** modal.
- **Component-driven architecture:** reusable `Button`, `Input`, `Select`, `Typography` and Motion-wrapped MUI primitives (`MotionBox`, `MotionCard`, `MotionGrid`…) keep the UI consistent and easy to maintain.
- **SEO-ready:** per-section `<Helmet>` metadata, Open Graph preview image and `sitemap.xml`.

---

## 🖼️ Project Screenshots

<div align="center">

<img src="./docs/Screenshot%202026-10-26%20132316.png" alt="Fonel hero section on desktop" width="900" />
<p><em><b>Hero Section</b> — Bold 24/7 value proposition for Calgary & Edmonton, a high-contrast "Call now!" CTA and a custom navy-and-amber illustration, followed by a summary of core services.</em></p>

<br />

<img src="./docs/Screenshot%202026-10-26%20132329.png" alt="Fonel services section" width="900" />
<p><em><b>Services Catalog</b> — Illustrated cards for Battery Boost, Battery Replacement and Tire Change, each with a "Book Now!" button that opens the booking wizard. The floating WhatsApp and Call buttons stay visible at all times.</em></p>

<br />

<img src="./docs/Screenshot%202026-10-26%20132338.png" alt="Fonel areas covered section" width="900" />
<p><em><b>Areas Covered</b> — Illustrated service-area maps for Calgary (Airdrie, Cochrane, Chestermere, Okotoks) and Edmonton (St. Albert, Sherwood Park, Fort Saskatchewan, Stony Plain), leading into the "Why Choose Us" section.</em></p>

<br />

<img src="./docs/Screenshot%202026-10-26%20132347.png" alt="Fonel contact form and footer" width="900" />
<p><em><b>Contact & Footer</b> — A validated contact form with a service selector, quick-contact tiles for phone, email and WhatsApp, and a footer with coverage info, navigation and the Privacy Policy.</em></p>

</div>

---

## 🛠️ Technologies Used

### Core Framework

| Technology | Version | Why it was chosen |
| --- | --- | --- |
| **React** | 19 | Component-based UI with the latest concurrent rendering features for a fast, responsive interface. |
| **React DOM** | 19 | Renders the React tree to the browser with efficient reconciliation. |
| **TypeScript** | ~5.8 | Static typing catches bugs at compile time and keeps forms, steps and constants type-safe. |

### Styling & UI

| Technology | Version | Why it was chosen |
| --- | --- | --- |
| **Material UI (MUI)** | 7 | Accessible, production-tested components (Grid, Stepper, Modal, Select) that speed up delivery. |
| **MUI Icons Material** | 7 | A consistent icon set for contact actions, steps and navigation. |
| **Emotion** (`react` + `styled`) | 11 | The CSS-in-JS engine behind MUI, used for theme-aware custom styled components. |
| **Motion** | 12 | Smooth, GPU-accelerated scroll and entrance animations, plus the scroll-aware floating buttons. |
| **Custom CSS** | — | Section-level stylesheets for fine-grained, brand-specific layout control. |

### Components & Utilities

| Technology | Version | Why it was chosen |
| --- | --- | --- |
| **React Hook Form** | 7 | Fast, uncontrolled form handling with few re-renders, which matters for multi-step validation on mobile. |
| **MUI X Date Pickers** | 8 | Accessible date and time selection for scheduling appointments. |
| **Day.js** | 1.11 | A small (~2 kB) date library that works as the date-picker adapter. |
| **EmailJS** (`@emailjs/browser`) | 4 | Sends contact and booking emails straight from the client, with no backend to maintain. |
| **React Helmet** | 6 | Manages `<head>` metadata per section for SEO and social sharing. |

### Build & Deployment Tools

| Technology | Version | Why it was chosen |
| --- | --- | --- |
| **Vite** | 6 | Near-instant dev server with HMR and optimized, tree-shaken production builds. |
| **@vitejs/plugin-react** | 4 | Fast Refresh and JSX transform for React in Vite. |
| **ESLint** + **typescript-eslint** | 9 / 8 | Keeps code quality consistent and enforces React Hooks rules. |
| **eslint-plugin-react-hooks / react-refresh** | 5 / 0.4 | Catches hook-dependency bugs and keeps HMR safe. |

---

## 📂 Project Structure

```text
fonelcorp/
├── docs/                  # README screenshots
├── public/
│   ├── images/            # Service, map and illustration assets
│   ├── logo.png
│   ├── preview.png        # Open Graph preview image
│   └── sidemap.xml        # Sitemap for search engines
├── src/
│   ├── components/
│   │   ├── AreasCovered/  # Calgary & Edmonton service-area maps
│   │   ├── Button/        # Generic, Call Now & WhatsApp floating buttons
│   │   ├── CardService/   # Animated service cards
│   │   ├── ChooseUs/      # "Why Choose Us" section
│   │   ├── ContactForm/   # EmailJS-powered contact form
│   │   ├── HeroTitle/     # Hero section
│   │   ├── MenuMobile/    # Mobile navigation
│   │   ├── MotionComponents/ # Motion-wrapped MUI primitives
│   │   ├── Navbar/  Footer/  Layout/
│   │   ├── SeoHelmet/     # Per-section SEO metadata
│   │   └── Stepper/       # Multi-step booking wizard (Owner → Vehicle → Appointment)
│   ├── const/             # Static content, links & step definitions
│   ├── hooks/             # Custom hooks (e.g. useSeoHelmet)
│   ├── helper/  func/  types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18` (LTS recommended, required by Vite 6)
- **npm** `>= 9`
- A free [EmailJS](https://www.emailjs.com/) account (only needed to test form submissions locally)

### 1. Clone the repository

```bash
git clone https://github.com/Marcobc-exe/fonelcorp.git
cd fonelcorp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with your EmailJS credentials:

```bash
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_contact_template_id
VITE_SERVICE_EMAIL_TEMPLATE_ID=your_booking_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

The app runs at `http://localhost:5173` with hot module replacement.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR. |
| `npm run build` | Type-checks the project (`tsc -b`) and creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for a final check. |
| `npm run lint` | Runs ESLint across the codebase. |

---

## 👨‍💻 Author & Contact

<div align="center">

### **Marco Bravo** — Front-End Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-marcobc--exe.github.io-1E3A5F?style=for-the-badge&logo=githubpages&logoColor=white)](https://marcobc-exe.github.io/portfolio/)
[![Email](https://img.shields.io/badge/Email-marco.bravo.dev%40gmail.com-F39C2B?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marco.bravo.dev@gmail.com)

📍 **Location:** Santiago, Chile (CLT, UTC−3 / UTC−4) — overlaps US & Canada EST/CST business hours

<br />

*Built with ❤️ to get Albertan drivers back on the road — anytime, anywhere.*

</div>
