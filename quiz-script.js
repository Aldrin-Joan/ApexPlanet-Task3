const quizData = [
    {
      question: "What is the capital of France?",
      answers: { a: "Berlin", b: "Madrid", c: "Paris" },
      correct: "c"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: { a: "Charles Dickens", b: "William Shakespeare", c: "Mark Twain" },
      correct: "b"
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: { a: "Earth", b: "Jupiter", c: "Saturn" },
      correct: "b"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: { a: "Oxygen", b: "Gold", c: "Silver" },
      correct: "a"
    },
    {
      question: "What year did World War II end?",
      answers: { a: "1945", b: "1939", c: "1950" },
      correct: "a"
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: { a: "Asia", b: "Africa", c: "Europe" },
      correct: "b"
    },
    {
      question: "What is the capital of Japan?",
      answers: { a: "Seoul", b: "Beijing", c: "Tokyo" },
      correct: "c"
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: { a: "Leonardo da Vinci", b: "Pablo Picasso", c: "Vincent van Gogh" },
      correct: "a"
    },
    {
      question: "What is the chemical symbol for water?",
      answers: { a: "H2O", b: "O2", c: "CO2" },
      correct: "a"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: { a: "Mars", b: "Venus", c: "Mercury" },
      correct: "a"
    }
  ];
  
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const output = quizData.map((currentQuestion, questionNumber) => {
      const answers = Object.keys(currentQuestion.answers)
        .map(
          (letter) =>
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter}: ${currentQuestion.answers[letter]}
            </label>`
        )
        .join("");
      return `<div class="question">${currentQuestion.question}</div>
              <div class="answers">${answers}</div>`;
    });
    quizContainer.innerHTML = output.join("");
  }
  
  function showResults() {
    const quizContainer = document.getElementById("quiz");
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === currentQuestion.correct) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
  
    document.getElementById("results").innerHTML = `${numCorrect} out of ${quizData.length}`;
  }
  
  document.getElementById("submit").addEventListener("click", showResults);
  
  buildQuiz();
  