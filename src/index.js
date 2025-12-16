import readlineSync from 'readline-sync'
import { greetUserAndGetUserName, printGameResult } from '../src/cli.js'

// A generic function to run a game action
export function runGame(rules, action, checkAnswer) {
  const userName = greetUserAndGetUserName()

  rules()

  let rightAnswersCounter = 0

  while (rightAnswersCounter < 3) {
    const result = action()
    const answer = readlineSync.question('Your answer: ')
    const isCorrectAnswer = checkAnswer(result, answer)
    if (!isCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
      break
    }
    console.log('Correct!')
    rightAnswersCounter++
  }
  const success = rightAnswersCounter === 3

  printGameResult(success, userName)
}

// Function to ask a question
export function askQuestion(question) {
  console.log(`Question: ${question}`)
}
