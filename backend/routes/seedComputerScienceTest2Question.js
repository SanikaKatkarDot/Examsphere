const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the main purpose of an operating system?",
    options: [
      "To design websites",
      "To manage computer hardware and software resources",
      "To create presentations",
      "To write only Java programs"
    ],
    answer: "To manage computer hardware and software resources",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which of the following is an example of an operating system?",
    options: ["MySQL", "Linux", "HTML", "MongoDB"],
    answer: "Linux",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is a process in an operating system?",
    options: [
      "A program in execution",
      "A storage device",
      "A programming language",
      "A computer network"
    ],
    answer: "A program in execution",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which component of an operating system manages processes?",
    options: ["File manager", "Process scheduler", "Web browser", "Compiler"],
    answer: "Process scheduler",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is multitasking?",
    options: [
      "Running only one program",
      "Running multiple tasks seemingly at the same time",
      "Deleting multiple files",
      "Installing multiple operating systems only"
    ],
    answer: "Running multiple tasks seemingly at the same time",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which scheduling algorithm executes processes in arrival order?",
    options: ["Round Robin", "Shortest Job First", "FCFS", "Priority Scheduling"],
    answer: "FCFS",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is a thread?",
    options: [
      "The smallest unit of CPU execution within a process",
      "A type of hard disk",
      "A database table",
      "A computer virus"
    ],
    answer: "The smallest unit of CPU execution within a process",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is deadlock in an operating system?",
    options: [
      "A computer starting normally",
      "Processes waiting indefinitely for resources held by each other",
      "A file being copied",
      "A program finishing execution"
    ],
    answer: "Processes waiting indefinitely for resources held by each other",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which memory is directly accessed by the CPU for currently running programs and data?",
    options: ["RAM", "DVD", "Pen drive", "Hard disk archive"],
    answer: "RAM",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is virtual memory?",
    options: [
      "Memory used only by the keyboard",
      "A technique that uses disk storage to extend the available memory space",
      "A type of printer",
      "A programming language"
    ],
    answer: "A technique that uses disk storage to extend the available memory space",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which of the following is a file management operation?",
    options: ["Creating a file", "Compiling a class", "Designing a logo", "Connecting CSS"],
    answer: "Creating a file",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the function of a device driver?",
    options: [
      "To manage communication between the OS and a hardware device",
      "To create database tables",
      "To write HTML code",
      "To increase monitor size"
    ],
    answer: "To manage communication between the OS and a hardware device",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which scheduling algorithm gives each process a fixed time slice?",
    options: ["FCFS", "Round Robin", "Shortest Job First", "First Fit"],
    answer: "Round Robin",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the kernel of an operating system?",
    options: [
      "The core part that manages system resources",
      "A text editor",
      "A web server only",
      "A type of database"
    ],
    answer: "The core part that manages system resources",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is booting?",
    options: [
      "Deleting the operating system",
      "Starting a computer and loading the operating system",
      "Formatting a document",
      "Closing a database"
    ],
    answer: "Starting a computer and loading the operating system",
    subject: "Computer Science",
    testNumber: 2,
    marks: 1
  }
];

seedQuestionSet(questions);
