#! /usr/bin/env node
import readlineSync, { question } from 'readline-sync';
import  getName  from '..';
import { isEven, getRandNum } from '../libs';
import evenGame from "../games/brain-even"
import { cons, car, cdr, toString } from '@hexlet/pairs';

evenGame();
