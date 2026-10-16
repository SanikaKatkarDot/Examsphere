const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    score: {
        type: Number,
        required: true
    },

    totalQuestions: {
        type: Number,
        required: true
    },

    percentage: {
        type: Number,
        required: true
    },

    subject: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Result",
    resultSchema
);