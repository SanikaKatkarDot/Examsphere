const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which SQL command is used to retrieve data from a table?",
    options: ["GET", "SELECT", "FETCH ALL", "OPEN"],
    answer: "SELECT",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL clause is used to filter rows before grouping?",
    options: ["HAVING", "ORDER BY", "WHERE", "GROUP BY"],
    answer: "WHERE",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which function returns the average of a numeric column?",
    options: ["SUM()", "AVG()", "COUNT()", "MEAN()"],
    answer: "AVG()",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL command is used to add a new record to a table?",
    options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"],
    answer: "INSERT INTO",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which constraint prevents duplicate values in a column?",
    options: ["NOT NULL", "DEFAULT", "UNIQUE", "CHECK"],
    answer: "UNIQUE",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL operator is used to combine conditions when both must be true?",
    options: ["OR", "AND", "NOT", "IN"],
    answer: "AND",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which command is used to change the name of a table in MySQL?",
    options: ["CHANGE TABLE", "UPDATE TABLE", "RENAME TABLE", "MODIFY TABLE"],
    answer: "RENAME TABLE",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which JOIN returns all rows from the left table and matching rows from the right table?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"],
    answer: "LEFT JOIN",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL command removes specific rows based on a condition?",
    options: ["DROP", "TRUNCATE", "DELETE", "REMOVE"],
    answer: "DELETE",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which clause is used to arrange query results in ascending or descending order?",
    options: ["GROUP BY", "ORDER BY", "SORT BY", "ARRANGE"],
    answer: "ORDER BY",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which normal form removes repeating groups and requires atomic values?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "1NF",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What is the main purpose of a foreign key?",
    options: [
      "To sort records",
      "To connect related tables",
      "To encrypt data",
      "To remove duplicate rows"
    ],
    answer: "To connect related tables",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL function returns the smallest value in a column?",
    options: ["LOW()", "MIN()", "SMALL()", "FIRST()"],
    answer: "MIN()",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which command gives a user permission to access a database object?",
    options: ["ALLOW", "GRANT", "PERMIT", "ENABLE"],
    answer: "GRANT",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which SQL command is used to remove a user's permission?",
    options: ["REMOVE", "DENY ALL", "REVOKE", "DELETE ACCESS"],
    answer: "REVOKE",
    subject: "Database & SQL",
    testNumber: 3,
    marks: 1
  }
];

seedQuestionSet(questions);
