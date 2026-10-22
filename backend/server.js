const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load .env variables
const connectDB = require("./config/db");

const app = express();

connectDB();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:3000"
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
            return callback(null, true);
        }
        return callback(null, !process.env.FRONTEND_URL);
    }
}));
app.use(express.json());

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

app.get("/", (req, res) => {
    res.send("ExamSphere API is running. Open the frontend Vercel URL to use the website.");
});

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "ExamSphere" });
});

const PORT = process.env.PORT || 5000;

if (process.env.VERCEL !== "1") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;