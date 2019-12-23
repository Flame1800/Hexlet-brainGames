import getRandNum from './libs';
import readlineSync, { question } from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  return name;
}

export const brainGames = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  return name;
}

 
export const content = (question, boolAnswer, textAnswer = boolAnswer, breakAnswer, q2 = question, q3 = question) => {
  let count = 1;

  if (count == 3) {
    return console.log('Congratulations, ' + name + '!');
  }

  if (count == 1) console.log('Question: ' + question);
  if (count == 2) {
    console.log('Question: ' + q2);
    randNum = getRandNum(); 
    randNum2 = getRandNum(); 
  }
  if (count == 3) {
    console.log('Question: ' + q3);
    randNum = getRandNum(); 
    randNum2 = getRandNum(); 
  }

  const answer = readlineSync.question("Your answer: ");

  if (breakAnswer) {
    console.log('Is wrong answer!');
    return content(count);
  }

  if (answer == textAnswer) {
    if (boolAnswer) {
      console.log('Correct!');
      return content(count += 1);
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${RightAnswer}'. Let's try again, ${name}! `)
      return content(count);
    }
  }
}


