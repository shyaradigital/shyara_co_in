# Shyara Local Development - Single Start Script
# Run this script to start everything locally

$ErrorActionPreference = "Stop"

# Change to the script's directory (project root)
$ScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Shyara Website Locally" -ForegroundColor Cyan
Write-Host "  Working Directory: $ScriptRoot" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
try {
    $null = Get-Command node -ErrorAction Stop
} catch {
    Write-Host "[ERROR] Node.js not found. Please install Node.js 18+ first." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Setup environment files first
Write-Host "[0/5] Setting up environment files..." -ForegroundColor Yellow
$BackendEnv = Join-Path $ScriptRoot "backend\.env"
$BackendEnvExample = Join-Path $ScriptRoot "backend\.env.example"
$FrontendEnv = Join-Path $ScriptRoot "frontend\.env.local"
$FrontendEnvExample = Join-Path $ScriptRoot "frontend\.env.example"

if (-not (Test-Path $BackendEnv)) {
    if (Test-Path $BackendEnvExample) {
        Write-Host "  Creating backend\.env from example..." -ForegroundColor Gray
        Copy-Item $BackendEnvExample $BackendEnv
        Write-Host "  [IMPORTANT] Please edit backend\.env and update DATABASE_URL with your PostgreSQL credentials!" -ForegroundColor Yellow
    } else {
        Write-Host "  [WARNING] backend\.env.example not found." -ForegroundColor Yellow
    }
}

if (-not (Test-Path $FrontendEnv)) {
    if (Test-Path $FrontendEnvExample) {
        Write-Host "  Creating frontend\.env.local from example..." -ForegroundColor Gray
        Copy-Item $FrontendEnvExample $FrontendEnv
    } else {
        Write-Host "  [WARNING] frontend\.env.example not found." -ForegroundColor Yellow
    }
}
Write-Host ""

Write-Host "[1/5] Installing root dependencies..." -ForegroundColor Yellow
try {
    Set-Location $ScriptRoot
    npm install
} catch {
    Write-Host "[ERROR] Failed to install root dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[2/5] Installing backend dependencies..." -ForegroundColor Yellow
try {
    $BackendPath = Join-Path $ScriptRoot "backend"
    Push-Location $BackendPath
    npm install
    Pop-Location
} catch {
    Write-Host "[ERROR] Failed to install backend dependencies" -ForegroundColor Red
    if ((Get-Location).Path -ne $ScriptRoot) { Pop-Location }
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[3/5] Installing frontend dependencies..." -ForegroundColor Yellow
try {
    $FrontendPath = Join-Path $ScriptRoot "frontend"
    Push-Location $FrontendPath
    npm install
    Pop-Location
} catch {
    Write-Host "[ERROR] Failed to install frontend dependencies" -ForegroundColor Red
    if ((Get-Location).Path -ne $ScriptRoot) { Pop-Location }
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[4/5] Setting up database..." -ForegroundColor Yellow
$BackendPath = Join-Path $ScriptRoot "backend"
$PrismaSchema = Join-Path $BackendPath "prisma\schema.prisma"
if (Test-Path $PrismaSchema) {
    try {
        Push-Location $BackendPath
        Write-Host "  Generating Prisma client..." -ForegroundColor Gray
        npx prisma generate
        
        Write-Host "  Running migrations..." -ForegroundColor Gray
        npx prisma migrate dev --name init --skip-seed
        Pop-Location
    } catch {
        Write-Host "[WARNING] Database setup failed, continuing anyway..." -ForegroundColor Yellow
        if ((Get-Location).Path -ne $ScriptRoot) { Pop-Location }
    }
}

Write-Host "[5/5] Starting services..." -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Services will be available at:" -ForegroundColor Cyan
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend:  http://localhost:4000" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Return to project root
Set-Location $ScriptRoot

# Verify .env files exist
$BackendEnv = Join-Path $ScriptRoot "backend\.env"
$FrontendEnv = Join-Path $ScriptRoot "frontend\.env.local"
$FrontendEnvExample = Join-Path $ScriptRoot "frontend\.env.example"

if (-not (Test-Path $BackendEnv)) {
    Write-Host "[ERROR] backend\.env not found! Please create it from backend\.env.example" -ForegroundColor Red
    Write-Host "[ERROR] Update DATABASE_URL with your PostgreSQL credentials before continuing." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

if (-not (Test-Path $FrontendEnv)) {
    Write-Host "[WARNING] frontend\.env.local not found. Creating from example..." -ForegroundColor Yellow
    if (Test-Path $FrontendEnvExample) {
        Copy-Item $FrontendEnvExample $FrontendEnv
    }
}

Write-Host "Press Ctrl+C to stop all services" -ForegroundColor Gray
Write-Host ""

# Start both services from project root
Set-Location $ScriptRoot
npm run dev
