#!/usr/bin/env node
import { runGame, askQuestion } from "../../src/index.js"

function rules() {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
}

// Игра: "Проверка на чётность"
function brainEven() {
    const isEven = (num) => num % 2 === 0
    const number = Math.floor(Math.random() * 100) + 1
    askQuestion(number)
    return isEven(number) ? 'yes' : 'no'
}

function checkAnswer(result, answer) {
    return answer === result
}

export default function run() { return runGame(rules, brainEven, checkAnswer) }