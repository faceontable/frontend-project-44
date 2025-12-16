#!/usr/bin/env node
import { runGame, askQuestion } from '../../src/index.js'

function rules() {
  console.log('What number is missing in the progression?')
}

// Игра "Арифметическая прогрессия"
function brainProgression() {
  const currentElement = (start, step, index) => start + step * index
  const start = Math.floor(Math.random() * 100) + 1
  const step = Math.floor(Math.random() * 100) + 1
  const length = 10
  const missingIndex = Math.floor(Math.random() * length)
  const progression = []
  let result
  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      result = currentElement(start, step, i)
      progression[i] = '..'
    }
    else {
      progression.push(currentElement(start, step, i))
    }
  }
  askQuestion(`${progression.join(' ')}`)
  return result
}

function checkAnswer(result, answer) {
  return Number(answer) === result
}

export default () => runGame(rules, brainProgression, checkAnswer)
