require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Python Programming";
const questions = [
    {
        question: "Who developed Python?",
        options: [
            "James Gosling",
            "Guido van Rossum",
            "Dennis Ritchie",
            "Bjarne Stroustrup"
        ],
        answer: "Guido van Rossum"
    },
    {
        question: "Which symbol is used for a single-line comment in Python?",
        options: ["//", "/* */", "#", "--"],
        answer: "#"
    },
    {
        question: "Which function is used to display output in Python?",
        options: ["display()", "print()", "show()", "output()"],
        answer: "print()"
    },
    {
        question: "Which of the following is a valid Python variable?",
        options: ["2name", "class", "student_name", "student-name"],
        answer: "student_name"
    },
    {
        question: "Which data type is used to store True or False values?",
        options: ["String", "Integer", "Boolean", "Float"],
        answer: "Boolean"
    },
    {
        question: "Which data structure stores an ordered collection that can be changed?",
        options: ["Tuple", "List", "Set", "String"],
        answer: "List"
    },
    {
        question: "Which brackets are used to create a Python list?",
        options: ["( )", "{ }", "[ ]", "< >"],
        answer: "[ ]"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "def", "func"],
        answer: "def"
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "//", "%%"],
        answer: "**"
    },
    {
        question: "What is the output of print(10 // 3)?",
        options: ["3.33", "3", "4", "1"],
        answer: "3"
    },
    {
        question: "Which keyword is used to create a loop over a sequence?",
        options: ["repeat", "loop", "for", "iterate"],
        answer: "for"
    },
    {
        question: "Which method adds an element to the end of a list?",
        options: ["add()", "insert()", "append()", "push()"],
        answer: "append()"
    },
    {
        question: "Which keyword is used to handle exceptions in Python?",
        options: ["error", "catch", "try", "handle"],
        answer: "try"
    },
    {
        question: "Which of these is immutable in Python?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        answer: "Tuple"
    },
    {
        question: "What is the extension of a Python source file?",
        options: [".java", ".py", ".python", ".pt"],
        answer: ".py"
    }
];

async function seedPythonQuestions() {
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
            `Python Programming question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Python Programming questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedPythonQuestions();
