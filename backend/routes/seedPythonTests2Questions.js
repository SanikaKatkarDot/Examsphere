const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/*", "<!--"],
    answer: "#",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which data type stores key-value pairs in Python?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Dictionary",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of print(10 // 3)?",
    options: ["3.33", "3", "4", "1"],
    answer: "3",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "define", "def", "fun"],
    answer: "def",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which method adds an element to the end of a list?",
    options: ["add()", "append()", "insertEnd()", "push()"],
    answer: "append()",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of print(len('Python'))?",
    options: ["5", "6", "7", "Error"],
    answer: "6",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "Tuple", "Set", "String"],
    answer: "Set",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: "**",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of print(bool(0))?",
    options: ["True", "False", "0", "None"],
    answer: "False",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which statement is used to handle exceptions?",
    options: ["try-except", "if-else", "for-in", "def-return"],
    answer: "try-except",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["str()", "float()", "int()", "bool()"],
    answer: "int()",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["object", "class", "struct", "new"],
    answer: "class",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What is the output of print([1, 2, 3][1])?",
    options: ["1", "2", "3", "Error"],
    answer: "2",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which loop is commonly used to iterate over a list?",
    options: ["foreach", "repeat", "for", "loop"],
    answer: "for",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which value represents the absence of a value in Python?",
    options: ["null", "undefined", "None", "void"],
    answer: "None",
    subject: "Python Programming",
    testNumber: 2,
    marks: 1
  }
];

seedQuestionSet(questions);
