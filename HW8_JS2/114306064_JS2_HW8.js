var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

function calculate(){
	var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operator = document.getElementById('operator').value;
    var resultDisplay = document.getElementById('result');
    var Button = document.getElementById("Button");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    var result;

    switch(operator){
    case'+':
        Button.innerText = "Add";
    	result = add(num1, num2);
    	break;
    case'-':
        Button.innerText = "Subtract";
    	result = subtract(num1, num2);
    	break;
    case'*':
        Button.innerText = "Multiply";
    	result = multiply(num1, num2);
    	break;
    case'/':
        Button.innerText = "Divide";
    	result = divide(num1, num2);
        break;
    }
  resultDisplay.textContent = result.toFixed(2);
}