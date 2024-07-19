let sum = 0;
let a;
let b;
let operator;

function add(a, b) {
    return sum = a + b;
}

function subtract(a, b) {
    return sum = a - b;
}

function multiply(a, b) {
    return sum = a * b;
}

function divide(a, b) {
    return sum = a / b;
}

function operate(a, operator, b){
    if(operator == "+") {
        add(a, b);
    } else if(operator == "-") {
        subtract(a, b);
    } else if(operator == "*") {
        multiply(a, b);
    } else if(operator == "/") {
        divide(a, b);
    }
}