import readlineSync from 'readline-sync';

const hello = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hi ' + name + '!');
    return name;
}

export default hello;