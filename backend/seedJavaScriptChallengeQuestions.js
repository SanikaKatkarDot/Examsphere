require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "JavaScript Challenge";
const questions = [
    {
        question: "What is JavaScript mainly used for?",
        options: [
            "Styling web pages",
            "Adding interactivity to web pages",
            "Creating databases",
            "Managing servers only"
        ],
        answer: "Adding interactivity to web pages"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Number", "Boolean", "Float"],
        answer: "Float"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "/* */", "#"],
        answer: "//"
    },
    {
        question: "Which method is used to print output in the browser console?",
        options: ["print()", "console.log()", "display()", "write.console()"],
        answer: "console.log()"
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "let", "static", "final"],
        answer: "let"
    },
    {
        question: "Which keyword is used to declare a constant?",
        options: ["constant", "let", "const", "fixed"],
        answer: "const"
    },
    {
        question: "What is the output of typeof \"Hello\"?",
        options: ["text", "String", "string", "char"],
        answer: "string"
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "add()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["delete()", "remove()", "pop()", "shift()"],
        answer: "pop()"
    },
    {
        question: "Which function converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which event occurs when a user clicks an HTML element?",
        options: ["onload", "onchange", "onclick", "onhover"],
        answer: "onclick"
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "method", "fun"],
        answer: "function"
    },
    {
        question: "Which of the following is used to select an HTML element by its ID?",
        options: [
            "document.getElementById()",
            "document.getElement()",
            "document.selectId()",
            "document.findId()"
        ],
        answer: "document.getElementById()"
    }
];

async function seedJavaScriptChallengeQuestions() {
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
            `JavaScript Challenge question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed JavaScript Challenge questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaScriptChallengeQuestions();
