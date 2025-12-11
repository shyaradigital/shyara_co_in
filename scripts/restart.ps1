# Shyara Restart Script
# Stops all services and starts them again

Write-Host "🔄 Restarting Shyara Development Environment..." -ForegroundColor Cyan
Write-Host ""

# Stop existing services
& "$PSScriptRoot\stop.ps1"

Write-Host ""
Write-Host "⏳ Waiting 2 seconds before restarting..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

Write-Host ""

# Start services
& "$PSScriptRoot\start.ps1"

