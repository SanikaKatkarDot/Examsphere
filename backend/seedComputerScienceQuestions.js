require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

const subject = "Computer Science";
const questions = [
    {
        question: "What is the main function of an Operating System?",
        options: [
            "To create websites",
            "To manage computer hardware and software resources",
            "To design graphics",
            "To write programs"
        ],
        answer: "To manage computer hardware and software resources"
    },
    {
        question: "Which of the following is an example of an Operating System?",
        options: ["MS Word", "Google Chrome", "Windows", "MySQL"],
        answer: "Windows"
    },
    {
        question: "Which component of an OS manages the CPU and memory?",
        options: ["Kernel", "Compiler", "Browser", "Database"],
        answer: "Kernel"
    },
    {
        question: "What is a process?",
        options: [
            "A program in execution",
            "A computer file",
            "A hardware device",
            "A programming language"
        ],
        answer: "A program in execution"
    },
    {
        question: "Which scheduling algorithm executes the process that arrives first?",
        options: ["Round Robin", "FCFS", "SJF", "Priority Scheduling"],
        answer: "FCFS"
    },
    {
        question: "What does FCFS stand for?",
        options: [
            "First Come First Served",
            "First Computer First System",
            "Fast CPU First Service",
            "First Control File System"
        ],
        answer: "First Come First Served"
    },
    {
        question: "Which scheduling algorithm gives each process a fixed time slice?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answer: "Round Robin"
    },
    {
        question: "What is deadlock?",
        options: [
            "When a computer shuts down",
            "When processes wait indefinitely for resources",
            "When memory becomes empty",
            "When CPU speed increases"
        ],
        answer: "When processes wait indefinitely for resources"
    },
    {
        question: "Which of the following is NOT a condition for deadlock?",
        options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "Circular Wait",
            "Process Termination"
        ],
        answer: "Process Termination"
    },
    {
        question: "What is virtual memory?",
        options: [
            "Extra physical CPU",
            "A technique that uses disk space as an extension of RAM",
            "A type of software",
            "A type of processor"
        ],
        answer: "A technique that uses disk space as an extension of RAM"
    },
    {
        question: "Which memory management technique divides memory into fixed-size blocks?",
        options: ["Paging", "Segmentation", "Fragmentation", "Swapping"],
        answer: "Paging"
    },
    {
        question: "Which of the following is used for communication between processes?",
        options: ["IPC", "CPU", "BIOS", "ROM"],
        answer: "IPC"
    },
    {
        question: "What does IPC stand for?",
        options: [
            "Internal Process Control",
            "Inter-Process Communication",
            "Internet Process Connection",
            "Input Process Control"
        ],
        answer: "Inter-Process Communication"
    },
    {
        question: "Which of the following is a type of system call?",
        options: ["Process Control", "Web Designing", "Image Editing", "Video Streaming"],
        answer: "Process Control"
    },
    {
        question: "Which OS is open-source?",
        options: ["Linux", "Windows", "macOS", "MS-DOS"],
        answer: "Linux"
    }
];

async function seedComputerScienceQuestions() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_exam_portal"
        );

        const operations = questions.map((question) => ({
            updateOne: {
                filter: { subject, question: question.question },
                update: { $set: { ...question, subject } },
                upsert: true
            }
        }));

        const result = await Question.bulkWrite(operations);
        console.log(
            `Computer Science question seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`
        );
    } catch (error) {
        console.error("Unable to seed Computer Science questions:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedComputerScienceQuestions();
