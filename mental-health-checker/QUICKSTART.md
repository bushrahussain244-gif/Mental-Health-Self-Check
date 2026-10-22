# Quick Start Guide - Mental Health Checker

## Getting Started in 5 Minutes

### Step 1: Navigate to Project
```bash
cd c:\Users\SHREE\OneDrive\Desktop\mental-health-checker
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Start the Backend Server
```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║   Mental Health Checker Backend        ║
║   Server running on port 3000        ║
║   Visit: http://localhost:3000      ║
╚════════════════════════════════════════╝
```

### Step 4: Open in Browser
Open your web browser and navigate to:
```
http://localhost:3000
```

### Step 5: Use the Application
1. Enter your name
2. Answer 7 yes/no questions
3. View your personalized results with affirmations

## Stopping the Server
Press `Ctrl + C` in the terminal

## Troubleshooting

### Port 3000 Already in Use
If you get an error that port 3000 is already in use:

**Windows PowerShell:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the number shown)
taskkill /PID <PID> /F
```

Then try starting the server again.

### Node Not Found
Make sure Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

### Frontend Not Loading
1. Make sure backend is running
2. Clear browser cache (Ctrl + Shift + Delete)
3. Try incognito/private window
4. Check browser console for errors (F12)

## Development Mode

To enable auto-reload when files change:

```bash
cd backend
npm install --save-dev nodemon
npm run dev
```

## Project Files

| File | Purpose |
|------|---------|
| `frontend/index.html` | Main web page |
| `frontend/css/style.css` | Styling |
| `frontend/js/script.js` | Frontend logic |
| `backend/server.js` | Express server |
| `backend/routes/questions.js` | API endpoints |
| `backend/package.json` | Dependencies |

## Customizing the App

### Change Questions
Edit `backend/routes/questions.js` questions array

### Change Affirmations
Edit `frontend/js/script.js` affirmations array

### Change Colors
Edit `frontend/css/style.css` color values

### Change Port
In `backend/server.js`, change:
```javascript
const PORT = process.env.PORT || 3000;
```

## Testing API Endpoints

### Test with Curl (Windows PowerShell)

Get all questions:
```powershell
curl http://localhost:3000/api/questions
```

Get health status:
```powershell
curl http://localhost:3000/api/health
```

Get statistics:
```powershell
curl http://localhost:3000/api/statistics
```

## Browser Compatibility

✅ Chrome  
✅ Firefox  
✅ Safari  
✅ Edge

## Next Steps

1. Customize questions and affirmations
2. Connect to a database (MongoDB, PostgreSQL)
3. Add user authentication
4. Deploy to the cloud (Heroku, AWS, Azure)
5. Add email notifications
6. Create mobile app version

## Need Help?

- Read the full README.md
- Check browser console for errors (F12)
- Check server terminal for error messages
- Look for error logs in console output

## Important Reminders

⚠️ This tool is for self-awareness only, not medical diagnosis.

If you or someone you know needs help:
- Talk to a mental health professional
- Call a crisis helpline
- Reach out to trusted friends/family
- Consult a healthcare provider

Remember: You are not alone. 💙
