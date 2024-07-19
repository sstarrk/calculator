const display = document.querySelector("#screen");
display.textContent = 0;

const nums = document.querySelectorAll(".numbers");
nums.forEach((num) => {
    num.addEventListener("click", () => {
        if(display.textContent == "0") {
            display.textContent = num.textContent;
        } else {
            display.textContent = display.textContent.toString() + num.textContent.toString();
        }
        a = display.textContent;
    })
})

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

