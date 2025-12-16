import { runGame, askQuestion } from "../../src/index.js"

function rules() {
    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")
}

// Игра "Простое ли число?"
function brainPrime() {
    const isPrime = (num) => {
        if (num < 2) {
            return false
        } else if (num === 2) {
            return true
        } else if (num % 2 === 0) {
            return false
        } else {
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                    return false
                }
            }
            return true
        }
    }
    const number = Math.floor(Math.random() * 100) + 1
    askQuestion(`${number}`)
    return isPrime(number) ? 'yes' : 'no'
}

function checkAnswer(result, answer) {
    return answer === result
}

export default function run() { return runGame(rules, brainPrime, checkAnswer) }