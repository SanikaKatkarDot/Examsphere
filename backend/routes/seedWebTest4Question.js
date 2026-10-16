const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which HTML element is used to create a progress bar?",
    options: ["<meter>", "<progress>", "<status>", "<range>"],
    answer: "<progress>",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which CSS property changes the order of items inside a Flexbox container?",
    options: ["position", "order", "flex-direction", "align-items"],
    answer: "order",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which JavaScript method converts an object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "Object.toJSON()"],
    answer: "JSON.stringify()",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which HTML element is used to provide a caption for a figure?",
    options: ["<caption>", "<figcaption>", "<legend>", "<label>"],
    answer: "<figcaption>",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which CSS property sets the space between columns in a Grid layout?",
    options: ["column-gap", "column-space", "grid-margin", "column-padding"],
    answer: "column-gap",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which JavaScript method runs a function once after a specified delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: "setTimeout()",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which HTML attribute specifies where a form should send its submitted data?",
    options: ["method", "target", "action", "name"],
    answer: "action",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which CSS selector selects all elements of a specified type?",
    options: ["Class selector", "ID selector", "Element selector", "Attribute selector"],
    answer: "Element selector",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which JavaScript method creates a new array by transforming each element?",
    options: ["filter()", "map()", "find()", "some()"],
    answer: "map()",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which browser storage mechanism keeps data after the browser is closed?",
    options: ["sessionStorage", "localStorage", "Temporary variable", "DOM storage cache only"],
    answer: "localStorage",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Application Process Internet",
      "Automated Programming Instruction"
    ],
    answer: "Application Programming Interface",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which HTTP method is commonly used to create a new resource on a server?",
    options: ["GET", "POST", "HEAD", "OPTIONS"],
    answer: "POST",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which CSS property controls the space outside an element's border?",
    options: ["padding", "margin", "outline", "content"],
    answer: "margin",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which web security attack injects malicious scripts into webpages viewed by other users?",
    options: ["Phishing", "Cross-Site Scripting (XSS)", "Brute force", "DDoS"],
    answer: "Cross-Site Scripting (XSS)",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  },
  {
    question: "Which JavaScript feature allows code to wait for a Promise to settle inside an async function?",
    options: ["defer", "await", "yield", "pause"],
    answer: "await",
    subject: "Web Development",
    testNumber: 4,
    marks: 1
  }
];

seedQuestionSet(questions);
