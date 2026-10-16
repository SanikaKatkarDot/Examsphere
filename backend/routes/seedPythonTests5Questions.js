const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "What is the output of print(17 % 5)?",
    options: ["2", "3", "5", "0"],
    answer: "2",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which method removes whitespace from both ends of a string?",
    options: ["trim()", "strip()", "remove()", "clean()"],
    answer: "strip()",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of print(list(range(4)))?",
    options: ["[1, 2, 3, 4]", "[0, 1, 2, 3]", "[0, 1, 2, 3, 4]", "[4]"],
    answer: "[0, 1, 2, 3]",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which keyword prevents a class method from receiving an automatic instance argument?",
    options: ["staticmethod", "static", "@staticmethod", "classmethod"],
    answer: "@staticmethod",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which built-in function returns the total of numeric values in an iterable?",
    options: ["count()", "total()", "sum()", "add()"],
    answer: "sum()",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of print('banana'.count('a'))?",
    options: ["2", "3", "4", "1"],
    answer: "3",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which data type is immutable?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    answer: "Tuple",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of print(round(3.14159, 2))?",
    options: ["3.14", "3.15", "3.1", "3.141"],
    answer: "3.14",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which function returns both the index and value while iterating over a sequence?",
    options: ["zip()", "enumerate()", "range()", "index()"],
    answer: "enumerate()",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which exception is raised when converting an invalid numeric string using int()?",
    options: ["TypeError", "IndexError", "ValueError", "KeyError"],
    answer: "ValueError",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which operator performs logical AND in Python?",
    options: ["&&", "&", "and", "AND"],
    answer: "and",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the output of print('Python'.lower())?",
    options: ["PYTHON", "Python", "python", "Error"],
    answer: "python",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which method returns the value for a dictionary key without raising KeyError when the key is missing?",
    options: ["find()", "get()", "search()", "value()"],
    answer: "get()",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What does the finally block do in exception handling?",
    options: [
      "Runs only when an exception occurs",
      "Runs only when no exception occurs",
      "Normally runs whether an exception occurs or not",
      "Stops the program immediately"
    ],
    answer: "Normally runs whether an exception occurs or not",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which file mode opens a file for reading and writing without truncating existing content?",
    options: ["w+", "r+", "x", "w"],
    answer: "r+",
    subject: "Python Programming",
    testNumber: 5,
    marks: 1
  }
];

seedQuestionSet(questions);
