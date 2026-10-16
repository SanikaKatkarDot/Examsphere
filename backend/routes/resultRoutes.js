const express = require("express");

const Result = require("../models/Result");

const router = express.Router();


// ======================================
// GET ALL RESULTS (Admin)
// ======================================

router.get("/", async (req, res) => {

    try {

        const results =
            await Result.find()
                .populate("userId", "name email course")
                .sort({ createdAt: -1 });


        res.status(200).json({

            message: "Results retrieved successfully",
            
            total: results.length,
            
            results

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch results"

        });

    }

});


// ======================================
// SUBMIT RESULT
// ======================================

router.post("/", async (req, res) => {

    try {

        const {
            userId,
            score,
            totalQuestions,
            subject
        } = req.body;


        const percentage =
            ((score / totalQuestions) * 100)
                .toFixed(2);


        const result =
            await Result.create({

                userId,

                score,

                totalQuestions,

                percentage,

                subject

            });


        res.status(201).json({

            message: "Result submitted successfully",

            result

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Result submission failed",

            error: error.message

        });

    }

});


// ======================================
// GET USER RESULTS
// ======================================

router.get("/user/:userId", async (req, res) => {

    try {

        const results =
            await Result.find({

                userId: req.params.userId

            }).sort({

                createdAt: -1

            });


        res.json(results);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch results"

        });

    }

});


module.exports = router;