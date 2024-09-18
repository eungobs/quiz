const readline = require('readline');

// Define the questions and answers about Limpopo province
let questions = [
    { question: "What is the capital city of Limpopo province?", answer: "Polokwane" },
    { question: "Which river forms the northern and western borders of Limpopo province?", answer: "Limpopo River" },
    { question: "Name one of the main ethnic groups in Limpopo province.", answer: "Pedi" },
    { question: "What is the name of the UNESCO World Heritage site located in Limpopo province?", answer: "Mapungubwe National Park" },
    { question: "Which famous music festival is held in Limpopo province?", answer: "Oppikoppi" },
    { question: "What is the primary language spoken in Limpopo province?", answer: "Pedi" },
    { question: "Which mountain range in Limpopo is known for its ancient geological formations?", answer: "Waterberg Mountains" },
    { question: "What type of climate is found in the northern part of Limpopo province?", answer: "Hot, subtropical climate" },
    { question: "Which major national park is part of the Great Limpopo Transfrontier Park?", answer: "Kruger National Park" },
    { question: "What is the main economic activity in rural areas of Limpopo province?", answer: "Subsistence farming" }
];

// Initialize score and question index
let score = 0;
let currentQuestionIndex = 0;
let totalTime = 180; // Total quiz time in seconds (3 minutes)
let questionTime = 10; // Time per question in seconds
let rl;

// Function to start the quiz
function startQuiz() {
    console.log("Quiz started!");

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Timer for the total quiz duration
    let quizTimer = setInterval(() => {
        totalTime--;
        console.log(`Total time remaining: ${totalTime}s`);

        // End the quiz if time runs out
        if (totalTime <= 0) {
            clearInterval(quizTimer);
            endQuiz();
        }
    }, 1000);

    // Ask the first question
    askQuestion();
}

// Function to ask a question
function askQuestion() {
    // End the quiz if all questions are answered
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    let question = questions[currentQuestionIndex];
    console.log(`Question: ${question.question}`);

    // Timer for the current question
    let questionTimer = setInterval(() => {
        questionTime--;
        console.log(`Time remaining for this question: ${questionTime}s`);

        // Move to the next question if time runs out
        if (questionTime <= 0) {
            clearInterval(questionTimer);
            currentQuestionIndex++;
            questionTime = 10; // Reset question time
            askQuestion();
        }
    }, 1000);

    // Handle user input asynchronously
    rl.question("Your answer: ", (answer) => {
        clearInterval(questionTimer);
        questionTime = 10; // Reset question time

        // Error handling for empty input
        if (!answer.trim()) {
            console.log("Invalid input. Skipping question.");
        } else {
            // Check if the answer is correct
            if (answer.toLowerCase() === question.answer.toLowerCase()) {
                score++;
            }
        }

        // Move to the next question
        currentQuestionIndex++;
        askQuestion();
    });
}

// Function to end the quiz
function endQuiz() {
    console.log("Quiz ended!");
    console.log(`Your final score is: ${score}`);
    rl.close();
    process.exit();
}

// Start the quiz
startQuiz();


