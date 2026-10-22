# Mental Health Checker 🧠

A simple yet effective full-stack application designed to help users check their mental state and receive personalized affirmations and guidance.

## Project Overview

**Mental Health Checker** is a user-friendly web application that helps individuals understand their current mental state through a quick self-assessment. The tool provides:

- ✅ Quick 7-question assessment
- 📊 Score-based evaluation
- 💬 Personalized results and messages
- ✨ Positive affirmations
- 💡 Wellness tips tailored to your results

## Features

### 1. User-Friendly Interface
- Clean, modern design with gradient backgrounds
- Intuitive navigation
- Responsive layout (works on desktop and mobile)
- Smooth animations and transitions

### 2. 7-Question Assessment
Questions covering key mental health indicators:
1. Do you feel tired most of the time?
2. Do you feel anxious or worried often?
3. Are you having trouble sleeping or eating?
4. Do you feel disconnected from others?
5. Are you feeling overwhelmed?
6. Do you feel sad without reason?
7. Do you find it hard to concentrate?

### 3. Score-Based Evaluation
- **Score 0-2**: Good mental state ✅
- **Score 3-4**: Mild stress ⚠️
- **Score 5-7**: Needs professional attention 🚨

### 4. Personalized Results
- Score display with visual progress bar
- Customized message based on mental state
- 4 random positive affirmations
- State-specific wellness tips

### 5. Affirmations
Every user receives affirmations such as:
- 💪 I am strong and resilient.
- ✨ I am doing my best.
- 🤝 I am not alone.
- ❤️ I deserve happiness.
- And more...

## Project Structure

```
mental-health-checker/
├── frontend/
│   ├── index.html          # Main HTML structure
│   ├── css/
│   │   └── style.css       # Styling and responsive design
│   └── js/
│       └── script.js       # Frontend logic and interactivity
│
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Dependencies
│   └── routes/
│       └── questions.js    # API routes for questions and assessments
│
└── README.md              # This file
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox
- **JavaScript (Vanilla)**: Interactive functionality without external libraries

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing
- **Body-parser**: JSON parsing

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher) and npm installed on your machine
- A code editor (VS Code recommended)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

### Frontend Access

Once the backend is running, open your browser and navigate to:
```
http://localhost:3000
```

The frontend will be served automatically from the Express server.

## How to Use

1. **Open the Application**
   - Visit `http://localhost:3000` in your web browser

2. **Enter Your Name**
   - Type your name in the input field and click "Start Assessment"

3. **Answer the Questions**
   - For each question, click either "Yes" or "No"
   - Progress bar shows your advancement

4. **View Your Results**
   - See your score out of 7
   - Read your personalized mental health assessment
   - Review affirmations and wellness tips tailored to your results

5. **Retake the Assessment**
   - Click "Take Assessment Again" to start over

## API Endpoints

### Get Questions
```
GET /api/questions
```
Returns all 7 assessment questions.

### Get Affirmations
```
GET /api/affirmations
```
Returns all available affirmations.

### Calculate Assessment
```
POST /api/calculate-assessment
Body: { "answers": [true, false, true, false, true, false, true] }
```
Calculates mental health score and category.

### Save Result
```
POST /api/save-result
Body: { "name": "John", "score": 3, "state": "medium", "timestamp": "2026-04-09T..." }
```
Saves assessment result to the server.

### Get Statistics
```
GET /api/statistics
```
Returns aggregated statistics of all assessments.

### Health Check
```
GET /api/health
```
Verifies the server is running.

## Color Scheme

- **Primary**: Purple gradient (#667eea to #764ba2)
- **Good State**: Green (#28a745)
- **Medium State**: Yellow (#ffc107)
- **High State**: Red (#dc3545)

## Important Disclaimers

⚠️ **This application is NOT:**
- A medical diagnosis tool
- A replacement for professional mental health services
- Capable of providing clinical treatment

✅ **This tool is meant to:**
- Provide self-awareness about mental state
- Encourage positive thinking
- Raise awareness about mental health
- Support early intervention by encouraging professional help

## For Users with High Scores

If your assessment indicates high stress levels, please:
1. Contact a mental health professional
2. Call a mental health crisis hotline
3. Reach out to trusted friends or family
4. Consult your healthcare provider

## Recommended Wellness Tips

### General Tips (All Users)
- Maintain a consistent sleep schedule (7-9 hours nightly)
- Engage in regular physical activity
- Practice mindfulness or meditation
- Nurture meaningful relationships
- Set healthy boundaries
- Engage in hobbies and activities you enjoy
- Take regular breaks from screens

### For Mild Stress
- Try relaxation techniques (deep breathing, progressive muscle relaxation)
- Limit caffeine and alcohol
- Practice time management
- Keep a journal to process emotions
- Talk to someone you trust

### For High Stress
- **Seek professional help immediately**
- Consider therapy or counseling
- Contact a mental health crisis line
- Create a daily routine with meals and sleep
- Avoid major decisions until feeling better
- Practice self-compassion

## Development

### Running in Development Mode

To use nodemon for automatic server restarts during development:

```bash
cd backend
npm install --save-dev nodemon
npm run dev
```

### Customizing Questions

To modify questions, edit:
- Frontend: `frontend/js/script.js` (questions array)
- Backend: `backend/routes/questions.js` (questions array)

### Customizing Affirmations

To modify affirmations, edit:
- Frontend: `frontend/js/script.js` (affirmations array)
- Backend: `backend/routes/questions.js` (affirmations array)

## Future Enhancements

- User registration and authentication
- Database integration to store user results
- History tracking and progress visualization
- Export results as PDF
- Integration with real mental health resources
- Multi-language support
- Mobile app version
- Video content with coping strategies
- Integration with professional therapists

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Lightweight frontend with no external dependencies
- Fast server response times
- Optimized CSS with minimal repaints
- Smooth animations using CSS transitions

## Accessibility

- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- Clear button labels
- Responsive design for all screen sizes

## Security Notes

- This is a demonstration project
- For production use, add:
  - User authentication
  - Input validation and sanitization
  - HTTPS encryption
  - Rate limiting
  - Database encryption
  - GDPR compliance measures
  - Secure session management

## Contributing

Feel free to fork this project and make improvements. Some ideas:
- Add more comprehensive questions
- Implement user authentication
- Create a database backend
- Add more affirmations
- Improve the UI design
- Add support for different languages

## License

MIT License - Feel free to use this project for educational purposes.

## Support & Resources

### Mental Health Crisis Resources

**United States:**
- National Suicide Prevention Lifeline: 1-800-273-8255
- Crisis Text Line: Text HOME to 741741

**United Kingdom:**
- Samaritans: 116 123
- Childline: 0800 1111

**Canada:**
- Talk Suicide Canada: 1-833-456-4566
- Crisis Text Line: Text HELLO to 741741

**Australia:**
- Lifeline: 13 11 14
- Kids Helpline: 1800 55 1800

**International:**
- Find helpline: findahelpline.com

## Contact

For questions or suggestions, please reach out or create an issue.

---

**Remember:** Your mental health matters. Take care of yourself and reach out for support when needed. You are not alone. 💙

---

*Last Updated: April 9, 2026*
*Mental Health Checker v1.0*
