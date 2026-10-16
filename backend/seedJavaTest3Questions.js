require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Java Programming";
const testNumber = 3;
const questions = [
    {
        question: "What is the purpose of a constructor in Java?",
        options: [
            "To initialize a new object",
            "To destroy an object",
            "To import a package",
            "To declare an interface"
        ],
        answer: "To initialize a new object"
    },
    {
        question: "Which keyword prevents a method from being overridden in a subclass?",
        options: ["static", "final", "volatile", "native"],
        answer: "final"
    },
    {
        question: "Which collection stores key-value pairs and does not guarantee iteration order?",
        options: ["ArrayList", "HashMap", "LinkedList", "TreeSet"],
        answer: "HashMap"
    },
    {
        question: "What does the `static` keyword indicate for a field?",
        options: [
            "The field belongs to the class rather than each instance",
            "The field can only store text",
            "The field cannot be read",
            "The field is copied into every method"
        ],
        answer: "The field belongs to the class rather than each instance"
    },
    {
        question: "Which exception type must generally be caught or declared when thrown?",
        options: [
            "Checked exception",
            "Error",
            "RuntimeException",
            "NullPointerException"
        ],
        answer: "Checked exception"
    },
    {
        question: "What does the `this()` call do when used in a constructor?",
        options: [
            "Calls another constructor in the same class",
            "Calls the parent class constructor",
            "Creates a new thread",
            "Returns the current object"
        ],
        answer: "Calls another constructor in the same class"
    },
    {
        question: "Which operator uses short-circuit evaluation for logical AND?",
        options: ["&", "&&", "|", "^"],
        answer: "&&"
    },
    {
        question: "How do you get the number of elements in an array named `values`?",
        options: ["values.size()", "values.length", "values.count()", "values.length()"],
        answer: "values.length"
    },
    {
        question: "Which keyword is used to declare a class that cannot be instantiated directly?",
        options: ["abstract", "transient", "synchronized", "strictfp"],
        answer: "abstract"
    },
    {
        question: "Which interface represents an ordered collection that allows duplicate elements?",
        options: ["Set", "List", "Map", "Queue"],
        answer: "List"
    },
    {
        question: "What is the main benefit of Java generics?",
        options: [
            "They provide compile-time type safety for parameterized types",
            "They make every method run on a separate thread",
            "They automatically save objects to a database",
            "They remove the need to compile Java code"
        ],
        answer: "They provide compile-time type safety for parameterized types"
    },
    {
        question: "Which block is designed to run after `try` and `catch`, whether or not an exception occurs?",
        options: ["final", "finally", "throws", "assert"],
        answer: "finally"
    },
    {
        question: "What does the JVM primarily execute?",
        options: [
            "Java bytecode",
            "HTML markup",
            "SQL statements",
            "Source comments"
        ],
        answer: "Java bytecode"
    },
    {
        question: "Which annotation tells the compiler that a method is intended to replace a superclass method?",
        options: ["@Inherited", "@Override", "@FunctionalInterface", "@Deprecated"],
        answer: "@Override"
    },
    {
        question: "Which access level allows a member to be used only within the class where it is declared?",
        options: ["public", "protected", "package-private", "private"],
        answer: "private"
    }
];

async function seedJavaTest3Questions() {
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
            `Java Test 3 seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Java Test 3 questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaTest3Questions();
