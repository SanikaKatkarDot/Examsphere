require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Java Programming";
const testNumber = 4;
const questions = [
    {
        question: "Which file extension is used for a compiled Java class file?",
        options: [".java", ".class", ".jar", ".byte"],
        answer: ".class"
    },
    {
        question: "Which keyword declares a fixed set of named constants?",
        options: ["enum", "constant", "define", "fixed"],
        answer: "enum"
    },
    {
        question: "What is the result of widening an `int` value to a `long`?",
        options: [
            "It is done implicitly without losing the value",
            "It always truncates the value",
            "It requires parsing from a String",
            "It is not allowed"
        ],
        answer: "It is done implicitly without losing the value"
    },
    {
        question: "Which keyword allows a method to accept a variable number of arguments?",
        options: ["var", "args", "...", "params"],
        answer: "..."
    },
    {
        question: "What is the purpose of a `package` declaration in a Java source file?",
        options: [
            "To place the type in a named namespace",
            "To start program execution",
            "To allocate memory for an object",
            "To declare a loop"
        ],
        answer: "To place the type in a named namespace"
    },
    {
        question: "Which statement about Java's `char` type is correct?",
        options: [
            "It stores a single UTF-16 code unit",
            "It stores only whole numbers",
            "It stores an entire sentence",
            "It is a 1-bit boolean value"
        ],
        answer: "It stores a single UTF-16 code unit"
    },
    {
        question: "Which construct automatically closes a resource that implements `AutoCloseable`?",
        options: ["try-with-resources", "if-with-resources", "synchronized", "switch"],
        answer: "try-with-resources"
    },
    {
        question: "Which class is designed for efficiently building a mutable sequence of characters?",
        options: ["StringBuilder", "String", "Character", "Formatter"],
        answer: "StringBuilder"
    },
    {
        question: "Which modifier allows a field to be accessed by classes in the same package when no other modifier is specified?",
        options: ["package-private", "private", "protected", "public"],
        answer: "package-private"
    },
    {
        question: "What does autoboxing do in Java?",
        options: [
            "Converts a primitive value to its corresponding wrapper object automatically",
            "Converts every object into a primitive automatically",
            "Serializes an object into a file",
            "Copies an object into the call stack"
        ],
        answer: "Converts a primitive value to its corresponding wrapper object automatically"
    },
    {
        question: "Which keyword can be used in a switch statement to prevent execution from continuing into the next case?",
        options: ["break", "continue", "skip", "stop"],
        answer: "break"
    },
    {
        question: "Which interface must a class implement to provide a natural ordering for its instances?",
        options: ["Comparable", "Runnable", "Serializable", "Appendable"],
        answer: "Comparable"
    },
    {
        question: "What does the `transient` modifier indicate for an instance field?",
        options: [
            "The field should be excluded from default serialization",
            "The field is shared by every instance",
            "The field cannot be changed",
            "The field is visible to all packages"
        ],
        answer: "The field should be excluded from default serialization"
    },
    {
        question: "Which type is used to represent a value that is either `true` or `false`?",
        options: ["boolean", "byte", "char", "double"],
        answer: "boolean"
    },
    {
        question: "What is a key property of a Java `record`?",
        options: [
            "It provides a concise declaration for data-carrying classes",
            "It can only contain static methods",
            "It is a special kind of thread",
            "It must extend another record"
        ],
        answer: "It provides a concise declaration for data-carrying classes"
    }
];

async function seedJavaTest4Questions() {
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
            `Java Test 4 seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Java Test 4 questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaTest4Questions();
