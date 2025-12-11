@echo off
REM Shyara Local Development - Single Start Script
REM Double-click this file to start everything

REM Change to the script's directory (project root)
cd /d "%~dp0"

echo.
echo ========================================
echo   Starting Shyara Website Locally
echo   Working Directory: %CD%
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

REM Setup environment files first
echo [0/5] Setting up environment files...
if not exist "backend\.env" (
    if exist "backend\.env.example" (
        echo   Creating backend\.env from example...
        copy "backend\.env.example" "backend\.env" >nul
        echo   [IMPORTANT] Please edit backend\.env and update DATABASE_URL with your PostgreSQL credentials!
    ) else (
        echo   [WARNING] backend\.env.example not found.
    )
)

if not exist "frontend\.env.local" (
    if exist "frontend\.env.example" (
        echo   Creating frontend\.env.local from example...
        copy "frontend\.env.example" "frontend\.env.local" >nul
    ) else (
        echo   [WARNING] frontend\.env.example not found.
    )
)
echo.

echo [1/5] Installing root dependencies...
cd /d "%~dp0"
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install root dependencies
    pause
    exit /b 1
)

echo [2/5] Installing backend dependencies...
cd /d "%~dp0backend"
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install backend dependencies
    cd /d "%~dp0"
    pause
    exit /b 1
)

echo [3/5] Installing frontend dependencies...
cd /d "%~dp0frontend"
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies
    cd /d "%~dp0"
    pause
    exit /b 1
)

echo [4/5] Setting up database...
cd /d "%~dp0backend"
if exist prisma\schema.prisma (
    echo   Generating Prisma client...
    call npx prisma generate
    if %ERRORLEVEL% NEQ 0 (
        echo [WARNING] Prisma generate failed, continuing anyway...
    )
    
    echo   Running migrations...
    call npx prisma migrate dev --name init --skip-seed
    if %ERRORLEVEL% NEQ 0 (
        echo [WARNING] Database migration failed, continuing anyway...
    )
)

echo [5/5] Starting services...
echo.
echo ========================================
echo   Services will be available at:
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:4000
echo ========================================
echo.
echo Press Ctrl+C to stop all services
echo.

REM Return to project root
cd /d "%~dp0"

REM Verify .env files exist
if not exist "backend\.env" (
    echo [ERROR] backend\.env not found! Please create it from backend\.env.example
    echo [ERROR] Update DATABASE_URL with your PostgreSQL credentials before continuing.
    pause
    exit /b 1
)

if not exist "frontend\.env.local" (
    echo [WARNING] frontend\.env.local not found. Creating from example...
    if exist "frontend\.env.example" (
        copy "frontend\.env.example" "frontend\.env.local" >nul
    )
)
echo.

REM Start both services from project root
call npm run dev

pause
