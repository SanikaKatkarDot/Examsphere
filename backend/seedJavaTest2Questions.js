require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Java Programming";
const testNumber = 2;
const questions = [
    {
        question: "Which package is automatically imported in every Java program?",
        options: ["java.util", "java.lang", "java.io", "java.net"],
        answer: "java.lang"
    },
    {
        question: "Which keyword is used to create an object in Java?",
        options: ["class", "new", "object", "create"],
        answer: "new"
    },
    {
        question: "Which loop executes its body at least once?",
        options: ["for", "while", "do-while", "Enhanced for"],
        answer: "do-while"
    },
    {
        question: "Which access modifier allows access from anywhere, subject to module and package accessibility rules?",
        options: ["private", "protected", "public", "Default"],
        answer: "public"
    },
    {
        question: "Which method converts a string into an integer?",
        options: ["Integer.parseInt()", "Integer.toString()", "String.valueOf()", "parse.String()"],
        answer: "Integer.parseInt()"
    },
    {
        question: "Which exception occurs when an integer is divided by zero?",
        options: ["NullPointerException", "ArithmeticException", "IOException", "NumberFormatException"],
        answer: "ArithmeticException"
    },
    {
        question: "Which keyword calls the parent class constructor?",
        options: ["this", "parent", "super", "extends"],
        answer: "super"
    },
    {
        question: "Which class is the root of the Java class hierarchy?",
        options: ["Runnable", "Serializable", "Object", "Comparable"],
        answer: "Object"
    },
    {
        question: "What is the output of this code?\n\nSystem.out.println(5 + 2 + \"Java\");",
        options: ["Java52", "7Java", "52Java", "Java7"],
        answer: "7Java"
    },
    {
        question: "Which keyword is used to define a constant-like variable that cannot be reassigned?",
        options: ["static", "const", "final", "fixed"],
        answer: "final"
    },
    {
        question: "Which method compares the contents of two strings?",
        options: ["==", "compare()", "equals()", "same()"],
        answer: "equals()"
    },
    {
        question: "Which statement skips the current loop iteration and moves to the next one?",
        options: ["break", "continue", "return", "exit"],
        answer: "continue"
    },
    {
        question: "Which Java feature allows one class to have multiple methods with the same name but different parameters?",
        options: ["Abstraction", "Encapsulation", "Method overloading", "Method overriding"],
        answer: "Method overloading"
    },
    {
        question: "Which interface is commonly used to define a task that can be executed by a thread?",
        options: ["Runnable", "Scanner", "Collection", "Comparator"],
        answer: "Runnable"
    },
    {
        question: "Which method returns the number of characters in a Java string?",
        options: ["size()", "count()", "length()", "capacity()"],
        answer: "length()"
    }
];

async function seedJavaTest2Questions() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_exam_portal"
        );

        const operations = questions.map((question) => ({
            updateOne: {
                filter: { subject, testNumber, question: question.question },
                update: { $set: { ...question, subject, testNumber } },
                upsert: true
            }
        }));

        const result = await Question.bulkWrite(operations);
        console.log(
            `Java Test 2 seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Java Test 2 questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaTest2Questions();
