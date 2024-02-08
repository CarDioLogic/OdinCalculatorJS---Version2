let displayExpression = "";
let currentNumber = "";
let arrayExpression = [];
let screen = document.getElementById("screen");
var buttons = document.getElementsByName("btn");
const operatorRegex = /[+\-*\/]/;

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

function operate(number1, operator, number2){
    let numb1 = parseInt(number1);
    let numb2 = parseInt(number2);
    
    if (isNaN(numb1) || isNaN(numb2)) {
        alert("Invalid input");
    }

    switch(operator){
        case '+':
            return Sum(numb1, numb2);
            break;
        case '-':
            return Subtract(numb1, numb2);
            break;
        case '*':
            return Multiply(numb1, numb2);
            break;
        case '/':
            let result;
            numb2 == 0 ? alert("Cant divide by 0!"):  result = Divide(numb1, numb2);
            return result;
            break;
    }
}

function GetResult()
{
    PerformPriorityCalculations();

    let z = 0;

    while(arrayExpression.length > 1)
    {
        if(arrayExpression[z] == '+' || arrayExpression[z] == '-')
        {
            let result = operate(arrayExpression[z-1], arrayExpression[z], arrayExpression[z+1])
            arrayExpression.splice((z-1), 3, result); //replace an operation with a result in the array
            z -= 2; //when we splice the array the length changes so the i should update too.
        }
        z++;
    }

    displayExpression = arrayExpression[0];
    currentNumber = arrayExpression[0];
    screen.textContent = displayExpression;
    arrayExpression = [];
}

function PerformPriorityCalculations(){
    //performing all priority calculations
    for(let i = 0; i < arrayExpression.length; i++)
    {
        if(arrayExpression[i] == '*' || arrayExpression[i] == '/')
        {
            let result = operate(arrayExpression[i-1], arrayExpression[i], arrayExpression[i+1])
            arrayExpression.splice((i-1), 3, result); //replace an operation with a result in the array
            i -= 2; //when we splice the array the length changes so the i should update too.
        }
    }
}

function numberPressed(valueJustPressed){

if(operatorRegex.test(valueJustPressed))
{
    arrayExpression.push(currentNumber);

    currentNumber = valueJustPressed;
    arrayExpression.push(currentNumber);

    currentNumber = "";
}
else
{
    valueJustPressed != '=' ? currentNumber += valueJustPressed : currentNumber = currentNumber;
}

currentNumber != '=' ? displayExpression += valueJustPressed : displayExpression = "";
screen.textContent = displayExpression;

if(valueJustPressed == '='){
    arrayExpression.push(currentNumber);
    GetResult();
}

AdjustDisplayExpression();
}

function ResetCalculator()
{
    displayExpression = "";
    currentNumber = "";
    arrayExpression = [];
    screen.textContent = "";
}

function AdjustDisplayExpression(){
    if(displayExpression.length >= 32){
        displayExpression = displayExpression.substring(4);
        displayExpression = "..." + displayExpression;
    }

    //validate expression

    if(operatorRegex.test(displayExpression[0]))
    {
        alert("Operator Error!");
        ResetCalculator();
    }

    for(let i = 1; i < displayExpression.length; i++)
    {
        if(operatorRegex.test(displayExpression[i]) && operatorRegex.test(displayExpression[i-1]))
        {
            alert("Operator Error!");
            ResetCalculator();
        }
    }
}


