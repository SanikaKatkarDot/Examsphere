const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which HTML element is used to embed another webpage inside the current webpage?",
    options: ["<embedpage>", "<iframe>", "<framepage>", "<webview>"],
    answer: "<iframe>",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which CSS property specifies how an element's content behaves when it overflows its box?",
    options: ["overflow", "display", "visibility", "position"],
    answer: "overflow",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    options: ["shift()", "pop()", "spliceStart()", "remove()"],
    answer: "pop()",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which HTML attribute opens a hyperlink in a new browsing tab when set to _blank?",
    options: ["href", "rel", "target", "open"],
    answer: "target",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which CSS unit is relative to the viewport width?",
    options: ["vh", "vw", "rem", "pt"],
    answer: "vw",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which JavaScript method checks whether at least one array element passes a test?",
    options: ["every()", "some()", "filter()", "findIndex()"],
    answer: "some()",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which HTML element is used to define metadata about a webpage?",
    options: ["<meta>", "<data>", "<details>", "<info>"],
    answer: "<meta>",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which CSS property determines whether an element uses block, inline, or flex layout?",
    options: ["position", "display", "float", "visibility"],
    answer: "display",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which JavaScript method finds the first array element that satisfies a condition?",
    options: ["find()", "filter()", "map()", "reduce()"],
    answer: "find()",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which HTML input type is designed for entering an email address?",
    options: ["type='text'", "type='mail'", "type='email'", "type='address'"],
    answer: "type='email'",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "What is the main purpose of a media query in responsive web design?",
    options: [
      "To connect to a database",
      "To apply styles based on device or viewport conditions",
      "To execute JavaScript",
      "To encrypt webpage content"
    ],
    answer: "To apply styles based on device or viewport conditions",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which protocol is designed to secure HTTP communication using encryption?",
    options: ["FTP", "SMTP", "HTTPS", "Telnet"],
    answer: "HTTPS",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which JavaScript method converts an array into a string with a specified separator?",
    options: ["split()", "join()", "concatArray()", "stringify()"],
    answer: "join()",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which CSS pseudo-class selects an input element when it receives focus?",
    options: [":hover", ":checked", ":focus", ":visited"],
    answer: ":focus",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  },
  {
    question: "Which HTTP status code indicates that the server encountered an unexpected error?",
    options: ["201", "302", "401", "500"],
    answer: "500",
    subject: "Web Development",
    testNumber: 5,
    marks: 1
  }
];

seedQuestionSet(questions);
