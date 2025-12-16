import { runGame, askQuestion } from "../../src/index.js"

// Игра: "НОД"
const brainGcd = () => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

    const a = Math.floor(Math.random() * 100) + 1
    const b = Math.floor(Math.random() * 100) + 1

    askQuestion(`${a} ${b}`)

    return gcd(a, b)
}

const rules = () => console.log("Find the greatest common divisor of given numbers.")

const checkAnswer = (result, answer) => Number(answer) === result

export default function run() { return runGame(rules, brainGcd, checkAnswer) }