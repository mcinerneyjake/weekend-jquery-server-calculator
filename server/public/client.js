$(document).ready(onReady);

function onReady() {
  console.log('jQuery');
  $('#equalsButton').on('click', mathEquationOnSubmit);
  $('#clearButton').on('click', clearCalculator);
}

function mathEquationOnSubmit() {
  let newMathEquation = {
    firstNumber: Number($('#firstNumberInput').val()),
    secondNumber: Number($('#secondNumberInput').val()),
  };
  console.log(newMathEquation);
  clearCalculator();
}

/////////////////////////////////////////////////////////
// FUCTIONS TO BE PUT ONTO THE SERVER
function addNumbers(number1, number2) {
  let addedNumbers = number1 + number2;
  $('#equationContainer').append(addedNumbers);
}

function subtractNumbers(number1, number2) {
  let subtractedNumbers = number1 - number2;
  $('#equationContainer').append(subtractedNumbers);
}

function multiplyNumbers(number1, number2) {
  let multipliedNumbers = number1 * number2;
  $('#equationContainer').append(multipliedNumbers);
}

function divideNumbers(number1, number2) {
  let dividedNumbers = number1 / number2;
  $('#equationContainer').append(dividedNumbers);
}

function clearCalculator() {
  $('#firstNumberInput').val('');
  $('#secondNumberInput').val('');
}

function collectMathData() {}
/////////////////////////////////////////////////////////
