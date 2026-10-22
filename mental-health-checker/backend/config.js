// Configuration File - Mental Health Checker
// Edit this file to customize the application

module.exports = {
    // Server Configuration
    server: {
        port: process.env.PORT || 3000,
        host: 'localhost'
    },

    // Application Questions (6 questions + gender/love)
    questions: [
        "Do you feel tired most of the time?",
        "Have you been feeling sad or low for several days?",
        "Are you having trouble sleeping or eating?",
        "Do you feel anxious or worried often?",
        "Do you feel disconnected from friends/family?",
        "Are you feeling overwhelmed?"
    ],

    // Affirmations to display to users (from Java version)
    affirmations: [
        "You are resilient and capable of facing life's challenges.",
        "Your positive energy brightens the world around you.",
        "Keep believing in yourself, you are doing amazing!",
        "You are strong, even on days you feel tired.",
        "You deserve rest and peace...be kind to yourself.",
        "Every small step you take matters. Keep going!",
        "You are not alone...Help and support are always available.",
        "You are worthy of love, care, and healing.",
        "Reaching out for help is a sign of strength, not weakness."
    ],

    // Score thresholds for mental state assessment
    scoreThresholds: {
        good: { max: 2, label: 'Good Mental State' },
        medium: { max: 4, label: 'Mild Stress' },
        high: { max: 7, label: 'Needs Professional Attention' }
    },

    // Wellness tips based on mental state
    tips: {
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
    },

    // UI Colors (CSS values)
    colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        good: '#28a745',
        medium: '#ffc107',
        high: '#dc3545',
        text: '#333',
        lightText: '#666',
        background: '#f9f9f9'
    },

    // Crisis Resources
    resources: {
        us: {
            suicide: "1-800-273-8255",
            crisis_text: "Text HOME to 741741",
            name: "National Suicide Prevention Lifeline"
        },
        uk: {
            samaritans: "116 123",
            childline: "0800 1111"
        },
        ca: {
            crisis: "1-833-456-4566"
        },
        au: {
            lifeline: "13 11 14",
            kids: "1800 55 1800"
        }
    },

    // Gender-specific recommendations (from Java version)
    genderRecommendations: {
        girl: [
            "thewizardliz",
            "Tam Kaur",
            "simmonsquared",
            "A Better You Podcast by Fernanda",
            "Bahja Abdi"
        ],
        boy: [
            "Iman Gadzhi",
            "Ibrahim Undone",
            "Jay Shetty",
            "Akeem Nkeem",
            "Nathaniel Drew",
            "Alpha M."
        ],
        other: [
            "Iman Gadzhi",
            "Ibrahim Undone",
            "Jay Shetty",
            "simmonsquared",
            "A Better You Podcast by Fernanda",
            "First Man"
        ]
    },

    // Love/relationship support message
    loveSupportMessage: "If they wanted to, they would. If they won't, someone else will. " +
        "You're not asking for too much - you're just asking the wrong person. " +
        "Don't waste time chasing attention from someone who doesn't value you; " +
        "the right person will respect and appreciate you. " +
        "Focus on building yourself and your career, because they won't pay your bills.",
