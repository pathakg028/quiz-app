const express = require('express');
const app = express();
const router = express.Router();
const quizQuestions = require('../models/quiz');

const seed = [
  {
    question: 'What does CSS stand for?',
    answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 3,
    category: 'css'
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answers: ['In the <head> section', 'In the <body> section', 'At the end of the document', 'You can\'t refer to an external style sheet'],
    correct: 1,
    category: 'css'
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: ['<style>', '<script>', '<headStyle>', '<css>'],
    correct: 1,
    category: 'css'
  },
  {
    question: 'Which HTML attribute is used to define inline styles?',
    answers: ['class', 'style', 'font', 'styles'],
    correct: 2,
    category: 'css'
  },
  {
    question: 'Which is the correct CSS syntax?',
    answers: ['{body:color=black;}', '{body;color:black;}', 'body:color=black;', 'body {color: black;}'],
    correct: 4,
    category: 'css'
  },
  {
    question: 'How do you insert a comment in a CSS file?',
    answers: ['\' this is a comment', '/* this is a comment */', '// this is a comment', '// this is a comment //'],
    correct: 2,
    category: 'css'
  },
  {
    question: 'Which property is used to change the background color?',
    answers: ['color', 'bgcolor', 'background-color', 'bgColor'],
    correct: 3,
    category: 'css'
  },
  {
    question: 'How do you add a background color for all <h1> elements?',
    answers: ['all.h1 {background-color:#FFFFFF;}', 'h1.setAll {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'h1 {background-color:#FFFFFF;}'],
    correct: 4,
    category: 'css'
  },
  {
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    answers: ['<javascript>', '<scripted>', '<script>', '<js>'],
    correct: 3,
    category: 'javascript'
  },
  {
    question: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
    answers: ['alertbox(“GeeksforGeeks”);', 'msg(“GeeksforGeeks”);', 'msgbox(“GeeksforGeeks”);', 'alert(“GeeksforGeeks”);'],
    correct: 4,
    category: 'javascript'
  },
  {
    question: 'What is the correct syntax for referring to an external script called “geek.js”?',
    answers: ['<script src=”geek.js”>', '<script href=”geek.js”>', '<script ref=”geek.js”>', '<script name=”geek.js”>'],
    correct: 1,
    category: 'javascript'
  },
  {
    question: 'Which of the following is not a reserved word in JavaScript?',
    answers: ['interface', 'throws', 'program', 'short'],
    correct: 3,
    category: 'javascript'
  },
  {
    question: 'Choose the correct JavaScript syntax to change the content of the following HTML code.\n <p id="geek">GeeksforGeeks</p>  ',
    answers: ['document.getElement(“geek”).innerHTML=”I am a Geek”;', 'document.getElementById(“geek”).innerHTML=”I am a Geek”;', 'document.getId(“geek”)=”I am a Geek”;', 'document.getElementById(“geek”).innerHTML=I am a Geek;'],
    correct: 2,
    category: 'javascript'
  },
  {
    question: 'Predict the output of the following JavaScript code.\n <script type="text/javascript">\na = 8 + "8";\ndocument.write(a);\</script> ',
    answers: ['16', 'Complilation Error', '88', 'Run Time Error'],
    correct: 3,
    category: 'javascript'
  },
  {
    question: 'Predict the output of the following JavaScript code.\n <script type="text/javascript">\nvar a="GeeksforGeeks"\nvar x=a.lastIndexOf("G");\ndocument.write(x);\n</script> ',
    answers: ['8', '0', '9', 'Error'],
    correct: 3,
    category: 'javascript'
  },
  {
    question: 'Which function of an Array object calls a function for each element in the array?',
    answers: ['forEach()', 'every()', 'forEvery()', 'each()'],
    correct: 1,
    category: 'javascript'
  },
];

// set our endpoint to list our data 
router.get('/quiz/seed', (request, response) => {
  quizQuestions.insertMany(seed)
    .then(data => {
      if (!data) return res.send(`Error inserting seed into todo-list on MongoDB!`);
      console.log(response)
      response.send(data);
    })
});

router.get('/', (request, response) => {
  quizQuestions.find()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.send(error);
    })
})

module.exports = router
