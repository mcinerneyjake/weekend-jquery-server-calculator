$(document).ready(onReady);

function onReady() {
  console.log('jQuery');
  $('#clearButton').on('click', clearCalculator);
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
/////////////////////////////////////////////////////////
