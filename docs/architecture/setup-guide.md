# Development Setup Guide

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Git

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd shyara_co_in
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
# DATABASE_URL="postgresql://user:password@localhost:5432/shyara"

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Backend will run on `http://localhost:4000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Edit .env.local
# NEXT_PUBLIC_API_URL=http://localhost:4000

# Start development server
npm run dev
```

Frontend will run on `http://localhost:3000`

---

## Docker Setup (Alternative)

### Prerequisites
- Docker and Docker Compose

### Steps

1. **Create environment files:**
   - Copy `backend/.env.example` to `backend/.env`
   - Copy `frontend/.env.example` to `frontend/.env.local`
   - Update with your values

2. **Start services:**
```bash
docker-compose up -d
```

3. **Run migrations:**
```bash
docker-compose exec backend npx prisma migrate deploy
```

4. **Access:**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:4000`
   - Database: `localhost:5432`

---

## Database Management

### Prisma Studio

View and edit database records:

```bash
cd backend
npx prisma studio
```

### Create Migration

```bash
cd backend
npx prisma migrate dev --name migration_name
```

### Reset Database

```bash
cd backend
npx prisma migrate reset
```

---

## Code Quality

### Linting

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

### Formatting

```bash
# Backend
cd backend
npm run format

# Frontend
cd frontend
npm run format
```

---

## Testing

### Backend Health Check

```bash
curl http://localhost:4000/health
```

### Contact Form Test

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

---

## Troubleshooting

### Database Connection Issues

- Verify PostgreSQL is running
- Check DATABASE_URL in `.env`
- Ensure database exists: `createdb shyara`

### Port Already in Use

- Change PORT in backend `.env`
- Update NEXT_PUBLIC_API_URL in frontend `.env.local`

### Prisma Client Not Generated

```bash
cd backend
npx prisma generate
```

### Module Not Found Errors

```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json .next
npm install
```

---

## Production Deployment

See deployment guides in:
- `/docs/architecture/deployment.md` (if created)
- README.md for cloud deployment options

