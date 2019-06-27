var quizIndex = 0;
var correctAnswer;
var totalCorrect = 0;
var seconds = 0;

const startQuiz = () => {
  setInterval(function () {
    seconds++;
    console.log(seconds);
  }, 1000);
};

const displayCategories = () => {
  const questionContainer = document.querySelector('.container');
  let categories = `
  <div class="select-category">
    <h1>Select Category</h1>
    <button class="categoory" onclick= 
    </div>`
  questionContainer.innerHTML = categories;
};

const resetBackground = () => {
  const answers = document.querySelectorAll('.answer');
  setTimeout(function () {
    answers.forEach((answer) => {
      answer.style.background = "white";
      displayQuestion(quizIndex);
    });
  }, 250);
};

const checkAnswer = (userAnswer) => {
  let id = `answer${userAnswer}`;
  let selectedAnswer = document.getElementById(id);
  if (userAnswer == correctAnswer) {
    selectedAnswer.style.background = "green";
    quizIndex++;
    totalCorrect++;
    resetBackground();
  } else {
    selectedAnswer.style.background = "red";
    quizIndex++;
    resetBackground();
  }
};

const displayResults = () => {
  const questionContainer = document.querySelector('.container');
  var message;
  if (totalCorrect > 4) {
    message = "You passed! Good on ya!";
  } else {
    message = "You failed! You suck! (Better luck next time)";
  }
  let displayContainer = `<div class="results">
    ${totalCorrect} out of 8 correct! <br> ${message} <br> You took ${seconds} seconds - way too slow!
    </div>`;
  questionContainer.innerHTML = displayContainer;
};

const displayQuestion = (index, category) => {
  axios.get('http://localhost:3000/' + category)
    .then((response) => {
      let numOfQuestions = response.data.length;
      if (quizIndex < numOfQuestions) {
        let data = response.data[index];
        correctAnswer = data.correct;
        const questionContainer = document.getElementById('question')
        questionContainer.innerText = data.question;
        const a1 = document.getElementById('answer1');
        const a2 = document.getElementById('answer2');
        const a3 = document.getElementById('answer3');
        const a4 = document.getElementById('answer4');
        a1.innerText = data.answers[0];
        a2.innerText = data.answers[1];
        a3.innerText = data.answers[2];
        a4.innerText = data.answers[3];
      } else {
        displayResults();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};