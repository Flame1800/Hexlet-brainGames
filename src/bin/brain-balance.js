#! /usr/bin/env node
import balanceGame from "../games/brain-balance"
import readlineSync, { question } from 'readline-sync';
import { getName, gameConst } from '..';
import { getRandNum, plus, minus, mult } from '../libs';
import { cons, car, cdr, toString } from '@hexlet/pairs';

balanceGame();