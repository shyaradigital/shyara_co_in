# Quick Start Guide

## Prerequisites

1. **Node.js 18+** - [Download here](https://nodejs.org/)
2. **PostgreSQL 14+** - [Download here](https://www.postgresql.org/download/)
3. **Git** (optional)

## Setup Steps

### 1. Database Setup

First, create a PostgreSQL database:

```sql
CREATE DATABASE shyara;
```

Or using command line:
```bash
createdb shyara
```

### 2. Environment Configuration

The start script will automatically create `.env` files from examples, but you need to edit them:

**Backend** (`backend/.env`):
- Update `DATABASE_URL` with your PostgreSQL credentials
- Optionally add `RESEND_API_KEY` if you want email functionality

**Frontend** (`frontend/.env.local`):
- Usually doesn't need changes (defaults to `http://localhost:4000`)

### 3. Run the Website

**Windows:**
- Double-click `start.bat` or `run.bat`

**Command Line:**
```bash
.\start.bat
```

**Or using npm:**
```bash
npm start
```

### 4. Access the Website

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Health Check:** http://localhost:4000/health

## Troubleshooting

### Database Connection Error

Make sure:
1. PostgreSQL is running
2. Database `shyara` exists
3. `DATABASE_URL` in `backend/.env` is correct

### Port Already in Use

If ports 3000 or 4000 are already in use:
- Change `PORT` in `backend/.env`
- Update `NEXT_PUBLIC_API_URL` in `frontend/.env.local`

### Missing Dependencies

Run manually:
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Prisma Errors

If database migrations fail:
```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

## What Gets Installed

- All npm dependencies for root, backend, and frontend
- Prisma client generation
- Database migrations
- Both servers start automatically

## Stopping the Servers

Press `Ctrl+C` in the terminal, or run:
```bash
npm run stop
```

