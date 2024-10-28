import path from 'path';
import chalk from 'chalk';

import { add, subtract, multiply, divide } from './my_modules/calculator.js';


const fileName = path.basename(new URL(import.meta.url).pathname);
console.log(chalk.green(`Current file: ${fileName}`));

const num1 = 10;
const num2 = 20;

console.log(chalk.green(`Addition of ${num1} and ${num2}: ${add(num1, num2)}`));

try {
    console.log(chalk.red(`Division of ${num1} by ${num2}: ${divide(num1, num2)}`)); 
} catch (error) {
    console.log(chalk.red(error.message));
}
