// import functions
import * as Calculate from './calculations.js';

// reference needed DOM elements
const numInput1 = document.getElementById('num-input-1'); 
const numInput2 = document.getElementById('num-input-2'); 
const equalsBtn = document.getElementById('equals-btn');
const printResult = document.getElementById('print-result');

console.log('', numInput1, '\n', numInput2, '\n', equalsBtn, '\n', printResult);

// set event listeners
equalsBtn.addEventListener('click', () => {
    console.log('Add button clicked.');
});
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
