import readlineSync, { question } from 'readline-sync';
import { getName, gameConst } from '..';
import { getRandNum, plus, minus, mult } from '../libs';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const calcGame = () => {
  const desk = 'Welcome to Brain Games! What is the result of the expression?';
  const numsGen = () => cons(getRandNum(), getRandNum());

  

  const QAcalc = (num = 1) => {
    const nums1 = numsGen();
    const nums2 = numsGen();
    const nums3 = numsGen();

    const question1 = `${car(nums1)} + ${cdr(nums1)}`;
    const question2 = `${car(nums2)} - ${cdr(nums2)}`;
    const question3 = `${car(nums3)} * ${cdr(nums3)}`;

    const answer1 = car(nums1) + cdr(nums1);
    const answer2 = car(nums2) - cdr(nums2);
    const answer3 = car(nums3) * cdr(nums3);

    if (num == 1) return cons(question1, answer1);
    if (num == 2) return cons(question2, answer2);
    if (num == 3) return cons(question3, answer3);
  }
  return gameConst(QAcalc, desk);
};

export default calcGame
