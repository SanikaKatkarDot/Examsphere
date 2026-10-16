const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of console.log(typeof function() {})?",
    options: ["object", "function", "undefined", "method"],
    answer: "function",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which array method combines all elements into a single value?",
    options: ["map()", "filter()", "reduce()", "find()"],
    answer: "reduce()",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of console.log([1, 2, 3].length)?",
    options: ["2", "3", "4", "undefined"],
    answer: "3",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which keyword pauses execution inside an async function until a Promise settles?",
    options: ["wait", "pause", "await", "defer"],
    answer: "await",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of console.log(1 + 2 + '3')?",
    options: ["123", "33", "6", "Error"],
    answer: "33",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method selects an HTML element using its ID?",
    options: [
      "document.querySelectorAll()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.createElement()"
    ],
    answer: "document.getElementById()",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of console.log(Boolean('false'))?",
    options: ["false", "true", "undefined", "null"],
    answer: "true",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which symbol is used for the spread operator in JavaScript?",
    options: ["...", "***", "&&", "=>"],
    answer: "...",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What does the Promise.all() method do?",
    options: [
      "Runs only the first Promise",
      "Waits for all Promises to fulfill, or rejects if one rejects",
      "Converts a Promise into a string",
      "Cancels all Promises automatically"
    ],
    answer: "Waits for all Promises to fulfill, or rejects if one rejects",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method returns an array's elements as a single string?",
    options: ["join()", "split()", "slice()", "concat()"],
    answer: "join()",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of console.log(5 === 5)?",
    options: ["true", "false", "5", "undefined"],
    answer: "true",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which keyword is used to inherit from another class in JavaScript?",
    options: ["implements", "extends", "inherits", "superclass"],
    answer: "extends",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method converts a string to lowercase?",
    options: ["toLowerCase()", "lower()", "lowerCase()", "caseLower()"],
    answer: "toLowerCase()",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of console.log(typeof [])?",
    options: ["array", "object", "list", "undefined"],
    answer: "object",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which event occurs when a user clicks an HTML element?",
    options: ["change", "hover", "click", "submit"],
    answer: "click",
    subject: "JavaScript Challenge",
    testNumber: 4,
    marks: 1
  }
];

seedQuestionSet(questions);
