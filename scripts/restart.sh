#!/bin/bash

# Shyara Restart Script
# Stops all services and starts them again

echo "🔄 Restarting Shyara Development Environment..."
echo ""

# Stop existing services
bash "$(dirname "$0")/stop.sh"

echo ""
echo "⏳ Waiting 2 seconds before restarting..."
sleep 2

echo ""

# Start services
bash "$(dirname "$0")/start.sh"

