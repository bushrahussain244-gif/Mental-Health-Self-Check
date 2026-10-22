const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const moodFilePath = path.join(__dirname, 'mood.txt');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// In-memory storage for results (in production, use a database)
let assessmentResults = [];

// API Routes
const questionsRouter = require('./routes/questions');
app.use('/api', questionsRouter);

// Store assessment result
app.post('/api/save-result', (req, res) => {
    const { name, score, state, timestamp } = req.body;
    
    if (!name || score === undefined) {
        return res.status(400).json({ error: 'Name and score are required' });
    }
    
    let previousScore = null;
    let comparison = null;

    if (fs.existsSync(moodFilePath)) {
        try {
            const fileContents = fs.readFileSync(moodFilePath, 'utf8');
            const lines = fileContents.trim().split(/\r?\n/).filter(Boolean);
            if (lines.length > 0) {
                const lastLine = lines[lines.length - 1];
                const parts = lastLine.split('|');
                const lastScore = Number(parts[1]);
                if (!Number.isNaN(lastScore)) {
                    previousScore = lastScore;
                    if (score < lastScore) comparison = 'Improved 😊';
                    else if (score === lastScore) comparison = 'Same 😐';
                    else comparison = 'Worse 😔';
                }
            }
        } catch (err) {
            console.warn('Could not read mood file:', err.message);
        }
    }

    const result = {
        id: assessmentResults.length + 1,
        name,
        score,
        state,
        timestamp: timestamp || new Date().toISOString()
    };
    
    assessmentResults.push(result);

    try {
        const recordLine = `${name}|${score}|${new Date().toISOString()}\n`;
        fs.appendFileSync(moodFilePath, recordLine, 'utf8');
    } catch (err) {
        console.warn('Could not write mood file:', err.message);
    }
    
    res.json({
        success: true,
        message: 'Assessment result saved',
        data: result,
        previousScore,
        comparison
    });
});

// Get all results (for admin purposes)
app.get('/api/results', (req, res) => {
    res.json({
        total: assessmentResults.length,
        results: assessmentResults
    });
});

// Get statistics
app.get('/api/statistics', (req, res) => {
    if (assessmentResults.length === 0) {
        return res.json({
            total: 0,
            averageScore: 0,
            goodState: 0,
            mediumState: 0,
            highState: 0
        });
    }
    
    const totalScore = assessmentResults.reduce((sum, result) => sum + result.score, 0);
    const averageScore = totalScore / assessmentResults.length;
    
    const states = assessmentResults.reduce((acc, result) => {
        if (result.score <= 2) acc.good++;
        else if (result.score <= 4) acc.medium++;
        else acc.high++;
        return acc;
    }, { good: 0, medium: 0, high: 0 });
    
    res.json({
        total: assessmentResults.length,
        averageScore: averageScore.toFixed(2),
        goodState: states.good,
        mediumState: states.medium,
        highState: states.high
    });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Serve admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/admin.html'));
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Mental Health Checker API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║   Mental Health Checker Backend        ║
    ║   Server running on port ${PORT}        ║
    ║   Visit: http://localhost:${PORT}      ║
    ╚════════════════════════════════════════╝
    `);
});
