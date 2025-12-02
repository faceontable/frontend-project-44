#!/usr/bin/env node
import {runGame, askQuestion} from "../../src/index.js"

const isEven = (num) => num % 2 === 0

// Игра: "Проверка на чётность"
function brainEven() {
    const number = Math.floor(Math.random() * 100) + 1
    askQuestion(number)
    return isEven(number) ? 'yes' : 'no'
}

function checkAnswer(result, answer) {
    return answer === result
}

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
runGame(brainEven, checkAnswer)