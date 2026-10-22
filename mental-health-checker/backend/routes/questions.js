const express = require('express');
const router = express.Router();

// Questions data
const questions = [
    {
        id: 1,
        text: "Do you feel tired most of the time?"
    },
    {
        id: 2,
        text: "Have you been feeling sad or low for several days?"
    },
    {
        id: 3,
        text: "Are you having trouble sleeping or eating?"
    },
    {
        id: 4,
        text: "Do you feel anxious or worried often?"
    },
    {
        id: 5,
        text: "Do you feel disconnected from friends/family?"
    },
    {
        id: 6,
        text: "Are you feeling overwhelmed?"
    }
];

// Affirmations data
const affirmations = [
    "You are resilient and capable of facing life's challenges.",
    "Your positive energy brightens the world around you.",
    "Keep believing in yourself, you are doing amazing!",
    "You are strong, even on days you feel tired.",
    "You deserve rest and peace...be kind to yourself.",
    "Every small step you take matters. Keep going!",
    "You are not alone...Help and support are always available.",
    "You are worthy of love, care, and healing.",
    "Reaching out for help is a sign of strength, not weakness."
];

// Get all questions
router.get('/questions', (req, res) => {
    res.json({
        total: questions.length,
        questions: questions
    });
});

// Get specific question
router.get('/questions/:id', (req, res) => {
    const question = questions.find(q => q.id === parseInt(req.params.id));
    
    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    
    res.json(question);
});

// Get affirmations
router.get('/affirmations', (req, res) => {
    res.json({
        total: affirmations.length,
        affirmations: affirmations
    });
});

// Calculate mental health assessment
router.post('/calculate-assessment', (req, res) => {
    const { answers } = req.body;
    
    if (!answers || !Array.isArray(answers) || answers.length !== questions.length) {
        return res.status(400).json({ 
            error: 'Invalid answers. Must provide 6 boolean answers.' 
        });
    }
    
    // Calculate score (each 'true' adds 1 point)
    const score = answers.filter(answer => answer === true).length;
    
    // Determine mental state (matching Java version)
    let state, category;
    if (score == 0 || score == 1) {
        state = 'good';
        category = 'Good Mental State';
    } else if (score == 2 || score == 3) {
        state = 'medium';
        category = 'Mild Stress';
    } else {
        state = 'high';
        category = 'Needs Professional Attention';
    }
    
    res.json({
        score: score,
        maxScore: questions.length,
        state: state,
        category: category,
        percentage: ((score / questions.length) * 100).toFixed(2)
    });
});

module.exports = router;
