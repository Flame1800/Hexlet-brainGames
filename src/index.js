import { getRandNum, plus, minus, mult } from './libs';
import readlineSync, { question } from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

export const getName = () => {

}

export const brainGames = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  return name;
}


export const gameConst = (QuestionAnswerGen, desk) => {
  console.log(desk)
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  
  const content = (QuestionAnswerGen, count = 0, q2 = question, q3 = question) => {

    if (count == 3) return console.log('Congratulations, ' + name + '!');
    
    let countAnswer = count + 1;

    const QuestionAnswer = QuestionAnswerGen(countAnswer);
    const question = car(QuestionAnswer);
    const rightAnswer = cdr(QuestionAnswer);

    console.log('Question: ' + question);
    const answer = readlineSync.question("Your answer: ");

    if (answer == rightAnswer) {
      console.log('Correct!');
      return content(QuestionAnswerGen, count += 1);
    }
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}! `)
      return content(QuestionAnswerGen, count);
    }
    else {
      console.log('Is wrong answer!');
      return content(QuestionAnswerGen, count);
    }
  }

  return content(QuestionAnswerGen);
}


