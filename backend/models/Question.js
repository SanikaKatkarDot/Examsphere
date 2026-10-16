const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },

    options: {
        type: [String],
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    testNumber: {
        type: Number,
        min: 1,
        max: 5
    },

    marks: {
        type: Number,
        default: 1
    }

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Question",
    questionSchema
);