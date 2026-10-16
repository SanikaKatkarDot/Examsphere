const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of print(2 ** 3 ** 2)?",
    options: ["64", "512", "256", "36"],
    answer: "512",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which method removes and returns the last element of a list by default?",
    options: ["remove()", "delete()", "pop()", "clear()"],
    answer: "pop()",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of print(type(3.14).__name__)?",
    options: ["int", "float", "double", "decimal"],
    answer: "float",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which keyword skips the remaining statements in the current loop iteration?",
    options: ["break", "pass", "continue", "skip"],
    answer: "continue",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of print('Python'[0:3])?",
    options: ["Pyt", "yth", "Python", "Py"],
    answer: "Pyt",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which built-in function returns the largest item in a collection?",
    options: ["high()", "largest()", "max()", "top()"],
    answer: "max()",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "3.33"],
    answer: "1",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which file mode opens a file for appending data?",
    options: ["r", "w", "a", "x"],
    answer: "a",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
  question: "How is a parent class specified when defining a child class in Python?",
  options: [
    "class Child extends Parent:",
    "class Child(Parent):",
    "class Child inherits Parent:",
    "class Parent -> Child:"
  ],
  answer: "class Child(Parent):",
  subject: "Python Programming",
  testNumber: 3,
  marks: 1
},
  {
    question: "What is the output of print(list(range(2, 7, 2)))?",
    options: ["[2, 4, 6]", "[2, 4, 6, 8]", "[2, 3, 4, 5, 6]", "[0, 2, 4, 6]"],
    answer: "[2, 4, 6]",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which keyword creates an anonymous function in Python?",
    options: ["def", "lambda", "anonymous", "function"],
    answer: "lambda",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What does the __init__() method usually do in a Python class?",
    options: [
      "Deletes an object",
      "Initializes a new object's attributes",
      "Imports a module",
      "Ends a program"
    ],
    answer: "Initializes a new object's attributes",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which module provides functions for generating random values?",
    options: ["math", "random", "os", "time"],
    answer: "random",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the output of print('hello'.upper())?",
    options: ["hello", "Hello", "HELLO", "Upper"],
    answer: "HELLO",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which statement is used to import a module in Python?",
    options: ["include", "using", "import", "require"],
    answer: "import",
    subject: "Python Programming",
    testNumber: 3,
    marks: 1
  }
];

seedQuestionSet(questions);
