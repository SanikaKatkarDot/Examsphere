require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

async function seedQuestionSet(questions) {
    try {
        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error("The seed must contain at least one question.");
        }

        const { subject, testNumber } = questions[0];
        if (!subject || !Number.isInteger(testNumber) || testNumber < 1 || testNumber > 5) {
            throw new Error("Each seeded question must have a subject and test number from 1 to 5.");
        }

        if (questions.some((question) =>
            question.subject !== subject || question.testNumber !== testNumber
        )) {
            throw new Error("All questions in a seed must use the same subject and test number.");
        }

        await mongoose.connect(
            process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_exam_portal"
        );

        const operations = questions.map((question) => ({
            updateOne: {
                filter: { subject, testNumber, question: question.question },
                update: { $set: question },
                upsert: true
            }
        }));

        const result = await Question.bulkWrite(operations);
        console.log(
            `${subject} Test ${testNumber} seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed questions:", error.message);
        process.exitCode = 1;
    } finally {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.disconnect();
        }
    }
}

module.exports = seedQuestionSet;
