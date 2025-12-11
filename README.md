# Shyara (OPC) Pvt. Ltd. — Main Website

A production-grade SaaS-standard website built with Next.js 14 and Express + TypeScript, featuring a modern, premium UI and robust backend architecture.

## 🚀 Quick Start - Run Locally

### Easiest Way (Windows)
**Just double-click `start.bat` or `run.bat` in the root directory!**

Or run from command line:
```bash
.\start.ps1
```

### Using npm (All Platforms)
```bash
# First time setup (installs dependencies)
npm run setup

# Start everything
npm start
# or
npm run start:local
```

### Manual Start
```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm install
npm run dev
```

**Access the website at:** http://localhost:3000

---

## 🏗️ Architecture

```
shyara-root/
├── backend/          # Express + TypeScript API
├── frontend/         # Next.js 14 App Router
├── infrastructure/   # Docker, nginx, scripts
└── docs/            # Documentation
```

## 🚀 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** + **ShadCN UI**
- **Framer Motion** (animations)
- **Axios** (API client)
- **Zod** (validation)

### Backend
- **Express** + **TypeScript**
- **Prisma** ORM
- **PostgreSQL** database
- **Resend** (email service)
- **Zod** (validation)
- **Helmet**, **CORS**, **express-rate-limit**

## 📦 Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

## 📝 Environment Setup

### Backend
1. Copy `backend/.env.example` to `backend/.env`
2. Update with your database credentials:
```
DATABASE_URL="postgresql://user:password@localhost:5432/shyara"
RESEND_API_KEY="your_resend_api_key"
```

### Frontend
1. Copy `frontend/.env.example` to `frontend/.env.local`
2. Update if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 🐳 Docker Deployment (Optional)

```bash
docker-compose up -d
```

## ☁️ Cloud Deployment

### Frontend (Vercel)
- Deploy to Vercel with environment variables configured

### Backend (Render/Railway)
- Deploy Express app with PostgreSQL database
- Configure environment variables

### Database (Neon/Supabase)
- Use managed PostgreSQL service
- Update DATABASE_URL in backend environment

## 📁 Project Structure

### Backend
```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── modules/         # Feature modules
│   │   ├── contact/
│   │   ├── analytics/
│   │   └── mailer/
│   ├── common/          # Shared utilities
│   ├── middlewares/     # Express middlewares
│   └── utils/           # Helper functions
├── prisma/
│   └── schema.prisma    # Database schema
└── package.json
```

### Frontend
```
frontend/
├── app/
│   ├── _components/     # Reusable UI components
│   ├── _sections/       # Page sections
│   ├── _layouts/        # Layout components
│   ├── _lib/            # Utilities
│   ├── _hooks/          # Custom hooks
│   ├── _services/       # API client wrappers
│   ├── page.tsx         # Home page
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── careers/
└── public/
```

## 🔧 Development

### Code Quality
- ESLint + Prettier configured
- Husky pre-commit hooks
- Commitlint for commit messages

### Scripts

**Root:**
- `npm start` or `npm run start:local` - Start both backend and frontend
- `npm run stop` - Stop all services
- `npm run setup` - Install all dependencies and setup database

**Backend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prisma:studio` - Open Prisma Studio

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages

1. **Home** - Landing page with hero, divisions, and CTAs
2. **About** - Mission, vision, and company story
3. **Services** - Overview of Shyara's services
4. **Contact** - Contact form and information
5. **Careers** - Career opportunities

## 🎨 Design System

- **Primary Color**: #111111
- **Accent Color**: #6C47FF
- **Background**: #F9FAFB
- **Muted Grey**: #9CA3AF

## 📚 Documentation

See `/docs` directory for:
- API specifications
- UI component library
- Architecture diagrams
- Deployment guides

## 🤝 Contributing

1. Follow the code style guidelines
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

Copyright © Shyara (OPC) Pvt. Ltd.
