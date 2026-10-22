# Features & User Guide

## Complete Feature Overview

### 🎯 Core Features

#### 1. User-Friendly Assessment
- **Name Entry**: Users enter their name for personalized experience
- **Progressive Interface**: One question at a time prevents cognitive overload
- **Progress Indication**: Visual progress bar shows assessment completion
- **Clear Navigation**: Easy "Yes/No" button selection
- **Mobile Responsive**: Works seamlessly on all devices

#### 2. Seven-Question Assessment
Questions covering key mental health dimensions:

| Q1 | Do you feel tired most of the time? | Fatigue |
|----|-----|---------|
| Q2 | Do you feel anxious or worried often? | Anxiety |
| Q3 | Are you having trouble sleeping or eating? | Basic Functions |
| Q4 | Do you feel disconnected from others? | Social Connection |
| Q5 | Are you feeling overwhelmed? | Stress Levels |
| Q6 | Do you feel sad without reason? | Mood |
| Q7 | Do you find it hard to concentrate? | Cognition |

#### 3. Intelligent Scoring System

**Score Calculation:**
```
Score = Number of "Yes" answers (0-7)
```

**Mental State Categories:**
| Score | State | Category | Icon |
|-------|-------|----------|------|
| 0-2 | Good | Excellent mental health | ✅ |
| 3-4 | Medium | Mild stress/concerns | ⚠️ |
| 5-7 | High | Needs professional attention | 🚨 |

**Visual Indicators:**
- Green progress bar for good state
- Yellow progress bar for medium state
- Red progress bar for high state

#### 4. Personalized Results

Each result includes:
- ✅ User's name
- 📊 Score display (X/7)
- 💬 Customized message based on mental state
- ✨ Positive affirmations (4 random selections)
- 💡 Wellness tips specific to their state
- 🎯 Actionable recommendations

#### 5. Affirmations

**System generates 4 random affirmations from:**
- 💪 I am strong and resilient.
- ✨ I am doing my best.
- 🤝 I am not alone.
- ❤️ I deserve happiness.
- 🌟 I can overcome challenges.
- 🎯 My mental health matters.
- 💝 I am worthy of care and compassion.

Each affirmation displayed with emoji for visual impact.

#### 6. State-Specific Wellness Tips

**For Good Mental State (Score 0-2):**
- Continue maintaining healthy habits
- Keep nurturing relationships
- Practice mindfulness or meditation
- Engage in enjoyable activities

**For Mild Stress (Score 3-4):**
- Identify and manage stress triggers
- Ensure 7-9 hours of quality sleep
- Exercise daily (30 minutes)
- Talk to someone you trust
- Practice relaxation techniques

**For High Concern (Score 5-7):**
- Consider professional help
- Talk to trusted individuals
- Establish daily routine
- Manage stress through time management
- Practice self-compassion
- Contact mental health helpline if in crisis

---

## User Interface Features

### 🎨 Design Elements

#### Color Scheme
```
Primary: Purple (#667eea) - Professional & calming
Secondary: Deep purple (#764ba2) - Accent color
Success: Green (#28a745) - Good mental state
Warning: Yellow (#ffc107) - Medium concern
Danger: Red (#dc3545) - High concern
```

#### Typography
- Main Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Size Hierarchy: Readable and accessible
- Font Weights: Regular (400), Medium (500), Bold (600)

#### Animations
- Fade-in transitions for smooth appearance
- Hover effects on buttons
- Progress bar animation
- Smooth state transitions

### 📱 Responsive Design

| Breakpoint | Device | Layout |
|-----------|--------|--------|
| Desktop | >600px | Full-width Cards |
| Tablet | 480-600px | Optimized |
| Mobile | <480px | Single Column |

**Mobile Optimizations:**
- Touch-friendly buttons (min 44px)
- Vertical button layout
- Larger text for readability
- Reduced padding for smaller screens

---

## Technical Features

### 🔌 API Endpoints

#### GET /api/questions
Returns all 7 assessment questions
```json
{
  "total": 7,
  "questions": [
    {"id": 1, "text": "Do you feel tired most of the time?"},
    ...
  ]
}
```

#### GET /api/questions/:id
Returns specific question by ID
```json
{"id": 1, "text": "Do you feel tired most of the time?"}
```

#### GET /api/affirmations
Returns all available affirmations
```json
{
  "total": 7,
  "affirmations": [...]
}
```

#### POST /api/calculate-assessment
Calculates assessment results
```json
Request:
{"answers": [true, false, true, false, true, false, true]}

Response:
{
  "score": 4,
  "maxScore": 7,
  "state": "medium",
  "category": "Mild Stress",
  "percentage": "57.14"
}
```

#### POST /api/save-result
Saves assessment result
```json
Request:
{"name": "John", "score": 3, "state": "medium"}

Response:
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John",
    "score": 3,
    "state": "medium",
    "timestamp": "2026-04-09T10:30:00Z"
  }
}
```

#### GET /api/statistics
Returns aggregated statistics
```json
{
  "total": 150,
  "averageScore": 3.5,
  "goodState": 50,
  "mediumState": 75,
  "highState": 25
}
```

#### GET /api/health
Health check endpoint
```json
{"status": "OK", "message": "Mental Health Checker API is running"}
```

### 💾 Data Storage

**Current:** In-memory storage (resets on server restart)

**Future Enhancement Options:**
```javascript
// MongoDB Schema
{
  _id: ObjectId,
  name: String,
  score: Number,
  state: String,
  answers: Array,
  timestamp: Date,
  ipAddress: String (optional),
  userAgent: String (optional)
}
```

### 🔐 Security Features

**Implemented:**
- CORS for cross-origin requests
- Input sanitization HTML escaping
- Error handling middleware
- Secure headers

**Recommended (Production):**
- HTTPS/SSL
- Rate limiting
- Request validation
- User authentication
- Database encryption
- Helmet.js headers

---

## Admin Dashboard

### Location
```
http://localhost:3000/admin
```

### Features

1. **Statistics Panel**
   - Total assessments count
   - Average score calculation
   - Distribution by mental state
   - Visual stat cards

2. **Results Table**
   - List of all assessment results
   - User name
   - Score and state
   - Timestamp

3. **Utilities**
   - Refresh data button
   - Error handling
   - Responsive layout
   - XSS protection

### Statistics Tracked
- Total number of assessments
- Average score across all users
- Count of good mental state
- Count of mild stress
- Count of high concern

---

## Browser Support

| Browser | Support | Tested |
|---------|---------|--------|
| Chrome | Latest | ✅ Yes |
| Firefox | Latest | ✅ Yes |
| Safari | Latest | ✅ Yes |
| Edge | Latest | ✅ Yes |
| Mobile Chrome | Latest | ✅ Yes |
| Mobile Safari | Latest | ✅ Yes |

---

## Accessibility Features

✅ Semantic HTML structure
✅ Proper heading hierarchy
✅ Color contrast compliance (WCAG AA)
✅ Keyboard navigation support
✅ Clear button labels
✅ Focus indicators
✅ ARIA labels where needed

---

## Performance Characteristics

### Frontend
- **Initial Load**: <1 second
- **Question Response**: <10ms
- **Result Calculation**: <10ms
- **No external dependencies**: Zero download overhead

### Backend
- **Response Time**: <50ms
- **Database Query**: N/A (in-memory)
- **CPU Usage**: Minimal
- **Memory Usage**: <50MB

---

## Error Handling

### Frontend
```javascript
// Name validation
✓ Required field check
✓ Non-empty string validation

// Question response
✓ Type validation (boolean)
✓ Completion check

// API communication
✓ Network error handling
✓ Graceful degradation
✓ User-friendly error messages
```

### Backend
```javascript
// Input validation
✓ Required fields check
✓ Array length validation
✓ Type checking

// Error responses
✓ 400: Bad Request
✓ 404: Not Found
✓ 500: Server Error
✓ Detailed error messages
```

---

## Customization Guide

### Change Questions

**Frontend:**
Edit `frontend/js/script.js`
```javascript
const questions = [
    "Your question 1?",
    "Your question 2?",
    ...
];
```

**Backend:**
Edit `backend/routes/questions.js`
```javascript
const questions = [
    { id: 1, text: "Your question 1?" },
    { id: 2, text: "Your question 2?" },
    ...
];
```

### Change Affirmations

Edit `frontend/js/script.js`
```javascript
const affirmations = [
    "✨ Your affirmation 1",
    "✨ Your affirmation 2",
    ...
];
```

### Change Color Scheme

Edit `frontend/css/style.css`
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --good-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
}
```

### Change Score Thresholds

Edit `frontend/js/script.js`
```javascript
if (score <= 2) {
    state = 'good';      // Change threshold from 2 to X
} else if (score <= 4) {
    state = 'medium';    // Change threshold from 4 to Y
}
```

---

## Advanced Features (Roadmap)

### Phase 2
- [ ] User authentication & login
- [ ] Assessment history
- [ ] Progress tracking charts
- [ ] Export results as PDF
- [ ] Email notifications
- [ ] Multi-language support

### Phase 3
- [ ] Resource directory
- [ ] Therapist finder
- [ ] Support group locator
- [ ] Coping strategy videos
- [ ] Daily reminders
- [ ] Journal integration

### Phase 4
- [ ] Mobile app
- [ ] Wearable integration
- [ ] AI-powered recommendations
- [ ] Social features
- [ ] Professional integrations

---

## Troubleshooting Features

### Feature: Keyboard Support
**Keys:**
- Enter: Submit form
- Tab: Navigate fields
- Shift+Tab: Reverse navigation

### Feature: Offline Mode
**Current:** Requires server
**Future:** Service Worker for offline access

### Feature: Data Privacy
**Current:** No data persistence
**Future:** GDPR-compliant data deletion

---

## Success Metrics

### User Metrics
- Assessment completion rate
- Time spent on assessment
- Return user rate
- Feature usage statistics

### Business Metrics
- Total assessments conducted
- Mental state distribution
- User satisfaction
- Crisis resource utilization

---

## Crisis Support Integration

### Embedded Resources
```
National Resources:
- US: 1-800-273-8255 (Suicide Prevention)
- UK: 116 123 (Samaritans)
- Canada: 1-833-456-4566 (Talk Suicide Canada)
- Australia: 13 11 14 (Lifeline)
```

### Crisis Response
- High scores prompt professional help recommendation
- Direct links to crisis resources
- Encouragement to reach out
- Supportive messaging

---

## Feature Limitations (Current Version)

❌ No user authentication
❌ No persistent database
❌ No email notifications
❌ No multi-language support
❌ No offline mode
❌ No export functionality
❌ No social sharing
❌ No professional integration

---

## Future Feature Requests

Users can suggest new features:
- Coping strategy tools
- Mood tracking
- Sleep tracking
- Medication reminders
- Therapy appointment scheduler
- Resource recommendations
- Support group finder
- Mental health news feed

---

*Last Updated: April 9, 2026*
*Feature Set: v1.0*
