const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of console.log(typeof [])?",
    options: ["array", "object", "undefined", "list"],
    answer: "object",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "final"],
    answer: "let",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log(2 + '3')?",
    options: ["5", "23", "NaN", "undefined"],
    answer: "23",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: "push()",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log(Boolean(0))?",
    options: ["true", "false", "0", "null"],
    answer: "false",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which operator checks both value and type equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log(10 % 3)?",
    options: ["3", "1", "0", "3.33"],
    answer: "1",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: "JSON.parse()",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log(typeof null)?",
    options: ["null", "object", "undefined", "number"],
    answer: "object",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which array method creates a new array by transforming each element?",
    options: ["filter()", "map()", "find()", "forEach()"],
    answer: "map()",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log(3 === '3')?",
    options: ["true", "false", "3", "Error"],
    answer: "false",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["let", "var", "const", "change"],
    answer: "const",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What does the push() method return?",
    options: [
      "The first element",
      "The new array length",
      "The removed element",
      "The array index"
    ],
    answer: "The new array length",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which method returns the first element that matches a condition?",
    options: ["map()", "find()", "reduce()", "sort()"],
    answer: "find()",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of console.log('5' - 2)?",
    options: ["52", "3", "NaN", "undefined"],
    answer: "3",
    subject: "JavaScript Challenge",
    testNumber: 2,
    marks: 1
  }
];

seedQuestionSet(questions);
