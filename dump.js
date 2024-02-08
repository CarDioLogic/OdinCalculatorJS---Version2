/*
let completeExpression = "";
let currentNumber = "";
let arrayExpression = [];

var buttons = document.getElementsByName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var value = this.value;
    numberPressed(value);
  });
}

function Sum(number1, number2){
    return number1 + number2;
}

function Subtract(number1, number2){
    return number1 - number2;
}

function Multiply(number1, number2){
    return number1 * number2;
}

function Divide(number1, number2){
    return number1 / number2;
}

function operate(number1, number2, operator){
    switch(operator){
        case '+':
            return Sum(number1, number2);
            break;
        case '-':
            return Subtract(number1, number2);
            break;
        case '*':
            return Multiply(number1, number2);
            break;
        case '/':
            return Divide(number1, number2);
            break;
    }
}

function GetResult()
{
    let newArr = [];

    for(let i = 0; i < arrayExpression.length; i++)
    {
        if(arrayExpression[i] === "*" || arrayExpression[i] === "/")
        {
            let priorityExpression = GetPriorityCalculation(i);
            newArr.unshift(priorityExpression);
        }
        else
        {
            
        }
    }
}

//receives the index of a * or / and return the priorityExpression, which is a string that holds a
//sequence of calculations that need to be given priority.
function GetPriorityCalculation(i){
    let indexPre = i;
    let IndexFol = i;
    let priorityExpression = arrayExpression[i-1] + arrayExpression[i] + arrayExpression[i+1];

    let startIndex = arrayExpression[i-1];
    let endIndex = arrayExpression[i+1];
    
    if((indexPreceding -2) > 0) //the 1st element must be a number
    {
        do
        {
            indexPreceding -= 2;
            if(arrayExpression[indexPre] === '*' || arrayExpression[indexPre] === '/')
                priorityExpression += arrayExpression[indexPre - 1] + arrayExpression[indexPre];
            }
            else // this else will determine the sinal of the whole priority expression (+ or -)
            {
                priorityExpression += arrayExpression[indexPre];
            }
        }while(arrayExpression[indexPre] === '*' || arrayExpression[indexPre] === '/')
    }


    if((IndexFol + 2) < (arrayExpression.length - 1))
    {
        do
        {
            IndexFol += 2;
            if(arrayExpression[IndexFol] === '*' || arrayExpression[IndexFol] === '/')
            {
                priorityExpression += arrayExpression[IndexFol] + arrayExpression[IndexFol + 1];
            }
        }while(arrayExpression[IndexFol] === '*' || arrayExpression[IndexFol] === '/')
    }

    return priorityExpression
}

function numberPressed(numberJustPressed){
if(numberJustPressed === '+' || numberJustPressed === '-' ||
 numberJustPressed === '/' || numberJustPressed === '*')
 {
    arrayExpression.push(currentNumber);
    currentNumber = numberJustPressed;
    arrayExpression.push(currentNumber);
    currentNumber = "";
 }
 else
 {
    currentNumber += numberJustPressed;
 }

completeExpression += numberJustPressed;
let screen = document.getElementById("screen");
screen.textContent = completeExpression;
}



let arr = [1, 2, 3, 4, 5];

   for(let i = 0; i < arrayExpression.length; i++)
    {
        if(arr[i] === 3)
        {
            let result = arr[i-1] + arr[i] + arr[i+1];
            arr.splice((i-1), 3, result); 
        }
    }*/
