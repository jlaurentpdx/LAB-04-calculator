// IMPORT MODULES under test here:
import { add } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 6); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
