const express = require("express");

const Contact = require("../models/Contact");

const router = express.Router();


// ======================================
// GET ALL MESSAGES (Admin)
// ======================================

router.get("/", async (req, res) => {

    try {

        const messages =
            await Contact.find()
                .sort({ createdAt: -1 });


        res.status(200).json({

            message: "Messages retrieved successfully",
            
            total: messages.length,
            
            messages

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch messages"

        });

    }

});


// ======================================
// SEND MESSAGE
// ======================================

router.post("/", async (req, res) => {

    try {

        const {
            name,
            email,
            subject,
            message
        } = req.body;


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }


        const contact =
            await Contact.create({

                name,

                email,

                subject,

                message

            });


        res.status(201).json({

            message: "Message sent successfully",

            contact

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Message sending failed"

        });

    }

});


module.exports = router;