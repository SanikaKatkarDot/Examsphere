const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which of the following is a key function of an operating system?",
    options: ["Managing memory", "Designing websites", "Editing videos", "Creating slides"],
    answer: "Managing memory",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which state indicates that a process is waiting for a CPU?",
    options: ["Running", "Ready", "Blocked", "Terminated"],
    answer: "Ready",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is a context switch?",
    options: [
      "Switching from one user account to another",
      "Saving one process state and loading another",
      "Deleting a process",
      "Formatting memory"
    ],
    answer: "Saving one process state and loading another",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which scheduling algorithm selects the process with the shortest expected CPU burst?",
    options: ["FCFS", "Round Robin", "Shortest Job First", "FIFO Page Replacement"],
    answer: "Shortest Job First",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the main purpose of a semaphore?",
    options: [
      "To coordinate access to shared resources",
      "To increase disk capacity",
      "To store files permanently",
      "To compile programs"
    ],
    answer: "To coordinate access to shared resources",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which problem occurs when a process waits indefinitely because other processes keep getting resources?",
    options: ["Starvation", "Booting", "Paging", "Spooling"],
    answer: "Starvation",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is paging in memory management?",
    options: [
      "Dividing memory into fixed-size pages and frames",
      "Deleting unused files",
      "Increasing CPU speed",
      "Creating user accounts"
    ],
    answer: "Dividing memory into fixed-size pages and frames",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is a page fault?",
    options: [
      "A requested page is not currently in main memory",
      "A file is renamed",
      "A process finishes successfully",
      "The CPU is switched off"
    ],
    answer: "A requested page is not currently in main memory",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which page replacement algorithm removes the page that has been in memory the longest?",
    options: ["LRU", "FIFO", "Optimal", "Round Robin"],
    answer: "FIFO",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is fragmentation in memory management?",
    options: [
      "Wasted memory space caused by the way memory is allocated",
      "A method of backing up files",
      "A process scheduling algorithm",
      "A type of CPU register"
    ],
    answer: "Wasted memory space caused by the way memory is allocated",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which technique allows multiple processes to use a printer efficiently by placing jobs in a queue?",
    options: ["Paging", "Spooling", "Thrashing", "Swapping"],
    answer: "Spooling",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which of the following is an example of a real-time operating system?",
    options: ["FreeRTOS", "Microsoft Word", "MySQL", "HTML"],
    answer: "FreeRTOS",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What does thrashing mean in an operating system?",
    options: [
      "The system spends too much time swapping pages instead of executing processes",
      "The computer starts normally",
      "A file is permanently deleted",
      "The CPU is upgraded"
    ],
    answer: "The system spends too much time swapping pages instead of executing processes",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which system call is commonly used to create a new process in Unix-like operating systems?",
    options: ["fork()", "printf()", "strlen()", "scanf()"],
    answer: "fork()",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which of the following is necessary for deadlock to occur?",
    options: [
      "Mutual exclusion",
      "Unlimited resources",
      "No process waiting",
      "All resources being shareable"
    ],
    answer: "Mutual exclusion",
    subject: "Computer Science",
    testNumber: 3,
    marks: 1
  }
];

seedQuestionSet(questions);
