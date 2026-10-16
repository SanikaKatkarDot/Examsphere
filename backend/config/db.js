const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_exam_portal";
        
        await mongoose.connect(mongoURI);

        console.log("MongoDB Connected Successfully");

    } catch (error) {

        console.log("MongoDB Connection Failed");
        console.log(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;