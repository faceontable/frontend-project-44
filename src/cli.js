import readlineSync from 'readline-sync';

// Function to greet the user and get their name
export function greetUserAndGetUserName() {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('Your answer: May I have your name? ');
    console.log(`Hello, ${name}!`)
    return name
}

// Function to print the game result
export function printGameResult(success, userName) {
    if (success) {
        console.log(`Congratulations, ${userName}!`)
    } else {
        console.log(`Let's try again, ${userName}!`)
    }
}