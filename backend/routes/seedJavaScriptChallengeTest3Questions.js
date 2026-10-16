const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of console.log( typeof NaN )?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which array method returns a new array containing elements that pass a condition?",
    options: ["map()", "filter()", "find()", "push()"],
    answer: "filter()",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of console.log( Boolean('') )?",
    options: ["true", "false", "undefined", "null"],
    answer: "false",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which operator is used for exponentiation in JavaScript?",
    options: ["^", "**", "//", "%%"],
    answer: "**",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of console.log( '5' + 2 )?",
    options: ["7", "52", "NaN", "Error"],
    answer: "52",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "slice()", "unshift()"],
    answer: "pop()",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of console.log( 10 == '10' )?",
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "Object.toJSON()"],
    answer: "JSON.stringify()",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What does the Array.isArray() method check?",
    options: [
      "Whether a value is a string",
      "Whether a value is an array",
      "Whether a value is a number",
      "Whether an object is empty"
    ],
    answer: "Whether a value is an array",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["object", "class", "struct", "define"],
    answer: "class",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of console.log( 2 ** 3 )?",
    options: ["5", "6", "8", "9"],
    answer: "8",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which statement is used to handle errors in JavaScript?",
    options: ["try...catch", "if...else", "for...in", "switch...case"],
    answer: "try...catch",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of console.log( typeof undefined )?",
    options: ["null", "object", "undefined", "string"],
    answer: "undefined",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which array method adds one or more elements to the beginning of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "unshift()",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What does the === operator compare?",
    options: [
      "Only values",
      "Only data types",
      "Both value and data type",
      "Only variable names"
    ],
    answer: "Both value and data type",
    subject: "JavaScript Challenge",
    testNumber: 3,
    marks: 1
  }
];

seedQuestionSet(questions);
