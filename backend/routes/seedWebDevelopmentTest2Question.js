const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which HTML5 element is used to display a separate, self-contained piece of content?",
    options: ["<section>", "<article>", "<aside>", "<header>"],
    answer: "<article>",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which CSS property controls the space between an element's content and its border?",
    options: ["margin", "padding", "spacing", "gap"],
    answer: "padding",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTML attribute specifies the destination URL of a hyperlink?",
    options: ["src", "link", "href", "action"],
    answer: "href",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which JavaScript method selects an element using its ID?",
    options: [
      "document.querySelectorAll()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.createElement()"
    ],
    answer: "document.getElementById()",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which CSS layout system is designed mainly for arranging items in one dimension?",
    options: ["Grid", "Flexbox", "Float", "Position"],
    answer: "Flexbox",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTTP method is commonly used to retrieve data from a server?",
    options: ["POST", "DELETE", "GET", "PATCH"],
    answer: "GET",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<input>", "<option>", "<select>", "<list>"],
    answer: "<select>",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Styling System",
      "Colorful Style Syntax"
    ],
    answer: "Cascading Style Sheets",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "final"],
    answer: "let",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTML attribute provides alternative text for an image?",
    options: ["title", "alt", "caption", "description"],
    answer: "alt",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which CSS pseudo-class applies styles when the pointer is over an element?",
    options: [":active", ":focus", ":hover", ":visited"],
    answer: ":hover",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which JavaScript method converts a JSON string into a JavaScript value?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTML element is used to associate a caption with a table?",
    options: ["<label>", "<caption>", "<thead>", "<summary>"],
    answer: "<caption>",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which HTTP status code usually indicates that a resource was not found?",
    options: ["200", "301", "403", "404"],
    answer: "404",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  },
  {
    question: "Which CSS unit is relative to the root element's font size?",
    options: ["px", "em", "rem", "%"],
    answer: "rem",
    subject: "Web Development",
    testNumber: 2,
    marks: 1
  }
];

seedQuestionSet(questions);
