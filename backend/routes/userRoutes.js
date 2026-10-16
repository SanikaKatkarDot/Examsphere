const express = require("express");
const User = require("../models/User");

const router = express.Router();

// ================= GET ALL USERS (Admin) =================

router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-password -confirmPassword");
        
        res.status(200).json({
            message: "Users retrieved successfully",
            total: users.length,
            users
        });

    } catch (error) {
        console.log("Error fetching users:", error);

        res.status(500).json({
            message: "Unable to fetch users"
        });
    }
});

// ================= REGISTER =================

router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            course,
            password,
            confirmPassword
        } = req.body;

        if (
            !name ||
            !email ||
            !course ||
            !password ||
            !confirmPassword
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const user = new User({
            name,
            email,
            course,
            password
        });

        await user.save();

        res.status(201).json({
            message: "Registration successful"
        });

    } catch (error) {
        console.log("Registration Error:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


// ================= LOGIN =================

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                course: user.course
            }
        });

    } catch (error) {
        console.log("Login Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// ================= EXPORT =================

module.exports = router;