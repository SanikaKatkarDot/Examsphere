const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of console.log( typeof 'Hello' )?",
    options: ["object", "string", "text", "char"],
    answer: "string",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which function runs after another function completes or reaches a particular point?",
    options: ["Callback", "Constructor", "Getter", "Setter"],
    answer: "Callback",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of console.log([1, 2, 3].map(n => n * 2))?",
    options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]"],
    answer: "[2, 4, 6]",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which array method checks whether at least one element passes a condition?",
    options: ["every()", "some()", "filter()", "reduce()"],
    answer: "some()",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of console.log( Boolean([]) )?",
    options: ["true", "false", "undefined", "null"],
    answer: "true",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that remembers variables from its outer scope",
      "A method that closes a browser",
      "A loop that never ends",
      "A way to delete an object"
    ],
    answer: "A function that remembers variables from its outer scope",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which method converts a string into an array using a separator?",
    options: ["join()", "split()", "slice()", "concat()"],
    answer: "split()",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of console.log( null == undefined )?",
    options: ["true", "false", "null", "Error"],
    answer: "true",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which keyword refers to the current object in a regular method call?",
    options: ["self", "this", "current", "that"],
    answer: "this",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which Promise method is called when a Promise is fulfilled successfully?",
    options: ["catch()", "then()", "finally()", "reject()"],
    answer: "then()",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of console.log([10, 20, 30].indexOf(20))?",
    options: ["0", "1", "2", "-1"],
    answer: "1",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which statement skips the current loop iteration and continues with the next one?",
    options: ["break", "return", "continue", "exit"],
    answer: "continue",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of console.log(typeof 123n)?",
    options: ["number", "bigint", "object", "string"],
    answer: "bigint",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which operator provides a fallback only when the left side is null or undefined?",
    options: ["||", "&&", "??", "!="],
    answer: "??",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What does the finally() method on a Promise do?",
    options: [
      "Runs a cleanup callback when the Promise settles",
      "Always changes the result to true",
      "Cancels the Promise",
      "Converts the Promise into an array"
    ],
    answer: "Runs a cleanup callback when the Promise settles",
    subject: "JavaScript Challenge",
    testNumber: 5,
    marks: 1
  }
];

seedQuestionSet(questions);
