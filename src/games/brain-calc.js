import { runGame, askQuestion } from '../../src/index.js'

// Игра: "Калькулятор"
const brainCalc = () => {
  const first = Math.floor(Math.random() * 100) + 1
  const second = Math.floor(Math.random() * 100) + 1
  const operation = Math.floor(Math.random() * 3) + 1

  let result
  let message
  switch (operation) {
    case 1:
      result = first + second
      message = `${first} + ${second}`
      break
    case 2:
      result = first - second
      message = `${first} - ${second}`
      break
    case 3:
      result = first * second
      message = `${first} * ${second}`
      break
    default:
      console.log('Invalid operation')
  }
  askQuestion(message)
  return result
}

const rules = () => console.log('What is the result of the expression?')

const checkAnswer = (expected, actual) => expected === Number(actual)

export default () => runGame(rules, brainCalc, checkAnswer)
