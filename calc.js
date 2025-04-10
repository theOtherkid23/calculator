let firstOperand = null
let secondOperand = null
let firstOperator = null
let secondOperator = null
let result = null
let displayValue = "0"

const display = document.querySelector(".display")
const displayText = document.querySelector(".outcomeText")
const numberBtn = document.querySelectorAll(".numberBtn")
const clearBtn = document.querySelector(".clear")
const allClearBtn = document.querySelector(".allClear")
const decimalBtn = document.querySelector(".decimal")
const operatorBtn = document.querySelectorAll(".operators")
const equalsBtn = document.querySelector(".equals")

const buttons = document.querySelectorAll('button').forEach((button) => {
    button.addEventListener("click", clickBtn)
})

function clickBtn(event){
    const btn = event.target
    updateDisplay()
    if(btn.id === "clear"){
        clear()
    }else if(btn.id === "equals"){
        console.log("calculate")
        equals()
    }else if(btn.id === "allClear"){
        console.clear()
        allClear()
    }else if(btn.id === "decimal"){
        decimal()
    }
    else{
        if(btn.id === "operand"){
            setOperand(btn.innerText)
        }else if(btn.id === "operator"){
            setOperator(btn.innerText)
        }
    }
}

function setOperand(operand){
    if(firstOperand === null && firstOperator === null){
        firstOperand = operand
        displayValue = operand
        updateDisplay()
        console.log("first operand:", firstOperand)
    }else if(firstOperand !==null && firstOperator === null){
        firstOperand += operand
        displayValue += operand
        updateDisplay()
        console.log("first operand", firstOperand)
    }else if(secondOperand === null && firstOperator !== null){
        secondOperand = operand
        displayValue = operand
        updateDisplay()
        console.log("second operand",secondOperand)
    }else if(secondOperand !== null && firstOperator !== null){
        secondOperand += operand
        displayValue += operand
        updateDisplay()
        console.log("second operand",secondOperand)
    }
}

function setOperator(operator){
    if(firstOperator === null){
        firstOperator = operator
        displayValue = firstOperand
        updateDisplay()
        console.log("first operator",firstOperator)
    }else if(firstOperator !== null && secondOperator === null){
        if(secondOperand === null){
            console.log("ERROR")
            //if there is two operators without a second operand
        }else{
            secondOperator = operator
            console.log("second operator", secondOperator)

            result = operate(Number(firstOperand),firstOperator, Number(secondOperand))
            displayValue = result
            updateDisplay()

            firstOperand = result
            secondOperand = null
            result = null
        }
}else if(firstOperator !== null && secondOperator !== null){
    secondOperator = operator
    result = operate(Number(firstOperand), secondOperator, Number(secondOperand))
    displayValue = result
    updateDisplay()

    firstOperand = result
    secondOperand = null
    result = null

    console.log("third and up calculation")
}
}

function equals(){
    if(firstOperator === null){
        displayValue = displayValue
    }else if(secondOperator !== null){
        result = operate(Number(firstOperand), secondOperator, Number(secondOperand))
        displayValue = result
        updateDisplay()
        console.log(result)
    }else{
        result = operate(Number(firstOperand), firstOperator, Number(secondOperand))
        displayValue = result
        updateDisplay()
        console.log(result)
    }
    console.log(firstOperand, secondOperand, firstOperator, secondOperator)

    /*firstOperand = null
    firstOperator = null
    secondOperand = null
    secondOperator = null*/

    console.log(firstOperand,firstOperator,secondOperand, secondOperator)
}

function operate(num1, operator, num2){
    if(operator === "+"){
        return num1 + num2
    }else if(operator === "-"){
        return num1 - num2
    }else if(operator === "*"){
        return num1 * num2
    }else if(operator === "/"){
        if(num2 !== 0){
            return num1 / num2
        }else{
            return "you can't divide by 0"
        }
    }
}

function clear(){
    if(secondOperand){
        secondOperand = secondOperand.split("").slice(0,-1).join("")
        displayValue = secondOperand
        console.log("second operand:",secondOperand)
    }else if(firstOperand){
        firstOperand = firstOperand.split("").slice(0,-1).join("")
        displayValue = firstOperand
        console.log("first operand:", firstOperand)
    }
    updateDisplay()
}

function allClear(){
    firstOperand = null
    secondOperand = null
    firstOperator = null
    secondOperator = null
    displayValue = 0
    updateDisplay()
}

function decimal(){
    if(secondOperand && !secondOperand.includes(".")){
        secondOperand = secondOperand + "."
        displayValue = secondOperand
    }
    if(firstOperand && !firstOperand.includes(".")){
        firstOperand = firstOperand + "."
        displayValue = firstOperand
    }
    updateDisplay()
}

function updateDisplay(){
    display.textContent = displayValue
}

