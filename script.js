const container = document.querySelector('#calculator')
const keypad = document.querySelector('#keypad')
const screen = document.querySelector('#screen')
const numbers = document.querySelector('#numbers')

numbers.childNodes.forEach((num) => {
    num.addEventListener('click', () => {
        screen.innerHTML += num.innerHTML
    })
})

const clear = document.getElementById('clear')

clear.addEventListener('click',() => {
    return screen.innerHTML = " "
})

function numberPressed(num) {
    screen.innerHTML += num
}

function add(num1, num2) {
    return num1+num2
}

function subtract(num1, num2) {
    return num1-num2
}

function multiply(num1, num2) {
    return num1*num2
}

function divide(num1, num2) {
    if (num2 == 0){
        return 0
    }
    return num1/num2
}

function operate(op, num1, num2) {
    switch (op) {
        case '+':
            return add(num1,num2)
        case '-':
            return subtract(num1,num2)
        case '*':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2)
    }
}