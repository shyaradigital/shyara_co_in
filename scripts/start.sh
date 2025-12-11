#!/bin/bash

# Shyara Local Development Startup Script
# This script starts the backend and frontend services

echo "🚀 Starting Shyara Development Environment..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if ports are already in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        echo "⚠️  Port $1 is already in use. Service may already be running."
    fi
}

echo "📦 Checking prerequisites..."
check_port 4000
check_port 3000

echo ""
echo "🔧 Installing dependencies..."

# Install root dependencies
if [ -f "package.json" ]; then
    echo "  Installing root dependencies..."
    npm install --silent
fi

# Install backend dependencies
if [ -f "backend/package.json" ]; then
    echo "  Installing backend dependencies..."
    cd backend
    npm install --silent
    cd ..
fi

# Install frontend dependencies
if [ -f "frontend/package.json" ]; then
    echo "  Installing frontend dependencies..."
    cd frontend
    npm install --silent
    cd ..
fi

echo ""
echo "🗄️  Setting up database..."

# Generate Prisma client and run migrations
if [ -f "backend/prisma/schema.prisma" ]; then
    cd backend
    echo "  Generating Prisma client..."
    npx prisma generate --silent
    
    echo "  Running database migrations..."
    npx prisma migrate dev --name init --skip-seed > /dev/null 2>&1
    cd ..
fi

echo ""
echo "🎯 Starting services..."
echo ""

# Start backend
echo "  Starting Backend (http://localhost:4000)..."
cd backend
npm run dev > /tmp/shyara-backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "  Starting Frontend (http://localhost:3000)..."
cd frontend
npm run dev > /tmp/shyara-frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Development environment started!"
echo ""
echo "📍 Services:"
echo "   Backend:  http://localhost:4000"
echo "   Frontend: http://localhost:3000"
echo ""
echo "📋 Process IDs:"
echo "   Backend PID:  $BACKEND_PID"
echo "   Frontend PID: $FRONTEND_PID"
echo ""
echo "💡 To stop services, run: kill $BACKEND_PID $FRONTEND_PID"
echo "   Or use: npm run stop"
echo ""

# Save PIDs to file for stop script
echo "$BACKEND_PID $FRONTEND_PID" > .pids

# Wait for user interrupt
trap "echo ''; echo '🛑 Stopping services...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; rm -f .pids; exit" INT TERM

wait

