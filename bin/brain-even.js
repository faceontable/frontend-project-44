#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from "./cli.js"

const userName = getUserName()

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

const isEven = (num) => num % 2 === 0

const brainEven = (predicate) => {
    const number = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ');
    const answerIsEven = answer === 'yes';
    const isCorrectAnswer = answerIsEven === predicate(number)
    if (isCorrectAnswer) {
        console.log('Correct!')
        return true
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${predicate(number) ? 'yes' : 'no'}'.`)
        return false
    }
}

let rightAnswersCounter = 0
while (rightAnswersCounter < 3) {
    if (!brainEven(isEven)) {
        break
    }
    rightAnswersCounter++
}

if (rightAnswersCounter === 3) {
    console.log(`Congratulations, ${userName}!`)
} else {
    console.log(`Let's try again, ${userName}!`)
}