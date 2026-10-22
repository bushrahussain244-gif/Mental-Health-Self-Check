# Windows Setup Guide - Mental Health Checker

## Complete Setup for Windows Users

This guide provides step-by-step instructions for Windows PowerShell users to set up and run the Mental Health Checker project.

---

## Prerequisites Check

### Step 1: Verify Node.js Installation

Open PowerShell and check if Node.js is installed:

```powershell
node --version
npm --version
```

**Expected Output:**
```
v18.0.0 (or higher)
9.0.0 (or higher)
```

### Step 2: If Node.js Not Installed

1. Download from: https://nodejs.org/
2. Choose LTS version
3. Run the installer
4. Follow default installation steps
5. Restart PowerShell after installation
6. Verify again with version commands

---

## Project Setup (Easy Method)

### Method 1: Quick Setup Script

Create a file named `setup.ps1` in the project folder:

```powershell
# setup.ps1
Write-Host "🚀 Starting Mental Health Checker Setup..." -ForegroundColor Green

# Navigate to backend
cd backend

# Install dependencies
Write-Host "`n📦 Installing backend dependencies..." -ForegroundColor Yellow
npm install

# Move back to check files
cd ..

# Display success message
Write-Host "`n✅ Setup complete! Run 'cd backend && npm start' to begin" -ForegroundColor Green
Write-Host "`n📖 Open http://localhost:3000 in your browser" -ForegroundColor Blue
```

**To Run:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup.ps1
```

### Method 2: Manual Setup

**(Recommended for understanding the process)**

#### Step 1: Navigate to Project

```powershell
cd c:\Users\SHREE\OneDrive\Desktop\mental-health-checker
```

#### Step 2: Go to Backend Directory

```powershell
cd backend
```

**Verify location:**
```powershell
Get-Location
```

Should show: `C:\Users\SHREE\OneDrive\Desktop\mental-health-checker\backend`

#### Step 3: Install Dependencies

```powershell
npm install
```

**You should see:**
```
added XX packages in XXs
```

#### Step 4: Start the Server

```powershell
npm start
```

**Expected Output:**
```
╔════════════════════════════════════════╗
║   Mental Health Checker Backend        ║
║   Server running on port 3000        ║
║   Visit: http://localhost:3000      ║
╚════════════════════════════════════════╝
```

#### Step 5: Open in Browser

Open a new PowerShell window and type:

```powershell
start "http://localhost:3000"
```

Or manually open browser and go to: `http://localhost:3000`

---

## Troubleshooting on Windows

### Issue 1: "npm: The term 'npm' is not recognized"

**Solution:**
```powershell
# Reinstall Node.js from: https://nodejs.org/
# Then restart PowerShell
```

### Issue 2: "Port 3000 Already in Use"

**Solution:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# You'll see: TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    <PID>

# Kill the process (replace 1234 with actual PID)
taskkill /PID 1234 /F
```

### Issue 3: "Access Denied" Error

**Solution:**
```powershell
# Run PowerShell as Administrator
# Right-click PowerShell → Run as Administrator

# Then set execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue 4: "npm install fails with errors"

**Solution: Try Clean Install**
```powershell
# Delete node_modules and package-lock.json
Remove-Item -Path "node_modules" -Recurse -Force
Remove-Item -Path "package-lock.json" -Force

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### Issue 5: Server Starts but "Cannot GET /"

**Solution:**
```powershell
# Make sure static files exist:
# Verify frontend/index.html exists

# Check file structure:
Get-ChildItem -Path ..\ -Recurse -Include "*.html"

# Should show: frontend\index.html, frontend\admin.html
```

### Issue 6: "Module not found" Error

**Solution:**
```powershell
# Ensure you're in the backend directory
Get-Location  # Should end with \backend

# Verify package.json exists in current directory
Get-ChildItem package.json

# If not there, you're in wrong directory
cd .\backend
npm install
```

---

## Common PowerShell Commands

### Navigate Directories
```powershell
# Change directory
cd C:\path\to\folder

# Go up one level
cd ..

# Go to home directory
cd ~

# List files
Get-ChildItem

# Clear screen
Clear-Host
```

### File Operations
```powershell
# Create file
New-Item -Path "filename.txt" -ItemType File

# View file content
Get-Content filename.txt

# Delete file
Remove-Item filename.txt

# Copy file
Copy-Item source.txt destination.txt
```

### Process Management
```powershell
# List running processes on port 3000
netstat -ano | findstr :3000

# Kill process by PID
taskkill /PID 1234 /F

# List all node processes
Get-Process node
```

---

## Development Workflow

### Recommended Setup for Development

**Terminal 1: Backend Server**
```powershell
cd c:\Users\SHREE\OneDrive\Desktop\mental-health-checker\backend
npm start

# Or with auto-reload (development):
npm install --save-dev nodemon
npm run dev
```

**Terminal 2: Editor**
```powershell
# Open VS Code
code c:\Users\SHREE\OneDrive\Desktop\mental-health-checker

# Or open specific files
code .\frontend\index.html
code .\backend\server.js
```

**Browser: Testing**
```
http://localhost:3000          # Main app
http://localhost:3000/admin    # Admin dashboard
http://localhost:3000/api/health   # API health
```

---

## Docker Setup (Windows)

### Prerequisites
1. Download Docker Desktop for Windows
2. Install Windows Subsystem for Linux 2 (WSL2)
3. Restart computer

### Commands

```powershell
# Build Docker image
docker build -t mental-health-checker .

# Run container
docker run -p 3000:3000 mental-health-checker

# Or use Docker Compose
docker-compose up -d

# View logs
docker logs -f <container-id>

# Stop container
docker-compose down
```

---

## Testing the Application

### Manual Testing Steps

```powershell
# 1. Start server
npm start

# 2. Open browser
start http://localhost:3000

# 3. Test Assessment
#    - Enter name: "TestUser"
#    - Select "No" for all questions
#    - Should show "Good mental health"

# 4. Test Again
#    - Use "Yes" for all questions
#    - Should show "Needs professional attention"
```

### Testing API Endpoints

```powershell
# Get questions
curl http://localhost:3000/api/questions

# Get health status
curl http://localhost:3000/api/health

# Get statistics
curl http://localhost:3000/api/statistics

# Calculate assessment (advanced)
$body = @{answers = @($true, $false, $true, $false, $true, $false, $true)} | ConvertTo-Json
curl -Method POST -Uri "http://localhost:3000/api/calculate-assessment" -Body $body -ContentType "application/json"
```

---

## File Editing Tips

### Using VS Code

```powershell
# Open entire project
code .

# Open specific file
code .\frontend\index.html

# Open folder
code -r .\backend
```

### Using Notepad (Simple Text Editor)

```powershell
# Open with Notepad
notepad .\frontend\index.html

# Open with VS Code
code .\frontend\js\script.js

# View in explorer
explorer .
```

---

## Environment Setup

### Creating .env File

```powershell
# Create .env file from template
Copy-Item ".env.example" ".env"

# Edit with Notepad
notepad .env

# Or with VS Code
code .env
```

### Sample .env Content

```
NODE_ENV=development
PORT=3000
```

---

## Performance Tips

### Speed Up npm install

```powershell
# Use npm ci instead (faster)
npm ci

# Or clear cache first
npm cache clean --force
npm install
```

### Monitor Resource Usage

```powershell
# Check memory usage
Get-Process node | Select-Object ProcessName, WorkingSet

# Monitor system
Get-Process | where {$_.Name -like "*node*"}
```

---

## Update Dependencies

### Check for Updates

```powershell
cd backend

# Check current versions
npm list

# Check what's outdated
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update express

# Install latest major version
npm install express@latest
```

---

## Backup & Recovery

### Backup Project

```powershell
# Create backup
Copy-Item -Path "." -Destination "..\mental-health-checker-backup" -Recurse

# Or compress
Compress-Archive -Path "." -DestinationPath "..\mental-health-checker-backup.zip"
```

### Restore Project

```powershell
# From folder backup
Copy-Item -Path "..\mental-health-checker-backup\*" -Destination "." -Recurse -Force

# From zip
Expand-Archive -Path "..\mental-health-checker-backup.zip" -DestinationPath "."
```

---

## Useful PowerShell Profile Setup

Create permanent shortcuts by adding to PowerShell Profile:

```powershell
# Edit profile
notepad $PROFILE

# Add these aliases
function mhc-start { cd C:\Users\SHREE\OneDrive\Desktop\mental-health-checker\backend; npm start }
function mhc-dev { cd C:\Users\SHREE\OneDrive\Desktop\mental-health-checker\backend; npm run dev }
function mhc-setup { cd C:\Users\SHREE\OneDrive\Desktop\mental-health-checker\backend; npm install }
function mhc-open { start "http://localhost:3000" }

# Save profile
# Then restart PowerShell

# Now you can use:
# mhc-start    # Start server
# mhc-dev      # Start with hot reload
# mhc-setup    # Install dependencies
# mhc-open     # Open in browser
```

---

## Uninstall & Cleanup

### Remove Project Dependencies

```powershell
# Go to backend folder
cd backend

# Remove node_modules
Remove-Item -Path "node_modules" -Recurse -Force

# Remove package lock
Remove-Item -Path "package-lock.json" -Force

# Clear npm cache
npm cache clean --force
```

### Uninstall Node.js

1. Go to Control Panel
2. Programs and Features
3. Find Node.js
4. Click Uninstall
5. Follow prompts

---

## Support

### Getting Help

1. Check [QUICKSTART.md](QUICKSTART.md) for common issues
2. Review error message in PowerShell
3. Check [README.md](README.md) for documentation
4. Verify prerequisites are installed

### Common Fixes

**Always try:**
```powershell
# 1. Clear terminal
Clear-Host

# 2. Check location
Get-Location

# 3. Verify files
Get-ChildItem

# 4. Restart terminal
# (Close and reopen PowerShell)

# 5. Restart computer
# (For persistent issues)
```

---

## Next Steps

1. ✅ Install Node.js
2. ✅ Run setup script or manual steps
3. ✅ Start the server
4. ✅ Open in browser
5. ✅ Take the assessment
6. ✅ Explore admin dashboard
7. ✅ Read documentation
8. ✅ Customize as needed
9. ✅ Deploy to cloud (optional)

---

## Quick Reference

| Task | Command |
|------|---------|
| Navigate to project | `cd c:\Users\SHREE\OneDrive\Desktop\mental-health-checker` |
| Install dependencies | `cd backend && npm install` |
| Start server | `npm start` |
| Development mode | `npm run dev` |
| Stop server | `Ctrl + C` |
| Open app | `start http://localhost:3000` |
| Admin dashboard | `start http://localhost:3000/admin` |
| Run Docker | `docker-compose up` |

---

*Windows Setup Guide v1.0*
*Last Updated: April 9, 2026*
*Compatible with: Windows 10 & 11, PowerShell 5.1+*
