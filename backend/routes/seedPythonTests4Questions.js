const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of print(7 // 2)?",
    options: ["3.5", "3", "4", "2"],
    answer: "3",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method converts a string into a list of words using spaces by default?",
    options: ["split()", "join()", "strip()", "replace()"],
    answer: "split()",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which keyword is used to create a generator function?",
    options: ["return", "yield", "generate", "async"],
    answer: "yield",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of print(3 == 3.0)?",
    options: ["True", "False", "3.0", "Error"],
    answer: "True",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which built-in function combines elements from multiple iterables?",
    options: ["combine()", "merge()", "zip()", "pair()"],
    answer: "zip()",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which exception occurs when accessing a missing dictionary key using square brackets?",
    options: ["IndexError", "KeyError", "ValueError", "NameError"],
    answer: "KeyError",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of print([x * 2 for x in range(3)])?",
    options: ["[0, 1, 2]", "[2, 4, 6]", "[0, 2, 4]", "[1, 2, 3]"],
    answer: "[0, 2, 4]",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method returns a list of dictionary keys?",
    options: ["values()", "items()", "keys()", "getKeys()"],
    answer: "keys()",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What does the 'is' operator check in Python?",
    options: [
      "Whether two values are equal",
      "Whether two references point to the same object",
      "Whether a variable is an integer",
      "Whether a string contains another string"
    ],
    answer: "Whether two references point to the same object",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which statement releases resources such as an open file automatically when its block ends?",
    options: ["with", "finally only", "release", "close"],
    answer: "with",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of print(abs(-15))?",
    options: ["-15", "15", "0", "Error"],
    answer: "15",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which method can check whether a string contains only numeric digits?",
    options: ["isalpha()", "isdigit()", "isupper()", "isspace()"],
    answer: "isdigit()",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which keyword refers to the current instance inside a Python instance method by convention?",
    options: ["this", "self", "current", "instance"],
    answer: "self",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the output of print(5 in [2, 5, 8])?",
    options: ["True", "False", "5", "Error"],
    answer: "True",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which standard-library module is commonly used to work with JSON data?",
    options: ["csv", "json", "pickletools", "xmlrpc"],
    answer: "json",
    subject: "Python Programming",
    testNumber: 4,
    marks: 1
  }
];

seedQuestionSet(questions);
