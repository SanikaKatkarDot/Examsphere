
const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

// ================= ADMIN REGISTER =================

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin email already registered"
            });
        }

        const admin = new Admin({
            name,
            email,
            password
        });

        await admin.save();

        res.status(201).json({
            message: "Admin registration successful"
        });

    } catch (error) {
        console.log("Admin Registration Error:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


// ================= ADMIN LOGIN =================

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        if (admin.password !== password) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Admin login successful",
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });

    } catch (error) {
        console.log("Admin Login Error:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


// ================= EXPORT =================

module.exports = router;
