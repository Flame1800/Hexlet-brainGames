import readlineSync, { question } from 'readline-sync';
import { getName, gameConst } from '..';
import { isEven, getRandNum } from '../libs';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const evenGame = (num = 1) => {
  const desk = 'Welcome to Brain Games! Answer "yes" if number even otherwise answer "no".'

  const QA = () => {
    const questionEven = getRandNum();
    const rightAnswer = isEven(questionEven); 
    return cons(questionEven, rightAnswer);
  }

  return gameConst(QA, desk);
};

export default evenGame;
