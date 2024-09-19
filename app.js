const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Questions for the quiz about Limpopo Province
const questions = [
  {
    question: 'What is the capital city of Limpopo Province?',
    options: ['1) Polokwane', '2) Thohoyandou', '3) Lephalale', '4) Makhado'],
    answer: 1 // Polokwane
  },
  {
    question: 'Which river forms part of the border between Limpopo and Zimbabwe?',
    options: ['1) Limpopo River', '2) Zambezi River', '3) Vaal River', '4) Olifants River'],
    answer: 1 // Limpopo River
  },
  {
    question: 'Which national park is located in Limpopo Province?',
    options: ['1) Kruger National Park', '2) Addo Elephant National Park', '3) Pilanesberg National Park', '4) Limpopo National Park'],
    answer: 4 // Limpopo National Park
  },
  {
    question: 'What is the main language spoken in Limpopo Province?',
    options: ['1) Afrikaans', '2) Zulu', '3) Sepedi', '4) Xhosa'],
    answer: 3 // Sepedi
  },
  {
    question: 'Limpopo Province is known for which type of agriculture?',
    options: ['1) Wine production', '2) Citrus farming', '3) Wheat farming', '4) Sugarcane'],
    answer: 2 // Citrus farming
  }
];

// Constants
const QUIZ_DURATION = 30000; // 30 seconds total quiz time
const QUESTION_DURATION = 10000; // 10 seconds per question

let currentQuestionIndex = 0;
let score = 0;
let quizStartTime;
let quizTimer;

// Function to ask a question
function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const question = questions[currentQuestionIndex];
  console.log(`\n${question.question}`);
  question.options.forEach(option => console.log(option));

  let timeLeft = QUESTION_DURATION / 1000;
  let questionAnswered = false;

  // Timer to show remaining time for the question
  const questionInterval = setInterval(() => {
    if (!questionAnswered) {
      process.stdout.write(`\rTime remaining for this question: ${timeLeft} seconds`);
      timeLeft--;
    }

    if (timeLeft < 0) {
      clearInterval(questionInterval);
      if (!questionAnswered) {
        console.log('\nTime is up for this question!');
        currentQuestionIndex++;
        askQuestion();
      }
    }
  }, 1000);

  // Handle user input asynchronously
  rl.question('\nYour answer (number): ', answer => {
    if (!questionAnswered) {
      questionAnswered = true;
      clearInterval(questionInterval); // Clear the question interval

      if (parseInt(answer) === question.answer) {
        console.log('Correct!');
        score++;
      } else {
        console.log('Wrong!');
      }

      currentQuestionIndex++;
      askQuestion();
    }
  });
}

// Function to start the quiz
function startQuiz() {
  quizStartTime = Date.now();

  console.log('Quiz started!');
  askQuestion();

  // Timer for the total quiz duration
  quizTimer = setTimeout(() => {
    console.log('\nQuiz time is up!');
    endQuiz();
  }, QUIZ_DURATION);
}

// Function to end the quiz and exit the program
function endQuiz() {
  console.log('\nQuiz finished!');
  console.log(`Your final score is: ${score}`);
  rl.close();
  process.exit(0); // Exit the program
}

// Start the quiz
startQuiz();
