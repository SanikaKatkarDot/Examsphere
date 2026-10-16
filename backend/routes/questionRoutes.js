const express = require("express");

const Question = require("../models/Question");

const router = express.Router();


// ======================================
// GET ALL QUESTIONS (Admin)
// ======================================

router.get("/all", async (req, res) => {

    try {

        const questions =
            await Question.find();


        res.status(200).json({

            message: "Questions retrieved successfully",
            
            total: questions.length,
            
            questions

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch questions"

        });

    }

});


// ======================================
// GET QUESTIONS
// ======================================

router.get("/", async (req, res) => {

    try {

        const questions =
            await Question.find()
                .select("-answer");


        res.json(questions);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch questions"

        });

    }

});


// ======================================
// GET QUESTIONS BY SUBJECT
// ======================================

router.get("/subject/:subject", async (req, res) => {

    try {

        const subjectName = req.params.subject;
        const subjectValues = subjectName === "Database & SQL"
            ? ["Database & SQL", "SQL and Database"]
            : [subjectName];

        const query = {
            subject: { $in: subjectValues }
        };
        const requestedTestNumber = req.query.testNumber;

        if (requestedTestNumber !== undefined) {
            const testNumber = Number(requestedTestNumber);

            if (
                !Number.isInteger(testNumber) ||
                testNumber < 1 ||
                testNumber > 5
            ) {
                return res.status(400).json({
                    message: "Test number must be an integer between 1 and 5"
                });
            }

            const assignedQuestions = await Question.find({
                ...query,
                testNumber
            });

            const questions = assignedQuestions.length > 0
                ? assignedQuestions
                : await Question.find({
                    ...query,
                    $or: [
                        { testNumber: { $exists: false } },
                        { testNumber: null }
                    ]
                });

            return res.json(questions);
        }

        const questions = await Question.find(query);


        res.json(questions);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch questions"

        });

    }

});


// ======================================
// DELETE ALL QUESTIONS BY SUBJECT
// ======================================

router.delete("/subject/:subject", async (req, res) => {

    try {

        const subjectName = req.params.subject;
        const subjectValues = subjectName === "Database & SQL"
            ? ["Database & SQL", "SQL and Database"]
            : [subjectName];

        const result = await Question.deleteMany({

            subject: { $in: subjectValues }

        });


        res.json({

            message: `${result.deletedCount} question(s) deleted successfully`,

            deletedCount: result.deletedCount

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Questions deletion failed"

        });

    }

});


// ======================================
// ADD QUESTION
// ======================================

router.post("/", async (req, res) => {

    try {

        const question =
            await Question.create(req.body);


        res.status(201).json({

            message: "Question added successfully",

            question

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Question creation failed",

            error: error.message

        });

    }

});


// ======================================
// DELETE QUESTION
// ======================================

router.delete("/:id", async (req, res) => {

    try {

        await Question.findByIdAndDelete(
            req.params.id
        );


        res.json({

            message: "Question deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Question deletion failed"

        });

    }

});


module.exports = router;