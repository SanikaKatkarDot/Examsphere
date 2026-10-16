require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Java Programming";
const testNumber = 5;
const questions = [
    {
        question: "Which Stream operation keeps only elements that satisfy a condition?",
        options: ["filter", "map", "reduce", "collect"],
        answer: "filter"
    },
    {
        question: "What does `Optional.empty()` represent?",
        options: [
            "An Optional with no value present",
            "A null Optional reference",
            "A completed background task",
            "An empty Java package"
        ],
        answer: "An Optional with no value present"
    },
    {
        question: "Which class is commonly used to submit tasks to a pool of worker threads?",
        options: ["ExecutorService", "StringBuilder", "FileReader", "Scanner"],
        answer: "ExecutorService"
    },
    {
        question: "What does the `synchronized` keyword help ensure when multiple threads access a guarded block?",
        options: [
            "Only one thread at a time executes that block for the same monitor",
            "The block always runs on the main thread",
            "The block cannot throw an exception",
            "The block executes without bytecode"
        ],
        answer: "Only one thread at a time executes that block for the same monitor"
    },
    {
        question: "Which JDBC object is designed to execute a parameterized SQL statement?",
        options: ["PreparedStatement", "File", "StringTokenizer", "Optional"],
        answer: "PreparedStatement"
    },
    {
        question: "What is the main purpose of the `volatile` modifier on a field?",
        options: [
            "To make updates to the field visible across threads",
            "To make the field constant",
            "To prevent the field from being serialized",
            "To allow access without declaring a type"
        ],
        answer: "To make updates to the field visible across threads"
    },
    {
        question: "Which Java type is generally preferred for accurate decimal monetary calculations?",
        options: ["BigDecimal", "float", "double", "AtomicInteger"],
        answer: "BigDecimal"
    },
    {
        question: "Which contract should be maintained when overriding `equals()`?",
        options: [
            "Equal objects must have the same `hashCode()`",
            "Equal objects must have different `hashCode()` values",
            "`equals()` must always return false for null",
            "`equals()` must modify both objects"
        ],
        answer: "Equal objects must have the same `hashCode()`"
    },
    {
        question: "Which annotation marks a method as a source of values for a parameterized test in JUnit 5?",
        options: ["@MethodSource", "@Override", "@FunctionalInterface", "@SafeVarargs"],
        answer: "@MethodSource"
    },
    {
        question: "Which API provides a read-only view of a directory's entries using a stream?",
        options: ["Files.list()", "System.gc()", "Thread.sleep()", "Math.random()"],
        answer: "Files.list()"
    },
    {
        question: "What is the purpose of the `module-info.java` file?",
        options: [
            "To declare a module and its dependencies or exports",
            "To configure the JVM garbage collector at runtime",
            "To store application user data",
            "To define a Java record"
        ],
        answer: "To declare a module and its dependencies or exports"
    },
    {
        question: "Which keyword begins a multi-branch exception handler after a `try` block?",
        options: ["catch", "assert", "yield", "import"],
        answer: "catch"
    },
    {
        question: "Which class can load a class by its fully qualified name at runtime?",
        options: ["Class", "PackageInfo", "ThreadGroup", "ModuleLayer.Controller"],
        answer: "Class"
    },
    {
        question: "Which Stream terminal operation combines elements into a single result using an accumulator?",
        options: ["reduce", "peek", "sorted", "distinct"],
        answer: "reduce"
    },
    {
        question: "Which interface is designed to represent a function that accepts one argument and produces a result?",
        options: ["Function<T, R>", "Predicate<T>", "Consumer<T>", "Runnable"],
        answer: "Function<T, R>"
    }
];

async function seedJavaTest5Questions() {
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
            `Java Test 5 seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Java Test 5 questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedJavaTest5Questions();
