// script.js

const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;

        if (value === 'AC') {
            currentInput = '';
            operator = '';
            operand1 = '';
            operand2 = '';
            display.textContent = '0';
        } else if (value === 'C') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (value === '=') {
            if (operand1 && operator && currentInput) {
                operand2 = currentInput;
                try {
                    currentInput = eval(`${operand1} ${operator} ${operand2}`);
                    display.textContent = currentInput;
                } catch {
                    display.textContent = 'Syntax Error';
                }
                operand1 = '';
                operator = '';
                operand2 = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operand1 = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            if (value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
