# Shyara Local Development Startup Script
# This script starts the backend and frontend services

Write-Host "🚀 Starting Shyara Development Environment..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check if PostgreSQL is running (optional check)
Write-Host "📦 Checking prerequisites..." -ForegroundColor Yellow

# Function to check if a port is in use
function Test-Port {
    param([int]$Port)
    $connection = Test-NetConnection -ComputerName localhost -Port $Port -InformationLevel Quiet -WarningAction SilentlyContinue
    return $connection
}

# Check if ports are already in use
$backendPort = 4000
$frontendPort = 3000

if (Test-Port -Port $backendPort) {
    Write-Host "⚠️  Port $backendPort is already in use. Backend may already be running." -ForegroundColor Yellow
}

if (Test-Port -Port $frontendPort) {
    Write-Host "⚠️  Port $frontendPort is already in use. Frontend may already be running." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔧 Installing dependencies..." -ForegroundColor Yellow

# Install root dependencies
if (Test-Path "package.json") {
    Write-Host "  Installing root dependencies..." -ForegroundColor Gray
    npm install --silent
}

# Install backend dependencies
if (Test-Path "backend/package.json") {
    Write-Host "  Installing backend dependencies..." -ForegroundColor Gray
    Set-Location backend
    npm install --silent
    Set-Location ..
}

# Install frontend dependencies
if (Test-Path "frontend/package.json") {
    Write-Host "  Installing frontend dependencies..." -ForegroundColor Gray
    Set-Location frontend
    npm install --silent
    Set-Location ..
}

Write-Host ""
Write-Host "🗄️  Setting up database..." -ForegroundColor Yellow

# Generate Prisma client and run migrations
if (Test-Path "backend/prisma/schema.prisma") {
    Set-Location backend
    Write-Host "  Generating Prisma client..." -ForegroundColor Gray
    npx prisma generate --silent
    
    Write-Host "  Running database migrations..." -ForegroundColor Gray
    npx prisma migrate dev --name init --skip-seed 2>&1 | Out-Null
    Set-Location ..
}

Write-Host ""
Write-Host "🎯 Starting services..." -ForegroundColor Green
Write-Host ""

# Start backend in a new window
Write-Host "  Starting Backend (http://localhost:$backendPort)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host '🔷 Backend Server' -ForegroundColor Cyan; Write-Host ''; npm run dev" -WindowStyle Normal

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start frontend in a new window
Write-Host "  Starting Frontend (http://localhost:$frontendPort)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; Write-Host '🔷 Frontend Server' -ForegroundColor Cyan; Write-Host ''; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Development environment started!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Services:" -ForegroundColor Yellow
Write-Host "   Backend:  http://localhost:$backendPort" -ForegroundColor White
Write-Host "   Frontend: http://localhost:$frontendPort" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tip: Close the PowerShell windows to stop the services" -ForegroundColor Gray
Write-Host ""

