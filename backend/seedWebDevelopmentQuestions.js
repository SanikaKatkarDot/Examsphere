require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Web Development";
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["bgcolor", "background-color", "color-background", "background"],
        answer: "background-color"
    },
    {
        question: "Which language is mainly used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "let", "variable", "Both A and B"],
        answer: "Both A and B"
    },
    {
        question: "Which method is used to select an HTML element by its ID in JavaScript?",
        options: ["getElementById()", "getElement()", "selectById()", "findElement()"],
        answer: "getElementById()"
    },
    {
        question: "Which HTTP method is generally used to send form data to a server?",
        options: ["GET", "POST", "SEND", "PUSH"],
        answer: "POST"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: ["<picture>", "<image>", "<img>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which of the following is a JavaScript framework/library?",
        options: ["React", "MySQL", "HTML", "CSS"],
        answer: "React"
    },
    {
        question: "What is Bootstrap mainly used for?",
        options: [
            "Database management",
            "Creating responsive web interfaces",
            "Server management",
            "Programming databases"
        ],
        answer: "Creating responsive web interfaces"
    },
    {
        question: "Which technology is commonly used to store data on the client side in a browser?",
        options: ["LocalStorage", "NodeStorage", "BrowserSQL", "ClientDB"],
        answer: "LocalStorage"
    },
    {
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Application Process Integration",
            "Advanced Programming Internet",
            "Applied Program Interface"
        ],
        answer: "Application Programming Interface"
    },
    {
        question: "Which status code means 'Not Found' in HTTP?",
        options: ["200", "301", "404", "500"],
        answer: "404"
    }
];

async function seedWebDevelopmentQuestions() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_exam_portal"
        );

        const operations = questions.map((question) => ({
            updateOne: {
                filter: { subject, question: question.question },
                update: { $set: { ...question, subject } },
                upsert: true
            }
        }));

        const result = await Question.bulkWrite(operations);
        console.log(
            `Web Development question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Web Development questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedWebDevelopmentQuestions();
