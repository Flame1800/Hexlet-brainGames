import readlineSync, { question } from 'readline-sync';
import { getName, gameConst } from '..';
import { isEven, getRandNum } from '../libs';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const cgdGame = (num = 1) => {
    const desk = 'Welcome to Brain Games! Find the greatest common divisor of given numbers.'

    function divisorFind(a, b) {
        if (b) return divisorFind(b, a % b);
        else return Math.abs(a);
    }

    const QA = () => {
        const questionEven = cons(getRandNum(), getRandNum());
        const questionEvenString = toString(questionEven)
        const rightAnswer = divisorFind(car(questionEven), cdr(questionEven));
        return cons(questionEvenString, rightAnswer);
    }

    return gameConst(QA, desk);
};

export default cgdGame;