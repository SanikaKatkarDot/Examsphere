const seedQuestionSet = require("../seedQuestionSet");

const questions = [
  {
    question: "Which HTML element is used to play video files on a webpage?",
    options: ["<media>", "<movie>", "<video>", "<play>"],
    answer: "<video>",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which CSS property controls the stacking order of positioned elements?",
    options: ["position", "z-index", "order", "layer"],
    answer: "z-index",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which JavaScript method adds an item to the beginning of an array?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    answer: "unshift()",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which HTML attribute makes a form field mandatory?",
    options: ["validate", "required", "mandatory", "needed"],
    answer: "required",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which CSS property makes an element's corners rounded?",
    options: ["border-style", "corner-radius", "border-radius", "round-edge"],
    answer: "border-radius",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which JavaScript event occurs when a user submits a form?",
    options: ["change", "click", "submit", "load"],
    answer: "submit",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which HTML element defines a navigation section?",
    options: ["<navigate>", "<nav>", "<menuitem>", "<links>"],
    answer: "<nav>",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which CSS rule is commonly used to apply styles based on screen width?",
    options: ["@font-face", "@keyframes", "@media", "@import"],
    answer: "@media",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which JavaScript array method creates a new array containing elements that pass a test?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: "filter()",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which HTML element is used to link an external CSS file?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    answer: "<link>",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Data Object Management",
      "Document Object Model",
      "Digital Ordinance Model",
      "Document Orientation Method"
    ],
    answer: "Document Object Model",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which CSS property controls the transparency of an element?",
    options: ["visibility", "opacity", "display", "filter-mode"],
    answer: "opacity",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which HTTP status code indicates that a request succeeded?",
    options: ["200", "400", "404", "500"],
    answer: "200",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which JavaScript operator checks both value and type equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  },
  {
    question: "Which HTML element is used to define a clickable button?",
    options: ["<click>", "<inputbox>", "<button>", "<action>"],
    answer: "<button>",
    subject: "Web Development",
    testNumber: 3,
    marks: 1
  }
];

seedQuestionSet(questions);
