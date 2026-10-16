require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Java Programming";
const questions = [
    {
        question: "Which keyword is used to create a class in Java?",
        options: ["function", "class", "struct", "object"],
        answer: "class"
    },
    {
        question: "Which method is the starting point of a Java program?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: "main()"
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "float", "String", "char"],
        answer: "String"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "super"],
        answer: "extends"
    },
    {
        question: "Which keyword is used to create an object?",
        options: ["class", "object", "new", "create"],
        answer: "new"
    },
    {
        question: "What is the default value of an int instance variable?",
        options: ["1", "null", "0", "-1"],
        answer: "0"
    },
    {
        question: "Which concept allows the same method name with different parameters?",
        options: ["Inheritance", "Encapsulation", "Method Overloading", "Abstraction"],
        answer: "Method Overloading"
    },
    {
        question: "Which keyword is used to prevent a class from being inherited?",
        options: ["static", "const", "final", "private"],
        answer: "final"
    },
    {
        question: "Which collection allows duplicate elements?",
        options: ["Set", "HashSet", "ArrayList", "TreeSet"],
        answer: "ArrayList"
    },
    {
        question: "Which exception occurs when dividing an integer by zero?",
        options: ["NullPointerException", "ArithmeticException", "IOException", "NumberFormatException"],
        answer: "ArithmeticException"
    },
    {
        question: "Which keyword is used to handle an exception?",
        options: ["try", "catch", "throw", "error"],
        answer: "catch"
    },
    {
        question: "Which access modifier provides the widest access?",
        options: ["private", "protected", "default", "public"],
        answer: "public"
    },
    {
        question: "Which of these is used to define an interface?",
        options: ["interface", "Interface", "implements", "abstract"],
        answer: "interface"
    },
    {
        question: "What is the size of an int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
        answer: "4 bytes"
    },
    {
        question: "Which keyword refers to the current object in Java?",
        options: ["self", "current", "this", "object"],
        answer: "this"
    }
];

async function seedJavaQuestions() {
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
            `Java question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Java questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaQuestions();