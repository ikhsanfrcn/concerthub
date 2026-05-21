# 🎵 ConcertHub

A full-stack concert ticketing platform where customers can discover and purchase tickets for live music events, and organizers can create and manage their events with ease.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)

---

## Features

- **Dual-role authentication** — Separate flows for Customers and Organizers with email verification
- **Event management** — Organizers create events with multiple sessions, ticket tiers, and cover images
- **Ticket purchasing** — Seat-limited tickets (Regular / Premium / VIP) with Xendit payment gateway
- **Referral system** — Unique referral codes, loyalty points, and referral vouchers
- **Reviews** — Only verified purchasers can rate and review events
- **Organizer dashboard** — Revenue tracking, attendee counts, and event management
- **Customer dashboard** — Order history, profile management, and points/voucher wallet
- **Ticket download** — Downloadable tickets after successful payment
- **Category filtering** — Browse concerts by Pop, Folk, Jazz, Classic, and Rock
- **Artist profiles** — Dedicated artist listings

---

## Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + TypeScript | Runtime & language |
| Express 5 | REST API framework |
| Prisma 6 | ORM |
| PostgreSQL (Supabase) | Database |
| JWT + bcrypt | Authentication |
| Xendit | Payment gateway |
| Nodemailer + Handlebars | Transactional emails |
| Cloudinary + Multer | Image uploads |
| express-validator | Request validation |

### Frontend
| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | React framework |
| TypeScript | Language |
| Tailwind CSS 4 | Styling |
| NextAuth v5 | Session management |
| Axios | HTTP client |
| Formik + Yup | Forms & validation |
| Recharts | Dashboard charts |
| Framer Motion | Animations |
| React Toastify | Notifications |

---

## Project Structure

```
concerthub/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma         # Database schema
│   │   └── migrations/           # Migration history
│   ├── src/
│   │   ├── controller/           # Route handlers
│   │   ├── routers/              # Express routers
│   │   ├── middleware/           # Auth & validation middleware
│   │   ├── services/             # Business logic
│   │   ├── templates/            # Handlebars email templates
│   │   └── index.ts              # App entry point (port 8000)
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/                  # Next.js App Router pages
    │   │   ├── page.tsx          # Home
    │   │   ├── concert/[id]/     # Concert detail
    │   │   ├── dashboard/        # User & organizer dashboard
    │   │   ├── login/            # Login
    │   │   ├── register/         # Registration
    │   │   ├── tickets/          # Ticket selection
    │   │   ├── verify/           # Email verification
    │   │   └── contact/          # Contact page
    │   └── components/           # Reusable UI components
    ├── .env.local
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or a [Supabase](https://supabase.com) project)
- [Cloudinary](https://cloudinary.com) account
- [Xendit](https://xendit.co) account
- Gmail account with an App Password enabled

---

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```

5. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:8000/api`.

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (pooled, via PgBouncer) |
| `DIRECT_URL` | PostgreSQL direct connection string (for migrations) |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `GMAIL_USER` | Gmail address used for sending emails |
| `GMAIL_PASS` | Gmail App Password |
| `BASE_URL_FRONTEND` | Frontend base URL (used in email verification links) |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_KEY` | Cloudinary API key |
| `CLOUD_SECRET` | Cloudinary API secret |
| `SECRET_API_KEY` | Xendit secret API key |
| `XENDIT_CALLBACK_TOKEN` | Xendit webhook verification token |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|---|---|
| `AUTH_SECRET` | NextAuth session signing secret |
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

---

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new customer |
| POST | `/api/auth/register/organizer` | Register a new organizer |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/verify/:token` | Verify email |
| GET | `/api/events` | List all events |
| GET | `/api/events/:id` | Get event details |
| POST | `/api/events` | Create an event (organizer) |
| GET | `/api/event-session/:eventId` | Get sessions for an event |
| POST | `/api/event-session` | Create an event session (organizer) |
| GET | `/api/tickets/:sessionId` | Get tickets for a session |
| POST | `/api/tickets` | Create a ticket tier (organizer) |
| POST | `/api/transactions` | Create a transaction (purchase) |
| GET | `/api/transactions/:id` | Get transaction details |
| POST | `/api/transactions/webhook` | Xendit payment webhook |
| GET | `/api/users/profile` | Get current user profile |
| PATCH | `/api/users/profile` | Update user profile |
| GET | `/api/reviews/:eventId` | Get reviews for an event |
| POST | `/api/reviews` | Submit a review |
| GET | `/api/voucher` | Get user vouchers |
| GET | `/api/organizer/events` | Get organizer's events |
| GET | `/api/artists` | List all artists |

---

## Database Schema

The main models in the database:

- **User** — Customers and organizers with profile info, referral code, and avatar
- **Event** — Concert events with category, image, and revenue tracking
- **EventSession** — Individual sessions per event (date, time, location)
- **Ticket** — Ticket tiers per session (Regular / Premium / VIP) with seat availability
- **Transaction** — Purchase records linked to Xendit invoices (PENDING / PAID / EXPIRED / CANCEL)
- **PurchasedTicket** — Confirmed tickets after successful payment
- **Promotion** — Date-based promo codes with discount values
- **Point** — Loyalty points earned via referrals (with expiry)
- **Voucher** — Referral vouchers with percentage discounts
- **ReferralUsage** — Tracks referral relationships between users
- **Review** — Event ratings and comments (requires a purchased ticket)
- **Artist** — Artist profiles

---
