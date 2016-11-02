
// DOM elements
var InputNum1 = document.getElementById('InputNum1');
var InputNum2 = document.getElementById('InputNum2');
var AddButton = document.getElementById('AddButton');
var SubtractButton = document.getElementById('SubtractButton');
var MultiplyButton = document.getElementById('MultiplyButton');
var DivideButton = document.getElementById('DivideButton');
var ResetButton = document.getElementById('ResetButton');
var output = document.getElementById('output');

// Event listeners

AddButton.addEventListener("click", Add);
SubtractButton.addEventListener("click", Subtract);
MultiplyButton.addEventListener("click", Multiply);
DivideButton.addEventListener("click", Divide);
ResetButton.addEventListener("click", Reset);


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function Multiply(a,b) {
  output.innerHTML = InputNum1.value * InputNum2.value;
}
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function Add(a,b) {
  output.innerHTML = InputNum1.value + InputNum2.value;
}
// weird output for ADD = showing up 3 + 3 = 33, not 6

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function Subtract(a,b) {
  output.innerHTML = InputNum1.value - InputNum2.value;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function Divide(a,b) {
  output.innerHTML = InputNum1.value/InputNum2.value;
}


// Create a function to reset/clear user inputs without refreshing

function Reset() {
  output.innerHTML = "";
  InputNum1.value = "";
  InputNum2.value = "";
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
//  */

// function Calculate(operation, a, b) {
//   output.innerHTML = operation(InputNum1, InputNum2);
// }















