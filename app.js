/* eslint-disable no-console */
// import functions
import * as Calculate from './calculations.js';

// reference needed DOM elements
const numInput1 = document.getElementById('num-input-1'); 
const numInput2 = document.getElementById('num-input-2'); 
const equalsBtn = document.getElementById('equals-btn');
const printResult = document.getElementById('print-result');
const operatorActive = document.getElementById('operator-active');
const operatorList = [];
const operatorListSize = document.getElementById('button-pad').childElementCount - 1;

for (let i = 0; i < operatorListSize; i++){
    operatorList[i] = document.getElementById(String(i));
    operatorList[i].addEventListener('click', () => {
        operatorActive.textContent = operatorList[i].name;
        operatorActive.name = operatorList[i].name;
    });
}

// set event listeners
equalsBtn.addEventListener('click', () => {
    // get user input(s)
    const x = Number(numInput1.value);
    const y = Number(numInput2.value);
    const operatorToResult = operatorActive.name;
    let result = 0; 

    // do any needed work with the value(s)
    switch (operatorToResult) {
        case '+':
            result = Calculate.add(x, y);
            break;
        case '-':
            result = Calculate.subtract(x, y);
            break;
        case 'x':
            result = Calculate.multiply(x, y);
            break;
        case '/d':
            result = Calculate.divide(x, y);
            break;
        case '**':
            result = Calculate.exponent(x, y);
            break;
        case 'c2':
            result = Calculate.pythagFindC(x, y);
            break;
        case 'H':
            result = Calculate.pythagFindH(x, y);
            break;
        case '/i':
            result = Calculate.intDivide(x, y);
            break;
        case '%':
            result = Calculate.modulo(x, y);
            break;
        default:
            result = Calculate.add(x, y);
            break;
    }
    
    // update DOM to reflect new value(s)
    printResult.textContent = result;
});



//Console log history:
//
// console.log('', numInput1, '\n', numInput2, '\n', equalsBtn, '\n', printResult);
// console.log('Add button clicked.');
// console.log(add);
// console.log(x, y);
// console.log(sum); 
//