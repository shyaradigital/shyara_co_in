# Architecture Overview

## System Architecture

```
┌─────────────┐
│   Client    │
│  (Browser)  │
└──────┬──────┘
       │
       │ HTTPS
       │
┌──────▼─────────────────────────────────────┐
│         Frontend (Next.js 14)              │
│  ┌──────────────────────────────────────┐  │
│  │  App Router (SSR/ISR)                │  │
│  │  - Pages                              │  │
│  │  - Components                         │  │
│  │  - Sections                           │  │
│  └──────────────────────────────────────┘  │
└──────┬─────────────────────────────────────┘
       │
       │ REST API
       │
┌──────▼─────────────────────────────────────┐
│      Backend (Express + TypeScript)        │
│  ┌──────────────────────────────────────┐  │
│  │  Modules                              │  │
│  │  - Contact                            │  │
│  │  - Analytics                          │  │
│  │  - Mailer                             │  │
│  └──────────────────────────────────────┘  │
│  ┌──────────────────────────────────────┐  │
│  │  Middleware                           │  │
│  │  - Helmet (Security)                  │  │
│  │  - CORS                               │  │
│  │  - Rate Limiting                      │  │
│  │  - Error Handling                     │  │
│  └──────────────────────────────────────┘  │
└──────┬─────────────────────────────────────┘
       │
       │ SQL
       │
┌──────▼─────────────────────────────────────┐
│      Database (PostgreSQL)                 │
│  ┌──────────────────────────────────────┐  │
│  │  Tables                               │  │
│  │  - contacts                           │  │
│  │  - analytics                          │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
       │
       │ API
       │
┌──────▼─────────────────────────────────────┐
│      External Services                     │
│  ┌──────────────────────────────────────┐  │
│  │  Resend (Email)                      │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + ShadCN UI
- **Animations:** Framer Motion
- **API Client:** Axios
- **Validation:** Zod

### Backend
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Email:** Resend
- **Validation:** Zod
- **Logging:** Pino

### Infrastructure
- **Containerization:** Docker
- **Reverse Proxy:** Nginx (optional)
- **Deployment:** Vercel (frontend), Render/Railway (backend)

---

## Data Flow

### Contact Form Submission

1. User fills form on frontend
2. Frontend validates with Zod
3. POST request to `/api/contact`
4. Backend validates with Zod schema
5. Rate limiting check
6. Save to PostgreSQL via Prisma
7. Send email notification via Resend (async)
8. Return success response

### Analytics Tracking

1. Page view detected on frontend
2. POST request to `/api/analytics/track`
3. Backend validates and stores in PostgreSQL
4. Return success response (fail silently on error)

---

## Database Schema

### Contacts Table
```sql
- id: String (CUID)
- name: String
- email: String (indexed)
- phone: String (nullable)
- message: String
- createdAt: DateTime
- updatedAt: DateTime
```

### Analytics Table
```sql
- id: String (CUID)
- page: String (indexed)
- device: String (nullable)
- timestamp: DateTime (indexed)
- metadata: JSON (nullable)
```

---

## Security

- **Helmet:** Security headers
- **CORS:** Configured for specific origins
- **Rate Limiting:** Per-endpoint limits
- **Input Validation:** Zod schemas on all inputs
- **SQL Injection:** Prevented by Prisma ORM
- **XSS:** Prevented by React's built-in escaping

---

## Performance

- **Frontend:**
  - SSR/ISR for optimal loading
  - Image optimization with next/image
  - Code splitting
  - Font optimization

- **Backend:**
  - Connection pooling (Prisma)
  - Async email sending
  - Efficient database queries

---

## Deployment

### Development
- Local PostgreSQL
- Frontend: `localhost:3000`
- Backend: `localhost:4000`

### Production (Docker)
- Docker Compose orchestrates all services
- Nginx reverse proxy (optional)
- Persistent PostgreSQL volume

### Production (Cloud)
- Frontend: Vercel
- Backend: Render/Railway
- Database: Neon/Supabase
- Environment variables configured per service

