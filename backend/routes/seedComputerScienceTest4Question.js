const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which scheduling algorithm can assign the CPU to the process with the highest priority?",
    options: ["FCFS", "Priority Scheduling", "FIFO Paging", "Round Robin only"],
    answer: "Priority Scheduling",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the main purpose of a process control block (PCB)?",
    options: [
      "To store information about a process",
      "To store website images",
      "To increase hard disk size",
      "To compile source code"
    ],
    answer: "To store information about a process",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which of the following is a synchronization problem?",
    options: ["Producer-consumer problem", "Binary search", "Sorting an array", "HTML validation"],
    answer: "Producer-consumer problem",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which condition occurs when multiple processes access shared data and the result depends on execution order?",
    options: ["Race condition", "Page fault", "Booting", "Spooling"],
    answer: "Race condition",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which memory allocation method divides memory into variable-sized partitions?",
    options: ["Paging", "Segmentation", "Round Robin", "Spooling"],
    answer: "Segmentation",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is swapping in an operating system?",
    options: [
      "Moving processes between main memory and secondary storage",
      "Changing a file name",
      "Replacing a keyboard",
      "Sorting processes alphabetically"
    ],
    answer: "Moving processes between main memory and secondary storage",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which page replacement algorithm replaces the page that has not been used for the longest time in the past?",
    options: ["FIFO", "LRU", "FCFS", "Priority Scheduling"],
    answer: "LRU",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which of the following is a necessary condition for deadlock?",
    options: ["Circular wait", "Unlimited memory", "No resource sharing", "All processes completed"],
    answer: "Circular wait",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the main purpose of a file system?",
    options: [
      "To organize and manage files on storage devices",
      "To schedule CPU instructions only",
      "To design applications",
      "To increase network bandwidth"
    ],
    answer: "To organize and manage files on storage devices",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which of the following is a type of system call?",
    options: ["File management", "Web styling", "Image filtering", "Spreadsheet formatting"],
    answer: "File management",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What does an interrupt allow a computer system to do?",
    options: [
      "Respond to an event that needs attention",
      "Permanently delete the operating system",
      "Prevent all processes from running",
      "Increase disk capacity automatically"
    ],
    answer: "Respond to an event that needs attention",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which of the following is a benefit of multiprogramming?",
    options: [
      "Better CPU utilization",
      "No need for memory",
      "Only one program can run",
      "It removes the operating system"
    ],
    answer: "Better CPU utilization",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is a critical section?",
    options: [
      "A part of a program that accesses shared resources",
      "A section of a hard disk",
      "The computer startup screen",
      "A file backup folder"
    ],
    answer: "A part of a program that accesses shared resources",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which technique helps prevent a process from continuously waiting for a resource by gradually increasing its priority?",
    options: ["Aging", "Thrashing", "Paging", "Spooling"],
    answer: "Aging",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which disk scheduling algorithm serves requests in the order they arrive?",
    options: ["SCAN", "C-SCAN", "FCFS", "SSTF"],
    answer: "FCFS",
    subject: "Computer Science",
    testNumber: 4,
    marks: 1
  }
];

seedQuestionSet(questions);
