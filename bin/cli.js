import readlineSync from 'readline-sync';

export const cli = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('Your answer: May I have your name? ');
    console.log(`Hello, ${name}!`)
    return name
}
export default cli