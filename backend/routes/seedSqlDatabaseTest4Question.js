const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which SQL command is used to create a new database?",
    options: ["MAKE DATABASE", "CREATE DATABASE", "NEW DATABASE", "ADD DATABASE"],
    answer: "CREATE DATABASE",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which operator checks whether a value falls within a range?",
    options: ["IN", "LIKE", "BETWEEN", "RANGE"],
    answer: "BETWEEN",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which SQL keyword removes duplicate rows from query results?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"],
    answer: "DISTINCT",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which command is used to save a transaction permanently?",
    options: ["SAVE", "COMMIT", "ROLLBACK", "UPDATE"],
    answer: "COMMIT",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which command is used to undo changes made in a transaction that has not been committed?",
    options: ["UNDO", "CANCEL", "ROLLBACK", "REVOKE"],
    answer: "ROLLBACK",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which SQL clause groups rows that have the same values?",
    options: ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
    answer: "GROUP BY",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which database object stores the result of a query and can be queried like a table?",
    options: ["View", "Trigger", "Index", "Constraint"],
    answer: "View",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What is the main purpose of an index in a database?",
    options: [
      "To delete records",
      "To speed up data retrieval",
      "To encrypt all data",
      "To create duplicate records"
    ],
    answer: "To speed up data retrieval",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which SQL command is used to modify the structure of an existing table?",
    options: ["CHANGE", "UPDATE", "ALTER TABLE", "EDIT TABLE"],
    answer: "ALTER TABLE",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which aggregate function returns the total of numeric values?",
    options: ["TOTAL()", "ADD()", "SUM()", "COUNT()"],
    answer: "SUM()",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which key uniquely identifies a row in a table?",
    options: ["Foreign Key", "Primary Key", "Duplicate Key", "Secondary Value"],
    answer: "Primary Key",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which relationship means one row in a table can relate to many rows in another table?",
    options: ["One-to-one", "One-to-many", "Many-to-one only", "No relationship"],
    answer: "One-to-many",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which SQL condition checks whether a column has no value represented by NULL?",
    options: ["= NULL", "IS NULL", "EQUALS NULL", "NULL CHECK"],
    answer: "IS NULL",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which normal form removes transitive dependencies?",
    options: ["1NF", "2NF", "3NF", "0NF"],
    answer: "3NF",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which SQL command is commonly used to give a database user permissions?",
    options: ["GRANT", "COMMIT", "SELECT", "ROLLBACK"],
    answer: "GRANT",
    subject: "Database & SQL",
    testNumber: 4,
    marks: 1
  }
];

seedQuestionSet(questions);
