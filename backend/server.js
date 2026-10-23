
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:3000"
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (
            !origin ||
            allowedOrigins.includes(origin) ||
            /\.vercel\.app$/.test(origin)
        ) {
            return callback(null, true);
        }

        return callback(null, !process.env.FRONTEND_URL);
    }
}));

app.use(express.json());

// Wait for MongoDB before handling API requests
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("Database unavailable:", error.message);

        res.status(503).json({
            message: "Database unavailable. Please try again later."
        });
    }
});

// API routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const questionRoutes = require("./routes/questionRoutes");
const resultRoutes = require("./routes/resultRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/contact", contactRoutes);

// Home route
app.get("/", (req, res) => {
    res.send(
        "ExamSphere API is running. Open the frontend Vercel URL to use the website."
    );
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        app: "ExamSphere"
    });
});

const PORT = process.env.PORT || 5000;

// Run locally only; Vercel handles production requests
if (process.env.VERCEL !== "1") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
