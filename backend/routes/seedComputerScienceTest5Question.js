const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which scheduling algorithm selects the process with the shortest remaining CPU time?",
    options: ["FCFS", "Shortest Remaining Time First", "Round Robin", "Priority Scheduling"],
    answer: "Shortest Remaining Time First",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the main advantage of using a multithreaded process?",
    options: [
      "Improved responsiveness",
      "No need for memory",
      "It removes the operating system",
      "It prevents all errors"
    ],
    answer: "Improved responsiveness",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which of the following is a non-preemptive CPU scheduling algorithm?",
    options: ["Round Robin", "Shortest Job First", "Preemptive Priority", "Shortest Remaining Time First"],
    answer: "Shortest Job First",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the purpose of a mutex?",
    options: [
      "To provide mutual exclusion when accessing shared resources",
      "To increase disk storage",
      "To replace the CPU",
      "To manage file extensions"
    ],
    answer: "To provide mutual exclusion when accessing shared resources",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which of the following can help prevent deadlock by avoiding circular wait?",
    options: [
      "Imposing a fixed order for requesting resources",
      "Increasing file names",
      "Disabling all processes",
      "Using more folders"
    ],
    answer: "Imposing a fixed order for requesting resources",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is external fragmentation?",
    options: [
      "Free memory is split into small scattered blocks",
      "A process uses no memory",
      "A file is stored twice",
      "The CPU stops permanently"
    ],
    answer: "Free memory is split into small scattered blocks",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which memory management technique divides logical memory into variable-sized segments?",
    options: ["Paging", "Segmentation", "Spooling", "Swapping"],
    answer: "Segmentation",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which page replacement algorithm replaces the page that will not be used for the longest time in the future?",
    options: ["FIFO", "LRU", "Optimal", "Round Robin"],
    answer: "Optimal",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the main role of the dispatcher in CPU scheduling?",
    options: [
      "To give control of the CPU to the selected process",
      "To create database tables",
      "To manage website styles",
      "To permanently store files"
    ],
    answer: "To give control of the CPU to the selected process",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which of the following is a common method of inter-process communication (IPC)?",
    options: ["Message passing", "CSS styling", "SQL sorting", "Image cropping"],
    answer: "Message passing",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What does the term 'race condition' refer to?",
    options: [
      "A result that depends on the timing or order of concurrent operations",
      "A process that finishes first",
      "A disk scheduling method",
      "A memory allocation table"
    ],
    answer: "A result that depends on the timing or order of concurrent operations",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which operating system component decides which ready process gets the CPU next?",
    options: ["CPU scheduler", "File manager", "Device driver", "Text editor"],
    answer: "CPU scheduler",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is internal fragmentation?",
    options: [
      "Unused space inside an allocated memory block",
      "Free memory split into scattered blocks",
      "A file system error",
      "A process waiting for the CPU"
    ],
    answer: "Unused space inside an allocated memory block",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which deadlock handling method checks whether allocating a resource will leave the system in a safe state?",
    options: [
      "Banker's algorithm",
      "Round Robin",
      "FIFO page replacement",
      "FCFS scheduling"
    ],
    answer: "Banker's algorithm",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which operating system structure keeps most services inside one large kernel?",
    options: ["Microkernel", "Monolithic kernel", "Layered user interface", "Virtual machine monitor only"],
    answer: "Monolithic kernel",
    subject: "Computer Science",
    testNumber: 5,
    marks: 1
  }
];

seedQuestionSet(questions);
