# 🚀 READY TO START!

Everything is set up! Just follow these simple steps:

## Step 1: Update Database Connection

**IMPORTANT:** Before running, you must update the database connection:

1. Open `backend\.env` (it will be created automatically from the example)
2. Find this line:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/shyara?schema=public"
   ```
3. Replace with your PostgreSQL credentials:
   ```
   DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/shyara?schema=public"
   ```

### Don't have PostgreSQL?

**Quick Setup Options:**

**Option A: Install PostgreSQL**
- Download: https://www.postgresql.org/download/
- After installation, create database: `createdb shyara`

**Option B: Use Docker** (if you have Docker installed)
```bash
docker run --name shyara-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=shyara -p 5432:5432 -d postgres:15
```
Then use: `DATABASE_URL="postgresql://postgres:password@localhost:5432/shyara?schema=public"`

## Step 2: Run the Website

**Just double-click `start.bat` or `run.bat`!**

That's it! The script will:
- ✅ Create `.env` files automatically
- ✅ Install all dependencies
- ✅ Set up the database
- ✅ Start both servers

## Step 3: Open Your Browser

Once running, open:
- **Website:** http://localhost:3000
- **API:** http://localhost:4000
- **Health Check:** http://localhost:4000/health

## 🎉 That's It!

Just update the `DATABASE_URL` in `backend\.env` and run `start.bat`!

---

## Troubleshooting

**Database connection error?**
- Make sure PostgreSQL is running
- Check your `DATABASE_URL` in `backend\.env`
- Verify database `shyara` exists

**Port already in use?**
- Change `PORT=4000` in `backend\.env` to a different port
- Update `NEXT_PUBLIC_API_URL` in `frontend\.env.local` accordingly

**Need help?** Check `QUICK_START.md` for more details.

