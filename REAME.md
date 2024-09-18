# Quiz Application

## Overview

This is a simple Node.js-based quiz application. The quiz consists of multiple questions about the Limpopo province, and it is designed to test the user’s knowledge within a set time limit. 

## Features

- **Timed Questions**: Each question has a countdown timer, and the total quiz duration is also timed.
- **Asynchronous Operations**: Questions are handled asynchronously to ensure smooth interaction without blocking the main event loop.
- **Dynamic Question Handling**: The quiz progresses to the next question automatically after the current question is answered or when the time for the question runs out.
- **Quiz Termination**: The quiz ends when all questions are answered or when the total time runs out. The final score is displayed upon termination.
- **Error Handling**: The application handles invalid user input and times out gracefully.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You can verify this by running:

Installation
Clone the repository:
git clone https://github.com/eungobs/quiz.git

Navigate to the project directory:
cd quiz-app

Install dependencies:
npm install

Install readline-sync:
npm install readline-sync

Running the Application
To start the quiz application, use the following command:
node app.js

Follow the on-screen prompts to answer the questions within the given time.

Project Structure
app.js: Main application logic, including quiz questions, timers, and user input handling.
index.html: Basic HTML structure (if used in the project).
style.css: CSS for styling (if used in the project).
package.json: Project metadata and dependencies.
package-lock.json: Automatically generated file to lock the versions of installed packages.
.gitignore: Specifies which files and directories should be ignored by Git.
