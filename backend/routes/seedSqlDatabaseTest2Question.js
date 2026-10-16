const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which SQL command is used to modify existing records in a table?",
    options: ["CHANGE", "UPDATE", "ALTER", "MODIFY"],
    answer: "UPDATE",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which key uniquely identifies each record in a table?",
    options: ["Foreign Key", "Primary Key", "Candidate Key only", "Duplicate Key"],
    answer: "Primary Key",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL clause is used to filter groups after aggregation?",
    options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
    answer: "HAVING",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL function returns the number of rows?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
    answer: "COUNT()",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which constraint prevents NULL values in a column?",
    options: ["UNIQUE", "NOT NULL", "DEFAULT", "CHECK"],
    answer: "NOT NULL",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which JOIN returns only rows with matching values in both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
    answer: "INNER JOIN",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL command removes all rows from a table while keeping the table structure?",
    options: ["DROP", "DELETE DATABASE", "TRUNCATE", "REMOVE"],
    answer: "TRUNCATE",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which operator is used to search for a pattern in SQL?",
    options: ["MATCH", "LIKE", "SEARCH", "PATTERN"],
    answer: "LIKE",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which key establishes a relationship between two tables?",
    options: ["Primary Key", "Foreign Key", "Super Key", "Alternate Key"],
    answer: "Foreign Key",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL command is used to add a new column to an existing table?",
    options: ["UPDATE TABLE", "INSERT COLUMN", "ALTER TABLE", "ADD ROW"],
    answer: "ALTER TABLE",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which function returns the highest value in a column?",
    options: ["HIGH()", "TOP()", "MAX()", "UPPER()"],
    answer: "MAX()",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which clause sorts query results in ascending or descending order?",
    options: ["GROUP BY", "ORDER BY", "SORT", "ARRANGE BY"],
    answer: "ORDER BY",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which normal form removes partial dependency on a composite key?",
    options: ["1NF", "2NF", "3NF", "BCNF only"],
    answer: "2NF",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL command permanently removes a table and its structure?",
    options: ["DELETE", "TRUNCATE", "DROP", "CLEAR"],
    answer: "DROP",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which SQL operator checks whether a value matches any value in a specified list?",
    options: ["BETWEEN", "IN", "EXISTS ONLY", "LIKE"],
    answer: "IN",
    subject: "Database & SQL",
    testNumber: 2,
    marks: 1
  }
];

seedQuestionSet(questions);
