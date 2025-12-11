# Shyara Stop Script
# Stops all running backend and frontend services

Write-Host "🛑 Stopping Shyara Development Environment..." -ForegroundColor Yellow
Write-Host ""

# Find and kill Node processes running on our ports
$backendPort = 4000
$frontendPort = 3000

# Kill processes on backend port
$backendProcesses = Get-NetTCPConnection -LocalPort $backendPort -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($backendProcesses) {
    foreach ($pid in $backendProcesses) {
        Write-Host "  Stopping backend process (PID: $pid)..." -ForegroundColor Gray
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
    Write-Host "  ✅ Backend stopped" -ForegroundColor Green
} else {
    Write-Host "  ℹ️  No backend process found on port $backendPort" -ForegroundColor Gray
}

# Kill processes on frontend port
$frontendProcesses = Get-NetTCPConnection -LocalPort $frontendPort -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($frontendProcesses) {
    foreach ($pid in $frontendProcesses) {
        Write-Host "  Stopping frontend process (PID: $pid)..." -ForegroundColor Gray
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
    Write-Host "  ✅ Frontend stopped" -ForegroundColor Green
} else {
    Write-Host "  ℹ️  No frontend process found on port $frontendPort" -ForegroundColor Gray
}

# Also kill any node processes that might be running our dev servers
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host ""
    Write-Host "  ⚠️  Found additional Node.js processes. Manual cleanup may be needed." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ All services stopped!" -ForegroundColor Green

