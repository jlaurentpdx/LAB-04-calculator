/* eslint-disable no-console */
// import functions
// import * as Calculate from './calculations.js';
import { add } from './calculations.js';

// reference needed DOM elements
const numInput1 = document.getElementById('num-input-1'); 
const numInput2 = document.getElementById('num-input-2'); 
const equalsBtn = document.getElementById('equals-btn');
const printResult = document.getElementById('print-result');

// set event listeners
equalsBtn.addEventListener('click', () => {
    // get user input(s)
    const x = Number(numInput1.value);
    const y = Number(numInput2.value);

    // do any needed work with the value(s)
    const sum = add(x, y);
    
    // update DOM to reflect new value(s)
    printResult.textContent = sum;
});

//Console log history:
//
// console.log('', numInput1, '\n', numInput2, '\n', equalsBtn, '\n', printResult);
// console.log('Add button clicked.');
// console.log(add);
// console.log(x, y);
// console.log(sum); 
//