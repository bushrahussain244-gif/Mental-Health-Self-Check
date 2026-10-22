# Project Structure & Architecture

## Complete Directory Layout

```
mental-health-checker/
│
├── frontend/                          # Frontend Application (Client-side)
│   ├── index.html                    # Main application page
│   ├── admin.html                    # Admin dashboard for statistics
│   ├── css/
│   │   └── style.css                 # Application styling
│   └── js/
│       └── script.js                 # Frontend logic & interactivity
│
├── backend/                          # Backend Application (Server-side)
│   ├── server.js                     # Express.js main server file
│   ├── config.js                     # Configuration settings
│   ├── package.json                  # Node.js dependencies
│   └── routes/
│       └── questions.js              # API endpoints for questions
│
├── README.md                         # Main documentation
├── QUICKSTART.md                     # Quick start guide (5 minutes)
├── DEPLOYMENT.md                     # Deployment instructions
├── PROJECT_STRUCTURE.md              # This file
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── Dockerfile                        # Docker container configuration
└── docker-compose.yml                # Docker Compose configuration
```

## File Descriptions

### Frontend Files

#### `frontend/index.html`
- Main user interface
- Form inputs for name and assessment questions
- Results display section
- Affirmations and tips section
- 1,280 lines of semantic HTML

#### `frontend/css/style.css`
- Responsive design (mobile to desktop)
- Gradient backgrounds and modern UI
- Color scheme for different mental states
- Animations and transitions
- ~400 lines of CSS

#### `frontend/js/script.js`
- Interactive form handling
- Score calculation logic
- Results generation
- API communication for saving results
- ~270 lines of JavaScript

#### `frontend/admin.html`
- Admin dashboard
- Statistics visualization
- Recent assessments table
- Performance metrics
- ~280 lines of HTML

### Backend Files

#### `backend/server.js`
- Express.js server setup
- Static file serving
- API route handling
- Error middleware
- Health checks
- ~110 lines of JavaScript

#### `backend/config.js`
- Configuration constants
- Questions array
- Affirmations array
- Score thresholds
- Wellness tips
- Color scheme
- Crisis resources
- ~120 lines of JavaScript

#### `backend/routes/questions.js`
- GET /api/questions
- GET /api/questions/:id
- GET /api/affirmations
- POST /api/calculate-assessment
- ~130 lines of JavaScript

#### `backend/package.json`
- Project metadata
- Dependencies:
  - express
  - cors
  - body-parser
- Dev dependencies:
  - nodemon

### Configuration Files

#### `Dockerfile`
- Multi-stage build for production
- Node.js 18 Alpine base image
- Health check configuration
- Port exposure (3000)

#### `docker-compose.yml`
- Service configuration
- Port mapping
- Environment variables
- Volume mounting
- Restart policy

#### `.env.example`
- Template for environment variables
- Documentation for each variable
- Optional and required configurations

#### `.gitignore`
- Node modules exclusion
- Log files exclusion
- IDE configuration exclusion
- OS-specific files exclusion

---

## Architecture Overview

### Frontend Architecture

```
┌─────────────────────────────────────┐
│       User Interface Layer          │
│                                     │
│  ┌──────────────────────────────┐   │
│  │     index.html               │   │
│  │  (Semantic HTML Structure)   │   │
│  └──────────────────────────────┘   │
│                                     │
│  ┌──────────────────────────────┐   │
│  │     style.css                │   │
│  │  (Responsive Design)         │   │
│  └──────────────────────────────┘   │
│                                     │
│  ┌──────────────────────────────┐   │
│  │     script.js                │   │
│  │  (Interactive Logic)         │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
         ↓
    HTTP/HTTPS
         ↓
```

### Backend Architecture

```
┌─────────────────────────────────────┐
│    Express.js Server Layer          │
│                                     │
│  ┌──────────────────────────────┐   │
│  │     server.js                │   │
│  │  (Server Setup & Routing)    │   │
│  └──────────────────────────────┘   │
│         ↓                           │
│  ┌──────────────────────────────┐   │
│  │   routes/questions.js        │   │
│  │  (API Endpoints)             │   │
│  └──────────────────────────────┘   │
│         ↓                           │
│  ┌──────────────────────────────┐   │
│  │     config.js                │   │
│  │  (Configuration)             │   │
│  └──────────────────────────────┘   │
│         ↓                           │
│  ┌──────────────────────────────┐   │
│  │   In-Memory Storage          │   │
│  │  (Results Data)              │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Data Flow

```
User Entry
    │
    ↓
┌─────────────────────┐
│ Form Submission     │
│ (Name + Answers)    │
└─────────────────────┘
    │
    ├─────→ Validation (Frontend)
    │
    ↓
┌─────────────────────┐
│ Score Calculation   │
│ (Frontend/Backend)  │
└─────────────────────┘
    │
    ├─────→ State Determination (good/medium/high)
    │
    ↓
┌─────────────────────┐
│ Results Generation  │
│ - Message           │
│ - Affirmations      │
│ - Tips              │
└─────────────────────┘
    │
    ├─────→ API Call (Save to Backend)
    │
    ↓
┌─────────────────────┐
│ Display Results     │
│ to User             │
└─────────────────────┘
```

---

## Technology Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic markup |
| CSS3 | Styling & animations |
| JavaScript (ES6) | Interactivity |
| Fetch API | HTTP communication |
| No dependencies | Zero bloat |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| CORS | Cross-origin requests |
| Body-parser | JSON parsing |
| No database | In-memory storage (can add DB) |

### DevOps
| Technology | Purpose |
|-----------|---------|
| Docker | Containerization |
| Docker Compose | Container orchestration |
| npm | Package management |
| Nodemon | Development auto-reload |

---

## Key Features by Component

### Frontend Features
✅ Responsive Design  
✅ Progressive Enhancement  
✅ Form Validation  
✅ Dynamic Content Rendering  
✅ Smooth Animations  
✅ Accessibility Support  
✅ Mobile Optimized  
✅ No External Dependencies  

### Backend Features
✅ RESTful API Design  
✅ CORS Support  
✅ Static File Serving  
✅ Health Checks  
✅ Error Handling  
✅ Request Validation  
✅ Statistics Aggregation  
✅ Graceful Shutdown  

---

## Size & Performance

### Code Size
- **Frontend HTML**: ~1.2 KB (minified)
- **Frontend CSS**: ~0.4 KB (minified)
- **Frontend JS**: ~0.3 KB (minified)
- **Backend Total**: ~0.6 KB (minified)
- **Total Project**: ~2.5 KB (client-side code)

### No External Dependencies (Frontend)
- 100% vanilla JavaScript
- No jQuery, React, Vue, etc.
- Fast page load
- Low bandwidth usage
- Easy to understand

---

## Database Schema (For Future Use)

When implementing a database, use this schema:

```javascript
// User Assessment Result
{
  id: ObjectId,
  name: String,
  score: Number (0-7),
  state: String (good/medium/high),
  timestamp: DateTime,
  answers: Array[Boolean],
  userAgent: String,
  ipAddress: String (optional),
  sessionId: String (optional)
}

// Statistics (Aggregated)
{
  date: Date,
  totalAssessments: Number,
  averageScore: Number,
  distribution: {
    good: Number,
    medium: Number,
    high: Number
  }
}
```

---

## Extension Points

### Easy to Add Features

1. **User Authentication**
   - Add login/signup
   - Modify `server.js` to add auth middleware
   - Store user data in database

2. **Database Integration**
   - Replace in-memory storage with MongoDB/PostgreSQL
   - Create database models
   - Update API endpoints

3. **Email Notifications**
   - Add nodemailer dependency
   - Create email templates
   - Implement email sending on high scores

4. **Multi-Language Support**
   - Create language files
   - Add language selector
   - Load translations dynamically

5. **Advanced Analytics**
   - Implement Sentry for error tracking
   - Add Google Analytics
   - Create custom dashboards

6. **Mobile App**
   - Use React Native or Flutter
   - Reuse backend API
   - Add push notifications

---

## Testing

### Manual Testing Checklist
- [ ] Test all 7 questions
- [ ] Test with score 0 (all "No")
- [ ] Test with score 7 (all "Yes")
- [ ] Test on mobile browser
- [ ] Test on desktop browser
- [ ] Test admin dashboard
- [ ] Test API endpoints with curl/Postman
- [ ] Test form validation

### Automated Testing (Future)
- Jest for unit tests
- Supertest for API tests
- Cypress for E2E tests

---

## Deployment Architecture

### Local Development
```
User's Computer
    ↓
npm start → Node.js Server → http://localhost:3000
```

### Docker Deployment
```
Docker Container (Node.js + App)
    ↓
Port 3000 → User's Browser
```

### Cloud Deployment
```
Cloud CDN → Load Balancer → Multiple Instances
                ↓
           Database → Cache Layer
```

---

## Security Architecture

```
User Input
    ↓
[Validation Layer]
    ↓
Input Sanitization
    ↓
Rate Limiting
    ↓
CORS Check
    ↓
Business Logic
    ↓
Response
```

---

## Monitoring Points

| Component | Metric | Alert |
|-----------|--------|-------|
| Server | CPU Usage | >80% |
| Server | Memory | >85% |
| API | Response Time | >1s |
| API | Error Rate | >5% |
| Database | Connection Pool | >90% |
| Results | High Score Count | >20% daily |

---

## Future Architecture (Phase 2)

```
┌─────────────────────────────────────────┐
│         Frontend (React/Vue)            │
├─────────────────────────────────────────┤
│  API Gateway (Authentication)           │
├─────────────────────────────────────────┤
│  Microservices                          │
│  ├─ Assessment Service                  │
│  ├─ User Service                        │
│  ├─ Notification Service                │
│  └─ Analytics Service                   │
├─────────────────────────────────────────┤
│  Data Layer                             │
│  ├─ PostgreSQL (Users)                  │
│  ├─ MongoDB (Assessments)               │
│  ├─ Redis (Cache)                       │
│  └─ Elasticsearch (Analytics)           │
└─────────────────────────────────────────┘
```

---

*Last Updated: April 9, 2026*
*Version: 1.0*
