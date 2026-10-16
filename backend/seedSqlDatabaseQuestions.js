require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Database & SQL";
const questions = [
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "Standard Question Language",
            "System Query Language"
        ],
        answer: "Structured Query Language"
    },
    {
        question: "Which command is used to retrieve data from a database?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: "SELECT"
    },
    {
        question: "Which command is used to add new records to a table?",
        options: ["ADD", "CREATE", "INSERT", "UPDATE"],
        answer: "INSERT"
    },
    {
        question: "Which SQL command is used to modify existing records?",
        options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
        answer: "UPDATE"
    },
    {
        question: "Which command is used to remove records from a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: "DELETE"
    },
    {
        question: "Which SQL clause is used to filter records?",
        options: ["FILTER", "WHERE", "HAVING", "CHECK"],
        answer: "WHERE"
    },
    {
        question: "Which key uniquely identifies each record in a table?",
        options: ["Foreign Key", "Candidate Key", "Primary Key", "Alternate Key"],
        answer: "Primary Key"
    },
    {
        question: "What is the purpose of a Foreign Key?",
        options: [
            "To uniquely identify every table",
            "To connect two related tables",
            "To delete a database",
            "To sort records"
        ],
        answer: "To connect two related tables"
    },
    {
        question: "Which SQL command is used to create a new table?",
        options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
        answer: "CREATE TABLE"
    },
    {
        question: "Which SQL function returns the number of records?",
        options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
        answer: "COUNT()"
    },
    {
        question: "Which clause is used to sort query results?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        answer: "ORDER BY"
    },
    {
        question: "Which SQL clause groups rows having the same values?",
        options: ["GROUP BY", "ORDER BY", "COLLECT BY", "SORT BY"],
        answer: "GROUP BY"
    },
    {
        question: "Which JOIN returns only matching records from both tables?",
        options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
        answer: "INNER JOIN"
    },
    {
        question: "Which command removes a table completely from the database?",
        options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
        answer: "DROP TABLE"
    },
    {
        question: "What is DBMS?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Monitoring Service",
            "Data Management Software"
        ],
        answer: "Database Management System"
    }
];

async function seedSqlDatabaseQuestions() {
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
            `Database & SQL question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Database & SQL questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedSqlDatabaseQuestions();
