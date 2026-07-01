/* 
Your calculator is going to contain functions for all 
of the basic math operators you typically find on 
calculators, so start by creating functions for the 
following items and testing them in your 
browser’s console:
    add
    subtract
    multiply
    divide
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

/* 
2nd step:
*/
const firstNumber;
const operator;
const secondNumber;

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            subtract(firstNumber, secondNumber);
            break;
        case '*':
            multiply(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
    }
}