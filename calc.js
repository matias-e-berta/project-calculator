const nmbBtns = document.querySelectorAll(".numbers")
const display = document.querySelector("#display")
const oprBtns = document.querySelectorAll(".operator")
const decimal = document.getElementById("decimal")
const backspace = document.getElementById("backspace")
let frstOprnd = ''
let scndOprnd = ''
let operator = ''

// Stores a string of numbers in the operands and shows it on the display. Limits digit up to seven
function numberInput(value){
    if(operator === '' && frstOprnd.length < 10){
        frstOprnd += value;
        display.textContent = frstOprnd;
    } else if (operator !== '' && scndOprnd.length < 10){
        scndOprnd += value;
        display.textContent = scndOprnd;
    }
}

// Selects the desired operator and/or calls an operation function if both operands are stored
function chooseOperator(item){
    if(frstOprnd !== '' && scndOprnd === ''){
        operator = '';
    operator = item;
    } else if (frstOprnd !== '' && scndOprnd !== '') {
        operate(operator,Number(frstOprnd),Number(scndOprnd));
        operator = item;
        scndOprnd = '';
    }
}


function equals(){
    if(frstOprnd === '' || scndOprnd === '' || operator === ''){
        frstOprnd = ''
        scndOprnd = ''
        operator = ''
        return display.textContent = "Invalid operation"
    } else {
        operate(operator,Number(frstOprnd),Number(scndOprnd));
        scndOprnd = ''
        operator = ''
    }
}

function clear(){
     display.textContent = ''
     frstOprnd = ''
     scndOprnd = ''
     operator = ''
}

// Deletes last char of the operand that's being used
function correction(){
    if(operator === ''){
        frstOprnd = frstOprnd.slice(0,frstOprnd.length-1)
        display.textContent = frstOprnd;
    } else if (scndOprnd !== ''){
        scndOprnd = scndOprnd.slice(0,scndOprnd.length-1)
        display.textContent = scndOprnd;
    }
}

// Includes a floating point on the operands if not present
function floatPoint(){
    if(operator ===''){
        if(!frstOprnd.includes('.')){
            frstOprnd += decimal.textContent;
            display.textContent = frstOprnd;
        }
    } else if (operator !== ''){
        if(!scndOprnd.includes('.')){
            scndOprnd += decimal.textContent;
            display.textContent = scndOprnd;
        }
    }
}

window.addEventListener('keydown', e => {
    if(e.key == "=" || e.key == "Enter"){
        equals();
    }

    if(e.key == "c"){
        clear();
    }

    if(e.key == "Backspace"){
        correction();
    }

    if(e.key == "p"){
        chooseOperator("power")
    }

    if(e.key == "r"){
        chooseOperator("root")
    }

    if(e.key == "."){
        floatPoint();
    }

    oprBtns.forEach(item => {
        if(item.textContent == e.key){
            chooseOperator(e.key);
        };
    })
    
    nmbBtns.forEach(item => {
        if(item.textContent == e.key){
            numberInput(e.key);
        };
    })
} )


nmbBtns.forEach(item => item.addEventListener('click', () => {
    numberInput(item.textContent);
}))

oprBtns.forEach(item => item.addEventListener('click', () => {
    chooseOperator(item.textContent);
}))

document.getElementById("equal").addEventListener('click', equals)

document.getElementById("clear").addEventListener('click', clear)

backspace.addEventListener('click', correction)

decimal.addEventListener('click', floatPoint)

// Next four functions are basic math operations
function add(firstNumber,secondNumber) {
    frstOprnd = firstNumber+secondNumber;
    return display.textContent = (frstOprnd>9999999999) ? frstOprnd.toExponential(2) : frstOprnd;
}

function subs(firstNumber,secondNumber) {
    frstOprnd = firstNumber-secondNumber;
    return display.textContent = (frstOprnd<-9999999999) ? frstOprnd.toExponential(2) : frstOprnd;
}

function mult(firstNumber,secondNumber) {
    frstOprnd = Math.round((firstNumber*secondNumber)*10000)/10000;
    return display.textContent = (frstOprnd>9999999999) ? frstOprnd.toExponential(2) : frstOprnd;
}

function divide(firstNumber,secondNumber) {
    if (secondNumber == 0) return display.textContent = "Can't divide by 0";
    frstOprnd = Math.round((firstNumber/secondNumber)*10000)/10000;
    return display.textContent = frstOprnd;
}

// Calls any of the operation functions based on the selected operator 
// and using what's stored in frstOprnd and scndOprnd
function operate(operator, numberA, numberB) {
    switch (operator){
        case '+':
           return add(numberA,numberB);
            break;
        case '-':
            return subs(numberA,numberB);
            break;
        case '*':
            return mult(numberA,numberB);
            break;
        case '/':
            return divide(numberA,numberB);
            break;
        case 'power':
            return powerCalc(numberA,numberB);
            break;
        case 'root':
            return rootCalc(numberA,numberB);
            break;    
    }
}

// Added functions for exponents and roots
function powerCalc(firstNumber,secondNumber){
    frstOprnd = frstOprnd = Math.pow(firstNumber,secondNumber);
    return display.textContent = (frstOprnd>9999999999 || frstOprnd<-9999999999) ? frstOprnd.toExponential(2) : frstOprnd;
}

function rootCalc(firstNumber,secondNumber){
    frstOprnd = frstOprnd = Math.round(Math.pow(firstNumber,1/secondNumber)*10000)/10000;
    return display.textContent = frstOprnd;
}

document.getElementById("power").addEventListener("click", () => chooseOperator("power"))
document.getElementById("root").addEventListener("click", () => chooseOperator("root"))