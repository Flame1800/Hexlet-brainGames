#! /usr/bin/env node
import readlineSync, { question } from 'readline-sync';
import  getName  from '..';
import { isEven, getRandNum } from '../libs';
import cgdGame from "../games/brain-cgd"
import { cons, car, cdr, toString } from '@hexlet/pairs';

cgdGame();
