let firstNum = '';
let secondNum = '';
let operator = '';

const container = document.querySelector('#calculator')
const keypad = document.querySelector('#keypad')
const screen = document.querySelector('#screen')
const numbers = document.querySelector('#numbers')
const operators = document.querySelector('#commands')

numbers.childNodes.forEach((num) => {
    num.addEventListener('click', () => numberPressed(num.innerHTML))
})

operators.childNodes.forEach((op) => {
    op.addEventListener('click', () => operatorPressed(op.innerHTML))
})

const clear = document.getElementById('clear')

clear.addEventListener('click',() => {
    firstNum = ''
    secondNum = ''
    operator = ''
    screen.innerHTML = ''
})

const equals = document.getElementById('equals')
equals.addEventListener('click', () => operate())

function numberPressed(num) {
    if (operator === '') {
        firstNum += num

    } else {
        secondNum += num
    }
    screen.innerHTML = firstNum + operator + secondNum
}

function operatorPressed(op) {
    operator = op
    screen.innerHTML = firstNum + operator + secondNum
}

function updateDisplay(num) {
    screen.innerHTML = num
    firstNum = num
    operator = ''
    secondNum = ''
}

function add(firstNum, secondNum) {
    return firstNum+secondNum
}

function subtract(firstNum, secondNum) {
    return firstNum-secondNum
}

function multiply(firstNum, secondNum) {
    return firstNum*secondNum
}

function divide(firstNum, secondNum) {
    if (secondNum == 0){
        screen.innerHTML = "xxx ID-10T ERROR xxx"
        return 0
    }
    return firstNum/secondNum
}

function operate() {
    if (firstNum == '' || secondNum == '') {
        return
    }
    switch (operator) {
        case '+':
            return updateDisplay(add(firstNum,secondNum))
        case '-':
            return updateDisplay(subtract(firstNum,secondNum))
        case '*':
            return updateDisplay(multiply(firstNum,secondNum))
        case '/':
            return updateDisplay(divide(firstNum,secondNum))
    }
}