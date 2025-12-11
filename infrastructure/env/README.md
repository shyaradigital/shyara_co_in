# Environment Variables

This directory contains example environment variable files for different deployment scenarios.

## Backend Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in the values:

- `DATABASE_URL`: PostgreSQL connection string
- `RESEND_API_KEY`: Your Resend API key for email service
- `EMAIL_FROM`: Email address to send from
- `EMAIL_TO`: Email address to receive contact form submissions
- `CORS_ORIGIN`: Frontend URL for CORS configuration

## Frontend Environment Variables

Copy `frontend/.env.example` to `frontend/.env.local` and configure:

- `NEXT_PUBLIC_API_URL`: Backend API URL
  - Local development: `http://localhost:4000`
  - Docker: `http://backend:4000` (internal) or `http://localhost:4000` (external)
  - Cloud deployment: `https://api.shyara.co.in`

## Cloud Deployment Notes

### Vercel (Frontend)
- Add environment variables in Vercel dashboard
- `NEXT_PUBLIC_API_URL` should point to your backend API

### Render/Railway (Backend)
- Add environment variables in service settings
- Use managed PostgreSQL service connection string
- Set `CORS_ORIGIN` to your frontend domain

### Database (Neon/Supabase)
- Use the connection string provided by the service
- Update `DATABASE_URL` in backend environment

