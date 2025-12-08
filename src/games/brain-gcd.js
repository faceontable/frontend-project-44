#!/usr/bin/env node
import { runGame, askQuestion } from "../../src/index.js"

function rules() {
    console.log("Find the greatest common divisor of given numbers.")
}

// Игра: "НОД"
function brainGcd() {
    const gcd = (a, b) => {
        if (b === 0) {
            return a
        } else {
            return gcd(b, a % b)
        }
    }
    const a = Math.floor(Math.random() * 100) + 1
    const b = Math.floor(Math.random() * 100) + 1

    askQuestion(`${a} ${b}`)
    return gcd(a, b)
}

function checkAnswer(result, answer) {
    return answer === result
}

export default function run() { return runGame(rules, brainGcd, checkAnswer) }