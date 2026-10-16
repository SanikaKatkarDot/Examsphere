const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which SQL command is used to remove all rows matching a specific condition?",
    options: ["DROP", "DELETE", "ALTER", "CREATE"],
    answer: "DELETE",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL clause specifies a condition for grouped results?",
    options: ["WHERE", "ORDER BY", "HAVING", "DISTINCT"],
    answer: "HAVING",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which JOIN returns only rows with matching values in both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
    answer: "INNER JOIN",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which constraint ensures that a column cannot contain NULL values?",
    options: ["UNIQUE", "NOT NULL", "DEFAULT", "FOREIGN KEY"],
    answer: "NOT NULL",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL function returns the number of rows matching a query?",
    options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
    answer: "COUNT()",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which command is used to create a virtual table based on a query?",
    options: ["CREATE VIEW", "CREATE INDEX", "CREATE KEY", "CREATE ROW"],
    answer: "CREATE VIEW",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL operator checks whether a value matches any value in a list?",
    options: ["BETWEEN", "LIKE", "IN", "IS"],
    answer: "IN",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which command makes changes in a transaction permanent?",
    options: ["ROLLBACK", "COMMIT", "GRANT", "SAVEPOINT"],
    answer: "COMMIT",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which command can undo uncommitted changes in a transaction?",
    options: ["COMMIT", "DELETE", "ROLLBACK", "DROP"],
    answer: "ROLLBACK",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the purpose of a database index?",
    options: [
      "To speed up data retrieval",
      "To delete a database",
      "To change column names",
      "To store passwords only"
    ],
    answer: "To speed up data retrieval",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which key creates a relationship between two tables?",
    options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"],
    answer: "Foreign Key",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL condition is used to find values that are not NULL?",
    options: ["NOT NULL", "IS NOT NULL", "!= NULL", "NOT EQUAL NULL"],
    answer: "IS NOT NULL",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL command removes a view from a database?",
    options: ["DELETE VIEW", "REMOVE VIEW", "DROP VIEW", "CLEAR VIEW"],
    answer: "DROP VIEW",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which ACID property ensures that a transaction is completed fully or not at all?",
    options: ["Consistency", "Isolation", "Durability", "Atomicity"],
    answer: "Atomicity",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which SQL command is used to give permissions to a database user?",
    options: ["REVOKE", "GRANT", "COMMIT", "ROLLBACK"],
    answer: "GRANT",
    subject: "Database & SQL",
    testNumber: 5,
    marks: 1
  }
];

seedQuestionSet(questions);
