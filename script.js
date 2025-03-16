class Calculator {
    constructor(screenElement) {
        this.screenElement = screenElement;
        this.clear();
    }

    clear() {
        this.screenElement.value = '';
    }

    appendNumber(number) {
        this.screenElement.value += number;
    }

    appendOperator(operator) {
        this.screenElement.value += ` ${operator} `;
    }

    compute() {
        try {
            this.screenElement.value = eval(this.screenElement.value.replace(/×/g, '*').replace(/÷/g, '/'));
        } catch {
            this.screenElement.value = 'Error';
        }
    }
}

const screen = document.querySelector('#screen');
const calculator = new Calculator(screen);

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    switch (target.value) {
        case 'all-clear':
            calculator.clear();
            break;
        case '=':
            calculator.compute();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            calculator.appendOperator(target.value);
            break;
        default:
            calculator.appendNumber(target.value);
            break;
    }
});