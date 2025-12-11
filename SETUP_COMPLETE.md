# ✅ Setup Complete!

Everything has been configured. You're ready to run the website locally!

## 🚀 Quick Start

**Just double-click `start.bat` or `run.bat`**

That's it! The script will:
1. ✅ Install all dependencies
2. ✅ Set up the database
3. ✅ Start both servers

## ⚠️ Important: Database Setup Required

Before running, you **MUST** update the database connection in `backend\.env`:

1. Open `backend\.env` in a text editor
2. Find this line:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/shyara?schema=public"
   ```
3. Replace with your PostgreSQL credentials:
   ```
   DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/shyara?schema=public"
   ```

### If you don't have PostgreSQL yet:

**Option 1: Install PostgreSQL**
- Download from: https://www.postgresql.org/download/
- Create database: `createdb shyara`

**Option 2: Use Docker (if you have Docker)**
```bash
docker run --name shyara-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=shyara -p 5432:5432 -d postgres:15
```
Then use: `DATABASE_URL="postgresql://postgres:password@localhost:5432/shyara?schema=public"`

## 📍 After Running

Once you run `start.bat`, the website will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Health Check:** http://localhost:4000/health

## 🎉 That's It!

Just update the `DATABASE_URL` in `backend\.env` and run `start.bat`!

