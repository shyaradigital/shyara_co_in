#!/bin/bash

# Shyara Stop Script
# Stops all running backend and frontend services

echo "🛑 Stopping Shyara Development Environment..."
echo ""

# Read PIDs from file if it exists
if [ -f ".pids" ]; then
    read -r BACKEND_PID FRONTEND_PID < .pids
    
    if [ ! -z "$BACKEND_PID" ] && kill -0 $BACKEND_PID 2>/dev/null; then
        echo "  Stopping backend process (PID: $BACKEND_PID)..."
        kill $BACKEND_PID 2>/dev/null
        echo "  ✅ Backend stopped"
    else
        echo "  ℹ️  No backend process found"
    fi
    
    if [ ! -z "$FRONTEND_PID" ] && kill -0 $FRONTEND_PID 2>/dev/null; then
        echo "  Stopping frontend process (PID: $FRONTEND_PID)..."
        kill $FRONTEND_PID 2>/dev/null
        echo "  ✅ Frontend stopped"
    else
        echo "  ℹ️  No frontend process found"
    fi
    
    rm -f .pids
else
    # Fallback: kill processes on ports
    echo "  Looking for processes on ports 3000 and 4000..."
    
    BACKEND_PID=$(lsof -ti:4000 2>/dev/null)
    if [ ! -z "$BACKEND_PID" ]; then
        echo "  Stopping backend process (PID: $BACKEND_PID)..."
        kill $BACKEND_PID 2>/dev/null
        echo "  ✅ Backend stopped"
    else
        echo "  ℹ️  No backend process found on port 4000"
    fi
    
    FRONTEND_PID=$(lsof -ti:3000 2>/dev/null)
    if [ ! -z "$FRONTEND_PID" ]; then
        echo "  Stopping frontend process (PID: $FRONTEND_PID)..."
        kill $FRONTEND_PID 2>/dev/null
        echo "  ✅ Frontend stopped"
    else
        echo "  ℹ️  No frontend process found on port 3000"
    fi
fi

echo ""
echo "✅ All services stopped!"

