#!/usr/bin/env node

/**
 * Cross-platform stop script for Shyara development environment
 * Kills processes running on ports 3000 and 4000
 */

const { exec } = require('child_process');
const os = require('os');

const platform = os.platform();
const isWindows = platform === 'win32';

console.log('🛑 Stopping Shyara Development Environment...\n');

function killProcessOnPort(port) {
  return new Promise((resolve) => {
    if (isWindows) {
      // Windows: Find process using netstat and kill it
      exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
        if (error || !stdout) {
          console.log(`  ℹ️  No process found on port ${port}`);
          resolve();
          return;
        }

        const lines = stdout.trim().split('\n');
        const pids = new Set();

        lines.forEach((line) => {
          const parts = line.trim().split(/\s+/);
          const pid = parts[parts.length - 1];
          if (pid && !isNaN(pid)) {
            pids.add(pid);
          }
        });

        if (pids.size === 0) {
          console.log(`  ℹ️  No process found on port ${port}`);
          resolve();
          return;
        }

        pids.forEach((pid) => {
          console.log(`  Stopping process on port ${port} (PID: ${pid})...`);
          exec(`taskkill /PID ${pid} /F`, (killError) => {
            if (!killError) {
              console.log(`  ✅ Process ${pid} stopped`);
            }
          });
        });

        setTimeout(resolve, 500);
      });
    } else {
      // Unix-like: Use lsof to find and kill process
      exec(`lsof -ti:${port}`, (error, stdout) => {
        if (error || !stdout) {
          console.log(`  ℹ️  No process found on port ${port}`);
          resolve();
          return;
        }

        const pids = stdout.trim().split('\n').filter(Boolean);
        if (pids.length === 0) {
          console.log(`  ℹ️  No process found on port ${port}`);
          resolve();
          return;
        }

        pids.forEach((pid) => {
          console.log(`  Stopping process on port ${port} (PID: ${pid})...`);
          exec(`kill ${pid}`, (killError) => {
            if (!killError) {
              console.log(`  ✅ Process ${pid} stopped`);
            }
          });
        });

        setTimeout(resolve, 500);
      });
    }
  });
}

async function stopAll() {
  await killProcessOnPort(4000); // Backend
  await killProcessOnPort(3000); // Frontend

  console.log('\n✅ All services stopped!');
}

stopAll();

