import readlineSync, { question } from 'readline-sync';
import { getName, gameConst } from '..';
import { getRandNum, plus, minus, mult } from '../libs';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const balanceGame = () => {
    const desk = 'Welcome to the Brain Game! Balance the given number.';
    const sumOfNumerals = (str) => {
        let sum = 0;
        for (let i = 0; i < str.length; i += 1) {
            sum += Number(str[i]);
        }
        return sum;
    }
    const makeString = (numeral, count) => {
        if (count === 0) {
            return '';
        }
        return `${numeral}${makeString(numeral, count - 1)}`;
    }

    const balanceNum = (num) => {
        const str = String(num);
        const len = str.length;
        const sum = sumOfNumerals(str);
        const minNum = Math.floor(sum / len);
        const maxNum = minNum + 1;
        const minNumCount = len * maxNum - sum;
        const maxNumCount = len - minNumCount;
        const stringOfMinNum = makeString(minNum, minNumCount);
        const stringOfMaxNum = makeString(maxNum, maxNumCount);
        return `${stringOfMinNum}${stringOfMaxNum}`;
    };

    const QAbalance = (num = 1) => {
        const question = String(getRandNum(1000));
        const answer = balanceNum(question);
        return cons(question, answer);
    }
    return gameConst(QAbalance, desk);
};

export default balanceGame
