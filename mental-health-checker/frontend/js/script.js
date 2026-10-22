// Mental Health Checker - Frontend Logic

const questions = [
    "Do you feel tired most of the time?",
    "Have you been feeling sad or low for several days?",
    "Are you having trouble sleeping or eating?",
    "Do you feel anxious or worried often?",
    "Do you feel disconnected from friends/family?",
    "Are you feeling overwhelmed?"
];

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

const tips = {
    good: [
        "Continue maintaining healthy habits like regular exercise and sleep",
        "Keep nurturing your relationships and social connections",
        "Practice mindfulness or meditation for overall well-being",
        "Engage in activities you enjoy regularly"
    ],
    medium: [
        "Try to identify stress triggers and manage them",
        "Ensure you're getting 7-9 hours of quality sleep daily",
        "Engage in regular physical activity (30 minutes daily)",
        "Talk to friends or family about how you're feeling",
        "Practice relaxation techniques like deep breathing"
    ],
    high: [
        "Consider reaching out to a mental health professional",
        "Talk to trusted friends or family members about your feelings",
        "Establish a daily routine with regular sleep and meals",
        "Limit stress through time management and delegation",
        "Practice self-compassion and avoid self-blame",
        "If in crisis, contact a mental health helpline"
    ]
};

let currentQuestion = 0;
let score = 0;
let userName = "";
let userGender = "";
let loveProblem = false;
let answers = [];

function startQuestions() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const genderSelect = document.getElementById('genderSelect').value;
    
    if (!nameInput) {
        alert('Please enter your name to continue');
        return;
    }
    
    if (!genderSelect) {
        alert('Please select your gender to continue');
        return;
    }
    
    userName = nameInput;
    userGender = genderSelect;
    currentQuestion = 0;
    score = 0;
    loveProblem = false;
    answers = [];
    
    // Hide intro section, show questions section
    document.getElementById('introSection').classList.add('hidden');
    document.getElementById('questionsSection').classList.remove('hidden');
    
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        // Show love question after main questions
        showLoveQuestion();
        return;
    }
    
    // Update progress (6 questions + 1 love question = 7 total)
    const totalQuestions = questions.length + 1;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
    
    // Display question
    document.getElementById('questionText').textContent = questions[currentQuestion];
}

function showLoveQuestion() {
    // Update progress for love question
    const totalQuestions = questions.length + 1;
    const progress = (totalQuestions / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${totalQuestions} of ${totalQuestions}`;
    
    // Display love question based on gender
    let loveQuestion = "";
    if (userGender === "girl") {
        loveQuestion = "Is it a boy problem?";
    } else if (userGender === "boy") {
        loveQuestion = "Is it a girl problem?";
    } else {
        loveQuestion = "Is there a love or relationship problem?";
    }
    
    document.getElementById('questionText').textContent = loveQuestion;
}

function answerQuestion(answer) {
    answers.push(answer);
    
    if (currentQuestion < questions.length) {
        // Main questions
        if (answer) {
            score++;
        }
        currentQuestion++;
        displayQuestion();
    } else {
        // Love question
        loveProblem = answer;
        showResults();
    }
}

function showResults() {
    // Hide questions section, show results section
    document.getElementById('questionsSection').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    
    // Display name
    document.getElementById('resultName').textContent = userName;
    
    // Display score (out of 6 main questions)
    document.getElementById('scoreValue').textContent = score;
    
    // Update score bar
    const scorePercentage = (score / questions.length) * 100;
    document.getElementById('scoreBarFill').style.width = scorePercentage + '%';
    
    // Determine mental state and show message (matching Java version)
    let state, category, message;
    
    if (score == 0 || score == 1) {
        state = 'good';
        category = 'You seem to be doing well. Keep taking care of yourself!';
        message = '';
    } else if (score == 2 || score == 3) {
        state = 'medium';
        category = 'You might be a little stressed. Try relaxing, talking to a friend, or taking a break.';
        message = '';
    } else {
        state = 'high';
        category = 'You may be struggling emotionally. Please consider talking to a trusted person or seeking help.';
        message = '';
    }
    
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.className = `result-message ${state}`;
    resultMessage.innerHTML = `<strong>${category}</strong><br><br>${message}`;
    
    // Show love support message if applicable
    if (loveProblem) {
        document.getElementById('loveSupportSection').style.display = 'block';
        document.getElementById('loveSupportMessage').textContent = 
            "If they wanted to, they would. If they won't, someone else will. " +
            "You're not asking for too much - you're just asking the wrong person. " +
            "Don't waste time chasing attention from someone who doesn't value you; " +
            "the right person will respect and appreciate you. " +
            "Focus on building yourself and your career, because they won't pay your bills.";
    }
    
    // Display gender-specific recommendations
    displayRecommendations();
    
    // Set default progress report text while backend saves
    document.getElementById('progressReport').textContent = '🌸✨ Checking last saved mood... ✨🌸';
    saveResultToBackend(state);
    
    // Display affirmations
    const affirmationsList = document.getElementById('affirmationsList');
    affirmationsList.innerHTML = '';
    
    // Show 4 random affirmations
    const selectedAffirmations = getRandomAffirmations(4);
    selectedAffirmations.forEach(affirmation => {
        const li = document.createElement('li');
        li.textContent = affirmation;
        affirmationsList.appendChild(li);
    });
    
    // Display tips
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    
    const selectedTips = tips[state];
    selectedTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

function displayRecommendations() {
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';
    
    // Get recommendations based on gender
    let recommendations = [];
    if (userGender === 'girl') {
        recommendations = ["thewizardliz", "Tam Kaur", "simmonsquared", "A Better You Podcast by Fernanda", "Bahja Abdi"];
    } else if (userGender === 'boy') {
        recommendations = ["Iman Gadzhi", "Ibrahim Undone", "Jay Shetty", "Akeem Nkeem", "Nathaniel Drew", "Alpha M."];
    } else {
        recommendations = ["Iman Gadzhi", "Ibrahim Undone", "Jay Shetty", "simmonsquared", "A Better You Podcast by Fernanda", "First Man"];
    }
    
    recommendations.forEach(rec => {
        const div = document.createElement('div');
        div.textContent = rec;
        recommendationsList.appendChild(div);
    });
}

function saveResultToBackend(state) {
    // Prepare data
    const resultData = {
        name: userName,
        score: score,
        state: state,
        timestamp: new Date().toISOString()
    };
    
    // Try to save to backend (optional - gracefully handle if backend is not available)
    fetch('/api/save-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Result saved successfully:', data);
        if (data.previousScore !== undefined && data.comparison) {
            updateProgressReport(data.previousScore, data.comparison);
        } else {
            document.getElementById('progressReport').textContent = '🌸✨ No previous mood record found yet. Keep going! ✨🌸';
        }
    })
    .catch(error => {
        console.warn('Could not save result to backend (backend may not be running):', error);
        document.getElementById('progressReport').textContent = '🌸✨ Unable to load previous mood record. ✨🌸';
        // This is fine - the app still works without backend persistence
    });
}

function updateProgressReport(previousScore, comparison) {
    const report = document.getElementById('progressReport');
    report.textContent = `🌸✨ Last score: ${previousScore}/7 — ${comparison} ✨🌸`;
}

function promptMiniTherapist() {
    const wantTalk = prompt('Do you want to talk? (yes/no)');
    if (!wantTalk) {
        document.getElementById('therapistResponse').textContent = '🌸✨ No worries, I am here when you are ready. ✨🌸';
        return;
    }

    const normalized = wantTalk.trim().toLowerCase();
    if (normalized === 'yes' || normalized === 'y') {
        const userSentence = prompt('Please share one full sentence about how you feel:');
        if (!userSentence) {
            document.getElementById('therapistResponse').textContent = '🌸✨ It’s okay if you don’t want to share right now. Take your time. ✨🌸';
            return;
        }

        const responseText = getTherapistAdvice(userSentence);
        document.getElementById('therapistResponse').textContent = responseText;
    } else {
        document.getElementById('therapistResponse').textContent = '💖 That’s okay. I’m here if you want to talk later. ✨';
    }
}

function getTherapistAdvice(userSentence) {
    const text = userSentence.toLowerCase();
    const displayName = userName ? `${userName}, ` : '';
    let responseText = `${displayName}thank you for sharing. You are doing your best, and that matters. 💖`;

    if (text.includes('sad')) {
        responseText = `${displayName}I’m sorry you feel sad. It helps to pause, breathe deeply, and remind yourself that this feeling can soften with time. 🌸✨`;
    } else if (text.includes('stress')) {
        responseText = `${displayName}stress can feel heavy. Try a short breathing break, drink water, and know that you deserve calm. 💖✨`;
    } else if (text.includes('lonely')) {
        responseText = `${displayName}feeling lonely is hard. You are seen, and reaching out to someone small today can help you feel a little lighter. 🌸`;
    } else if (text.includes('anxious')) {
        responseText = `${displayName}when anxiety shows up, grounding yourself with five slow breaths can help you feel more present. ✨`;
    } else if (text.includes('tired')) {
        responseText = `${displayName}your body and mind may need rest. It’s okay to slow down and care for yourself gently. 💖`;
    } else if (text.includes('overwhelmed')) {
        responseText = `${displayName}take one small step right now. Breaking things into tiny tasks can help the day feel calmer. 🌸`;
    } else {
        responseText = `${displayName}thank you for opening up. You are worthy of gentle care, and small kindnesses to yourself can make a big difference. ✨`;    }

    return responseText;
}

function getRandomAffirmations(count) {
    const shuffled = [...affirmations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function restartAssessment() {
    // Reset all variables
    currentQuestion = 0;
    score = 0;
    userName = "";
    userGender = "";
    loveProblem = false;
    answers = [];
    
    // Clear inputs
    document.getElementById('nameInput').value = '';
    document.getElementById('genderSelect').value = '';
    
    // Hide love support section
    document.getElementById('loveSupportSection').style.display = 'none';
    
    // Show intro section, hide results section
    document.getElementById('introSection').classList.remove('hidden');
    document.getElementById('resultsSection').classList.add('hidden');
    
    // Focus on name input
    document.getElementById('nameInput').focus();
}

// Allow Enter key to start questions
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startQuestions();
        }
    });
});
